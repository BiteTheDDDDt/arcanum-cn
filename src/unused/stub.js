/**
 * Stub to obviate preloading all items.
 * CURRENTLY UNUSED.
 */
export default class Stub {

	get id() { return this._id; }

	get need() { return this._need; }
	get require() { return this._require; }

	constructor(vars=null) {

		if ( vars ) Object.assign( this, vars );

	}

}