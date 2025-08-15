import Inventory, { SAVE_IDS } from "./inventory";
import Group from "@/composites/group";
import Events, { DELETE_ITEM } from "../events";

export default class SpellLoadouts extends Inventory {
	constructor(vars = null) {
		super(vars);

		this.id = "spellLoadouts";
		this.name = "Spell Loadouts";
		this.saveMode = SAVE_IDS;
	}

	revive(gs) {
		super.revive(gs);
		this.state = gs;
	}

	/**
	 *
	 * @param {GameState} gs
	 */
	create(gs, copy = null, name = null) {
		let g = new Group();

		g.id = gs.nextId("spelllist");
		g.type = "spelllist";
		g.name = name || "new spell list";

		if (copy === "init") {
			console.warn("Cloning list from default");
		}

		if (copy) {
			g.items = gs.spelllist.items;
		}

		gs.addItem(g);
		this.add(g);
		return g;
	}

	removeAt(ind) {
		let it = this.items[ind];
		if (it) {
			Events.emit(DELETE_ITEM, it);
			super.removeAt(ind);
		}
	}

	changeLoadout(gs, id) {
		/**
		 * Ensure the spelllist object is properly synced back
		 * to the appropriate spellLoadout - this chunk is
		 * necessary to make sure that older saves are compatible
		 * and function properly.
		 */
		let oldid = gs.currentSpellLoadout;

		if (oldid == id) return;

		let oldloadout = gs.spellLoadouts.items.find(i => i.id === oldid);

		oldloadout.items = gs.spelllist.items;
		gs.spelllist.items = oldloadout.items;
		gs.spelllist.calcUsed();

		/**
		 * Now switch the spelllist to the new loadout.
		 * Recalculated used levels and set index arbitrarily high
		 * to force the next item back to 0.
		 */
		gs.currentSpellLoadout = id;

		let loadout = gs.spellLoadouts.items.find(i => i.id === id);

		gs.spelllist.items = loadout.items;
		gs.spelllist.calcUsed();
		gs.spelllist.lastInd = 10000;
	}
}
