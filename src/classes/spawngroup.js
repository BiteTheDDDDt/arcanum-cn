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

		if ( this._w === 1 ) {
			return this.ids;
		} else {

			return {
				ids:this.ids,
				w:this._w
			};

		}

	}

	/**
	 * @property {number} w - arbitrary weight of this spawn group (any number)
	 */
	get w(){ return this._w; }
	set w(v){ this._w=v; }

	/**
	 * @property {string|string[]} ids
	 */
	get ids(){return this._ids;}
	set ids(v){
		if ( typeof v === 'string' && v.includes(',') ) this._ids = v.split(',');
		else this._ids = v;
	}

	/**
	 *
	 * @param {string|string[]|object} vars
	 * @param {?number} vars.weight
	 * @param {?number} vars.w
	 * @param {?string[]} vars.spawns
	 */
	constructor( vars ){

		if ( typeof vars === 'string' || Array.isArray(vars)){

			this.ids = vars;

		} else if ( typeof vars === 'object') {

			this.ids = vars.ids;
			this.w = vars.weight || vars.w;

		}

		if ( !this.w ) this.w = 1;

	}

	/**
	 * Create npcs from group parameters.
	 * @note this could probably be done before raid call.
	 * @param {number} pct - percent of the way through dungeon.
	 * @returns {Npc[]|Encounter} instantiated npcs from group.
	 */
	instantiate( pct=0 ){

		let e;

		if ( typeof this.ids === 'string') {

			//console.log('TRY SPAWN: '  + this.spawns );

			e = MakeSpawn( this.ids, pct );
			if ( e === null ) return null;
			else if ( e.type === ENCOUNTER ) return e;

			return [e];

		} else {

			let a = [];
			if(typeof this.ids !== "undefined"){
				for ( let i = 0; i < this.ids.length; i++ ) {

						e = MakeSpawn( this.ids[i], pct );
						if ( e ) a.push(e);
				}
			}
			

			return a.length > 0 ? a : null;

		}


	}


}