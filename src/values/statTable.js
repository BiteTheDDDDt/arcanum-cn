import Stat from '../stat';
import GameState from '../gameState';
import RValue from './rvalue';
import { RV_BASE, RV_STAT, RV_MOD, RV_RANGE } from './consts';
import Mod from './mod';

export const NEW_STAT = 'statnew';

/**
 * @const {string} CHANGE_STAT - stat changed to a completely new class/value.
 */
export const CHANGE_STAT = 'statchange';

const RV_Classes = {

	[RV_BASE]:RValue,
	[RV_STAT]:Stat,
	[RV_MOD]:Mod,
	[RV_RANGE]:Range

};

export default class StatTable {

	get statMap(){return this._statMap;}
	set statMap(){return this._statMap}

	/**
	 *
	 * @param {GameState} state
	 * @param {EventEmitter3} emitter
	 */
	constructor( state, emitter ){

		this.state = state;
		this.statMap = new Map();

		this.emitter = emitter;

	}

	/**
	 * Ensure the stat at the given location has the correct type flag,
	 * and returns the stat.
	 * @param {string} path
	 * @param {number} rtype
	 * @returns {RValue}
	 */
	ensureType( path, rtype ) {

		let cur = this.statMap.get(path);
		if ( cur ) {

			if ( (cur & rtype) !== 0 ) {
				return cur;
			}

		}
		return this.addStat( path, new RV_Classes[rtype](cur) );

	}

	/**
	 *
	 * @param {string} path
	 * @param {string} alias
	 */
	addAlias( path, alias ) {

		let v = this.statMap.get(path);
		if ( v ) {
			this.statMap.set( alias, v );
		}
	}

	/**
	 * Add modifier to stat located at path.
	 * @param {string} path
	 * @param {Mod} mod
	 * @param {number} amt - amount of mod to add; maybe outdated.
	 * @returns {Stat} the stat modified.
	 */
	addMod( path, mod, amt=1 ) {

		let s = this.ensureType( path, Stat );
		s.addMod( mod, amt );

		return s;

	}

	/**
	 *
	 * @param {string} path
	 * @param {RValue} stat
	 * @returns {RValue} - the stat added.
	 */
	addStat( path, stat ) {

		if ( this.statMap.has(path) ) {

			let prev = this.statMap.get(path);
			this.emitter.emit( CHANGE_STAT, path, stat, prev );

		} else {

			this.statMap.set( path, stat );
			this.emitter.emit( NEW_STAT, path, stat );

		}

		return stat;

	}

	/**
	 * Get stat by id.
	 * @param {string} id
	 */
	get( id ) {
		return this.statMap.get(id);
	}

	/**
	 * Get a non-cached stat by a stat-path.
	 * @param {string} path
	 * @returns {Stat}
	 */
	getStat( path ) {

		let parts = path.split('.');
		let obj = this.state;
		let prev = obj;

		let len = parts.length;
		let i = 0;
		for( i = 0; i < len; i++ ) {

			obj = obj[ parts[i] ];
			if ( typeof obj !== 'object' ) {
				break;
			}
			prev = obj;

		}

		// cache the path.
		if ( prev ) this.statMap[path] = prev;

		if ( i < len-1 ) let remainder = path.slice(i);

		return prev;

	}

}