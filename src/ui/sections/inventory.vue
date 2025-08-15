<script>
import Game from "@/game";
import FilterBox from "@/ui/components/filterbox.vue";
import { USE } from "@/events";
import { canTarget } from "@/values/consts";

export default {
	/**
	 * @property {Inventory} inv - the inventory object.
	 * @property {boolean} take - whether to display take button.
	 * @property {boolean} selecting - inventory is selection only. sell-all & size information hidden.
	 * @property {string[]} types - item types to display.
	 */
	props: ["modelValue", "inv", "take", "selecting", "nosearch", "types", "kinds", "combat"],
	emits: ["update:modelValue"],
	data() {
		return {
			filtered: null,
			cols: 1,
		};
	},
	created() {
		this.USE = USE;

		const rootStyle = window.getComputedStyle(document.documentElement);
		const baseFontSize = parseFloat(rootStyle.fontSize);

		/// assuming grid is 12rem
		this.cellWidth = baseFontSize * 12;
	},
	mounted() {
		window.addEventListener("resize", this.resize);
		this.resize();
	},
	unmounted() {
		window.removeEventListener("resize", this.resize);
	},
	components: {
		filterbox: FilterBox,
	},
	methods: {
		resize() {
			const grid = this.$refs.gridRef;
			if (grid) {
				this.cols = Math.floor(grid.clientWidth / this.cellWidth);
			} else {
				this.cols = 1;
			}
		},
		sellAll() {
			const items = this.filtered; // this.inv.removeAll();
			for (let i = items.length - 1; i >= 0; i--) {
				this.emit("sell", items[i], this.inv, items[i].count);
			}
			//this.$refs.filter.clear();
		},

		count(count) {
			return count > 1 ? " (" + Math.floor(count) + ")" : "";
		},
		drop(it) {
			this.inv.remove(it);
		},

		/**
		 * Test if item can be added to USER inventory.
		 */
		canAdd(it) {
			return Game.state.inventory.canAdd(it);
		},

		canEquip(it) {
			return Game.canEquip(it);
		},

		canUse(it) {
			return Game.canUse(it);
		},

		onTake(it) {
			this.emit("take", it);
			this.inv.remove(it);
		},
		onselect(it) {
			this.$emit("update:modelValue", it);
		},
		searchIt(it, t) {
			const regex = new RegExp(t, "i");
			if (regex.test(it.name)) return true;
			if (regex.test(it.slot)) return true;
			if (it.tags) {
				let tags = it.tags;
				for (let i = tags.length - 1; i >= 0; i--) {
					if (regex.test(tags[i])) return true;
				}
			}
			if (it.mod && typeof it.mod === "object") {
				for (let p in it.mod) {
					if (game.state.getData(p) && typeof game.state.getData(p) === "object") {
						if (regex.test(game.state.getData(p).name)) return true;
					}
				}
			}
			return false;
		},
	},
	computed: {
		baseItems() {
			const types = this.types;
			const items = types ? this.inv.items.filter(it => types.includes(it.type)) : this.inv.items;
			if (this.kinds && this.kinds.length > 0) {
				return items.filter(it => canTarget(this.kinds, it));
			}
			return items;
		},

		playerInv() {
			return this.inv === Game.state.inventory;
		},
		playerFull() {
			return Game.state.inventory.full();
		},
	},
};
</script>

<template>
	<div class="inventory">
		<span class="top">
			<filterbox ref="filter" v-if="!nosearch" v-model="filtered" :prop="searchIt" :items="baseItems" />
			<span v-if="!selecting && !combat">
				<span v-if="inv.max > 0">{{ inv.items.length + " / " + Math.floor(inv.max.value) + " Used" }}</span>
				<button type="button" v-if="inv.count > 0" @click="sellAll">Sell All</button>
			</span>
		</span>

		<div class="item-table" ref="gridRef">
			<div
				v-for="(it, ind) in nosearch ? baseItems : filtered"
				:class="ind % (2 * cols) < cols ? 'off-color' : ''"
				class="item separate"
				:key="it.id">
				<span class="item-name" @mouseenter.capture.stop="itemOver($event, it)">
					{{ it.name + count(it.count) }}
				</span>

				<div class="item-buttons">
					<template v-if="selecting">
						<button type="button" class="item-action" @click="onselect(it)">Select</button>
					</template>
					<template v-else-if="combat">
						<button
							type="button"
							v-if="it.use"
							:disabled="!canUse(it)"
							class="item-action"
							@mouseenter.capture.stop="itemOver($event, it)"
							@click="emit(USE, it, inv)">
							Use
						</button>
					</template>
					<template v-else>
						<button
							type="button"
							v-if="it.equippable && canEquip(it)"
							class="item-action"
							@click="emit('equip', it, inv)">
							Equip
						</button>
						<button
							type="button"
							v-if="it.use"
							:disabled="!canUse(it)"
							class="item-action"
							@mouseenter.capture.stop="itemOver($event, it)"
							@click="emit(USE, it, inv)">
							Use
						</button>
						<button type="button" v-if="take && canAdd(it)" class="item-action" @click="onTake(it)">
							Take
						</button>

						<button
							type="button"
							class="item-action"
							@click="emit('sell', it, inv)"
							@mouseenter.capture.stop="itemOver($event, it)">
							Sell
						</button>
						<button
							type="button"
							v-if="it.count > 1"
							class="item-action"
							@click="emit('sell', it, inv, it.count)"
							@mouseenter.capture.stop="itemOver($event, it)">
							Sell All
						</button>
					</template>
				</div>
			</div>
		</div>

		<div v-if="playerFull" class="warn-text">Inventory Full</div>
	</div>
</template>

<style scoped>
.inventory {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	min-height: 0;
}

.top {
	padding: var(--tiny-gap);
	padding-top: var(--sm-gap);
}

.filter-box {
	display: inline;
	font-size: 0.9rem;
}

/*.table-div {
	display: grid; grid-template-columns: 1fr 1fr;
	flex-grow: 1;
	height:100%;
}*/

.item-table {
	flex-grow: 1;
	flex-shrink: 1;
	overflow-y: auto;
	min-height: 0;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
	grid-auto-rows: min-content;
}

.item-table > .off-color {
	background: var(--odd-list-color);
}

.item-name {
	display: flex;
	align-items: center;
	text-align: center;
	flex-grow: 1;
}

.item-table .item {
	padding: var(--sm-gap) var(--md-gap);
	margin: 0;

	display: flex;
	flex-direction: column;
	align-items: center;
}

.item .item-action {
	margin: 0;
}

.item .item-buttons {
	margin: var(--tiny-gap);
	gap: var(--tiny-gap);

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
</style>
