import Task from "@/items/task";
import { EXPLORE, LOCALE } from "@/values/consts";
import { ParseSpawns } from "@/classes/spawns";
import SpawnGroup from "@/classes/spawngroup";

/**
 * Default dist per level function. Also currently used by dungeon.
 * Math note: Similar results to the old formula up to level 17,
 * Slows down severely after that,
 * And caps at 2500 around level 35.
 * @param {number} lvl
 * @returns {number}
 */
export const getDist = lvl => {
	return Math.ceil(2 + 2500 / (1 + Math.pow(1.4, 20 - lvl)));
};

/**
 * @param {object} g - all game data.
 * @param {*} s
 * @returns {boolean}
 */
export const distTest = (g, s) => {
	return g.dist >= s.dist;
};

/**
 * @param {*} g
 * @param {*} s
 * @returns {boolean}
 */
export const levelTest = (g, s) => {
	return g.player.level >= s.level - 1;
};

export class Locale extends Task {
	/**
	 * @property {object|string} once - result to happen only once.
	 */
	get once() {
		return this._once;
	}
	set once(v) {
		this._once = v;
	}

	/**
	 * @property {Spawns} encs - alias for Spawns
	 * @alias spawns
	 */
	get encs() {
		return this._spawns;
	}
	set encs(v) {
		this.spawns = v;
	}

	/**
	 * @property {Spawns} spawns
	 */
	get spawns() {
		return this._spawns;
	}
	set spawns(v) {
		this._spawns = ParseSpawns(v);
	}

	/**
	 * @property {string[]} bars - list of progress bars to display in locale.
	 */
	get bars() {
		return this._bars;
	}
	set bars(v) {
		this._bars = typeof v === "string" ? v.split(",") : v;
	}

	/**
	 * @property {SpawnGroup|Object.<number,SpawnGroup>} boss
	 */
	get boss() {
		return this._boss;
	}
	set boss(v) {
		if (v === null || v instanceof SpawnGroup) this._boss = v;
		else if (typeof v === "object" && !v.hasOwnProperty("ids")) {
			for (let p in v) {
				if (this.id === "mustylibrary") console.log("BOSS SUB: " + p);
				v[p] = new SpawnGroup(v[p]);
			}

			this._boss = v;
		} else this._boss = new SpawnGroup(v);
	}

	/**
	 * @property {string} proxy - id of actual runner.
	 */
	get controller() {
		return EXPLORE;
	}

	/**
	 * Difficulty shows "danger" of location with short string instead of numerical number
	 * It's more closely tied to tiers
	 */
	showLevel() {
		return this.difficulty ? this.difficulty : this.level;
	}

	constructor(vars = null) {
		super(vars);

		if (this.level === null || this.level === undefined) this.level = 1;
		this.type = LOCALE;

		/**
		 * @property {number} progress
		 */
		this.ex = this.ex || 0;
		if (!this.length) this.length = 20 * this.level;

		// default require for dungeon is player-level.
		if (!this.require) this.require = levelTest;

		if (this.dist === undefined || this.dist === null) this.dist = getDist(this.level);

		if (!this.need) this.need = distTest;
	}

	/**
	 * Get next group of enemies, or next Encounter.
	 * @returns {Encounter|Npc[]|null}
	 */
	getEncounter() {
		let spawn = null;

		if (this.hasBoss(this.boss, this.exp)) {
			spawn = this.getBoss(this.boss);
			// unique bosses might result in empty arrays.
			if (spawn) return spawn;
		}

		return this.spawns.random(this.percent() / 100);
	}

	/**
	 * Checks if there is a boss at the given position in dungeon.
	 * @param {string|object|Array} boss
	 * @param {number} at
	 * @returns {boolean}
	 */
	hasBoss(boss, at) {
		if (boss == null) return false;

		at = Math.floor(at + 1);
		if (boss instanceof SpawnGroup) {
			// last enemy in dungeon.
			return at == this.length;
		}
		return boss.hasOwnProperty(at);
	}

	/**
	 * Instantiates a boss Npc.
	 * @param {string|string[]|object} boss
	 * @returns {Npc[]|Explore|null}
	 */
	getBoss(boss) {
		if (!boss) return null;

		if (boss instanceof SpawnGroup) return boss.instantiate();

		let ind = Math.floor(this.exp + 1);
		if (boss.hasOwnProperty(ind)) {
			// mid-level boss
			return boss[ind].instantiate();
		}

		return null;
	}
}
