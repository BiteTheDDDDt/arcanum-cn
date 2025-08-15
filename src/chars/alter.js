import Base, { mergeClass } from "../items/base";
import { assign } from "@/util/objecty";
import { ParseMods } from "@/modules/parsing";
import Attack from "@/chars/attack";
import Events, { EVT_UNLOCK } from "../events";

/**
 * @class A Mutator alters instanced objects.
 */
export default class Alter {
	get isRecipe() {
		return true;
	}

	get exclude() {
		return this._exclude;
	}
	set exclude(v) {
		this._exclude = typeof v === "string" ? v.split(",") : v;
	}

	get only() {
		return this._only;
	}
	set only(v) {
		this._only = typeof v === "string" ? v.split(",") : v;
	}

	/**
	 * @property {object} alter - alteration mods applied to target.
	 */
	get alter() {
		return this._alter;
	}
	set alter(v) {
		this._alter = v;
	}

	get locked() {
		return this._locked;
	}
	set locked(v) {
		this._locked = v;
	}

	/**
	 * @property {boolean} disabled - whether the item has been
	 * disabled / is no longer available.
	 */
	get disabled() {
		return this._disabled;
	}
	set disabled(v) {
		this._disabled = v;
	}
	get require() {
		return this._require;
	}
	set require(v) {
		this._require = v;
	}
	get craftcostmult() {
		return this._craftcostmult;
	}
	set craftcostmult(v) {
		this._craftcostmult = v;
	}

	get attack() {
		return this._attack;
	}
	set attack(v) {
		if (!v) return;
		if (Array.isArray(v)) {
			let a = [];
			for (let i = v.length - 1; i >= 0; i--) {
				a.push(v[i] instanceof Attack ? v[i] : new Attack(v[i]));
			}

			this._attack = a;
		} else this._attack = [v instanceof Attack ? v : new Attack(v)];
	}
	toJSON() {
		if (!this.locked)
			return {
				id: this.id,
				locked: this.locked,
			};
		else return undefined;
	}

	constructor(vars = null) {
		if (vars) assign(this, vars);

		if (this.alter) this.alter = ParseMods(this.alter, this.id, 1);

		if (this._locked === undefined || this._locked === null) this.locked = true;
		if (!this._craftcostmult) this.craftcostmult = 1;
	}

	blocked() {
		return this.locked || this.disabled;
	}
	doUnlock() {
		if (this.disabled || this.locked === false || this.locks > 0) return;

		this.locked = false;
		Events.emit(EVT_UNLOCK, this);
	}
}

mergeClass(Alter, Base);
