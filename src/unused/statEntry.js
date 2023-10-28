/**
 * Facilitates updates of stats.
 */
export default class StatEntry {

	getValue() { return this.stat.value; }

	get base() { return this.stat.base; }
	set base(v) {
		this.stat.base = v;
	}

	/**
	 * @property {string[]} subpath - subpath from the base stat
	 * which the entry key refers to.
	 */

	constructor( key, stat, subpath=undefined ){

		this.key = key || '';
		this.stat = stat;
		this.subpath = subpath;

		/**
		 * @property {Number} prev - combined value from previous frame.
		 */
		this.prev = stat.value;

		this.nextPct = stat.pct;
		this.nextBase = stat.base;


		this.owner = this.owner || null;

	}

}