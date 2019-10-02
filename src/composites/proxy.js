/**
 * @class Proxy - proxies an item to add functionality/different behavior.
 */
export default class Proxy {

	/**
	 * @property {string} id - maybe a bad idea.
	 */
	get id() { return this.item.id; }

	/**
	 * @property {string} name
	 */
	get name() { return this.item ? this.item.name : ''; }
	set name(v){}

	set count(v){}

	hasTag(t) { return this.item && this.item.hasTag(t); }
	hasTags(t) { return this.item && this.items.hasTag(t); }

	get buy() { return this.item ? this.item.buy : null; }
	get cost() { return this.item ? this.item.cost : null; }
	get run() { return this.item ? this.item.run : null; }
	get effect() { return this.item ? this.item.effect : null; }

	/**
	 * @property {Item} item - item being run.
	 */
	get item() { return this._item; }
	set item(v) { this._item = v; }

	get owned() { return this._item ? this.item.owned : false; }
	set owned(v) { if ( this._item ) this._item.owned = v; }

	get running() { return this.item ? this.item.running:false;}
	set running(v) {
		if ( this.item) this.item.running=v;
	}

	maxed() { return this.item ? this.item.maxed() : true; }
	canUse( g ) { return this.item ? this.item.canUse( g ) : false; }
	canRun( g ) { return this.item ? this.item.canRun( g ) : false; }

	constructor( vars=null ){

		if (vars) Object.assign( this, vars );

	}

	amount( g, amt ) {

		if ( this._item ) this._item.amount(g, amt );

	}

	revive( gs ) {

		if ( typeof this._item === 'string') this._item = gs.findData(this._item);

	}

}