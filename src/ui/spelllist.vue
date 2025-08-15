<script>
import ItemBase from "@/ui/itemsBase";

import Game from "@/game";
export default {
	mixins: [ItemBase],

	props: {
		list: Object,
		topTier: Number,
		spellLoadouts: Object,
		currentSpellLoadout: String,
	},

	/*computed: {
	
		currentSpellLoadout() {
			if (!Game.state.currentSpellLoadout) {
				return '';
			}
			return Game.state.currentSpellLoadout;
		},
	
		spellLoadouts() {
			return Game.state.spellLoadouts;
		},
	
		topTier() {
			for (let i = 9; i >= 0; i--) {
	
				let tierString = "tier" + i;
	
				let tierItem = Game.state.items[tierString]
	
				if (tierItem !== undefined) {
	
					let tierBool = tierItem.value.value;
	
					if (tierBool) {
						return i;
					}
	
				}
	
			}
	
			return 0;
		}
	
	},*/
	methods: {
		canAdd(s) {
			return s.level + this.craft.level <= this.maxLevels;
		},

		chooseLoadout: function (e) {
			let id = event.srcElement.value;
			this.spellLoadouts.changeLoadout(Game.state, id);
		},

		/**
		 * @function create - instantiate a new spell loadout.
		 */
		create(copy = null) {
			if (copy) {
				this.spellLoadouts.create(Game.state, copy);
			} else {
				this.spellLoadouts.create(Game.state);
			}
		},
	},
	/* removed because this does not work correctly
	beforeUpdate() {
		/*
		 * Removes the last spell in the list if the
		 * total spell levels in the spelllist exceed
		 * the character's current spelllist.max
		 */
	/*
			let curList = Game.state.items.spelllist
			if (curList.used > curList.max.value) {
				curList.removeAt(curList.items.length - 1);
			}
		},
		*/
	/*updated() {
		this.$parent.$emit('cascadeUpdate', 'spellbook');
	}*/
};
</script>

<template>
	<div class="spelllist" functional>
		<div v-if="topTier >= 1" class="spellloadouts">
			<div>
				<select @change="chooseLoadout()">
					<option
						v-for="loadout in spellLoadouts.items"
						:value="loadout.id"
						:selected="currentSpellLoadout === loadout.id">
						{{ loadout.name }}
					</option>
				</select>
			</div>
			<span class="warn-text" v-if="spellLoadouts.items.length > topTier">
				At your limit of {{ topTier + 1 }} spell lists.
			</span>
			<div v-if="!(spellLoadouts.items.length > topTier)">
				<button type="button" @click="create(true)">Copy List</button>
				<button @click="create(null)">New List</button>
			</div>

			<span class="hint">You can press Alt+{Num} to change lists as well.</span>

			<div v-for="(l, index) in spellLoadouts.items" class="custom" :key="'l' + index">
				<span class="text-entry">
					[{{ index + 1 }}]<input class="fld-name" type="text" v-model="l.name" />
					<button
						type="button"
						:disabled="!(index > 0)"
						class="stop"
						@click="spellLoadouts.moveInd(index, -1)">
						↑
					</button>
					<button
						type="button"
						:disabled="!(index < spellLoadouts.items.length - 1)"
						class="stop"
						@click="spellLoadouts.moveInd(index, 1)">
						↓
					</button>
					<button
						type="button"
						:disabled="l.id === currentSpellLoadout"
						class="stop"
						@click="spellLoadouts.removeAt(index)">
						X
					</button>
				</span>
			</div>
		</div>

		<div><button type="button" @click="list.removeAll()">Clear all spells</button></div>

		<span class="maxlevels">
			Max Levels: {{ list.used + " / " + Math.floor(list.max.value) }}
			<div class="warn-text note-text" v-if="list.full()">Spelllist is Full</div>
		</span>

		<div v-for="(it, ind) in list.items" :key="ind" @mouseenter.capture.stop="itemOver($event, it)">
			<button type="button" :disabled="!(ind > 0)" class="stop" @click="list.moveInd(ind, -1)">↑</button>
			<button type="button" :disabled="!(ind < list.items.length - 1)" class="stop" @click="list.moveInd(ind, 1)">
				↓
			</button>
			<button type="button" class="stop" @click="list.removeAt(ind)">X</button>
			<span>{{ it.name.toTitleCase() }}</span>
		</div>
	</div>
</template>

<style scoped>
.maxlevels {
	border-bottom: 1px solid var(--separator-color);
	margin-bottom: var(--sm-gap);
}

div.spellloadouts div.custom span input {
	width: 50%;
}

div.spellloadouts div.custom span button {
	margin: 0;
}

span.hint {
	font-size: 0.8em;
}
</style>
