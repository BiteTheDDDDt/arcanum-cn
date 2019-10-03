<script>
import Game from '../../game';
import ItemBase from '../itemsBase';
import Range from '../../values/range';
import FilterBox from '../components/filterbox.vue';
import { TRY_BUY } from '../../events';

export default {

	mixins:[ItemBase],
	data(){
		return {
			filtered:null
		};
	},
	components:{
		filterbox:FilterBox
	},
	created() {
		this.TRY_BUY = TRY_BUY;
	},
	methods:{

		showHp(m) {
			return this.totalLore >= 4*m.level;
		},

		toNum(v) {
			return ( typeof v === 'object' ?
				( v instanceof Range ? v.max : v.value ) : v ).toFixed(0);
		}

	},
	computed:{

		minions(){return Game.state.minions; },

		totalLore() { return this.animals.value + this.lore.value + this.demonology.value; },

		animals() { return Game.state.getData('animals');},

		lore() { return Game.state.getData('lore');},

		demonology() { return Game.state.getData('demonology');},

		items(){
			return Game.state.monsters.filter( v=>v.value>=1 ).sort(
				(a,b)=>a.level - b.level
			);
		}

	}

}
</script>

<template>

<div class="bestiary">

	<filterbox v-model="filtered" :items="items" min-items="14" />

	<div class="char-list">
	<table class="bestiary">
		<tr><th>Creature</th><th>Level</th><th>Slain</th><th class="num-align">Hp</th></tr>
		<tr v-for="b in filtered" :key="b.id" @mouseenter.capture.stop="emit( 'itemover',$event,b)">
			<th>{{ b.name }}</th>
			<td class="num-align">{{ b.level }}</td>
			<td class="num-align">{{ b.value }}</td>
			<td class="num-align">{{ showHp(b) ? toNum(b.hp) : '??' }}</td>
			<td><button @click="emit( TRY_BUY,b)" :disabled="b.unique||!buyable(b)||minions.freeSpace()==0||b.value<10">Buy</button></td>
		</tr>
	</table>
	</div>

</div>

</template>

<style scoped>

div.bestiary {
display:flex;
flex-direction: column;
margin-left:12px;
height:100%;
}

.char-list {
	width:100%;
	overflow-y:auto;
	margin-bottom:14px;
}

table {
	border-spacing: 4px 0px;
	border-collapse: collapse;
	row-gap: 4px;
	column-gap: 10px;
}

tr:first-child th {
	border-bottom: 1pt solid black;
	margin: 4px 4px;
}

tr > th:first-of-type {
	text-align: left;
}

th {
	padding: 4px 10px;
}

td.num-align {
	padding: 8px;
}

</style>