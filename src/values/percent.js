import { precise } from '@/util/format';
import { TYP_PCT } from '@/values/consts';

export const PercentTest = /^(\d+(?:\.\d+)?)\%$/i
const RollScale = 120;

/**
 * Represents a percentage probability.
 */
export default class Percent {

	toJSON() { return (100 * this.pct) + '%'; }

	/**
	 * @property {number} pct - decimal percent.
	 */

	/**
	 * @property {number} value - 1 if a random roll
	 * is below the percentile.
	 */
	get value() { return (Math.random() < this.pct) ? 1 : 0; }

	/**
	 * Perform a percent roll with a percent-percent modifier.
	 * @param {number} [mod=0] - 100-based percent.
	 * @returns {boolean} - true if roll succeeds.
	 */
	roll(mod = 0) {
		if (mod < 0) {
			return Math.random() < 1 - ((1 - this.pct) * RollScale - 10 * mod) / (RollScale - 10 * mod);
		}
		return Math.random() < 1 - ((1 - this.pct) * RollScale + mod * Math.max(1 - this.pct * 4, 0)) / (RollScale + mod);
	}

	get type() { return TYP_PCT }

	toString() { return precise(100 * this.pct) + '%'; }

	constructor(val) {

		if (typeof val === 'string') {

			let res = PercentTest.exec(val);
			if (res) {

				this.pct = res[1];

			} else this.pct = Number(val);

		} else if (!isNaN(val)) this.pct = val;

		this.pct = (this.pct || 0) / 100;

	}

	clone() {
		return new Percent(100 * this.pct);
	}

}
