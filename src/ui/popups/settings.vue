<script>
import Settings from "modules/settings";
import { centerX } from "@/ui/popups/popups";
import tasks from "ui/sections/tasks.vue";
import resources from "ui/panes/resources.vue";
import Menu from "@/ui/components/menu.vue";
import Game from "@/game.js";
import ItemsBase from "ui/itemsBase.js";

/**
 * @emits save-settings
 * @emits setting
 */
export default {
	mixins: [ItemsBase],
	components: {
		"vue-menu": Menu,
		resources,
		tasks,
	},
	emits: ["close-settings"],

	data() {
		let vars = Settings.vars;
		let curview = Settings.get("curview") || "sect_settings_main";

		return {
			psection: null,
			sCompactMode: vars.compactMode,
			sDarkMode: vars.darkMode,
			sSmoothBars: vars.smoothBars,
			sDebugRate: vars.debugRate,
			sTotalRate: vars.totalRate,
			saves: Object.assign({}, Settings.getSubVars("saves")),
		};
	},

	updated() {
		centerX(this.$el);
	},

	created() {
		this.psection = Game.state.sections.find(v => v.id === "sect_settings_main");
		for (let p in Settings.vars) {
			this.dispatch("setting", p, Settings.vars[p]);
		}
	},

	methods: {
		clear() {},

		close() {
			this.dispatch("save-settings");
			this.$emit("close-settings");
		},
	},

	computed: {
		menuItems() {
			return Game.state.sections.filter(it => it.parent === "settings");
		},
		compactMode: {
			get() {
				return this.sCompactMode;
			},
			set(v) {
				Settings.set("compactMode", v);
				this.sCompactMode = v;
				this.dispatch("setting", "compactMode", v);
			},
		},
		autosave: {
			get() {
				return this.saves.autosave;
			},
			set(v) {
				this.saves.autosave = Settings.setSubVar("saves", "autosave", v);
				this.dispatch("setting", "autosave", v);
			},
		},
		darkMode: {
			get() {
				return this.sDarkMode;
			},
			set(v) {
				Settings.set("darkMode", v);
				this.sDarkMode = v;
				this.dispatch("setting", "darkMode", v);
			},
		},
		smoothBars: {
			get() {
				return this.sSmoothBars;
			},
			set(v) {
				Settings.set("smoothBars", v);
				this.sSmoothBars = v;
				this.dispatch("setting", "smoothBars", v);
			},
		},
		debugRate: {
			get() {
				return this.sDebugRate;
			},
			set(v) {
				Settings.set("debugRate", v);
				this.sDebugRate = v;
				this.dispatch("setting", "debugRate", v);
			},
		},
		totalRate: {
			get() {
				return this.sTotalRate;
			},
			set(v) {
				Settings.set("totalRate", v);
				this.sTotalRate = v;
				this.dispatch("setting", "totalRate", v);
			},
		},
		autoSaveTip() {
			return "Periodically save current game.";
		},
	},
};
</script>

<template>
	<div :class="['settings', 'popup']">
		<vue-menu class="game-mid" :items="menuItems" v-model="psection">
			<template #sect_settings_main>
				<div>
					<label :for="elmId('dark-mode')">Dark Mode</label>
					<input type="checkbox" :id="elmId('dark-mode')" v-model="darkMode" />
				</div>
				<div>
					<label :for="elmId('compact-mode')">Compact Mode</label>
					<input type="checkbox" :id="elmId('compact-mode')" v-model="compactMode" />
				</div>

				<div>
					<label :for="elmId('smooth-bars')">Smooth bars</label>
					<input type="checkbox" :id="elmId('smooth-bars')" v-model="smoothBars" />
				</div>
				<div>
					<label :for="elmId('auto-save')">Auto-Save</label>
					<input type="checkbox" :id="elmId('auto-save')" v-model="autosave" />
					<div class="calc-text">
						Periodically save game to storage. Game is saved to Browser storage by default.
					</div>
				</div>
			</template>
			<template #sect_settings_extra>
				<h3>Tooltip Stats</h3>
				<div>
					<label :for="elmId('debug-rate')">Expand Resource Rate</label>
					<input type="checkbox" :id="elmId('debug-rate')" v-model="debugRate" />
					<div class="calc-text">
						Show calculated resource income from modified rate R, converters C, running tasks T, and buffs
						B.
					</div>
				</div>
				<div>
					<label :for="elmId('total-rate')">Display total task effects</label>
					<input type="checkbox" :id="elmId('total-rate')" v-model="totalRate" />
					<div class="calc-text">
						Shows remaining costs to pay and resources to acquire until next completion (for tasks with
						completion time of more than 1 second)
					</div>
				</div>
			</template>
		</vue-menu>
		<hr />

		<div class="buttons">
			<span>
				<confirm @confirm="dispatch('reset')">Wipe Wizard</confirm>
				<confirm @confirm="dispatch('resetHall')">Wipe Hall Save</confirm>
			</span>

			<button type="button" class="close" @click="close">Close</button>
		</div>
	</div>
</template>

<style scoped>
.settings {
	height: auto;
	min-height: 17rem;
	min-width: 30%;
	max-width: 60%;
	position: absolute;
	z-index: 10000;
	top: 3rem;
	background: var(--background-color);
	border: var(--popup-border);
	border-radius: 0.2rem;
	padding: var(--md-gap);
}

hr {
	margin-bottom: 2.2rem;
}

.menu-content > h3 {
	margin: 0.1em;
}

.menu-content > div {
	padding: 0.1rem 0.3rem 0 0.3rem;
}

div.full div.game-mid {
	border-left: 0;
	border-right: 0;
}

.buttons {
	display: flex;
	position: absolute;
	bottom: var(--md-gap);
	right: var(--md-gap);
	left: var(--md-gap);
	justify-content: space-between;
}
</style>
