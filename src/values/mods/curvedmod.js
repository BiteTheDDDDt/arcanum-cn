import { precise } from "../../util/format";
import { OPS } from "./atmod";
import Mod from "./mod";

/**
 * Regex for parsing CurvedMod
 * modFlat - flat base modifier - this is the total modifier when at 100% of "max"
 * modPct - percent-based modifier - this is the total modifier when at 100% of "max"
 * max - Maximum count to consider
 * percent - target percentage of max count to obtain 1/2 of modFlat or modPct
 *        must be > 0 and < 100, or will be reset to 1 or 99 (respectively)
 */
const CurvedRegex = /(?<modFlat>[\+\-]?\d*(?:\.\d+)?(?![.%0-9]))?(?:(?<modPct>[\+\-]?\d*(?:\.\d+)?)\%)?\|(?<max>\d+)\|(?<percent>\d+(?:\.\d+)?)/;

export const isCurvedMod = v => CurvedRegex.test(v);

/**
 * A CurvedMod is a mod that is applied a certain number of times, with either increasing or decreasing results, until hitting the overall maximum
 * 
 * Unlike other mod types, CurvedMod functions by manipulating the 'count' to be a floating point multipler of the maximum bonus.
 * This is necessary to ensure that the game recognizes the updated values, as it monitors for changes to a Mod's count, but not its bonus.
 */
export default class CurvedMod extends Mod {
    toJSON() {
        return this.str;
    }

    toString() {
        let p = +this.percent;
        let n = +this.max;
        let base = +this.base || 0;
        let basePct = +this.basePct || 0;

        let m = `${base || ""}${base && basePct ? " & " : ""}${base < 0 && basePct > 0 ? "+" : ""}${basePct ? basePct * 100 + "%" : ""}`;
        let mhalf = `${base/2 || ""}${base && basePct ? " & " : ""}${base < 0 && basePct > 0 ? "+" : ""}${basePct ? basePct/2 * 100 + "%" : ""}`;

        let half = Math.ceil((p*n)/100);

        let str = "";

        let cur = `${precise(this.countBonus.toString()) || ""}${this.countBonus && this.countPct ? " & " : ""}${this.countPct ? this.countPct * 100 + "%" : ""}`;

        str = mhalf + " at " + half;

        if(p === 50){
            str += ", "; 
        }else if(p < 50){
            str += " decreasing to ";
        }else{
            str += " increasing to ";
        }
        
        str += m + " total at " + n;

        if(cur){
            str += " (cur: " + cur + ")";
        }

        return str;
    }

    get count() {
        let count = +(this._count instanceof Function ? this._count() : super.count);

        return this.calcMult(count);
    }

    set count(v) {
        super.count = v;
    }

    get range() {
        return this.max;
    }

    get str() {
        return `${this.base || ""}${this.basePct > 0 && this.base && this.basePct ? "+" : ""}${this.basePct * 100 + "%"|| ""}|${this.max || ""}|${this.percent}`;
    }
    set str(v) {
        this.parseMod(v);
    }

    constructor(vars, id, source) {
        super(0, id, source);

        // Copy constructor
        if (vars instanceof CurvedMod) {
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
            console.warn("Non-string vars in CurvedMod constructor", vars, this);
            this.setBase();
        }
    }

    parseMod(str) {
        let res = CurvedRegex.exec(str)?.groups;
        if (!res) {
            console.warn("Invalid Curved Mod", str);
        }

        this.setBase(res);
        return CurvedRegex.test(str);
    }

    setBase(res) {
        if (!res) res = {};

        this.base = +(res.modFlat || 0);
        this.basePct = +(res.modPct || 0) / 100;
        this.max = +res.max;
        this.percent = +res.percent;
        this.scaling = +this.calcScale(this.percent);

        console.warn("Calling CurvedMod setBase");

        // This condition should theoretically never occur due to the regex restrictions, but just in case...
        if (this.max == null || this.percent == null || (this.base == null && this.basePct == null)) {
            console.warn("CurvedMod was declared improperly", this.max, this.percent, this);
        }

        if(this.percent <= 0){
            this.percent = 1;
            console.warn("CurvedMod defined with 'percent' <= 0, resetting to 1", this);
        }

        if(this.percent >= 100){
            this.percent = 99;
            console.warn("CurvedMod defined with 'percent' >= 100, resetting to 99", this);
        }
    }

    clone() {
        return new CurvedMod(this);
    }

    instantiate() {
        let vars = {
            modFlat: this.bonus,
            modPct: this.pctTot * 100,
            max: +this.max,
            percent: +this.percent,
            scaling: +this.scaling
        };
        return new CurvedMod(vars, this.id, +this.source);
    }

    maxed() {
        let count = +(this._count instanceof Function ? this._count() : super.count);
        return count >= this.max;
    }

    calcMult(iter) {
        let bonusMult = 0;
        let max = +this.max;
        let s = this.scaling;

        if(iter >= this.max){
            iter = +this.max;
            return 1;
        } else if(!s) {
            return iter/max;
        } else {
//            bonusMult = (((-max)/((iter*s)+max))+1) * (s+1)/s; // Original formula
            bonusMult = ((s+1)*iter)/(max+s*iter); // Alternate, simplified formula
            return bonusMult;
        }
    }

    calcScale(percent){
        return ((100-(2*percent))/percent);
    }
}