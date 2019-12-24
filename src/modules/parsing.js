import Mod, { ModTest } from 'values/mod';
import PerValue, { IsPerValue } from 'values/pervalue';
import { splitKeys, logObj } from '../util/util';
import { SubPath } from '../values/rvalue';

/**
 * Parse object into modifiers.
 * @param {} mods
 * @returns {Object} parsed modifiers.
 */
export const ParseMods = ( owner, mods, id ) => {

	if ( !mods ) return null;
	if (!id) {
		if ( owner ) id = owner.id;
		if ( !id ) {
			id = '';
			logObj( mods, 'invalid mod: ' + id );
		}
	}

	mods = SubMods(owner, mods, id);

	// @todo: no more key splitting. item tables?
	splitKeys(mods);

	return mods;

}

/**
 *
 */
export const SubMods = ( owner, mods, id)=>{

	if ( mods === null || mods === undefined ) return null;

	if ( typeof mods === 'string' ) {

		if ( ModTest.test(mods) ) return new Mod( mods, id, owner );
		else if ( IsPerValue(mods)) return new PerValue( mods, id, owner );
		return mods;

	} else if ( typeof mods === 'number') return new Mod( mods, id, owner );
	else if ( typeof mods !== 'object' ) return mods;

	// @note str is @compat
	if ( mods.id || mods.base || mods.str ) return new Mod( mods, id, owner );

	for( let s in mods ) {

		let val = mods[s];
		if ( !val) continue;

		if ( val instanceof Mod ) {

			if ( id ) val.id = SubPath(id, s);
			val.owner = owner;
			continue;

		}

		mods[s] = SubMods( owner, val, SubPath(id, s) );

	}
	return mods;

}