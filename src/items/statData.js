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
	 * Add amount to base value.
	 * @param {number} amt - base amount being added.
	 * @returns {number} actual change in value.
	 */
	add(amt) {

		let prev = this.value.valueOf();
		this.value.base += amt;

		return this.value.valueOf() - prev;

	}

	/**
	 * Set the StatData base value and apply all change mods
	 * @note This does trigger all game events, etc.
	 * @param {Game} g - game instance, for mods stuff. ( @todo use event instead?)
	 * @param {number} amt
	 */
	setBase( g, amt ) {

		let del = this.add( amt - this.value.base );
		this.changed( g, del );

	}

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null ){

		super(vars);

		if ( this.value === undefined || this.value === null ) this.value = 0;
		this.repeat = true;

		/**
		 * @property {boolean} unit - true if current value is reported in integer amounts.
		 */
		if ( this.unit === null || this.unit === undefined ) this.unit = true;

		if ( this._rate === null || this.rate === undefined ) this.rate = 0;

	}

	/*amount( g, count ) {
	}*/

	/**
	 * Not currently used any more.
	 * @param {} dt
	 */
	/*update( dt ) {

		if ( this._rate.value !== 0 ) {

			this.value = this.value.base + this._rate.value*dt;

		} else this._delta = 0;

	}*/

	/**
	 * @returns {false} true if an unlocked item is at maximum value.
	 */
	maxed() { return false; }

	/**
	 * Pure stat cannot be filled.
	 * @returns {false}
	 */
	filled() { return false; }

}