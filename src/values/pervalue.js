import RValue from "./rvalue";
import Mod from "./mod";

const PER_SYM = '/';
const PerRegEx = /^(\d+)?\/(\d+)$/ig;

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
export default class PerValue extends Mod {

	toJSON(){ return PER_SYM + this.value; }

	/**
	 * @property {number} count - apply modulus mod once per modulus factor.
	 */
	get count(){
		return Math.floor(this.owner.value / this.value );
	}

	/**
	 * @property {number} per - value applied only once for every per unit
	 * of count.
	 */
	get per(){return this._per;}
	set per(v){this._per = v;}

	constructor(vars, id, owner ) {

		super( 0, id, owner );

		if ( typeof vars === 'number') this.value = vars;
		else if ( typeof vars === 'string') {

			let parts = vars.split( PER_SYM );

			if ( parts.length >= 2 ) {
				this.value = Number(parts[0]) || 1;
				this.per = Number(parts[1]) || 1;
			} else {
				console.warn('Invalid modulus: ' + vars );
				this.value = 0;
				this.per = 1;
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
		return ( this.count % this.per ) === 0 ? this.value : 0;
	}


}