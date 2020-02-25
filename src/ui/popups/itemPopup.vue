<script>
import Game from 'game';

import ItemView from 'ui/items/gdata.vue';
import {positionAt} from './popups.js';

/**
 * Information about current rollover object.
 */
export const RollOver = {

	item:null,
	elm:null,
	title:null,
	source:null

};

export const ItemOver = ( evt, it, source, title ) => {

	RollOver.item = it;
	RollOver.elm = evt.currentTarget;
	RollOver.source = source;

	if ( source && source.context ) {
		RollOver.context = source.context;
	} else RollOver.context = Game;

	RollOver.title = title;
}

export const ItemOut = () => {
	RollOver.item = null;
	RollOver.elm = null;
	RollOver.source = null;
	RollOver.title = null;
	RollOver.context = null;
}

/**
 * Box for displaying item information.
 */
export default {

	data(){
		return RollOver;
	},

	updated() {
		// waiting for width to change before reposition.
		if ( this.item ) {
			positionAt( this.$el, this.elm );
		}
	},
	components:{ gdata:ItemView }

}
</script>


<template>

	<div class="item-popup" v-show="item!=null">
		<div class="popup-content">
		<div v-if="title" class="pop-title">{{ title }}</div>
		<template v-if="Array.isArray(item)">

			<div v-for="t in item" :key="t">{{ t.toString() }}</div>

		</template>
		<template v-else>
			<gdata v-if="item" :item="item" />
		</template>
		</div>
	</div>

</template>

<style scoped>

div.pop-title {

	font-weight: bold;
	border-bottom: 1px solid black;
	margin-bottom: var(--md-gap);

}

.popup-content {
	padding: var(--md-gap);
}

</style>