<script>
import Game from '../../game';
import FilterBox from '../components/filterbox.vue';
import { USE } from '../../events';

export default {

	/**
	 * @property {Inventory} inv - the inventory object.
	 * @property {boolean} take - whether to display take button.
	 * @property {boolean} selecting - inventory is selection only. sell-all & size information hidden.
	 * @property {string[]} types - item types to display.
	 */
	props:['inv', 'take', 'value', 'selecting', 'nosearch', 'types'],
	data() {
		return {
			filtered:null
		}
	},
	created() { this.USE = USE; },
	components:{
		filterbox:FilterBox
	},
	methods:{

		sellAll(){

			let items = this.filtered;// this.inv.removeAll();
			for( let i = items.length-1; i>=0; i-- ){
				this.emit( 'sell', items[i], this.inv, items[i].value);
			}
			//this.$refs.filter.clear();

		},

		count(it) { return it.count > 1 ? ' (' + Math.floor(it.count) + ')': ''; },
		drop( it ){ this.inv.remove(it); },

		/**
		 * Test if item can be added to USER inventory.
		 */
		canAdd(it) {
			return Game.state.inventory.canAdd(it);
		},

		onTake(it) {

			//console.log('start take: ' + it.id );
			this.emit('take', it );
			this.inv.remove(it);

		}

	},
	computed:{

		baseItems(){

			let types = this.types;
			if ( this.types ) {
				return this.inv.items.filter(it=>this.types.includes(it.type));
			}
			return this.inv.items;

		},

		playerInv(){ return this.inv === Game.state.inventory; },
		playerFull(){ return Game.state.inventory.full(); }
	}

}
</script>


<template>
<div class="inventory">

	<span class="top">
	<filterbox ref="filter" v-if="!nosearch" v-model="filtered" :items="baseItems" min-items="7" />
	<span v-if="!selecting">
		<span v-if="inv.max>0">{{ inv.items.length + ' / ' + Math.floor(inv.max.value ) + ' Used' }}</span>
		<button v-if="inv.count>0" @click="sellAll">Sell All</button>
	</span>
	</span>

	<div class="item-table">

	<div class="item separate" v-for="it in ( nosearch ? baseItems : filtered )" :key="it.id">
		<span class="item-name" @mouseenter.capture.stop="itemOver($event,it)">{{ it.name + count(it) }}</span>


		<template v-if="!selecting">

			<button v-if="it.equippable" class="item-action" @click="emit('equip',it, inv)">Equip</button>
			<button v-if="it.use" class="item-action" @mouseenter.capture.stop="itemOver($event,it)" @click="emit( USE, it, inv)">Use</button>
			<button v-if="take&&canAdd(it)" class="item-action" @click="onTake(it)">Take</button>

			<button class="item-action"  @click="emit('sell',it,inv)" @mouseenter.capture.stop="itemOver($event,it)">Sell</button>
			<button v-if="it.value>1" class="item-action"  @click="emit('sell',it,inv, it.value)" @mouseenter.capture.stop="itemOver($event,it)">Sell All</button>

		</template>
		<template v-else>
			<button class="item-action"  @click="$emit('input', it)">Select</button>
		</template>
	</div>
</div>

<div v-if="playerFull" class="warn-text">Inventory Full</div>
</div>
</template>


<style scoped>

.inventory {
	display:flex;
	flex-direction: column;
	width:100%;
	height:100%;
	min-height: 0;
}

.top {
	padding: var(--tiny-gap);
	padding-top: var(--sm-gap);
}

.filter-box {
	display:inline;
	font-size: 0.9rem;
}

/*.table-div {
	display: grid; grid-template-columns: 1fr 1fr;
	flex-grow: 1;
	height:100%;
}*/

.item-table {
	flex-grow: 1;
	flex-shrink: 1;
		overflow-y: auto;
		min-height: 0;
		margin: 0;
		padding:0;
		display: grid; grid-template-columns: repeat( auto-fit, minmax( 12rem, 1fr ));
		 grid-auto-rows: min-content;

    }

.item-name {
	flex-grow: 1;
}

.item-table .item {
	margin: var(--sm-gap);
        padding: var(--sm-gap); align-items: center;
    }

.item .item-action { margin: var(--tiny-gap); }


</style>