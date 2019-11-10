<script>
import Game from '../../game';
import ItemBase from '../itemsBase';
import Range from '../../values/range';
import FilterBox from '../components/filterbox.vue';
import { TRY_BUY } from '../../events';
import { npcBuy } from 'modules/craft';
import { TYP_RANGE } from '../../values/consts';

export default {

	mixins:[ItemBase],
	data(){
		return {
			filtered:null,
			sortBy:'level',
			sortOrder:1
		};
	},
	components:{
		filterbox:FilterBox
	},
	created() {
		this.TRY_BUY = TRY_BUY;
	},
	methods:{

		showHp(m) { return this.totalLore >= 4*m.level; },

		toNum(v) {
			return ( typeof v === 'object' ?
				( v.type === TYP_RANGE ? v.max : v.value ) : v ).toFixed(0);
		},

		setSort( by ) {

			if ( this.sortBy === by ) {
				this.sortOrder = -this.sortOrder;
			} else this.sortBy = by;

		}

	},
	computed:{

		minions(){return Game.state.minions; },

		totalLore() { return this.animals.value + this.lore.value + this.demonology.value; },

		animals() { return Game.state.getData('animals');},

		lore() { return Game.state.getData('lore');},

		demonology() { return Game.state.getData('demonology');},

		allItems(){

			let all = Game.state.monsters;
			var a = [];

			for( let i = all.length-1; i>=0; i-- ) {

				var it = all[i];
				if ( it.value <= 0 ) continue;
				if ( !it.buy ) it.buy = npcBuy( it );
				a.push(it);

			}

			return a;

		},

		sorted(){

			let by = this.sortBy;
			let order = this.sortOrder;
			let v1,v2;

			return ( this.filtered || this.allItems ).sort(
				(a,b)=> {

					v1 = a[by];
					v2 = b[by];
					if ( v1 > v2 ) return order;
					else if ( v2 > v1 ) return -order;
					else return 0;

				}

			);
		}


	}

}
</script>

<template>

<div class="bestiary">

	<filterbox v-model="filtered" :items="allItems" min-items="14" />

	<div class="char-list">
	<table class="bestiary">
		<tr>
			<th @click="setSort('name')">Creature</th>
			<th @click="setSort('level')">Level</th>
			<th @click="setSort('value')">Slain</th>
			<th class="num-align" @click="setSort('hp')">Hp</th></tr>
		<tr v-for="b in sorted" :key="b.id" @mouseenter.capture.stop="emit( 'itemover',$event,b)">
			<th class="sm-name">{{ b.name }}</th>
			<td class="num-align">{{ Math.floor( b.level ) }}</td>
			<td class="num-align">{{ Math.floor( b.value ) }}</td>
			<td class="num-align">{{ showHp(b) ? toNum(b.hp) : '???' }}</td>
			<td><button @click="emit( TRY_BUY,b)" :disabled="b.unique||!buyable(b)||minions.freeSpace()==0||b.value<10">Buy</button></td>
		</tr>
	</table>
	</div>

</div>

</template>

<style scoped>

tr th {
	cursor: pointer;
	text-decoration: underline;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
}

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