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

		empty(){return this.char.empty },

		name(){
			return this.char.name;
		},
		level() { return this.char.level },
		title() { return this.char.title }

	}

}
</script>


<template>
<div :class="['char-info', empty ? 'empty' : '']">
	<div class="char-stats">
	<span>{{ name }} the {{ title }}</span>
	<span>level: {{ level }}</span>
	<span>{{ title }}</span>
	</div>

	<div class="buttons">

	<button class="enter" v-if="!active" @click="$emit('load', char)" warn="true"
		@mouseenter.capture.stop="emit( 'itemover', $event, rollOver )">Enter</button>

	<button class="dismiss" v-if="!active" @click="$emit('dismiss', char)" warn="true">Dismiss</button>

	</div>

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