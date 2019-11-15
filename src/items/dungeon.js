import Monster from './monster';
import Action from './action';
import Game from '../game';
import { getDist, distTest, levelTest } from './locale';
import { mapNonNull } from '../util/util';
import { DUNGEON, RAID } from '../values/consts';

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

	get enemies() { return this._enemies; }
	set enemies(v) {

		// json data not true arrays.
		let a = [];

		for( let p in v) {
			a.push( v[p]);
		}
		this._enemies=a;
	}

	get proxy(){return RAID}

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
	 * Get next enemy.
	 * @returns {string|Monster|Object}
	 */
	getEnemy() {

		return this.getBoss( this.boss ) || this._enemies[ Math.floor( Math.random()*this._enemies.length ) ];

	}

	/**
	 * Return a random non-boss mob. (Used to exclude dead/locked uniques)
	 */
	getMob() {
		return this._enemies[ Math.floor( Math.random()*this._enemies.length ) ];
	}

	getBoss( boss ) {

		if ( !boss ) return null;

		if ( typeof boss === 'string' ) {

			if ( this.exp !== this.length-1) return null;

		} else if ( Array.isArray(boss) ) {

			if ( this.exp !== this.length-1) return null;
			var a = mapNonNull( boss, v=>{
				return this.getBoss(v)
			});
			return a.length > 0 ? a : null;

		} else if ( boss.hasOwnProperty( (this.exp+1) ) ) {
			// mid-level boss
			boss = boss[this.exp+1];
		}

		boss = Game.state.getUnique( boss );
		return boss ? boss.id : null;

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