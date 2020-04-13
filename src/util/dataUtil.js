import Stat from "../values/rvals/stat";
import RValue from "../values/rvals/rvalue";

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

/**
 *
 * @param {object} dest
 * @param {string} prop
 * @param {*} v
 */
const addValue = ( dest, prop, v ) => {

	var cur = dest[prop];
	if ( cur === undefined ) dest[prop] = new RValue( v.valueOf() );
	else {

		if ( typeof cur === 'object') {

			cur.value = ( cur.value || 0 ) + v;

		} else dest[prop] = new RValue( cur + v );

	}

}

/**
 * Write numeric values into a destination object.
 * If the destination target for a keyed number is an object,
 * the keyed number is added to the object's 'value' property.
 * @param {object} dest
 * @param {*} vals
 */
export const addValues = (dest, vals) => {

	if ( typeof dest !== 'object' || dest.constructor !== Object ) {
		dest = { value:dest};
	}

	if ( typeof vals === 'string') {

		// value is one unit of id'd item.
		addValue(dest, vals, 1 );

	} else if ( typeof vals === 'object') {

		for( let p in vals ) {

			let cur = dest[p];
			let src = vals[p];

			if ( typeof src === 'object') {

				if ( src.constructor !== Object ) {
					addValue( dest, p, src );
				} else {
					dest[p] = addValues( cur || {}, src );
				}


			} else if ( typeof cur === 'object') {

				// src is not object.
				console.log('cur: object; src: ' + typeof src );
				addValue( cur, 'value', src );

			} else {

				addValue(dest, p, src );
			}


		}

	}

	return dest;

}