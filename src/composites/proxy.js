import { assign } from 'objecty';

/**
 * @class Proxy - proxies an item to add functionality/different behavior.
 */
export default class Proxy {

	/**
	 * @property {string} id - maybe a bad idea.
	 */
	get id() { return 'prox_' + ( this.item ? this.item.id : '' ) + '_' +
		(this.target ? this.target.id : ''); }

	/**
	 * @property {string} name
	 */
	get name() { return this.item ? this.item.name : ''; }
	set name(v){}

	get instanced(){return true;}

	set count(v){}

	hasTag(t) { return this.item && this.item.hasTag(t); }
	hasTags(t) { return this.item && this.items.hasTag(t); }

	get buy() { return this.item ? this.item.buy : null; }
	get cost() { return this.item ? this.item.cost : null; }
	get run() { return this.item ? this.item.run : null; }
	get effect() { return this.item ? this.item.effect : null; }

	get level(){return this.item ? this.item.level: 0;}

	get length () {return this.item ? this.item.length : null }
	get perpetual() { return this._item ? this._item.perpetual : false }

	/**
	 * @property {Item} item - item being run.
	 */
	get item() { return this._item; }
	set item(v) { this._item = v; }

	get repeat() { return (this._item && this._item.repeat) || false; }

	get owned() { return this._item ? this.item.owned : false; }
	set owned(v) { if ( this._item ) this._item.owned = v; }

	get running() { return this.item ? this.item.running:false;}
	set running(v) {
		if ( this.item) this.item.running=v;
	}

	isProxy() { return true; }

	maxed() { return !this.item || this.item.maxed(); }
	canUse( g ) { return this._item && this._item.canUse( g ) }
	canRun( g ) { return this._item && this._item.canRun( g ) }

	constructor( vars=null ){

		if (vars) assign( this, vars );

	}

	amount( amt ) {

		if ( this._item ) this._item.amount( amt );

	}

	revive( gs ) {

		if ( typeof this._item === 'string') this._item = gs.findData(this._item);

	}

}