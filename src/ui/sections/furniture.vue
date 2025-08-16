<script>
import Game from "@/game";
import Settings from "modules/settings";
import { alphasort } from "@/util/util";
import { precise } from "@/util/format";

import ItemsBase from "@/ui/itemsBase";

import FilterBox from "@/ui/components/filterbox.vue";
import { HOME } from "@/values/consts";

/**
 * @emits sell
 */
export default {
	props: ["state"],
	mixins: [ItemsBase],
	components: {
		filterbox: FilterBox,
	},
	emits: ["mouseEnter"],
	data() {
		let opts = Settings.getSubVars(HOME);

		return {
			hallOpen: false,

			/**
			 * @property {boolean} showMaxed
			 */
			showMaxed: opts.hasOwnProperty("showMaxed") ? opts.showMaxed : true,
			showOwned: opts.hasOwnProperty("showOwned") ? opts.showOwned : true,
			showUnowned: opts.hasOwnProperty("showUnowned") ? opts.showUnowned : true,
			showBlocked: opts.hasOwnProperty("showBlocked") ? opts.showBlocked : true,

			/**
			 * @property {Item[]} filtered - items after text-search filtering.
			 */
			filtered: null,
		};
	},
	methods: {
		empty() {
			return Math.floor(Game.state.getData("space").free()) <= 0;
		},
		precise,
		searchIt(it, t) {
			const regex = new RegExp(t, "i");
			if (regex.test(it.name)) return true;
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
			if (it.convert) {
				for (let p in it.convert.input) {
					if (game.state.getData(p) && typeof game.state.getData(p) === "object") {
						if (regex.test(game.state.getData(p).name)) return true;
					}
				}
				for (let p in it.convert.output.effect) {
					if (game.state.getData(p) && typeof game.state.getData(p) === "object") {
						if (regex.test(game.state.getData(p).name)) return true;
					}
				}
				for (let p in it.convert.output.mod) {
					if (game.state.getData(p) && typeof game.state.getData(p) === "object") {
						if (regex.test(game.state.getData(p).name)) return true;
					}
				}
			}
			return false;
		},
	},
	computed: {
		chkShowMax: {
			get() {
				return this.showMaxed;
			},
			set(v) {
				this.showMaxed = Settings.setSubVar(HOME, "showMaxed", v);
			},
		},
		chkShowOwned: {
			get() {
				return this.showOwned;
			},
			set(v) {
				this.showOwned = Settings.setSubVar(HOME, "showOwned", v);
			},
		},
		chkShowUnowned: {
			get() {
				return this.showUnowned;
			},
			set(v) {
				this.showUnowned = Settings.setSubVar(HOME, "showUnowned", v);
			},
		},
		chkShowBlocked: {
			get() {
				return this.showBlocked;
			},
			set(v) {
				this.showBlocked = Settings.setSubVar(HOME, "showBlocked", v);
			},
		},

		homesAvail() {
			return Game.state.homes.filter(v => !this.locked(v));
		},

		space() {
			return Game.state.getData("space");
		},

		/**
		 * @property {GData[]} furniture - ALL furniture, alpha sorted.
		 */
		furniture() {
			let s = Game.state;
			return s
				.filterItems(
					it =>
						it.type === "furniture" || s.typeCost(it.cost, "space") > 0 || s.typeCost(it.mod, "space") > 0,
				)
				.sort(
					alphasort,
					//(a,b)=> a.name < b.name ? -1 : 1
				);
		},
		viewable() {
			let o = this.showOwned;
			let n = this.showUnowned;
			let b = this.showBlocked;
			let m = this.showMaxed;

			return this.furniture.filter(
				it =>
					!this.reslocked(it) &&
					(o || it.value == 0) &&
					(b || it.canUse(Game)) &&
					(m || !it.maxed()) &&
					(n || it.value > 0),
			);
		},
	},
};
</script>

