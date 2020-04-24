import Resource from "./resource";

/**
 * A reversed Resource is empty/used up at max, and 'filled' (usable)
 * at 0.
 * this.value is the amount used out of max.
 */
export default class RevStat extends Resource {

	constructor( vars ){

		super(vars);

		if ( !this._max ) this.max = 0;

	}

	free(){ return this.max - this.value; }

	empty(){ return this.value>=this.max.value; }

	/**
	 * Determine if this resource can pay the given amount of value.
	 * Made a function for reverseStats, among other things.
	 * @param {number} amt
	 */
	canPay( amt ) {
		return this.value - amt <= this.max.value;
	}
	remove( amt ) {
		this.value.base += amt;
	}

	doFill(){ this.value = 0; }

	/**
	 * Determine whether the item is filled relative to a filling rate.
	 * if the filling rate + natural item rate can't fill the item
	 * it is considered filled to avoid getting stuck.
	 * @param {number} rate
	 */
	filled( rate=0 ) { return this.value <= 0 || (this.rate && (this.rate+rate) >=0); }

	maxed() { return this.value<=0; }

}