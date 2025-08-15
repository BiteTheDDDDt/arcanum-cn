import Slot from "@/chars/slot";

export default class SlotGroup {
	/**
	 * @property {.<string,Slot>} slots
	 */
	get slots() {
		return this._slots;
	}
	set slots(v) {
		for (const p in v) {
			if (!(v[p] instanceof Slot)) v[p] = new Slot(v[p]);
		}

		this._slots = v;
	}

	constructor(vars = null) {
		if (vars) Object.assign(this, vars);
	}

	/**
	 * Find equipment item by id.
	 * @param {string} id
	 * @returns {Item|null}
	 */
	find(id, proto = false) {
		for (const p in this.slots) {
			const it = this.slots[p].find(id, proto);
			if (it) return it;
		}
		return null;
	}

	/**
	 * Search for all items that match predicate.
	 * @param {*=>boolean} pred
	 * @returns {?object}
	 */
	findAll(pred) {
		const a = [];

		for (const p in this.slots) {
			const it = this.slots[p].match(pred);
			if (it) {
				a.push(it);
			}
		}
		return a;
	}

	/**
	 * Get item or items in a named slot.
	 * @param {string} slot
	 * @returns {?Item|Item[]}
	 */
	get(slot) {
		slot = this.slots[slot];
		if (slot === undefined) return undefined;

		return slot.item;
	}

	freeSpace(slot) {
		slot = this.slots[slot];
		if (slot === undefined) return 0;
		return slot.freeSpace();
	}

	/**
	 *
	 * @param {Item} it
	 */
	remove(it, slot = null) {
		slot = slot || it.slot;
		if (typeof slot === "string") slot = this.slots[slot];

		//console.log('remove from: ' + slot.id );
		if (slot) return slot.remove(it);

		return false;
	}

	begin(g) {
		for (let p in this.slots) {
			this.slots[p].begin(g);
		}
	}

	revive(gs) {
		for (let p in this.slots) {
			this.slots[p].revive(gs);
		}
	}

	/**
	 *
	 * @param {Item} it
	 * @param {string} slot
	 * @returns {boolean|Wearable|Wearable[]}
	 */
	setSlot(it, slot = null) {
		slot = slot || it.slot;
		if (slot === null || !this.slots.hasOwnProperty(slot)) return false;

		let cur = this.slots[slot];
		return cur.equip(it);
	}

	/**
	 * Iterate slot names.
	 * @returns {Iterator<string>}
	 */
	*slotNames() {
		for (let k in this.slots) yield k;
	}

	*[Symbol.iterator]() {
		for (const k in this.slots) {
			const it = this.slots[k].item;
			if (Array.isArray(it)) {
				for (let i = it.length - 1; i >= 0; i--) {
					if (it[i]) yield it[i];
				}
			} else if (it) yield it;
		}
	}
}
