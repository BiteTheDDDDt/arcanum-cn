<script>
import Game from '../../game';

import EnchantSlots from '../items/enchantslots.vue';
import FilterBox from '../components/filterbox.vue';
import ItemsBase from '../itemsBase';

export default {

	mixins:[ItemsBase],
	components:{
		eslots:EnchantSlots,
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

		canUseOn( it, targ ) {
			return targ&&it.canUseOn(targ)&& this.usable(it);
		}

	},
	computed:{

		enchantSlots(){
			return this.state.getData('enchantSlots');
		},

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

		<eslots :eslots="state.enchantSlots" :inv="state.inventory" />

		<div class="separate">

		<div class="filtered">
		<filterbox v-model="filtered" :items="enchants" min-items="7" />

		<div class="enchant-list">
		<div class='enchant' v-for="it in filtered" :key="it.id" @mouseenter.capture.stop="emit( 'itemover', $event,it)">

			<span class="ench-name">{{ it.name }}</span>

			<button v-if="it.buy&&!it.owned" :disabled="!buyable(it)"
				@click="emit('buy', it)">Unlock</button>

			<button v-else :disabled="!canUseOn(it,target)"
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

div.enchants .separate {
	align-items:flex-start;
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
	min-width: 5rem;
}

div.enchants {
	display:flex;
	flex-direction: column;
	padding:0 1rem;
	overflow-y:auto;
	height:100%;
}

</style>}