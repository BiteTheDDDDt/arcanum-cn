import { precise } from "@/util/format";
import { OPS } from "@/values/mods/atmod";
import Mod from "@/values/mods/mod";
import Stat from "@/values/rvals/stat";

/**
 * Regex for parsing RangedMod
 * modFlat - flat base modifier
 * modPct - percent-based modifier
 * start - Starting point for count. If min exists, defaults to min. Otherwise, defaults to 0.
 * minOp - Atmod-like greater than or gte check for min, which sets count to 0 if min isn't met. If left blank, sets count to start if count is lower than min.
 * min - Minimum count range for mod application, inclusive. Leave blank for no minimum.
 * max - Maximum count range for mod application, inclusive. Leave blank for no maximum.
 * mode - Toggles sectioning, meaning the difference between min and max is divided into (step + 1) of sections.
 *        By default, goes from min (or 0 if min isnt defined) up to max by step amount.
 *        Max and step must be defined for section to work properly.
 * rounding - Rounding method. + uses ceil, - uses floor, default is round. only used when step is defined.
 * step - the amount that count should be rounded to. If sectioning is true, step is instead the amount of sections plus one between min and max that count uses.
 */
const RangedRegex =
	/^(?<modFlat>[\+\-]?\d*\.?\d+(?![.%0-9]))?(?:(?<modPct>[\+\-]?\d*\.?\d+)\%)?\/(?:(?<start>[\+\-]?\d*\.?\d+)?\/)?(?:(?<minOp>>=?)?(?<min>[\+\-]?\d*\.?\d+))?\/(?<max>[\+\-]?\d*\.?\d+)?\/(?:(?<mode>~)?(?<rounding>[\+\-])?(?<step>\d*\.?\d+))?$/;

const roundingFunc = char => {
	switch (char) {
		case "+":
			return Math.ceil;
		case "-":
			return Math.floor;
		default:
			return Math.round;
	}
};

export const isRangedMod = v => RangedRegex.test(v);

/**
 * A RangedMod is a mod that is applied a certain number of times, between a minimum and maximum, inclusive.
 */
export default class RangedMod extends Mod {
	toJSON() {
		return this.str;
	}

	toString() {
		let str = this.strBonus(this.estimateStep());

		if (!str) return "0";

		if (+this.step) {
			str += ` per ${precise(this.estimateStep())} amount${this.roundingSym ? ` (rounded ${this.roundingSym === "+" ? "up" : "down"})` : ""}`;
		}

		if (+this.min) {
			// Uses strBonus(start) instead of adjustedbonus(min) to account for greater than comparison, which would cause adjustCount to always return 0
			str += ` ${this.minOp ? "active" : "starting"} ${this.minOp === OPS.GT.value ? "past" : "at"} ${precise(this.min)} (resulting in ${this.strBonus(this.start)})`;
		}
		if (+this.max) {
			str += ` up to ${precise(this.max)} (resulting in ${this.adjustedbonus(this.max)})`;
		}

		// Old compressed version of toString. Re-add if a setting for compressed tooltip is ever added.
		// if (+this.step) {
		//     str += ` per ${precise(this.estimateStep()).toString().replace(/.*/, this.roundingSym ? (this.roundingSym === "+" ? "⌈$&⌉" : "⌊$&⌋") : "$&")}`;
		// }

		// let minStr = `${precise(this.min)} (${this.strBonus(this.start)})`;
		// let maxStr = `${precise(this.max)} (${this.adjustedbonus(this.max)})`

		// if (+this.min && +this.max) {
		//     str += ` between ${this.minOp === OPS.GT.value ? "(" : "["}${minStr},${maxStr}]`;
		// } else if (+this.min) {
		//     str += ` ${this.minOp ? "active" : "starting"} ${this.minOp === OPS.GT.value ? "past" : "at"} ${minStr}`;
		// } else if (+this.max) {
		//     str += " up to " + maxStr;
		// }

		return str;
	}

	get count() {
		let count = +(this._count instanceof Function ? this._count() : super.count);
		return this.adjustCount(count);
	}
	set count(v) {
		super.count = v;
	}

