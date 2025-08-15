import Npc from "@/chars/npc";
import Wearable from "@/chars/wearable";
import { includesAny } from "@/util/objecty";
import Percent from "@/values/percent";
import Item from "@/items/item";
import GenGroup from "@/genGroup";
import { pushNonNull } from "@/util/array";
import GData from "@/items/gdata";
import {
	WEARABLE,
	MONSTER,
	ARMOR,
	WEAPON,
	TYP_PCT,
	EVENT,
	ITEM,
	POTION,
	TYP_RANGE,
	NPC,
	TASK,
	ENCOUNTER,
} from "@/values/consts";
import { CreateNpc } from "@/items/monster";
import TagSet from "@/composites/tagset";
import ProtoItem from "@/protos/protoItem";
import { Changed } from "@/changes";
import Alter from "@/chars/alter";
import { MaterialTable } from "@/values/craftVars";

/**
 * Hacky implementation of flatMap since stupid browsers don't support.
 * @param {*} p
 * @param {*} t
 */
const flatMap = (p, t) => {
	let a = [];
	let len = this.length;
	for (let i = 0; i < len; i++) {
		let v = this[i];

		if (Array.isArray(v)) {
			v = v.flatMap(p, t);
			for (let j = 0; j < v.length; j++) {
				a.push(v[j]);
			}
		} else {
			a.push(p.call(t, v));
		}
	}
	return a;
};

/**
 * Revive an instanced item based on save data.
 * converts template string to actual template object before instancing/revive.
 * @param {GameState} gs
 * @param {object} save
 */
export function itemRevive(gs, save) {
	if (!save) {
		console.warn("Missing gen item: " + save);
		return null;
	}

	let orig = save.template || save.recipe;

	if (typeof orig === "string") orig = gs.getData(orig);
	let type = orig !== undefined ? orig.type || save.type : save.type;

	if (!type) {
		if (!save.id) return null;

		console.warn(save.id + " unknown type: " + type + " -> " + save.template + " -> " + save.recipe);
		type = "item";
	}

	if (type === ARMOR || type === WEAPON || type === WEARABLE) {
		save = new Wearable(orig, save);
	} else if (type === MONSTER || type === NPC) {
		//it.template = orig;
		save = new Npc(orig, save);
	} else {
		save = new Item(orig, save);
	}
	save.owned = true;

	save.revive(gs);

	return save;
}

/**
 * Generates random Equipment from Item data, and instantiates Items from prototypes.
 */
export default class ItemGen {
	constructor(game) {
		this.game = game;
		this.state = game.state;

		/**
		 * Groups of item types to generate. 'armor', 'weapon', 'monster' etc.
		 */
		this.groups = {};

		this.luck = this.state.getData("luck");

		/*this.initGroup( ARMOR, this.state.armors );
		this.initGroup( WEAPON, this.state.weapons );*/

		this.initGroup(WEARABLE, this.state.weapons.concat(this.state.armors));
		this.initGroup("materials", this.state.materials);
		this.initGroup("properties", this.state.properties);
		this.initGroup("craftingmaterials", MaterialTable);
	}

	/**
	 * Retrieve a random encounter matching criteria.
	 * @param {object} data
	 * @param {string} biome
	 * @param {number} pct - percent through locale.
	 */
	randEncounter(data, biome, pct = 1) {
		let level = data.level || 1;
		if (typeof level === "object") {
			if (level.type === TYP_RANGE) level = level.percent(pct);
			else level = level.value * pct;
		}

		if (data.range) level += data.range * (-1 + 2 * Math.random());
		level = Math.ceil(level);

		if (!this.groups.hasOwnProperty(ENCOUNTER)) this.initGroup(ENCOUNTER, this.state.encounters);
		return this.groups[ENCOUNTER].randAt(level);
	}

