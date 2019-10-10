export const PercentTest = /^(\d+(?:\.?\d+)?)\%$/i
export const RangeTest = /^\-?\d+\.?\d*\~\-?\d+\.?\d*$/i;

export default class RValue {

	get value() { return this._value; }
	set value(v) { this._value = v; }

	constructor( vars=null ){

		if( vars ) {

		}

	}

	applyMod( m ){
	}

}