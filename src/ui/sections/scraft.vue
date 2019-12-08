<script>
import ItemBase from '../itemsBase';

import {spellCost} from 'modules/craft';
import Game from '../../game';
import { alphasort } from '../../util/util';

export default {

	mixins:[ItemBase],
	data(){

		return {

			/**
			 * List of spells in current crafting.
			 */
			list:[],

			/**
			 * Craft info object.
			 */
			craft:{

				name:'crafted spell',
				level:0,
				buy:null
			}

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
			return s.level + this.craft.level <= this.maxLevels;
		},

		/**
		 * @function create - create the new spell combination.
		 */
		create() {

			if (!this.list || this.list.length === 0 ) return;

			Game.payCost( this.craft.buy );

			this.userSpells.create( this.list, this.craft.name );
			this.list = [];

			this.craft.level = 0;
			this.craft.buy = null;

		},

		/**
		 * Add spell to the current crafting group.
		 * Crafted level = list total levels + list.length - 1
		 */
		add(s) {

			this.list.push(s);
			this.craft.level += s.level;

			this.craft.buy = spellCost( this.list );

		},

		/**
		 * Remove spell from building list.
		 */
		removeAt(i) {

			let s = this.list[i];

			if ( s ) {
				this.craft.level -= s.level;
			}

			this.list.splice(i,1);
			this.craft.buy = spellCost( this.list );

		}

	},
	computed:{

		/**
		 * Determine if the group being created can be crafted.
		 * cost+length + user slots available.
		 * @returns {boolean}
		 */
		canCraft() {

			return !this.userSpells.full() && this.list.length>0
				&& Game.canPay( this.craft.buy );

		},

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
			return Game.state.filterItems( v=>v.type === 'spell'&&!this.locked(v)&&v.owned).sort( alphasort );
		},

		/**
		 * Spellcraft power.
		 */
		scraft(){
			return Game.state.getData('scraft');
		},

		maxLevels() {
			return Math.floor( this.scraft.valueOf() );
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
	<div class="custom" v-for="c in userSpells.items" :key="c.id" @mouseenter.capture.stop="emit( 'itemover',$event,c)">
		<span class="text-entry">
			<input class="fld-name" type="text" v-model="c.name">
		</span>
		<button @click="removeSpell(c)">Remove</button>
	</div>
	</div>

</div>

<div class="bottom">
<div class="crafting">

	<div class="options">
		<span class="warn-text" v-if="craft.level>=maxLevels">You are at your power limit.</span>

		<div class="text-entry"><label :for="elmId('spName')">Spell</label>
		<input class="fld-name" :id="elmId('spName')" type="text" v-model="craft.name">
		</div>

		<!--chrome wrap-->
		<span @mouseenter.capture.stop="emit( 'itemover',$event,craft)">
		<span>Power: {{ craft.level + ' / ' + Math.floor(maxLevels) }}</span>
		<button @click="create" :disabled="!canCraft">Craft</button>
		</span>

	</div>

	<div v-for="(s,ind) in list" :key="ind" @mouseenter.capture.stop="emit( 'itemover',$event,s)">
		<span>{{s.name}}</span><button @click="removeAt(ind)">Remove</button>
	</div>

</div>
<div class="allspells">

	<div class="separate" v-for="(s) in spells" :key="s.id"  @mouseenter.capture.stop="emit( 'itemover',$event,s)">
		<span>{{s.name}}</span><button @click="add(s)" :disabled="!canAdd(s)">Add</button>
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

div.spellcraft .userspells {
	display:flex;
	flex-direction: column;
	padding: var(--md-gap);
	border-bottom: 1pt solid var( --separator-color );
}

div.userspells .spells {
	display:flex;
	flex-direction:row;
}

div.spells .custom {
	margin-right:1.2rem;
}

.crafting .options {
	padding-bottom: var(--tiny-gap);
}

div.spellcraft .bottom {
	display:flex;
	flex-direction: row;
	justify-content: space-between;
	padding-top:var(--md-gap);
	padding-left:var(--md-gap);
}

div.spellcraft .crafting, div.spellcraft .allspells {
	display:flex;
	flex-direction: column;
}

</style>