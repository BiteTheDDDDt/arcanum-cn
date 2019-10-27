<script>
import ItemsBase from './itemsBase.js';
//import UIMixin from './uiMixin';

export default {

	/**
	 * @property {string} event - name of event to fire when an item is selected.
	 */
	props:['items'],
	mixins:[ItemsBase]

}
</script>


<template>
<div>

	<!--<div><button ref="btnHides" class="btnConfig">&#9881;</button></div>-->

	<span :class="{'action-btn':true, locked:locked(it),
		'running':it.running, runnable:it.perpetual||it.length>0 }" v-for="it in items"
		:data-key="it.id" :key="it.id" ref="hidables"
		@mouseenter.capture.stop="emit( 'itemover', $event,it)">

	<button
		class="wrapped-btn" :disabled="!usable(it)"
		@click="emit( 'upgrade', it)">{{ it.name }}</button>
	</span>

</div>
</template>