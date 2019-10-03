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

		<div class="flex-row separate">

		<div class="flex-col">
		<div v-for="it in filtered" :key="it.id" @mouseenter.capture.stop="emit( 'itemover', $event,it)">

			{{ it.name }}

			<button v-if="it.buy&&!it.owned" :disabled="!buyable(it)"
				@click="emit('buy', it)">Unlock</button>

			<button v-else :disabled="!usable(it)"
				@click="emit( 'craft', it )">Brew</button>

		</div>
		</div>

		</div>

</div>
</template>


<style scoped>

div.potions {
	padding: 0px 16px;
	height:100%;
	overflow-y:auto;
}

</style>