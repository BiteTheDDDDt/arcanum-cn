import RValue from "./rvalue";

/**
 * Value applied only after source reaches 'at' point.
 */
export default class AtVal extends RValue {

	/**
	 * @property {number} at = source value at which RValue counts.
	 */
	get at(){ return this._at; }
	set at(v) { this._at = v}

	get value(){ return this.source && this.source.value > this.at ? this.value : 0; }

	constructor( vars, path, at=1 ){

		super( vars, path );

		this.at = at;

	}

	getApply(){
		return this.source && this.source.value >= this.at ? this.value : 0;
	}

}