import Stat from "../values/rvals/stat";
import Base, {mergeClass} from '../items/base';
import Item from "../items/item";

import { itemRevive } from "../modules/itemgen";
import { Changed } from "../techTree";

/**
 * Option for saveMap which will full-save instanced items
 * and save ids for standard items.
 * @param {*} v
 */
export const SaveInstanced = (v=>v.instanced ? v : v.id);

export const SAVE_FULL = 'full';
export const SAVE_IDS = 'ids';

export default class Inventory {

	/**
	 * @property {number} length - number of items in inventory.
	 */
	get count() { return this.items.length; }

	valueOf() { return this.items.length; }

	toJSON(){

		return {
			items:this.saveMode ===  SAVE_FULL ? this.items : (
				( this.saveMode === SAVE_IDS || !this.saveMap ) ? this.items.map(v=>v.id ) :
				this.items.map( this.saveMap, this )
			),
			max:(this.max)
		}
	}

	/**
	 * @property {string} [saveMode='full'] - how to save inventory items,
	 * as 'full', 'ids' objects, or 'custom'
	 * custum save modes must implement a saveMap function to pass to items.map()
	 * Default is 'full'
	 */
	get saveMode(){return this._saveMode;}
	set saveMode(v){
		this._saveMode = v;
	}

	/**
	 * @property {(*)=>*} saveMap
	 */
	get saveMap(){return this._saveMap}
	set saveMap(v){this._saveMap=v}

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
	 * @property {string} countProp - property that represents the count of an object.
	 * Not the same as inventory.count which is separate items in inventory.
	 */
	get countProp(){return this._cProp;}
	set countProp(v){this._cProp=v}

	/**
	 * @property {number} used - spaces used by items in inventory.
	 * if no space prop is defined, this is just the number of items.
	 */
	get used() { return this._used; }
	set used(v) { this._used = v; }

	/**
	 * @property {string} name - display name of inventory.
	 */
	get name() {return this._name || this.id; }
	set name(v) { this._name = v; }

	get max() { return this._max; }
	set max(v) {
		this._max = v instanceof Stat ? v : new Stat(v, 'max', true);
	}

	/**
	 * @property {boolean} removeDupes - whether to remove duplicate ids from inventory.
	 */
	get removeDupes(){ return this._removeDupes; }
	set removeDupes(v){this._removeDupes = v;}

	/**
	 * @property {Object[]}
	 */
	get items(){ return this._items; }
	set items(v){

		if ( v ) {

			for( let i = v.length-1; i>= 0; i--) {
				if ( v[i] === null || v[i] === undefined ) {
					v.splice(i,1);
				}
			}
		}

		this._items = v;

	}

	/**
	 * @property {boolean} saveIds - if true, only save item ids, and not
	 */
	get saveIds(){ return this._saveIds }
	set saveIds(v){ this._saveIds=v; }

	[Symbol.iterator](){
		return this.items[Symbol.iterator]();
	}

	/**
	 * @returns {Array} returns reversed Array of items.
	 */
	reverse(){ return this._items.reverse(); }
	toArray(){return this._items.slice(0)}

	constructor(vars=null){

		if ( vars ) {

			if ( typeof vars === 'string') {
				this.items = vars.split(',');
			} else if ( Array.isArray(vars)){
				this.items = vars;
			}
			else Object.assign(this,vars);

		}
		if ( !this.items ) this.items = [];
		if ( this._cProp ) this._cProp = 'value';

		if ( !this.saveMode ) this.saveMode = SAVE_FULL;
		this.type = 'inventory';
		if (!this.id) this.id = this.type;

		if ( !this.max ) this.max = 0;

	}

	/**
	 * Call begin on any items once Game is loaded with data.
	 * (Prior to restore mods.)
	 * @param {Context} g - game context.
	 */
	begin(g){
		for( let i = this.items.length-1; i>= 0; i-- ) {
			if ( typeof this.items[i].begin === 'function' ) this.items[i].begin(g);
		}
	}

