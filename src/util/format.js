/**
 * Postfixes to use for every 10^3 group of large numbers.
 */
const PostFixes = [
	'', 'K', 'M', 'B', 'T'
];

const FuncRE = /(^[^]*\{|return|\}$)|\w\.(\w+)|(\!)|(\&\&)|(\|\|)/gi;

/**
 * Converts a function to some semblance of plain text.
 * @param {function} f
 */
export const funcText = (f, lookup )=>{

	let it;

	return f.toString().replace( FuncRE, (match,skips,name,not,and,or)=>{

		if ( name ) {

			it = lookup.getData(name);
			if ( it ) return it.name;

			return name;

		} else if ( skips ) {
			return '';
		}
		if ( not ) return ' not ';
		if ( and) return ' and ';
		if ( or ) return ' or ';

	});

};

export const toInt = Math.floor;

/**
 * Format a large number.
 * @param {number} v
 * @returns {string}
 */
export const toLarge = (v) => {

	let sgn = 1;
	if ( v < 0 ) {
		sgn = -1;
		v = -v;
	}
	// log negative.
	if ( v <= 1 ) return sgn;

	// index cutoff is every multiple of 1000, plus 2 digits over the next higher.
	// e.g. the 'hundreds' category extends to 99,999; K extends to 99,999K
	let ex = Math.floor( (Math.log10(v)-1)/3 );
	if ( ex < 1 ) return sgn*v;

	return ( sgn*Math.round( v / Math.pow(10,3*ex) ) )+PostFixes[ex];

}

/**
 * Formatting helpers for HTML/Display.
 */
export const precise = (v, n=2) => {

	let r = Number(v);
	if ( Number.isNaN(r) ) return v;

	if ( r === Math.floor(r) ) return r;

	let maxDivide = Math.pow(10,n);

	let abs = Math.abs(r);

	let divide = 1;
	while ( (abs < maxDivide) && abs !== Math.floor(abs) ) {

		abs *= 10;
		divide *= 10;

	}

	abs = Math.round(abs)/divide;
	return r >= 0 ? abs : -abs;

}


/**
 * Returns abbreviation of an item based on first letters.
 * @param {*} it
 */
export const abbr = (it)=>{

	if ( !it ) return '';

	let s = it.name;
	if ( !s) {
		//console.warn( it + ' missing name');
		return it;
	}

	let ind = s.indexOf(' ');
	if ( ind >= 0 && ind+1 < s.length ) return s[0] + s[ind+1];
	return s.slice(0,2);

}

/**
 * Returns fixed point, rounding down.
 * @param {number} v
 * @param {number} n
 */
export const lowFixed = (v, n=2) => {

	let pow = Math.pow(10,n);
	return Math.floor( v*pow )/pow;

}

/**
 * Floor function checks for NaN and null values.
 * @param {*} v
 */
export const floor = ( v ) => {
	return (v === null || isNaN(v)) ? 0 : Math.floor(v);
}

/**
 * Adds seconds 's' to number.
 * @param {*} v
 */
/*export const seconds = (v) => {
	return Math.ceil(v) + ' s';
}*/

/*export const decimal = (v, n=2) => {

	let r = Number(v);
	if ( Number.isNaN(r) ) return v;

	if ( r === Math.floor(r) ) return r;
	if ( Math.abs(r)>=1 || r === 0) return r.toPrecision(n);

	if ( Math.pow(10,n)*r < 1 ) n += 2;
	return r.toFixed(n);

}*/

/*export const ceil = ( v ) => {
	return (v === null || isNaN(v)) ? 0 : Math.ceil(v);
}*/


/*export const round = ( v ) => {
	return (v === null || isNaN(v)) ? 0 : Math.round(v);
}*/