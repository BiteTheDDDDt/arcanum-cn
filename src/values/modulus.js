import RValue from "./rvalue";

const ModulusRegex = /^\%(\d+)$/ig;

export const IsModulus = (v)=>{

}

/**
 * Applies result only on value%modulus === 0
 */
export default class Modulus extends RValue {

	toJSON(){ return '%' + this.value; }

	constructor(vars, id ) {

		super( 0, id );

	}

	/**
	 *
	 * @param {*} gs
	 * @param {*} targ
	 */
	getEffect(gs, targ) {
		return (targ.value % this.value ) === 0 ? 1 : 0;
	}


}