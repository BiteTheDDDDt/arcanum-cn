import GData from "../items/gdata";
import { mergeClass } from "../items/base";
import Instance from "../items/instance";
import Inventory from "./inventory";

export class Home extends GData {

	toJSON(){

		let data = super.toJSON() || {};

		data.furniture = this.furniture.count>0 ? this.furniture : undefined;
		data.items = this.items.count>0 ? this.items : undefined;
		data.minions = this.minions.count>0 ? this.minions : undefined

		return data;

	}

	/**
	 * @property {Inventory} furniture
	 */
	get furniture(){ return this._furniture; }
	set furniture(v){ this._furniture = new Inventory( v ); }

	get items(){ return this._items; }
	set items(v){ this._items = new Inventory(v);}

	/**
	 * @property {Inventory} minions
	 */
	get minions(){ return this._minions; }
	set minions(v){ this._minions = new Inventory( v );}

	/**
	 * @property {string[]} biomes - biomes composing the home.
	 */
	get biomes(){ return this._biomes; }
	set biomes(v){ this._biomes= typeof v ==='string' ? v.split(',') : v; }

	/**
	 *
	 * @param {*} vars
	 */
	constructor(vars=null ) {

		super(vars);

	}

	revive(gs){

		this.furniture.revive( gs );
		this.minions.revive( gs );

	}

}

mergeClass( Home, Instance )