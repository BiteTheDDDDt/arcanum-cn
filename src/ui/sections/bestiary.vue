<script>
import Game from '../../game';
import ItemBase from '../itemsBase';
import Range from '../../values/range';
import FilterBox from '../components/filterbox.vue';
import { TRY_USE } from '../../events';
import { npcCost } from 'modules/craft';
import { TYP_RANGE } from 'values/consts';
import { NpcLoreLevels } from 'values/craftVars';

export default {

	mixins:[ItemBase],
	data(){
		return {
			filtered:null,
			sortBy:'level',
			sortOrder:1,
			loreLevels:{
			}

		};
	},
	components:{
		filterbox:FilterBox
	},
	beforeCreate(){
		this.game = Game;
	},
	methods:{

		tryUse(m){
			this.emit( TRY_USE, m );
		},

		loreLevel(m){
			let lore = this.loreLevels[m.kind];
			if ( lore === undefined ) lore = this.$set( this.loreLevels, m.kind, NpcLoreLevels(m.kind, Game ));
			return lore;
		},

		showHp(m) {
			return this.loreLevel(m) >= 4*m.level;

		},

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

		allItems(){

			let all = Game.state.monsters;
			for( let i = all.length-1; i>=0; i-- ) {
				all[i].name = all[i].name.toTitleCase()
			}
			var a = [];

			for( let i = all.length-1; i>=0; i-- ) {

				var it = all[i];
				if ( it.value <= 0 ) continue;
				if ( !it.cost ) this.$set( it, 'cost', npcCost(it));
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
			<th class="table-head" @click="setSort('name')">Creature</th>
			<th class="table-head" @click="setSort('level')">Level</th>
			<th class="table-head" @click="setSort('value')">Slain</th>
			<th class="num-align table-head" @click="setSort('hp')">Hp</th></tr>
		<tr v-for="b in sorted" :key="b.id" @mouseenter.capture.stop="itemOver($event,b)">
			<th class="lg-name">{{ b.name }}</th>
			<td class="num-align">{{ Math.floor( b.level ) }}</td>
			<td class="num-align">{{ Math.floor( b.value ) }}</td>
			<td class="num-align">{{ showHp(b) ? toNum(b.hp) : '???' }}</td>
			<td><button @click="tryUse(b)" :disabled="b.unique||!b.canUse(game)||minions.freeSpace()==0">Buy</button></td>
		</tr>
	</table>
	</div>

</div>

</template>

<style scoped>

tr .table-head {
	cursor: pointer;
	text-decoration: underline;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
}

div.bestiary {
display:flex;
flex-direction: column;
margin-left:0.9em;
padding:0;
margin:0;
}

.char-list {
	width:100%;
	padding: 0; margin: 0;
	overflow-y:auto;
	margin-bottom:1rem;
}

table.bestiary {
	border-spacing: var(--sm-gap) 0;
	border-collapse: collapse;
	row-gap: var(--sm-gap);
	column-gap: var(--md-gap);
}

tr:first-child .table-head {
	border-bottom: 1pt solid black;
	margin:var(--sm-gap);
}


.table-head {
	padding: var(--sm-gap) var(--md-gap);
}

td.num-align {
	padding: var(--md-gap);
}

</style>