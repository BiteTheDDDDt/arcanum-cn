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
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null ){

		super(vars);

		if ( this.value === undefined ) this.value = 0;

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
	 * @returns {false} true if an unlocked item is at maximum value.
	 */
	maxed() { return false; }

	/**
	 * Pure stat cannot be filled.
	 * @returns {false}
	 */
	filled() { return false; }


	/**
	 * Not currently used.
	 * @param {} dt
	 */
	update( dt ) {

		if ( this._rate.value ) {
			this.value += this._rate.value*dt;;
		}

	}

}