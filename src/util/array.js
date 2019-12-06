/**
 * Array utilities.
 */

/**
 * Return a random element from any of a number of arrays.
 * @param {Array[]} arrs - array of arrays.
 */
export const randFrom = (arrs)=>{

	let tot = 0;
	for( let i = arrs.length-1; i >= 0; i-- ) tot += arrs[i].length;
	if ( tot === 0 ) return null;

	let j = Math.floor( Math.random()*tot );
	for( let i = arrs.length-1; i>=0; i-- ) {

		if ( arrs[i].length >= j ) return arrs[i][j];
		j -= arrs[i].length;

	}

	return null;

}


/**
 * Map Array into non-null elements of a predicate.
 * @param {Arrray} a
 * @param {function} p
 */
export const mapNonNull = (a,p) => {

	let len = a.length;
	let b = [];
	for( let i = 0; i < len; i++ ) {

		var elm = p( a[i]);
		if ( elm !== null && elm !== undefined) b.push(elm);

	}

	return b;

}

/**
 *
 * @param {array} a
 * @param {array} b
 */
export const pushNonNull = (a,b) => {

	let len = b.length;
	for( let i = 0; i < len; i++ ) {
		var e = b[i];
		if ( e !== null && e !== undefined ) a.push( e );
	}
	return a;

}

/**
 * Return first non-null element of array.
 * @param {Array} a
 */
export const first = (a) =>{

	let len = a.length;
	for( let i = 0; i < len; i++) {
		var e = a[i];
		if ( e !== null && e !== undefined ) return i;
	}

}

/**
 * Find an item in an array matching predicate, remove and return it.
 * @param {Array} a
 * @param {*} pred
 * @returns {object|null} Item removed or null.
 */
export const findRemove = (a,pred) => {

	for( let i = a.length-1; i>= 0; i-- ) {

		if ( pred(a[i] ) ) {

			let res = a[i];
			a.splice( i, 1 );
			return res;

		}

	}
	return null;

}

export const randElm = (arr)=>{
	if ( arr === null || arr === undefined ) return null;

	const ind = Math.floor( Math.random()*(arr.length));
	return arr[ind];
}

/**
 * NOTE: Not reactive with Vue.
 * @param {*} a
 * @param {*} i
 */
export const quickSplice = ( a, i ) => {

	a[i] = a[ a.length-1 ];
	a.pop();

}

/**
 * Merge two items which may or may not be arrays,
 * and return a ray containing the flattened result of both.
 * If either a or b is already an array, it will be used to join
 * the results in-place.
 * @param {*} a
 * @param {*} b
 * @return {Array}
 */
export const arrayMerge = ( a, b ) => {

	if ( Array.isArray(a) ) {

		if ( Array.isArray(b) ) return a.concat(b);

		a.push(b);

		return a;

	} else if ( Array.isArray(b) ) {

		// a is not array:
		b.push(a);
		return b;

	} else return [a,b];

}