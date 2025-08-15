import { TYP_MOD, TYP_STAT, TYP_RVAL } from "@/values/consts";
import RValue from "@/values/rvals/rvalue";
import Game from "@/game";

import { precise } from "@/util/format";

/**
 * Stat with a list of modifiers.
 */
export default class Stat extends RValue {
	static getBase(s) {
		return s instanceof Stat ? s.base : s;
	}

	toJSON() {
		return this._value;
	}

	/**
	 * @returns {string}
	 */
	toString() {
		return precise(this.value);
	}

	/** @todo */
	set value(v) {
		this._value = v;
	}
	/**
	 * @property {number} value
	 */
	get value() {
		//let abs = Math.abs( this._base + this._mBase );

		return this.valueOf();
	}

	/**
	 * @returns {number}
	 */
	valueOf() {
		let bTot = this._value + this._mBase;
		let mult = Math.max(1 + this._mPct, 0);

		if (this._min !== null && this._min !== undefined) return Math.max(bTot * mult, this._min);
		else return bTot * mult;
	}

	/**
	 * @property {number} base
	 */
	get base() {
		return this._value;
	}
	set base(v) {
		this._value = v;
	}

	/**
	 * @property {number} bonus - total bonus to base, computed from mods.
	 * @protected
	 */
	get mBase() {
		return this._mBase;
	}

	set mBase(v) {
		this._mBase = v;
	}

	/**
	 * @property {number} mPct - mod pct bonuses, as decimal.
	 * Does not count implicit starting 1
	 * @protected
	 */
	get mPct() {
		return this._mPct;
	}

	/**
	 * @property {number} pctTot - total percent added by mods.
	 * Same as mPct for Stat, but different in Mod
	 */
	get pctTot() {
		return this._mPct;
	}

	/**
	 * @property {number} prev - previous value of Stat calculated by recalc
	 */
	get prev() {
		return this._prev || 0;
	}
	set prev(v) {
		this._prev = v;
	}

	/**
	 * @property {object} - mods being applied by object
	 */
	get mod() {
		return this._mod;
	}
	set mod(v) {
		this._mod = v;
	}

	/**
	 * @property {.<string,Mod>} mods - mods applied to object.
	 */
	get mods() {
		return this._mods;
	}
	set mods(v) {
		const mods = {};
		for (const p in v) {
			const mod = v[p];
			mods[p] = mod instanceof Mod ? mod : new Mod(v[p]);
		}
		this._mods = mods;
		this.recalc();
	}

	/**
	 * @property {boolean} min - restrict stat to values above the min.
	 */
	get min() {
		return this._min;
	}
	set min(v) {
		this._min = v;
	}

	get type() {
		return TYP_STAT;
	}

	/**
	 *
	 * @param {Object|number} vars
	 * @param {string} path
	 */
	constructor(vars = null, path, min) {
		super(0, path);

		if (vars) {
			if (typeof vars === "object") {
				if (vars.type === TYP_RVAL) {
					this.base = vars.value ?? 0;
				} else {
					this.base = vars.base;
				}
			} else if (!isNaN(vars)) this.base = Number(vars);
		}

		if (min) this.min = min;

		if (!this.base) this.base = 0;

		this._mBase = this._mPct = 0;

		if (!this.mod) this.mod = {};

		if (!this.mods) this.mods = {};
	}

	/**
	 * @todo set modded value to match exactly?
	 * @param {number|Stat} v
	 */
	set(v) {
		this.base = typeof v === "number" ? v : v.base;
	}

	/**
	 * Add amount to base stat.
	 * @param {number} amt
	 */
	add(amt) {
		super.value += amt;
	}

	/**
	 * Apply a modifier to Stat, if the applied value can be a modifier.
	 * If not, the stat is permanently modified by the mod value.
	 * @param {Mod|number|Percent|Object} val
	 * @param {number} [amt=1]
	 */
	apply(val, amt = 1) {
		if (val.type === TYP_MOD && val.id) return this.addMod(val, amt);

		if (val.type === TYP_MOD) console.warn("MOD WITHOUT ID: " + val);

		if (!isNaN(val)) val = +val;

		if (typeof val === "number") {
			this.base += amt * val;
			//deprec( this.id + ' mod: ' + mod );
			// console.warn( this.id + ' adding: ' + val +'  DEPRECATED NEW base: ' + this.vaTYP_MOD, lue );

			return;
		} else if (typeof val === "object") {
			/// when an object has no id, must apply to base.
			this.base += amt * (val.bonus || val.value || 0);

			console.warn(this.id + " DEPRECATED APPLY: " + val + "  type: " + val.constructor.name);

			//console.dir( val );
		} else {
			console.dir(val, "unknown mod: " + typeof val);
		}
	}

	/**
	 * Apply permanent modifier to stat.
	 * Used for instances.
	 * @param {Stat} mod
	 */
	perm(mod) {
		console.warn(this.id + " PERM MOD: " + mod);
		if (mod.countBonus) {
			this.base += mod.countBonus;
		} else if (typeof mod === "number") {
			this.base += mod;
		} else {
		}
	}

	/**
	 *
	 * @param {Mod} mod
	 * @param {number} amt
	 */
	addMod(mod, amt = 1) {
		if (!mod.id) {
			console.dir(mod, "NO MOD ID");
			this.apply(mod, amt);
			return;
		}

		//this._mPct += amt*mod.pct;
		//this._mBase += amt*mod.bonus;

		//should always occur (even at 0), to overwrite mods that have different values.
		this.mods[mod.id] = mod;
		this.recalc();

		/*let cur = this.mods[ mod.id ];
		if ( cur === undefined ) {
			cur = this.mods[mod.id] = mod;
		}*/
	}

	/**
	 *
	 * @param {*} mod
	 */
	removeMods(mod) {
		let cur = this.mods[mod.id];
		if (cur === undefined) return;
		this.mods[mod.id] = undefined;
		this.recalc();
	}

	/**
	 * Get the new stat value if base and percent are changed
	 * by the given amounts.
	 * @param {number} delBonus - delta base.
	 * @param {number} delPct - delta percent.
	 * @returns {number} - new stat value.
	 */
	delValue(delBonus = 0, delPct = 0) {
		return (this._value + this._mBase + delBonus) * (1 + this._mPct + delPct);
	}

	/**
	 * Checks if the current value of this Stat has changed since last called.
	 * Calls applyMods if it has.
	 * @returns {boolean} if the value has updated
	 */
	update() {
		let current = +this,
			result = current !== this.prev;

		if (result && this.mod && Object.values(this.mod).length) {
			Game.applyMods(this.mod, current);
		}

		this.prev = current;

		return result;
	}

	/**
	 * Recalculate the total bonus and percent applied to stat.
	 * @protected
	 */
	recalc() {
		let bonus = 0,
			pct = 0;
		for (const p in this._mods) {
			const mod = this._mods[p];
			if (mod === undefined) continue;

			pct += mod.countPct || 0;
			bonus += mod.countBonus || 0;
		}
		this._mPct = pct;
		this._mBase = bonus;

		return this.update();
	}

	canPay(amt) {
		let temp = this.base - amt + this._mBase;
		return this._min !== null && this._min !== undefined ? temp * (1 + this._mPct) >= this.min : true;
	}
}
