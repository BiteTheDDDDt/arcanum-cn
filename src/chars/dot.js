import { ParseMods } from "modules/parsing";
import { MakeDmgFunc, ParseDmg } from "@/values/combatVars";
import { assign } from "@/util/objecty";
import { ParseFlags, NO_SPELLS, NO_ATTACK, NO_DEFEND } from "@/chars/states";
import { TYP_DOT } from "@/values/consts";
import Game from "@/game";
import { getAllPropertyDescriptors } from "@/util/util";
import Attack from "@/chars/attack";
import { MakeEffectFunc, ParseEffects } from "@/modules/parsing";

export default class Dot {
	toJSON() {
		if (!this.id) {
			console.warn("NO DOT ID: " + this);
			return undefined;
		}

		let src = this.source && Game.getData(this.source.id); // @TODO also need to check gs for source existence within gs.
		// template check due to possible overlap of indirect game ids (like an attack) and game ids, while allowing npc dot source checks.
		if (!src || src.template !== this.source.template) {
			let descs = getAllPropertyDescriptors(this);
			let save = {};

			for (let [prop, desc] of Object.entries(descs)) {
				if (
					// ignore "protected" properties
					prop[0] !== "_" &&
					// no nullish or function values
					this[prop] != null &&
					!(this[prop] instanceof Function) &&
					// the property in question has to be writable,
					// but if the property has a setter, the value has to match its protected property.
					// if the setter does not have a protected property with the same name, it is not saved.
					// @note gimmicky workaround. Since Vue replaces an object's properties with getters and setters,
					// a check for the setter's name being reactiveSetter is needed to differentiate from the setters defined in file.
					(desc.writable ||
						(desc.set && (desc.set.name === "reactiveSetter" || this[prop] === this["_" + prop])))
				)
					save[prop] = this[prop];
			}

			// Source deletion, as force saving means that the source won't be found through game's getData.
			if (save.source) delete save.source;
			if (save.applier) save.applier = save.applier.id;

			// Specific inclusion of level property due to level possibly depending on source
			if (this.level != null) save.level = this.level;

			// Various edits to the save
			if (!save.flags) delete save.flags;
			save.tags = save.tags.join(",") || undefined;

			return save;
		}

		return {
			id: this._id,
			kind: this.kind || this.school || undefined,
			school: this.school || undefined,
			name: this._name || undefined,
			sym: this._sym || undefined,
			tags: this.tags.join(",") || undefined,
			dmg: this.damage || undefined,
			heal: this.healing || undefined,
			// level:this.level || undefined,
			effect: this.effect || undefined,
			level: this._level || undefined,
			mod: this._mod || undefined,
			acc: this.acc || undefined,
			state: this.state || undefined,
			adj: this._adj || undefined,
			flags: this._flags !== 0 ? this._flags : undefined,
			duration: this.duration,
			/** @todo source should never be string. maybe on load? */
			source: this.source ? (typeof this.source === "string" ? this.source : this.source.id) : undefined,
			applier: this.applier ? (typeof this.applier === "string" ? this.applier : this.applier.id) : undefined,
			attack: this.attack || undefined,
			onExpire: this.onExpire || undefined,
			onDeath: this.onDeath || undefined,
			onHit: this.onHit || undefined,
			onMiss: this.onMiss || undefined,
			noLogs: this.noLogs || undefined,
			dotcondition: this.dotcondition || undefined,
			conditiontext: this.conditiontext || undefined,
			conditional: this.conditional || undefined,
			applyinstanced: this.applyinstanced || undefined,
			showinstanced: this.showinstanced || undefined,
		};
	}

	get name() {
		return (this.sym || "") + (this._name || this._id);
	} //(this._id.substring(0, 4) !== "dot_" ? this._id : this._id.substring(4));}
	set name(v) {
		if (v && this.sym) {
			this._name = v.split(this.sym).join("").trim();
		} else this._name = v;
	}

	get sym() {
		return this._sym;
	}
	set sym(v) {
		this._sym = v;
	}

	get id() {
		return this._id;
	}
	set id(v) {
		this._id = v;
	}

	get mod() {
		return this._mod;
	}
	set mod(v) {
		this._mod = v;
	}

	/*get effect(){return this._effect;}
	set effect(v){this._effect = v;}*/

