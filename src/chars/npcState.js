import { cloneClass, mergeSafe } from "@/util/objecty";
import { freezeData } from "@/util/util";
import { GDataDescAssigner } from "@/items/gdata";
import { PrepData } from "@/modules/parsing";
import { toRaw } from "vue";

/**
 * Proxy GameState for Npcs
 */
export class NpcState {
	toJSON() {
		let data = {};
		this.npcItems.forEach((value, key) => {
			// Skipping spell list, as npc should be saving that.
			if (key === "spelllist") return;
			let json = value.toJSON();
			if (json != null && (typeof json !== "object" || Object.keys(json).length)) data[key] = json;
		});
		return data;
	}

	constructor(gs, caster, data) {
		this.state = gs;
		this.self = caster;

		/**
		 * @property {Map<string,GData>} npcItems
		 */
		this.npcItems = new Map();

		for (let prop in data) {
			/*
			 * Replicating the method dataLoader loads stuff, it is necessary to
			 *   1. Grab the template of the item that is being copied
			 *   2. Either clone the template or copy values onto another object (latter can be achieved via mergeSafe)
			 *   3. Prep the data
			 *   4. Instance it by passing the data into the constructor of the item being copied
			 *   5. Overwrite the template on the copy with the original (Since the template on the original is the frozen raw, whereas the copy's might not be)
			 *   6. Once *everything* is instanced, revive
			 *
			 * Post DataLoader stuff
			 *   7. Restore mods (happens in game's load function)
			 *
			 * @note Tagsets may become an issue in the future...
			 */
			let it = this.state.getData(prop, false);
			if (!it) {
				console.warn(`Cannot find id ${prop}. Skipping.`);
			} else {
				// Cloned in npc, no need to worry about mutating the data copy reference.
				let dataCopy = data[prop];
				if (!it.template) console.warn(`!!! NO TEMPLATE FOR ${prop}!`);
				let template = it.template || {};
				// If the npc is a subInstance npc, its template has already been overwritten in npc by the original state template in Monster revive.
				let instTemplate = toRaw(dataCopy.template) || {};
				delete dataCopy.template;
				// Specific exclusion of level's mod and result, for a reason.
				if (prop === "level") {
					// As this is the original's template, cloning is necessary in order to remove properties.
					template = cloneClass(template);
					delete template.mod;
					delete template.result;
				}
				mergeSafe(dataCopy, template);
				dataCopy = PrepData(dataCopy, prop);
				let copy = new it.constructor(dataCopy);
				// Only adjust template if it isn't a recipe, so that items instanced from this context can still saved with modified data
				if (it.isRecipe) {
					// Mainly for monster. Tells the Monster's revive function to use Game's copy of its stateTemplate instead of its own generated one.
					copy.subInstance = true;
					// Need to save template, for saving edited values, and instance template, to properly edit values from state.
					copy.template = template;
					copy.instTemplate = instTemplate;
				} else {
					// Adjusting the copy's template to match changes
					mergeSafe(instTemplate, template);
					copy.template = instTemplate;
				}
				freezeData(copy.template);
				this.npcItems.set(prop, copy);
				if (this.state.playerStats.includes(it)) {
					GDataDescAssigner(caster, prop);
					caster[prop] = copy;
				}
			}
		}
	}

	//get player(){return this.self; }

	nextId(id) {
		return this.state.nextId(id);
	}

	getSlot(id, type) {
		return null;
	}

	setSlot(slot, v) {
		return;
	}

	findInstance(id) {
		return null;
	}

	getUnique(id) {
		return this.state.getUnique(id);
	}

	findData(id, any = false) {
		return this.getData(p);
	}

	hasUnique(id) {
		return false;
	}

	/**
	 *
	 * @param {string} p
	 */
	getData(p, create = true, elevate = true) {
		// appears to be check for special variables defined on state directly;
		// e.g. explore. @todo many issues with this.
		if (p === "self") {
			return this.self;
		} else if (this.state[p]) return this.state[p];

		let it = this.npcItems.get(p);
		if (it !== undefined) return it;

		if (elevate) {
			it = this.state.getData(p, false, elevate);
			if (it) {
				return it.isRecipe || !create ? it : this.makeNpcItem(p, it);
			}
		}

		return null;
	}

	makeNpcItem(p, data) {
		let copy;

		if (data.template) {
			copy = cloneClass(data.template);
			copy = PrepData(copy, data.id);
		} else {
			console.warn(`No template for ${data.id}. Directly copying data.`);
			copy = cloneClass(data, {});
		}

		if (data.constructor) {
			copy = new data.constructor(copy);
		}

		if (copy == null) {
			console.log("NPC: Cant create: " + p);
			copy = data;
		} else {
			copy.template = data.template;
		}

		this.npcItems.set(p, copy);
		if (this.state.playerStats.find(it => it.id === p)) {
			GDataDescAssigner(this.self, p);
			this.self[p] = copy;
		}
		return copy;
	}

	revive() {
		this.npcItems.forEach(it => {
			if (it.revive instanceof Function) it.revive(this);
		});
	}
}
