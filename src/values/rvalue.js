import Percent from "./percent";
import Range from "./range";

export const PercentTest = /^(\d+(?:\.?\d+)?)\%$/i
export const RangeTest = /^\-?\d+\.?\d*\~\-?\d+\.?\d*$/i;

export default class RValue {

	Parse(str){

		if ( PercentTest.test(str) ) return new Percent(str);
		else if ( RangeTest.test(str) ) return new Range(str);

		return new RValue( str );

	}

	get value() { return this._value; }
	set value(v) { this._value = v; }

	valueOf(){
		return ( typeof this._value === 'object') ? this._value.value : this._value;
	}

	constructor( vars=null ){

		if ( typeof vars === 'string') {

		}

	}

	applyMod( m ){
	}

}