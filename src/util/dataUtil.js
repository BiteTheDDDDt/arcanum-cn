import { clone } from "objecty";
import Stat from "../values/stat";

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
		obj[p] = s instanceof Stat ? s : new Stat( obj[p], p);
	}
	return obj;

}

/**
 * Create a new cost object with requirements from both.
 * @todo this won't keep pace with modified costs.
 * @param {*} c1
 * @param {*} c2
*/
export const mergeCosts = ( c1, c2 ) => {

	if ( !c1 ) return clone(c2);
	if ( !c2 ) return clone(c1);

	let res = {};

	if ( typeof c1 === 'string') {
		res[c1] = 1;
	} else if ( typeof c1 === 'object') {
		clone(c1, res);
	}

	addValues( res, c2 );

	return res;

}

/**
 * Write numeric values into a destination object.
 * If the destination target for a keyed number is an object,
 * the keyed number is added to the object's 'value' property.
 * @param {object} obj
 * @param {*} vals
 */
export const addValues = (obj, vals) => {

	if ( typeof vals === 'string') {

		let cur = obj[vals];
		if ( !cur) obj[vals] = 1;
		else if ( !isNaN(cur)) obj[vals] = cur + 1;
		else if ( typeof cur === 'object') {
			// NOTE: if cur.value is NaN there is no consistent merge strategy.
			cur.value = (cur.value || 0) + 1;
		}

	} else if ( typeof vals === 'object') {

		for( let p in vals ) {

			let cur = obj[p];
			let src = vals[p];

			if ( !cur ) {

				obj[p] = !isNaN(src) ? src : clone(src);

			} else if ( typeof cur === 'object') {

				if ( typeof src === 'object') addValues( cur, src);
				else cur.value = (cur.value || 0 ) + src;

			} else if ( typeof src === 'object') {

				src = obj[p] = clone(src);
				src.value = (src.value||0) + cur;

			} else {

				obj[p] = (cur||0) + src;
			}


		}

	}

}

/*const addKeyVal = ( obj, k, v ) => {

	let cur = obj[k];
	if ( !cur ) obj[k] = v;
	else if ( typeof cur === 'object' ) {



	} else {

		if ( typeof v === 'object') {

			obj[k] = clone( v );
			obj[k].value = ( obj[k].value || 0 ) + cur;

		} else obj[k] = cur + v;

	}

}*/