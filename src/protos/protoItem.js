import GData from "../items/gdata";
import { ARMOR, WEAPON, WEARABLE } from "../values/consts";
import Wearable from "../chars/wearable";
import Item from "../items/item";
import { ParseRVal } from "../modules/parsing";

/**
 * Generic prototype for a wearable item.
 */
export default class ProtoItem extends GData {

	toJSON() {

		return this.value > 0 ? this.value : undefined;

	}

	/**
	 * @property {boolean} hide - don't display unlock messages.
	 */
	get hide() { return true; }
	get isRecipe() { return true; }

	get material() { return this._material; }
	set material(v) { this._material=v;}

	get properties(){return this._properties;}
	set properties(v){
		this._properties = ParseRVal(v);
	}

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

	/**
	 * @property {string} slot
	 */
	get slot(){return this._slot;}
	set slot(v){ this._slot=v }

	constructor(vars=null){

		super(vars);

		this.level = this.level || 1;

		if ( !this.enchants ) {
			this.enchants = 1;
		}

		if ( !this.require && !this.need ) this.locked = false;
		if ( this.attack ) {
			if ( !this.attack.damage ) this.attack.damage = this.attack.dmg;
		}

	}

	/**
	 * Tests whether item fills unlock requirement.
	 * @returns {boolean}
	 */
	fillsRequire(g){
		return g.state.findInstance(this.id) != null;
	}

	/**
	 *
	 */
	instantiate(){
		if ( this.type === ARMOR || this.type === WEAPON || this.type === WEARABLE ) return new Wearable( this.template );
		else return new Item(this.template);
	}

}