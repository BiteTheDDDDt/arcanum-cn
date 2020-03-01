import { precise } from "../../util/format";

/**
 * Single item in a display block.
 */
export class DisplayItem {

	constructor( value, isRate ) {

		//this.path = path;
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

		return ((typeof this.value ==='object') ? this.value.toString() : precise(this.value) ) +
			( this.isRate ? '/s' : '');
	}

}