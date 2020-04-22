/**
 * Object describing the parameters of a random spawn.
 */
export class SpawnRule {

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

		this.level = vars.level;
		this.range = vars.range;

	}

}