import Stat from "../values/stat";
import Resource from "../items/resource";
import Range from '../values/range';
import GData from "../items/gdata";
import Game from '../game';
import { tryDamage } from '../composites/combat';

import Char, { getDelay } from './char';
import Events, { LEVEL_UP, NEW_TITLE } from "../events";
import Attack from "./attack";
import Wearable from "./wearable";
import events from "../events";
import { logObj } from "../util/util";
import StatData from "../items/statData";

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
		this._level = v;
	}

	/**
	 * currently active title.
	 * @property {string} title
	 */
	get title() { return this._title; }
	set title(v) {
		this._title =v;
		if ( !this.titles.includes(v) ) this.titles.push(v);
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

	get className() { return this._className; }
	set className(v) { this._className = v; }

	/**
	 * @property {number} next - exp to level up.
	 */
	get next() { return this._next; }
	set next(v) { this._next = v;}

	get hp() { return this._hp; }
	set hp(v) {

		if ( this._hp ) this._hp.value = v;
		else if ( v instanceof Resource ) this._hp = v;
		else this._hp = new Resource( {value:v} );

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

	/**
	 * @property {Resource} speed
	 * speed normalized to an average of level=speed.
	 */
	get speed() { return this._speed; }
	set speed(v) {

		this._speed = v;
		this.delay = getDelay( this._speed.value );

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
		data.level = ( this.level );
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
		data.resists =this.resists;

		data.retreat = this.retreat||undefined;

		data.states = this.states;
		data.className = this.className;

		if ( this.primary ) data.primary = this.primary.id;
		if ( this.weapon ) data.weapon = this.weapon.id;

		return data;

	}

	constructor( vars=null ){

		super(vars);

		this.id = this.type = "player";

		//if ( vars ) Object.assign( this, vars );
		this._level = this._level || 0;
		this._title = this._title || 'waif';

		this.titles = this._titles || [];

		this._next = this._next || 50;

		this.retreat = this.retreat || 0;

		if ( !this.tohit) this.tohit = 1;
		if ( !this.defense ) this.defense = 0;

		this._resist = this._resist || {};
		for( let p in this._resist ) {
			this._resist[p] = new Stat( this._resist[p]);
		}

		this._states = this._states || {
			fly:0,
			sleep:0,
			swim:0,
			immortal:0,
			paralyzed:0,
			stoned:0,
			confused:0
		};

		this.immunities = this.immunities || {
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

		this.bonuses = this.bonuses || {
		}

		this.alignment = this.alignment || 'neutral';

		if ( this.damage === null || this.damage === undefined ) this.damage = 1;

		/**
		 * @property {Item} primary - primary attack.
		 */
		this.primary = this.primary || null;

		if ( !this.weapon ) this.weapon = Fists;

		this._name = this._name || 'wizrobe';

	}

	addTitle( title ){

		if ( !this._titles.includes(title) ) {

			events.emit( NEW_TITLE, title );
			this._titles.push(title);

		}

	}


	revive( state ) {

		super.revive(state);

		if ( this.weapon && (typeof this.weapon === 'string') ) this.weapon = state.equip.find( this.weapon );

		this.spelllist = state.getData('spelllist');

		this.primary = this.primary && typeof this.primary === 'string' ? state.getData( this.primary ) : this.primary;

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
			if ( dot.effect ) Game.applyEffect( dot.effect );
			if ( dot.damage ) tryDamage( this, dot, dot.source );

			if ( dot.duration <= dt ) {

				updates.splice( i, 1 );
				if ( dot.mod ) Game.addMod( dot.mod, -1 );

			} else dot.duration -= dt;


		}
		if ( this.regen ) this.hp += this.regen*dt;

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

		console.log('player resources: ' + res.length );

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

	/**
	 * Set primary spell attack.
	 * @param {GData} s
	 */
	setPrimary( s ) {

		if ( this.primary === s || ( s && !s.attack )) return;
		if ( this.primary !== null ) this.removePrimary();

		this.primary = s;

	}

	/**
	 * Clear primary spell attack.
	 */
	removePrimary() {
		//let p = this.primary;
		this.primary = null;
	}

	levelUp() {

		this._level++;

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

}