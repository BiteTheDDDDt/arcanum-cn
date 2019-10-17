import GData from "./gdata";
import Events, { EVT_EVENT } from "../events";
import Game from '../game';
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

	amount( g, amt ) {

		if ( !super.amount(g,amt) ) return;

		if ( this.loot ) Game.getLoot( this.loot );

		this.locked = false;

		Events.emit( EVT_EVENT, this );

	}

}