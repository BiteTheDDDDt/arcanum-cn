import { precise } from "../../util/format";

/**
 * Single item in a display block.
 */
export class DisplayItem {

	/**
	 *
	 * @param {string} name - item name.
	 * @param {*} value
	 * @param {boolean} isRate
	 */
	constructor( name, value, isRate ) {

		//this.path = path;
		//.toTitleCase() here fixes the caps of all items in the tooltips.
		this.name = name.toTitleCase();
		this.value = value;
		this.isRate = isRate;

	}

	/**
	 * Add amount to display item.
	 * @param {*} v
	 */
	add( v ) {
		this.value = this.value + v;
	}

	toString(){

		let typ = typeof this.value;
		if ( typ === 'boolean' ) return this.name;

		return (this.name + ': ') +
			((typ ==='object') ? this.value.toString() : precise(this.value) ) +
			( this.isRate ? '/s' : '');
	}

}