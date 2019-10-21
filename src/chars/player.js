import Stat from "../values/stat";
import Resource from "../items/resource";
import Game from '../game';
import { tryDamage } from '../composites/combat';

import Char, { getDelay } from './char';
import Events, { LEVEL_UP, NEW_TITLE, CHAR_TITLE, CHAR_NAME, CHAR_CLASS } from "../events";
import Wearable from "./wearable";
import GData from "../items/gdata";


const Fists = new Wearable({

	id:'baseWeapon',
	name:'fists',
	attack:{
		name:"fists",
		tohit:1,
		kind:'blunt',
		damage:"0~1"
	}

});

/**
 * @constant {number} EXP_RATE
 */
const EXP_RATE = 0.125;

export default class Player extends Char {

	get level() { return this._level; }
	set level(v) {

		if ( this._level && (typeof v === 'number') ) {

			this._level.value = v;

		} else this._level = v;

	}

	/**
	 * currently active title.
	 * @property {string} title
	 */
	get title() { return this._title; }
	set title(v) {
		this._title =v;
	}

	/**
	 * @property {string[]} titles
	 */
	get titles(){
		if ( this._titles == null ) this._titles = [];
		return this._titles;
	}
	set titles(v){
		this._titles = v;
	}

	get exp(){ return this._exp; }
	set exp(v) {

		if ( this._exp === undefined ) this._exp = v;
		else {

			this._exp.value = v;
			while ( this._next > 0 && this._exp.value >= this._next ) this.levelUp();

		}
	}

	/**
	 * @property {string} gclass - name of last game class attained.
	 */
	get gclass() { return this._gclass; }
	set gclass(v) { this._gclass = v; }

	/**
	 * @property {number} next - exp to level up.
	 */
	get next() { return this._next; }
	set next(v) { this._next = v;}

	get hp() { return this._hp; }
	set hp(v) {

		if ( this._hp ) this._hp.value = v;
		else if ( v instanceof GData ) this._hp = v;
		else console.error('Invalid Hp: ' + v );
	}

	get damage(){ return this._damage; }
	set damage(v) {
		this._damage = v instanceof Stat ? v : new Stat(v)
	}

	/**
	 * @property {Resource} speed
	 * speed normalized to an average of level=speed.
	 */
	get speed() { return this._speed; }
	set speed(v) {

		if ( this._speed ) this._speed.value = v;
		else if ( v instanceof GData ) this._speed = v;

		if ( this._speed ) {
			this.delay = getDelay( this._speed.value );
		} else console.warn('no speed: ' + this.id );

	}

	/**
	 * @property {Wearable} weapon - primary weapon.
	 */
	get weapon() { return this._weapon; }
	set weapon(v) {

		if ( v ){
			this._weapon = v;
			if ( !(v instanceof Wearable) ) console.log('NON WEAPON SOURCE');
		} else {
			this._weapon = Fists;
		}
	}

	get mount() { return this._mount; }
	set mount(v) {
		this._mount = v;
	}

	get alive() {return this._hp.value > 0; }

	get defeated() {

		if ( this._hp.value <= 0 ) return true;
		for( let i = this.stressors.length-1; i>=0; i--){

			var s = this.stressors[i];
			if ( s.value >= s.max.value ) return true;
		}
		return false;

	}

	/**
	 * NOTE: Elements that are themselves Items are not encoded,
	 * since they are encoded in the Item array.
	 * @return {object}
	 */
	toJSON() {

		let data = {};

		data.defense = ( this.defense );
		data.tohit = ( this.tohit );
		data.title = ( this.title );
		data.name = ( this.name );

		data.titles = this.titles;
		data.title = this.title;

		data.next = ( this.next );
		// attack timer.
		data.timer = ( this.timer );
		data.alignment = ( this.alignment );
		data.damage = ( this.damage );
		data.dots = ( this.dots );

		data.bonuses = this.bonuses;
		data.immunities = this.immunities;
		data.resist = this.resist;

		data.retreat = this.retreat||undefined;

		data.states = this.states;
		data.gclass = this.gclass;

		if ( this.weapon ) data.weapon = this.weapon.id;

		return data;

	}

	constructor( vars=null ){

		super(vars);

		this.id = this.type = "player";

		//if ( vars ) Object.assign( this, vars );

		if ( !this.level ) this.level = 0;
		this._title = this._title || 'waif';

		this.titles = this._titles || [];

		this._next = this._next || 50;

		this.retreat = this.retreat || 0;

		this.initStates();

		if ( !this.tohit) this.tohit = 1;
		if ( !this.defense ) this.defense = 0;

		this.alignment = this.alignment || 'neutral';

		if ( this.damage === null || this.damage === undefined ) this.damage = 1;

		if ( !this.weapon ) this.weapon = Fists;

		if ( !this.name) this.name = 'wizrobe';

	}


	setClass( gclass ) {

		this.gclass = gclass;
		Events.emit( CHAR_CLASS, this );

	}

