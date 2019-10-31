<script>
import Game from '../../game';
import FilterBox from '../components/filterbox.vue';
import { USE } from '../../events';

export default {

	/**
	 * @property {Inventory} inv - the inventory object.
	 * @property {boolean} take - whether to display take button.
	 */
	props:['inv', 'take', 'value', 'selecting', 'nosearch'],
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

			let items = this.inv.removeAll();
			for( let i = items.length-1; i>=0; i-- ){
				this.emit( 'sell', items[i], null, items[i].value);
			}

		},

		count(it) { return it.value > 1 ? ' (' + Math.floor(it.value) + ')': ''; },
		drop( it ){
			this.inv.remove(it);
		},

		/**
		 * Test if item can be added to inventory.
		 */
		canAdd(it) {
			return this.inv.canAdd(it);
		},

		onTake(it) {

			//console.log('start take: ' + it.id );
			this.emit('take', it );
			this.inv.remove(it);

		}

	},
	computed:{

		playerInv(){ return this.inv === Game.state.inventory; },
		playerFull(){
			return Game.state.inventory.full();
		}
	}

}
</script>


<template>
<div class="inventory">
	<div>
	<filterbox v-if="!nosearch" v-model="filtered" :items="inv.items" min-items="7" />

	<span class="flex-row">
		<div v-if="inv.max > 0">{{ inv.items.length + ' / ' + Math.floor(inv.max.value ) + ' Used' }}</div>
		<button v-if="inv.count>0" @click="sellAll">Sell All</button>
	</span>
	</div>
	<div class="item-table">


	<tr class="separate" v-for="it in ( nosearch ? inv.items : filtered )" :key="it.id">
		<td @mouseenter.capture.stop="emit( 'itemover',$event,it)">{{ it.name + count(it) }}</td>


		<template v-if="!selecting">

			<td v-if="it.equippable"><button @click="emit('equip',it, inv)">Equip</button></td>
			<td v-if="it.use"><button @click="emit( USE, it)">Use</button></td>
			<td v-if="take&&canAdd(it)"><button @click="onTake(it)">Take</button></td>

			<td>
			<button @click="emit('sell',it,inv)" @mouseenter.capture.stop="emit( 'itemover',$event,it)">Sell</button>
			<button v-if="it.value>1" @click="emit('sell',it,inv, it.value)" @mouseenter.capture.stop="emit( 'itemover',$event,it)">Sell All</button>
				<!--<button v-else @click="drop(it)">Drop</button>--></td>

		</template>
		<template v-else>
			<td><button :disabled="it.busy" @click="$emit('input', it)">Select</button></td>
		</template>
	</tr>
</div>

<div v-if="playerFull" class="warn-text">Player inventory full</div>
</div>
</template>


<style scoped>

div.inventory {
	display:flex;
	flex-direction: column;
	width:100%;
	height:100%;
}

div.inventory .table-div {
	display: grid; grid-template-columns: 1fr 1fr;
	flex-grow: 1;
	height:100%;
}
div.inventory .item-table {
	flex-grow: 1;
		overflow-y: auto;
		margin: 0;
		display: grid; grid-template-columns: repeat( auto-fit, minmax( 256px, 1fr ));
		 grid-auto-rows: min-content;

    }
div.inventory .item-table tr {
        padding: var(--sm-gap); align-items: center;
    }
div.inventory .item-table tr :first-child { flex: 1; }
div.inventory .item-table tr button { margin: var(--tiny-gap); }
div.inventory .item-table td { display: flex; padding: 0; }



.flex-row {
	align-items:center;
	justify-content: flex-start;
	padding-left: var(--sm-gap);
	padding-top: var(--tiny-gap);
}
.flex-row div {
	margin-right: 12px;
}


</style>