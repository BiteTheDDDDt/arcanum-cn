import SpawnGroup from "./spawngroup";
import Game from "../game";


/**
 * Create Npc from string or SpawnInfo object.
 * @param {*} e
 * @param {number} [pct=1]
 */
export const MakeNpc = ( e, pct=1 ) => {

	if ( typeof e === 'string' ) {

		e = Game.getData(e);
		if ( e ) return Game.itemGen.npc(e);

	}
	if ( !e ) return null;

	// generate enemy from parameters.
	e = Game.itemGen.randEnemy( e, null, pct );
	if ( !e) {console.warn( 'Missing Enemy: ') }

	return e;

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
	 * @property {object} info - spawnInfo object. describes spawning information.
	 * e.g. catacrytps.
	 */
	get info(){
		return this._info;
	}
	set info(v) { this._info=v;}

	/**
	 * @private
	 * @property {number} weightTot
	 */
	get weightTot(){ return this._weightTot; }
	set weightTot(v) { this._weightTot = v}

	constructor(vars){

		if ( Array.isArray(vars) ) {

			this.initGroups(vars);

		} else if ( typeof vars === 'object' ) {

			this.info = vars;

		}

	}

	/**
	 * Get a random spawn group.
	 * @note faster would be sorted groups and binary search.
	 * @returns {SpawnGroup}
	 */
	random() {

		if ( this.groups ) {
			return this.randGroup();
		} else {
			return this.info;
		}

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