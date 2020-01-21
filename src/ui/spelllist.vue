<script>
export default {

	props:['list']

}
</script>


<template>

<div class="spelllist" functional>

	<span>Max Levels: {{ list.used + ' / ' + Math.floor( list.max.value ) }}
		<div class='warn-text note-text' v-if="list.full()">Spelllist is Full</div>
	</span>

	<div v-for="(it,ind) in list.items" :key="ind" @mouseenter.capture.stop="emit( 'itemover', $event, it )">
		<button @click="list.removeAt(ind)">X</button><span>{{ it.name }}</span>
	</div>

</div>

</template>

<style scoped>

.spelllist span:first-child {
	border-bottom: 1px solid var(--separator-color);
	margin-bottom: var(--sm-gap);
}

</style>