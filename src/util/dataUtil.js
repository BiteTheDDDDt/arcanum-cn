import { clone, cloneClass } from "objecty";
import Stat from "../values/stat";

/**
 * Find and return first element of set matching predicate.
 * @param {Iterator} s
 * @param {*=>boolean} p
 * @returns {*} matched element, or null.
 */
export const iterableFind = (s,p)=>{

	for( let t of s ) if ( p(t) ) return t;
	return null;

}

/**
 * Map elements of iterator to an array.
 * @param {Iterator} it
 * @param {*=>*} p
 * @returns {Array}
 */
export const iterableMap = (it,p)=>{

	let a = [];
	for( let t of it ) {
		a.push( p(t) );
	}

	return a;
}

/**
 * Clear set and add all items from an iterable.
 * @param {Set} s
 * @param {Iteratable} items
 */
export const setReplace = (s,items)=>{

	s.clear();
	for( let it of items ) s.add(it);

}

/**
 * Map the elements of a set to new values.
 * Creates a new Set to match Array function.
 * @param {Set.<*>} s
 * @param {(*)=>*} p - mapping function.
 * @returns {Set.<*>}
 */
export const mapSet = (s, p) => {

	let a = [];
	for( let t of s ) {
		a.push( p(t) );
	}

	return new Set( a );

}

/**
 * Utilities specific to merging game data.
 */

/**
 * Use total values as mod values in cumulative stats?
 * Any stat can be used as a component in another aggregate stat?
 */

/**
 * Convert object entries to Stat-values.
 * @param {object} obj
 * @returns {object} the object.
 */
export const toStats = (obj) => {

	for( let p in obj ) {
		var s = obj[p];
		obj[p] = s instanceof Stat ? s : new Stat( s, p);
		//console.log('NEW STAT: ' + p + ': ' + s.valueOf() );
	}
	return obj;

}