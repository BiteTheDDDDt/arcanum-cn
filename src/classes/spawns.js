import SpawnGroup from "./spawngroup";
import { SpawnParams } from "./spawnparams";


/**
 * Parse Dungeon/Locale spawning information.
 * @param {object|Array} spawnData
 */
export const ParseSpawns = ( spawnData ) => {

	if ( typeof spawnData === 'object') {
		if ( Array.isArray(spawnData) ) return new Spawns( spawnData );
		return new SpawnParams( spawnData );
	}

}

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

	/**
	 *
	 * @param {Array} arr
	 */
	constructor( arr ){

		this.initGroups(arr);

	}

	/**
	 * Get a random spawn group.
	 * @note faster would be sorted groups and binary search.
	 * @param {number} [pct=0] - 1-base percent. progress through dungeon.
	 * @returns {Npc[]|null}
	 */
	random( pct=0 ) {

		let grp = this.randGroup();
		if ( grp === null ) return null;

		return grp.instantiate(pct);

	}

	/**
	 * Get random group from groups list.
	 * @returns {SpawnGroup|null}
	 */
	randGroup(){

		let p = Math.random()*this.weightTot;
		let tot = 0;

		let len = this.groups.length;
		for( let i =0; i < len; i++ ) {

			tot += this.groups[i].w;
			if ( p <= tot ) return this.groups[i];

		}

		// shouldn't happen. weight total should account for all groups.
		return len > 0 ? this.groups[0] : null;

	}

	/**
	 *
	 * @param { Array } list
	 */
	initGroups( list ){

		var tot = 0;

		for( let i = list.length-1; i>= 0; i-- ) {

			var g = list[i];

			if ( !(g instanceof SpawnGroup)) g = list[i] = new SpawnGroup(g);

			tot += g.w;


		}

		this.weightTot = tot;
		this.groups = list;
	}

}