/**
 * @property {object.<string,string|object>} - maps school to skill determining school level.
 */
const skillMap = {
	mana: {
		id: "lore",
		reqs: 2, // requirements doubled when unlocking with skill
	},
};

skillMap.arcane = skillMap.lore = skillMap.mana;

/**
 * Identifier based on current time and a random suffix that is extremely unlikely to be duplicated.
 * @param {string} prefix
 */
export const TimeId = prefix => prefix + Date.now().toString(36).slice(3) + (4096 * Math.random()).toString(36);

/**
 * @const TYP_PCT - object key to indicate a percentile in the given effect/result.
 * Also 'type' of a Percent type object.
 */
export const TYP_PCT = "%";
export const TYP_RANGE = "range";
export const TYP_STAT = "stat";
export const TYP_MOD = "mod";
export const TYP_RVAL = "rval";
export const TYP_FUNC = "func";
export const TYP_DOT = "dot";
export const TYP_TAG = "tagset";

export const TYP_RUN = "runnable";
export const TYP_STATE = "state";

export const ENCHANTSLOTS = "enchantslots";

export const P_TITLE = "title";
export const P_LOG = "log";

const POTION = "potion";
const ITEM = "item";
const NPC = "npc";

export { POTION, ITEM };

const RESOURCE = "resource";
const ACTION = "action";
const SKILL = "skill";
const ENCOUNTER = "encounter";
const MONSTER = "monster";
const WEARABLE = "wearable";
export const ENCHANT = "enchant";
const HOME = "home";
const COMPANION = "companion";
const EVENT = "event";
const EQUIPSLOT = "equipslot";
const HOBBIES = "hobbies";
const GOALS = "goals";
const ARMOR = "armor",
	WEAPON = "weapon";

export const REST_TAG = "t_rest";

export const TASK = "task";
const DUNGEON = "dungeon";
const LOCALE = "locale";
const EXPLORE = "explore";
const CLASH = "clash";

export const TASK_END_REASON = Object.freeze({
	SUCCESS: 1,
	FAIL: 2,
	DEFEATED: 4,

	USER: 8,
	CANTRUN: 16, // Unspecific reason caused by going through GData's canRun. Most likely it would be due to cost, full, or maxed
	COST: 32,
	FULL: 64,
	MAXED: 128,

	// Combined cases
	MIDRUN_LOSS: 52, // 4 + 16 + 32
});

export const UNTAG = "untag_";
export const DESCENDLIST = ["cost", "run", "effect", "result", "convert", "input", "output"];

/**
 * @const {number} TEAM_PLAYER - team constant for allies.
 */
export const TEAM_PLAYER = 1;

/**
 * @const {number} TEAM_NPC - constant for NPC team.
 * Might allow additional teams in future.
 */
export const TEAM_NPC = 0;

/**
 * @const {number} TEAM_ALL - not an actual team; indicates
 * an effect to apply to all teams.
 */
export const TEAM_ALL = 2;

export { DUNGEON, EXPLORE, LOCALE, CLASH };
export {
	HOME,
	RESOURCE,
	NPC,
	SKILL,
	ACTION,
	ENCOUNTER,
	WEARABLE,
	MONSTER,
	ARMOR,
	WEAPON,
	HOBBIES,
	GOALS,
	EVENT,
	EQUIPSLOT,
	COMPANION,
};

/**
 * @param {number} s - speed
 * @returns {number} delay - time between the attacks;
 */
export function getDelay(s) {
	return 0.5 + 3.5 * Math.exp(-s / 20);
}

/**
 * Dictionary of possible dynamic function parameters.
 * @prop {String} FP.GDATA - Game data
 * @prop {String} FP.TARGET - Target data
 * @prop {String} FP.ACTOR - Actor/Caster data
 * @prop {String} FP.ITEM - Item data
 * @prop {String} FP.CONTEXT - (Target's) context data
 * @prop {String} FP.STATE - Game state data
 * @prop {String} FP.MOD - Mods applied to the FValue containing the function
 */
export const FP = Object.freeze({
	GDATA: "g",
	TARGET: "t",
	ACTOR: "a",
	ITEM: "i",
	CONTEXT: "c",
	STATE: "s",
	MOD: "mod",
});

/**
 * Determine if the given target allows targetting of item.
 * @param {string|string[]} targs - tags, names, or or id list.
 * @param {GData} it
 * @returns {boolean} true if targs can target it.
 */
export const canTarget = (targs, it) => {
	if (Array.isArray(targs)) {
		for (let i = targs.length - 1; i >= 0; i--) {
			const t = targs[i];
			if ((t && t == it.type) || t === it.kind || t === it.slot || it.hasTag(t)) return true;
		}
		return false;
	}

	return targs === it.type || targs === it.kind || targs === it.slot || it.hasTag(targs);
};
/**
 * Filters the target list so it only has targets fitting the condition.
 * @param {[]} targs - array of targets
 * @param {string} only - list of properties that validate a target
 * @returns {[]}  targs filtered by only. Has no effect if only is not present.
 */
export const enforceOnly = (targs, only = null) => {
	return only ? targs.filter(t => canTarget(only, t)) : Array.from(targs);
};
