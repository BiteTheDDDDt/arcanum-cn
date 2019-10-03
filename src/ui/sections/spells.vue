<script>
import Book from '../spellbook.vue';
import List from '../spelllist.vue';

export default {

	data(){
		return {
			"showList":false
		}
	},
	methods:{

		toggle(){
			this.showList = !this.showList;
		}
	},
	components:{
		book:Book,
		list:List
	}

}
</script>

<template>

<div class="spells">

<book @toggle="toggle" />
<list :v-show="showList" />

</div>

</template>

<style scoped>

div.spells {

	display:flex;
	flex-direction: row;

}

</style>