<script>
/**
 * Display of CharInfo stub.
 */
export default {

	/**
	 * @property {boolean} active - whether char is currently active.
	 */
	props:['char', 'active']

}
</script>


<template>
<div>
	<span>Name: {{ char.name }}</span>
	<span>Level: {{ level }}</span>
	<span>Title: {{ title }}</span>

	<button v-if="!active" @click="$emit('load', char)">Load</button>

<div>
</template>

<style scoped>

</style>