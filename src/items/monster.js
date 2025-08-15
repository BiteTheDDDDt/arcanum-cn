import GData from "@/items/gdata";
import { MONSTER, TEAM_PLAYER, TYP_PCT } from "@/values/consts";
import Npc from "@/chars/npc";
import Attack from "@/chars/attack";
import { NpcLoreLevels } from "@/values/craftVars";
import Percent from "@/values/percent";
import { freezeData, splitKeys } from "@/util/util";
import { cloneClass } from "@/util/objecty";
import Game from "@/game";
import Range, { RangeTest } from "../values/range";

/**
 *
 * @param {object} proto
 * @param {Game} g
 * @returns {Npc}
 */

export const CreateNpc = (proto, g) => {
	let it = new Npc(proto);
	it.value = 1;
	//
	it.name = proto.name;
	it.id = g.state.nextId(proto.id);
	it.revive(g.state);
	it.begin();
	return it;
};

const GenDefaults = target => {
	/** @type {number} */
	let level = 1;
	if (target.level != null) {
		if (!isNaN(target.level)) {
			level = +target.level;
		} else {
			console.warn(`Target ${target.id} level is NaN (${target.level})`);
		}
	}

	let scale = Math.max(1, level);
	let hp = 4 + Math.floor((Math.log10(scale * 2) * 2500) / (1 + Math.pow(1.1, 78 - scale)));
	let dmg = 2 + Math.floor((Math.log10(scale * 50) * 200) / (1 + Math.pow(1.12, 76 - scale)));

	let loot = {
		gold: {
			[TYP_PCT]: new Percent(50),
			value: new Range(hp + 2, hp * 2 - 2),
		},
		//craftingmaterial: {[TYP_PCT]: new Percent(5), "level" : level}
	};
	if (level > 10) {
		loot.gems = {
			[TYP_PCT]: new Percent(25),
			value: new Range(level / 50, level / 10),
		};
	}

	return {
		level,
		hp: hp,
		damage: dmg,
		speed: level,
		tohit: 0,
		dodge: 0,
		defense: 0,
		chaincast: 0.8,
		loot: loot,
	};
};

/**
 * Generates a template for state using passed-in template and base's default values as references.
 * The minimum amount of defined items within the state template is all player stats.
 * @param {Monster} base Item to generate state template for.
 * @param {*} template Template to use as reference. If nullish, uses base's template.
 * @returns {*} A state template
 */
// Ideally called within constructor
function generateStateTemplate(base, template) {
	// Assumes base is a monster
	const defaults = base.defaults ?? {};
	if (template == null) template = base.template ?? {};
	// This is a state template, meaning it has to mirror how game's gdata looks (id-data pairing)
	/**
	 * Template copy of statedata.
	 * The minimum amount of defined items within the state template is all player stats.
	 */
	let stateTemplate = template.statedata ? cloneClass(template.statedata) : {};

	for (let stat of Game.state.playerStats) {
		let id = stat.id;

		// Since this should be generated within constructor, order of priority goes state -> vars -> defaults
		let src = template[id] ?? defaults[id];
		let dest = stateTemplate[id];
		if (!dest) dest = stateTemplate[id] = {};

		// If the stat is a MaxStat (has a maximum)
		if (!stat.stat && dest.max == null) {
			dest.max = src;
		}
		if (stat.stat && dest.val == null) {
			dest.val = src;
		}
	}

	return stateTemplate;
}

export default class Monster extends GData {
	static GenDefaults = GenDefaults;

	/**
	 * @property {true} isRecipe
	 */
	get isRecipe() {
		return true;
	}

	/**
	 * @returns {object}
	 */
	toJSON() {
		if (this.require) return { value: this.value, locked: this.locked };
		else if (this.value > 0) return { value: this.value };
		else return undefined;
	}
	get attack() {
		return this._attack;
	}
	set attack(v) {
		if (v === undefined || v === null) return;
		if (Array.isArray(v)) {
			let a = [];
			for (let i = v.length - 1; i >= 0; i--) {
				a.push(v[i] instanceof Attack ? v[i] : new Attack(v[i]));
			}

			this._attack = a;
		} else this._attack = v instanceof Attack ? v : new Attack(v);
	}
	get onDeath() {
		return this._onDeath;
	}
	set onDeath(v) {
		if (v === undefined || v === null) return;
		this._onDeath = v instanceof Attack ? v : new Attack(v);
	}