	/**
	 *
	 * @param {GameState} gs
	 * @param {(gs,*)=>object} [reviver=null] optional item reviver.
	 */
	revive( gs, reviver ){

		let len = this.items.length;
		let loads = this.items.splice(0, len );

		for( let i = 0; i < len; i++ ) {

			var it = loads[i];
			if ( reviver ) {
				it = reviver(gs, it);
			} else if ( typeof it === 'object' ) {

				it = itemRevive( gs, it );

			} else if ( typeof it === 'string') it = gs.getData(it);

			this.add(it);

		}
		this.calcUsed();

	}

	/**
	 * Add item to inventory
	 * @param {object} it
	 */
	add(it){

		if ( it === null || it === undefined || typeof it !== 'object' ) return false;

		if ( Array.isArray(it) ) {

			for( let i = it.length-1; i>=0; i-- ) {
				this.add(it[i]);
			}

		} else {

			if ( !it.id ) return false;

			if ( it.stack && this.addStack(it) ) {
				return;
			} else if ( this.full() ) return false;
			else if ( this.removeDupes && this.find(it.id ) ) {
				console.log('removing: ' + it.id );
				return false;
			}


			this._items.push( it );
			this.used += this.spaceCost( it );

			//console.warn('CUR USED: ' + this.used + '/' + this.max.value );

		}
		Changed.add(this);

	}

	/**
	 * Force-add an item if possible by removing existing items.
	 * @param {GData} it
	 * @returns {boolean}
	 */
	cycleAdd(it) {

		const cost = this.spaceCost(it);

		if ( this.max && (cost > this.max) ) return false;

		while ( this.items.length > 0 && (this.used + cost > this.max) ) {
			this.removeAt(0);
		}

		return this.add(it);


	}

	/**
	 * Get the space cost of an item according to spaceProp.
	 * @param {GData} it
	 * @returns {number}
	 */
	spaceCost(it) { return this.spaceProp ? ( it[this.spaceProp] || 0) : 1; }

	/**
	 * Determine if item fits in inventory.
	 * @param {Item} it
	 * @returns {boolean}
	 */
	canAdd(it) {

		if ( !this.max || this.max.value === 0 ) return true;
		return this.used + this.spaceCost(it) <= this.max.value;

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
	 * @returns {GData} random item or null.
	 */
	randItem() {

		if ( this.items.length <= 0 ) return null;
		return this.items[ Math.floor( Math.random()*this.items.length) ];

	}

	/**
	 * Remove all items from inventory.
	 * splice is used for vue reactivity.
	 */
	removeAll(){
		this.used = 0;
		return this.items.splice(0, this.items.length);
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

	removeAt(ind) {

		let it = this.items[ind];
		this.used -= this.spaceCost(it);
		this.items.splice(ind,1);

	}

	/**
	 * Remove quantity of item and only drop from inventory
	 * if remaining is 0.
	 * @param {Item} it
	 * @param {number} count
	 */
	removeCount( it, count) {

		it[this._cProp] -= count;
		if ( it[this._cProp] <= 0 ) this.remove(it);

	}

	/**
	 * Filter inventory items.
	 * @param {*} p
	 */
	filter(p) {
		return this.items.filter(p);
	}

	/**
	 * Determine if quantity of item is available.
	 * @param {GData} it
	 * @param {number} count
	 */
	hasCount( it, count ) {

		it = this.findMatch(it);
		if ( !it ) return false;
		return count === 1 || ( it.stack && it[this._cProp] >= count );
	}

	/**
	 * Add count to stackable item, if found.
	 * @param {GData} it
	 * @param {number} [count=1]
	 * @returns {?GData} item found, or null.
	 */
	addStack(it, count=1) {

		let orig = this.findMatch(it);
		if ( orig) {
			orig[this._cProp] += count;
			return orig;
		}

		return null;

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
	 * @returns {?object}
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
			if ( !it ) console.warn( this.id + ' null Item in Inv: ' + it );
			else used += prop ? ( it[prop] || 0 ) : 1;

		}

		this.used = used;

	}

}

mergeClass( Inventory, Base );