import { mergeCosts, addValues } from "../util/dataUtil";
import { logObj } from "../util/util";

export default class Group {

	toJSON(){

		return {

			id:this.id,
			items:this.items.map(v=>v.id),
			name:this.name,
			type:this.type,
			instance:true,
			custom:true

		}
	}

	get id() { return this._id; }
	set id(v) { this._id = v;}

	get items() { return this._items; }
	set items(v) {

		var a = [];

		let level = 0;

		if ( v ) {

			for( let i = v.length-1; i >= 0; i-- ) {

				var it = v[i];
				if ( typeof it === 'object') level += it.level || 0;
				a[i] = it;

			}


		}

		this.level = level;

		this._items = a;
	}

	get subtype() { return this._subtype;}
	set subtype(v) { this._subtype = v;}

	get instance() { return true; }
	set instance(v){}

	get name() {return this._name; }
	set name(v) { this._name = v; }

	get level() { return this._level; }
	set level(v) { this._level = v; }

	/**
	 * Cost to use.
	 */
	get cost() { return this._cost; }
	set cost(v) { this._cost = v;}

	constructor(vars=null ) {

		if( vars) Object.assign( this, vars );

		if (!this.items ) this.items = null;

	}

	computeCost() {

		if ( this.items.length === 0) {
			this.cost = null;
			return;
		}
		let cost = {};

		for( let i = this.items.length-1; i >= 0; i-- ) {

			var it = this.items[i];
			if ( it.cost ) addValues( cost, it.cost );


		}

		this.cost = cost;
		logObj( this.cost, 'COST');

	}

	canUse( g ) {
		return g.canPay( this.cost );
	}

	onUse(g) {

		g.payCost( this.cost );

		for( let i = this.items.length-1; i>=0; i--) {

			this.items[i].onUse(g);

		}

	}

	add( it ) {

		this.items.push(it);

	}

	/**
	 *
	 * @param {Game} g
	 * @param {*} amt
	 */
	amount( g, amt ) {

		for( let i = this.items.length-1; i>= 0;i--) {
			this.items[i].amount( g, amt );
		}

	}

	exec() {

		for( let i = this.items.length-1; i>= 0;i--) {

			this.items[i].exec();

		}

	}

	/**
	 *
	 * @param {GameState} gs
	 */
	revive(gs){

		this.items = gs.toData(this.items);
		this.computeCost();

	}

}