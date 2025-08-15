import SpawnGroup from "@/classes/spawngroup";
import { SpawnParams } from "@/classes/spawnparams";

/**
 * Parse Dungeon/Locale spawning information.
 * @param {object|Array} spawnData
 */
export const ParseSpawns = spawnData => {
	if (typeof spawnData === "object") {
		if (Array.isArray(spawnData)) return new Spawns(spawnData);
		return new SpawnParams(spawnData);
	}
};

/**
 * Describes possible spawns for a dungeon.
 */
export default class Spawns {
	/**
	 * @property {SpawnGroup[]} groups
	 */
	get groups() {
		return this._groups;
	}
	set groups(v) {
		this._groups = v;
	}

	/**
	 * @private
	 * @property {number} weightTot
	 */
	get weightTot() {
		return this.groups.reduce((sum, spawn) => {
			let amt = +spawn.w;
			if (isNaN(amt)) {
				console.warn("isNaN weight", spawn, spawn.w);
				return sum;
			}
			return sum + amt;
		}, 0);
	}

	/**
	 *
	 * @param {Array} arr
	 */
	constructor(arr) {
		this.initGroups(arr);
	}

	/**
	 * Get a random spawn group from groups list.
	 * @note faster would be sorted groups and binary search.
	 * @param {number} [pct=0] - 1-base percent. progress through dungeon.
	 * @returns {Npc[]|null}
	 */
	random(pct = 0) {
		let weightLeft = this.weightTot;
		let groups = [...this.groups];

		while (groups.length) {
			let p = Math.random() * weightLeft;
			let tot = 0;
			let len = groups.length;
			let weight, i;

			for (i = 0; i < len; i++) {
				weight = groups[i].w;
				tot += weight;

				if (p <= tot) break;
			}

			if (i >= len) {
				console.warn(`Rolled weight ${p} exceeds total weight ${weightLeft} of ${len} items. Using last group`);
				i = len - 1;
			}

			// TODO if spawngroup.js's MakeSpawn is changed to use pct, this part will need to be revisited.
			let group = groups[i].instantiate(pct);
			if (group) return group;

			weightLeft -= weight;
			groups.splice(i, 1);
		}

		console.warn("Couldn't spawn anything", this.groups);
		return null;
	}

	/**
	 *
	 * @param { Array } list
	 */
	initGroups(list) {
		for (let i = list.length - 1; i >= 0; i--) {
			let g = list[i];

			if (!(g instanceof SpawnGroup)) g = list[i] = new SpawnGroup(g);
		}

		this.groups = list;
	}
}
