import Mod from "./mod";

const AT_SYM = '?';
const AtRegEx = /^([0-9.]+)?\?([0-9.]+)$/;

/**
 *
 * @param {string} v
 * @returns {boolean}
 */
export const IsAtMod = (v)=>{ return AtRegEx.test(v); }

/**
 * Apply modifier only once, or not at all.
 */
export default class AtMod extends Mod {

	toJSON(){ return this.at + AT_SYM + this.value; }

	/**
	 * @property {number} at = source value at which mod value will be applied.
	 */
	get at(){ return this._at; }
	set at(v) { this._at = v}

	/**
	 * @property {number} count - apply once max.
	 */
	get count(){
		return (this.source && this.source.value > this.at) ? 1 : 0;
	}

	toString(){ return this.value  + ' (once)'; }

	constructor(vars, id, source ) {

		super( 0, id, source );

		if ( typeof vars === 'string') {

			let res = AtRegEx.exec( vars );
			if ( res ) {

				this.at = Number(res[1]) || 1;
				this.value = Number(res[2]) || 0;

			}


		} else {
			this.value = Number(vars) || 0;
			console.log('bad AtMod: ' + vars );
		}

		if ( this.at === null || this.at === undefined ) this.at = 1;

		//console.log( id + ': NEW AT MOD: ' + this.at + ' ? ' + this.value );

	}

	/**
	 *
	 * @param {*} gs
	 * @param {*} targ
	 */
	getApply(gs, targ) {
		return this.source && ( this.source.value >= this.at ) ? this.value : 0;
	}


}