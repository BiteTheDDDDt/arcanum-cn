import { TYP_RVAL } from "./consts";
import { precise } from '../util/format';

export const PercentTest = /^(\d+(?:\.?\d+)?)\%$/i
export const RangeTest = /^\-?\d+\.?\d*\~\-?\d+\.?\d*$/i;

export default class RValue {

	Parse(str){

		if ( PercentTest.test(str) ) return new Percent(str);
		else if ( RangeTest.test(str) ) return new Range(str);

		return new RValue( str );

	}

	/**
	 * @property {object} source - object that defines the value,
	 * if any.
	 */
	get source(){return this._source;}
	set source(v) {
		if ( !v ) this._source = null;
		else this._source = v instanceof RValue ? v : v.value;
	}

	/**
	 * @property {object} target - target modified.
	 */
	get target(){return this._target;}
	set target(v){this._target=v}

	/**
	 * @property {boolean} isRVal - simple test for RVal interface.
	 */
	get isRVal(){return true;}

	/**
	 * @property {string} id
	 */
	get id() { return this._id; }
	set id(v) { this._id = v; }

	/**
	 * @property {number} value
	 */
	get value() { return this._base; }
	set value(v) { this._base = v; }

	/**
	 * @property {string} type
	 */
	get type(){ return TYP_RVAL }

	/**
	 * @returns {string}
	 */
	toString(){ return precise( this.value ); }

	/**
	 * @returns {number}
	 */
	valueOf(){
		return ( typeof this._base === 'object') ? this._base.value : this._base;
	}

	constructor( vars=null ){

		if ( typeof vars === 'number') {
			this.value = vars;
		} else this.value = 0;

	}

	add(v) { this.value += v }
	set(v){ this.value = v; }

	/**
	 * Apply standard modifier.
	 * @param {Mod} mod
	 * @param {number} amt
	 */
	addMod( mod, amt ){
		// base rvalue does not accept modifiers.
	}

	/**
	 * Apply an unknown modifier.
	 * @param {*} mod
	 * @param {number} amt
	 */
	apply(mod, amt) {
		// base rvalue does not accept modifiers.
	}

	/**
	 * Get the new value if base and percent are changed
	 * by the given amounts.
	 * @param {number} delBonus - delta base.
	 * @param {number} delPct - delta percent. ignored.
	 * @returns {number} - new stat value.
	 */
	delValue( delBonus=0 ) {
		return this._base + delBonus;
	}

	/**
	 * Remove a standard modifier.
	 * @param {Mod} mod
	 */
	removeMod( mod ){
		// ignored.
	}

}