import Game from "../game";

/**
 * @class SpawnParams
 * Object describing the parameters of a random spawn.
 */
export class SpawnParams {

	/**
	 * @property {Range} level - level range of the spawn from start of Dungeon to end.
	 */
	get level() { return this._level}
	set level(v) {this._level =v}

	/**
	 * @property {number} range - individual level variation in any given spawn.
	 */
	get range() {return this._range;}
	set range(v) {this._range = v;}

	/**
	 *
	 * @param {object} vars
	 * @param {Range} vars.level
	 * @param {number} vars.range
	 */
	constructor( vars ){

		if ( vars ) {
			this.level = vars.level;
			this.range = vars.range;
		} else console.warn('NO SPAWN PARAMS: ' + vars );

	}

	/**
	 * Allows potential recursive stacking of spawn groups.
	 * @param {} pct
	 * @returns {Npc|null}
	 */
	instantiate(pct=0) {
		return Game.itemGen.randEnemy( this, null, pct );
	}

	/**
	 *
	 * @param {number} pct - 1 based percent. progress through dungeon.
	 * @returns {Npc|null}
	 */
	random( pct=0 ) {

		// generate enemy from parameters.
		return [ Game.itemGen.randEnemy( this, null, pct ) ];

	}

}