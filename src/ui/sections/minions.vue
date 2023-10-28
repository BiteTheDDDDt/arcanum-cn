<script>
import Game from '../../game';

import ItemsBase from '../itemsBase';
import FilterBox from '../components/filterbox.vue';

export default {

	props:['minions'],
	data(){
		return {
			filtered:null
		};
	},
	mixins:[ItemsBase],
	components:{
		filterbox:FilterBox
	},
	computed:{

		allies() { return this.minions.allies;},

		inExplore() { return Game.state.explore.running },

		/*items(){ return this.minions.filter( v=>v.value>=1 ); },*/

		rezList(){return Game.state.getTagSet('rez').filter(v=>v.owned&&!v.disabled);}

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
			b.hp.set(1);

		},

		/**
		 * Toggle whether or not minion is an active ally.
		 */
		toggleActive(b) {
			this.minions.setActive( b, !b.active );
		},

		dismiss(b){
			this.minions.remove(b);
		},

		/** @todo: shared display funcs. */
		toNum(v) {

			if ( v === undefined || v=== null ) return 0;
			return ( (typeof v === 'object') ? v.value : v ).toFixed(1);

		}

	}

}
</script>

<template>

<div class="minions">

	<filterbox v-model="filtered" :items="this.minions.items" min-items="10" />

	<div v-if="inExplore" class="warn-text">Cannot change active minions while adventuring</div>
	<div class="minion-title">
		<span>Total Minions: {{ minions.count + ' / ' + Math.floor(minions.max) }}</span>
		<span>Allies Power: {{ Math.floor(allies.used) + ' / ' + Math.floor( allies.max.value ) }}</span></div>

	<div class="char-list">
	<table>
		<tr><th>Creature</th><th class="num-align">Life</th><th>Active</th><th>Actions</th></tr>
		<tr class="char-row" v-for="b in filtered" :key="b.id" @mouseenter.capture.stop="itemOver($event,b)">
			<th><input class="fld-name" type="text" v-model="b.name"></th>
			<td class="num-align">{{ toNum(b.hp) }} / {{ toNum( b.hp.max ) }}</td>

			<td v-if="!b.alive">
				<span>Dead</span>

			</td>
			<td v-else>
				<button v-if="b.active" @click="toggleActive(b)" :disabled="inExplore">Rest</button>
				<button v-else @click="toggleActive(b)" :disabled="inExplore||!allies.canAdd(b)">Activate</button>
			</td>
			<td v-if="!b.alive">
				<!-- note this is a separate section from the one above -->
				<button class="rez" v-for="r in rezzes(b)" :key="r.id" :disabled="!r.canUse()" @click="useRez(r,b)">{{ r.name }}</button>

			</td>
			<td>
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
	min-width: 12rem;
	max-width: 50%;
	justify-content: space-between;
}

div.minions .warn-text {
	margin-bottom: var( --sm-gap );
}
div.minions {
	padding-left:1rem;
	padding-top: var( --tiny-gap );
	height:100%;
}

.char-list {
	height:85%;
	overflow-y:auto;
}

table {
	border-spacing: var(--sm-gap) 0;
	border-collapse: collapse;
	row-gap: var(--sm-gap);
	column-gap: var(--md-gap);

}

tr:first-child th {
	border-bottom: 1pt solid black;
	margin: var(--sm-gap);
}

tr > th:first-of-type {
	text-align: left;
}

th {
	padding: var(--sm-gap) var(--md-gap);
}

td.num-align {
	padding: var(--md-gap);
}

</style>