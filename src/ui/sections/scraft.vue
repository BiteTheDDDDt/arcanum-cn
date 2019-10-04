<script>
import ItemBase from '../itemsBase';

import Game from '../../game';

export default {

	mixins:ItemBase,
	data(){

		return {

			/**
			 * List of spells in current crafting.
			 */
			list:[],

			levels:0

		};

	},
	methods:{

		canAdd(s) {
			return s.level + this.levels <= this.maxLevel;
		},

		/**
		 * @function create - create the new spell combination.
		 */
		create() {
		},

		add(s) {
			this.list.push(s);
			this.levels += s.level;
		},

		removeAt(ind) {

			let s = this.list[i];
			if ( s ) this.levels -= s.level;

			this.list.splice(i,1);

		},

		remove(s) {

			let ind = this.list.indexOf(s);
			if ( ind >= 0 ) {
				this.list.splice( ind, 1 );
				this.levels -= s.level;
			}

		}

	},
	computed:{

		/**
		 * @property {Group[]} crafts - spells already crafted.
		 */
		crafts() {
		},

		/**
		 * @property {Spell[]} spells - all spells in game.
		 */
		spells() {
			return Game.state.filterItems( v=>v.type === 'spell');
		},

		/**
		 * Spellcraft power.
		 */
		power(){
			return Game.state.getData('scraft');
		},

		maxLevel() { return Math.floor( this.power.value ); }

	}

}

</script>

<template>

<div class="spellcraft">

<div class="customs">

	<div v-for="c in crafts" :key="c.id">
		<span>{{c.name}}</span>
	</div>

</div>

<div class="bottom">
<div class="crafting">

	<div>
		<span class="warn-text"></span>
		<button @click="create">Craft</button>
	</div>

	<div v-for="(s,ind) in list" :key="ind">
		<span>{{s.name}}</span><button @click="removeAt(ind)">Remove</button>
	</div>

</div>
<div class="spells">

	<div v-for="(s) in spells" :key="s.id">
		<span>{{s.name}}<button @click="add(s)" :disabled="!canAdd(s)">Add</button>
	</div>

</div>
</div>

</div>

</template>

<style scoped>

div.spellcraft {
	display:flex;
	flex-direction: column;
}

div.spellcraft .bottom {
	display:flex;
	flex-direction: row;
}

div.spellcraft .crafting, div.spellcraft .spells {
	display:flex;
	flex-direction: column;
}

</style>