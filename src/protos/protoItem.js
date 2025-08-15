import GData from "@/items/gdata";
import { ARMOR, WEAPON, WEARABLE } from "@/values/consts";
import Wearable from "@/chars/wearable";
import Item from "@/items/item";
import Game from "@/game";
import { ParseRVal } from "@/modules/parsing";
import { Changed } from "@/changes";
import Events, { EVT_UNLOCK } from "../events";
/**
 * Generic prototype for a wearable item.
 */
export default class ProtoItem extends GData {
	toJSON() {
		if (!this.locked)
			return {
				id: this.id,
				locked: this.locked,
			};
		else return undefined;
	}

	/**
	 * @property {boolean} hide - don't display unlock messages.
	 */
	get hide() {
		return false;
	}
	get isRecipe() {
		return true;
	}

	get material() {
		return this._material;
	}
	set material(v) {
		this._material = v;
	}

	get properties() {
		return this._properties;
	}
	set properties(v) {
		this._properties = ParseRVal(v);
	}
	get locked() {
		return this._locked;
	}
	set locked(v) {
		this._locked = v;
	}

	/**
	 * @property {} armor
	 */
	get armor() {
		return this._armor;
	}
	set armor(v) {
		this._armor = v;
	}

	get attack() {
		return this._attack;
	}
	set attack(v) {
		this._attack = v;
	}

	/**
	 * @property {boolean} disabled - whether the item has been
	 * disabled / is no longer available.
	 */

	/**
	 * @property {string} kind - subtype of wearable.
	 */
	get kind() {
		return this._kind;
	}
	set kind(v) {
		this._kind = v;
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

	get craftcostmult() {
		return this._craftcostmult;
	}
	set craftcostmult(v) {
		this._craftcostmult = v;
	}

	constructor(vars = null) {
		super(vars);

		this.level = this.level || 1;
		this.value = 1;

		if (this.enchants == null) {
			this.enchants = 0;
		}

		if (!this.require && !this.need) this.locked = false;
		if (this.attack) {
			if (!this.attack.damage) this.attack.damage = this.attack.dmg;
		}
		if (!this._craftcostmult) this.craftcostmult = 1;
	}

	/**
	 * Tests whether item fills unlock requirement.
	 * @returns {boolean}
	 */
	/*fillsRequire(g) {
		return g.state.findInstance(this.id) != null ;
	}*/

	/**
	 *
	 */
	instantiate() {
		Changed.add(this);
		if (this.type === ARMOR || this.type === WEAPON || this.type === WEARABLE) return new Wearable(this.template);
		else return new Item(this.template);
	}

	hasUnique() {
		return Game.state.hasUnique(this);
	}

	maxed() {
		return this.hasUnique();
	}

	isEquipped() {
		return (
			(this.type === ARMOR || this.type === WEAPON || this.type === WEARABLE) &&
			Game.state.equip.find(this.id, true) != null
		);
	}

	blocked() {
		return this.locked || this.disabled;
	}

	doUnlock() {
		if (this.disabled || this.locked === false) return;

		this.locked = false;
		Events.emit(EVT_UNLOCK, this);
	}
}
