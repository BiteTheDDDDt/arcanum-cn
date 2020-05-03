import Percent from "../values/percent";

/**
 * Percent with an associated object to trigger on successful roll.
 * CURRENTLY UNUSED.
 */
export default class Chance {

	toJSON(){

		return {
			pct:this.pct,
			result:this.result
		}

	}

	get result() { return this._result; }
	set result(v) { this._result = v; }

	/**
	 * @property {Percent}
	 */
	get pct() { return this._pct; }
	set pct(v) { this._pct = v instanceof Percent ? v : new Percent(v); }

	constructor( pct, obj ) {

		this.pct = pct;
		this.result = obj;

	}

}