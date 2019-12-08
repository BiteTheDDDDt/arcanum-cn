import GData from "./gdata";
import Events, { EVT_EVENT } from "../events";
/**
 * Represents in-game wizard class.
 */
export default class GClass extends GData {

	constructor(vars=null){

		super(vars);

		if ( vars.warn !== false ) {
			this.warnMsg = 'Alternate Wizard classes of this tier will be locked.';
			this.warn = true;
		}

	}

	/**
	 *
	 * @param {*} g
	 * @param {*} amt
	 * @returns {boolean}
	 */
	amount( g, amt ) {

		if ( !super.amount(g,amt) ) return false;

		g.state.player.setClass( this.name );
		if ( this.loot ) g.getLoot( this.loot );

		this.locked = false;

		Events.emit( EVT_EVENT, this );

		return true;

	}

}