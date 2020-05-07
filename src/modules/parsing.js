import Mod, { ModTest } from '../values/mods/mod';
import PerMod, { IsPerMod } from '../values/mods/permod';
import { splitKeys, logObj, splitKeyPath } from '../util/util';
import RValue, { SubPath } from '../values/rvals/rvalue';
import Stat from '../values/rvals/stat';

import { MakeDmgFunc } from '../values/combatVars';

import Range, {RangeTest} from '../values/range';
import Percent, {PercentTest} from '../values/percent';
import AtMod, { IsAtMod } from '../values/mods/atmod';

/**
 * @const {RegEx} IdTest - Test for a simple id name.
 */
const IdTest = /^[A-Za-z_]+\w*$/;

/**
 * Parse object into modifiers.
 * @param {} mods
 * @returns {Object} parsed modifiers.
 */
export const ParseMods = ( mods, id, source ) => {

	if ( !mods ) return null;
	if (!id && source && (typeof source ==='object')) {
		id = source.id;
		if ( !id ) {
			id = '';
			logObj( mods, 'No Mod Id: ' + source + ': ' + id );
		}
	}

	mods = SubMods( mods, id, source );
	if ( !mods ) console.warn('mods is null: ' + id );

	// @todo: no more key splitting. item tables?
	splitKeys(mods);

	return mods;

}

/**
 * Parse a string source into a Mod class.
 * @param {string} str - mod str.
 * @param {string} id - mod id.
 * @param {object} src - mod source.
 * @returns {Mod|string}
 */
export const StrMod = ( str, id, src ) => {

	if ( ModTest.test(str) || !isNaN(str) ) return new Mod(str,id,src);
	if ( IsPerMod(str ) ) return new PerMod( str, id, src );
	else if ( IsAtMod(str) ) return new AtMod(str, id, src );
	return str;

}

/**
 *
 */
const SubMods = ( mods, id, source )=>{

	if ( mods === null || mods === undefined ) return null;

	if ( typeof mods === 'string' ) {

		return StrMod( mods, id, source );

	} else if ( typeof mods === 'number') {

		return new Mod( mods, id, source );

	} else if ( typeof mods !== 'object' ) {
		// @note includes boolean (unlock) mods.
		//console.log( id + ' unknown mod type: ' + (typeof mods) + ' source: ' + source )
		return mods;
	}

	// @note str is @compat
	if ( mods.id || mods.base || mods.str ) return new Mod( mods, id, source );

	for( let s in mods ) {

		let val = mods[s];
		if ( val === 0 ) {
			delete mods[s];
			continue;
		}
		// @note this includes 0 as well.
		if ( !val) continue;


		if ( val instanceof Mod ) {

			if ( id ) val.id = SubPath(id, s);
			//console.log('NEW MOD ID: ' +SubPath(id, s) );
			val.source = source;
			continue;

		}

		mods[s] = SubMods( val, SubPath(id, s), source );

	}
	return mods;

}

/**
 * Prepared data is instance-level data, but classes have not been instantiated.
 * @param {*} sub
 * @param {*} id
 */
