import Game from '../game';
import Stat from "../values/stat";
import Resource from "../items/resource";
import { toStats } from "../util/dataUtil";

import Events, { LEVEL_UP, NEW_TITLE, CHAR_TITLE, CHAR_NAME, CHAR_CLASS } from "../events";
import Wearable from "./wearable";
import GData from "../items/gdata";
import Char from './char';
import { RESOURCE, TEAM_PLAYER, getDelay } from "../values/consts";

import { NO_ATTACK } from "./states";

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
* Create a hall id so players can be unique per hall.
* @returns {string}
 */
const makeHallId = () => {
	return Math.random().toString(36);
}

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

	get team(){ return TEAM_PLAYER; }

	/**
	 * currently active title.
	 * @property {string} title
	 */
	get title() { return this._title; }
	set title(v) { this._title =v; }

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

	}

	/**
	 * @property {Wearable} weapon - primary weapon.
	 */
	get weapon() { return this._weapon; }
	set weapon(v) {

		if ( v ){
			this._weapon = v;
			if ( !(v instanceof Wearable) ) console.log('NON WEAPON: ' + v);
		} else {
			this._weapon = Fists;
		}
	}

	get alive() {return this._hp.value > 0; }

	/**
	 * @property {.<string,Stat>} hits - tohit bonuses per damage kind.
	 */
	get hits(){ return this._hits ? this._hits : (this._hits = {}) }
	set hits(v){ this._hits = toStats(v); }

	get hid(){return this._hid;}
	set hid(v){this._hid=v;}

	/**
	 * NOTE: Elements that are themselves Items are not encoded,
	 * since they are encoded in the Item array.
	 * @return {object}
	 */
	toJSON() {

		let data = {};

		data.hid = this.hid;

		data.defense = ( this.defense );
		data.tohit = ( this.tohit );
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
		data.hits = this.hits;
		data.immunities = this.immunities;
		data.resist = this.resist;

		data.retreat = this.retreat||undefined;

		data.gclass = this.gclass;

		if ( this.weapon ) data.weapon = this.weapon.id;

		return data;

	}

	/**
	 * Get player hit bonus for damage type.
	 * @param {*} kind
	 */
	getHit(kind){

		return this.tohit.valueOf() + ( kind ? this.hits[kind] || 0 : 0 );

		/*if ( kind && this.hits[kind] ) {
			console.log('TOHIT BONUS: ' + this.hits[kind].valueOf() )

		}
		return d;*/

	}

	get sp(){return this._sp;}
	set sp(v) {

		if ( v instanceof GData ) this._sp = v;
		else this._sp.value = v;

	}

	constructor( vars=null ){

		super(vars);

		this.context = Game;

		this.id = this.type = "player";
		if ( !vars || !vars.name) this.name = 'wizrobe';

		if ( !this.hid ) this.hid = makeHallId();

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

	}

	/**
	 *
	 * @param {string} gclass - name of class added
	 */
	setClass( gclass ) {

		this.gclass = gclass;
		this.setTitle( gclass );
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

			this.context.applyVars( 'hallPoints', 1 );
			this._titles.push(title);
			Events.emit( NEW_TITLE, title, this._titles.length );

		}

	}


	revive( state ) {

		super.revive(state);

		if ( this.weapon && (typeof this.weapon === 'string') ) this.weapon = state.equip.find( this.weapon );

		this.spells = state.getData('spelllist');
		if ( this.spells.max.value === 0 ) this.spells.max.value = this.level.valueOf();

		// copy in stressors to test player defeats.
		this.stressors = state.stressors;


	}

	/**
	 * Called once game actually begins. Dot-mods can't be applied
	 * before game start because they can trigger game functions.
	 */
	begin() {

		for( let i = this.dots.length-1; i>=0; i-- ){
			if ( this.dots[i].mod) this.context.applyMods( this.dots[i].mod, 1 );
		}

	}

	/**
	 * Determine if player has fully rested and can re-enter a locale.
	 */
	rested() {

		if ( !this.hp.maxed() && this.stamina.maxed()) return false;
		for( let i = this.stressors.length-1; i>=0; i--){

			if ( !this.stressors[i].maxed() ) return false;
		}
		return true;

	}

	defeated() {

		if ( this._hp.value <= 0 || this.stamina.value < 0 ) return true;
		for( let i = this.stressors.length-1; i>=0; i--){

			var s = this.stressors[i];
			if ( s.value >= s.max.value ) return true;
		}
		return false;

	}

	/**
	 * Get combat action.
	 * @param {*} dt
	 */
	combat(dt) {

		this.timer -= dt;
		if ( this.timer <= 0 ) {

			this.timer += getDelay(this.speed);

			let a = this.getCause( NO_ATTACK );
			if ( a ) return a;

			// attempt to use spell first.
			if ( this.spells.count === 0 || !this.tryCast() ) {
				return this.weapon.attack;
			}

		}

	}

	/**
	 * @returns {Resource[]} - list of all resources defined by Player.
	 */
	getResources() {

		let res =[];

		for( let p in this ) {

			var obj = this[p];
			if ( obj !== null && typeof obj === 'object' && obj.type === RESOURCE) res.push(obj);

		}

		return res;

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

		this.level.amount( this.context, 1 );

		this._exp.value -= this._next;
		this._next = Math.floor( this._next * ( 1 + EXP_RATE ) );

		this.dirty = true;

		Events.emit( LEVEL_UP, this, this._level.valueOf() );

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