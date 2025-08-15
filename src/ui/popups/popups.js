const PADDING = 20;

/**
 *
 * @param {*} elm
 * @param {DOMRect} targRect
 */
const getTop = (elm, targRect) => {
	const y = targRect.top - 40;

	return y < PADDING
		? PADDING
		: y + elm.offsetHeight > window.innerHeight - PADDING
			? window.innerHeight - PADDING - elm.offsetHeight
			: y;
};

export const centerX = elm => {
	elm.style.left = (window.innerWidth - elm.offsetWidth) / 2 + "px";
};

export const centerXY = (elm, pctY) => {
	const style = elm.style;
	style.left = (window.innerWidth - elm.offsetWidth) / 2 + "px";
	style.top = (pctY || 0.5) * (window.innerHeight - elm.offsetHeight) + "px";
};

/**
 *
 * @param {HTMLElement} elm - element being positioned
 * @param {HTMLElement} target - target being rolled over.
 * @param {number} [pad=32] - padding distance between element and popup.
 */
export const positionAt = (elm, target, pad = 32) => {
	const style = elm.style;
	const rect = target.getBoundingClientRect();
	//let myBox = this.$el.getBoundingClientRect();

	const left = rect.left;
	if (left < window.innerWidth / 2) {
		style["left"] = left + target.offsetWidth + pad + "px";
	} else {
		style["left"] = left - elm.offsetWidth - pad + "px";
	}

	style.top = getTop(elm, rect) + "px";
};

export const getChild = targ => {
	/**
	 * Give priority to buttons so popup wont be on click.
	 */
	if (targ.children) {
		let c = targ.children[0];

		for (let t of targ.children) {
		}
	}

	return targ;
};
