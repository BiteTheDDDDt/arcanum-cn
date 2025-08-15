<script>
import ProgBar from "@/ui/components/progbar.vue";
import Settings from "@/modules/settings";

import Game from "@/game";
import UIMixin from "@/ui/uiMixin";
import ItemBase from "@/ui/itemsBase";

/// Display progress bars defined in props
export default {
	props: ["bars"],
	mixins: [ItemBase, UIMixin],
	components: {
		progbar: ProgBar,
	},
	data() {
		const ops = Settings.getSubVars("bars");
		if (!ops.hide) ops.hide = {};

		return {
			hide: ops.hide,
		};
	},

	computed: {
		baseItems() {
			const res = [];

			const a = this.bars;
			for (let i = a.length - 1; i >= 0; i--) {
				const it = Game.getData(a[i]);
				if (it) res.push(it);
			}

			return res;
		},

		itemList() {
			return this.baseItems.filter(v => this.show(v));
		},
	},
};
</script>

<template>
	<!-- anything not table is a headache -->
	<div class="statbars">
		<div class="hidable statbar" v-for="it in itemList" :key="it.key" :data-key="it.id">
			<span class="name">{{ it.name.toTitleCase() }}</span>
			<span class="barspan">
				<progbar
					:value="it.valueOf()"
					:type="it.id"
					:max="it.max.value"
					:color="it.color"
					@mouseenter.capture.stop="itemOver($event, it)" />
			</span>
		</div>
	</div>
</template>
