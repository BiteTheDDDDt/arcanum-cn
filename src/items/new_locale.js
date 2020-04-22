import Task from "./task";
import { EXPLORE, LOCALE } from "../values/consts";
import Game from '../game';
import { mapNonNull } from '../util/array';
import Spawns, { ParseSpawns } from '../classes/spawns';
import SpawnGroup from '../classes/spawngroup';

/**
 * Default dist per level function. Also currently used by dungeon.
 * @param {number} lvl
 * @returns {number}
 */
export const getDist = (lvl)=> {
	return Math.ceil( 4.4*Math.exp( 0.30*lvl ) );
};

/**
 *
 * @param {object} g - all game data.
 * @param {*} s
 * @returns {boolean}
 */
export const distTest = (g,s) => {
	return g.dist >= s.dist;
}

/**
 *
 * @param {*} g
 * @param {*} s
 * @returns {boolean}
 */
export const levelTest = (g, s) => {
	return g.player.level >= (s.level-1);
}

export class Locale extends Task {

	/**
	 * @property {object|string} once - result to happen only once.
	 */
	get once() { return this._once; }
	set once(v) { this._once = v; }

	get encs() { return this._encs; }
	set encs(v) {

		// json data not true arrays.
		let a = [];

		for( let p in v) { a.push( v[p]); }

		this._encs = a;
	}

	/**
	 * @property {Spawns}
	 */
	get spawns() { return this._spawns; }
	set spawns(v) {
		this._spawns = ParseSpawns(v);
	}

	/**
	 * @property {string} proxy - id of actual runner.
	 */
	get controller() { return EXPLORE }

	constructor(vars=null) {

		super(vars);

		if ( this.level === null || this.level === undefined ) this.level = 1;
		this.type = LOCALE;

		/**
		 * @property {number} progress
		 */
		this.ex = this.ex || 0;
		if (!this.length) this.length = 20*this.level;

		// default require for dungeon is player-level.
		if ( !this.require ) this.require = levelTest;

		if ( this.dist === undefined || this.dist === null ) this.dist = getDist(this.level);

		if ( !this.need ) this.need = distTest;

		if (!this.sym) this.sym = '🌳';
		if ( this._encs == null ) this._encs = [];

		//console.log(this.id + ' dist: ' + this.dist );

	}

	/**
	 * Get next/random encounter.
	 * @returns {string|Encounter|Object}
	 */
	getEncounter() {

		let dat;

		if ( this.hasBoss( this.boss, this.exp ) ) dat = this.getBoss( this.boss );
		else {

			let dat = this._encs[ Math.floor( Math.random()*this._encs.length )  ];

		}

		if ( typeof dat === 'string') {

		} else if ( Array.isArray(dat) ) {
		} else if ( typeof dat === 'object') {
		}

		return dat;

	}

	/**
	 * Get next group of enemies.
	 * @returns {?Npc[]}
	 */
	getSpawn() {

		let spawn;

		if ( this.hasBoss( this.boss, this.exp ) ) spawn = this.getBoss( this.boss );
		if ( spawn == null ) spawn = this.spawns.random( this.percent()/100 );

		return null;

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