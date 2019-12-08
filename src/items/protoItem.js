import GData from "./gdata";

/**
 * Generic prototype for a wearable item.
 */
export default class ProtoItem extends GData {

	toJSON() {

		return this.value > 0 ? this.value : undefined;

	}

	get isRecipe() { return true; }

	get material() { return this._material; }
	set material(v) { this._material=v;}

	/**
	 * @property {} armor
	 */
	get armor(){ return this._armor; }
	set armor(v) { this._armor = v; }

	get attack() { return this._attack; }
	set attack(v) { this._attack = v; }

	/**
	 * @property {string} kind - subtype of wearable.
	 */
	get kind() { return this._kind; }
	set kind(v) { this._kind = v; }

	constructor(vars=null){

		super(vars);

		this.level = this.level || 1;

		if ( this.attack ) {
			if ( !this.attack.damage ) this.attack.damage = this.attack.dmg;
			this.attack.dmg = undefined;
		}


	}

}