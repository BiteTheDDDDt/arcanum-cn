import GData from "./gdata";
import Game from '../game';
import { ENCOUNTER } from "../values/consts";

const defaults = {
	locked:false
}

/**
 * Sublocation of a Locale
 */
export default class Encounter extends GData {

	toJSON(){

		if ( this.exp != 0 ) {

			return {
				value:this.value,
				exp:this.exp
			}

		} else {

			return this.value > 0 ? { value:this.value } : undefined;
		}

	}

	/**
	 * @property {number} exp
	 */
	get exp() { return this._exp;}
	set exp(v) { this._exp = v;}

	/**
	 *
	 */
	get length() { return this._length; }
	set length(v) { this._length = v;}

	/**
	 * @property {boolean} done
	 */
	get done() { return this._exp >= this.length; }

	constructor( vars=null, save=null ) {

		super( vars, defaults );

		if ( save ) Object.assign( this, save );

		this.type = ENCOUNTER;

		this._exp = this._exp || 0;

		if ( !this.level ) this.level = 1;
		if ( !this.length ) this.length = 5*this.level;

	}

	update( dt ){

		this._exp += dt;
		if ( this.effect ) {
			Game.applyVars( this.effect, dt );
		}

	}

	/**
	 * @returns {false}
	 */
	maxed() { return false; }

}