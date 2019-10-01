<script>
import ItemBase from '../itemsBase';

/**
 * Wraps a button to account for differences in chrome/firefox
 * rollover behaviors.
 */
export default {

	props:['item', 'evt'],
	mixins:ItemBase

}
</script>

<template>

<span :class="{ 'action-btn':true, locked:locked(it), 'wrap-btn':true,
		'running':it.running, runnable:it.perpetual||it.length>0 }"
		@mouseenter.capture.stop="emit( 'itemover', $event,it)">

	<button class="wrapped-btn"
		:disabled="!usable(it)"
		@click.stop="emit( evt, it)">{{ showName(it) }}</button>
</span>


</template>

<style scoped>

</style>