	/**
	 * @property {string} verb - verb for dots that define state, e.g. sleeping.
	 */
	get adj() {
		return this._adj || this._name || this._id;
	}
	set adj(v) {
		this._adj = v;
	}

	/**
	 * @property {RValue} dmg - alias for damage.
	 */
	get dmg() {
		return this.damage;
	}
	set dmg(v) {
		this.damage = v;
	}

	/**
	 * @property {RValue} heal - alias for healing.
	 */
	get heal() {
		return this.healing;
	}
	set heal(v) {
		this.healing = v;
	}

	get attack() {
		return this._attack;
	}
	set attack(v) {
		if (Array.isArray(v)) {
			let a = [];
			for (let i = v.length - 1; i >= 0; i--) {
				a.push(v[i] instanceof Attack ? v[i] : new Attack(v[i]));
			}

			this._attack = a;
		} else this._attack = v instanceof Attack ? v : new Attack(v);
	}
	get onExpire() {
		return this._onExpire;
	}
	set onExpire(v) {
		this._onExpire = v instanceof Attack ? v : new Attack(v);
	}
	get onDeath() {
		return this._onDeath;
	}
	set onDeath(v) {
		this._onDeath = v instanceof Attack ? v : new Attack(v);
	}

	get onHit() {
		return this._onHit;
	}
	set onHit(v) {
		this._onHit = v instanceof Attack ? v : new Attack(v);
	}

	get onMiss() {
		return this._onMiss;
	}
	set onMiss(v) {
		this._onMiss = v instanceof Attack ? v : new Attack(v);
	}

	get potencies() {
		return this._potencies;
	}
	set potencies(v) {
		this._potencies = v;
	}
	/**
	 * @property {RValue} damage
	 */
	get damage() {
		return this._damage;
	}
	set damage(v) {
		this._damage = ParseDmg(v);
	}

	/**
	 * @property {RValue} healing
	 */
	get healing() {
		return this._healing;
	}
	set healing(v) {
		this._healing = ParseDmg(v);
	}

	/**
	 * @property {number} flags
	 */
	get flags() {
		return this._flags;
	}
	set flags(v) {
		this._flags = 0;

		if (typeof v !== "number") this._flags = ParseFlags(v);
		else this._flags = v;
	}

	get source() {
		return this._source;
	}
	set source(v) {
		this._source = v;
	}

	get applier() {
		return this._applier;
	}
	set applier(v) {
		this._applier = v;
	}
	/**
	 * @property {boolean} applyinstanced - whether the dot should become independent of damage bonuses after application.
	 */
	get applyinstanced() {
		return this._applyinstanced;
	}
	set applyinstanced(v) {
		this._applyinstanced = v;
	}

	/**
	 * @property {number} level - level (strength) of dot.
	 */
	get level() {
		return this._level || (this.source ? this.source.level || 0 : 0);
	}
	set level(v) {
		this._level = v;
	}

	/**
	 * @property {boolean} perm - dot is permanent.
	 */
	get perm() {
		return this._perm;
	}
	set perm(v) {
		this._perm = v;
	}

	get tags() {
		return this._tags;
	}
	set tags(v) {
		if (!v) return;
		if (typeof v === "string") this._tags = v.split(",").map(t => t.trim());
		else if (Array.isArray(v)) this._tags = v;
		else console.warn("Unknown tags in setter", v);
	}

	get type() {
		return TYP_DOT;
	}

	valueOf() {
		return this.perm || this.duration > 0 ? 1 : 0;
	}

	canCast() {
		return (this._flags & NO_SPELLS) === 0;
	}
	canAttack() {
		return (this._flags & NO_ATTACK) === 0;
	}
	canDefend() {
		return (this._flags & NO_DEFEND) === 0;
	}
	hasTag(t) {
		return this.tags && this.tags.includes(t);
	}

