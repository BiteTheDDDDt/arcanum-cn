import GData from "./gdata";
import Game from '../game';
import Events, { ENC_DONE } from "../events";

const defaults = {

	level:1,
	locked:false

};

export const ENCOUNTER = 'enc';

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
		if ( this.value > 0 ) return { value:this.value};
		else return undefined;
	}

	clone() {
		let e = new Encounter( this );
		e.exp = 0;
		return e;
	}

	get done() { return this._exp >= this.length; }

	constructor( vars=null ) {

		super(vars );

		this.type = ENCOUNTER;

		this._exp = this._exp || 0;

		this.level = this.level || 1;
		this.length = this.length || 5*this.level;

		/*for( let p in this.effect ) {
			console.log( p + ' -> ' + (typeof this.effect[p] ) + ': ' + this.effect[p] );
		}*/

	}

	revive(gs) {
	}

	update( dt ){

		this._exp += dt;
		if ( this.effect ) {
			Game.applyEffect( this.effect, dt );
		}

	}

	maxed() { return false; }

}