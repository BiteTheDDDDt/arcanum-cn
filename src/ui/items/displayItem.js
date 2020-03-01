/**
 * Single item in a display block.
 */
export class DisplayItem {

	constructor( path, value, isRate ) {

		this.path = path;
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

}