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

		if ( typeof vars === 'number') this.value = vars;
		else if ( typeof vars === 'string') {

			if ( vars.length >= 0 && vars[0] === '%'){
				this.value = Number(vars.slice(1));
			} else {
				console.warn('Invalid modulus: ' + vars );
				this.value = 0;
			}

		} else {
			this.value = Number(vars);
		}

	}

	/**
	 *
	 * @param {*} gs
	 * @param {*} targ
	 */
	getApply(gs, targ) {
		return (this.owner && ( this.owner.value % this.value  === 0 ) ) ? 1 : 0;
	}


}