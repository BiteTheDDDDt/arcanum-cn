<script>
import UIMixin from 'ui/uiMixin';
import Settings from 'modules/settings';

import ItemGroup from 'ui/panes/itemGroup.vue';

export default {

	/**
	 * @property {Resource[]} items
	 */
	props: ['items'],
	mixins: [UIMixin],

	data() {

		let ops = Settings.getSubVars('resview');
		if (!ops.hide) ops.hide = {};

		return {

			/**
			 * @property {.<string,GData[]>} groups - maps group name to items array.
			 */
			groups: null,
			hide: ops.hide
		}

	},
	components: {
		group: ItemGroup
	},
	created() {

		// build item groups.
		let items = this.items.sort((a,b)=> (a.sortOrder ?? 10000) - (b.sortOrder ?? 10000));
		let groups = {}

		let group;
		let len = items.length;
		for (let i = 0; i < len; i++) {

			let it = items[i];
			if (it.hide) continue;
			let title = it.group || (it.tags ? it.tags[0] : 'other');
			if (title === 'manas' || title === 'menace' || title === 'specialty' || title === 't_endurance') continue;

			group = groups[title] || (groups[title] = []);

			group.push(it);

		}

		this.groups = groups;

	}
}
</script>

<template>
<div class="res-list">
    <div class="config"><button type="button" ref="btnHides" class="btnConfig"></button></div>
    <div class="res-container">
        <group class="res-group" v-for="(g, p) in groups" :items="g" :group="p" :hide="hide" :key="p" />
    </div>
</div>
</template>

<style scoped>
div.res-list {
	overflow-y: auto;
	overflow-x: visible;
	width: fit-content;
	margin: 0;
	padding: 0;
	min-width: 11rem;
}

@supports (-moz-appearance:button) and (contain:paint) {
	div.res-list {
		overflow-y: auto;
		overflow-x: visible;
		width: fit-content;
		margin: 0;
		padding: 0;
		min-width: 11rem;
	}

	div.res-container {
		overflow-x: visible;
		width: fit-content;
		padding-right: 1.1rem;
		min-width: 11rem;
	}
}
</style>

