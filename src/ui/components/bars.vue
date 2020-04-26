<script>
import ProgBar from 'ui/components/progbar.vue';
import Settings from 'modules/settings';

import Game from '../../game';
import UIMixin from '../uiMixin';
import ItemBase from '../itemsBase';


/**
 * Display the progress bars listed.
 */
export default {

	props:[ 'bars'],
	mixins:[ItemBase, UIMixin],
	components:{
		progbar:ProgBar
	},
	data(){

		let ops = Settings.getSubVars('bars');
		if ( !ops.hide ) ops.hide = {};

		return {
			hide:ops.hide
		}

	},

	computed:{

		baseItems(){

			let res = [];

			let a = this.bars;
			for( let i = a.length-1; i>= 0; i-- ) {

				var it = Game.getData(a[i]);
				if ( it ) res.push(it);

			}

			return res;

		},

		itemList(){
			return this.baseItems.filter(v=>this.show(v))
		}

	}

}
</script>

<template>

	<!-- anything not table is a headache -->
	<table class="bars">

		<tr class="hidable" v-for="it in itemList" :key="it.key" :data-key="it.id">
			<td>{{it.name}}</td><td colspan="2"><progbar :value="it.valueOf()" :class="it.id" :max="it.max.value" :color="it.color"
			@mouseenter.native.capture.stop="itemOver($event,it)"/></td></tr>

	</table>

</template>

<style scoped>

	.bars {
		display: flex; flex-flow: column;
		width: -moz-available;
		width:-webkit-fill-available;
	}

    .bars tr { display: flex; align-items: center; }
    .bars tr td:nth-child(2) div { display: flex; flex-flow: column; justify-content: center; }
    .bars tr:first-child { min-height: 4em; }
    .bars tr:not(:first-child) { padding: var(--sm-gap) var(--sm-gap); }
	.bars tr td:nth-child(1) { flex-basis: 50%; }

table .td-prog {
	columns: 2;
}

tr td:first-child {
	max-width: 33%;
}

tr td:last-child {
	width:100%;
}

</style>
