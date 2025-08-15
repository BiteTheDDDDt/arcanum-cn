import Attack from "@/chars/attack";
import Task from "@/items/task";
import { canTarget } from "@/values/consts";
import { NO_SPELLS } from "@/chars/states";
import { ParseDmg, processDot } from "@/values/combatVars";
import Stat from "@/values/rvals/stat";
/**
 * Single requirement substring.
 * @param {string} s - GData/Idable id.
 * @param {number} lvl
 */
/*const reqStr = (s,lvl=1)=>{
	return '!g.' + s + '||g.' + s + '>=' + lvl;
}*/

/**
 * Create a school unlock function.
 * @param {string|string[]} s - name(s) of school which unlocks item.
 * @param {number} lvl - spell level.
 * @param {number} ratio - multiply spell level before test.
 */

export default class Spell extends Task {
	/**
	 * @property {string} only - target type, name, kind, or tag, to which
	 * the enchantment can be applied.
	 */
	get only() {
		return this._only;
	}
	set only(v) {
		this._only = typeof v === "string" ? v.split(",") : v;
	}

	/**
	 * @property {boolean} caststoppers - condition that cause the cast to fail
	 */
	get caststoppers() {
		return this._caststoppers;
	}
	set caststoppers(v) {
		this._caststoppers = v;
	}

	get attack() {
		return this._attack;
	}
	set attack(v) {
		if (v != null) {
			if (!v.potencies) v.potencies = ["spelldmg"];
			if (!(v instanceof Attack)) v = new Attack(v, this);
			if (!v.name) v.name = this.name;
			if (!v.kind) v.kind = this.school;
		}

		this._attack = v;
	}

	get action() {
		return this._action;
	}
	set action(v) {
		if (v) {
			//console.dir(v, this.id);
			if (!(v instanceof Attack)) v = new Attack(v, this);
			if (!v.name) v.name = this.name;
			if (!v.kind) v.kind = this.school;
		}

		this._action = v;
	}

	/**
	 * @property {Damage} dmg
	 * @alias attack.damage
	 */
	get dmg() {
		return this.damage;
	}
	set dmg(v) {
		this.damage = v;
	}
	/**
	 * @property {Damage} damage
	 * @alias attack.damage
	 */
	get damage() {
		return this._damage ? this._damage : 0;
	}
	set damage(v) {
		this._damage = ParseDmg(v);
	}
	get level() {
		return this._level;
	}
	set level(v) {
		this._level = v instanceof Stat ? v : new Stat(v, null, 1);
	}

	toJSON() {
		let data = super.toJSON() || {};
		if (data.caststoppers) delete data.caststoppers;
		if (data.attack) delete data.attack;
		if (data.level) delete data.level;
		if (this.owned) data.owned = this.owned;

		return data && Object.keys(data).length ? data : undefined;
	}

	constructor(vars = null) {
		super(vars);

		this.repeat = true;
		this.type = "spell";
		this.level = this.level || 1;
		if (!this.caststoppers) this.caststoppers = [NO_SPELLS];
		this.owned = this.owned || false;
		if (!this.owned) {
			if (!this.buy) this.buy = {};
		}

		if (this.locked !== false && this.school !== "martial") {
			this.addRequire("spellbook");
		}
		if (this.dot) {
			this.dot = processDot(this.dot);
			if (!this.dot.school) this.dot.school = this.school;
		}
	}

	/**
	 *
	 * @param {GData} targ
	 */
	canUseOn(targ) {
		if (targ.level && 2 * this.level < targ.level) return false;
		return !this.only || canTarget(this.only, targ);
	}
	canRez(targ) {
		if (targ.level && this.resurrect.maxlevel < targ.level) return false;
		return !this.resurrect.only || canTarget(this.resurrect.only, targ);
	}
}
