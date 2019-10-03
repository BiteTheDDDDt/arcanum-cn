<script>
import Game from '../../game';

import FilterBox from '../components/filterbox.vue';

export default {

	data(){
		return {
			filtered:null
		};
	},
	components:{
		filterbox:FilterBox
	},
	computed:{

		inRaid() { return Game.state.raid.running },

		minions(){ return Game.state.minions; },

		items(){ return this.minions.filter( v=>v.value>=1 ); },

	},
	methods:{

		levelCap(b){
			return b.level + this.minions.allyTotal > this.minions.maxAllies;
		},

		toggleActive(b) {
			this.minions.setActive( b, !b.active );
		},

		dismiss(b){
			this.minions.remove(b);
		},

		toNum(v) {
			if ( v === undefined ) return 0;
			return ( (v && typeof v === 'object') ? v.value : v ).toFixed(1);
		}

	}

}
</script>

<template>

<div class="minions">

	<filterbox v-model="filtered" :items="items" min-items="10" />

	<span v-if="inRaid" class="warn-text">Cannot change active minions while adventuring</span>
	<div class="minion-title">
		<span>{{ minions.count + ' / ' + Math.floor(minions.max) + ' Used' }}</span>
		<span>Allies Power: {{ minions.allyTotal.toFixed(2) + ' / ' + Math.floor( minions.maxAllies.value ) }}</span></div>

	<div class="char-list">
	<table>
		<tr><th>Creature</th><th class="num-align">Hp</th><th>active</th></tr>
		<tr class="char-row" v-for="b in filtered" :key="b.id" @mouseenter.capture.stop="emit( 'itemover',$event,b)">
			<th><input class="fld-name" type="text" v-model="b.name"></th>
			<td class="num-align">{{ toNum(b.hp) }} / {{ toNum( b.maxHp ) }}</td>

			<td v-if="!b.alive">Dead</td>
			<td v-else>
				<button @click="toggleActive(b)" :disabled="inRaid||( levelCap(b)&&!b.active )">{{ b.active === true ? 'Rest' : 'Activate' }}</button>
			</td>

			<td><confirm @confirm="dismiss(b)">{{ 'Dismiss'}}</confirm></td>
		</tr>
	</table>
	</div>

</div>

</template>

<style scoped>

div.minions .minion-title {
	display:flex;
	width: 380px;
	justify-content: space-between;
}

div.minions {
	padding-left:16px;
	height:100%;
}

.char-list {
	height:85%;
	overflow-y:auto;
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