import RValue from "./rvalue";

/**
 * Wraps a function in an object so modifiers can be applied.
 */
export default class FValue extends RValue {

	/**
	 * @property {function} fn - function that serves as the base value.
	 */
	get fn(){return this._fn;}
	set fn(v) { this._fn=v;}

	constructor(){
	}

}