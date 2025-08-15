import { randElm, randFrom, propSort, randWhere } from "@/util/array";

/**
 * Category to assign items with no property value
 * on the filter dimension.
 * e.g. filters['biome'] = { none:[npcs without biomes] }
 */
const BLANK_CATEGORY = "none";

/**
 * Item generation group for a given item type.
 */
export default class GenGroup {
	/**
	 *
	 * @param {GData[]} items
	 */
	constructor(items) {
		this.items = items.filter(v => !v.unique && !v.noproc);

		/**
		 * Data split/grouped by a variable/subcategory of the data
		 * @property {.<string,<string,Array>>} groupBy
		 */
		this.filterBy = {};
	}

	subgroup() {}

	/**
	 * Get a random item at or below the given level.
	 * @property {number} level - max item level.
	 * @property {(object)=>boolean} pred - optional filter predicate.
	 * @returns {GData}
	 */
	randBelow(max = 1, pred) {
		let levels = this.filterBy.level;

		let st = 1 + Math.floor(Math.random() * max);
		let lvl = st;

		do {
			let list = levels[lvl];
			let it;
			if (list) {
				it = pred ? randWhere(list, pred) : randElm(list);
				if (it) return it;
			}

			if (--lvl < 0) lvl = max;
		} while (lvl !== st);

		return null;
	}

	/**
	 *
	 * @param {number} level
	 * @param {boolean} fallback - if item of given level not found,
	 * fall back to a lower level.
	 */
	randAt(level, fallback = true) {
		let levels = this.filterBy.level;
		let items = levels[level];

		if (items?.length > 0) return randElm(items);
		if (!fallback) return null;

		return this.randCloseTo(level - 3, fallback);
	}

	/**
	 *
	 * @param {number} level
	 * @param {boolean} fallback - if item of given level not found,
	 * fall back to a lower level.
	 */
	randCloseTo(level, fallback = true) {
		let levels = this.filterBy.level;
		let arr = [];
		for (let i = -2; i < 3; i++) {
			let items = levels[level + i];
			if (items?.length > 0) arr.push(randElm(items));
		}

		if (arr?.length > 0) return randElm(arr);
		if (!fallback) return null;

		return this.randCloseTo(level - 5, level > 5);
	}

	/**
	 * Get random item with no restriction.
	 * @returns {object}
	 */
	rand() {
		if (this.items.length === 0) return null;
		return this.items[Math.floor(Math.random() * this.items.length)];
	}

	/**
	 * Get all items at or below the given level.
	 * @property {number} level - max item level.
	 * @property {(object)=>boolean} pred - optional filter predicate.
	 * @returns {GData[]}
	 */
	allBelow(max = 1, pred) {
		const levels = this.filterBy.level;
		const valid = [];

		let lvl = max;

		while (lvl-- >= 0) {
			let list = levels[lvl];
			if (!list) continue;

			let it = pred ? list.filter(pred) : list;
			if (!it) continue;

			valid.push(...it);
		}

		return valid;
	}
	/**
	 * Get a filtered sublist.
	 * @param {string} filter - filter type 'level', 'biome' etc.
	 * @param {string} match - property value to match.
	 * @param {boolean} allowBlank - accept items with null value on property. e.g. biome:null
	 * @returns {Array}
	 */
	filtered(filter, match, allowBlank = false) {
		let f = this.filterBy[filter];

		let res = f[match] || [];
		if (allowBlank && f.hasOwnProperty(BLANK_CATEGORY)) return res.concat(f[BLANK_CATEGORY]);

		return res;
	}

	/**
	 * Get an array of categories under a filter.
	 * @param {string} filter
	 * @param {string|string[]} matches
	 * @param {boolean} allowBlank
	 * @returns {Array[]}
	 */
	getCategories(filter, matches, allowBlank) {
		const subs = this.filterBy[filter];
		const res = [];

		if (subs === undefined) return res;
		if (allowBlank && subs.hasOwnProperty(BLANK_CATEGORY)) res.push(subs[BLANK_CATEGORY]);
		if (typeof matches === "string") {
			if (subs.hasOwnProperty(matches)) res.push(subs[matches]);
		} else if (Array.isArray(matches)) {
			for (let i = matches.length - 1; i >= 0; i--) {
				const sub = subs[matches[i]];
				if (sub) res.push(sub);
			}
		}

		return res;
	}

	/**
	 * Get a random item from a filtered subcategory.
	 * @param {string} filter - level/biome, etc.
	 * @param {string} matches - valid property matches.
	 * @param {boolean} allowBlank - accept items with no prop value on filter. e.g. biome:null
	 */
	randBy(filter, matches, allowBlank = false) {
		/// no filters of this type.
		if (this.filterBy[filter] === undefined) return null;

		if (Array.isArray(matches)) {
			return randFrom(this.getCategories(filter, matches, allowBlank));
		} else {
			return randElm(this.filtered(filter, matches, allowBlank));
		}
	}

	/**
	 * Create a new named item category based on the 'prop' property
	 * of the items.
	 * @param {string} name - category name.
	 * @param {?string} prop - prop to sort on. defaults to name.
	 * @param {?string} [sortBy=level] property to sort filtered lists by.
	 */
	makeFilter(name, prop, sortBy = "level") {
		const group = (this.filterBy[name] = {});
		prop = prop || name;

		for (let i = this.items.length - 1; i >= 0; i--) {
			const it = this.items[i];
			const cat = it[prop] || BLANK_CATEGORY;

			const list = group[cat];
			if (list === undefined) {
				group[cat] = [it];
			} else {
				list.push(it);
			}
		}

		// sort all lists.
		if (sortBy && sortBy !== prop) {
			for (const p in group) {
				propSort(group[p], sortBy);
			}
		}
	}
}
