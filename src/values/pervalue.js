import RValue from "./rvalue";

const PerRegEx = /^\/(\d+)$/ig;

/**
 *
 * @param {string} v
 * @returns {boolean}
 */
export const IsPerValue = (v)=>{
	return PerRegEx.test(v);
}

/**
 * Apply result only on value%modulus === 0
 */
export default class PerValue extends RValue {

	toJSON(){ return '/' + this.value; }

	/**
	 * @property {number} count - apply modulus mod once per modulus factor.
	 */
	get count(){
		return Math.floor(this.owner.value / this.value );
	}

	constructor(vars, id ) {

		super( 0, id );

		if ( typeof vars === 'number') this.value = vars;
		else if ( typeof vars === 'string') {

			if ( vars.length >= 0 && vars[0] === '/'){
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