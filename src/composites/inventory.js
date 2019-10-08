import Stat from "../values/stat";
import Base, {mergeClass} from '../items/base';
import Item from "../items/item";

import { itemRevive } from "../itemgen";

export default class Inventory {

	/**
	 * @property {number} length - items in inventory.
	 */
	get count() { return this.items.length; }

	valueOf() { return this.items.length; }

	toJSON(){
		return {
			items:this.items.map(v=>v.instance ? v : v.id ),
			max:(this.max),
			name:this.name||undefined,
			id:(this.id !== 'inventory') ? this.id : undefined
		}
	}

	/**
	 * @property {string} spaceProp - property of items that counts
	 * toward filling the inventory space.
	 * The property must be defined on every item or 0 is counted.
	 * If no property is defined, each item counts as 1.
	 */
	get spaceProp() { return this._spaceProp; }
	set spaceProp(v) {
		this._spaceProp = v;
	}

	/**
	 * @property {number} used - spaces used by items in inventory.
	 * if no space prop is defined, this is just the number of items.
	 */
	get used() { return this._used; }
	set used(v) { this._used = v; }

	get name() {return this._name || this.id; }
	set name(v) { this._name = v; }

	get max() { return this._max; }
	set max(v) {
		this._max = v instanceof Stat ? v : new Stat(v,true);
	}

	constructor(vars=null){

		if ( vars ) Object.assign(this,vars);

		if ( !this.items ) this.items = [];

		this.type = this.id = 'inventory';

		this.max = this._max || 0;

	}

	revive(state){

		for( let i = this.items.length-1; i>= 0; i-- ) {

			var it = this.items[i];
			if ( typeof it === 'object' ) {

				it = itemRevive( state, this.items[i] );

			} else if ( typeof it === 'string') it = state.getData(it);

			if ( it == null ) this.items.splice( i, 1 );
			else this.items[i] = it;

		}
		this.calcUsed();

	}

	/**
	 * Add item to inventory
	 * @param {*} it
	 */
	add(it){

		if ( it === null || it === undefined || typeof it === 'boolean' || this.full() ) return false;
		if ( Array.isArray(it) ) {

			for( let i = it.length-1; i>=0; i-- ) {
				this.add(it[i]);
			}

		} else {

			if ( it.stack ) {
				console.warn('add stack: ' + it.id );
				let inst = this.findMatch( it );
				if ( inst ){
					console.log('MATCH FOUND');
					inst.value++;
					return;
				}

			}

			this.items.push( it );
			this.used += this.spaceProp ? ( it[ this.spaceProp ] || 0 ) : 1;

			//console.warn('CUR USED: ' + this.used);
			//console.warn('CUR MAX: ' + this.max.value );

		}
		this.dirty = true;

	}

	/**
	 * Determine if item fits in inventory.
	 * @param {Item} it
	 * @returns {boolean}
	 */
	canAdd(it) {

		if ( !this.max || this.max.value === 0 ) return true;

		let sp = this.spaceProp ? ( it[this.spaceProp] || 0 ) : 1;
		return this.used + sp <= this.max.value;

	}

	includes(it) {
		return this.items.includes(it);
	}

	/**
	 * @returns {number} number of free spaces left.
	 */
	freeSpace() {
		return this.max ? this.max - this.used : Number.MAX_SAFE_INTEGER;
	}

	/**
	 * @returns {boolean} true if inventory full.
	 */
	full(){

		return this.max >0 && this.used >= Math.floor(this.max.value );
	}

	/**
	 * Remove all items from inventory.
	 * splice is used for vue reactivity.
	 */
	removeAll(){
		this.used = 0;
		return this.items.splice(0, this.items.length);
	}

	removeAt(ind) {

		let it = this.items[ind];
		this.used -= this.spaceProp ? ( it[this.spaceProp || 0 ] ) : 1;

		this.items.splice(ind,1);

	}

	/**
	 * Remove quantity of item and only drop from inventory
	 * if remaining is 0.
	 * @param {Item} it
	 * @param {number} count
	 */
	removeQuant( it, count) {

		it.value -= count;
		if ( it.value <= 0 )this.remove(it);

	}

	/**
	 *
	 * @param {Item} it
	 */
	remove( it ){

		let ind = this.items.indexOf( it );
		if ( ind < 0 ) return;
		this.removeAt(ind);
	}

	/**
	 * Filter inventory items.
	 * @param {*} p
	 */
	filter(p) {
		return this.items.filter(p);
	}

	findMatch(it){

		let id = it.id;
		let rec = it.recipe;

		return this.items.find( v=>v.id===id || (rec&&v.recipe===rec));

	}

	/**
	 * Attempt to find item in inventory.
	 * @param {string} id,
	 * @param {boolean} proto - whether to find any item instanced from the prototype id.
	 * If false, only an exact id match is returned.
	 */
	find(id, proto=false ) {

		return proto === true ? this.items.find( v=>v.id===id||v.recipe===id) :
			this.items.find( v=>v.id===id);

	}

	/**
	 * Recalculate used spaces.
	 * This is only done in the event of an error.
	 */
	calcUsed() {

		let used = 0;
		let prop = this.spaceProp;

		for( let i = this.items.length-1; i >= 0; i-- ) {

			var it = this.items[i];
			used += prop ? ( it[prop] || 0 ) : 1;

		}

		this.used = used;

	}

}

mergeClass( Inventory, Base );