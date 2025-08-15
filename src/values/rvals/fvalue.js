import RValue from "@/values/rvals/rvalue";
import Stat from "@/values/rvals/stat";
import { TYP_FUNC, FP } from "@/values/consts";
import Game from "@/game";
import { precise } from "@/util/format";
import { TYP_MOD } from "@/values/consts";

const MkParams = (...args) => {
	return `{${args.join(",")}}`;
};

export const PARAMS = Object.values(FP);
const MOD_PARAM = FP.MOD;

/**
 * Wraps a function that produces a number in an object so modifiers can be applied.
 */
export default class FValue extends RValue {
	/** @type {Record<String,WeakRef>} */
	_recordedParams = {};

	toJSON() {
		return this._src;
	}

	/**
	 * @property {function} fn - function that serves as the base value.
	 */
	get fn() {
		return this._fn;
	}
	set fn(v) {
		this._fn = v;
	}

	get type() {
		return TYP_FUNC;
	}

	/**
	 * @property {*} mod - FValues cannot mod a target due to varying values
	 */
	get mod() {
		return undefined;
	}
	set mod(v) {
		console.warn("Attempting to set mod of an FValue", v, this);
	}

	/** @property {*} recordedParams A list of parameters saved to use for FValue value calculations such as toString. */
	get recordedParams() {
		let params = {};
		for (const key in this._recordedParams) {
			const value = this._recordedParams[key].deref();
			if (value != null) params[key] = value;
			else {
				console.warn("FValue parameter has been garbage collected", key, this);
				delete this._recordedParams[key];
			}
		}
		return params;
	}

	set recordedParams(v) {
		for (const key in v) {
			this.setParameter(key, v[key]);
		}
	}

	get value() {
		return +this;
	}
	// Cannot set value
	set value(v) {
		console.warn("Attempting to set value of an FValue", v, this);
	}

	toString(params) {
		return precise(this.applyDummy(params)) + " (Function)";
	}

	valueOf(params) {
		return this.getApply(params);
	}

	constructor(params, src, path) {
		super(0, path);

		/** @type {Array<String>} */
		this._params = [...(params ?? PARAMS)];
		if (!this._params.includes(MOD_PARAM)) this._params.push(MOD_PARAM);

		this._src = src;

		this._fn = new Function(MkParams(...this._params), "return " + src);

		this.mods = {};

		this.mBase = this.mPct = 0;
	}

	/**
	 * Get value of a result or effect.
	 * NOTE: this applies the standard effect/result params.
	 * Damage funcs use different function param assignments.
	 * @param {GameState} gs
	 * @param {*} targ
	 * @returns {Number}
	 */
	getApply(params) {
		const recordedParams = this.recordedParams;
		if (params == null) {
			if (Object.values(recordedParams).length) params = {};
			else return this.applyDummy();
		}

		if (typeof params !== "object") {
			console.warn("Non-object params in FValue apply", params, this);
			return 0;
		}

		params = {
			...recordedParams,
			...params,
		};

		return this.calculateValue(params);
	}

	applyDummy(params = {}) {
		if (typeof params !== "object") {
			console.warn("Non-object params in FValue applyDummy", params, this);
			params = {};
		}

		params = {
			// Default dummy parameters
			[FP.GDATA]: Game.state.items,
			[FP.ACTOR]: Game.player,
			[FP.TARGET]: Game.player, // @TODO have a dummy enemy parameter that isnt the player
			[FP.CONTEXT]: Game.player.context, // @note should be game. @TODO replace context with target context once target is replaced.
			[FP.STATE]: Game.state,
			[FP.ITEM]: this.source, // @note may not be correct

			// Recorded values
			...this.recordedParams,

			// Values passed in. Highest priority.
			...params,
		};

		return this.calculateValue(params);
	}

	calculateValue(params) {
		let flat = this.mBase,
			modFlat = false;
		let pct = this.mPct,
			modPct = false;
		params[MOD_PARAM] = {
			get flat() {
				modFlat = true;
				return flat;
			},

			get pct() {
				modPct = true;
				return pct;
			},
		};

		let value = this._fn(params);

		if (isNaN(value)) {
			console.warn("Cannot convert FValue into number", value, this);
			return 0;
		}

		// If percent bonus is applied, return without caring about flat bonus
		if (!modPct) {
			if (!modFlat) {
				value += this.mBase;
			}

			value *= 1 + this.mPct;
		}

		return value;
	}

	setParameter(key, value) {
		// Saved as a WeakRef to prevent circular references causing memory leak.
		this._recordedParams[key] = new WeakRef(value);
	}

	// @note instantiate does not use valueOf like stats or rvalues, but creates another instance like mods do.
	instantiate = this.clone;

	clone() {
		let f = new FValue(this._params, this._src, this._id);
		f.source = this.source;
		f.recordedParams = this.recordedParams;

		return f;
	}

	// FValues can never pay for anything.
	canPay() {
		return false;
	}

	apply(val, amt = 1) {
		if (val.type === TYP_MOD && val.id) return this.addMod(val, amt);
		console.warn("Cannot apply", val, "to FValue", this);
	}

	/**
	 * Recalculate the total bonus and percent applied to FValue.
	 * @protected
	 */
	recalc() {
		let bonus = 0,
			pct = 0;

		for (let p in this.mods) {
			var mod = this.mods[p];
			if (mod === undefined) continue;

			pct += mod.countPct || 0;
			bonus += mod.countBonus || 0;
		}

		this.mPct = pct;
		this.mBase = bonus;

		return false;
	}

	addMod = Stat.prototype.addMod;
	removeMods = Stat.prototype.removeMods;
}
