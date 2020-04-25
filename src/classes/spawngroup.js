import { CreateNpc } from "../items/monster";
import { ENCOUNTER } from "../values/consts";
import Game from "../game";

/**
 * Create Npc from string or SpawnInfo object.
 * @param {string} e
 * @param {number} [pct=1]
 * @returns {Encounter|Npc|null}
 */
const MakeSpawn = ( e ) => {

	e = Game.getData(e);
	//console.log('spawn: ' + e + '  unique? ' + Game.state.hasUnique(e) + '  type? ' + e.type );
	//console.log('spawn: ' + e + '  locked? ' + e.locked + '  disabled ' + e.disabled + ' locks: ' + e.locks  );

	if ( !e || Game.state.hasUnique(e) || ( e.locked || e.disabled || e.locks>0 )) return null;

	if ( e.type === ENCOUNTER ) return e;

	return CreateNpc(e, Game);

}

export default class SpawnGroup {

	toJSON(){

		if ( this._weight === 1 ) {
			return this.spawns;
		} else {

			return {
				spawns:this.spawns,
				weight:this._weight
			};

		}

	}

	/**
	 * @property {number} weight - arbitrary weight of this spawn group (any number)
	 */
	get weight(){ return this._weight; }
	set weight(v){ this._weight=v; }

	/**
	 * @property {string|string[]} spawns
	 */
	get spawns(){return this._spawns;}
	set spawns(v){
		if ( typeof v === 'string' && v.includes(',') ) this._spawns = v.split(',');
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
	 * @returns {Npc[]|Encounter} instantiated npcs from group.
	 */
	instantiate( pct=0 ){

		let e;

		if ( typeof this.spawns === 'string') {

			//console.log('TRY SPAWN: '  + this.spawns );

			e = MakeSpawn( this.spawns, pct );
			if ( e === null ) return null;
			else if ( e.type === ENCOUNTER ) return e;

			return [e];

		} else {

			let a = [];

			for ( let i = 0; i < this.spawns.length; i++ ) {

				e = MakeSpawn( this.spawns[i], pct );
				if ( e ) a.push(e);

			}

			return a.length > 0 ? a : null;

		}


	}


}