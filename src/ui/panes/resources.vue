<script>
import UIMixin from "ui/uiMixin";
import Settings from "modules/settings";

import ItemGroup from "ui/panes/itemGroup.vue";

export default {
	/**
	 * @property {Resource[]} items
	 */
	props: ["items"],
	mixins: [UIMixin],

	data() {
		let ops = Settings.getSubVars("resview");
		if (!ops.hide) ops.hide = {};

		return {
			/**
			 * @property {.<string,GData[]>} groups - maps group name to items array.
			 */
			groups: null,
			hide: ops.hide,
		};
	},
	components: {
		group: ItemGroup,
	},
	computed: {
		hideTip() {
			return "Used to hide and unhide entries. This setting is retained between characters."
		},
	},
	created() {
		// build item groups.
		let items = this.items.sort((a, b) => (a.sortOrder ?? 10000) - (b.sortOrder ?? 10000));
		let groups = {};

		let group;
		let len = items.length;
		for (let i = 0; i < len; i++) {
			let it = items[i];
			if (it.hide) continue;
			let title = it.group || (it.tags ? it.tags[0] : "other");
			if (title === "manas" || title === "menace" || title === "specialty" || title === "t_endurance") continue;

			group = groups[title] || (groups[title] = []);

			group.push(it);
		}

		this.groups = groups;
	},
};
</script>

<template>
	<div class="res-list">
		<div class="config"><button type="button" ref="btnHides" class="btnConfig" @mouseenter.capture.stop="itemOver($event, null, null, null, hideTip)"></button></div>
		<div class="res-container">
			<group class="res-group" v-for="(g, p) in groups" :items="g" :group="p" :hide="hide" :key="p" />
		</div>
	</div>
</template>

<style scoped>
.res-list {
	overflow-y: auto;
	overflow-x: visible;
	width: 15em;
}

.res-container {
	margin-right: 0.71em;
}

.compact .res-list {
	overflow-y: auto;
	overflow-x: visible;
	width: 14em;
	font-size: 0.9em;
}
</style>
