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
			v:v,
			max:m
		};

	}

	get base() {
		return this._value.base;
	}
	set base(v) {

		if ( v && typeof v === 'object') {
			this._value.base = v.base || v.value;
		} else this._value.base = v;
	}

	get value(){ return this._value.value; }
	set value(v) {

		if ( v > this._max.value ) v = this._max.value;

		if ( v instanceof Stat ) this._value = v;
		else if ( this._value === undefined || typeof v === 'object' ) this._value = new Stat(v,'value');
		else this._value.base =v;

	}

	get max(){ return this._max; }
	set max(v){
		this._max = v instanceof Stat ? v : new Stat(v, this.path + '.max', true );
	}

	valueOf(){ return this._value.value; }


	/**
	 *
	 * @param {number} v
	 */
	set(v) {

		if ( v > this.max.value ) v = this.max.value;
		this._value.set(v);
	}

	/**
	 *
	 * @param {number} v
	 */
	add(v) {

		this._value.base += v;
		if ( this._value.value > this.max.value ) this._value.base = this.max.value;

	}

	/**
	 *
	 * @param {object|number} vars
	 */
	constructor(vars=null){

		if ( vars ) {

			if ( typeof vars === 'object') {

				if ( vars.max ) this.max = vars.max;
				else if ( vars.v) this.max = vars.v;
				else this.max = 0;

				if ( vars.v ) this.value = vars.v;
				else if ( vars.max ) this.value = vars.max;
				else this.value = 0;

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