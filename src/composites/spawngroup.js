import Game from "../game";

export default class SpawnGroup {

	get weight(){
		return this._weight;
	}
	set weight(v){
		this._weight=v;
	}

	get spawns(){return this._spawns;}
	set spawns(v){
		if ( typeof v === 'string') this._spawns = v.split(',');
		else this._spawns = v;
	}

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
	 */
	instantiate( pct ){

		var a = [];

		for ( let i = 0; i < this.spawns.length; i++ ) {

			var e = this.makeNpc( this.spawns[i], pct );
			if ( e ) a.push(e);

		}

		return a;

	}

		/**
	 * Retrieve enemy template data from enemy string or build object.
	 */
	makeNpc( e, pct=1 ) {

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



}