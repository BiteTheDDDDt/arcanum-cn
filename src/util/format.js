const postfixes = [

	'k', 'm', 'b'
]

export const toInt = Math.floor;

/**
 * Formatting helpers for HTML/Display.
 */
export const precise = (v, n=2) => {

	let r = Number(v);
	if ( Number.isNaN(r) ) return v;

	if ( r === Math.floor(r) ) return r;
	if ( Math.abs(r)>=1 || r === 0) return r.toPrecision(n);

	if ( Math.pow(10,n)*r < 1 ) n += 2;
	return r.toFixed(n);
}

/**
 * Returns abbreviation of an item based on first letters.
 * @param {*} it
 */
export const abbr = (it)=>{

	if ( !it ) return '';

	let s = it.name || it.id;
	if ( !s) {
		//console.warn( it + ' missing name');
		return it;
	}

	let ind = s.indexOf(' ');
	if ( ind >= 0 && ind < s.length ) return s[0] + s[ind+1];
	return s.slice(0,2);

}

/**
 * Returns fixed point, rounding down.
 * @param {*} v
 * @param {*} n
 */
export const lowFixed = (v, n=2) => {

	let pow = Math.pow(10,n);
	return Math.floor( v*pow )/pow;

}

export const seconds = (v) => {
	return Math.ceil(v) + ' s';
}

export const floor = ( v ) => {
	return (v === null || isNaN(v)) ? 0 : Math.floor(v);
}

export const ceil = ( v ) => {
	return (v === null || isNaN(v)) ? 0 : Math.ceil(v);
}


export const round = ( v ) => {
	return (v === null || isNaN(v)) ? 0 : Math.round(v);
}