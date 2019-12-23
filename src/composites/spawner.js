import SpawnGroup from "./spawngroup";

/**
 * Describes possible spawns for a dungeon.
 */
export default class Spawns {

	/**
	 * @property {SpawnGroup[]} groups
	 */
	get groups(){return this._groups;}
	set groups(v){this._groups =v;}

	/**
	 * @private
	 * @property {number} weightTot
	 */
	get weightTot(){ return this._weightTot; }
	set weightTot(v) { this._weightTot = v}
	constructor(vars){

		if ( Array.isArray(vars) ) {

			this.initGroups(vars);

		} else if ( vars ) {


		}

	}

	/**
	 * Get a random spawn group.
	 */
	getRand() {
	}

	initGroups( list ){

		var tot = 0;

		for( let i = list.length-1; i>= 0; i-- ) {

			var g = list[i];

			if ( !(g instanceof SpawnGroup)) g = list[i] = new SpawnGroup(g);

			tot += g.weight;


		}

		this.weightTot = tot;
		this.groups = list;
	}

}