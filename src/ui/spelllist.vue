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

	<div v-for="(it,ind) in list.items" :key="ind" @mouseenter.capture.stop="itemOver( $event, it )">
		<button :disabled= "!(ind>0)"   class="stop" @click="list.swap(ind,ind-1)">↑</button>
		<button :disabled= "!(ind < list.items.length-1)"   class="stop" @click="list.swap(ind,ind+1)">↓</button>
		<button class="stop" @click="list.removeAt(ind)">X</button>
		<span>{{it.name.toTitleCase()}}</span>
	</div>

</div>

</template>

<style scoped>

.spelllist span:first-child {
	border-bottom: 1px solid var(--separator-color);
	margin-bottom: var(--sm-gap);
}

</style>