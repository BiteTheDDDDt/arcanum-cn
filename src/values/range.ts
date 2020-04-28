import { TYP_RANGE } from "./consts";
import { precise } from "../util/format";

export const RangeTest = /^\-?\d+\.?\d*\~\-?\d+\.?\d*$/i;

const SPLIT_CHAR = '~';

export default class Range {

	toJSON() { return this.min + SPLIT_CHAR + this.max; }

	toString() { return precise( this.min ) + ' ' + SPLIT_CHAR + ' ' + precise(this.max ); }

	get type(){ return TYP_RANGE; }

	_min:any;
	_max:any;

	get min():any{return this._min;}
	set min(v){this._min=v}

	get max():any{return this._max}
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
	constructor(min:any, max:any) {

		if ( typeof min === 'string' ) {

			let parts = min.split( SPLIT_CHAR );
			this.min = Number( parts[0] );
			this.max = Number( parts[1] );

		} else if ( typeof min ==='object') Object.assign( this, min );
		else {

			this.min = Number( min );
			this.max = Number( max === undefined ? min : max );

		}

		//console.log('min: ' + this.min + ' -> ' + this.max );


	}

	/**
	 * Test if a number is within the range, endpoints included.
	 * @param {number} v
	 * @returns {boolean}
	 */
	contains(v:number):boolean {
		return v >= this.min && v <= this.max;
	}

	/**
	 * Return a percent of the range value.
	 * @param {number} pct - decimal percent.
	 */
	percent( pct:any ):number {
		return this.min + pct*( this.max - this.min );
	}

	/**
	 * Add amount to range.
	 * @param {number|Range} amt
	 */
	add( amt:any ) {

		//console.log('ADDING RANGE: ' + amt );

		if ( typeof amt === 'number' ) {
			this.min += amt;
			this.max += amt;
		} else if ( amt && typeof amt ==='object') {

			if ( amt instanceof Range ){
				this.min += amt.min;
				this.max += amt.max;
			} else if ( amt.value ) {
				this.min += amt.value;
				this.max += amt.value;
			}

		}

	}

}