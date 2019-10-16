<script>

import Info from './charinfo.vue';

/**
 * Hall of Wizards
 */
export default {

	props:['hall'],
	components:{
		info:Info
	}

}
</script>

<template>

<div>

	<info v-for="c in hall.chars" :char="c" :key="c.name" />

</div>

</template>

<style scoped>

</style>