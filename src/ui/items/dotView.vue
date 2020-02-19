<script>
import { abbr } from 'util/format.js';
import ItemBase from 'ui/itemsBase';

/**
 * Actual dot display in combat/hud.
 */
export default {

	props:['dots', 'mini', 'char'],
	mixins:[ItemBase],
	beforeCreate(){
		this.abbr = abbr;
	}

}
</script>

<template>

	<div class="dot-view" v-if="dots.length>0">

		<div :class="['dot',d.kind, d.school, mini ? 'mini':'']" v-for="d in dots" :key="d.id"
		@mouseenter.capture.stop="itemOver( $event, d, char )">

			<span v-if="!d.perm">{{ Math.ceil( d.duration ) }}</span>
			<span v-if="!mini"><br>{{ mini ? abbr( d ) : d.name }}</span>

			<div v-if="d.kind||d.school" class="bgfill" >&nbsp;</div>

		</div>

	</div>

</template>

<style scoped>

div.dot-view {
	display:flex;
	position:relative;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-around;
	border: 1px solid var(--very-quiet-text-color);
	overflow-x: hidden;
	overflow-y: visible;
	height:100%;
}
div.dot-view .dot {
	flex: 1; margin: 0; font-size: 0.75em; text-overflow: ellipsis; white-space: nowrap;
	border: none;
	outline: 1px solid var(--very-quiet-text-color);
	position: relative;
	text-align: center;
	padding:var(--sm-gap);
	background: unset;
}

	div.dot-view span.mini {
		display:flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	div.mini {
		width:auto;
		font-size: 0.7em;
		padding:0;
	}

</style>
