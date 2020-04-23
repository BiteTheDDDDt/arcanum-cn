import Task from './task';
import { getDist, distTest, levelTest } from './locale';
import { DUNGEON, EXPLORE } from '../values/consts';
import { ParseSpawns } from '../classes/spawns';
import SpawnGroup from '../classes/spawngroup';

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

	/**
	 * @property {SpawnGroup|Object.<number,SpawnGroup>} boss
	 */
	get boss(){ return this._boss; }
	set boss(v) {

		if ( typeof v === 'object' && !Array.isArray(v) ) {

			for( let p of v ) {

				v[p] = new SpawnGroup(v);
			}

		} else this._boss = new SpawnGroup(v);

	}

	get controller() {return EXPLORE}

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
	 * @returns {Npc[]|null}
	 */
	getSpawn() {

		let spawn = null;

		if ( this.hasBoss( this.boss, this.exp ) ) {
			spawn = this.getBoss( this.boss );
			// unique bosses might result in empty arrays.
			if ( spawn !== null && spawn.length > 0 ) return spawn;
		}

		spawn = this.spawns.random( this.percent()/100 );

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
		if ( (boss instanceof SpawnGroup) ) {
			// last enemy in dungeon.
			return (at === this.length);
		}
		return boss.hasOwnProperty(at);

	}

	/**
	 * Instantiates a boss Npc.
	 * @param {string|string[]|object} boss
	 * @returns {Npc[]|null}
	 */
	getBoss( boss ) {

		if ( !boss ) return null;

		if ( boss instanceof SpawnGroup ) {

			return boss.instantiate();

		} else {

			let ind = Math.floor( this.exp + 1 );
			if ( boss.hasOwnProperty( ind ) ) {
				// mid-level boss
				return boss[ind].instantiate();
			}
		}
		return null;

	}

}