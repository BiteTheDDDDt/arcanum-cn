import Action from "./action";

/**
 * Default dist per level function. Also currently used by dungeon.
 * @param {number} lvl
 */
export const getDist = (lvl)=> {
	return Math.ceil( 4.4*Math.exp( 0.32*lvl ) );
};

const distTest = ( g, self) => {
	return g.dist >= self.dist;
}

const levelTest = (g, self) => {
	return g.player.level >= (self.level-1);
}

export default class Locale extends Action {

	get encs() { return this._encs; }
	set encs(v) {

		// json data not true arrays.
		let a = [];

		for( let p in v) { a.push( v[p]); }

		this._encs = a;
	}

	constructor(vars=null) {

		super(vars);

		if ( this.level === null || this.level === undefined ) this.level = 1;

		this.type = 'locale';

		/**
		 * @property {number} progress
		 */
		this._exp = this._exp || 0;
		this._length = this._length || 100;

		// default require for dungeon is player-level.
		if ( !this.require ) this.require = levelTest;
		if ( !this.need ) this.need = distTest;

		this.dist = ( this.dist === undefined || this.dist === null ) ? getDist(this.level) : this.dist;

		if ( this._encs == null ) this._encs = [];

		//console.log(this.id + ' dist: ' + this.dist );

	}

	/**
	 * Get next/random encounter.
	 * @returns {string|Encounter|Object}
	 */
	getEnc() {
		return this._encs[ Math.floor( Math.random()*this._encs.length ) ];
	}

	/**
	 * Catch complete() to prevent default action. ugly.
	*/
	complete() {
	}

	lockReq() { return false;}

}