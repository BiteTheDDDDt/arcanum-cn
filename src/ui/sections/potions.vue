<script>
import Game from '../../game';

import FilterBox from '../components/filterbox.vue';
import ItemsBase from '../itemsBase';
import {TRY_BUY} from '../../events';

export default {

	mixins:[ItemsBase],
	data(){

		return {
			/**
			 * @property {Item[]} filtered - filtered search results.
			 */
			filtered:null
		}
	},

	components:{
		inv:()=>import( /* webpackChunkName: "inv-ui" */ './inventory.vue'),
		filterbox:FilterBox
	},
	beforeCreate(){
		this.game = Game
		this.TRY_BUY = TRY_BUY;
	},
	computed:{

		potions(){ return Game.state.potions.filter(v=>!this.locked(v)); }

	}

}
</script>

<template>
<div class="potions">

		<filterbox v-model="filtered" :items="potions" min-items="7" />

		<div class="potion-col">
		<div v-for="it in filtered" class="separate" :key="it.id" @mouseenter.capture.stop="emit( 'itemover', $event,it)">

			<span>{{ it.name }}</span>

			<button v-if="it.buy&&!it.owned" :disabled="!buyable(it)"
				@click="emit('buy', it)">Unlock</button>
			<button v-else :disabled="!usable(it)"
				@click="emit( 'craft', it )">Brew</button>

		</div>

		</div>

</div>
</template>


<style scoped>

div.potions .potion-col {
	display:grid;
	grid-template-columns: repeat( auto-fit, minmax(256px, 0.5fr));
	column-gap: var(--lg-gap);
	overflow-x:hidden;
	width:100%;
}

div.flex-col .separate {
	width:48%;
}

div.potions {
	padding: 0px 16px;

}

</style>