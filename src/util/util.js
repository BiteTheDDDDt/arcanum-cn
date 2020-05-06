import {getPropDesc} from 'objecty';

/**
 * alphabetical sort by name property.
 * @param {*} a
 * @param {*} b
 */
export const alphasort = (a,b)=> a.name < b.name ? -1 : 1;

/**
 * sort by level property.
 * @param {*} a
 * @param {*} b
 */
export const levelsort = (a,b)=>{

	let v = a.level - b.level;
	if ( v === 0 ) {
		return a.name < b.name ? -1 : 1;
	}
	return v;

};

/**
 * Ensure the existence of props on an object.
 * Mostly for Vue reactivity.
 * @property {Object} obj
 * @property {string[]} props - props to set.
 */
export const ensure = ( obj, props ) => {

	for( let i = props.length-1; i>= 0; i-- ) {
		var s = props[i];
		if ( !obj.hasOwnProperty(s) ) obj[s] = null;
	}

}

/**
 * Attempt to add a property to object.
 * @param {object} targ
 * @param {string} prop
 * @param {object} v - property value.
*/
export const tryAddProp = ( targ, prop, v ) => {

	let desc = getPropDesc( targ, prop );
	if ( !desc || !desc.set && !desc.writable ) return null;

	return targ[prop] = v;

}

/**
 * Determine if property can be safely added to target.
 * Does not check sealed/frozen object status.
 * @param {object} targ
 * @param {string} prop
*/
export const canWriteProp = ( targ, prop ) => {

	let desc = getPropDesc( targ, prop );
	return !desc || desc.set || desc.writable;

}


/**
 * Only assign values already defined in dest's protochain.
 * @param {*} dest
 * @param {*} src
 */
export const assignOwn = (dest, src ) => {

	var vars = Object.getPrototypeOf(dest);
	while ( vars !== Object.prototype ) {

		for( let p of Object.getOwnPropertyNames(vars) ) {

			var desc = getPropDesc(dest, p);
			if ( desc && (!desc.writable && desc.set === undefined) ) {
				continue;
			}

			if ( src[p] !== undefined ) dest[p] = src[p];

		}
		vars = Object.getPrototypeOf(vars);

	}

	return dest;

}


/**
 * Log all public properties.
 * @param {*} src
 */
/*export const logPublic = ( src ) => {

	let a = [];

	while ( src !== Object.prototype ) {

		for( let p of Object.getOwnPropertyNames(src) ) {

			if ( p[0] === '_'){continue; }
			a.push(p);
		}
		src = Object.getPrototypeOf(src);

	}

	console.log('PUBLIC: ' + a.join(',' ) );

}*/

/**
 * Like assignNoFunc() but without recursion.
 * @param {object} dest
 * @param {object} src
 */
export const assignPublic = ( dest, src ) => {

	for( let p of Object.getOwnPropertyNames(src) ) {

		if ( p[0] === '_' ){
			continue;
		}

		var desc = getPropDesc(dest, p);
		if ( desc ) {

			if ( desc.set ) {

				if ( typeof dest[p] === 'function') console.log('OVERWRITE: '+p);

			} else if ( !desc.writable ) continue;
			else if ( typeof dest[p] ==='function') {
				//console.log('skipping func: ' + p);
				continue;
			}

		}

		dest[p ] = src[p];

	}


	return dest;

}

/*export const assignPublic = ( dest, src ) => {

	var vars = src;
	while ( vars !== Object.prototype ) {

		for( let p of Object.getOwnPropertyNames(vars) ) {

			if ( p[0] === '_'){
				continue;
			}

			var desc = getPropDesc(dest, p);
			if ( desc && (!desc.writable && desc.set === undefined) ) {
				//console.log('SKIPPING: ' + p);
				continue;
			}

			dest[p ] = src[p];

		}
		vars = Object.getPrototypeOf(vars);

	}

	return dest;

}*/

export const assignNoFunc = ( dest, src ) => {

	var vars = src;
	while ( vars !== Object.prototype ) {

		for( let p of Object.getOwnPropertyNames(vars) ) {

			if ( p[0] === '_' ){
				continue;
			}

			var desc = getPropDesc(dest, p);
			if ( desc ) {

				if ( desc.set ) {

					if ( typeof dest[p] === 'function') console.log('OVERWRITE: '+p);

				} else if ( !desc.writable ) continue;
				else if ( typeof dest[p] ==='function') {
					//console.log('skipping func: ' + p);
					continue;
				}

			}

			dest[p ] = src[p];

		}
		vars = Object.getPrototypeOf(vars);

	}

	return dest;

}

/**
 * Only split NON-class keys. Classes shouldn't be
 * grouped into key-paths.
 * @param {*} obj
 */
export const splitKeys = (obj)=>{

	if ( !obj || typeof obj !== 'object' ) return;

	for( let s in obj ){

		var sub = obj[s];
		if ( s.includes('.')){
			splitKeyPath( obj, s );
		}
		if ( sub && typeof sub === 'object' && (
			Object.getPrototypeOf(sub) === Object.prototype )
		) splitKeys( sub );

	}

}

	/**
	 * For an object variable path key, the key is expanded
	 * into subojects with keys from the split key path.
	 * This is done to allow object props to represent variable paths
	 * without changing all the code to use Maps (with VarPath keys) and not Objects.
	 * @param {Object} obj - object containing the key to expand.
	 * @param {string} prop - key being split into subobjects.
	 */
	export const splitKeyPath = ( obj, prop ) => {

		let val = obj[prop];
		delete obj[prop];

		let keys = prop.split('.');

		let max = keys.length-1;

		// stops before length-1 since last assign goes to val.
		for( let i = 0; i < max; i++ ) {

			var cur = obj[ keys[i] ];

			if ( cur === null || cur === undefined ) cur = {};
			else if ( (typeof cur) !== 'object' || Object.getPrototypeOf(cur) !== Object.prototype ) cur = { value:cur };

			obj = (obj[ keys[i] ] = cur);

		}

		obj[ keys[max] ] = val;

	}

/**
 * Log deprecation warning.
 * @param {*} msg
 */
export const deprec = ( msg ) => {
	console.trace( 'deprecated: ' + msg );
}

export const showObj = (obj) => {

	if ( Array.isArray(obj)){

		return '[ \n' + obj.map(v=>showObj(v)).join(', ') + '\n ]';

	} else if ( typeof obj === 'object') {

		let s = '{ ';
		for( let p in obj ) {

			s += `\n${p}: ` + showObj(obj[p] );

		}
		s += '\n}';

		return s;

	} else return '' + obj;


}

export const logObj = ( obj, msg='' ) => {
	console.log( (msg ? msg + ': ' : '' ) + showObj(obj) );
}


/**
 * Returns a random number between [min,max]
 * @param {number} min
 * @param {number} max
 */
export const random = (min, max)=>{
	return min + Math.round( Math.random()*(max-min) );
}


export const uppercase = (s) => {
	return !s ? '' : (s.length > 1 ? s[0].toUpperCase() + s.slice(1) : s[0].toUpperCase());
}




export const indexAfter = ( s, k ) => {

	let i = s.indexOf(k);
	return i >= 0 ? i + k.length : i;

}