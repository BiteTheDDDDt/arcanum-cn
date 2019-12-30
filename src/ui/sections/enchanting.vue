<script>
import Game from 'game';
import {ENCHANTSLOTS} from 'values/consts';
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
		this.inv = this.state.getData('inventory');
		this.enchantSlots = this.state.getData(ENCHANTSLOTS);
		console.log( 'max: ' + this.enchantSlots.max );

	},
	methods:{

		begin(it,target ) {

			/** @note test here for successful add to enchants? */
			this.emit('enchant', it, target )

			this.inv.remove(target);

		},

		canUseOn( it, targ ) {
			return targ&&it.canUseOn(targ)&& this.enchantSlots.canAdd(it)&&this.usable(it);
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

		<eslots class="eslots" :eslots="enchantSlots" :inv="inv" />

		<div class="separate">

		<div class="filtered">
		<filterbox v-model="filtered" :items="enchants" min-items="7" />

		<div class="enchant-list">
		<div class='enchant' v-for="it in filtered" :key="it.id" @mouseenter.capture.stop="emit( 'itemover', $event,it)">

			<span class="ench-name">{{ it.name }}</span>

			<button v-if="it.buy&&!it.owned" :disabled="!buyable(it)"
				@click="emit('buy', it)">Unlock</button>

			<button v-else :disabled="!canUseOn(it,target)"
				@click="begin(it,target)">Enchant</button>

		</div>
		</div>
		</div>

		<inv selecting=true :inv="state.inventory" v-model="target" hide-space="true" />
		</div>

	</div>

</template>

<style scoped>

div.enchants {
	display:flex;
	flex-direction: column;
	padding:0 1rem;
	height:100%;
	margin-top: var(--sm-gap);
}

div.enchants .eslots {
	padding-bottom: var(--sm-gap);
	border-bottom: 1pt solid var(--separator-color);
}

div.enchants .filtered {
	padding-top: var(--sm-gap);
	display:flex;
	flex-flow: column;
	margin-right: var(--md-gap);
	border-right: 1px solid var(--separator-color);
}


div.enchants .enchant-list {
	display:flex;
	flex-flow: column nowrap;
	flex:1;
}

div.enchants .separate {
	align-items:flex-start;
}

div.enchants .enchant-list > div.enchant {
	display:flex;
	width:100%;
	justify-content: space-between;
	flex-direction: row;
}

div.enchants .enchant-list  .ench-name {
	min-width: 5rem;
}


</style>