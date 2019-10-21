import Stat from "./stat";

/**
 * @class
 * Combines Stat with maximum value.
 */
export default class MaxStat {

	toJSON(){

		let v = this._value.toJSON();
		let m = this.max.toJSON();

		if ( v === m ) return v;

		return {
			val:v,
			max:m
		};

	}

	get base() { return this._value.base; }
	set base(v) { this._value.base = v; }

	get value(){ return this._value.value; }
	set value(v) {

		if ( v > this._max.value ) v = this._max.value;

		if ( this._value !== undefined ) this._value.base = v;
		else this._value = v instanceof Stat ? v : new Stat( v, 'value' );

	}

	get max(){ return this._max; }
	set max(v){
		this._max = v instanceof Stat ? v : new Stat(v, this.path + '.max', true );
	}

	valueOf(){ return this._value.value; }

	/**
	 *
	 * @param {object|number} vars
	 */
	constructor(vars=null){

		if ( vars ) {

			if ( typeof vars === 'object') {

				this.max = vars.max || vars.value || 0;
				this.value = vars.val || vars.max || 0;

			} else if ( typeof vars === 'number') {

				this.max = vars;
				this.value = vars;

			} else {

				console.warn( vars + ' invalid type: ' + (typeof vars) );
				this.value = 0;
				this.max = 0;
			}

		} else {

			this.value = 0;
			this.max = 0;
		}

	}

}