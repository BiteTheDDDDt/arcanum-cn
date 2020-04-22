import RValue from "./rvalue";

/**
 * RValue mirrors source value.
 */
export default class SrcVal extends RValue {

	/**
	 * @property {number} value
	 */
	get value(){ return this.source ? this.source.valueOf() : 0; }

	/**
	 * @returns {number}
	 */
	valueOf(){
		return this.source ? this.source.valueOf() : 0;
	}

	constructor( source=null, path ){

		super( 0, path );

		this.source = source;

	}

}