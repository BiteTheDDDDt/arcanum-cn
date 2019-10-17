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

	<button class="enter" v-if="!active" @click="$emit('load', char)" warn="true"
		@mouseenter.capture.stop="emit( 'itemover', $event, rollOver )">Enter</button>

</div>
</template>

<style scoped>

div.char-info {

	display:flex;
	flex-flow: column nowrap;
	border: 1px solid var(--separator-color);
	padding: var(--med-padding);
	border-radius: 4px;
	min-height: 200px;

	justify-content: space-between;

}

div.char-info div.enter {
	width:78%;
	justify-self: flex-end;
}

div.char-info.empty {
	background-color: rgb(157, 157, 157);
}

div.char-stats {

	display:flex;
	flex-flow: column nowrap;

}



</style>