/**
 * Variables remaining from disabled items.
 */
export default class FlyWeight {

	get id() { return this._id; }

	get value(){return this._value; }

	get mod() { return this._mod; }
	get effect() { return this._effect; }

	constructor(vars=null) {

		if ( vars ) Object.assign( this, vars );

	}

}