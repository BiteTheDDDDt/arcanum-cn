import Resource from "./resource";
import Stat from "../values/stat";

/**
 * A Zero-sum resource starts filled at its maximum value.
 * When the resource is expended, it cannot be renewed
 * except by removing the items which used the resource, or
 * further increasing the maximum resource value.
 *
 * Contrast with normal resources like gold, hp, which
 * can be constantly replenished.
 */
export default class ZeroSum extends Resource {

	toJSON(){

		let v = super.toJSON();
		v.value = undefined;
		v.used = this._used;

		return v;

	}

	valueOf() { return this.value; }

	/**
	 * Adding value => more space left.
	 * Removing value => increasing space used.
	 */
	set value(v){

		if ( this.max !== null && this.max !== undefined ) {

			this._used = this.max.value - v;
			super.value = v;

		}
		//console.log( 'setval: ' + (super.value === this._value) );

	}
	get value(){

		//console.log( 'getval: ' + (super.value === this._value) );

		return this.max.value - this._used;
	}

	get used() { return this._used; }
	set used(v) {
		this._used = v; }

	/**
	 * @property {number} unused - amount of resource still available.
	 */
	get unused() { return this.max.value - this._value; }

	constructor( vars ){

		super(vars);

		this._used = this._used || ( this.max.value - super.value ) || 0;

	}

}