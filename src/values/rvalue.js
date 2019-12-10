import Percent from "./percent";
import Range from "./range";
import { TYP_RVAL } from "./consts";
import { precise } from '../util/format';

export const PercentTest = /^(\d+(?:\.?\d+)?)\%$/i
export const RangeTest = /^\-?\d+\.?\d*\~\-?\d+\.?\d*$/i;

/*Parse(str){

	if ( PercentTest.test(str) ) return new Percent(str);
	else if ( RangeTest.test(str) ) return new Range(str);

	return new RValue( str );

}*/

export default class RValue {

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
		return this._base;
	}

	/**
	 *
	 * @param {number} vars
	 * @param {?string} path
	 */
	constructor( vars=0, path=null ){

		this.id = path;
		this._base = vars;

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
	 * Get amount when applied as an effect.
	 * @param {}
	 */
	getEffect() {
		//console.log( this.id + ' getEffect: ' + this.value );
		return this.value;
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