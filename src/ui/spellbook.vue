<script>
import ItemBase from './itemsBase';
import FilterBox from './components/filterbox.vue';
import Game from '../game';

export default {

	props:['state'],
	mixins:[ItemBase],
	data(){

		return {
			filtered:null,
			viewSchools:[],
			pMin:null,
			pMax:null
		};

	},
	components:{
		filterbox:FilterBox
	},
	methods:{

		addList(it) {
			this.list.add(it);
		}

	},
	computed:{

		list(){
			return Game.state.spelllist;
		},

		minLevel:{

			get(){ return this.pMin; },
			set(v){ this.pMin = Number(v); }

		},

		/**
		 * @property {Object.<string,string>} schools - schools of all unlocked spells.
		 */
		schools() {

			let res = {};

			let a = this.spells;
			for( let i = a.length-1; i>= 0; i-- ) {
				var s = a[i];
				if ( s.school ) res[s.school] = true;
			}

			return res;

		},

		/**
		 * @property {Spell[]} viewing - array of spells actually visible.
		 */
		viewing() {

			let spells = this.filtered;
			let vSchools = this.viewSchools;
			let level = this.minLevel;

			if ( vSchools.length>0 || level ) {

				return spells.filter(v=>{
					return ((vSchools.length===0||vSchools.includes(v.school)) )
						&&(!level||(v.level===level));
				});

			}
			return spells;

		},

		/**
		 * @property {Spell} spells - array of spells unlocked.
		 */
		spells(){
			return this.state.filterItems(
				it=>it.type === 'spell' && !this.locked(it) );
		}

	}

}
</script>

<template>

	<div class="spellbook">

		<div class="spell-table">
		<table>
		<tr v-for="s in viewing" :key="s.id" @mouseenter.capture.stop="emit( 'itemover', $event, s )">

			<td>

				<button v-if="s.owned&&s.attack&&list.canAdd(s)" @click="addList(s)">Memorize</button>
				<!--<button v-if="s.owned&&s.attack" @click="emit('primary',s)">
				{{ state.player.primary===s ? 'Unequip' : 'Primary' }}
				</button>-->

				</td>
			<td>{{ s.name }}</td>
			<td>

				<button v-if="s.owned" @click="emit('spell', s)" :disabled="!usable(s)">Cast</button>

				<button v-else @click="emit('buy', s)" :disabled="!usable(s)">Learn</button>

			</td>

		</tr>
		</table>
		</div>

		<div class="filters">

			<button @click="$emit('toggle')">Memorized</button>

			<filterbox v-model="filtered" :items="spells" />

		<div>
			<label class="level-lbl" :for="elmId('level')">Level</label>
			<input class="level" :id="elmId('level')" type="number" v-model="minLevel" min=0 size=5>

		</div>

		<div class="checks" v-for="(p,k) in schools" :key="k">
					<input type="checkbox" :value="k" :id="elmId('chk'+k)" v-model="viewSchools" >
					<label :for="elmId('chk'+k)">{{ k }}</label>
		</div>
		</div>

	</div>

</template>

<style scoped>

div.spellbook {
	display:flex;
	padding: 8px 14px;
	flex-direction: column;
	height:100%;
}

.spell-table {
	order: 2; padding: 4px;
	overflow-y: auto;
	height:100%;
	margin-bottom: 20px;
}
.spell-table table { display: flex; flex-flow: row wrap; justify-content: space-between; }
.spell-table table tr { display:flex; flex-basis: 48%; }
.spell-table table tr td:nth-child(1), .spell-table table tr td:nth-child(3) {
	flex-basis: 20%; order: 3; }
.spell-table table tr td:nth-child(2) { flex: 1; order: 1;}
.spell-table table tr td:nth-child(3) { flex-basis: 20%; order: 2; }
.spell-table table td { display: flex; }

div.spellbook .filters {
        order: 1; flex-flow: row wrap; display: flex;
        border-bottom: 1px solid var(--separator-color);
        margin: 0; padding: 4px; line-height: 2em;
    }
div.spellbook div.filters div { box-sizing: border-box; margin: 0; }
div.spellbook div.filters div:nth-child(1),
div.spellbook div.filters div:nth-child(2) {
        flex-basis: 50%;
    }
div.spellbook div.filters input[type=text] { padding: 4px 0 4px 0; }
div.spellbook div.filters > div input[type=text],
div.spellbook div.filters > div input[type=number] {

		flex: 1;
		margin-right: 1em;
		margin-left: 1em;
		min-width: unset;
		max-width: unset;
		padding: 4px 0;
		font-size: 105%;
		width: 0;
}
 div.spellbook div.filters > div { display: flex; align-items: center; }
div.spellbook div.filters > div label { flex-basis: 20%; }
div.spellbook div.filters > div input { min-width: 0; padding: 0; text-indent: 4px; }
div.spellbook div.filters div.checks { margin: 0; flex-basis: 16%; }


</style>
