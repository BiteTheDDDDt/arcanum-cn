export default class SpawnGroup {

	get weight(){
		return this._weight;
	}
	set weight(v){
		this._weight=v;
	}

	get spawns(){return this._spawns;}
	set spawns(v){ this._spawns = v; }

	constructor( vars ){

		if ( typeof vars === 'string'){

			this.spawns = vars.split(',');

		} else if ( Array.isArray(vars) ) {

			this.spawns = vars;

		} else if ( typeof vars === 'object') {

			this.spawns = vars.spawns;
			this.weight = vars.weight;

		}

		if ( !this.weight ) this.weight = 1;

	}

	/**
	 * Create actual npcs from group parameters.
	 */
	instantiate(){
	}

}