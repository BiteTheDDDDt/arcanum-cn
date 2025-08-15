<script>
import Game from "@/game";

import ItemView from "ui/items/gdata.vue";
import { positionAt } from "@/ui/popups/popups.js";
import Char from "@/chars/char.js";
import { reactive } from "vue";
/**
 * Information about current rollover object.
 */
export const RollOver = reactive({
	item: null,
	elm: null,
	title: null,
	source: null,
	text: null,
});

export const ItemOver = (evt, it, source, title, text = null) => {
	const next = {};
	next.item = it;
	next.elm = evt.currentTarget;
	next.source = source != null || it instanceof Char ? source : Game.player;

	if (it && it.context) {
		next.context = it.context;
	} else if (next.source && next.source.context) {
		next.context = next.source.context;
	} else {
		console.warn("Item and Source don't have context. Defaulting to game.", it, source);
		next.context = Game;
	}

	next.title = title;
	next.text = text;
	Object.assign(RollOver, next);
};

export const ItemOut = event => {
	if (event && event.target === RollOver.elm) {
		return;
	}
	RollOver.item = null;
	RollOver.elm = null;
	RollOver.source = null;
	RollOver.title = null;
	RollOver.context = null;
	RollOver.text = null;
};

/**
 * Box for displaying item information.
 */
export default {
	data() {
		return RollOver;
	},

	updated() {
		// waiting for width to change before reposition.
		if (this.item || this.text) {
			positionAt(this.$el, this.elm);
			//this fixes "Tooltip too long" by applying a column style to any window that's a bit too tall.
			//The reason for the default setters, is that without them, iteminfo gets an incorrect height.
			const popup = document.getElementsByClassName("item-popup")[0];
			popup.style["column-count"] = "auto";
			popup.style["column-width"] = "auto";
			popup.style["max-width"] = "280px";
			var positionInfo = popup.getBoundingClientRect();
			var height = positionInfo.height;
			if (height >= window.innerHeight * 0.85) {
				let iteminfo = document.getElementsByClassName("popup-content")[0];
				let colCount = Math.ceil(iteminfo.getBoundingClientRect().height / (window.innerHeight * 0.95));
				let maxwidth = colCount * 300 + "px";
				popup.style["column-width"] = 280 + "px";
				popup.style["column-count"] = colCount;
				popup.style["max-width"] = maxwidth;
			}
		}
	},
	components: { gdata: ItemView },
};
</script>

<template>
	<div class="item-popup" v-show="item != null || text != null">
		<div class="popup-content">
			<div v-if="title" class="pop-title">{{ title }}</div>
			<template v-if="Array.isArray(item)">
				<div v-for="t in item" :key="t">{{ t.toString() }}</div>
			</template>
			<template v-else>
				<gdata v-if="item" :item="item" />
			</template>
			<template v-if="text">
				<div>{{ text }}</div>
			</template>
		</div>
	</div>
</template>

<style scoped>
.item-popup {
	background-color: var(--odd-list-color);
}

div.pop-title {
	font-weight: bold;
	border-bottom: 1px solid black;
	margin-bottom: var(--md-gap);
}

.popup-content {
	padding: var(--md-gap);
}
</style>