	setName( name ) {

		if ( !name ) return;
		this.name = name;
		Events.emit( CHAR_NAME, this );

	}

	setTitle( title ) {

		if ( !title ) return;

		this.title = title;
		this.addTitle(title);

		Events.emit( CHAR_TITLE, this );

	}

	addTitle( title ){

		if ( !this._titles.includes(title) ) {

			Events.emit( NEW_TITLE, title );
			this._titles.push(title);

		}

	}


	revive( state ) {

		super.revive(state);

		if ( this.weapon && (typeof this.weapon === 'string') ) this.weapon = state.equip.find( this.weapon );

		this.spelllist = state.getData('spelllist');

		// copy in stressors to test player defeats.
		this.stressors = state.stressors;

	}

	/**
	 * Called once game actually begins. Dot-mods can't be applied
	 * before game start because they can trigger game functions.
	 */
	begin() {

		for( let i = this.dots.length-1; i>=0; i-- ){
			if ( this.dots[i].mod) Game.addMod( this.dots[i].mod, 1 );
		}

	}

	/**
	 * Perform update effects.
	 * @param {number} dt - elapsed time.
	 */
	update( dt ) {

		let updates = this.dots;
		let dot;

		for( let i = updates.length-1; i >= 0; i-- ) {

			dot = updates[i];
			if ( !dot.tick(dt) ) continue;

			// ignore any remainder beyond 0.
			// NOTE: dots tick at second-intervals.
			if ( dot.effect ) Game.applyEffect( dot.effect, 1 );
			if ( dot.damage ) tryDamage( this, dot, dot.source );

			if ( dot.duration <= dt ) {

				updates.splice( i, 1 );
				if ( dot.mod ) Game.addMod( dot.mod, -1 );

			}


		}
		if ( this.regen ) this.hp += this.regen*dt;

	}

	/**
	 * Get combat action.
	 * @param {*} dt
	 */
	combat(dt) {

		this.timer -= dt;
		if ( this.timer <= 0 ) {

			this.timer += getDelay(this.speed);

			// attempt to use spell first.
			if ( this.spelllist.count === 0 || !this.tryCast() ) {
				return this.weapon.attack;
			}

		}

	}

	/**
	 * try casting spell from player spelllist.
	 */
	tryCast(){

		if ( !this.spelllist.canUse(Game) ) return false;
		return this.spelllist.onUse(Game);

	}

	/**
	 * @returns {Resource[]} - list of all resources defined by Player.
	 */
	getResources() {

		let res =[];

		for( let p in this ) {

			var obj = this[p];
			if ( obj !== null && typeof obj === 'object' && obj.type === 'resource') res.push(obj);

		}

		return res;

	}

	/**
	 *
	 * @param {Dot} dot - dot to add.
	 */
	addDot( dot ) {

		let id = dot.id;

		let cur = id ? this.dots.find( d=>d.id===id) : undefined;
		if ( cur !== undefined ) {
			cur.duration = dot.duration;
		}
		else {

			if ( !dot.id ) {

				console.warn('MISSING DOT ID: ' + dot );
				return;

			}
			this.dots.push( dot );
			if ( dot.mod ) Game.addMod( dot.mod, 1 );

		}

	}

	/* getResist( kind ) {
		return this._resist[kind].value / 100;
	}*/

	removeResist( kind, amt ) {
		if ( this._resist[kind] ) this._resist[kind].base -= amt;
	}

	addResist( kind, amt ) {

		if ( !this._resist[kind] ) this._resist[kind] = new Stat( amt );
		else this._resist[kind].base += amt;

	}

	levelUp() {

		this._level.value++;

		this.dirty = true;
		if ( this._level % 3 === 0 ) this.sp.value++;
		if ( this._level % 5 === 0 ) Game.getData('minions').maxAllies.value++;
		if ( this._level % 4 === 0 ) Game.getData('speed').value++;

		Game.getData('spelllist').max += 1;

		this.tohit++;
		this.hp.max.base += 2;
		this.stamina.max.base += 1;

		this._exp.value -= this._next;
		this._next = Math.floor( this._next * ( 1 + EXP_RATE ) );

		Events.emit( LEVEL_UP, this );

	}

	/**
	 * Init immunities, resists, etc.
	 */
	initStates(){
		this._resist = this._resist || {};
		for( let p in this._resist ) {
			this._resist[p] = new Stat( this._resist[p]);
		}

		this.regen = this.regen || 0;

		this._states = this._states || {
			fly:0,
			sleep:0,
			swim:0,
			immortal:0,
			paralyzed:0,
			stoned:0,
			confused:0
		};

		if ( !this.immunities ) this.immunities = {
			fire:0,
			water:0,
			air:0,
			earth:0,
			light:0,
			shadow:0,
			arcane:0,
			physical:0,
			natural:0,
			poison:0,
			disease:0
		}

		if ( !this.bonuses ) this.bonuses = {
		}
	}

}