import GData from "./gdata";

/**
 * Upgrade locked to unique character.
 */
export default class CharUpgrade extends GData {

	toJSON(){

		let p = super.toJSON();
		if ( this.char ) {
			if ( !p ) p = {};
			p.char = this.char;
		}
		return p;

	}

	/**
	 * @property {boolean} charlock - indicates upgrade locked to a single character.
	 */
	get charlock(){ return this._charlock }
	set charlock(v){
		this._charlock=v;
	}

	/**
	 * @property {string} char - id of character bound to upgrade.
	 */
	get char(){ return this._char }
	set char(v){ this._char = v;}

	constructor(vars=null){

		super(vars);

	}

	/**
	 *
	 * @param {Game} g
	 * @param {number} amt
	 * @returns {boolean}
	 */
	changed( g, amt ) {

		if ( this.charlock && amt > 0 ) {
			this.char = g.state.player.hid;
		}
		return super.changed( g, amt );

	}

	/**
	 *
	 * @param {GameState} gs
	 */
	revive( gs ) {

		let p = gs.player;
		if ( this.char && p.hid !== this.char ) {
			this.disabled = true;
			console.log( this.id + ' DISABLED FOR ' + p.hid );
		}

	}

}