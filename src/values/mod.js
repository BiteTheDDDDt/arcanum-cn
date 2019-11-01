import Percent from './percent';
import Stat from './stat';
import { splitKeyPath, logObj } from '../util/util';
import { precise } from '../util/format';

//import Emitter from 'eventemitter3';

export const ModTest = /^([\+\-]?\d+\.?\d*\b)?(?:([\+\-]?\d+\.?\d*)\%)?$/i;

/**
 * Modifier for mod without id.
 */
export const DEFAULT_MOD = 'all';

/**
 * Parse object into modifiers.
 * @param {} mods
 */
export const ParseMods = ( mods, id ) => {

	if ( !mods ) return null;
	if (!id) logObj(mods, 'unknown mod id');

	return SubMods(mods, id);

}

/**
 *
 */
export const SubMods = (mods, id)=>{

	if ( !mods ) return null;

	if ( typeof mods === 'string' ) {

		if ( ModTest.test(mods) ) return new Mod(mods, id );
		return mods;

	} else if ( typeof mods === 'number') return new Mod( mods, id );

	if ( typeof mods === 'object'){
		for( let s in mods ){
			if ( s.includes('.')) splitKeyPath( mods, s );
		}
	}

	for( let s in mods ) {

		let val = mods[s];
		let typ = typeof val;

		if ( typ === 'string') {

			if( ModTest.test(val) ) {
				mods[s] = new Mod( val, id );
			}

		} else if ( typ === 'number' ) {

			mods[s] = new Mod(val, id);

		} else if ( val instanceof Mod ) {
			//console.log('ALREADY A MOD: '+ s );
			if (id ) val.id = id;
		} else if ( typ === 'object') {

			if ( val.id || val.value || val.base ) mods[s] = new Mod(val, id );
			else mods[s] = SubMods( val, id );

		} else {
			//logObj( mods, id + ' INVALID MOD ' + (typ) );
		}

	}
	return mods;

}

export default class Mod extends Stat {

	toJSON(){

		var val = this._basePct === 0 ? this.base : (
			(this.base || '') + (( this._basePct > 0 ? '+' : '') + (100*this.basePct)  + '%')
		);

		//console.log('mod save val: ' + val );

		return {
			value:val,
			count:this.count.valueOf()
		};

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
	get count() { return this._count; }
	set count(v) { this._count = v; }

	/**
	 * @property {number} bonus - total flat bonus of mod.
	 */
	get bonus(){return (this.base + this.mBase)*(1+this.mPct); }
	/**
	 * @property {number} pct - total percent bonus of mod.
	 */
	get pct(){return this.basePct * (1+ this.mPct); }

	get value() { return super.value; }
	set value(v) {

		//console.log('assinging to mod: ' + this.id + ' val: ' + v );

		if ( typeof v ==='string' ){

			let res = ModTest.exec( v);

			if ( res ) {

				//res.forEach((v,i)=>console.log('reg['+i+']: ' + v ));
				this.base = Number(res[1]) || 0;
				this.basePct = Number(res[2])/100 || 0;

			} else console.error( this.id + ' no mod regex: ' + v );


		} else if ( v instanceof Percent ) {

			this.basePct = v.value;

		} else if ( !isNaN(v) ) {

			this.base = v;
		}

	}

	get pctTot(){return this.pct*this._count;}
	get bonusTot(){return this.bonus*this._count;}

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null, id=null ){

		super( null, id );

		if ( typeof vars === 'number') this.base = vars;
		else if ( typeof vars === 'string') this.value = vars;
		else if ( vars ) {
			Object.assign( this, vars );
		}

		if( this._count === undefined ) this._count = 1;

		this.base = this.base || 0;
		this.basePct = this.basePct || 0;

		this.id = id || this.id || DEFAULT_MOD;

	}

	clone() { return new Mod({base:this.base, basePct:this.basePct, count:1}, this.id ); }

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
		//else if ( targ instanceof Mod) targ.applySelf( this, amt ); ///// NO LONGER HAPPENS. superclass.
		else if ( targ === null || targ === undefined || typeof targ === 'number' ){

			console.log('MOD.applyTo() CREATE NEW MOD AT TARGET: ' + p );
			let s = obj[p] = new Stat( targ || 0, p );
			s.addMod( this, amt );

		} else if ( typeof targ === 'object') {

			console.warn( this.id + ' !!!!Generic Mod Target: ' + targ.id );
			targ.value = ( ( Number(targ.value) || 0 ) + amt*this.bonus )*( 1 + amt*this.pct );

			// TODO? Percent all of obj?

		}

	}

}