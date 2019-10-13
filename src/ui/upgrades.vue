<script>
import ItemsBase from './itemsBase.js';

export default {

	/**
	 * @property {string} event - name of event to fire when an item is selected.
	 */
	props:['pickEvent', 'items'],
	mixins:[ItemsBase]

}
</script>


<template>
<div>

	<span :class="{'action-btn':true, locked:it.owned||locked(it) }" v-for="it in items" :key="it.id"
		@mouseenter.capture.stop="emit( 'itemover', $event,it)">

	<button
		class="wrapped-btn"
		:disabled="!usable(it)"
		@click="emit( pickEvent||'upgrade', it)">{{ showName(it) }}</button>
	</span>

</div>
</template>