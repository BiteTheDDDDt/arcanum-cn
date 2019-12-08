<script>
/**
 * @emits {Item} added
 */
export default {

	props:['items']


}
</script>

<template functional>

<div>

<div class="separate" v-for="(s) in items" :key="s.id"  @mouseenter.capture.stop="emit( 'itemover',$event,s)">
	<span>{{s.name}}</span><button @click="emit( 'add', s)" :disabled="!canAdd(s)">Add</button>
</div>

</div>

</template>