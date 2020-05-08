import { TYP_RANGE } from "./consts";
import { precise } from "../util/format";
import Stat from "./rvals/stat";
import { SubPath } from "./rvals/rvalue";

export const RangeTest = /^\-?\d+\.?\d*\~\-?\d+\.?\d*$/i;

const SPLIT_CHAR = '~';

export default class Range {

	toJSON() {
		return (typeof this.min === 'number' ? this.min : this.min.base ) + SPLIT_CHAR +
				( typeof this.max === 'number' ? this.max : this.max.base );

	}

	toString() {
		return ( this.min == this.max ) ? precise( this.min ) :
		precise( this.min ) + ' ' + SPLIT_CHAR + ' ' + precise(this.max );
	}

	/**
	 * @property {string} id
	 */
	get id() { return this._id; }
	set id(v) { this._id = v; }

	/**
	 * @property {string} type - type constant.
	 */
	get type(){ return TYP_RANGE; }

	get min(){return this._min;}
	set min(v){this._min=v}

	get max(){return this._max}
	set max(v){this._max=v;}

	/**
	 * @property {number} value - getting a range value
	 * returns a random number in the range, max exclusive.
	 */
	get value() {
		return this.min + Math.random()*( this.max - this.min );
	}
	set value(v){
		this.min = this.max = v;
	}

	/**
	 * @property {boolean} isRVal - simple test for RVal interface.
	 * @todo rvalue as interface base object with no values?
	 */
	get isRVal(){return true;}

	valueOf(){ return this.value; }

	/**
	 *
	 * @param {Object|number|string} min
	 * @param {?number} max
	 */
	constructor(min, max) {

		if ( typeof min === 'string' ) {

			let parts = min.split( SPLIT_CHAR );
			this.min = Number( parts[0] );
			this.max = Number( parts[1] );

		} else if ( typeof min ==='object') Object.assign( this, min );
		else {

			this.min = Number( min );
			this.max = Number( max === undefined ? min : max );

		}

		if ( typeof this.min !== 'number') console.log('min: ' + this.min + ' -> ' + this.max );

	}

	/**
	 * Test if a number is within the range, endpoints included.
	 * @param {number} v
	 * @returns {boolean}
	 */
	contains(v) {
		return v >= this.min && v <= this.max;
	}

	/**
	 * Return a percent of the range value.
	 * @param {number} pct - decimal percent.
	 */
	percent( pct ) {
		return this.min + pct*( this.max - this.min );
	}

	addMod( mod, amt ) {

		if ( !(this.min instanceof Stat) ) this.min = new Stat( this.min, SubPath(this.id, 'min') );
		if ( !(this.max instanceof Stat) ) this.max = new Stat(this.max, SubPath( this.id, 'max') );

		this.min.addMod(mod, amt);
		this.max.addMod(mod, amt);

	}

	removeMods( mod ){

		if ( this.min instanceof Stat ) this.min.removeMods(mod);
		if ( this.max instanceof Stat ) this.max.removeMods(mod);
	}

	/**
	 * Add amount to range.
	 * @param {number|Range} amt
	 */
	add( amt ) {

		//console.log('ADDING RANGE: ' + amt );

		if ( typeof amt === 'number' ) {
			this.min += amt;
			this.max += amt;
		} else if ( amt && typeof amt ==='object') {

			if ( amt.type === TYP_RANGE ){
				this.min += amt.min;
				this.max += amt.max;
			} else if ( amt.value ) {
				this.min += amt.value;
				this.max += amt.value;
			}

		}

	}

	/**
	 * Necessary for RValue compatibility.
	 * @param {*} state - ignored
	 * @param {*} target - ignored
	 */
	getApply() {
		return this.valueOf();
	}


}