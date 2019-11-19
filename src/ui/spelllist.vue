<script>
export default {

	props:['list']

}
</script>


<template>

<div class="spelllist" functional>

	<span>Max Levels: {{ list.used + ' / ' + Math.floor( list.max.value ) }}</span>
	<span class='warn-text' v-if="list.full()">Spelllist is Full</span>
	<div v-for="(it,ind) in list.items" :key="ind" @mouseenter.capture.stop="emit( 'itemover', $event, it )">
		<span>{{ it.name }}</span><button @click="list.remove(it)">Remove</button>
	</div>

</div>

</template>