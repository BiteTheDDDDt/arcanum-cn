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

		name(){ return this.char.name; },
		level() { return this.char.level },
		title() { return this.char.title },
		gclass(){return this.char.gclass }

	}

}
</script>


<template>
<div :class="['char-info', empty ? 'empty' : '']">
	<div class="char-stats" v-if="!empty">
	<span class="fld-name">{{ name }} the {{ title }}</span>
	<span v-if="gclass">{{ gclass }}</span>
	<span v-if="level>0">level {{ level }}</span>
	<span v-if="char.fame>0">notoriety: {{ char.fame }}</span>
	<span v-if="char.titles>0">titles: {{ char.titles }}</span>
	</div>
	<div v-else class="char-stats">
		<span class="fld-name">Chair Empty</span>
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
	padding: var(--rg-padding);
	border-radius: 4px;
	min-height: 220px;
	width:175px;

	justify-content: space-between;

}

div.char-info .fld-name {
	text-align: center;
	width:100%;
	font-size: 1.02rem;
	margin-bottom: var(--md-padding );
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
	background-color: var( --odd-list-color );
}

div.char-stats {

	display:flex;
	flex-flow: column nowrap;

}



</style>