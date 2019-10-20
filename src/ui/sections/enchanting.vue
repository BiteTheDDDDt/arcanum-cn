<script>
import Game from '../../game';

import FilterBox from '../components/filterbox.vue';
import ItemsBase from '../itemsBase';

export default {

	mixins:[ItemsBase],
	components:{
		filterbox:FilterBox,
		inv:()=>import( /* webpackChunkName: "inv-ui" */ './inventory.vue')
	},
	data() {

		return {
			/**
			 * @property {Item[]} filtered - filtered search results.
			 */
			filtered:null,
			/**
			 * @property {Item} target - current enchant target.
			 */
			target:null
		}
	},
	beforeCreate(){
		this.state = Game.state;
		this.runner = this.state.runner;
	},
	methods:{

		canApply( it, targ ) {
			return targ&&it.canApply(targ)&& this.usable(it);
		}

	},
	computed:{

		enchants(){
			return this.state.filterItems( it=>it.type==='enchant' && !this.locked(it) );
		}

	}

}
</script>

<template>

		<div class="enchants">

		<div><div @mouseenter.capture.stop="emit( 'itemover', $event, target )">
			Target: {{ target ? target.name : 'None' }}
		</div>
		<span class="note-text">Items can only be enchanted with enchantments of equal or lower level.</span>
		</div>

		<div class="separate">

		<div class="filtered">
		<filterbox v-model="filtered" :items="enchants" min-items="7" />

		<div class="enchant-list">
		<div class='enchant' v-for="it in filtered" :key="it.id" @mouseenter.capture.stop="emit( 'itemover', $event,it)">

			<span class="ench-name">{{ it.name }}</span>

			<button v-if="it.buy&&!it.owned" :disabled="!buyable(it)"
				@click="emit('buy', it)">Unlock</button>

			<button v-else :disabled="!canApply(it,target)"
				@click="emit( 'enchant', it, target )">Enchant</button>

		</div>
		</div>
		</div>

		<inv selecting=true :inv="state.inventory" v-model="target" />
		</div>

	</div>

</template>

<style scoped>

div.enchants .enchant-list {
	display:flex;
	flex-flow: column nowrap;
	flex:1;
}

div.enchants .filtered {
	display:flex;
	flex-flow: column;
}

div.enchants .enchant-list > div.enchant {
	display:flex;
	width:100%;
	flex-direction: row;
}

div.enchants .enchant-list  .ench-name {
	flex-basis: 25%;
	min-width: 132px;
}

div.enchants {
	display:flex;
	flex-direction: column;
	padding:0px 16px;
	overflow-y:auto;
	height:100%;
}

</style>}