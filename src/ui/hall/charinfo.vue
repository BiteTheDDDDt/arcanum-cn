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
		title() { return this.char.title },
		gclass(){return this.char.gclass }

	}

}
</script>


<template>
<div :class="['char-info', empty ? 'empty' : '']">
	<div class="char-stats" v-if="!empty">
	<span>{{ name }} the {{ title }}</span>
	<span>level: {{ level }}</span>
	<span v-if="gclass">{{ gclass }}</span>
	</div>
	<div v-else>
		<span>Chair Empty</span>
	</div>

	<div class="buttons">

	<button class="enter" v-if="!active" @click="$emit('load', char)" warn="true"
		@mouseenter.capture.stop="emit( 'itemover', $event, rollOver )">
		<span v-if="empty">Begin</span><span v-else>Awaken</span>
		</button>

	<button class="dismiss" v-if="!active&&!empty" @click="$emit('dismiss', char)" warn="true">Dismiss</button>

	</div>

</div>
</template>

<style scoped>

div.char-info {

	display:flex;
	flex-flow: column nowrap;
	border: 1px solid var(--separator-color);
	padding: var(--md-padding);
	border-radius: 4px;
	min-height: 200px;
	min-width:150px;

	justify-content: space-between;

}

div.char-info div.buttons {
	display:flex;
	flex-flow: column nowrap;
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