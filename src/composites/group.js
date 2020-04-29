import Base, { mergeClass } from "../items/base";
import { assign } from 'objecty';
import { addValues } from "../util/dataUtil";

/**
 * Currently used to make custom user spells.
 * Groups multiple GData items into a single item.
 */
export default class Group {

	toJSON(){

		return {

			id:this.id,
			items:this.items.map(v=>v.id),
			name:this.name,
			type:this.type,
			val:this.value,
			custom:'group'

		}
	}

	get id() { return this._id; }
	set id(v) { this._id = v;}

	get name() {return this._name; }
	set name(v) { this._name = v; }

	/**
	 * @property {Array} items
	 */
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
	 * @property {number} level
	 */
	get level() { return this._level; }
	set level(v) { this._level = v; }

	/**
	 * Cost to use.
	 */
	get cost() { return this._cost; }
	set cost(v) { this._cost = v;}

	/*get instanced() { return true; }
	set instanced(v){}*/

	get locked() { return false;}
	get owned(){return true;}
	maxed(){ return false; }

	constructor(vars=null ) {

		if( vars) assign( this, vars );

		if (!this.items ) this.items = null;

	}

	computeCost() {

		if ( !this.items || this.items.length === 0) {
			this.cost = null;
			return;
		}
		let cost = {};

		for( let i = this.items.length-1; i >= 0; i-- ) {

			let it = this.items[i];
			if (!it) this.items.splice( i, 1);
			else if ( it.cost ) addValues( cost, it.cost );


		}

		this.effect = this.items.map( v=> typeof v === 'string' ? v : v.name );
		this.cost = cost;

	}

	canUse( g ) {

		//check for additional blocks like cd, locks, disabled, etc.
		for( let i = this.items.length-1; i>=0; i-- ) {
			if ( !this.items[i].canUse(g) ) return false;
		}

		return g.canPay( this.cost );

	}

	/**
	 *
	 * @param {} g
	 * @returns nothing
	 */
	onUse(g) {

		let len = this.items.length;
		for( let i = 0; i < len; i++ ) {

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
	amount( amt ) {

		let len = this.items.length;
		for( let i = 0; i < len; i++ ) {
			this.items[i].amount( amt );
		}

	}

	/**
	 *
	 * @param {Object} mods - effect/mod description.
	 * @param {number} amt - factor of base amount added
	 * ( fractions of full amount due to tick time. )
	 */
	applyVars( mods, amt=1 ) {

		let len = this.items.length;
		for( let i = 0; i < len; i++ ) {
			this.items[i].applyVars( mods, amt );
		}
	}

	/**
	 * Apply mod to every data of group.
	 * @param {Mod|Object} mods
	 * @param {number} amt
	 * @param {Object} [targ=null]
	 */
	applyMods( mods, amt=1, targ=this ) {

		let len = this.items.length;
		for( let i = 0; i < len; i++ ) {
			this.items[i].applyMods( mods, amt, targ );
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