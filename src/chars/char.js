import Base, {mergeClass} from '../items/base';
import {tryDamage} from '../composites/combat';
import Stat from '../values/stat';
import Dot from './dot';
import Attack from './attack';
import GameState from '../gameState';
import { NPC } from '../values/consts';
import { cloneClass } from '../util/util';

export const Dying = {

	id:"dying",
	name:"dying",
	kind:"death",
	dmg:1

}

/**
 * @constant {number} DELAY_RATE - speed to attack delay conversion constant.
 */
export const DELAY_RATE = 3.5;
export function getDelay(s) {
	return 0.5 + DELAY_RATE*Math.exp(-s/8);
}

export default class Char {

	get states() { return this._states; }
	set states(v) { this._states = v; }

	get defense() { return this._defense; }
	set defense(v) {

		if ( v instanceof Stat) this._defense = v;
		else if ( this._defense ) this._defense.base = v;
		else this._defense = new Stat( v, this.id+'.defense');


	}

	get tohit() { return this._tohit; }
	set tohit(v) {

		if ( v instanceof Stat) this._tohit = v;
		else if ( this._tohit ) this._tohit.base = v;
		else this._tohit = new Stat(v);

	}

	get resist() { return this._resist };
	set resist(v) { this._resist = v; }

	get speed() { return this._speed; }
	set speed(v) {

		this._speed = v instanceof Stat ? v : new Stat(v);
		this.delay = getDelay(v);

	}

	get immunities(){
		return this._immunities;
	}
	set immunities(v) {

		for( let p in v ) {

			var val = v[p];
			if ( !(val instanceof Stat) ) v[p] = new Stat(val);

		}

		this._immunities=v;
	}

	get attack() { return this._attack; }
	set attack(v) {

		if ( Array.isArray(v)) {

			let a = [];
			for( let i = v.length-1; i>=0; i-- ) {

				a.push( (v[i] instanceof Attack) ? v[i] : new Attack(v[i]) );

			}

			this._attack = a;

		} else this._attack = ( v instanceof Attack) ? v : new Attack(v);

	}

	get dots() { return this._dots; }
	set dots(v) {

		let a = [];

		for( let i = v.length-1; i >= 0; i-- ) {

			//var d = v[i] instanceof Dot ? v[i] : new Dot(v[i]);

			a.push( v[i] instanceof Dot ? v[i] : new Dot(v[i] ) );

		}

		this._dots = a;

	}

	get instance() { return true; }
	set instance(v) {}

	get regen() { return this._regen; }
	set regen(v) { this._regen = ( v instanceof Stat ) ? v : new Stat(v); }

	/*get died() { return this._died; }
	set died(v) { this._died = v; }*/

	get alive() { return this.hp.value > 0; }
	set alive(v) {}

	constructor( vars ){

		for( let p in vars ) {
			this[p] = vars[p];
		}

		this.type = NPC;

		this.states = this.states || {};
		this.immunities = this.immunities || {};
		this._resist = this._resist || {};

		//console.log( this.id + ' tohit: ' + this.tohit );

		/**
		 * @property {Object[]} dots - timed/ongoing effects.
		*/
		if ( !this.dots ) this.dots = [];

		/**
		 * @property {number} timer
		 */
		this.timer = this.timer || this.delay;

	}

	/**
	 * Revive from data after Game state restored.
	 * @param {GameState} state
	 */
	revive( state ){

		for( let i = this.dots.length-1; i>=0; i--) {
			this.dots[i].revive(state);
		}

		this.delay = getDelay( this.speed );

		if ( this.template ) {

			if ( !this.attack ) console.warn('NO ATTACK: ' + this.id );
			if ( !this.name ) this._name = it.name;

		}

		//console.log( this.id + ' THIS HP: ' + this.hp.value );
	}

	/**
	 * Called once game actually begins. Dot-mods can't be applied
	 * before game start because they can trigger game functions.
	 */
	begin() {
	}

	/**
	 * Base item of dot.
	 * @param {Dot} dot
	 * @param {object} source
	 * @param {string} name
	 */
	addDot( dot, source, name ) {

		let id = dot.id;
		if ( !id ) id = dot.id = name || (source ? source.id || source.name : '');
		if ( !id) return;

		let cur = this.dots.find( d=>d.id===id);
		if ( cur !== undefined ) {

			if ( cur.duration < dot.duration ) cur.duration = dot.duration;

		} else {

			if ( !(dot instanceof Dot)) dot = new Dot( cloneClass(dot), source, name );

			this.dots.push( dot );
			if ( dot.mod ) this.applyDot( dot );


		}

	}

	applyDot( dot ) {
		this.applyMods( dot.mod, 1 );
	}

	rmDot( i ){

		let dot = this.dots[i];
		this.dots.splice(i,1);

		if ( dot.mod ) {
			this.applyMods( dot.mod, -1 );
		}

	}

	update(dt) {

		for( let i = this.dots.length-1; i >= 0; i-- ) {

			var dot = this.dots[i];
			let dotTime = dot.tick(dt);

			if ( dotTime ) {

				if ( dot.duration <= 0 ) {
					this.rmDot(i);
				}
				if ( dot.damage ) {
					tryDamage( this, dot, dot.source );
				}

			}

		}

		if ( this.regen ) this.hp += ( this.regen*dt );

	}

	/**
	 * Get Combat action.
	 * @param {*} dt
	 */
	combat(dt) {

		if ( !this.alive ) return;

		this.timer -= dt;
		if ( this.timer <= 0 ) {

			this.timer += getDelay( this.speed );
			return this.getAttack();

		}

	}

	getAttack(){

		if ( Array.isArray(this.attack) ) return this.attack[ Math.floor( Math.random()*this.attack.length ) ];
		return this.attack || this;

	}

	hasStatus(stat) { return this.states[stat] > 0; }
	isImmune(kind) { return this.immunities[kind] > 0; }

	/**
	 * Roll a resistance check against the given damage type.
	 * @param {string} kind - kind of damage.
	 */
	tryResist(kind) {

		return ( this.resist && this.resist[kind] ) ? 100*Math.random() < this.resist[kind] : false;

	}

	/**
	 * @param {string} [kind=undefined]
	 * @returns {number} tohit.
	 */
	getHit(kind) {
		return this.tohit.valueOf();
	}

	/**
	 *
	 * @param {*} kind
	 * @returns {number} 0-based resist percent.
	 */
	getResist(kind) {

		return (this._resist[kind]||0)/100;
	}

	removeResist( kind, amt ) {
		if ( this._resist[kind] ) this._resist[kind] -= amt;
	}

	addResist( kind, amt ) {

		if ( !this._resist[kind] ) this._resist[kind] = amt;
		else this._resist[kind].base += amt;

	}

	addStatus(stat) {
		this.states[stat] = this.states[stat] ? this.states[stat] + 1 : 1;
	}

	removeStatus(stat) {
		this.states[stat] = this.states[stat] ? this.states[stat] - 1 : 0;
	}

	/**
	 *
	 * @param {string} kind
	 */
	addImmune(kind){
		this.immunities[kind] = this.immunities[kind] ? this.immunities[kind] + 1 : 1;
	}

	/**
	 *
	 * @param {string} kind
	 */
	removeImmune(kind) {
		this.immunities[kind] = this.immunities[kind] ? this.immunities[kind] - 1 : 0;
	}

}

mergeClass( Char, Base );