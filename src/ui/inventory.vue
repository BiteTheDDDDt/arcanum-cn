<script>
import Game from '../game';
import FilterBox from './components/filterbox.vue';
import { USE } from '../events';

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
	created() {
		this.USE = USE;
	},
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
<div>
	<filterbox v-if="!nosearch" v-model="filtered" :items="inv.items" min-items="10" />

	<div class="flex-row">
		<div v-if="inv.max > 0">{{ inv.items.length + ' / ' + Math.floor(inv.max.value ) + ' Used' }}</div>
		<button v-if="inv.count>0" @click="sellAll">Sell All</button>
	</div>
<table class="inv item-table">

	<tr v-for="it in ( nosearch ? inv.items : filtered )" :key="it.id">
		<td @mouseenter.capture.stop="emit( 'itemover',$event,it)">{{ it.name + count(it) }}</td>


		<template v-if="!selecting">

			<td v-if="it.equippable"><button @click="emit('equip',it, inv)">Equip</button></td>
			<td v-if="it.use"><button @click="emit( USE, it)">Use</button></td>
			<td v-if="take&&!playerFull"><button @click="onTake(it)">Take</button></td>

			<td>
			<button @click="emit('sell',it,inv)" @mouseenter.capture.stop="emit( 'itemover',$event,it)">Sell</button>
			<button v-if="it.value>1" @click="emit('sell',it,inv, it.value)" @mouseenter.capture.stop="emit( 'itemover',$event,it)">Sell All</button>
				<!--<button v-else @click="drop(it)">Drop</button>--></td>

		</template>
		<template v-else>
			<td><button @click="$emit('input', it)">Select</button></td>
		</template>
	</tr>
</table>
<div v-if="playerFull" class="warn-text">Player inventory full</div>
</div>
</template>


<style scoped>

.flex-row {
	align-items:center;
	justify-content: flex-start;
}
.flex-row div {
	margin-right: 12px;
}

.inv {
	width:auto;
}


</style>