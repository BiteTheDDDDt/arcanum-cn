import Action from "./action";

/**
 * Default dist per level function.
 * @param {number} lvl
 */
export const getDist = (lvl)=> {
	return Math.ceil( 4.4*Math.exp( 0.32*lvl ) );
};

export default class Locale extends Action {

	get encs() { return this._encs; }
	set encs(v) {

		// json data not true arrays.
		let a = [];

		for( let p in v) { a.push( v[p]); }

		this._encs=a;
	}

	constructor(vars=null) {

		super(vars);

		this.level = this.level !== undefined ? this.level : 1;

		this.type = 'locale';

		/**
		 * @property {number} progress
		 */
		this._exp = this._exp || 0;
		this._length = this._length || 100;

		// default require for dungeon is player-level.
		this.require =  this.require || this.levelTest;

		this.dist = ( this.dist === undefined || this.dist === null ) ? getDist(this.level) : this.dist;
		//this.addRequire( 'dist', this.dist );

		if ( this._encs == null ) this._encs = [];

		//console.log(this.id + ' dist: ' + this.dist );

		if ( this.need == null ) this.need = this.distTest;

	}

	/**
	 * Get next enemy.
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
	distTest( g, self) {
		return g.dist >= self.dist;
	}

	levelTest(g, self) {
		return g.player.level >= (self.level-1);
	}
}