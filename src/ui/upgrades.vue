<script>
import ItemsBase from './itemsBase.js';
import Game from '../game';

export default {

	/**
	 * @property {string} event - name of event to fire when an item is selected.
	 */
	props:['pickEvent', 'items'],
	mixins:[ItemsBase],
	created(){

		this.pEvent = this.pickEvent || 'upgrade';
		/*return {
			pEvent:this.pickEvent || 'upgrade',
			pLayout:this.layout||'upgrade-list'
		};*/

	}

}
</script>


<template>
<div>

	<span :class="{'action-btn':true, locked:it.owned||locked(it) }" v-for="it in items" :key="it.id"
		@mouseenter.capture.stop="emit( 'itemover', $event,it)">

	<button
		class="wrapped-btn"
		:disabled="!usable(it)"
		@click="emit( pEvent, it)">{{ showName(it) }}</button>
	</span>

</div>
</template>