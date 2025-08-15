import SlotGroup from "@/chars/slotgroup";

export default class Equip extends SlotGroup {
	toJSON() {
		return undefined;
	}

	constructor(vars = null) {
		super(vars); // TODO
		this.slots = {};
		for (let a of vars) {
			if (a.slotgroup == "equip") this.slots[a.id] = a;
		}
	}

	/**
	 *
	 * @param {Item} it
	 */
	remove(it, slot = null) {
		return super.remove(it, slot);
	}

	/* deprecated as slots should behave in a uniform manner
	removeWeap(it) {
		return this.slots.right.remove(it) || this.slots.left.remove(it);
	}
	*/

	/**
	 * Get a count of items returned when using item.
	 * This is to ensure there is sufficient inventory space for new items.
	 * (Equip from Dungeon drops, multihanded weaps, etc.)
	 * @todo this is somewhat incorrect as inventory doesnt currently count spaces-used.
	 * @param {Item} it
	 * @returns {number}
	 */
	replaceCount(it) {
		const space = this.freeSpace(it.slot);

		return Math.max((it.numslots || 1) - space, 0);
	}

	/**
	 *
	 * @param {Armor|Weapon} it
	 * @param {string} slot
	 * @returns {boolean|Wearable|Wearable[]}
	 */
	equip(it, slot = null) {
		//if (it.type === "weapon") return this.equipWeap(it); deprecated as weapons are no longer special

		slot = slot || it.slot;
		if (slot === null || !this.slots.hasOwnProperty(slot)) {
			console.log(it.id + " bad equip slot: " + it.slot);
			return false;
		}

		const cur = this.slots[slot];
		return cur.equip(it);
	}

	/**
	 * @returns {Wearable|null} equipped weapon, or null.
	 */
	getWeapon() {
		return this.slots["mainhand"];
	}
	redoSlots() {
		for (let a in this.slots) {
			this.slots[a].slotSizeChange(this.slots[a]._max.valueOf());
		}
	}

	/** DEPRECATED as weapons are currently set to be mainhand only
	 *
	 * @param {*} it
	 * @returns {Item|Item[]|true}
	 *
	equipWeap(it) {
		const right = this.slots.right;
		const left = this.slots.left;

		if (it.hands === 2) {
			const rightItem = right.equip(it);
			const leftItem = left.remove();

			return rightItem && leftItem ? [rightItem, leftItem] : rightItem || leftItem || true;
		} else {
			if (right.empty()) {
				right.equip(it);
				return !left.empty() ? left.remove() : true;
			} else if (left.empty()) {
				left.equip(it);
				return !right.empty() ? right.remove() : true;
			} else {
				return right.equip(left.equip(it));
			}
		}
	}
	*/
}
