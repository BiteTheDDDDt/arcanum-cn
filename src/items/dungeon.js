import Task from './task';
import Game from '../game';
import { getDist, distTest, levelTest } from './locale';
import { mapNonNull } from '../util/array';
import { DUNGEON, RAID } from '../values/consts';
import { ParseSpawns } from '../classes/spawns';

/**
 * @type {Object} Enemy
 * @property {number} weight - weighted chance of attack occuring. Not Implemented.
 * @property {number} min - min damage
 * @property {number} max - max damage
 * @property {string} type - attack type
 * @property {number} defense
 * @property {number} attack
 * @property {number} hp
 */

export default class Dungeon extends Task {

	/**
	 * @property {object|string} once - result to happen only once.
	 */
	get once() { return this._once; }
	set once(v) { this._once = v; }

	/**
	 * @compat
	 */
	get enemies(){return this.spawns;}
	set enemies(v){this.spawns = v }

	get spawns() { return this._spawns; }
	set spawns(v) {
		this._spawns = ParseSpawns(v);
	}

	get controller() {return RAID}

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null ){

		super(vars);

		this.level = this.level !== undefined ? this.level : 1;

		this.type = DUNGEON;

		this.ex = this.ex || 0;
		if (!this.length) this.length = 10*this.level;

		// default require for dungeon is player-level.
		this.require = this.require || levelTest;

		this.dist = ( this.dist === undefined || this.dist === null ) ? getDist(this.level) : this.dist;
		//console.log(this.id + ' dist: ' + this.dist );
		//this.addRequire( 'dist', this.dist );

		if ( this.need == null ) this.need = distTest;

		if (!this.sym) this.sym = '⚔';

	}

	/**
	 * Get next group of enemies.
	 * @returns {?Npc[]}
	 */
	getSpawn() {

		let spawn = null;

		if ( this.hasBoss( this.boss, this.exp ) ) spawn = this.getBoss( this.boss );
		if ( spawn == null ) spawn = this.spawns.random( this.percent()/100 );

		return spawn;

	}

	/**
	 * Checks if there is a boss at the given position in dungeon.
	 * @param {string|object|Array} boss
	 * @param {number} at
	 * @returns {boolean}
	 */
	hasBoss( boss, at ) {

		if ( !boss ) return false;

		at = Math.floor(at + 1 );
		if ( typeof boss === 'object' && !Array.isArray(boss) && boss.hasOwnProperty(at) ) {
			return true;
		}
		// last enemy in dungeon.
		return (at === this.length);

	}

	/**
	 *
	 * @param {string|string[]|object} boss
	 * @returns {string|string[]|null}
	 */
	getBoss( boss ) {

		if ( !boss ) return null;

		if ( typeof boss === 'string') {

			if ( Game.state.hasUnique( boss ) ) return null;
			return boss;

		} else if ( Array.isArray(boss) ) {

			var a = mapNonNull( boss, v=>{
				return this.getBoss(v)
			});
			return a.length > 0 ? a : null;

		} else {

			let ind = Math.floor( this.exp + 1 );
			if ( boss.hasOwnProperty( ind ) ) {
				// mid-level boss
				return this.getBoss( boss[ind] );
			}
		}

	}

}