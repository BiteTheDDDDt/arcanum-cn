import { itemRevive } from "@/modules/itemgen";
import Item from "@/items/item";
import game from "@/game";
import Base, { mergeClass } from "../items/base";
import Stat from "@/values/rvals/stat";

/**
 * Equipment slot.
 */
export default class Slot {
	toJSON() {
		return {
			id: this.id,
			item: this.item,
			savedMax: this.oldMax,
			max: this.max,
		};
	}

	get item() {
		return this._item;
	}
	set item(v) {
		this._item = v;
	}

	get max() {
		return this._max;
	}
	set max(v) {
		this._max = v instanceof Stat ? v : new Stat(v, "max", 0);
		if (this._max.update !== Stat.prototype.update) return;
		this.oldMax = this._max.valueOf();
		let origFunc = this._max.update.bind(this._max);
		this._max.update = () => {
			let result = origFunc();
			if (result) this.slotSizeChange(this._max.valueOf());
			return result;
		};
	}

	constructor(vars = null) {
		if (vars) Object.assign(this, vars);

		if (!this.max) this.max = this.max || 0; //max can be 0
		this.item = this.item || (this.max > 1 ? [] : null);

		/**
		 * @property {boolean} multi - true if slot holds multiple items.
		 */
		this.multi = Array.isArray(this.item);

		//this.name = this._name || this.id;
	}

	*[Symbol.iterator]() {
		if (Array.isArray(this.item)) {
			for (let i = 0; i < this.item.length; i++) yield this.item[i];
		} else yield this.item;
	}

	/**
	 * @returns {string[]}
	 */
	getItemIds() {
		if (this.item == null) return [];

		if (Array.isArray(this.item)) {
			const a = [];
			for (let i = 0; i < this.item.length; i++) a.push(this.item[i].id);
			return a;
		} else return [this.item.id];
	}

	/**
	 * Compute spaces left in slot.
	 * @returns {number}
	 */
	freeSpace(forcedsize) {
		let count = forcedsize || this.max;
		if (!this.item) return count;
		else if (count.valueOf() === 1) return 0;

		// actually possible now
		if (!Array.isArray(this.item)) return -1;

		for (let i = this.item.length - 1; i >= 0; i--) {
			count -= this.item[i].numslots || 1;
		}

		return count;
	}

	/**
	 *
	 * @param {Item} it - the item to place in the slot.
	 * @returns {Item|boolean} Item(s) removed from slot, or true,
	 * if no item needs to be removed.
	 */
	equip(it) {
		const spaces = it.numslots || 1;

		// won't fit in slot.
		if (spaces > this.max) return false;

		if (this.multi === true) {
			return this.addMult(it, spaces);
		} else if (!this.item) {
			it.updated();

			this.item = it;
			return true;
		} else {
			const tmp = this.item;
			this.item = it;

			it.updated();
			tmp.updated();

			return tmp;
		}
	}

	/**
	 * Add item when items is array.
	 * @param {*} it
	 * @param {number} spaces - used spaces.
	 */
	addMult(it, spaces) {
		if (this?.item?.find(v => v.id === it.id)) return false;

		it.updated();
		this.item.push(it);
		for (let i = this.item.length - 2; i >= 0; i--) {
			spaces += this.item[i].numslots || 1;
			if (spaces > this.max) {
				const removed = this.item.splice(0, i + 1);
				removed.forEach(item => item.updated());
				return removed;
			}
		}
		return true;
	}

	/**
	 * Find item in slot by id.
	 * @param {string} id
	 * @returns {Item|null}
	 */
	find(id, proto = false) {
		if (this.item === null || this.item === undefined) return null;
		if (proto) {
			return this.multi
				? this.item.find(v => v.id === id || v.recipe === id)
				: this.item.id === id || this.item.recipe === id
					? this.item
					: null;
		} else {
			return this.multi ? this.item.find(v => v.id === id) : this.item.id === id ? this.item : null;
		}
	}

	/**
	 *
	 * @param {(*)=>boolean} pred
	 */
	match(pred) {
		if (this.item === null) return null;
		return this.multi ? this.item.find(pred) : pred(this.item) ? this.item : null;
	}

