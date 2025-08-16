<script>
import Game from "@/game";
import ItemBase from "@/ui/itemsBase.js";
import { alphasort, localeLevelsort } from "@/util/util";
import Settings from "@/modules/settings";
import SlotPick from "@/ui/components/slotpick.vue";
import ProgBar from "@/ui/components/progbar.vue";
import FilterBox from "@/ui/components/filterbox.vue";
import Explore from "@/ui/items/explore.vue";
import { LOG_COMBAT } from "@/events";
import { EXPLORE, DUNGEON, LOCALE, CLASH } from "@/values/consts";
import { defineAsyncComponent } from "vue";

const MAX_ITEMS = 7;

/**
 * Handles display of both Dungeons/Locales.
 */
export default {
	props: ["state"],
	mixins: [ItemBase],
	data() {
		let ops = Settings.getSubVars(EXPLORE);

		return {
			showDone: ops.hasOwnProperty("showDone") ? ops.showDone : true,
			showCombatDungeon: ops.hasOwnProperty("showCombatDungeon") ? ops.showCombatDungeon : true,
			showLocale: ops.hasOwnProperty("showLocale") ? ops.showLocale : true,
			showClash: ops.hasOwnProperty("showClash") ? ops.showClash : true,
			lvlSort: ops.lvlSort,
			log: Game.log,
			filtered: null,
		};
	},
	beforeCreate() {
		this.game = Game;
	},
	components: {
		explore: Explore,
		progbar: ProgBar,
		filterbox: FilterBox,
		inv: defineAsyncComponent(() => import(/* webpackChunkName: "inv-ui" */ "./inventory.vue")),
		slotpick: SlotPick,
	},
	methods: {
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
			if (it.result) {
				for (let p in it.result) {
					let data = game.state.getData(p);
					if (data == null) continue;
					if (data.name.toLowerCase().includes(t.toLowerCase())) return true;
				}
			}
			if (it.loot && it.value > 0) {
				for (let p in it.loot) {
					let data = game.state.getData(p);
					if (data == null) continue;
					if (data.name.toLowerCase().includes(t.toLowerCase())) return true;
				}
			}
			if (it.once) {
				for (let p in it.once) {
					let data = game.state.getData(p);
					if (data == null) continue;
					if (data.name.toLowerCase().includes(t.toLowerCase())) return true;
				}
			}
			return false;
		},
	},
	computed: {
		chkLevelSort: {
			get() {
				return this.lvlSort;
			},
			set(v) {
				this.lvlSort = Settings.setSubVar(EXPLORE, "lvlSort", v);
			},
		},
		chkShowDone: {
			get() {
				return this.showDone;
			},
			set(v) {
				this.showDone = Settings.setSubVar(EXPLORE, "showDone", v);
			},
		},
		chkShowCombatDungeon: {
			get() {
				return this.showCombatDungeon;
			},
			set(v) {
				this.showCombatDungeon = Settings.setSubVar(EXPLORE, "showCombatDungeon", v);
			},
		},
		chkShowClash: {
			get() {
				return this.showClash;
			},
			set(v) {
				this.showClash = Settings.setSubVar(EXPLORE, "showClash", v);
			},
		},
		chkShowLocale: {
			get() {
				return this.showLocale;
			},
			set(v) {
				this.showLocale = Settings.setSubVar(EXPLORE, "showLocale", v);
			},
		},
		mount() {
			return Game.state.getSlot("mount");
		},
		dist() {
			return Game.player.dist;
		},
		drops() {
			return Game.state.drops;
		},
		combatLog() {
			let items = this.log.items;
			let count = 0;
			let a = [];

			for (let i = items.length - 1; i >= 0; i--) {
				var it = items[i];
				if (it.type === LOG_COMBAT) {
					a.push(it);
					if (++count === MAX_ITEMS) break;
				}
			}

			return a;
		},
		explore() {
			return this.state.explore;
		},
		allLocs() {
			// Only sort once.
			return this.state
				.filterItems(it => it.type === DUNGEON || it.type === LOCALE || it.type === CLASH)
				.sort(this.lvlSort ? localeLevelsort : alphasort);
		},
		locales() {
			let d = this.showDone;
			let cd = this.showCombatDungeon;
			let l = this.showLocale;
			let cl = this.showClash;

			return this.allLocs.filter(
				it =>
					!this.locked(it) &&
					(d || it.value <= 0) &&
					(cd || it.type !== DUNGEON) &&
					(l || it.type !== LOCALE) &&
					(cl || it.type !== CLASH),
			);
		},
	},
};
</script>

