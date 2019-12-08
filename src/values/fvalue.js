import RValue from "./rvalue";
import Stat from "./stat";

/**
 * Wraps a function in an object so modifiers can be applied.
 */
export default class FValue extends Stat {

	/**
	 * @property {function} fn - function that serves as the base value.
	 */
	get fn(){return this._fn;}
	set fn(v) { this._fn=v;}

	get value(){}
	set value(v){}

	get type() { }
	constructor(){
	}

}