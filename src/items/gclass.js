import Events, { EVT_EVENT } from "../events";
import CharUpgrade from "@/items/charupgrade";
/**
 * Represents in-game wizard class.
 */
export default class GClass extends CharUpgrade {
	constructor(vars = null) {
		super(vars);

		if (vars.warn !== false) {
			this.warnMsg = "该阶级的其他法师职业将被锁定。";
			this.warn = true;
		}
	}

	/**
	 *
	 * @param {Game} g
	 * @param {number} amt
	 * @returns {boolean}
	 */
	changed(g, amt) {
		super.changed(g, amt);

		g.state.player.setClass(this.name);

		this.locked = false;

		Events.emit(EVT_EVENT, this);
	}
}
