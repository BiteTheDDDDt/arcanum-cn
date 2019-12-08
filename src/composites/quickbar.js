import QuickSlot from "./quickslot";
import { RESOURCE } from "../values/consts";

export const MAX_SLOTS = 10;

export default class Quickbar {

	toJSON(){
		return {
			slots:this.slots
		}
	}

	get slots() { return this._slots; }
	set slots(v) {

		if ( v === null || v === undefined ) return;

		let a = [];

		// json arrays are not true arrays.
		for( let i = 0; i < MAX_SLOTS; i++ ) {
			a[i] = new QuickSlot( v[i] );
		}

		this._slots = a;

	}

	/**
	 *
	 * @param {*} vars
	 */
	constructor( vars=null ){

		if ( Array.isArray(vars) ) {

			this.slots = vars;

		} else if ( vars ) {

			Object.assign( this, vars );
			if ( !vars.slots ) this.slots = [];

		} else this.slots = [];

	}

	revive( gs ) {

		for( let i = this._slots.length-1; i >= 0; i-- ) {
			this._slots[i].revive(gs);
		}

	}

	/**
	 * Remove/Clear quickslot by id.
	 * @param {string} id
	 */
	remove( id ) {

		for( let p in this.slots ) {

			var s = this.slots[p];
			if ( s && s.item && s.id === id ) {
				this.clear(p);
			}

		}

	}

	/**
	 * Clear item at slot at index.
	 * Index is actual slot index, not keypad number.
	 * @param {number} ind
	 */
	clear( ind ) {
		this.slots[ind].item = null;
	}

	setSlot( it, num ) {

		if ( it && it.type === RESOURCE ) return;

		// NOTE: using splice for Vue reactivity.
		if ( num >= 0 && num <=9 ) {

			let ind = num > 0 ? num - 1 : 9;
			this.slots[ind].item = it;

		}

	}

	/**
	 * Indices are converted N-1 mod 10
	 * @param {number} num - key number pressed.
	 * @returns {?GData}
	 */
	getSlot( num ) {
		return this._slots[ num > 0 ? num-1 : 9 ];
	}

}