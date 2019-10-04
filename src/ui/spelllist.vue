<script>
export default {

	props:['list'],
	methods:{

		remove(it) {
			this.list.remove(it);

		},
		add(it) {
			this.list.add(it);
		}

	},
	computed:{

	}

}
</script>


<template>

<div class="spelllist">

	<span>Max Levels: {{ list.used + ' / ' + Math.floor( list.max.value ) }}</span>
	<span class='warn-text' v-if="list.full()">Spelllist is Full</span>
	<div v-for="(it,ind) in list.items" :key="ind" @mouseenter.capture.stop="emit( 'itemover', $event, it )">
		<span>{{ it.name }}</span><button @click="remove(it)">Remove</button>
	</div>

</div>

</template>


<style scoped>

</style>