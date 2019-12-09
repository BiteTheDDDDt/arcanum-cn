import RValue from "./rvalue";
import Stat from "./stat";
import { TYP_FUNC } from "./consts";

/**
 * Wraps a function in an object so modifiers can be applied.
 */
export default class FValue extends RValue {

	toJSON(){
		return undefined;
	}

	/**
	 * @property {function} fn - function that serves as the base value.
	 */
	get fn(){return this._fn;}
	set fn(v) { this._fn=v;}

	get type() { return TYP_FUNC }

	toString(){
		return this._src;
	}

	constructor( params, src, path ){

		super( 0, path );
		this._src = src;

		this._fn = new Function( params, 'return ' + src );

	}

	apply( params ) {
		return this._fn.apply( null, params );
	}

}