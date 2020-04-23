import { CreateNpc } from "../items/monster";

/**
 * Create Npc from string or SpawnInfo object.
 * @param {string} e
 * @param {number} [pct=1]
 * @returns {Npc|null}
 */
const MakeNpc = ( e ) => {

	e = Game.getData(e);
	if ( Game.state.hasUnique(e)) return null;

	if ( e ) {
		if ( !( e.locked || e.disabled || e.locks>0 ) ) return CreateNpc(e, Game);
	}

	return null;

}

export default class SpawnGroup {

	/**
	 * @property {number} weight - arbitrary weight of this spawn group (any number)
	 */
	get weight(){ return this._weight; }
	set weight(v){ this._weight=v; }

	/**
	 * @property {string[]} spawns
	 */
	get spawns(){return this._spawns;}
	set spawns(v){
		if ( typeof v === 'string') this._spawns = v.split(',');
		else this._spawns = v;
	}

	/**
	 *
	 * @param {string|string[]|object} vars
	 * @param {?number} vars.weight
	 * @param {?string[]} vars.spawns
	 */
	constructor( vars ){

		if ( typeof vars === 'string' || Array.isArray(vars)){

			this.spawns = vars;

		} else if ( typeof vars === 'object') {

			this.spawns = vars.spawns;
			this.weight = vars.weight;

		}

		if ( !this.weight ) this.weight = 1;

	}

	/**
	 * Create npcs from group parameters.
	 * @note this could probably be done before raid call.
	 * @param {number} pct - percent of the way through dungeon.
	 * @returns {Npc[]} instantiated npcs from group.
	 */
	instantiate( pct=0 ){

		var a = [];

		for ( let i = 0; i < this.spawns.length; i++ ) {

			var e = MakeNpc( this.spawns[i], pct );
			if ( e ) a.push(e);

		}

		return a;

	}


}