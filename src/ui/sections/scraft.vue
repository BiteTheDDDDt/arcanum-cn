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

			levels:0,
			name:'New Spell'

		};

	},
	methods:{

		/**
		 * Remove user spell from UserSpells
		 */
		removeSpell(s){
			this.userSpells.remove(s);
		},

		canAdd(s) {
			return s.level + this.levels <= this.maxLevels;
		},

		/**
		 * @function create - create the new spell combination.
		 */
		create() {

			this.userSpells.create( this.list, this.name );
			this.list = [];
			this.levels = 0;

		},

		/**
		 * Determine if the group being created can be crafted.
		 * cost+length + user slots available.
		 * @returns {boolean}
		 */
		canCraft() {

			return !this.userSpells.full() && this.list.length>0;

		},

		/**
		 * Add spell to the current crafting group.
		 */
		add(s) {
			this.list.push(s);
			this.levels += s.level;
		},

		/**
		 * Remove spell from building list.
		 */
		removeAt(i) {

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
		 * @property {UserSpells} userSpells - spells already crafted.
		 */
		userSpells() {
			return Game.state.userSpells;
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
		scraft(){
			return Game.state.getData('scraft');
		},

		maxLevels() {
			console.log('SCRAFT LEVEL: ' + this.scraft.value );
			return Math.floor( this.scraft.value );
		}

	}

}

</script>

<template>

<div class="spellcraft">

<div class="userspells">

	<div>
		Custom Spells: {{ Math.floor( userSpells.used) + ' / ' + Math.floor( userSpells.max.value ) }}
	</div>
	<div class="spells">
	<div class="custom" v-for="c in userSpells.items" :key="c.id">
		<span>{{c.name}}</span><button @click="removeSpell(c)">Remove</button>
	</div>
	</div>

</div>

<div class="bottom">
<div class="crafting">

	<div class="options">
		<span class="warn-text" v-if="levels>=maxLevels">You have reached your power limit.</span>

		<div><label :for="elmId('spName')">Spell Name</label>
		<input :id="elmId('spName')" type="text" v-model="name">
		</div>

		<span>Power Used: {{ levels + ' / ' + Math.floor(maxLevels) }}</span>
		<button @click="create" :disabled="!canCraft">Craft</button>
	</div>

	<div v-for="(s,ind) in list" :key="ind">
		<span>{{s.name}}</span><button @click="removeAt(ind)">Remove</button>
	</div>

</div>
<div class="spells">

	<div v-for="(s) in spells" :key="s.id">
		<span>{{s.name}}</span><button @click="add(s)" :disabled="!canAdd(s)">Add</button>
	</div>

</div>
</div>

</div>

</template>

<style scoped>

div.spellcraft .userspells {
	display:flex;
	flex-direction: column;
}

div.userspells .spells {
	display:flex;
	flex-direction:row;
	justify-content: space-evenly;
}

div.spellcraft {
	display:flex;
	flex-direction: column;
}

div.spellcraft .bottom {
	display:flex;
	flex-direction: row;
	justify-content: space-between;
}

div.spellcraft .crafting, div.spellcraft .spells {
	display:flex;
	flex-direction: column;
}

</style>