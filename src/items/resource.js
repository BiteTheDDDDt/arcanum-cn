import GData from './gdata';
import { RESOURCE } from '../values/consts';


export default class Resource extends GData {

	get require() {
		return super.require ||
		( this._locked ? ()=>this.positive() : null );
	}
	set require(v){super.require = v;}

	get group(){return this._group;}
	set group(v){this._group=v}

	/**
	 * @note NEED 'this' so webpack doesn't change 's', hiding the self-reference
	 * require from 'unlock'. messy and bad.
	* @returns {boolean} true if resource value is positive.
	*/
	positive() {
		return (super.value > 0 || (this.rate.value>0&&( !this.max ||this.max.value>0) ) );
	}

	/**
	 * @property {number} current - identical to value except uses floor of values.
	 */
	get current() { return this.unit ? Math.floor(super.value.valueOf() ) : super.value.valueOf(); }

	get val(){ return super.value; }
	set val(v){ super.value = v; }

	/**
	 * @property {number} value
	 */
	get value() { return super.value; }
	set value(v) {

		if ( v > this.max ) {

			if ( v < super.value.base ) super.value = v;

			//
			else super.value = Math.max( this.max.value, super.value.valueOf() );

		} else super.value = (v >= 0 ) ? v :0;

	}

	remove( amt ) {
		if ( amt >= this.value ) {
			this.value.base = 0;
		} else this.value.base -= amt;
	}


	/**
	 * @property {string} color - optional color override.
	 */
	get color(){return this._color; }
	set color(v) {this._color=v;}

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null ){

		super(vars);

		//if ( this._value != vars.val ) console.log( 'this.valu: ' + this._value );

		if ( this.repeat !== false ) this.repeat = true;

		/**
		 * @property {boolean} unit - true if current value is reported in integer amounts.
		 */
		if ( this.unit === null || this.unit === undefined ) this.unit = true;

		if ( this.rate === null || this.rate === undefined ) this.rate = 0;

		this.type = this.type || RESOURCE;

	}

	/**
	 * Tests whether item fills unlock requirement.
	 * @returns {boolean}
	 */
	fillsRequire(){
		return this.locked === false && this.value > 0;
	}

	empty(){ return this.value <= 0; }

	/**
	 * @returns {boolean} true if item at maximum value.
	 */
	maxed() {
		return this.max ? (this.value >= this.max) : false;
	}

}