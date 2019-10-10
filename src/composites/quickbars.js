import Quickbar from "./quickbar";

/**
 * Organizes sub-quick bars.
 */
export default class Quickbars {

	/**
	 * {QuickBar[]} bars defined.
	 */
	get bars() { return this._bars; }
	set bars(v) {

		for( let p in v ) {
			v[p] = v[p] instanceof Quickbar ? v[p] : new Quickbar(v[p]);
		}
		this._bars = v;

	}

	get active() {
		return this._active;
	}
	set active(v) {
		this._active = v;
	}

	constructor( vars=null ) {

		if ( vars ) Object.assign( this, vars );

	}

	revive(state) {

		for( let p in this._bars ) {
			this._bars[p].revive(state);
		}

	}

}