	get onHit() {
		return this._onHit;
	}
	set onHit(v) {
		if (v === undefined || v === null) return;
		this._onHit = v instanceof Attack ? v : new Attack(v);
	}
	get onMiss() {
		return this._onMiss;
	}
	set onMiss(v) {
		if (v === undefined || v === null) return;
		this._onMiss = v instanceof Attack ? v : new Attack(v);
	}
	get onSummon() {
		return this._onSummon;
	}
	set onSummon(v) {
		if (v === undefined || v === null) return;
		this._onSummon = v instanceof Attack ? v : new Attack(v);
	}
	/**
	 *
	 * @param {object} [vars=null]
	 */
	constructor(vars = null) {
		if (!(vars instanceof Object && vars.constructor.name === "Object"))
			console.log(`Non-object vars for ${vars.id}`);

		super(vars, GenDefaults);

		if (this.statedata) splitKeys(this.statedata);

		this.type = MONSTER;

		if (this.locked != false) this.locked = this.require ? true : false;

		// To prevent these properties being defined in module files.
		delete this.subInstance;
		delete this.instTemplate;
	}

	/**
	 *
	 * @param {Game} g
	 * @returns {boolean}
	 */
	canUse(g) {
		if (this.value < 10) return false;

		let npcSkills = NpcLoreLevels(this.kind, g);
		if (npcSkills < this.level) return false;

		return super.canUse(g);
	}

	/**
	 *
	 * @param {Game} g
	 * @param {number} [count=1]
	 */
	amount(g, count) {
		if (!count) count = 1;
		//let minions = g.getData('minions');
		g.create(this, false, count);
	}

	/**
	 *
	 * @param {Game} g
	 * @param {number} [team=TEAM_PLAYER]
	 * @param {boolean} [keep=false]
	 */
	onCreate(g, team = TEAM_PLAYER, keep = false, max = 0) {
		let combat = g.getData("combat");

		if (!keep && max > 0 && combat.getMonsters(this.id, team).length >= max) {
			return;
		}

		let it = CreateNpc(this, g);
		it.team = team;
		it.active = !keep;

		if (keep) {
			let minions = g.getData("minions", false, false);
			if (!minions) console.warn("Context does not have minions!", g.self.id);
			else minions.add(it);
		} else {
			combat.addNpc(it);
		}
	}

	revive(gs) {
		let parsedState = generateStateTemplate(this, this.instTemplate);
		this.statedata = parsedState;
		/** State template of the original monster. Sub-instances (Monster instances generated by an NPC) will refer to the original state template. */
		// Must use Game.state as gs might be a context state.
		this.stateTemplate = this.subInstance
			? Game.state.getData(this.id).stateTemplate
			: freezeData(cloneClass(parsedState));
		for (let stat of Game.state.playerStats) {
			let id = stat.id;
			let statTemplate = stat.template;
			let stateItem = this.statedata[id],
				{ val, max } = stateItem;
			// Checking which stat is the main one to use for defineProperty.
			let prop = stat.stat || max == null ? "val" : "max";

			if (stateItem[prop] == null) {
				// Preemtively setting default values from player stats, so that they can be modded if needed
				if (val == null && statTemplate.val != null) {
					stateItem.val = val = statTemplate.val;
				}
				if (!stat.stat && max == null && statTemplate.max != null) {
					stateItem.max = max = statTemplate.max;
				}
				// Resetting, in case this changes during copying player stat template defaults.
				prop = stat.stat || max == null ? "val" : "max";

				// Just in case. Should never occur.
				if (stateItem[prop] == null) {
					console.warn(`${this.id}'s ${id}'s ${prop} is null during revival.`, stateItem);
					stateItem[prop] = 0;
				}
			}

			// Need to make max and stat ranges here for modding purposes and bestiary purposes.
			if (val != null) {
				stateItem.val = new Range(val);
				stateItem.val.id = `${this.id}.${id}.val`;
			}
			if (!stat.stat && max != null) {
				stateItem.max = new Range(max);
				stateItem.max.id = `${this.id}.${id}.max`;
			}

			// Making it so that modding or changing stats on monsters affects the stat in state instead.
			Object.defineProperty(this, id, {
				get() {
					return this.statedata[id][prop];
				},
				set(v) {
					this.statedata[id][prop] = v;
				},
				configurable: true,
				enumerable: true,
			});
		}
	}

	/**
	 * @returns {false}
	 */
	maxed() {
		return false;
	}
}
