import Action from './action';
import Game from '../game';
import { getDist, distTest, levelTest } from './locale';
import { mapNonNull } from '../util/array';
import { DUNGEON, RAID } from '../values/consts';
import Spawns, { MakeNpc } from '../composites/spawns';
import SpawnGroup from '../composites/spawngroup';

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

export default class Dungeon extends Action {

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

		this._spawns = v instanceof Spawns ? v : new Spawns(v);

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

		/**
		 * @property {number} progress
		 */
		this._exp = this._exp || 0;
		if (!this.length) this.length = 10*this.level;

		// default require for dungeon is player-level.
		this.require = this.require || levelTest;

		this.dist = ( this.dist === undefined || this.dist === null ) ? getDist(this.level) : this.dist;
		//this.addRequire( 'dist', this.dist );

		if (!this.sym) this.sym = '⚔';

		//console.log(this.id + ' dist: ' + this.dist );

		if ( this.need == null ) this.need = distTest;

		/**
		 * Total of all enemy weights, used to roll which
		 * enemy is used.
		 * @property {number} attackTot
		 */
		//this.attackTot = this.totalWeights();

	}

	/**
	 * Get next group of enemies.
	 * @returns {?Npc[]}
	 */
	getSpawn() {

		let spawn;

		if ( this.hasBoss( this.boss, this.exp ) ) spawn = this.getBoss( this.boss );
		else if ( this.spawns ) spawn = this.spawns.random();

		if ( spawn instanceof SpawnGroup ) return spawn.instantiate( this.percent()/100 );
		else if ( spawn ) {

			let npc = MakeNpc( spawn, this.percent()/100);
			if ( npc ) return [npc];

		}

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
		if ( typeof boss === 'object' && !Array.isArray(boss) && boss.hasOwnProperty(at) ) {
			return true;
		}
		// last enemy in dungeon.
		return (at === this.length-1);

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

		} else if ( boss.hasOwnProperty( Number(this.exp) ) ) {
			// mid-level boss
			return this.getBoss( boss[this.exp.valueOf()] );
		}

	}

	/**
	 * Catch complete() to prevent default action. ugly.
	 */
	complete() {
	}

	/**
	 *
	 */
	/*totalWeights() {

		let tot = 0;
		for( let a of this._enemies ) tot += a.weight || 1;
		return tot;

	}*/

}