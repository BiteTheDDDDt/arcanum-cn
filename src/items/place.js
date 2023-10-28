export default class Place extends GData {

	/**
	 * @property {Coord} loc - location coordinate.
	 */
	get loc(){return this._loc}
	set loc(v) {this._loc = v;}

	/**
	 * @property {string[]} biomes - biomes applicable to place.
	 */
	get biomes(){ return this._biomes; }
	set biomes(v){this._biomes=v;}

	/**
	 * @property {string[]} homes - homes available.
	 */
	get homes() { return this._homes;}
	set homes(v) {this._homes = v;}

	/**
	 * @property {string[]} locales - locales at place.
	 */
	get locales() { return this._locales;}
	set locales(v) {this._locales = v;}

	constructor( vars=null ){

		super(vars);

	}

	/**
	 *
	 * @param {GameState} gs
	 */
	revive( gs ){
	}

}