	/**
	 * Generate an enemy from rand definition.
	 * @param {object} data
	 * @param {string|string[]} biome
	 * @param {number} [pct=1] level modifier / progress within dungeon.
	 */
	randEnemy(data, biome, pct = 1) {
		if (!this.groups.hasOwnProperty(MONSTER)) this.initGroup(MONSTER, this.state.monsters, ["biome", "kind"]);

		if (biome) {
			return randByBiome(data, biome, pct);
		}

		let level = data.level || 1;
		let quantity = data.quantity || 2;
		const penalty = data.quantitypenalty || 0.05; //by default, 5% penalty to level for each extra spawn
		if (typeof level === "object") {
			//handling for progress in dungeon - trend towards upper end of range the closer to thhe top you are

			if (level.type === TYP_RANGE) level = level.percent(pct);
			else level = level.value * pct;
		}
		quantity = Math.round(quantity);
		level *= Math.max(1 - (quantity - 1) * penalty, 0.1); //if we are spawning multiples, penalize the level
		level = Math.ceil(level);

		const enemyarray = [];
		for (let i = 0; i < quantity; i++) {
			const spawnLevel = data.range ? Math.max(1, level + data.range * (2 * Math.random() - 1)) : level;
			const npc = this.groups[MONSTER].randAt(Math.floor(spawnLevel));
			enemyarray.push(CreateNpc(npc, this.game));
		}
		return enemyarray.length > 0 ? enemyarray : null;
	}

	/**
	 *
	 * @param {object} data
	 * @param {string|string[]} biome
	 * @param {number} level
	 */
	randByBiome(data, biome, level) {}

	/**
	 * Instantiate a prototypical item.
	 * @param {object} proto
	 * @returns {Item|Wearable} the item created, or null on failure.
	 */
	instance(proto, material = null, amt = 1) {
		let it;

		if (proto.disabled || proto.locked || this.state.hasUnique(proto)) {
			return null;
		}

		if (proto.type === ARMOR || proto.type === WEAPON || proto.type === WEARABLE) {
			it = this.fromProto(proto, material);
			it.owned = true;
			it.updated();
			return it;
		} else if (proto.type === POTION) {
			it = new Item(proto);
		} else if (proto.type === ITEM) {
			it = new Item(proto);
		} else if (proto.type === MONSTER || proto.type === NPC) {
			return CreateNpc(proto, this.game);
		}

		if (it === undefined) return null;

		it.id = this.state.nextId(it.id);

		//this.state.addInstance(it);
		it.count = amt || 1;
		it.value = 1;
		it.owned = true;
		it.updated();

		return it;
	}

	/**
	 * Generate loot from looting info.
	 * @param {string|Wearable|Object|Array} info
	 * @returns {?Wearable|Wearable[]}
	 */
	getLoot(info, amt = 1) {
		if (amt instanceof Percent) {
			if (!amt.roll(this.luck.value)) return null;
			amt = 1;
		}

		if (Array.isArray(info)) {
			return info.flatMap ? info.flatMap(this.getLoot, this) : flatMap.call(info, this.getLoot, this);
		}

		if (typeof info === "string") info = this.state.getData(info);
		if (!info) return null;
		/* Previously used, erroneous code that does not process the property correctly after passing through objLoot, as the % property would go to amt, info becoming a gdata reference.
		if (info[TYP_PCT]) {
			if (info[TYP_PCT] instanceof Percent) {
				if (!info[TYP_PCT].roll(+this.luck)) return null;
			} else if (100 * Math.random() > info[TYP_PCT]) return null;
		}
		*/
		if (amt[TYP_PCT]) {
			if (amt[TYP_PCT] instanceof Percent) {
				if (!amt[TYP_PCT].roll(+this.luck)) return null;
			} else if (100 * Math.random() > amt[TYP_PCT]) return null;
		}

		if (info instanceof GData || info instanceof TagSet) return this.getGData(info, amt, info.maxlevel || null);
		else if (info.id) {
			let instanceditem = this.state.getData(info.id);
			if (instanceditem instanceof GData || instanceditem instanceof TagSet)
				return this.getGData(instanceditem, amt, info.material || info.level || info.maxlevel || amt);
			return this.instance(info);
		} else if (info.material || info.level || info.maxlevel) return this.randLoot(info, amt);

		return this.objLoot(info);
	}