export const PrepData = ( sub, id='' ) => {

	if (Array.isArray(sub) ) {

		for( let i = sub.length-1; i >= 0; i-- ) sub[i] = PrepData( sub[i], id );

	} else if ( typeof sub === 'object' ) {

		for( let p in sub ) {

			if ( p === 'mod' || p === 'runmod' || p === 'alter' ) {

				sub[p] = ParseMods( sub[p],  SubPath(id, p) );
				continue;
			} else if ( p ==='effect' || p === 'result' ) {

				sub[p] = ParseEffects( sub[p], MakeEffectFunc );

			} else if ( p === 'cost' || p === 'buy' ) {

					sub[p] = ParseEffects( sub[p], MakeCostFunc );

			} else if ( p === 'require' || p === 'need' ) {

				sub[p] = ParseRequire( sub[p] );
				continue;

			}

			if ( p.includes('.')) splitKeyPath( sub, p );

			var obj = sub[p];
			var typ = typeof obj;
			if ( typ === 'string' ){

				if ( PercentTest.test(obj) ) {

					sub[p] = new Percent(obj);

				} else if ( RangeTest.test(obj) ) sub[p] = new Range(obj);
				else if ( IsPerMod(obj) ) sub[p] = new PerMod( obj, SubPath(id,p) );
				else if ( !isNaN(obj) ) {
					if ( obj !== '') console.warn('string used as Number: ' + p + ' -> ' + obj );
					sub[p] = Number(obj);
				}
				else if ( p === 'damage' || p === 'dmg') sub[p] = MakeDmgFunc(obj);

			} else if ( typ === 'object' ) PrepData(obj, id);
			else if (typ === 'number') {

				//sub[p] = new RValue(obj);

			}

		}

		// split AFTER parse so items can be made into full classes first.
		/*for( let p in sub ) {
			if ( p.includes('.')) splitKeyPath( sub, p );
		}*/

	} else if ( typeof sub === 'string') {
		return ParseRVal(sub);
	}

	return sub;

}

/**
 * Attempt to convert a string to RValue.
 * @param {string} str
 * @returns {RValue|number|str}
 */
export const ParseRVal = ( str ) => {

	if ( RangeTest.test(str) ) return new Range(str);
	else if ( PercentTest.test(str) ) return new Percent(str);
	else if ( IsPerMod(str ) ) return new PerMod( str );
	else if ( IsAtMod(str) ) return new AtMod(str);
	return str;

}
/**
 *
 * @param {object|string|Array|Number} effects
 * @param {Function} funcMaker - Function that returns a new function to use in any function RValues.
 * (cost func, effect func, attack func, etc.)
 */
export const ParseEffects = ( effects, funcMaker ) => {

	if ( Array.isArray(effects) ) {

		for( let i = effects.length-1; i>= 0; i-- ){
			effects[i] = ParseEffects( effects[i], funcMaker );
		}

	} else if ( typeof effects === 'string') {

		if ( RangeTest.test(effects) ) return new Range(effects);
		else if ( PercentTest.test(effects) ) return new Percent(effects);
		else if ( IsPerMod(effects ) ) return new PerMod( effects );
		else if ( IsAtMod(effects) ) return new AtMod( effects );
		else if ( effects.includes( '.' ) ) return funcMaker(effects);

		return effects;

	} else if ( typeof effects === 'object' ) {

		for( let p in effects ) {
			effects[p] = ParseEffects( effects[p], funcMaker );
		}

	} else if ( typeof effects === 'number' ) return new Stat( effects );

	return effects;

}

/**
 * Parse a requirement-type object.
 * currently: 'require' or 'need'
 */
export const ParseRequire = ( sub ) => {

	// REQUIRE
	if ( sub === null || sub === undefined || sub === false || sub === '') return undefined;
	if ( Array.isArray(sub) ) {

		for( let i = sub.length-1; i>= 0; i-- )sub[i] = ParseRequire( sub[i] );

	} else if ( typeof sub === 'string' && !IdTest.test(sub )) return MakeTestFunc( sub );

	return sub;

}

/**
 * Create a boolean testing function from a data string.
 * @param {string} text - function text.
 */
export function MakeTestFunc( text ) {

	/**
	 * g - game data
	 * i - item being tested for unlock.
	 * s - game state
	 */
	return new Function( "g", 'i', 's', 'return ' + text );
}

/**
 * Cost function. params: GameState, Actor.
 * @param {*} text
 */
export function MakeCostFunc(text) {
	return new Function( 'g,a', 'return ' + text );
}

/**
 * Create a function which performs an arbitrary effect.
 * player and target params are given for simplicity.
 * target is the current target (of a dot), if any.
 * @param {string} text
 */
export function MakeEffectFunc( text ) {
	return new Function( 'g,t,a', 'return ' + text );
}