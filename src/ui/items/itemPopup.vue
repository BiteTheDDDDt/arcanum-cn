<script>
import Game from '../../game';

import ItemView from './gdata.vue';
import {positionAt} from '../components/popups.js';


/**
 * Box for displaying item information.
 */
export default {

	/**
	 * @property {boolean} sell - if the pane is a sell-view.
	 *
	 * @property {string} title - optional custom title
	 */
	props:["item", "elm", 'sell', 'title'],
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
	margin-bottom: 8px;

}

.item-popup {
	height:auto;
	min-height:100px;
	min-width:200px;
	max-width:280px;
	position: absolute;
	z-index: var(--md-high);
	top:0;
	opacity: 0.9;
	background:inherit;
	border: 1.5px solid rgb( 100, 100,100);
	border-radius: 0.20rem;
}
.popup-content {
	padding: 10px;
}

</style>