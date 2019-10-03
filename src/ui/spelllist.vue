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

	<span class='warn-text' v-if="list.full()">Spelllist is Full</span>
	<div v-for="(it,ind) in list" :key="ind">
		<span>{{ it.name }}</span><button @click="remove(it)"></button>
	</div>

</div>

</template>


<style scoped>

</style>