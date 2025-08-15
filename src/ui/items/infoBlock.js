import { DisplayItem } from "@/ui/items/displayItem";
import { RollOver } from "ui/popups/itemPopup.vue";

import { SKILL, UNTAG } from "@/values/consts";

import Game from "@/game";
import { toRaw } from "vue";

/**
 * Name to use for object in current context.
 */
export const DisplayName = obj => {
	let it = RollOver.context.getData(obj, false);
	return it ? it.name : obj;
};

export const CheckTypes = Object.freeze({
	COST: "cost",
	NEED: "need",
	FULL: "maxed",
	MOD: "mod", //TODO make mod check
});

function ignoreNewProp(basePath, lastProp) {
	return [basePath, lastProp];
}

function hidePath() {
	return undefined;
}

/**
 * Convert item path display based on next subprop.
 * Certain properties indicate the display path should be treated specially,
 * such as switching the order of 'max' or omitting 'base' and 'value' display.
 */
const PathConversions = {
	effect: ignoreNewProp,
	mod: (basePath, lastProp) => [basePath, lastProp + " ➢"],
	base: ignoreNewProp,
	value: ignoreNewProp,
	statedata: ignoreNewProp,
	skipLocked: hidePath,
	max: (basePath, lastProp) => [basePath, "Max " + lastProp],
	default: (basePath, lastProp, newProp) => {
		// no conversion func.
		if (newProp.startsWith(UNTAG)) {
			newProp = prop.slice(UNTAG.length);
			newProp = DisplayName(newProp);
			newProp = "Existing " + newProp;
		} else {
			newProp = DisplayName(newProp);
		}

		const newBase = basePath ? basePath + " " + lastProp : lastProp;
		return [newBase, newProp]; //newProp becomes lastProp for deeper paths;
	},
};

/**
 * Convert display path based on current path object
 * and current property being displayed.
 * @param {string} basePath - base path up to prop
 * @param {string} lastProp - last property on the path (not included in base yet)
 * @param {string} newProp - next prop on path - NOT path tail.
 * @returns {[string|*,string]} path displayed. returns undefined if no information
 * should be displayed for this variable path.
 */
export const ConvertPath = (basePath, lastProp, newProp) => {
	const func = PathConversions[newProp] ?? PathConversions.default;
	return func(basePath, lastProp, newProp);
};

/**
 * Collection of display info.
 */
export class InfoBlock {
	/**
	 * Attempt to add a path to the current item being referred to.
	 * @param {string} p
	 * @param curItem
	 */
	static GetItem(p, curItem = null) {
		return curItem?.[p] || curItem || RollOver.context.getData(p, false);
	}

	constructor() {
		this.results = {};
	}

	clear() {
		this.results = {};
	}

	add(itemName, value, isRate = false, checkType = null, ref = null, testfunc = null) {
		if (ref && ref.reverseDisplay) value = -value;

		let cur = this.results[itemName];
		let ctx = RollOver.context;

		if (cur === undefined) {
			let isAvailable = true;

			if (ref instanceof Object && checkType && toRaw(ctx) === Game) {
				if (checkType === CheckTypes.NEED && ref.fillsRequire instanceof Function)
					isAvailable &&= ref.fillsRequire(ctx);
				if (checkType === CheckTypes.COST && ref.canPay instanceof Function && !(ref.isRecipe || ref.instanced))
					isAvailable &&= ref.canPay(value);
				if (checkType === CheckTypes.COST && (ref.isRecipe || ref.instanced)) {
					let CheckObj = {};
					CheckObj[ref.id] = value;
					isAvailable &&= Game.canPay(CheckObj);
				}
				if (checkType === CheckTypes.FULL && ref.maxed instanceof Function) isAvailable &&= !ref.maxed();
			}
			if (checkType === CheckTypes.NEED && testfunc instanceof Function) {
				isAvailable &&= testfunc(Game.gdata, null, Game.state);
				itemName = testfunc.toString();
			}
			if (value.toString() !== "0") {
				let itm = RollOver.item;
				let currLength = itm.length ? (itm.length - itm.exp) / itm.rate : null;
				let maxLength = itm.length ? itm.length / itm.rate : null;
				this.results[itemName] = new DisplayItem(itemName, value, isRate, isAvailable, maxLength, currLength);
			}
		} else {
			cur.add(value);
		}
	}
}
