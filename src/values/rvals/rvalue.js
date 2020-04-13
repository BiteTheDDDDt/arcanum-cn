import { TYP_RVAL } from "../consts";
import { precise } from '../../util/format';

export const PercentTest = /^(\d+(?:\.?\d+)?)\%$/i
export const RangeTest = /^\-?\d+\.?\d*\~\-?\d+\.?\d*$/i;

/**
 * Form sub-path.
 * @param {string} id
 * @param {string} child
 * @returns {string}
 */
export const SubPath = ( id, child ) => {
	return id + '.' + child;
}

export default class RValue {

	toJSON(){return this._value;}

	clone(){

		let r = new RValue( this._value, this._id );
		r.source = this.source;

		return r;

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
	 * @property {boolean} isRVal - simple test for RVal interface.
	 */
	get isRVal(){ return true; }

	/**
	 * @property {string} id
	 */
	get id() { return this._id; }
	set id(v) { this._id = v; }

	/**
	 * @property {number} value
	 */
	get value() { return this._value; }
	set value(v) { this._value = v; }

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
		return this._value;
	}

	/**
	 *
	 * @param {number} vars
	 * @param {?string} path
	 */
	constructor( vars=0, path=null ){

		this.id = path;
		this._value = vars || 0;

	}

	add(v) { this.value += v }
	set(v){ this.value = Number(v); }

	apply(mod,amt=1){
		this.add(mod.value*amt);
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
	 * Get amount when applied as an effect.
	 * @param {}
	 */
	getApply() {
		//console.log( this.id + ' getApply: ' + this.value );
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