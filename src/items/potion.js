import GData from "./gdata";

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
	
	toJSON() {

		let data = super.toJSON();

		data.id = this.id;

		return data ? data : undefined;

	}

	get isRecipe() {return true; }

	constructor(vars=null ) {

		super(vars, defaults );

		this.require = this.require||this.unlockTest;

	}

}