	get range() {
		return this.max - this.min;
	}

	get str() {
		let base = Stat.getBase(this.base),
			basePct = Stat.getBase(this.basePct);
		return `${base || ""}${basePct > 0 && base ? "+" : ""}${basePct ? basePct * 100 + "%" : ""}/${this._start != null ? Stat.getBase(this._start) + "/" : ""}${OPS[this.minOp] || ""}${Stat.getBase(this.min) || ""}/${Stat.getBase(this.max) || ""}/${this.section ? "~" : ""}${this.roundingSym || ""}${Stat.getBase(this.step)}`;
	}
	set str(v) {
		this.parseMod(v);
	}

	get start() {
		return +(this._start ?? this.min);
	}
	set start(v) {
		this._start = v;
	}

	constructor(vars, id, source) {
		super(0, id, source);

		// Copy constructor
		if (vars instanceof RangedMod) {
			this.str = vars.str;
			if (!this.id) {
				this.id = vars.id;
			}
			if (vars._count) {
				this._count = vars._count;
			}
			if (!this.source && vars.source) {
				this.source = vars.source;
			}
			return;
		}

		if (typeof vars === "object") {
			this.setBase(vars);
		} else if (typeof vars === "string") {
			this.str = vars;
		} else {
			console.warn("Non-string vars in RangedMod constructor", vars, this);
			this.setBase();
		}
	}

	estimateStep() {
		if (!+this.step) return 1;
		return this.section ? this.range / this.step : +this.step;
	}

	parseMod(str) {
		let res = RangedRegex.exec(str)?.groups;
		if (!res) {
			console.warn("Invalid Ranged Mod", str);
		}

		this.setBase(res);
		return RangedRegex.test(str);
	}

	setBase(res) {
		if (!res) res = {};

		this.base = +(res.modFlat || 0);
		this.basePct = +(res.modPct || 0) / 100;

		this.min = res.min == null || res.min === "" ? null : +res.min;
		this.max = res.max == null || res.max === "" ? null : +res.max;

		if (res.start) this.start = res.start;

		this.minOp = !res.minOp ? null : typeof res.minOp === "number" ? res.minOp : OPS[res.minOp];

		this.section = !!res.mode;
		this.roundingSym = res.rounding;
		this.step = +(res.step || 0);

		if (this.max == null) {
			if (this.section && this.step)
				console.warn("RangedMod section mode was declared with non-zero step, but missing max", this.max, this);
			this.section = false;
		}
		if (this.max != null && this.min != null && this.max < this.min) {
			console.warn("RangedMod maximum less than minimum", this.min, this.max, this);
			this.max = this.min;
		}
	}

	clone() {
		return new RangedMod(this);
	}

	instantiate() {
		let vars = {
			modFlat: this.bonus,
			modPct: this.pctTot * 100,
			minOp: this.minOp,
			start: this._start,
			min: +this.min,
			max: +this.max,
			mode: this.section,
			rounding: this.roundingSym,
			step: +this.step,
		};
		return new RangedMod(vars, this.id, +this.source);
	}

	maxed() {
		return this.max != null && this.count >= this.max;
	}

	adjustedbonus(adjustment = 1) {
		let adjustedcount = this.adjustCount(adjustment);
		return this.strBonus(adjustedcount);
	}

	strBonus(count) {
		let s = this.bonus ? precise(this.bonus * count) : "";

		if (this.pctTot) {
			if (this.bonus) s += " & ";
			s += precise(100 * this.pctTot * count) + "%";
		}

		return s;
	}

	adjustCount(count) {
		if (this.max != null && count >= this.max) {
			count = this.range;
		} else if (this.min != null && count <= this.min) {
			if (count < this.min || (this.minOp === OPS.GT.value && +this.min === count)) return 0;
			count = 0;
		} else if (this.step) {
			let rounding = roundingFunc(this.roundingSym);
			let min = this.min || 0;
			let { range, step } = this;
			if (this.section) {
				count = (rounding(((count - min) * step) / range) * range) / step;
			} else {
				count = rounding((count - min) / step) * step;
			}
		}

		return count + this.start;
	}
}
