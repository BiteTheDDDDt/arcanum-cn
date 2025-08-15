<script>
import UIMixin from "ui/uiMixin";
import Settings from "modules/settings";

import EntryGroup from "ui/panes/entryGroup.vue";

export default {
	/**
	 * @property {Entry[]} items
	 */
	props: ["items"],

	mixins: [UIMixin],

	data() {
		const ops = Settings.getSubVars("entryview");

		let hide = {};

		if (ops && ops.hide) hide = ops.hide;

		return {
			/**
			 * @property {.<string,GData[]>} groups - maps group name to items array.
			 */
			groups: null,
			hide: hide,
		};
	},

	components: {
		group: EntryGroup,
	},

	methods: {
		onSelected(event) {
			this.$emit("selected", event);
		},
	},

	computed: {
		filteredItems() {
			const items = this.items;
			const groups = {
				other: [],
			};

			const len = items.length;
			for (let i = 0; i < len; i++) {
				const it = items[i];
				if (it.hide) continue;
				const title = it.group || (it.tags ? it.tags[0] : "other");

				const group = groups[title] || (groups[title] = []);

				group.push(it);
			}
			this.groups = groups;
			return this.groups;
		},
		hideTip() {
			return "Used to hide and unhide entries. This setting is retained between characters."
		},
	},

	created() {
		// build item groups.

		const items = this.items;
		const groups = {
			other: [],
		};

		const len = items.length;
		for (let i = 0; i < len; i++) {
			const it = items[i];
			if (it.hide) continue;
			const title = it.group || (it.tags ? it.tags[0] : "other");

			const group = groups[title] || (groups[title] = []);

			group.push(it);
		}

		this.groups = groups;
	},
};
</script>

<template>
	<div class="res-list">
		<div class="config"><button type="button" ref="btnHides" class="btnConfig" @mouseenter.capture.stop="itemOver($event, null, null, null, hideTip)"></button></div>
		<div v-if="groups" class="res-container">
			<group class="res-group" v-for="(g, p) in filteredItems" :items="g" :group="p" :hide="hide" :key="p" />
		</div>
	</div>
</template>

<style scoped>
div.res-list {
	overflow: visible;
	width: fit-content;
	margin: 0;
	padding: 0;
	min-width: 11rem;
}

@supports (-moz-appearance: button) and (contain: paint) {
	div.res-list {
		overflow: visible;
		width: fit-content;
		margin: 0;
		padding: 0;
		min-width: 11rem;
	}

	div.res-container {
		overflow: visible;
		width: fit-content;
		padding-right: 1.1rem;
		min-width: 11rem;
	}
}
</style>
