import GData from "../items/gdata";

/**
 * CURRENTLY UNUSED
 */
export default class Furniture extends GData {

	constructor(vars) {

		super(vars);
		this.type = 'furniture';

	}

	/**
	 * Tests whether item fills unlock requirement.
	 * @returns {boolean}
	 */
	fillsRequire(){
		return this.locked === false && this.value > 0;
	}

}