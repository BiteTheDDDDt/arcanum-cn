/**
 * @class MinData
 * CURRENTLY UNUSED
 * Absolute minimum functionality to allow reference by id, tag checks, etc.
 */
export default class MinData {

	get id() { return this._id; }
	set id(v) { this._id = v;}

	/**
	 * @property {string} type
	 */
	get type() { return this._type }
	set type(v) { this._type =v;}

	/**
	 *
	 * @param {string} t - tag to test.
	 * @returns {boolean}
	 */
	hasTag( t ) { return (this.tags) && this._tags.includes(t); }

	constructor(){
	}

}