import Percent from "./percent";
import Range from "./range";
import { TYP_RVAL } from "./consts";

export const PercentTest = /^(\d+(?:\.?\d+)?)\%$/i
export const RangeTest = /^\-?\d+\.?\d*\~\-?\d+\.?\d*$/i;

export default class RValue {

	Parse(str){

		if ( PercentTest.test(str) ) return new Percent(str);
		else if ( RangeTest.test(str) ) return new Range(str);

		return new RValue( str );

	}

	/**
	 * @property {string} id
	 */
	get id(){return this._id; }
	set id(v) { this._id = v;}

	get value() { return this._value; }
	set value(v) { this._value = v; }

	get type(){ return TYP_RVAL }

	valueOf(){
		return ( typeof this._value === 'object') ? this._value.value : this._value;
	}

	constructor( vars=null ){

		if ( typeof vars === 'string') {

		}

	}

	add(v) { this.value += v}
	set(v){this.value = v;}

	/**
	 * Apply an unknown modifier.
	 * @param {*} mod
	 * @param {number} amt
	 */
	apply(mod, amt) {
		// base rvalue does not accept modifiers.
	}

	/**
	 * Apply standard modifier.
	 * @param {Mod} mod
	 * @param {number} amt
	 */
	addMod( mod, amt ){
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
		return this._value + delBonus;
	}

	/**
	 * Remove a standard modifier.
	 * @param {Mod} mod
	 */
	removeMod( mod ){
		// ignored.
	}

}