	/**
	 * Loot specified by subobject.
	 * @param {object} info
	 */
	objLoot(info) {
		let items = [];
		for (const p in info) {
			let it;
			if (p == "craftingmaterial") {
				let a = this.state.getData(this.groups["craftingmaterials"].randBelow(info[p].level).id);
				it = this.getGData(a, 1);
			} else it = this.getLoot(p, info[p]);
			if (!it) continue;
			else if (Array.isArray(it)) items = pushNonNull(items, it);
			else items.push(it);
		}

		return items;
	}

	/**
	 * Get some amount of non-instanced gameData.
	 * @param {GData} it
	 * @param {number|boolean|object} [amt=1]
	 */
	getGData(it, amt = 1, material = null) {
		if (!it) return null;

		if (it instanceof TagSet) it = it.random();

		if (this.state.hasUnique(it)) return null;

		if (it.instanced || it.isRecipe) {
			amt = +amt?.value || +amt || 0;
			return this.instance(it, material, amt);
		}

		if (typeof amt === "object") {
			if (amt.skipLocked && (it.disabled === true || it.locks > 0 || it.locked !== false)) return null;
		}

		amt = +amt?.value || +amt || 0;

		if (typeof amt === "number" || typeof amt === "boolean") {
			if (it.type === "upgrade" || it.type === TASK || it.type === "furniture" || it.type === EVENT)
				it.doUnlock(this.game);
			else {
				it.amount(amt);
				if (amt > 0) return it.name;
			}
		} else console.warn("bad amount: " + it + " -> " + amt);

		return null;
	}

	/**
	 * Return loot from an object of random parameters.
	 * @param {object} info
	 */
	randLoot(info) {
		let material = info.material;
		let type = info.type;
		let level = info.maxlevel || info.level || 0;
		level = +level?.value || +level || 0;

		if (material) {
			if (typeof material === "string") material = this.state.getData(material);
			else if (material && material.constructor === Object)
				material = this.randItemBelow(this.groups.materials, material, level);

			if (material instanceof TagSet) material = material.random();
		}
		if (type) {
			if (typeof type === "string") type = this.state.getData(type);
			else if (type && type.constructor === Object) type = this.randItemBelow(this.groups[WEARABLE], type, level);

			if (type instanceof TagSet) type = type.random();
		}

		if (!type && !material) {
			type = this.groups[WEARABLE].randBelow(level);
		}

		if (material && !type) {
			type = this.getCompatible(this.groups[WEARABLE], material, level);
		} else if (type && !material) {
			material = this.getCompatible(this.groups.materials, type, level);
		}

		return this.fromProto(type, material);
	}

	/**
	 * Finds an item within a group that matches passed in parameters.
	 * @param {GenGroup} group - Group to pick an item from
	 * @param {*} data - Information on what specific group to look for
	 * @param {number} level - maximum level for item
	 * @returns {?Material} A material matching passed in prerequisites. Returns null if one cannot be found.
	 */
	randItemBelow(group, data, level = 0) {
		let { only, exclude } = data;
		level = data.maxlevel ?? data.level ?? level;
		if (typeof only === "string") only = only.split(",");
		if (typeof exclude === "string") exclude = exclude.split(",");

		return group.randBelow(level, v => {
			let checks = [v.type, v.kind, v.id, ...(v.tags ?? [])];

			if (only && only.find(it => checks.includes(it)) == null) return false;
			if (exclude && exclude.find(it => checks.includes(it)) != null) return false;

			return true;
		});
	}

	/**
	 * Return a random item of the given level.
	 * @param {number} [level=0]
	 * @param {?string} [type=null]
	 * @param {?string|Material} [mat=null] - item material.
	 */
	randAt(level = 0, type = null, mat = null) {
		type = type || WEARABLE;

		let g = this.groups[type];

		if (g) {
			let it = g.randBy("level", level);
			if (it) return this.fromProto(it, mat || level);
		} else console.warn("No group: " + type);

		return null;
	}

