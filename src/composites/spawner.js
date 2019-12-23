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

			Object.assign( this, vars );

		}

	}

	/**
	 * Get a random spawn group.
	 * @note faster would be sorted groups and binary search.
	 * @returns {SpawnGroup}
	 */
	random() {

		if ( this._groups ) return this.randGroup();

	}

	/**
	 * Get random group from groups list.
	 */
	randGroup(){

		let p = Math.random()*this.weightTot;
		let tot = 0;

		let len = this.groups.length;
		for( let i =0; i < len; i++ ) {

			tot += this.groups[i].weight;
			if ( p <= tot ) return this.groups[i];

		}

		// shouldn't happen.
		return len > 0 ? this.groups[0] : null;

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