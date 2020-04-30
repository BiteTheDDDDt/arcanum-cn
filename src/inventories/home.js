import GData from "../items/gdata";

export class Home extends GData {

	/**
	 * @property {Inventory} furniture
	 */
	get furniture(){ return this._furniture; }
	set furniture(v){ this._furniture =v;}

	/**
	 * @property {Inventory} minions
	 */
	get minions(){ return this._minions; }
	set minions(v){ this._minions =v;}

	/**
	 * @property {string[]} biomes - biomes composing the home.
	 */
	get biomes(){ return this._biomes;
	}
	set biomes(v){ this._biomes= typeof v ==='string' ? v.split(',') : v; }

	/**
	 *
	 * @param {*} vars
	 */
	constructor(vars=null ) {

		super(vars);

	}

}