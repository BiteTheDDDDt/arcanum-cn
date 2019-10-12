import Stat from '../values/stat';
import GData from './gdata';

export default class Resource extends GData {

	get require() {
		return super.require ||
		( !this._locked ? null : ()=>this.positive() );
	}
	set require(v){super.require = v;}

	/**
	 * @property {number} current - identical to value except uses floor of values.
	 */
	get current() { return this.unit ? Math.floor(this.value) : this._value; }

	/**
	 * @property {number} value
	 */
	get value() { return this._value; }
	set value(v) {

		if ( this._max && v > this._max ) {

			if ( v < this._value ) this._value = v;

			//
			else this._value = Math.max( this._max.value, this._value );

		} else this._value = (v >= 0 ) ? v :0;

	}

	/**
	 * @property {number} delta - last change in value.
	 */
	get delta() { return this._delta; }
	set delta(v) { this._delta = v; }

	/**
	 * @property {Stat} max - maximum resource value.
	 */
	get max() { return this._max; }
	set max(v) {

		if ( this._max === null || this._max === undefined ) {

			this._max = new Stat(v, 'max', true);

		} else {

			if ( v instanceof Stat ) this._max = v;
			else this._max.base = v;

		}

	}

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null ){

		super(vars);

		//if ( this._value != vars.val ) console.log( 'this.valu: ' + this._value );

		this._value = this._value || 0;

		if ( this.repeat !== false ) this.repeat = true;

		/**
		 * @property {boolean} unit - true if current value is reported in integer amounts.
		 */
		if ( this.unit === null || this.unit === undefined ) this.unit = true;

		if ( this._rate === null || this._rate === undefined ) this._rate = new Stat(0);

		this._lastValue = this._value;

		this._type = this._type || 'resource';

		this._delta = 0;

	}

	/**
	 * @returns {boolean} true if an unlocked item is at maximum value.
	 */
	maxed() {

		return this.max ? (this._value >= this.max) : false;

	}


	/**
	 * Not currently used any more.
	 * @param {} dt
	 */
	update( dt ) {

		if ( this._rate.value ) {

			let v = this._value + this._rate.value*dt;

			if ( this._max && v > this._max.value ) v = this._max.value;
			else if ( v < 0 ) v = 0;

			this._delta = v - this._lastValue;

			this._value = this._lastValue = v;

		} else this._delta = 0;

	}

	/**
	 * @returns {boolean} true if resource value is positive.
	 */
	positive(){
		return (this._value > 0 || (this._rate.value>0&&( (!this.max) ||this.max.value>0) ) );
	}

}