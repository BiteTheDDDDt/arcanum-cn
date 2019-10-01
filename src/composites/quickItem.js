/**
 * Single Item in quickslot bar.
 */
export default class QuickItem {

	get item() { return this._item; }
	set item(v) { this._item = v; }


	constructor(vars=null ) {

		if ( vars ) Object.assign( this, vars );

	}

	revive(gs) {

		if ( this._item ) this._item = gs.findData( this._item, true );

	}

}