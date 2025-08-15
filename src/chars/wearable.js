import Attack from "@/chars/attack";

import Mod from "@/values/mods/mod";
import { ParseMods } from "modules/parsing";
import Item from "@/items/item";
import Instance from "@/items/instance";
import { WEARABLE, ARMOR, WEAPON, ENCHANT } from "@/values/consts";
import Stat from "@/values/rvals/stat";
import MaxStat from "@/values/maxStat";
import { ParseDmg } from "@/values/combatVars";
import game from "@/game";

export default class Wearable extends Item {
	toJSON() {
		let data = super.toJSON() || {};

		if (!this.save) data.material = data.kind = undefined;
		data.id = this.id;

		if (!this.template) {
			//console.warn('MISSING TEMPLATE: ' + this.id );
			data.type = this.type;
		} else if (typeof this.template === "string") {
			data.template = this.template;
		} else data.template = this.template.id;

		data.sell = this.sell;
		data.name = this.sname;

		data.enchants = this.enchants; //explicitly saving those, let's see if it helps with the disappearing act.
		if (this.mod) data.mod = this.mod;

		if (this.material) {
			if (!data) data = {};
			data.material = this.material.id;
		}

		return data && Object.keys(data).length ? data : undefined;
	}

	/**
	 * @property {number} enchants - total level of all enchantments applied.
	 */
	get enchants() {
		return this._enchants;
	}
	set enchants(v) {
		if (this._enchants === undefined || this._enchants === null || typeof v === "object") {
			this._enchants = v instanceof MaxStat ? v : new MaxStat(v, true);
		} else this._enchants.set(v);
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

	/**
	 * @property {Healing} heal
	 * @alias attack.healing
	 */
	get heal() {
		return this.healing;
	}
	set heal(v) {
		this.healing = v;
	}
	/**
	 * @property {Healing} heal
	 * @alias attack.healing
	 */
	get healing() {
		return this._healing;
	}
	set healing(v) {
		this._healing = ParseDmg(v);
	}

	get equippable() {
		return true;
	}

	/**
	 * @property {Alter} material - (may be string before revive.)
	 */
	get material() {
		return this._material;
	}
	set material(v) {
		this._material = v;
	}

	/**
	 * @property {Stat} armor
	 */
	get armor() {
		return this._armor;
	}
	set armor(v) {
		if (this._armor) {
			// NOTE: assign() copies _armor directly, so setter is never called. @todo fix this.
			if (typeof this._armor === "number") this._armor = new Stat(this._armor);
			this._armor.base = v;
		} else {
			this._armor = new Stat(v);
		}
	}

	/**
	 * @property {Stat} evasion
	 */
	get evasion() {
		return this._evasion;
	}
	set evasion(v) {
		if (this._evasion) {
			// NOTE: assign() copies _evasion directly, so setter is never called. @todo fix this.
			if (typeof this._evasion === "number") this._evasion = new Stat(this._evasion);
			this._evasion.base = v;
		} else {
			this._evasion = new Stat(v);
		}
	}

	/**
	 * @property {Stat} shield
	 */
	get shield() {
		return this._shield;
	}
	set shield(v) {
		if (this._shield) {
			// NOTE: assign() copies _shield directly, so setter is never called. @todo fix this.
			if (typeof this._shield === "number") this._shield = new Stat(this._shield);
			this._shield.base = v;
		} else {
			this._shield = new Stat(v);
		}
	}

	/**
	 * @property {Attack} attack
	 */
	get attack() {
		return this._attack;
	}
	set attack(v) {
		if (v) {
			if (Array.isArray(v)) {
				let a = [];
				for (let b of v) {
					a.push(b instanceof Attack ? b : new Attack(b, this));
				}

				this._attack = a;
			} else {
				if (v !== this._attack) {
					if (v instanceof Attack) {
						this._attack = v.clone();
					} else this._attack = new Attack(v, this);
				} else {
					if (!(v instanceof Attack)) this._attack = new Attack(v, this);
				}
			}
		} else {
			this._attack = null;
		}
	}

	/**
	 * @property {boolean} worn
	 */
	get worn() {
		return this.value > 0;
	}

	/**
	 * @property {string} slot
	 */
	get slot() {
		return this._slot;
	}
	set slot(v) {
		this._slot = v;
	}

	/**
	 * @property {string} kind - subtype of wearable.
	 */
	get kind() {
		return this._kind;
	}
	set kind(v) {
		this._kind = v;
	}

	constructor(vars = null, save = null) {
		super(vars, save);

		this.stack = false;
		this.consume = false;

		//if ( vars ) cloneClass( vars, this );
		//if ( save ) Object.assign( this, save );

		if (!this.enchants) this.enchants = 0;
		if (!this.alters) this.alters = [];
		//if (!this.armor) this.armor = 0; //this causes things without explicitly defined armor to properly be amenable to armor mods, including rings and armors.
		this.value = this.val = 0;

		if (!this.type) {
			console.warn(this.id + " unknown wear type: " + this.type);
			if (this.attack) {
				this.type = WEAPON;
			} else if (this.armor || this.slot != null) this.type = ARMOR;
			else this.type = WEARABLE;
		}

		if (this._attack) {
			this.attack = this._attack;
			if (!this._attack.name) this._attack.name = this.name;
		}
	}

	maxed() {
		return false;
	}

	/**
	 * @note super.revive() cannot be called here because the revive is too complex.
	 * @param {GameState} gs
	 */
	revive(gs) {
		if (!(this.sell instanceof Object)) {
			this.sell = { gold: this.sell };
		}
		if (typeof this.material === "string") this.material = gs.getData(this.material);

		if (typeof this.recipe === "string") this.template = gs.getData(this.recipe);
		else if (typeof this.template === "string") this.template = gs.getData(this.template);
		if (this.template) {
			if (this.armor === null || this.armor === undefined) this.armor = this.template.armor;
			if (this.evasion === null || this.evasion === undefined) this.evasion = this.template.evasion;
			if (this.shield === null || this.shield === undefined) this.shield = this.template.shield;
			// bonus applied for using item; not linked to attack.
			if (this.tohit === null || this.tohit === undefined) this.tohit = this.template.tohit || 0;

			if (this.attack === null || this.attack === undefined) this.attack = this.template.attack;

			this.type = this.template.type || this.type;

			//mergeSafe( this, this.template );
		} else console.log("bad template: " + this.template);

		if (!this.level || (this.template && this.level <= this.template.level)) {
			if (this.template && this.template.level) this.level = this.template.level.valueOf() || 1;
			else this.level = 1;

			if (this.material && this.material.level) {
				//console.log('MAT WITH LEVEL: ' + this.material.level );
				this.level += this.material.level.valueOf() || 0;
			}
		}
		if (typeof this.alters.includes === "function")
			if (this.material && !this.alters.includes(this.material.id)) {
				//{
				this.alters.push(this.material.id);
			}
		//}
		if (this.mod) this.mod = ParseMods(this.mod, this.id, this);
		// @compat
		if (!this.enchants.max) this.calcMaxEnchants();
	}

	/**
	 * Test if item has an enchantment.
	 * @param {string} id
	 * @returns {boolean}
	 */
	hasEnchant(id) {
		return this.alters && this.alters.find(v => v.id === id);
	}

	applyMaterial(mat) {
		if (!mat) return;
		this.material = mat;

		this.doAlter(mat);
	}

	/**
	 *
	 * @param {Alter} it - enchantment being added.
	 */
	doAlter(it) {
		//Note doAlter is never called during game startup, so priceMod isn't added more than once (like alter names).
		if (it.sell) {
			for (let a in it.sell) {
				if (Object.hasOwn(this.sell, a)) {
					this.sell[a] += it.sell[a];
				} else this.sell[a] = it.sell[a];
			}
		}
		if (it.priceMod) {
			if (this.sell instanceof Object) this.sell.gold = (this.sell.gold || 0) + it.priceMod;
			else if (typeof this.sell === "number") this.sell += it.priceMod;

			if (this.cost instanceof Object) this.cost.gold = (this.cost.gold || 0) + it.priceMod;
			else if (typeof this.cost === "number") this.cost += it.priceMod;

			if (this.sell == null && this.cost == null) this.sell = it.priceMod;
		}
		if (it.type === ENCHANT) this.enchants += it.level || 0;
		else if (it.level) this.level += it.level;
		Instance.doAlter.call(this, it);
	}

	calcMaxEnchants() {
		let max = 0;
		if (this.template) {
			max = this.template.enchants || 0;
		}

		console.log(this.id + " RECALC ENCHANT max: " + max);
		this.enchants.max = max;
	}

	getEquipMod() {
		const mod = {};
		if (this.armor) mod.defense = +this.armor;
		if (this.evasion) mod.dodge = +this.evasion;
		if (this.shield) mod.barrier = { max: +this.shield };
		return ParseMods({ self: mod }, this.id, this);
	}

	/**
	 *
	 * @param {Game} g
	 */
	equip(g) {
		this.remod(g);

		let p = g.state.player;
		if (this.type === WEAPON || this.attack) p.addWeapon(this);
	}

	/**
	 * @param {Game} g
	 */
	remod(g) {
		this.value = 1;
		if (this.armor || this.evasion || this.shield) g.applyMods(this.getEquipMod(), 1);
		if (this.mod) g.applyMods(this.mod, 1);

		let p = g.state.player;
		p.defense.value.base = 0;
	}
	/**
	 *
	 * @param {Game} g
	 */
	unequip(g) {
		this.value = 0;

		if (this.armor || this.evasion || this.shield) g.removeMods(this.getEquipMod());
		if (this.mod) g.removeMods(this.mod);

		let p = g.state.player;
		if (this.type === WEAPON || this.attack) p.removeWeapon(this);
	}

	convertMods(v) {
		let t = typeof v;
		if (v instanceof Mod) return v;

		if (t === "object") {
			if (v.id) {
				return new Mod(v, v.id, this);
			} else {
				for (let p in v) {
					v[p] = this.convertMods(v[p]);
				}
			}
		} else if (t === "string" || t === "number") return new Mod(v, this.id, this);

		return v;
	}
}
