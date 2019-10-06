import Stat from '../values/stat';
import GData from './gdata';

/**
 * Like a resource but a single Stat value with no max, that can be directly modified.
 * Resources can't be modified by stats because they represent progress vs a max.
 */
export default class StatData extends GData {

	/**
	 * @property {number} current - identical to value except uses floor of values.
	 */
	get current() { return this.unit ? Math.floor(this.value) : this._value; }

	/**
	 * @property {number} value
	 */
	get value() { return this._value; }
	set value(v) {

		if ( v instanceof Stat ) this._value = v;
		else if ( this._value ) {

			this._value.base = (typeof v === 'object') ? v.value : v;

		} else this._value = new Stat(v);

	}
	valueOf(){ return this._value.value; }

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null ){

		super(vars);

		this.value = new Stat( this._value || 0 );

		/**
		 * @compat. statData is a pure stat with no max value.
		 */
		this.max = undefined;

		/**
		 * @property {boolean} unit - true if current value is reported in integer amounts.
		 */
		if ( this.unit === null || this.unit === undefined ) this.unit = true;

		if ( this._rate === null || this.rate === undefined ) this._rate = new Stat(0);

		this._type = this._type || 'resource';

	}

	/**
	 * @returns {boolean} true if an unlocked item is at maximum value.
	 */
	maxed() {
		return false;
	}


	/**
	 * Not currently used any more.
	 * @param {} dt
	 */
	update( dt ) {

		if ( this._rate.value ) {

			let v = this._value + this._rate.value*dt;
			this.value = v;

		}

	}

}