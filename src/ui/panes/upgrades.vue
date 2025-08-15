<script>
import ItemsBase from "@/ui/itemsBase.js";
//import UIMixin from '@/ui/panes/uiMixin';

export default {
	/**
	 * @property {string} event - name of event to fire when an item is selected.
	 */
	props: ["items", "preventClick"],
	mixins: [ItemsBase],
	methods: {
		clickHandler(it) {
			if (!this.preventClick && it.canUse()) {
				// config : inConfig from task, value in uiMixin.js
				this.emit("upgrade", it);
			}
		},
		getStyle(it) {
			return {
				"fade-in": true,
				"task-btn": true,
				hidable: true,
				locked: this.locked(it) || (it.owned && !it.repeat),
				running: it.running,
				runnable: it.perpetual > 0 || it.length > 0,
				disabled: !it.canUse(),
			};
		},
	},
};
</script>

<template>
	<div class="upgrades fade-in">
		<button
			v-for="it in items"
			:data-key="it.id"
			:key="it.id"
			type="button"
			:class="getStyle(it)"
			@click="clickHandler(it)"
			@mouseenter.capture.stop="itemOver($event, it)">
			{{ it.actname || it.name }}
		</button>
	</div>
</template>

<style scoped>
button {
	width: 100%;
}
</style>
