import { addValues } from "../util/dataUtil";
import Base, { mergeClass } from "../items/base";

/**
 * Currently used to make custom user spells.
 */
export default class Group {

	toJSON(){

		return {

			id:this.id,
			items:this.items.map(v=>v.id),
			name:this.name,
			type:this.type,
			val:this.value,
			custom:this.custom

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

	/**
	 * @property {string} type - type might need to be a standard type
	 * in order to mimic a default item in item lists.
	 * 'custom' can distinguish as group.
	 */
	get type() { return this._type; }
	set type(v) { this._type = v; }

	/**
	 * @property {string} custom - custom type.
	 */
	get custom() { return 'group'; }
	set custom(v){}

	get name() {return this._name; }
	set name(v) { this._name = v; }

	get level() { return this._level; }
	set level(v) { this._level = v; }

	/**
	 * Cost to use.
	 */
	get cost() { return this._cost; }
	set cost(v) { this._cost = v;}

	/*get instance() { return true; }
	set instance(v){}*/

	get locked() { return false;}
	get owned(){return true;}
	maxed(){ return false; }

	constructor(vars=null ) {

		if( vars) Object.assign( this, vars );

		if (!this.items ) this.items = null;

	}

	computeCost() {

		if ( !this.items || this.items.length === 0) {
			this.cost = null;
			return;
		}
		let cost = {};

		for( let i = this.items.length-1; i >= 0; i-- ) {

			var it = this.items[i];
			if (!it) this.items.splice( i, 1);
			else if ( it.cost ) addValues( cost, it.cost );


		}

		this.effect = this.items.map( v=> typeof v === 'string' ? v : v.name );
		this.cost = cost;
		//logObj( this.cost, 'COST');

	}

	canUse( g ) { return g.canPay( this.cost ); }

	onUse(g) {

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

mergeClass( Group, Base );