	/**
	 *
	 * @param {*} it
	 * @returns {boolean}
	 */
	has(it) {
		return this.multi === false ? this.item === it : this.item.includes(it);
	}

	/**
	 * Remove item from slot.
	 * @param {?Item} [it=null] - item to remove. If item is null, any item(s) in slot are removed.
	 * @returns {?Item|boolean} - If no parameter is specified, removes all items and returns them.
	 * If a param is specified, returns the item removed.
	 */
	remove(it = undefined) {
		if (this.item === it) {
			it.updated();

			this.item = null;
			return it;
		} else if (it === null || it === undefined) {
			it = this.item;
			this.item = null;

			if (it) it.updated();

			return it;
		} else if (this.multi || Array.isArray(this.item)) {
			const ind = this.item.indexOf(it);
			if (ind < 0) return false;

			it.updated();

			return this.item.splice(ind, 1)[0];
		}

		return false;
	}

	/**
	 *
	 * @param {Context} g
	 */
	begin(g) {
		if (this.item === null || this.item === undefined) return;
		if (Array.isArray(this.item)) {
			for (let i = this.item.length - 1; i >= 0; i--) {
				this.item[i].begin(g);
			}
		} else this.item.begin(g);
	}

	revive(gs) {
		if (this.item === null || this.item === undefined) return;
		if (Array.isArray(this.item)) {
			const ids = {};

			const all = this.item;
			for (let i = all.length - 1; i >= 0; i--) {
				const it = itemRevive(gs, all[i]);

				if (!it || ids[it.id] === true) {
					all.splice(i, 1);
				} else {
					// @note seems to be some sort of duplicate item check.
					// this shouldn't occur but seems familiar as a previous bug.
					all[i] = it;
					ids[it.id] = true;
					//it.worn=true;
				}
			}
		} else {
			this.item = itemRevive(gs, this.item);
			//if ( this.item !== null && this.item !== undefined )this.item.worn=true;
		}
	}

	/**
	 * Return the hands used by a weapon held in this slot.
	 */
	hands() {
		return this.item != null ? this.item.hands || 0 : 0;
	}

	empty() {
		return this.item === null || (Array.isArray(this.item) && this.item.length === 0);
	}
	hasTag(t) {
		if (!this.item) return false;
		if (Array.isArray(this.item)) {
			const ids = {};
			const all = this.item;
			for (let i = all.length - 1; i >= 0; i--) {
				if (!all[i]) continue;
				if (all[i].tags && all[i].tags.includes(t)) {
					return all[i];
				}
			}
		} else {
			return this.item.tags && this.item.tags.includes(t);
			//if ( this.item !== null && this.item !== undefined )this.item.worn=true;
		}
	}
	//if max is reduced we yeet some items, otherwise we ensure the slot coherency.
	slotSizeChange(newSize) {
		//if we have negative free space, that means some slot size mods were lost and we need to yeet stuff until we have at least 0 space remaining
		this.savedMax = this.savedMax || 0; //undefined prevention
		while (this.freeSpace() < 0 && this.savedMax <= newSize) {
			if (Array.isArray(this.item)) {
				game.unequip(this, this.item[this.item.length - 1]);
			} else game.unequip(this, this.item);
		}
		// if the slot shrank, we yeet items until success. Should be covered by the previous, left for posterity.
		/*
		if (this.oldMax > newSize) {
			for (let a = this._item.length - 1; this.oldMax - newSize > this.freeSpace(this.oldMax) || a < 0; a--) {
				if (Array.isArray(this.item)) {
					game.unequip(this, this.item[a]);
				} else game.unequip(this, this.item);
			}
		}
		*/
		if (this.savedMax == newSize) this.savedMax = null; //We save our reached max, on reload we wait until we reach it to delete it and then operate normally.
		this.oldMax = newSize;
		this.multi = Math.max(newSize, this.savedMax) > 1;
		if (this.multi && !Array.isArray(this.item)) this.item ? (this.item = [this.item]) : (this.item = []);
		if (!this.multi && Array.isArray(this.item)) {
			while (this.item.length > 1) {
				game.unequip(this, this.item[this.item.length - 1]);
			}
			this.item = this.item[0] || null;
		}
	}
}
mergeClass(Slot, Base);