<template>
	<div class="home-furniture">
		<div class="top separate">
			<span>
					<span class="opt">
					<input :id="elmId('showMax')" type="checkbox" v-model="chkShowMax" /><label :for="elmId('showMax')">
						已满
					</label>
				</span>
				<span class="opt">
					<input :id="elmId('showOwn')" type="checkbox" v-model="chkShowOwned" /><label
						:for="elmId('showOwn')">
						已拥有
					</label>
				</span>
				<span class="opt">
					<input :id="elmId('showUnowned')" type="checkbox" v-model="chkShowUnowned" /><label
						:for="elmId('showUnowned')">
						未拥有
					</label>
				</span>
				<span class="opt">
					<input :id="elmId('showBlock')" type="checkbox" v-model="chkShowBlocked" /><label
						:for="elmId('showBlock')">
						已锁定
					</label>
				</span>
			</span>

			<filterbox class="inline" v-model="filtered" :prop="searchIt" :items="viewable" />
			<span class="space">空间：{{ Math.floor(space.free()) }} / {{ Math.floor(space.max.value) }}</span>
		</div>

		<div class="warn-text" style="text-align: center" v-if="empty()">
			没有剩余空间。出售物品或寻找新住所。
			<span v-if="homesAvail.length > 0">
				如果你的最大金币不足以购买新住所，释放空间以容纳更多箱子。
			</span>
		</div>

		<div class="furniture-wrapper">
			<table class="furniture">
				<thead>
					<tr>
						<th>占用</th>
						<th class="name">家具</th>
						<th>拥有</th>
						<th />
						<th />
					</tr>
				</thead>
				<tbody>
					<tr v-for="it in filtered" :key="it.id" @mouseenter.capture.stop="itemOver($event, it)">
						<td class="space">{{ it.cost.space || it.mod.space }}</td>
						<template v-if="typeof it.max !== 'undefined'">
							<td class="name">{{ it.name }}</td>
							<td class="count">{{ it.value.valueOf() }}/{{ precise(it.max.valueOf(),1,1) }}</td>
						</template>
						<template v-else-if="it.repeat == true">
							<td class="name">{{ it.name }}</td>
							<td class="count">{{ it.value.valueOf() }}/∞</td>
						</template>
						<template v-else>
							<td class="name">{{ it.name }}</td>
							<td class="count">{{ it.value.valueOf() }}/1</td>
						</template>
						<td>
							<span v-if="it.maxed()" class="sm">已满</span>
							<button
								v-else
								type="button"
								:disabled="!it.canUse()"
								class="buy-btn"
								@click="emit('upgrade', it)">
								购买
							</button>
						</td>

						<td>
							<button type="button" :disabled="it.value <= 0" class="sell-btn" @click="emit('sell', it)">
								出售
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped>
span.space {
	text-align: center;
	margin: 0px var(--lg-gap);
}

span.sm {
	margin: var(--sm-gap);
}

div.top {
	flex-wrap: wrap;
}

div.home-furniture {
	width: 100%;
	overflow-y: auto;
	height: 100%;
	flex-direction: column;
	margin-bottom: var(--md-gap);
}

div.furniture-wrapper {
	width: 100%;
	overflow-y: auto;
	height: 100%;
	flex-direction: column;
	margin-bottom: var(--md-gap);
}

.home-furniture table {
	text-transform: capitalize;
	flex-grow: 1;
	border-spacing: 0;
	flex: 1;
	min-height: 0;
	width: 100%;
	max-width: 20rem;
	display: flex;
	flex-direction: column;
}

.home-furniture table tr {
	display: flex;
	padding: var(--sm-gap);
}

.home-furniture table tr:first-child {
	position: sticky;
	top: 0;
	background: var(--header-background-color);
	z-index: 1;
}

.home-furniture table tr > *:nth-child(1) {
	flex-basis: 20%;
}

.home-furniture table tr > *:nth-child(2) {
	flex-basis: 40%;
}

.home-furniture table tr > *:nth-child(3) {
	flex-basis: 20%;
}

.home-furniture table tr button {
	margin: 0;
	font-size: 0.75em;
}

table .count,
table .space {
	text-align: center;
}

table .name {
	padding: 0 var(--md-gap) 0 0.9rem;
	min-width: 10em;
	text-align: left;
}

table tr:nth-child(2n) {
	background: var(--odd-list-color);
}
</style>
