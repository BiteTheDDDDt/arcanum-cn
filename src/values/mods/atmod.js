import Mod from "./mod";

const AT_SYM = '?';
const AtRegEx = /^([<>]=?)?(-?[0-9.]+)?\?(-?[0-9.]+)$/;

const EQ = 1;
const GT = 2;
const LT = 4;
const GTE = GT + EQ;
const LTE = LT + EQ;

const ParseOp = ( s ) => {

	if ( s === '=' ) return EQ;
	else if ( s === '<') return LT;
	else if ( s === '<=') return LTE;
	else if ( s === '>') return GT;

	return GTE;

}

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
	 * @property {number} op - comparison operator to use when testing 'at' value.
	 */
	get op(){return this._op;}
	set op(v){this._op = v}

	/**
	 * @property {number} count - apply once max.
	 */
	get count(){

		if (!this.source ) return 0;

		switch ( this.op ) {

			case GTE:
				if ( this.source.value >= this.at ) return 1;
				break;
			case GT:
				if ( this.source.value > this.at ) return 1;
				break;
			case LTE:
				if ( this.source.value <= this.at ) return 1;
				break;
			case LT:
				if ( this.source.value < this.at ) return 1;
				break;
			case EQ:
				if ( this.source.value == this.at ) return 1;
				break;

		}

		return 0;
	}

	toString(){ return this.value  + ' (once)'; }

	constructor(vars, id, source ) {

		super( 0, id, source );

		if ( typeof vars === 'string') {

			let res = AtRegEx.exec( vars );
			if ( res ) {

				this.op = ParseOp( res[1] );

				this.at = Number(res[2]) || 1;
				this.value = Number(res[3]) || 0;

			}


		} else {
			this.op = GTE;
			this.value = Number(vars) || 0;
			console.log('bad AtMod: ' + vars );
		}

		if ( this.at === null || this.at === undefined ) this.at = 1;

	}

	/**
	 *
	 * @param {GameState} gs
	 * @param {*} targ
	 */
	getApply(gs, targ) {
		//if ( this.source && this.source.id === 'breath') console.log('breathe count: ' + this.count + '  value: ' + this.value );
		return this.count ? this.value : 0;
	}


}