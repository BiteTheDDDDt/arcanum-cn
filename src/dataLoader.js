import GData, { GDataDescAssigner } from "@/items/gdata";

import { PrepData } from "@/modules/parsing";

import Resource from "@/items/resource";
import RevStat from "@/items/revStat";
import StatData from "@/items/statData";
import Skill from "@/items/skill";
import Monster from "@/items/monster";

import { Locale } from "@/items/locale";

import Spell from "@/items/spell.js";
import Task from "@/items/task";

import { mergeSafe } from "@/util/objecty";
import ProtoItem from "@/protos/protoItem";
import Alter from "@/chars/alter";
import Enchant from "@/items/enchant";
import Potion from "@/items/potion";
import Encounter from "@/items/encounter";
import GEvent from "@/items/gevent";

import Player from "@/chars/player";

import Loader from "@/util/jsonLoader";
import GClass from "@/items/gclass";
import Module from "@/modules/module";
import {
	SKILL,
	ENCOUNTER,
	MONSTER,
	ARMOR,
	WEAPON,
	HOME,
	POTION,
	RESOURCE,
	EVENT,
	EQUIPSLOT,
	DUNGEON,
	CLASH,
} from "@/values/consts";
import State from "@/chars/state";

import { mergeInto } from "@/util/array";
import TagSet from "@/composites/tagset";
import Slot from "./chars/slot";

const DataDir = "./data/";

// list of all files to load.
const ModFiles = "modules";

/**
 *
 * @param {string[]} fileList
 * @param {string} [dir=DataDir]
 * @returns {Promise.<string,object>}
 */
export const loadFiles = (fileList, dir = DataDir) => {
	const loader = new Loader(dir, fileList);
	return loader.load();
};

/**
 * @todo replace with server call.
 */
