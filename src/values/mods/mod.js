import Percent from '../percent';
import Stat from '../rvals/stat';
import { precise } from '../../util/format';
import { TYP_MOD } from '../consts';
import { assign } from 'objecty';
import RValue from '../rvals/rvalue';
import { canWriteProp } from '../../util/util';
//import Emitter from 'eventemitter3';

export const ModTest = /^([\+\-]?\d+\.?\d*\b)?(?:([\+\-]?\d+\.?\d*)\%)?$/;

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


		if ( this.pctTot !== 0 ) {

			if ( this.bonus !== 0 ) s += ', ';
			s += ( this.pctTot > 0 ? '+' : '' ) + precise(100*this.pctTot) + '%';
		}
		return s;
	}

	/**
	 * @property {number} [count=0] - number of times mod is applied.
	 */
	get count() {

		if ( this._count !== null && this._count !== undefined ) {
			return this._count;
		}

		if ( this.source === null || this.source === undefined ) console.warn(this.id+ ' No Source');
		return this.source;

	}
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
		//console.log(this.id + ' Setting Count: ' + v );

	}

	/**
	 * @property {number} basePct - decimal percent
	 */
	get basePct() { return this._basePct; }
	set basePct(v) { this._basePct = v; }

	/**
	 * @property {number} bonus - bonus of mod after percent mods.
	 * basePct not added because basePct works on target of mod.
	 */
	get bonus(){return (this.base + this.mBase)*(1+this.mPct); }

	/**
	 * @property {number} pctTot - modified percent bonus of mod.
	 */
	get pctTot(){return this.basePct * (1+ this.mPct); }

	/**
	 * @property {number} countPct - base percent multiplied by number of times
	 * mod is applied.
	 */
	get countPct(){return this.pctTot*this.count;}

	/**
	 * @property {number} bonusTot - base bonus multiplied by number of times
	 * mod is applied.
	 */
	get countBonus(){return this.bonus*this.count;}

	/**
	 * @compat
	 */
	get str() { return this.value; }
	set str(v) {

		if ( typeof v ==='string' ){

			let res = ModTest.exec( v);

			if ( res ) {

				if ( res.length === 3 ) {
					//console.log('res len 3: ' + v );
					//res.forEach((v,i)=>console.log('reg['+i+']: ' + v ));
					this.base = Number(res[1]) || 0;
					this.basePct = Number(res[2])/100 || 0;
				} else if ( res.length === 2 ) {
					console.log('RES LEN IS 2: ' + v );
					this.base = res[1] || 0;
					this.basePct = 0;
				}

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
	constructor( vars=null, id=null, source=null ){

		super( null, id );

		if ( typeof source === 'number' ) {
			this.count = source;
		} else this.source = source;

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

		if ( !this.id ) this.id = DEFAULT_MOD;

	}

	clone() {
		return new Mod({base:this.base, basePct:this.basePct }, this.id, this.source ); }

	/**
	 * Apply this modifier to a given target.
	 * This is a one-time modify and doesnt use count total.
	 * @param {Object} obj - owner of the property being modified.
	 * @param {string} p - target property to which mod is being applied.
	 * @param {number} amt
	 */
	applyTo( obj, p, amt, isMod=false ) {

		let targ = obj[p];

		if ( targ instanceof RValue ) targ.addMod( this, amt );
		else if ( typeof targ === 'number') {

			if ( !canWriteProp(obj, p ) ) {
				console.log('NOT WRITABLE: ' + p );
				return;
			}
			console.log( p + ': STAT FROM NUMBER: ' + obj[p] );

			let s = obj[p] = new Stat( targ || 0, (obj.id ? obj.id +'.'  : '' ) + p );
			s.addMod( this, amt );

			/*if ( isMod ) console.log('SHOULD BE MOD: ' + s.id );
			else console.log( this.id + ' NEW STAT: ' +  s.id );*/

		} else if ( targ === null || targ === undefined ){

			console.error('DEPRECATED: MOD.applyTo() NEW MOD AT TARGET: ' + p );

		} else if ( typeof targ === 'object') {

			//console.dir( targ,  this.id + ' UNKNOWN MOD TARGET')
			if ( Array.isArray(targ) ) {

				for( let i = targ.length-1; i>= 0; i--) this.applyTo( targ[i], p, amt );

			} else {

				if ( targ.value ) {

					this.applyTo( targ, 'value', amt );

				} else {
					console.warn( this.id + ': ' + targ.id + ' !!Mod Targ: ' + targ.constructor.name);
					targ.value = amt*this.bonus*( 1 + amt*this.pctTot );
				}
			}

		}

	}

}