import Task from "@/items/task";
import Stat from "@/values/rvals/stat";
import { SKILL } from "@/values/consts";
import Scaler from "@/values/rvals/scaler";

/**
 * @const {number} EXP_RATIO - ratio of skill experience cap increase.
 */
const EXP_RATIO = 0.35;

/**
 * Starting exp length for skills of various level.
 * @param {number} lvl
 */
const levLength = lvl => {
	return Math.floor(11 + 172789 / (1 + Math.pow(1.2, 50 - lvl)));
};

/**
 * Skill default values
 */
const Defaults = Object.freeze({
	rate: 0.5,
	max: 5,
	unlockweight: 0.5,
});

export default class Skill extends Task {
	static get Defaults() {
		return Defaults;
	}

	/**
	 * Skill levels are actually value.
	 */
	showLevel() {
		return Math.floor(this.value);
	}

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor(vars = null) {
		super(vars);

		this.type = SKILL;

		if (!this.length || this.value == 0) this.length = levLength(this.level + this.value);
		else if (this.value >= 1) {
			// recheck percent lengths. (allow percent formula to change.)
			let len = levLength(this.level + this.value);
			if (this.length > len) this.length = len;
		}

		if (!this.buy) this.buy = { arcana: 20 };

		if (!this.rate) this.rate = new Stat(Defaults.rate, this.id + ".rate");
		if (!this.rate.base) this.rate.base = Defaults.rate;

		if (!(this.exp instanceof Scaler)) this.ex = 0;

		if (!this.max) this.max = new Stat(Defaults.max, this.id + ".max", 0);
		if (!this.unlockweight) this.unlockweight = Defaults.unlockweight;
	}

	/**
	 * Allow buying a skill even when maxed.
	 * @param {Game} g
	 * @returns {boolean}
	 */
	canBuy(g) {
		if (this.disabled || this.locked || this.locks > 0) return false;

		if (this.buy && !g.canPay(this.buy)) return false;

		return true;
	}

	changed(g, count) {
		super.changed(g, count);

		if (this.value > Math.floor(this._max.value)) {
			this.value = Math.floor(this.max.value);
			return;
		}

		this.length = levLength(this.level + this.value);
	}

	/**
	 * Skills have no meaningful onUse
	 * @param {Context} g
	 */
	onUse(g) {}
}
