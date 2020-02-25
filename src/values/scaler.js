import RValue from "./rvalue";

/**
 * @class {Scaler} Scaler -NOT a Scalar.
 * Scales input values before being added to raw RValues.
 * @note Scaler can only function properly if changes in value
 * are added with add()
 */
export default class Scaler extends RValue {

	get value(){return super.value;}
	set value(v){
		/** super.value +  necessary for Edge. :/ */
		super.value = super.value + (v - super.value)*(1+this.scale.pctTot);
	}

	/**
	 * @property {Stat} scale - RValue percent that scales
	 * positive numbers before adding to base value.
	 */
	get scale(){return this._scale; }
	set scale(v){this._scale =v}

	constructor( vars=0, path, scale=null ){

		super( Number(vars), path );

		this.scale = scale || new RValue( 0, this.id + '.scale' );

	}

	/**
	 * Set value with no scaling.
	 * @param {number} v
	 */
	set(v){
		super.value = typeof v === 'number' ? v : v.valueOf();
	}

	/**
	 * add value without delta scaling.
	 * @param {*} v
	 */
	addUnscaled(v) {
		super.value += v;
	}

	apply(v) {
		this.value = this.value + v;
	}

}