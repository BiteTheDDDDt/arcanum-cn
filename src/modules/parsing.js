import Mod, { ModTest } from '../values/mod';
import PerValue, { IsPerValue } from '../values/pervalue';
import { splitKeys, logObj, splitKeyPath } from '../util/util';
import { SubPath } from '../values/rvalue';
import Stat from '../values/stat';

import { MakeDmgFunc } from '../values/combatVars';

import Range, {RangeTest} from '../values/range';
import Percent, {PercentTest} from '../values/percent';

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
 *
 */
export const SubMods = ( mods, id, source )=>{

	if ( mods === null || mods === undefined ) return null;

	if ( typeof mods === 'string' ) {
		//console.log('testing mod: ' + mods );
		if ( ModTest.test(mods) ) {
			return new Mod( mods, id, source );
		} else if ( IsPerValue(mods)) {
			return new PerValue( mods, id, source );
		} else if ( !isNaN(mods) ) return Number(mods);

		console.warn('raw str mod: ' + mods );
		return mods;

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

			if ( p === 'mod' || p === 'runmod') {

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
				else if ( IsPerValue(obj) ) sub[p] = new PerValue( obj, SubPath(id,p) );
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

		if ( RangeTest.test(sub) ) return new Range(sub);
		else if ( PercentTest.test(sub)) return new Percent(sub);
		else if ( IsPerValue(sub)) return new PerValue( sub, id );

	}

	return sub;

}

/**
 *
 * @param {object|string|Array|Number} effects
 * @param {Function} funcMaker - Function that returns a function for function RValues.
 */
export const ParseEffects = ( effects, funcMaker ) => {

	if ( Array.isArray(effects) ) {

		for( let i = effects.length-1; i>= 0; i-- ){
			effects[i] = ParseEffects( effects[i], funcMaker );
		}

	} else if ( typeof effects === 'string') {

		if ( RangeTest.test(effects) ) return new Range(effects);
		else if ( PercentTest.test(effects) ) return new Percent(effects);
		else if ( IsPerValue(effects ) ) return new PerValue( effects );
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