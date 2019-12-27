import GData from "./gdata";
import Game from '../game';
import { ENCOUNTER } from "../values/consts";

/**
 * Sublocation of a Locale
 */
export default class Encounter extends GData {

	get isRecipe() {return true; }

	get exp() { return this._exp;}
	set exp(v) { this._exp = v;}

	/**
	 *
	 */
	get length() { return this._length; }
	set length(v) { this._length = v;}

	toJSON() {
		if ( this.value > 0 ) return { value:this.value };
		else return undefined;
	}

	get done() { return this._exp >= this.length; }

	constructor( vars=null, save=null ) {

		super(vars );

		if ( save ) Object.assign( this, save );

		this.type = ENCOUNTER;

		this._exp = this._exp || 0;

		if ( !this.level ) this.level = 1;
		if ( !this.length ) this.length = 5*this.level;

	}

	revive(gs) {
	}

	update( dt ){

		this._exp += dt;
		if ( this.effect ) {
			Game.applyVars( this.effect, dt );
		}

	}

	maxed() { return false; }

}