import Stat from '../stat';
import { EventEmitter } from 'events';

export default class StatTable extends EventEmitter {

	constructor( state ){
		super();
		this.state = state;
		this.map = new Map();

	}

	addStat( path, stat ) {

		this.map.set( path, stat );

	}

	/**
	 * Get stat by id.
	 * @param {string} id 
	 */
	get( id ) {
		return this.map.get(id);
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
		for( let i = 0; i < len; i++ ) {

			obj = obj[ parts[i] ];
			if ( !(obj instanceof Object)) {
				break;
			}
			prev = obj;

		}

		// cache the path.
		if ( prev ) this.map[path] = prev;

		if ( i < len-1 ) let remainder = path.slice(i);

		return prev;

	}

}