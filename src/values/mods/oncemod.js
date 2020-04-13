import Mod from "./mod";

const ONCE_SYM = '?';
const OnceRegEx = /^([0-9.]+)\?$/;

/**
 *
 * @param {string} v
 * @returns {boolean}
 */
export const IsOnceMod = (v)=>{
	return OnceRegEx.test(v);
}

/**
 * Apply modifier only once, or not at all.
 */
export default class OnceMod extends Mod {

	toJSON(){ return this.value + ONCE_SYM; }

	/**
	 * @property {number} count - apply once max.
	 */
	get count(){
		return (this.source && this.source.value > 0) ? 1 : 0;
	}

	toString(){ return this.value + ONCE_SYM; }

	constructor(vars, id, source ) {

		super( 0, id, source );

		if ( typeof vars === 'number') {

			this.value = vars;

		} else if ( typeof vars === 'string') {


			let res = OnceRegEx.match( vars );
			if ( res && res.length > 0 ) this.value = res[1];
			else this.value = 0;


		} else {
			console.log('bad OnceMod: ' + vars );
			this.value = Number(vars) || 0;
		}

	}

	/**
	 *
	 * @param {*} gs
	 * @param {*} targ
	 */
	getApply(gs, targ) {
		return this.source && ( this.source.value > 0) ? this.value : 0;
	}


}