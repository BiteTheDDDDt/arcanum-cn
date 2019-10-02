<script>

import ItemsBase from './itemsBase.js';
import game from '../game';

/**
 * @emits [itemover, itemout]
 */
export default {

	props:['items'],
	mixins:[ItemsBase],
	created(){
		this.game = game;
	}

}
</script>


<template>
<div>


	<span :class="{ 'action-btn':true, locked:locked(it),
		'running':it.running, runnable:it.perpetual||it.length>0 }" v-for="it in items" :key="it.id"
		@mouseenter.capture.stop="emit( 'itemover', $event,it)">
	<button class="wrapped-btn"
		:disabled="!usable(it)"
		@click.stop="emit( 'action', it)">{{ showName(it) }}</button>
	</span>


</div>
</template>

<style scoped>

</style>