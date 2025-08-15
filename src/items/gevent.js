import GData from "@/items/gdata";
import Events, { EVT_EVENT, EVT_UNLOCK } from "../events";
import Game from "@/game";

/**
 * Represents in-game event.
 */
export default class GEvent extends GData {
	/**
	 * @property {number} rand - 100-based percent chance per 100 seconds
	 * for event to occur. indicates a randomized event.
	 */
	get rand() {
		return this._rand;
	}
	set rand(v) {
		this._rand = v;
	}

	/**
	 * @property {number} cd - cooldown.
	 */
	get cd() {
		return this._cd;
	}
	set cd(v) {
		this._cd = v;
	}

	constructor(vars = null) {
		super(vars);
	}

	/**
	 * Unlocking the event triggers the event.
	 * @todo: randomized events won't work this way.
	 */
	doUnlock(g = Game) {
		if (this.disabled || (this.value > 0 && !this.repeat)) {
			return;
		}
		if (this.locked) Events.emit(EVT_UNLOCK, this);
		//loot getter here is redundant, because amount(1) triggers changed() which has a loot getter already.
		//if ( this.loot ) g.getLoot( this.loot );

		// randomized event.
		if (this.rand) {
		} else super.amount(1);

		this.locked = false;

		Events.emit(EVT_EVENT, this);
	}

	/**
	 * Any amount of an event simply triggers the event.
	 * @param {*} g
	 * @param {*} amt
	 */
	// currently the only correct way to trigger the event is via "true" which bypasses this function. Events are meant to be unique, so we are commenting this out for the time being.

	amount(amt) {
		if (this.locked) this.doUnlock();
	}
}
