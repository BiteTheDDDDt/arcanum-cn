<script>
import ItemsBase from '@/ui/itemsBase.js';
//import UIMixin from '@/ui/panes/uiMixin';

export default {

	/**
	 * @property {string} event - name of event to fire when an item is selected.
	 */
	props: ['items', 'preventClick'],
	mixins: [ItemsBase],
	methods: {
		clickHandler(it) {
			if (!this.preventClick && it.canUse()) {// config : inConfig from task, value in uiMixin.js
				this.emit('upgrade', it)
			}
		}
	}
}
</script>


<template>
<div class="upgrades fade-in">

	<!--<div><button type="button" ref="btnHides" class="btnConfig">&#9881;</button></div>-->

	<button type="button" :class="{
		'fade-in': true,
		'task-btn': true,
		hidable: true,
		locked: locked(it) || (it.owned && !it.repeat),
		running: it.running, runnable: it.perpetual > 0 || it.length > 0,
		disabled: !it.canUse()
	}"
		v-for="it in items" :data-key="it.id" :key="it.id"
		@mouseenter.capture.stop="itemOver($event, it)"

		@click="clickHandler(it)">{{ (it.actname || it.name) }}</button>

</div>
</template>
