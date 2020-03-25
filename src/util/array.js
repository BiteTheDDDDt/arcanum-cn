/**
 * Array utilities.
 */

export const swap = ( a, i, j ) => {

	if ( i < 0 || j < 0 || i >= a.length || j >= a.length ) return;

	let t = a[j];
	a[j] = a[i];
	a[i] = t;

}

/**
 * Merges items from b into array a for all items in b
 * passing predicate p.
 * @param {array} a
 * @param {array} b
 * @param {*=>boolean} p - merge test.
 * @returns {array} returns a
 */
export const mergeInto = ( a, b, p ) => {

	if ( !b || !a ) return a;

	for( let i = b.length-1; i>= 0; i-- ) {
		if ( p(b[i]) ) a.push(b[i]);
	}

	return a;

}

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
 * Return random array element between two indices.
 * @param {array} a
 * @param {number} i - lower inclusive limit of random.
 * @param {number} j - upper exclusive limit of random.
 * @returns {*}
 */
export const randBetween = (a,i,j)=>{

	return a[ Math.floor( i + Math.random()*(j-i)) ]

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

/**
 * Return first array element fufilling predicate.
 * @param {*} arr
 * @param {*=>boolean} pred
 * @returns {*}
 */
export const randWhere = (arr, pred)=>{

	if ( arr === null || arr === undefined ) return null;

	let st = Math.floor( Math.random()*arr.length );
	let i = st;

	while ( !pred( arr[i] ) ) {

		if ( --i < 0 ) i = arr.length-1;
		if ( i === st ) return null;

	}

	return arr[i];

}

/**
 * Return a random element from the array.
 * @param {Array} arr
 * @returns {*}
 */
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

/**
 * sort array by numeric by numeric property values
 * of object entries. null entries are treated as 0.
 * array entries must be objects.
 * @param {object[]} arr
 * @param {string} prop - numeric property to sort on.
 */
export const propSort = (arr,prop) => {

	arr.sort( (a,b)=>{
		return ( a[prop] || 0 ) - ( b[prop] || 0 );
	});

}

/**
 * Binary search array when values at prop are numeric.
 * @param {object[]} arr
 * @param {string} prop
 */
export const binarySearch = (arr, prop, v ) => {

	let min = 0;
	let max = arr.length;

	while ( min < max ) {

		let mid = Math.floor(min+max)/2;
		let cur = arr[mid][prop];

		if ( v < cur ) {

			max = mid;

		} else if ( v > cur ) {

			min = mid + 1;

		} else return arr[mid];

	}

	return null;

}