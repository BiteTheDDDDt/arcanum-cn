import RValue from "./rvalue";

const AT_SYM = '?';
const AtRegEx = /^([0-9.]+)?\?([0-9.]+)$/;

/**
 * Value counted after source reaches 'at' point.
 */
export default class AtVal extends RValue {

	toJSON(){ return this.at + AT_SYM + this.value; }

	/**
	 * @property {number} at = source value at which RValue counts.
	 */
	get at(){ return this._at; }
	set at(v) { this._at = v}

	get value(){ return this.source && this.source.valueOf() > this.at ? this.valueOf() : 0; }

	constructor( vars, path, source=null ){

		super( 0, path );

		this.source = source;

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

	}

	getApply(){
		return this.source && this.source.valueOf() >= this.at ? this.valueOf() : 0;
	}

}