import GData from "@/items/gdata";
import Game from "@/game";
import { ENCOUNTER } from "@/values/consts";
import Scaler from "@/values/rvals/scaler";
import Stat from "@/values/rvals/stat";

/**
 * Sublocation of a Locale
 */

const Defaults = Object.freeze({
	rate: 1,
});
export default class Encounter extends GData {
	toJSON() {
		if (this.exp != 0) {
			return {
				value: this.value,
				exp: this.exp,
				locked: this.locked,
			};
		} else {
			return this.value > 0 || this.require ? { value: this.value, locked: this.locked } : undefined;
		}
	}

	/**
	 * @property {number} exp
	 */
	get exp() {
		return this._exp;
	}
	set exp(v) {
		this._exp = v;
	}

	get ex() {
		return this._exp;
	}
	set ex(v) {
		this._exp = v instanceof Scaler ? v : new Scaler(v, this.id + ".exp", this._rate);
	}

	/**
	 *
	 */
	get rate() {
		return this._rate;
	}
	set rate(v) {
		this._rate = v instanceof Stat ? v : new Stat(v, this.id + ".rate");
		if (this.ex !== undefined) this.ex.scale = this._rate;
	}

	get length() {
		return this._length;
	}
	set length(v) {
		if (v === null || v === undefined) this._length = null;
		else this._length = v instanceof Stat ? v : new Stat(v);
	}

	/**
	 * @property {boolean} done
	 */
	get done() {
		return this._exp >= this.length;
	}

	constructor(vars = null, save = null) {
		super(vars);

		if (save) Object.assign(this, save);

		this.type = ENCOUNTER;
		//encounters share exp initialization with tasks, since they progress in the same way.
		if (!(this.exp instanceof Scaler)) this.ex = 0;
		if (!this.rate) this.rate = new Stat(Defaults.rate, this.id + ".rate");
		if (!this.rate.base) this.rate.base = Defaults.rate;

		if (!this.level) this.level = 1;
		if (!this.length) this.length = 5 * this.level;
		if (this._locked != false) this.locked = this.require ? true : false;
	}

	update(dt) {
		this.exp.addUnscaled((this.rate || 1) * dt); //do not double-dip on %
		if (this.effect) {
			Game.applyVars(this.effect, dt);
		}
	}

	/**
	 * @returns {false}
	 */
	maxed() {
		return false;
	}
}
