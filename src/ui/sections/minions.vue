<script>
import Game from '../../game';

import ItemsBase from '../itemsBase';
import FilterBox from '../components/filterbox.vue';

export default {

	data(){
		return {
			filtered:null,
			minions:Game.state.minions
		};
	},
	mixins:[ItemsBase],
	components:{
		filterbox:FilterBox
	},
	computed:{

		inRaid() { return Game.state.raid.running },

		items(){ return this.minions.filter( v=>v.value>=1 ); },

		rezList(){return Game.state.getTagList('rez').filter(v=>v.owned&&!v.disabled);}

	},
	methods:{

		/**
		 * Get list of ressurect spells which can be applied to b.
		 * @param {Npc}
		 */
		rezzes(b){
			return this.rezList.filter(v=>v.canUseOn(b) );
		},

		/**
		 * Use resurrect spell on minion.
		 * @param {Spell}
		 * @param {Npc}
		 */
		useRez( rez, b) {

			Game.tryItem(rez);
			b.hp =1;

		},

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

			if ( v === undefined || v=== null ) return 0;
			return ( (typeof v === 'object') ? v.value : v ).toFixed(1);

		}

	}

}
</script>

<template>

<div class="minions">

	<filterbox v-model="filtered" :items="items" min-items="10" />

	<div v-if="inRaid" class="warn-text">Cannot change active minions while adventuring</div>
	<div class="minion-title">
		<span>{{ minions.count + ' / ' + Math.floor(minions.max) + ' Used' }}</span>
		<span>Allies Power: {{ minions.allyTotal.toFixed(2) + ' / ' + Math.floor( minions.maxAllies.value ) }}</span></div>

	<div class="char-list">
	<table>
		<tr><th>Creature</th><th class="num-align">Hp</th><th>active</th><th>actions</th></tr>
		<tr class="char-row" v-for="b in filtered" :key="b.id" @mouseenter.capture.stop="emit( 'itemover',$event,b)">
			<th><input class="fld-name" type="text" v-model="b.name"></th>
			<td class="num-align">{{ toNum(b.hp) }} / {{ toNum( b.hp.max ) }}</td>

			<td v-if="!b.alive">
				<span>Dead</span>

			</td>
			<td v-else>
				<button @click="toggleActive(b)" :disabled="inRaid||( levelCap(b)&&!b.active )">{{ b.active === true ? 'Rest' : 'Activate' }}</button>
			</td>
			<td v-if="!b.alive">
				<button class="rez" v-for="r in rezzes(b)" :key="r.id" :disabled="!usable(r)" @click="useRez(r,b)">{{ r.name }}</button>
				<confirm @confirm="dismiss(b)">{{ 'Dismiss'}}</confirm>
			</td>

		</tr>
	</table>
	</div>

</div>

</template>

<style scoped>

div.minions .rez {
	text-transform: capitalize;
}

div.minions .minion-title {
	display:flex;
	width: 380px;
	justify-content: space-between;
}

div.minions .warn-text {
	margin-bottom: var( --sm-gap );
}
div.minions {
	padding-left:16px;
	padding-top: var( --tiny-gap );
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