<template>
	<div class="adventure">
		<!-- also contains combat -->
		<explore v-if="explore.running" :explore="explore" />
		<div class="content" v-else>
			<div class="top">
				<slotpick title="坐骑" pick="mount" />
				<span> 距离： {{ dist.current }} </span>
				<span>
					<span class="opt">
						<input :id="elmId('lvlSort')" type="checkbox" v-model="chkLevelSort" />
						<label :for="elmId('lvlSort')">按等级排序</label>
					</span>
				</span>
				<span>
					<span class="opt">
						<input :id="elmId('showDone')" type="checkbox" v-model="chkShowDone" />
						<label :for="elmId('showDone')">完成</label>
					</span>
					<span class="opt">
						<input :id="elmId('ShowCombatDungeon')" type="checkbox" v-model="chkShowCombatDungeon" />
						<label :for="elmId('ShowCombatDungeon')">地下城</label>
					</span>
					<span class="opt">
						<input :id="elmId('ShowClash')" type="checkbox" v-model="chkShowClash" />
						<label :for="elmId('ShowClash')">对决</label>
					</span>
					<span class="opt">
						<input :id="elmId('showLocale')" type="checkbox" v-model="chkShowLocale" />
						<label :for="elmId('showLocale')">地点</label>
					</span>
				</span>
				<filterbox class="inline" v-model="filtered" :prop="searchIt" :items="locales" />
			</div>
			<div class="locales">
				<div class="locale" v-for="d in filtered" :key="d.id">
					<span class="separate">
						<!-- EVENT MUST BE ON OUTER SPAN - CHROME -->
						<span @mouseenter.capture.stop="itemOver($event, d)">
							<span>{{ d.sname.toString().toTitleCase() }}</span>
							<button type="button" class="raid-btn" :disabled="!game.canRun(d)" @click="emit('task', d)">
								进入
							</button>
						</span>
						<span class="sym">{{ d.sym }}</span>
					</span>
					<progbar :value="d.exp.valueOf()" :max="d.length.valueOf()" />
				</div>
			</div>
		</div>

		<div class="raid-bottom" v-if="explore.running || drops.count > 0">
			<inv class="inv" :inv="state.inventory" types="potion" nosearch="true" combat="true" />
			<div class="log">
				<!--<span v-if="exploring">Exploring...<br></span>-->
				<div class="outlog">
					<div class="log-item" v-for="(it, i) in combatLog" :key="i">
						<div>
							<div>
								<span class="log-title" v-if="it.title">{{ it.title.toString().toTitleCase() }}</span>
							</div>
							<span class="log-text" v-if="it.text">{{ it.text }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.sym {
	align-self: center;
}

div.adventure {
	display: flex;
	padding: 0 1rem;
	align-self: flex-start;
	flex-flow: column;
	padding: 0;
	margin: 0;
	height: 100%;
	overflow-y: hidden;
}

div.adventure .content {
	flex-basis: 70%;
	flex-grow: 1;
	overflow: hidden;
}

div.top {
	padding-left: var(--md-gap);
	width: 100%;
	justify-content: space-evenly;
}

div.locales {
	display: flex;
	flex-flow: row wrap;
	grid-gap: 0;
	flex-grow: 1;
	justify-content: space-between;
	overflow-y: auto;
	min-height: 50%;
	height: 100%;
	padding: var(--tiny-gap) var(--md-gap);
}

div.locales .locale {
	flex-basis: 48%;
}

body.compact div.adventure > div.locales {
	display: grid;
	grid-template-columns: minmax(9rem, 1fr) repeat(auto-fit, minmax(9rem, 1fr));
}

body.compact div.adventure > div.locales .locale {
	background: var(--list-entry-background);
}

body.compact div.adventure > div.locales .locale .bar {
	border: none;
}

div.adventure > div.locales .locale {
	padding: var(--md-gap);
	border-radius: var(--list-entry-border-radius);
	display: flex;
	flex-flow: column;
	height: 100%;
}

div.adventure > div.locales .locale > span:nth-child(1) {
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	flex: 1;
}

div.raid-bottom {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	border-top: 1px solid var(--separator-color);
	width: 100%;
	height: 35%;
	overflow-y: auto;
}

.menu-content div.adventure .log span {
	padding: var(--sm-gap);
}

.menu-content div.adventure .log .outlog {
	overflow-y: auto;
	overflow-x: hidden;
}

.raid-bottom .log {
	flex: 1;
	font-size: var(--compact-small-font);
	border-left: 1px solid var(--separator-color);
	display: flex;
	flex-direction: column;
	flex-basis: 50%;
	flex-grow: 1;
	margin: 0;
}
</style>
