import Stat from "./rvals/stat";

/**
 * @class
 * Combines Stat with a max value.
 */
export default class MaxStat {

	toJSON(){

		let v = this._value.toJSON();
		let m = this.max.toJSON();

		if ( v === m ) return v;

		return {
			v:this._value,
			max:this.max
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

		if ( this._value ) {
			this._value.set(v);
		} else {
			this.v = v;
		}

	}

	set v(v){
		this._value = new Stat(v,this.path +'.value');
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
	amount(v) {

		this._value.base += v;
		if ( this._value.value > this.max.value ) this._value.base = this.max.value;

	}

	/**
	 * @returns {boolean} true if stat is maxed.
	 */
	maxed(){ return this._value >= this.max; }

	/**
	 *
	 * @param {object|number} vars
	 * @param {boolean} empty - whether to init empty by default.
	 * ignored if vars defines both a max and value.
	 */
	constructor(vars=null, empty=false ){


		if ( vars && typeof vars === 'object') {

			if ( vars.isRVal ) {

				this.max = vars.value;
				this.v = empty ? 0 : this.max.value;

			} else {

				if ( vars.max ) this.max = vars.max;
				else if ( vars.v) this.max = vars.v;
				else this.max = 0;

				if ( vars.v ) this.v = vars.v;
				else this.v = empty || !vars.max ? 0 : vars.max;

			}

		} else if ( typeof vars === 'number' ) {

			this.max = vars;
			this.v = empty ? 0 : vars;

		} else {

			this.max = 0;
			this.v = 0;

		}

	}

}