	constructor(vars, source, name) {
		if (vars) assign(this, vars);

		this.source = this.source || source || null;
		this.applier = this.applier || this.source || null;
		this.name = name || this._name || (source ? source.name : null);

		if (!this.id) console.warn("BAD DOT ID: " + this.name);
		if (!this.duration) {
			this.duration = 0;
			this.perm = true;
		}

		/**
		 * @property {boolean} stack - ability of dot to stack.
		 */
		if (this.mod) {
			this.mod = ParseMods(this.mod, this.id, this);

			//SetModCounts( this.mod, this );
		}
		if (!this.flags) this.flags = 0;

		if (this._attack) {
			this.attack = this._attack;
			if (!this._attack.name) this._attack.name = this.name;
		}
		if (this._onExpire) {
			this.onExpire = this._onExpire;
			if (!this._onExpire.name) this._onExpire.name = this.onExpire.name;
		}
		if (this._onDeath) {
			this.onDeath = this._onDeath;
			if (!this._onDeath.name) this._onDeath.name = this.onDeath.name;
		}
		if (this._onHit) {
			this.onHit = this._onHit;
			if (!this._onHit.name) this._onHit.name = this.onHit.name;
		}
		if (this._onMiss) {
			this.onMiss = this._onMiss;
			if (!this._onMiss.name) this._onMiss.name = this.onMiss.name;
		}
		/**
		 * @private {number} acc - integer accumulator
		 */
		this.acc = this.acc || 0;
		if (this.conditional?.onSuccess) {
			this.reviveProperties(this.conditional.onSuccess);
		}
		if (this.conditional?.onFailure) {
			this.reviveProperties(this.conditional.onFailure);
		}
		if (!this.tags) this.tags = [];
		if (!this.potencies) this.potencies = [];
		if (this.noLogs == null) this.noLogs = true;
		if (this.unreflectable == null) this.unreflectable = true;
	}

	/**
	 * Extend duration to the given number of seconds.
	 * @param {number} duration
	 */
	extend(duration) {
		if (duration === 0 || this.perm) {
			this.perm = true;
			this.duration = 0;
		} else if (duration > this.duration) {
			this.duration = duration;
		}
	}

	reviveAttack(attack) {
		{
			if (Array.isArray(attack)) {
				let a = [];
				for (let i = attack.length - 1; i >= 0; i--) {
					attack.push(attack[i] instanceof Attack ? attack[i] : new Attack(attack[i]));
				}

				this.attack = a;
			} else attack = attack instanceof Attack ? attack : new Attack(attack);
		}
		return attack;
	}
	revive(gs) {
		// @note uses GameState (player's context) and not the owner's state, which could be a npc's state.
		if (this.applier && typeof this.applier === "string") {
			this.applier = gs.getMonster(this.applier);
		}
		if (this.source && typeof this.source === "string") this.source = gs.getData(this.source);

		if (this.dotcondition) {
			this.dotcondition = MakeDmgFunc(this.dotcondition);
		}
		this.reviveProperties(this);

		if (this.conditional?.onSuccess) {
			this.reviveProperties(this.conditional.onSuccess);
		}
		if (this.conditional?.onFailure) {
			this.reviveProperties(this.conditional.onFailure);
		}
	}
	reviveProperties(subprop) {
		subprop.name = this._name || (this.source ? this.source.name : null);
		if (subprop.effect) {
			subprop.effect = ParseEffects(subprop.effect, MakeEffectFunc);
		}
		if (subprop.noLogs == null) subprop.noLogs = true;
		if (subprop.unreflectable == null) subprop.unreflectable = true;
		if (subprop.damage) subprop.damage = ParseDmg(subprop.damage);
		if (subprop.healing) subprop.healing = ParseDmg(subprop.healing);
		if (subprop.attack) subprop.attack = this.reviveAttack(subprop.attack);
		if (subprop.onExpire) subprop.onExpire = this.reviveAttack(subprop.onExpire);
		if (subprop.onDeath) subprop.onDeath = this.reviveAttack(subprop.onDeath);
		if (subprop.onHit) subprop.onHit = this.reviveAttack(subprop.onHit);
		if (subprop.onMiss) subprop.onMiss = this.reviveAttack(subprop.onMiss);
	}
	/**
	 * Ticks dt and returns the amount the dot has actually ticked,
	 * (allowing for seconds-only updates.)
	 * @param {number} dt
	 * @returns {number} - amount of tick time to count.
	 */
	tick(dt) {
		this.acc += dt;
		if (this.acc >= 1) {
			this.acc--;
			if (!this.perm) this.duration--;

			return 1;
		}

		return 0;
	}
	getAttack() {
		if (Array.isArray(this.attack)) return this.attack[Math.floor(Math.random() * this.attack.length)];
		return this.attack || this;
	}
}
