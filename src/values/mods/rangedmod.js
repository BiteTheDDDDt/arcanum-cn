import { precise } from "../../util/format";
import { OPS } from "./atmod";
import Mod from "./mod";

/**
 * Regex for parsing RangedMod
 * modFlat - flat base modifier
 * modPct - percent-based modifier
 * minOp - Atmod-like greater than or gte check for min, which sets count to 0 if min isn't met. If left blank, sets count to min if count is lower than min.
 * min - Minimum count multiplier, inclusive. Leave blank for no minimum.
 * max - Maximum count multiplier, inclusive. Leave blank for no maximum.
 * mode - Toggles sectioning, meaning the difference between min and max is divided into (step + 1) of sections. 
 *        By default, goes from min (or 0 if min isnt defined) up to max by step amount.
 *        Min, max, and step must be defined for section to work properly.
 * rounding - Rounding method. + uses ceil, - uses floor, default is round. only used when step is defined.
 * step - the amount that count should be rounded to. if sectioning is true, step is instead the amount of sections plus one between min and max that count uses.
 */
const RangedRegex = /(?<modFlat>[\+\-]?\d*(?:\.\d+)?(?![.%0-9]))?(?:(?<modPct>[\+\-]?\d*(?:\.\d+)?)\%)?\/(?:(?<minOp>>=?)?(?<min>[\+\-]?\d+(?:\.\d+)?))?\/(?<max>[\+\-]?\d+(?:\.\d+)?)?\/(?<mode>~)?(?<rounding>[\+\-])?(?<step>\d*(?:\.\d+)?)/;

const roundingFunc = char => {
    switch (char) {
        case "+":
            return Math.ceil;
        case "-":
            return Math.floor;
        default:
            return Math.round;
    }
}

export const isRangedMod = v => RangedRegex.test(v);

/**
 * A RangedMod is a mod that is applied a certain number of times, between a minimum and maximum, inclusive.
 */
export default class RangedMod extends Mod {
    toJSON() {
        return this.str;
    }

    toString() {
        let str = (this.bonus !== 0 ?
            precise(this.bonus.toString() * (this.estimateStep() || 1))
            : '');


        if (this.pctTot !== 0) {

            if (this.bonus !== 0) str += ' & ';
            str += precise(100 * this.pctTot * (this.estimateStep() || 1)) + '%';
        }

        if (!str) str = '0';
        if (!str) return str;

        if (this.step) {
            str += ` per ${precise(this.estimateStep()).toString().replace(/.*/, this.roundingSym ? (this.roundingSym === "+" ? "⌈$&⌉" : "⌊$&⌋") : "$&")}`;
        }
        if (this.min && !this.max) {
            str += ` starting at ${this.minOp === OPS.GT.value ? "(" : ""}${this.adjustedbonus(this.min) ?? ""} total`;
        }
        if (!this.min && this.max) {
            str += ` up to ${this.minOp === OPS.GT.value ? "(" : ""}${this.adjustedbonus(this.max) ?? ""} total`;
        }
        if (this.min && this.max) {
            str += ` between ${this.minOp === OPS.GT.value ? "(" : "["}${this.adjustedbonus(this.min) ?? ""},${this.adjustedbonus(this.max) ?? ""}] total`;
        }
        if (this.min && !this.minOp) {
            str += ` min ${this.min}`;
        }

        return str;
    }

    get count() {
        let count = +(this._count instanceof Function ? this._count() : super.count);
        if (this.max != null && count >= this.max) {
            return this.max;
        } else if (this.min != null && count <= this.min) {
            return !this.minOp || (this.minOp === OPS.GTE.value && this.min === count) ? this.min : 0
        }

        if (this.step) {
            let rounding = roundingFunc(this.roundingSym);
            if (this.section) {
                return rounding((count - this.min) * this.step / this.range) * this.range / this.step + this.min;
            }
            let min = this.min || 0;
            return rounding((count - min) / this.step) * this.step + min;
        }

        return count;
    }
    set count(v) {
        super.count = v;
    }

    get range() {
        return this.max - this.min;
    }

    get str() {
        return `${this.base || ""}${this.basePct > 0 && this.base && this.basePct ? "+" : ""}${this.basePct * 100 || ""}/${OPS[this.minOp] || ""}${this.min || ""}/${this.max || ""}/${this.section ? "~" : ""}${this.roundingSym || ""}${this.step}`;
    }
    set str(v) {
        this.parseMod(v);
    }

    constructor(vars, id, source) {
        super(0, id, source);

        // Copy constructor
        if (vars instanceof RangedMod) {
            this.str = vars.str;
            this.id = vars.id;
            if (vars._count) {
                this._count = vars._count;
            } else {
                this.source = vars.source;
            }
            this.basePct = vars.basePct;
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
        return this.section ? this.range / this.step : this.step;
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

        this.minOp = !res.minOp ? null : typeof res.minOp === "number" ? res.minOp : OPS[res.minOp];

        this.section = !!res.mode;
        this.roundingSym = res.rounding;
        this.step = +(res.step || 0);

        if (this.max == null || this.min == null) {
            if (this.section && this.step) console.warn("RangedMod section mode was declared with non-zero step, but missing either min or max", this.min, this.max, this);
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
            min: +this.min,
            max: +this.max,
            mode: this.section,
            rounding: this.roundingSym,
            step: +this.step
        };
        return new RangedMod(vars, this.id, +this.source);
    }

    maxed() {
        return this.max != null && this.count >= this.max;
    }

    adjustedbonus(adjustment = 1) {

        let adjustedcount = this.arbitrarycount(adjustment)
        let s = (this.bonus !== 0 ?
            precise(this.bonus.toString() * adjustedcount)
            : '');


        if (this.pctTot !== 0) {

            if (this.bonus !== 0) s += ' & ';
            s += precise(100 * this.pctTot * (this.estimateStep() || 1) * adjustedcount) + '%';
        }
        return s
    }

    arbitrarycount(count) {

        if (this.max != null && count >= this.max) {
            return this.max;
        } else if (this.min != null && count <= this.min) {
            return !this.minOp || (this.minOp === OPS.GTE.value && this.min === count) ? this.min : 0
        }

        if (this.step) {
            let rounding = roundingFunc(this.roundingSym);
            if (this.section) {
                return rounding((count - this.min) * this.step / this.range) * this.range / this.step + this.min;
            }
            let min = this.min || 0;
            return rounding((count - min) / this.step) * this.step + min;
        }

        return count;
    }
}