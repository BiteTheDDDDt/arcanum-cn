import { TYP_STAT, TYP_RVAL } from '../consts';
import RValue from './rvalue';

import { precise } from '../../util/format';

// number of times all stats recalculated this frame.
/*var LoopCount = 0;

export function ShowLoops(){

	if ( LoopCount > 10 ) console.log('Loops: ' + LoopCount);
	LoopCount=0;
}*/

/**
 * Stat with a list of modifiers.
 */
export default class Stat extends RValue {

	toJSON(){
		return this._value;
	}


	/**
	 * @returns {string}
	 */
	toString(){ return precise( this.value ); }

	/** @todo */
	set value(v){
		this._value = v;
	}
	/**
	 * @property {number} value
	 */
	get value() {

		//let abs = Math.abs( this._base + this._mBase );

		let bTot = this._value + this._mBase;

		if ( this._pos === true ) {

			return Math.max( bTot + Math.abs(bTot)*(this._mPct ),0);

		} else return bTot + Math.abs(bTot)*(this._mPct);

	}


	/**
	 * @returns {number}
	 */
	valueOf() {

		let bTot = this._value + this._mBase;

		if ( this._pos === true ) {

			return Math.max( bTot + Math.abs(bTot)*(this._mPct ),0);

		} else return bTot + Math.abs(bTot)*(this._mPct);

	}

	/**
	 * @property {number} base
	 */
	get base() { return this._value; }
	set base(v) { this._value = v; }

	/**
	 * @property {number} bonus - total bonus to base, computed from mods.
	 * @protected
	 */
	get mBase(){return this._mBase; }

	set mBase(v){this._mBase = v; }

	/**
	 * @property {number} mPct - mod pct bonuses, as decimal.
	 * Does not count implicit starting 1
	 * @protected
	 */
	get mPct() { return this._mPct };

	/**
	 * @property {number} pctTot - total percent added by mods.
	 * Same as mPct for Stat, but different in Mod
	 */
	get pctTot(){
		return this._mPct;
	}

	/**
	 * @property {.<string,Mod>} mods - mods applied to object.
	 */
	get mods() { return this._mods; }
	set mods(v) {

		for( let p in v ) {

			var mod = v[p];
			v[p] = (mod instanceof Mod ) ? mod : new Mod( v[p] );
		}
		this._mods = v;
	}

	/**
	 * @property {boolean} pos - restrict stat to positive values after mods.
	 */
	get pos(){return this._pos; }
	set pos(v) { this._pos = v;}

	get type(){ return TYP_STAT }


	/**
	 *
	 * @param {Object|number} vars
	 * @param {string} path
	 */
	constructor( vars=null, path, pos ) {

		super( 0, path );

		if ( vars ) {

			if ( typeof vars === 'object') {

				if ( vars.type === TYP_RVAL ) {
					this.base = vars.value;
				} else {
					this.base = vars.base;
				}

			} else if ( !isNaN(vars) ) this.base = Number(vars);

		}

		if ( pos ) this.pos = pos;

		if ( !this.base ) this.base = 0;

		this._mBase = this._mPct = 0;

		if ( !this.mods ) this.mods = {};

		this.recalc();

	}

	/**
	 * @todo set modded value to match exactly?
	 * @param {number|Stat} v
	 */
	set(v) {
		this.base = typeof v === 'number' ? v : v.base;
	}

	/**
	 * Add amount to base stat.
	 * @param {number} amt
	 */
	add( amt ) {
		super.value += amt;
	}

	/**
	 * Apply a modifier to Stat, if the applied value can be a modifier.
	 * If not, the stat is permanently modified by the mod value.
	 * @param {Mod|number|Percent|Object} val
	 * @param {number} [amt=1]
	 */
	apply( val, amt=1 ) {

		if ( (val instanceof Stat) && val.id ) 
			return this.addMod( val, amt );

		if ( ( val instanceof Stat ) ) {
			console.log('STAT WITHOUT ID: ' + val );
			val = val._value;
		}

		if ( typeof val ==='number' ) {

			this.base += amt*val;
			//deprec( this.id + ' mod: ' + mod );
			console.warn( this.id + ' adding: ' + val +'  DEPRECATED NEW base: ' + this.value );

			return;

		} else if ( typeof val === 'object') {

			/// when an object has no id, must apply to base.
			this.base += amt*( val.bonus || val.value || 0 );

			console.warn( this.id + ' DEPRECATED APPLY: ' + val + '  type: ' + val.constructor.name );

			//console.dir( val );

		} else {
			console.dir( val, 'unknown mod: ' + typeof val );
		}


	}

	/**
	 * Apply permanent modifier to stat.
	 * Used for instances.
	 * @param {Stat} mod
	 */
	perm( mod ) {

		console.warn( this.id + ' PERM MOD: ' + mod )
		if ( mod.countBonus ){
			this.base += mod.countBonus;
		} else if ( typeof mod === 'number') {
			this.base += mod;
		} else {

		}

	}

	/**
	 *
	 * @param {Mod} mod
	 * @param {number} amt
	 */
	addMod( mod, amt=1 ) {

		if ( !mod.id ) {
			console.dir( mod, 'NO MOD ID' );
			this.apply(mod, amt );
			return;
		}

		//this._mPct += amt*mod.pct;
		//this._mBase += amt*mod.bonus;

		this.mods[mod.id] = mod;
		this.recalc();

		/*let cur = this.mods[ mod.id ];
		if ( cur === undefined ) {
			cur = this.mods[mod.id] = mod;
		}*/


	}

	/**
	 *
	 * @param {*} mod
	 */
	removeMods( mod ){

		console.log('REMOVE MOD: ' + mod.id);

		let cur = this.mods[mod.id];
		if ( cur === undefined) return;

		this.mods[mod.id] = undefined;

		this.recalc();

	}

	/**
	 * Get the new stat value if base and percent are changed
	 * by the given amounts.
	 * @param {number} delBonus - delta base.
	 * @param {number} delPct - delta percent.
	 * @returns {number} - new stat value.
	 */
	delValue( delBonus=0, delPct=0 ) {
		return ( this._value + this._mBase + delBonus )*( 1 + this._mPct + delPct );
	}

	/**
	 * Recalculate the total bonus and percent applied to stat.
	 * @protected
	 */
	recalc(){

		let bonus = 0, pct = 0;

		for( let p in this._mods ) {

			var mod = this._mods[p];
			if (mod === undefined ) continue;

			pct += mod.countPct || 0;
			bonus += mod.countBonus || 0;

		}

		this._mPct = pct;
		this._mBase = bonus;


	}

}