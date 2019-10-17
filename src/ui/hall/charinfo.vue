<script>

import ItemsBase from '../itemsBase';

/**
 * Display of CharInfo stub.
 */
export default {

	/**
	 * @property {boolean} active - whether char is currently active.
	 */
	props:['char', 'active'],
	mixins:[ItemsBase],
	computed:{

		/**
		 * @property {object} rollOver - object to display on roll over.
		 */
		rollOver(){
		},

		empty(){return !this.char; },

		name(){
			return this.char ? this.char.name : 'Wizard Slot';
		},
		level() { return this.char ? this.char.level : '' },
		title() { return this.char ? this.char.title : '' }

	}

}
</script>


<template>
<div :class="['char-info', empty ? 'empty' : '']">
	<div class="char-stats">
	<span>Name: {{ name }}</span>
	<span>Level: {{ level }}</span>
	<span>Title: {{ title }}</span>
	</div>

	<button v-if="!active" @click="$emit('load', char)" warn="true"
		@mouseenter.capture.stop="emit( 'itemover', $event, rollOver )">Enter</button>

</div>
</template>

<style scoped>

div.char-info {
	display:flex;
	flex-flow: column nowrap;
}

div.char-info.empty {
	background-color: rgb(157, 157, 157);
}

div.char-stats {

	display:flex;
	flex-flow: column nowrap;

}



</style>