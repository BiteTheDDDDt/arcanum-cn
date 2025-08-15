<script>
import Game from "@/game";
import ItemBase from "@/ui/itemsBase";
import FilterBox from "@/ui/components/filterbox.vue";
import { TRY_USE } from "@/events";
import { npcCost } from "modules/craft";
import { TYP_RANGE } from "@/values/consts";
import { NpcLoreLevels } from "@/values/craftVars";

export default {
	mixins: [ItemBase],
	data() {
		return {
			filtered: null,
			sortBy: "level",
			sortOrder: 1,
			loreLevels: {},
		};
	},
	components: {
		filterbox: FilterBox,
	},
	beforeCreate() {
		this.game = Game;
	},
	methods: {
		tryUse(m) {
			this.emit(TRY_USE, m);
		},

		loreLevel(m) {
			let lore = this.loreLevels[m.kind];
			if (lore === undefined) lore = this.loreLevels[m.kind] = NpcLoreLevels(m.kind, Game);
			return lore;
		},

		setSort(by) {
			if (this.sortBy === by) this.sortOrder = -this.sortOrder;
			else this.sortBy = by;
		},
		searchIt(it, t) {
			const regex = new RegExp(t, "i");
			if (regex.test(it.name)) return true;
			if (regex.test(it.kind)) return true;
			if (it.tags) for (let tag of it.tags) if (tag.includes(t)) return true;
			if (it.result) {
				for (let p in it.result) {
					let data = game.state.getData(p);
					if (data == null) continue;
					if (data.name.toLowerCase().includes(t.toLowerCase())) return true;
				}
			}
			if (it.loot) {
				for (let p in it.loot) {
					let data = game.state.getData(p);
					if (data == null) continue;
					if (data.name.toLowerCase().includes(t.toLowerCase())) return true;
				}
			}
			return false;
		},
		canShowBuy(m) {
			return m.space > 0;
		},
		canBuy(m) {
			return m.canUse(this.game) && this.minions.freeSpace() > 0;
		},
	},
	computed: {
		minions() {
			return Game.state.minions;
		},

		allItems() {
			let all = this.game.state.monsters;
			var a = [];

			for (let i = all.length - 1; i >= 0; i--) {
				var it = all[i];
				if (it.value <= 0) continue;
				// if (!it.cost) it['cost'] = npcCost(it);
				a.push(it);
			}

			return a;
		},

		sorted() {
			let by = this.sortBy;
			let order = this.sortOrder;
			let v1, v2;

			return (this.filtered || this.allItems).sort((a, b) => {
				v1 = a[by];
				v2 = b[by];
				if (v1 > v2) return order;
				else if (v2 > v1) return -order;
				else return 0;
			});
		},
	},
};
</script>

<template>
	<div class="bestiary">
		<filterbox v-model="filtered" :prop="searchIt" :items="allItems" :min-items="14" />

		<div class="char-list">
			<table class="bestiary">
				<tr>
					<th class="table-head" @click="setSort('name')">Creature</th>
					<th class="table-head" @click="setSort('level')">Level</th>
					<th class="table-head" @click="setSort('value')">Slain</th>
					<th class="table-head" @click="setSort('hp')">Hp</th>
				</tr>
				<tr v-for="m in sorted" :key="m.id" @mouseenter.capture.stop="itemOver($event, m)">
					<th class="lg-name">{{ m.name.toTitleCase() }}</th>
					<td class="num-align">{{ Math.floor(m.level) }}</td>
					<td class="num-align">{{ Math.floor(m.value) }}</td>
					<td class="num-align">{{ Math.floor(m.hp) }}</td>

					<td v-if="canShowBuy(m)">
						<button type="button" @click="tryUse(m)" :disabled="!canBuy(m)">Buy</button>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<style scoped>
tr .table-head {
	cursor: pointer;
	text-decoration: underline;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
}

div.bestiary {
	display: flex;
	flex-direction: column;
	margin-left: 0.9em;
	padding: 0;
	margin: 0;
}

.char-list {
	width: 100%;
	padding: 0;
	margin: 0;
	overflow-y: auto;
	margin-bottom: 1rem;
}

table.bestiary {
	border-spacing: var(--sm-gap) 0;
	border-collapse: collapse;
	row-gap: var(--sm-gap);
	column-gap: var(--md-gap);
}

tr:first-child .table-head {
	border-bottom: 1pt solid black;
	margin: var(--sm-gap);
}

.table-head {
	padding: var(--sm-gap) var(--md-gap);
}

td.num-align {
	padding: var(--md-gap);
}
</style>
