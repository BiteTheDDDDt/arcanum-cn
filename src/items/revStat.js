import Resource from "./resource";
import Stat from "../values/stat";

/**
 * A reversed Resource is 'filled' at 0 and bad at max.
 */
export default class RevStat extends Resource {

	constructor( vars ){

		super(vars);

		if ( !this._max ) this.max = 0;
		this._value = this._value || 0;

	}

	/**
	 * Determine whether the item is filled relative to a filling rate.
	 * if the filling rate + natural item rate can't fill the item
	 * it is considered filled to avoid getting stuck.
	 * @param {number} rate
	 */
	filled( rate=0 ) { return this._value <= 0 || (this.rate && (this.rate+rate) >=0); }

	maxed() { return this._value <= 0; }

}