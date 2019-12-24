import Percent from './percent';
import Stat from './stat';
import { splitKeys, logObj } from '../util/util';
import { precise } from '../util/format';
import { TYP_MOD } from './consts';
import { assign } from 'objecty';
import { SubPath } from './rvalue';
import PerValue, { IsPerValue } from './pervalue';
//import Emitter from 'eventemitter3';

export const ModTest = /^([\+\-]?\d+\.?\d*\b)?(?:([\+\-]?\d+\.?\d*)\%)?$/i;

/**
 * Modifier for mod without id.
 */
export const DEFAULT_MOD = 'all';

export const SetModIds = (mods, id ) => {

	if ( mods instanceof Mod ) mods.id = id;
	else if ( typeof mods === 'object') {
		for( let p in mods ) {
			SetModIds( mods[p], id);
		}
	}
}

export default class Mod extends Stat {

	toJSON(){

		if ( this._basePct === 0 ) return this.base;

		var val = (this.base || '') + (( this._basePct > 0 ? '+' : '') + (100*this.basePct)  + '%');

		return val;

	}

	toString() {

		let s = ( this.bonus !== 0 ?
		 precise( this.bonus.toString() )
		: '' );


		if ( this.pct !== 0 ) {

			if ( this.bonus !== 0 ) s += ', ';
			s += ( this.pct > 0 ? '+' : '' ) + precise(100*this.pct) + '%';
		}
		return s;
	}

	/**
	 * @property {number} [count=0] - number of times mod is applied.
	 */
	get count() { return this._count || (this.owner?this.owner.value : 1); }
	set count(v) {

		/**
		 * @compat only
		 * @note - rare recursive save bug. count:{ str:{ str:{str:""}}
		 */
		if ( v && (typeof v === 'object') ) {

			if ( v.str) this.count = v.str;
			else this._count = v;
			//else if ( v.value ) this.count = v.value;

		} else this._count = v;

	}

	/**
	 * @property {number} bonus - base bonus of mod.
	 */
	get bonus(){return (this.base + this.mBase)*(1+this.mPct); }
	/**
	 * @property {number} pct - base percent bonus of mod.
	 */
	get pct(){return this.basePct * (1+ this.mPct); }

	/**
	 * @property {number} pctTot - base percent multiplied by number of times
	 * mod is applied.
	 */
	get pctTot(){return this.pct*this.count;}

	/**
	 * @property {number} pctTot - base bonus multiplied by number of times
	 * mod is applied.
	 */
	get bonusTot(){return this.bonus*this.count;}

	/**
	 * @compat
	 */
	get str() { return this.value; }
	set str(v) {

		if ( typeof v ==='string' ){

			let res = ModTest.exec( v);

			if ( res ) {

				//res.forEach((v,i)=>console.log('reg['+i+']: ' + v ));
				this.base = Number(res[1]) || 0;
				this.basePct = Number(res[2])/100 || 0;

			} else console.error( this.id + ' no mod regex: ' + v );


		} else if ( v instanceof Percent ) {

			this.basePct = v.pct;

		} else if ( !isNaN(v) ) {

			this.base = v;
		} else if ( typeof v === 'object') {

			/**
			 * @note check for recursive str assign.
			 */
			if ( v && (typeof v === 'object') && v.str) {
				this.str = v.str;
			}

		}

	}

	get type(){ return TYP_MOD }

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null, id=null, owner=null ){

		super( null, id );

		this.owner = owner;
		if ( typeof vars === 'number') this.base = vars;
		else if ( typeof vars === 'string') this.str = vars;
		else if ( vars ) {

			if ( vars.value ) {
				/** @compat */
				this.str = vars.value;
			} else assign( this, vars );


		}

		this.base = this.base || 0;
		this.basePct = this.basePct || 0;

		this.id = id || this.id || DEFAULT_MOD;

	}

	clone() { return new Mod({base:this.base, basePct:this.basePct }, this.id ); }

	/**
	 * Apply this modifier to a given target.
	 * This is a one-time modify and doesnt use count total.
	 * @param {Object} obj - owner of the property being modified.
	 * @param {string} p - target property to which mod is being applied.
	 * @param {number} amt
	 */
	applyTo( obj, p, amt ) {

		let targ = obj[p];

		if ( targ instanceof Stat ) targ.addMod( this, amt );
		else if ( targ === null || targ === undefined || typeof targ === 'number' ){

			//console.log('MOD.applyTo() CREATE NEW MOD AT TARGET: ' + p );
			let s = obj[p] = new Stat( targ || 0, p );
			s.addMod( this, amt );

		} else if ( typeof targ === 'object') {

			console.warn( this.id + ' !!Generic Mod Targ: ' + targ.id );
			targ.value = ( ( Number(targ.value) || 0 ) + amt*this.bonus )*( 1 + amt*this.pct );

			// TODO? Percent all of obj?

		}

	}

}


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