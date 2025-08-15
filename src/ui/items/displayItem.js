import { precise } from "@/util/format";
import { TYP_PCT } from "@/values/consts";

/**
 * Single item in a display block.
 */
export class DisplayItem {
	/**
	 *
	 * @param {string} name - item name.
	 * @param {*} value
	 * @param {boolean} isRate
	 * @param {boolean} isAvailable
	 * @param {number | null} sourceMax
	 * @param {number | null} sourceCurrent
	 */
	constructor(name, value, isRate, isAvailable, sourceMax = null, sourceCurrent = null) {
		//this.path = path;
		//.toTitleCase() here fixes the caps of all items in the tooltips.
		this.name = name.toTitleCase();
		this.value = value;
		this.isRate = isRate;
		this.isAvailable = isAvailable;
		this.maxLength = sourceMax;
		this.currentLength = sourceCurrent;
	}

	/**
	 * Add amount to display item.
	 * @param {*} v
	 */
	add(v) {
		this.value = this.value + v;
	}

	toString() {
		const typ = typeof this.value;
		if (typ === "boolean") return this.name;

		if (Math.abs(this.value) > 0 || typeof this.value.toString() == "string") {
			return (
				this.name +
				": " +
				(typ === "object" ? this.value.toString() : precise(this.value)) +
				(this.isRate ? "/s" : "")
			);
		}
		return null;
	}
}
