<script>
import Game from '../../game';
import Settings from 'modules/settings';
import ItemBase from '../itemsBase';

import FilterBox from '../components/filterbox.vue';
import Book from '../spellbook.vue';
import SpellList from '../spelllist.vue';

export default {

	data(){

		let spellOps = Settings.getSubVars( 'spells');

		return Object.assign( {
			showList:false,
			filtered:null,
			schools:[],
			min:null,
			max:null
		}, spellOps );

	},
	mixins:[ItemBase],
	components:{

		filterbox:FilterBox,
		book:Book,
		spelllist:SpellList

	},
	created(){

		// remove schools not in allSchools.
		let all = this.allSchools;
		let a = [];

		for( let i = this.schools.length-1; i>=0; i-- ) {
			if ( all[this.schools[i] ] ) a.push(this.schools[i] );
		}

		this.schools = a;

	},
	methods:{

		/**
		 * toggle memorized list.
		 */
		toggle(){
			this.showList = Settings.setSubVar( 'spells', 'showList', !this.showList );
		}

	}, computed:{

		state() { return Game.state; },

		/**
		 * @property {DataList} spelllist - spells in active use. (dungeons)
		 */
		list() { return Game.state.spelllist; },

		minLevel:{

			get(){ return this.min; },
			set(v){ this.min = Settings.setSubVar( 'spells', 'min', Number(v) ); }

		},

		viewSchools:{

			get(){


				return this.schools;
			},
			set(v){

				this.schools = v;
				Settings.setSubVar( 'spells', 'schools', this.schools.concat() );

			}

		},

		/**
		 * @property {.<string,string>} schools - schools of all unlocked spells.
		 */
		allSchools() {

			let res = {};

			let a = this.spells;
			for( let i = a.length-1; i>= 0; i-- ) {
				var s = a[i];
				if ( s.school ) res[s.school] = true;
			}

			return res;

		},

		/**
		 * @property {Spell[]} viewing - array of spells actually visible
		 * after min/max levels and schools have been applied to filtered.
		 */
		viewing() {

			let spells = this.filtered || this.spells;
			let schools = this.schools;
			let level = this.minLevel;

			if ( schools.length>0 || level ) {

				return spells.filter(v=> (schools.length===0||schools.includes(v.school))
						&&(!level||(v.level===level))
				);

			}

			return spells;

		},

		/**
		 * @property {Spell} spells - array of unlocked spells.
		 */
		spells(){
			return this.state.filterItems(
				it=>it.type === 'spell' && !this.locked(it) );
		}

	}

}
</script>

<template>

<div class="spells">

	<div class="filters">

			<filterbox v-model="filtered" :items="spells" />

		<div>
			<label class="level-lbl" :for="elmId('level')">Level</label>
			<input class="level" :id="elmId('level')" type="number" v-model="minLevel" min=0 size=5>

		</div>

		<div class="checks" v-for="(p,k) in allSchools" :key="k">
					<input type="checkbox" :value="k" :id="elmId('chk'+k)" v-model="viewSchools" >
					<label :for="elmId('chk'+k)">{{ k.toTitleCase() }}</label>
		</div>

		<button @click="toggle">Memorized</button>

	</div>

<div class="bottom">

<book class="spellbook" :viewing="viewing" />

<spelllist v-show="showList" class="spelllist" :list="list" />

</div>

</div>

</template>

<style scoped>

div.spells {

	display:flex;
	flex-flow: column nowrap;
	padding: var(--sm-gap) var(--md-gap);
	height:100%;

}

div.spells .bottom {
	display:flex;
	flex-flow: row nowrap;
}

div.spells .spellbook {
	flex-basis: 80%;
	flex-grow: 1;
}


div.spells .spelllist {
	border-left: 1px solid var( --separator-color );
	padding: var( --sm-gap );
}

div.spells div.filters div { box-sizing: border-box; margin: 0; }
div.spells div.filters div:nth-child(1),
div.spells div.filters div:nth-child(2) {
        flex-basis: 50%;
	}


div.spells div.filters > div input[type=text],
div.spells div.filters > div input[type=number] {

		flex: 1;
		margin-right: 1em;
		margin-left: 1em;
		min-width: unset;
		max-width: unset;
		padding:var(--tiny-gap) 0;
		font-size: 105%;
}

div.spells div.filters > div input { min-width: 0; padding: 0; text-indent: var(--sm-gap); }


div.spells .filters {
        flex-flow: row wrap; display: flex; text-align: center;
        border-bottom: 1px solid var(--separator-color);
        margin: 0; padding: var(--sm-gap); line-height: 2em; justify-content: flex-start;
    }


 div.spells div.filters div.checks { margin: 0; padding: 0 0.5em; flex-basis: unset; }



</style>