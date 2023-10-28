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
		this.game = Game;
		this.state = Game.state;
		this.runner = this.state.runner;
		this.inv = this.state.getData('inventory');
		this.enchantSlots = this.state.getData(ENCHANTSLOTS);
	},
	methods:{

		begin(it,target ) {

			/** @note test here for successful add to enchants? */
			this.emit('enchant', it, target )

			this.inv.remove(target);
			this.target = null;

		},

		clearTarget(){
			this.target = null;
		},

		resume(){
			Game.toggleTask(this.enchantSlots);
		},

		canAlter( it, targ ) {
			return targ&&it.canAlter(targ)&& this.enchantSlots.canAdd(it);
		}

	},
	computed:{

		enchants(){
			return this.state.filterItems( it=>it.type==='enchant' && !this.locked(it) );
		},

		/**
		 * Enchants usable for selected item.
		 */
		usable(){

			let t = this.target;
			if ( !t ) return this.filtered;

			return this.filtered.filter( it=>!it.owned|| this.canAlter(it, t ) );

		}

	}

}
</script>

<template>

		<div class="enchants">

		<div class="separate">
		<div>
			<div @mouseenter.capture.stop="itemOver( $event, target )">Target: {{ target ? target.name.toTitleCase() : 'None' }}</div>
			<div class="note-text">Enchantment levels on an Item cannot exceed Item's enchant slots.</div>
		</div>

		<span><button :disabled="enchantSlots.count==0" @click="resume">{{ runner.has(enchantSlots) ? 'Pause' : 'Resume' }}</button></span>

		</div>

		<eslots class="eslots" :eslots="enchantSlots" :inv="inv" />

		<div class="separate">

		<div class="filtered">
		<div v-if="target"><button class="stop" @click="clearTarget">X</button>{{ target.name.toTitleCase() }}</div>
		<filterbox v-model="filtered" :items="enchants" min-items="7" />

		<div class="enchant-list">
		<div class='enchant' v-for="it in usable" :key="it.id" @mouseenter.capture.stop="itemOver( $event,it)">

			<span class="ench-name">{{ it.name.toTitleCase() }}</span>


			<button v-if="it.buy&&!it.owned" :disabled="!it.canBuy(game)"
				@click="emit('buy', it)">🔒</button>

			<button v-else @click="begin(it,target)" :disabled="!it.canUse()">Enchant</button>

		</div>
		</div>
		</div>

		<inv selecting=true :inv="state.inventory" v-model="target" :types="['armor','weapon']" hide-space="true" />
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