export default {
	/**
	 * @property {GModule} module - main module.
	 */
	main: null,

	/**
	 * Load information on all available data files.
	 * @param {string} srcList - name of file specifying mod list.
	 * @returns {object}
	 */
	async loadModInfo(srcList) {
		// load the local list of mod files then load all listed files.
		return loadFiles([srcList]).then(list => {
			if (!list) throw new Error("Modlist not found: " + srcList);
			return list[srcList];
		});
	},

	async requestData() {
		const files = await this.loadModInfo(ModFiles);
		this.main = new Module();
		//Creating hall module here so that the core hall module doesn't assign it's symbol to all other blank hall module symbols.
		this.main.hall = new Module();
		await this.main.load(files.core);

		if (files.modules) {
			await this.main.load(files.modules, DataDir + "modules/");
		}
	},

	async loadGame(saveData) {
		if (this.main === null) {
			await this.requestData();
		}

		return this.instance(this.main.objects, this.main.lists, saveData);
	},

	/**
	 * At this point dataLists and gdatas both refer to the same data items.
	 * dataLists are simply separated into lists by type (upgrades,tasks, etc.)
	 * @param {.<string,object>} raws
	 * @param {.<string,object[]>} dataLists
	 * @param {object} saveData
	 * @returns {object} initialized save&game data.
	 */
	instance(raws, dataLists, saveData = {}) {
		saveData = saveData || {};

		// restore Percent/Range classes /special functions of non-item data.
		for (const p in saveData) {
			// items prepped separately so template can be written over, then prep, then template assigned.
			if (p === "items" || p === "drops") continue;
			saveData[p] = PrepData(saveData[p], p);
		}

		// Remove items with outdated/aliased names.
		let items = saveData.items;
		if (items) {
			for (const p in raws) {
				const t = raws[p];
				if (t.alias && !items[p]) {
					// check aliased item.
					const it = items[t.alias];
					if (it) {
						console.warn("alias: " + t.alias + " -> " + p);
						items[p] = it;
						delete items[t.alias];
					}
				}
			}
		} else items = {};

		// Merge and ensure game data item for every template.
		saveData.items = this.mergeItems(items, raws);

		// replace original data list items with saveData items.
		const gameLists = this.buildLists(saveData.items, dataLists);

		return this.initInstance(saveData, gameLists);
	},

	/**
	 * Use prepped item data to form data lists matching the
	 * datalists from the raw data files.
	 * @param {.<string,object>} items
	 * @param {.<string,object[]>} dataLists
	 * @returns {.<string,object[]>} lists of items matching lists of loaded data.
	 */
	buildLists(items, dataLists) {
		const gameLists = {};

		for (const p in dataLists) {
			const dataList = dataLists[p];
			// possibly missing file or empty list.
			if (!dataList) continue;

			// lists of game-item data by type.
			const gameList = (gameLists[p] = []);

			for (let i = 0; i < dataList.length; i++) {
				gameList[i] = items[dataList[i].id];
			}
		}

		return gameLists;
	},

	/**
	 * Merge template data into saved data items.
	 * @param {Object} saveItems - previous save items.
	 * @param {.<string,Object>} raws - template items..
	 * @returns {.<string,Object>} - the saveItems with data merged from default data.
	 */
	mergeItems(saveItems, raws) {
		/**
		 * @note ordering.
		 * 1) raw template merged over raw save.
		 * 2) data prepared with type instances.
		 * 3) template assigned LAST because the template is frozen and can't be prepped.
		 */
		for (const p in raws) {
			let saveObj = saveItems[p] || {};

			if (typeof saveObj === "number") {
				saveObj = { val: saveObj };
			}
			mergeSafe(saveObj, raws[p]);

			saveItems[p] = PrepData(saveObj, p);

			saveObj.template = raws[p];
		}

		return saveItems;
	},

	initInstance(inst, lists) {
		const items = inst.items;

		if (lists.tags) inst.tagSets = this.initItems(items, lists.tags, TagSet);

		if (lists.resources) inst.resources = this.initItems(items, lists["resources"], Resource);

		if (lists.potencies) inst.potencies = this.initItems(items, lists["potencies"], StatData);

		if (lists.proficiencies) inst.proficiencies = this.initItems(items, lists["proficiencies"], StatData);

		if (lists.stressors) {
			inst.stressors = this.initItems(items, lists.stressors, Resource, "stress", "stress");
			inst.stressors.forEach(v => (v.hide = true));
		}

		if (lists.upgrades) inst.upgrades = this.initItems(items, lists["upgrades"], GData, null, "upgrade");

		if (lists.homes) {
			inst.homes = this.initItems(items, lists["homes"], GData, HOME, HOME);
			inst.homes.forEach(v => (v.slot = HOME));
		}

		if (lists.furniture) inst.furnitures = this.initItems(items, lists.furniture, GData, "furniture", "furniture");

		if (lists.skills) inst.skills = this.initItems(items, lists.skills, Skill, SKILL);

		if (lists.encounters)
			inst.encounters = this.initItems(items, lists["encounters"], Encounter, ENCOUNTER, ENCOUNTER);
		if (lists.monsters) inst.monsters = this.initItems(items, lists["monsters"], Monster, MONSTER, MONSTER);

		if (lists.rares) inst.rares = this.initItems(items, lists["rares"], ProtoItem);
		if (lists.states) inst.states = this.initItems(items, lists["states"], State, "state", "state");
		if (lists.reagents) inst.reagents = this.initItems(items, lists["reagents"], Resource);

		if (lists.locales) {
			this.initItems(items, lists.locales, Locale, "t_locale");
			lists.locales.forEach(v => (v.sym = v.sym || "🌳"));
		}

		if (lists.dungeons) {
			this.initItems(items, lists.dungeons, Locale, "t_dungeon", DUNGEON);
			lists.dungeons.forEach(v => (v.sym = v.sym || "⚔"));
		}
		if (lists.clashes) {
			this.initItems(items, lists.clashes, Locale, "t_clash", CLASH);
			lists.clashes.forEach(v => (v.sym = v.sym || "⚔💀"));
		}
		if (lists.spells) this.initItems(items, lists.spells, Spell, "t_spell");

		if (lists.stats) this.initItems(items, lists["stats"], StatData, "stat", "stat");

		/**@deprecated ??? @compat */
		//this.initItems( items, lists['items'], Item, ITEM, ITEM);

		if (lists.armors) {
			inst.armors = this.initItems(items, lists.armors, ProtoItem, ARMOR, ARMOR);
			inst.armors.forEach(v => (v.kind = v.kind || ARMOR));
		}

		if (lists.weapons) {
			inst.weapons = this.initItems(items, lists.weapons, ProtoItem, WEAPON, WEAPON);
			inst.weapons.forEach(v => (v.kind = v.kind || WEAPON));
			//deprecated due to weapons becoming mainhand items and also weapons lose a lot of their special handling
			//inst.weapons.forEach(v => (v.slot = "weapon")); //default slot for weapons
		}

		if (lists.potions) inst.potions = this.initItems(items, lists.potions, Potion, POTION, POTION);

		if (lists.materials) inst.materials = this.initItems(items, lists.materials, Alter, "material", "material");
		if (lists.properties) inst.properties = this.initItems(items, lists.properties, Alter, "property", "property");

		if (lists.events) inst.events = this.initItems(items, lists.events, GEvent, EVENT, EVENT);
		if (lists.classes) inst.classes = this.initItems(items, lists.classes, GClass, "class", "class");

		if (lists.tasks) inst.tasks = this.initItems(items, lists.tasks, Task, null, "task");
		/** @deprecated */
		if (lists.actions) {
			inst.tasks = this.mergeTasks(inst.tasks, this.initItems(items, lists.actions, Task, null, "task"));
		}

		if (lists.enchants) inst.enchants = this.initItems(items, lists.enchants, Enchant, null, "enchant");
		if (lists.sections) inst.sections = this.initItems(items, lists.sections);

		if (lists.equipslots) inst.equipslots = this.initItems(items, lists.equipslots, Slot, null, EQUIPSLOT);

		if (lists.player) {
			[inst.player, inst.playerStats] = this.initPlayer(items, lists.player, inst.items.player);
			GDataDescAssigner(inst.player, ...inst.playerStats.map(it => it.id));
		}

		if (lists.glossaryentries)
			inst.glossaryentries = this.initItems(
				items,
				lists["glossaryentries"],
				GData,
				"t_glossary_entry",
				"Glossary entry",
			);

		return inst;
	},

	/**
	 * @compat
	 * @deprecated
	 * Merge old action files with new ones, removing dupe ids.
	 * @param {Task[]} a
	 * @param {Task[]} b
	 */
	mergeTasks(a, b) {
		return mergeInto(a, b, v => a.find(w => w.id == v.id) === undefined);
	},

	initItems(items, dataList, UseClass = GData, tag = null, type = null) {
		if (dataList === null || dataList === undefined) return undefined;

		for (let i = dataList.length - 1; i >= 0; i--) {
			let def = dataList[i];

			if (def.reverse) dataList[i] = def = new RevStat(def);
			else if (def.stat) dataList[i] = def = new StatData(def);
			else dataList[i] = def = new UseClass(def);

			if (tag) def.addTag(tag);
			if (type) def.type = type;

			items[def.id] = def;
		}

		return dataList;
	},

	/**
	 *
	 * @param {*} stats - player stats from json.
	 * @param {Object} savePlayer - player data from previous save.
	 */
	initPlayer(items, stats, savePlayer = null) {
		if (!stats) return undefined;

		let vars = savePlayer || {};

		let list = [],
			res;
		for (let def of stats) {
			res = vars[def.id] =
				def.stat === true ? new StatData(def) : def.reverse === true ? new RevStat(def) : new Resource(def);
			res.type = RESOURCE;
			items[def.id] = res;
			list.push(res);
		}

		return [(items.player = new Player(vars)), list];
	},
};
