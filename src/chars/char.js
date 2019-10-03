import Base, {mergeClass} from '../items/base';
import { mergeSafe } from 'objecty';
import {tryDamage} from '../composites/combat';
import Stat from '../values/stat';
import Dot from './dot';
import Attack from './attack';
import GameState from '../gameState';
import { assignNoFunc, cloneClass } from '../util/util';
import Monster from '../items/monster';

/**
 * @constant {number} DELAY_RATE - speed to attack delay conversion constant.
 */
export const DELAY_RATE = 3;
export function getDelay(s) {
	return DELAY_RATE*Math.exp(-s/4);
}

export default class Char {

	get states() { return this._states; }
	set states(v) { this._states = v; }

	get defense() { return this._defense; }
	set defense(v) {
		this._defense = v instanceof Stat ? v : new Stat(v);
	}

	get tohit() { return this._tohit; }
	set tohit(v) { this._tohit = v instanceof Stat ? v : new Stat(v); }

	get resist() { return this._resist };
	set resist(v) { this._resist = v; }

	get speed() { return this._speed; }
	set speed(v) {
		this._speed = v instanceof Stat ? v : new Stat(v);
		this.delay = getDelay(v);
	}

	get attacks() { return this._attacks; }
	set attacks(v){

		for( let i = v.length-1; i>=0; i-- ) {
			v[i] = (v[i] instanceof Attack) ? v[i] : new Attack(v[i]);

		}

		this._attacks = v;
	}

	get attack() { return this._attack; }
	set attack(v) {
		this._attack = ( v instanceof Attack) ? v : new Attack(v);
	}

	get dots() { return this._dots; }
	set dots(v) {

		for( let i = v.length-1; i >= 0; i-- ) {
			v[i] = new Dot(v[i]);
		}
		this._dots =v;

	}

	get regen() { return this._regen; }
	set regen(v) { this._regen = ( v instanceof Stat ) ? v : new Stat(v); }

	/*get died() { return this._died; }
	set died(v) { this._died = v; }*/

	get alive() { return this.hp > 0; }
	set alive(v) {}

	constructor( vars ){

		for( let p in vars ) {
			this[p] = vars[p];
		}

		this.type = 'npc';

		this.states = this.states || {};
		this.immunities = this.immunities || {};
		this._resist = this._resist || {};

		//console.log( this.id + ' tohit: ' + this.tohit );

		/**
		 * @property {Object[]} dots - timed/ongoing effects.
		*/
		this.dots = this.dots || [];

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


		if ( this.template ) {

			let it = state.getData( this.template );
			if ( it ) mergeSafe( this, it );

			if ( !this._name ) this._name = it.name;
			//if ( this.hp instanceof Range ) this.hp = this.hp.value;

		}

	}

	/**
	 * Called once game actually begins. Dot-mods can't be applied
	 * before game start because they can trigger game functions.
	 */
	begin() {
	}

	/**
	 * Base item of dot.
	 * @param {Dot} it
	 */
	addDot( it ) {

		let id = it.id;

		let cur = id ? this.dots.find( d=>d.id===id) : undefined;
		if ( cur !== undefined ) cur.duration = it.duration;
		else {
			this.dots.push( new Dot(it) );
		}

	}

	update(dt) {

		for( let i = this.dots.length-1; i >= 0; i-- ) {

			var dot = this.dots[i];
			let dotTime = dot.tick(dt);

			if ( dotTime ) {

				if ( dot.duration <= 0 ) {
					this.dots.splice( i, 1);
				}
				if ( dot.damage ) {
					tryDamage( this, dot, dot.source );
				}

			}

		}

		if ( this.regen ) this.hp += this.regen*dt;
		if ( !this.alive ) return;

		this.timer -= dt;
		if ( this.timer <= 0 ) {

			this.timer += this.delay;
			return this.attacks || ( this.attack || this );

		}

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