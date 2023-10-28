import GData from "./gdata";
import Attack from '../chars/attack';
import { ParseTarget } from "../values/combatVars";

const defaults = {

	level:1,
	repeat:true,
	stack:true

};

/**
 * This is actually only the prototype for a potion.
 * Individual potions are instanced from this data.
 */
export default class Potion extends GData {

	get isRecipe() {return true; }

	constructor(vars=null ) {

		super(vars, defaults );

		if ( this.use.attack != null ) {
			var a;
			if ( !(this.use.attack  instanceof Attack)) a = new Attack(this.use.attack );
			this.use.attack = a;
		};
		if (this.use.action != null) {
			if(this.use.action.targets){
				this.use.action.targetstring = this.use.action.targets;
				this.use.action.targets = ParseTarget(this.use.action.targets);
			}
		};
		this.require = this.require||this.unlockTest;

	}

	/**
	 * Potions have this, but do nothing with it.
	 * @param {Context} g
	 */
	onUse( g ) {


	}


}
