<script>
import ItemsBase from "@/ui/itemsBase.js";
//import UIMixin from '@/ui/hall/uiMixin';

export default {
	computed: {
		hallUpgrades() {
			return Object.values(this.items).filter(v => !v.disabled && v.value >= v.max);
		},
	},
	/**
	 * @property {string} event - name of event to fire when an item is selected.
	 */
	props: ["items"],
	mixins: [ItemsBase],
	methods: {
		clickHandler(it) {
			if (it.canUse()) {
				this.emit("upgrade", it);
			}
		},
	},
};
</script>

<template>
	<div>
		<div class="upgrades">
			<button
				type="button"
				:class="{
					'task-btn': true,
					hidable: false,
					locked: locked(it) || (it.owned && !it.repeat),
					running: false,
					runnable: false,
					disabled: !it.canUse(),
				}"
				v-for="it in items"
				:data-key="it.id"
				:key="it.id"
				@mouseenter.capture.stop="itemOver($event, it)"
				@click="clickHandler(it)">
				{{ it.name }}
			</button>
		</div>
		<span>Maxed upgrades :</span>
		<div class="upgrades">
			<button
				type="button"
				:class="{
					'task-btn': true,
					hidable: false,
					locked: false,
					running: false,
					runnable: false,
					disabled: true,
				}"
				v-for="up in hallUpgrades"
				:key="up.id + '.maxed'"
				@mouseenter.capture.stop="itemOver($event, up)">
				{{ up.name }}
			</button>
		</div>
	</div>
</template>
