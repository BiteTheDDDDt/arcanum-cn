<script>
import Game from "@/game";
import { ENCHANTSLOTS } from "@/values/consts";
import EnchantSlots from "@/ui/items/enchantslots.vue";
import FilterBox from "@/ui/components/filterbox.vue";
import ItemsBase from "@/ui/itemsBase";
import inventory from "@/ui/sections/inventory.vue";
import { canTarget } from "@/values/consts";

export default {
	mixins: [ItemsBase],
	components: {
		eslots: EnchantSlots,
		filterbox: FilterBox,
		inv: inventory,
	},
	data() {
		return {
			/**
			 * @property {Item[]} filtered - filtered search results.
			 */
			filtered: null,
			/**
			 * @property {Item} target - current enchant target.
			 */
			target: null,
			/// limit kinds of enchants being viewed (rings, orbs, etc.)
			viewKinds: [],
		};
	},
	beforeCreate() {
		this.game = Game;
		this.state = Game.state;
		this.runner = this.state.runner;
		this.inv = this.state.getData("inventory");
		this.enchantSlots = this.state.getData(ENCHANTSLOTS);
	},
	methods: {
		begin(it, target) {
			/** @note test here for successful add to enchants? */
			this.emit("enchant", it, target);

			this.inv.remove(target);
			this.target = null;
		},
		clearTarget() {
			this.target = null;
		},
		resume() {
			Game.toggleTask(this.enchantSlots);
		},
		canSee(it, targ) {
			return !targ || !it.only || canTarget(it.only, targ);
		},
		canUse(it, targ) {
			return it.canUse() && this.enchantSlots.canAdd(it) && (!targ || it.canAlter(targ));
		},
	},
	computed: {
		/// all available enchant kinds.
		allKinds() {
			const kinds = [];
			for (const e of this.enchants) {
				const only = e.only;
				if (Array.isArray(only)) {
					for (const kind of only) {
						if (!kinds.includes(kind)) kinds.push(kind);
					}
				} else if (only && !kinds.includes(only)) {
					kinds.push(only);
				}
			}

			return kinds;
		},
		enchants() {
			return this.state.enchants.filter(it => !this.locked(it));
		},
		showItems() {
			/* display items limited by selected enchant kinds.*/
		},
		/// Enchants limited by selected enchant kinds.
		onlyKinds() {
			const enchants = this.enchants;
			const viewOnly = this.viewKinds;
			if (viewOnly.length > 0) {
				return enchants.filter(e => {
					const only = e.only;
					if (Array.isArray(only)) {
						return viewOnly.some(v => only.includes(v));
					} else if (typeof only === "string" && viewOnly.includes(only)) return true;
				});
			}
			return enchants;
		},

		/**
		 * Enchants that can be used on selected item.
		 */
		visible() {
			const t = this.target;
			if (!t) return this.filtered;
			return this.filtered.filter(it => this.canSee(it, t));
		},
	},
};
</script>

<template>
	<div class="enchants">
		<div class="separate">
			<div>
				<div @mouseenter.capture.stop="itemOver($event, target)">
					Target: {{ target ? target.name.toTitleCase() : "None" }}
				</div>
				<div class="note-text">Enchantment levels on an Item cannot exceed Item's enchant slots.</div>
			</div>

			<span>
				<button type="button" :disabled="enchantSlots.count == 0" @click="resume">
					{{ runner.has(enchantSlots) ? "Pause" : "Resume" }}
				</button>
			</span>
		</div>

		<eslots class="eslots" :eslots="enchantSlots" :inv="inv" />

		<div class="checkboxes">
			<div class="category" v-for="(p, k) in allKinds" :key="k">
				<input type="checkbox" :value="p" :id="elmId('chk' + k)" v-model="viewKinds" />
				<label :for="elmId('chk' + k)">{{ p.replace("t_", "") }}</label>
			</div>
		</div>

		<div class="separate">
			<div class="filters">
				<div v-if="target">
					<button type="button" class="stop" @click="clearTarget">X</button>{{ target.name.toTitleCase() }}
				</div>
				<filterbox v-model="filtered" :items="onlyKinds" />

				<div class="enchant-list">
					<div
						class="enchant"
						v-for="it in visible"
						:key="it.id"
						@mouseenter.capture.stop="itemOver($event, it)">
						<span class="ench-name">{{ it.name.toTitleCase() }}</span>

						<button
							type="button"
							v-if="it.buy && !it.owned"
							:disabled="!it.canBuy(game)"
							@click="emit('buy', it)">
							🔒
						</button>

						<button v-else type="button" @click="begin(it, target)" :disabled="!this.canUse(it, target)">
							Enchant
						</button>
					</div>
				</div>
			</div>

			<inv
				:selecting="true"
				:inv="state.inventory"
				v-model="target"
				:types="['armor', 'weapon']"
				:kinds="viewKinds"
				hide-space="true" />
		</div>
	</div>
</template>

<style scoped>
div.enchants div.checkboxes {
	margin: 0;
	padding: 0 0.5em;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

div.checkboxes div.category {
	display: flex;
	flex-direction: row;
	margin: 2px 4px;
}

div.enchants {
	display: flex;
	flex-direction: column;
	padding: 0 1rem;
	height: 100%;
	margin-top: var(--sm-gap);
}

div.enchants .eslots {
	padding-bottom: var(--sm-gap);
	border-bottom: 1pt solid var(--separator-color);
}

div.enchants .filters {
	padding-top: var(--sm-gap);
	display: flex;
	flex-flow: column;
	margin-right: var(--md-gap);
	border-right: 1px solid var(--separator-color);
}

div.enchants .enchant-list {
	display: flex;
	flex-flow: column nowrap;
	flex: 1;
}

div.enchants .separate {
	align-items: flex-start;
}

div.enchants .enchant-list > div.enchant {
	display: flex;
	width: 100%;
	justify-content: space-between;
	flex-direction: row;
}

div.enchants .enchant-list .ench-name {
	min-width: 5rem;
	text-wrap: nowrap;
}
</style>
