import { itemRevive } from "../itemgen";
import Wearable from "./wearable";
import Item from "../items/item";

/**
 * Equipment slot.
 */
export default class Slot {

	toJSON(){
		return {
			id:this.id,
			item:this.item,
			multi:this.multi,
			max:this.max
		}
	}

	get item() {
		return this._item;
	}
	set item(v){

		this._item = v;

	}

	constructor(vars=null){

		if ( vars ) Object.assign( this, vars);

		this.max = this.max || 1;
		this.item = this.item || ( this.max > 1 ? [] : null );

		/**
		 * @property {boolean} multi - true if slot holds multiple items.
		 */
		this.multi = Array.isArray( this.item );

		this.name = this._name || this.id;

	}

	/**
	 * Compute spaces left in slot.
	 * @returns {number}
	 */
	freeSpace() {

		let count = this.max;
		if ( !this.item ) return count;
		else if ( count === 1 ) return 0;

		// should be impossible.
		if ( !Array.isArray(this.item) ) return 0;

		for( let i = this.item.length-1; i>= 0; i-- ) {
			count -= ( this.item[i].numslots || 1 );
		}

		return count;

	}

	/**
	 *
	 * @param {Item} it - the item to place in the slot.
	 * @returns {Item|boolean} Item(s) removed from slot, or true,
	 * if no item needs to be removed.
	 */
	equip( it ){

		let spaces = it.numslots ? it.numslots : 1;

		// won't fit in slot.
		if ( spaces > this.max ) return false;

		if ( this.multi === true ) {


			this.item.push(it);
			for( let i = this.item.length-2; i >= 0; i-- ) {

				spaces += (this.item[i].numslots || 1);
				if ( spaces > this.max ) {

					return this.item.splice( 0, i+1);

				}

			}
			return true;

		} else if ( !this.item ) {

			this.item = it;
			return true;

		} else {

			let tmp = this.item;
			this.item = it;

			return tmp;

		}

	}

	/**
	 * Find item in slot by id.
	 * @param {string} id
	 * @returns {Item|null}
	 */
	find(id ) {
		if ( this.item === null) return null;
		return this.multi ?
			this.item.find(v=>v.id===id) :
			(this.item.id === id) ? this.item : null
	}

	/**
	 *
	 * @param {*} it
	 * @returns {boolean}
	 */
	has(it) {
		return (this.multi === false ) ? this.item === it : this.item.includes(it);
	}

	/**
	 * Remove item from slot.
	 * @param {?Item} [it=null] - item to remove. If item is null, any item(s) in slot are removed.
	 * @returns {?Item|boolean} - If no parameter is specified, removes all items and returns them.
	 * If a param is specified, returns the item removed.
	 */
	remove( it=undefined) {

		if ( this.item === it ) {

			this.item = null;
			return it;

		} else if ( it === null || it === undefined ) {

			it = this.item;
			this.item = null;

			return it;

		} else if ( this.multi ) {

			let ind = this.item.indexOf(it);
			if ( ind < 0 ) return false;
			return this.item.splice(ind,1)[0];

		}

		return false;

	}

	revive( state ) {

		if ( this.item === null || this.item === undefined ) return;
		if ( Array.isArray( this.item) ) {

			for( let i = this.item.length-1; i>= 0; i-- ) {

				var it = itemRevive(state, this.item[i]);
				if (!it) {

					this.item.splice(i,1);
				} else this.item[i] = it;
			}

		} else this.item = itemRevive(state, this.item );

	}

	/**
	 * Return the hands used by a weapon held in this slot.
	 */
	hands() {
		return this.item != null ? (this.item.hands) || 0 : 0;
	}

	empty(){
		return this.item === null ||
			(Array.isArray(this.item) && this.item.length===0);
	}

}