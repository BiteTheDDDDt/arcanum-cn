<script>
/**
 * Display of CharInfo stub.
 */
export default {

	/**
	 * @property {boolean} active - whether char is currently active.
	 */
	props:['char', 'active'],
	computed:{

		name(){
			return this.char ? this.char.name : '';
		},
		level() { return this.char ? this.char.level : '' },
		title() { return this.char ? this.char.title : '' }

	}

}
</script>


<template>
<div>
	<span>Name: {{ name }}</span>
	<span>Level: {{ level }}</span>
	<span>Title: {{ title }}</span>

	<button v-if="!active" @click="$emit('load', char)">Load</button>

<div>
</template>

<style scoped>

</style>