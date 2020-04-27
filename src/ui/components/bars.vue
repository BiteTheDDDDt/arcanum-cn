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
	<div class="bars">

		<div class="hidable entry" v-for="it in itemList" :key="it.key" :data-key="it.id">
			<span class="name">{{it.name}}</span><span><progbar :value="it.valueOf()" :class="it.id" :max="it.max.value" :color="it.color"
			@mouseenter.native.capture.stop="itemOver($event,it)"/></span></div>

	</div>

</template>

<style scoped>

	.bars {
		display: flex; flex-flow: column;
		width: -moz-available;
		width:-webkit-fill-available;
	}

    .bars .entry { display: flex; width: 50%; }

</style>
