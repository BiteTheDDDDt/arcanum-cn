import Inventory, { SaveInstanced } from "./inventory";
import events, { DELETE_ITEM, STATE_BLOCK } from "../events";
import GData from "@/items/gdata";

/**
 * List of GData items to attempt to use/cast.
 * Spelllists and hobbies/goals, currently.
 */
export const ORDER = "top";
export const RANDOM = "rand";
export const LOOP = "loop";

export default class DataList extends Inventory {
	toJSON() {
		let data = super.toJSON() || {};
		data.lastInd = this.lastInd || undefined;

		return data && Object.keys(data).length ? data : undefined;
	}

	/**
	 * @property {number} lastInd - index of last casted spell.
	 * only used for casting spells in loop order.
	 */
	get lastInd() {
		return this._lastInd;
	}
	set lastInd(v) {
		this._lastInd = v;
	}

	/**
	 * @property {number} order - ORDER,RANDOM,LOOP - cast attempt order.
	 */
	get order() {
		return this._order;
	}
	set order(v) {
		this._order = v;
	}

	get used() {
		return this.recalcUsed();
	}
	set used(v) {
		this._used = v;
	}

	constructor(vars = null) {
		super(vars);

		this.lastInd = this.lastInd || 0;

		this.saveMode = "custom";
		this.saveMap = SaveInstanced;

		this.order = this.order || LOOP;
	}

	/**
	 * Get the next runnable data item, or null.
	 * @param {Game} g
	 * @param {(GData) => boolean} check - additional check for runnable data item
	 * @returns {GData} Next runnable data, or null.
	 */
	getRunnable(g, check) {
		const len = this.items.length;

		if (len === 0) return null;

		const start = this.nextInd();
		let i = start;

		do {
			const it = this.items[i];
			if (it.canRun(g)) {
				if (!check || !(check instanceof Function) || check(it)) {
					this.lastInd = i;
					return it;
				}
			}
			if (++i >= len) i = 0;
		} while (i !== start);

		return null;
	}

	/**
	 *
	 * @param {Game} g
	 * @returns {boolean}
	 */
	canRun(g) {
		for (let i = this.items.length - 1; i >= 0; i--) {
			if (this.items[i].canRun(g)) return true;
		}

		return false;
	}

	/**
	 * usable if at least one spell can be cast.
	 * @param {Game} g
	 * @returns {boolean}
	 */
	canUse(g) {
		for (let i = this.items.length - 1; i >= 0; i--) {
			if (this.items[i].canUse(g)) return true;
		}

		return false;
	}

	/**
	 * Returns current item without advancing index.
	 */
	curItem() {
		if (this.items.length > 0) {
			return this.items[this.nextInd()];
		}
	}

	/**
	 * Return next item without regard for cost/usability.
	 * current item index is updated.
	 */
	nextItem() {
		if (this.items.length > 0) {
			this.lastInd = this.nextInd();
			return this.items[this.lastInd];
		}
	}

	/**
	 * Get next usable item and return it.
	 * Use index is advanced.
	 * @param {*} g
	 * @returns {?GData}
	 */
	nextUsable(g) {
		const len = this.items.length;
		if (len <= 0) return null;

		const start = this.nextInd();
		let i = start;
		let blocked = null;
		let cause = null;
		do {
			const it = this.items[i];

			if (it.canUse(g)) {
				if (it.caststoppers) {
					for (let b of it.caststoppers) {
						blocked = g.self.getCause(b);
						if (blocked) {
							cause = blocked;
							break;
						}
					}
				}
				if (!blocked) {
					if (it.cost) g.payCost(it.cost);
					this.lastInd = i;
					return it;
				} else blocked = null;
			}
			if (++i >= len) i = 0;
		} while (i !== start);
		if (cause) events.emit(STATE_BLOCK, g.self, cause);
		return null;
	}

	/**
	 * Get the next GData item that fulfills predicate without any additional checks.
	 * If no predicate is specified, calls nextItem instead.
	 * @param {(GData) => boolean} check - predicate to check items against
	 * @returns {GData} Next GData item, or null.
	 */
	nextConditional(check) {
		if (!check || !(check instanceof Function)) return this.nextItem() || null;

		const len = this.items.length;
		if (len === 0) return null;

		const start = this.nextInd();
		let i = start;

		do {
			const it = this.items[i];
			if (check(it)) {
				this.lastInd = i;
				return it;
			}
			if (++i >= len) i = 0;
		} while (i !== start);

		return null;
	}

	/**
	 *
	 * @param {Context} g
	 * @returns {?GData} item used or null.
	 */
	onUse(g) {
		const it = this.nextUsable(g);
		if (it) {
			it.onUse(g);
			return it;
		}
		return null;
	}

	/**
	 * @returns {number} - index of next spell to cast.
	 */
	nextInd() {
		if (this.order === LOOP) {
			return this.lastInd + 1 < this.items.length ? this.lastInd + 1 : 0;
		} else if (this.order === ORDER) {
			return 0;
		} else if (this.order === RANDOM) {
			return Math.floor(Math.random() * this.items.length);
		}
		return 0;
	}

	dataDeleted(it) {
		this.remove(it);
	}

	/**
	 *
	 * @param {GameState} gs
	 */
	revive(gs, reviver = null) {
		super.revive(gs, reviver);

		events.add(DELETE_ITEM, this.dataDeleted, this);
	}
	recalcUsed() {
		const prop = this.spaceProp;

		let used = 0;
		for (let i = this.items.length - 1; i >= 0; i--) {
			const it = this.items[i];
			if (!it) console.warn(this.id + " null Item in Inv: " + it);
			else used += prop ? it[prop] || 0 : 1;
		}

		return used;
	}
}