	/**
	 * Get random item of given level or below.
	 * @param {number} [maxlevel=1] - maximum level of item to return.
	 * @param {?string} [type=null] - kind of item to generate.
	 * @param {?string|Material} [mat=null] - item material.
	 * @returns {Wearable|null}
	 */
	randBelow(maxlevel = 1, type = null, mat = null) {
		type = type || WEARABLE;
		let g = this.groups[type];

		maxlevel = Math.floor(1 + Math.random() * maxlevel);

		let it = g.randBelow(maxlevel);
		return it ? this.fromProto(it, mat || maxlevel) : null;
	}

	/**
	 * Get an item from a Group compatible with the given item.
	 * Used to pick a Material for a Wearable, or a Wearable for a material.
	 * @param {GenGroup} group - group to pick an item from.
	 * @param {Item} item - chosen item must be compatible with item.
	 * @returns {object|null}
	 */
	getCompatible(group, item, level = null) {
		let only = item.only;
		let exclude = item.exclude;

		let mat = item.material ? item.material.id : null;
		let itTags = item.tags || [];
		let targetlevel = level || item.level + 1 || 1;
		return group.randBelow(targetlevel, v => {
			let tags = v.tags || [];
			if (only && !includesAny(only, v.type, v.kind, v.id, ...tags)) return false;
			if (exclude && includesAny(exclude, v.type, v.kind, v.id, ...tags)) return false;

			if (v.only && !includesAny(v.only, item.type, item.kind, item.id, mat, ...itTags)) return false;
			if (v.exclude && includesAny(v.exclude, item.type, item.kind, item.id, mat, ...itTags)) return false;
			return true;
		});
	}

	getAllCompatible(group, item, level = null) {
		let only = item.only;
		let exclude = item.exclude;

		let mat = item.material ? item.material.id : null;
		let itTags = item.tags || [];
		let targetlevel = level || item.level + 1 || 1;
		return group.allBelow(targetlevel, v => {
			if (v.blocked()) return false;
			let tags = v.tags || [];
			if (only && !includesAny(only, v.type, v.kind, v.id, ...tags)) return false;
			if (exclude && includesAny(exclude, v.type, v.kind, v.id, ...tags)) return false;

			if (v.only && !includesAny(v.only, item.type, item.kind, item.id, mat, ...itTags)) return false;
			if (v.exclude && includesAny(v.exclude, item.type, item.kind, item.id, mat, ...itTags)) return false;
			return true;
		});
	}
	/**
	 * @private
	 * Generate a new item from a template item.
	 * @param {ProtoItem} data
	 * @param {string|Material|number} material - material or material level.
	 */
	fromProto(data, material = null) {
		if (data === null || data === undefined) return null;

		let mat = data.material || material;

		if (typeof mat === "string") mat = this.state.getData(mat);
		else if ((!mat) instanceof Alter) {
			mat = +mat?.value || +mat || 0;
			if (mat) mat = this.getCompatible(this.groups.materials, data, mat);
		}

		return this.makeWearable(data, mat);
	}

	genProperties(it, count) {
		let propGroup = this.groups.properties;

		if (typeof count === "object") count = Math.round(count.value);
		if (count <= 0) return;

		console.log(it.name + " props lvl: " + it.level + "  kind: " + it.kind);

		for (count; count > 0; count--) {
			//it.addProperty( this.getCompatible( propGroup, it, it.level ) );
		}
	}

	/**
	 * @private
	 * @param {ProtoItem} data
	 * @param {*} material
	 */
	makeWearable(data, material) {
		const item = new Wearable(data);
		item.id = this.state.nextId(item.id);
		item.template = data;
		item.begin(this.game);

		if (material) item.applyMaterial(material);
		else item.name = data.name || data.id;

		if (data.properties) this.genProperties(item, data.properties);

		return item;
	}

	/**
	 * Create a group of Generable objects. All groups have a level filter by default
	 * and additional filters can be created.
	 * @param {string} name - group name.
	 * @param {Item[]} items - items to add to group.
	 * @param {?string[]} [filters=null] additional filters to use in group creation.
	 * @returns {GenGroup}
	 */
	initGroup(name, items, filters = null) {
		if (!items) {
			console.warn("group undefined: " + name);
			return;
		}

		let g = (this.groups[name] = new GenGroup(items));
		g.makeFilter("level");
		if (filters) for (let filter of filters) g.makeFilter(filter);
		return g;
	}
}
