<script>
import { defineAsyncComponent, reactive, isReactive, isReadonly } from "vue";
import Profile from "modules/profile";
import Game from "@/game";
import Menu from "@/ui/components/menu.vue";
import ResourcesView from "@/ui/panes/resources.vue";
import Tasks from "@/ui/sections/tasks.vue";
import Quickbar from "@/ui/quickbar.vue";
import ItemsBase from "@/ui/itemsBase";
import Vitals from "@/ui/panes/vitals.vue";
import DotView from "@/ui/items/dotView.vue";
import TopBar from "@/ui/top-bar.vue";

import Warn from "ui/popups/warn.vue";
import ItemPopup, { RollOver, ItemOut } from "./popups/itemPopup.vue";
import SettingsUI from "@/ui/popups/settings.vue";

import LogView from "@/ui/outlog.vue";

import Settings from "modules/settings";
import Cheats from "@/debug/cheats";
import DevConsole from "@/debug/devconsole.vue";

import { TRY_BUY, USE, TRY_USE, EVT_STAT } from "@/events";
import { TICK_TIME } from "@/game";
import { TASK } from "@/values/consts";
import { precise } from "@/util/format.js";

/**
 * @const {number} SAVE_TIME  - time in seconds between auto-saves.
 */
const SAVE_TIME = 30;
const SAVE_MSG =
	"As you currently own the Wizard hall, exporting the character file will not allow you to bring any hall progression over. Are you sure you want to export only the character data?";

/**
 * @listens [sell]
 */
export default {
	//mixins:__DIST ? [ItemsBase] : [ItemsBase,Cheats],\
	mixins: [ItemsBase, Cheats],
	components: {
		devconsole: DevConsole,
		resources: ResourcesView,
		tasks: Tasks,
		itempopup: ItemPopup,
		vitals: Vitals,
		log: LogView,
		quickbar: Quickbar,
		dots: DotView,
		warn: Warn,
		topbar: TopBar,
		settings: SettingsUI,
		login: defineAsyncComponent(() => import("./popups/login.vue")),
		register: defineAsyncComponent(() => import("./components/register.vue")),
		activities: defineAsyncComponent(() => import("./popups/activities.vue")),
		choice: defineAsyncComponent(() => import("./popups/choice.vue")),
		skills: defineAsyncComponent(() => import("./sections/skills.vue")),
		equip: defineAsyncComponent(() => import("./sections/equip.vue")),
		craft: defineAsyncComponent(() => import("./sections/crafting.vue")),
		inventory: defineAsyncComponent(() => import("./sections/inventory.vue")),
		potions: defineAsyncComponent(() => import("./sections/potions.vue")),
		home: defineAsyncComponent(() => import("./sections/home.vue")),
		player: defineAsyncComponent(() => import("./sections/player.vue")),
		bestiary: defineAsyncComponent(() => import("./sections/bestiary.vue")),
		travelogue: defineAsyncComponent(() => import("./sections/travelogue.vue")),
		spells: defineAsyncComponent(() => import("./sections/spells.vue")),
		adventure: defineAsyncComponent(() => import("./sections/adventure.vue")),
		enchanting: defineAsyncComponent(() => import("./sections/enchanting.vue")),
		minions: defineAsyncComponent(() => import("./sections/minions.vue")),
		scraft: defineAsyncComponent(() => import("./sections/scraft.vue")),
		glossary: defineAsyncComponent(() => import("./sections/glossary.vue")),
		"vue-menu": Menu,
	},
	data() {
		return {
			displayError: null,

			timed: false,
			debugTimer: [],
			state: null,
			psection: null,
			togRegister: false,
			showLogin: false,
			togSettings: false,
			// toggle activity manager
			togActivities: false,
			showQuickbar: true,
		};
	},

	beforeCreate() {
		/**
		 * @property {number} loopId - interval id for game loop.
		 */
		this.loopId = 0;
		/**
		 * @property {number} repeaterId - interval id for auto-repeating click.
		 */
		this.repeaterId = 0;

		/**
		 * @property {(evt)=>null} repeatEndFunc - mouseup func to end repeater.
		 */
		this.repeatEndFunc = null;

		/**
		 * @property {NodeJS.Timeout} mainLoopTimeout - reference to ongoing main loop
		 */
		this.mainLoopTimeout = null;
	},

	created() {
		this.Profile = Profile;

		this.listen("load-error", this.onLoadError);
		this.listen("game-loaded", this.gameLoaded);
		this.listen("setting", this.onSetting);

		this.listen("pause", this.pause);
		this.listen("unpause", this.unpause);

		this.listen("show-register", this.onShowRegister, this);
		this.listen("show-login", this.onShowLogin, this);
	},
	beforeUnmount() {
		ItemOut();
		this.endRepeater();

		this.removeListener("load-error", this.onLoadError);
		this.removeListener("game-loaded", this.gameLoaded);
		this.removeListener("setting", this.onSetting);
		this.removeListener("pause", this.pause);
		this.removeListener("unpause", this.unpause);

		this.removeListener("show-register", this.onShowRegister);
		this.removeListener("show-login", this.onShowLogin);
	},
	methods: {
		onLoadError(err) {
			this.displayError = err;
		},

		gameLoaded() {
			this.state = Game.state;

			let curview = Settings.get("curview") || "sect_main";
			this.section = this.state.sections.find(v => v.id === curview);

			this.initEvents();
		},

		/**
		 * Listen non-system events.
		 */
		initEvents() {
			this.add("save-file-check", this.trySave);
			this.add("sell", this.onSell);
			this.add("take", this.onTake);

			this.add("upgrade", this.onItem);
			this.add(TASK, this.onItem);
			this.add("spell", this.onItem);

			this.add("equip", this.onEquip);
			this.add("unequip", this.onUnequip);
			this.add("enchant", this.onEnchant);
			this.add("craft", this.onCraft);
			// display warn dialog.
			this.add("warn", this.onWarn);

			this.add("showActivities", () => {
				this.togActivities = true;
			});

			this.add("repeater", this.makeRepeater, this);
			this.add("endrepeater", this.endRepeater, this);

			this.add(TRY_USE, this.tryUse);
			this.add(USE, this.onUse);

			this.add("quickslot", this.doQuickslot);

			this.add(TRY_BUY, this.onBuy);

			// dispatch start stats.
			this.dispatch(EVT_STAT, "titles", this.state.player.titles.length);
			this.dispatch(EVT_STAT, "level", this.state.getData("level").valueOf());
			this.dispatch(EVT_STAT, "prestige", this.state.getData("prestige").valueOf());
		},

		onSetting(setting, val) {
			if (setting === "autosave") {
				if (val) this.startAutoSave();
				else this.stopAutoSave();
			}
		},

		onShowLogin() {
			this.showLogin = true;
		},
		onShowRegister() {
			this.togRegister = true;
		},

		stopAutoSave() {
			if (this.saver) {
				let int = this.saver;
				this.saver = null;
				clearInterval(int);
			}
		},

		startAutoSave() {
			if (!this.isMainLoopActive()) return;
			const s = Settings;
			let setting = s.get("autosave");

			if (!this.saver) {
				this.saver = setInterval(() => this.dispatch("autosave"), 1000 * SAVE_TIME);
			}
		},

		pause() {
			if (this.isMainLoopActive()) {
				clearTimeout(this.mainLoopTimeout);
				this.mainLoopTimeout = null;
			}
			this.stopAutoSave();
			this.endRepeater();

			if (this.keyListen) window.removeEventListener("keydown", this.keyListen, false);
		},

		/**
		 * Item repeats until released.
		 * @param {GData} it - item being used.
		 */
		makeRepeater(it) {
			if (this.repeaterId) {
				clearInterval(this.repeaterId);
				this.repeaterId = 0;
			}
			this.repeaterId = setInterval(t => Game.tryItem(t), 50, it);
		},

		/**
		 * Cancel active repeater.
		 */
		endRepeater() {
			if (this.repeaterId) {
				clearInterval(this.repeaterId);
				this.repeaterId = 0;
			}
			if (this.repeatEndFunc) {
				document.removeEventListener("mouseup", this.repeatEndFunc);
				this.repeatEndFunc = null;
			}
		},

		unpause() {
			if (!Game.loaded) return;

			if (!this.isMainLoopActive()) this.mainLoop();

			this.keyListen = evt => {
				if (evt.repeat) return;
				this.keyDown(evt);
				evt.stopPropagation();
			};

			window.addEventListener("keydown", this.keyListen, false);
			this.startAutoSave();
		},

		isMainLoopActive() {
			return this.mainLoopTimeout;
		},

		mainLoop() {
			this.mainLoopLogic();

			this.mainLoopTimeout = setTimeout(() => this.mainLoop(), TICK_TIME);
		},

		mainLoopLogic() {
			let time = 0;

			if (this.timed) {
				time = performance.now();
				if (this.timed <= 1) this.timed = Date.now();
			}

			Game.update();

			if (this.timed) {
				const ind = this.debugTimer.push(performance.now() - time) - 1;
				let sumTime = this.debugTimer.reduce((a, b) => a + b);
				console.log(
					`frame(${this.debugTimer.length}): ${precise(this.debugTimer[ind])}ms	` +
						`avg: ${precise(sumTime / this.debugTimer.length)}ms	` +
						`max: ${precise(Math.max(...this.debugTimer))}ms	` +
						`min: ${precise(Math.min(...this.debugTimer))}ms	`,
				);
				if (Date.now() - this.timed >= 30000) {
					this.finishDebugTiming();
				}
			}
		},
		finishDebugTiming() {
			console.log(
				`Done timing! Timed: ${Date.now() - this.timed}ms	Sum of frames: ${precise(this.debugTimer.reduce((a, b) => a + b))}ms`,
			);
			this.timed = false;
			this.debugTimer.length = 0;
		},
		handleTurboModeChange() {
			Game.isInTurboMode.value = !Game.isInTurboMode.value;
		},
		keyDown(e) {
			if (!this.isMainLoopActive()) return;

			if (e.key === "t") {
				if (!this.timed) this.timed = true;
				else this.finishDebugTiming();
			}
			let slice = e.code.slice(0, -1);
			if (slice === "Digit" || slice === "Numpad") {
				let num = Number(e.code.slice(-1));

				if (e.altKey) {
					let oldid = Game.state.currentSpellLoadout;

					let newloadout = Game.state.spellLoadouts.items[num - 1];

					if (newloadout !== undefined) {
						Game.state.spellLoadouts.changeLoadout(Game.state, newloadout.id);
					}
				} else if (e.shiftKey && RollOver.item) {
					let it = RollOver.item;
					this.state.setQuickSlot(RollOver.item, num);
				} else {
					let it = this.state.getQuickSlot(num);
					if (it) this.doQuickslot(it);
				}
			}
		},

		doQuickslot(it) {
			Game.tryItem(it.slotTarget(Game));
		},

		onEquip(it, inv) {
			Game.equip(it, inv);
		},

		onUnequip(slot, it) {
			Game.unequip(slot, it);
		},

		onTake(it) {
			Game.take(it);
		},

		onCraft(it) {
			Game.craft(it);
		},

		/**
		 * Use instanced item.
		 */
		onUse(it, inv) {
			Game.use(it, inv);
		},

		/**
		 * @param {Enchant} e - enchantment
		 * @param {Item} targ - enchant target.
		 */
		onEnchant(e, targ) {
			Game.tryUseOn(e, targ);
		},

		onSell(it, inv, count) {
			Game.trySell(it, inv, count);
		},

		itemOut: ItemOut,

		/**
		 * Item clicked.
		 */
		trySave(e) {
			if (this.hasHall) {
				this.$refs.warn.show(SAVE_MSG, null, true, e);
			} else this.dispatch("save-file", e);
		},
		onItem(item) {
			if (item.warn) {
				//&& !Settings.getSubVar('nowarn', item.id)) {

				this.$refs.warn.show(item);
			} else Game.tryItem(item);
		},

		onConfirmed(it, nowarn, e = null) {
			if (typeof it !== "string") {
				it.warn = !nowarn;
				Game.tryItem(it);
			}
			if (typeof it == "string" && it === SAVE_MSG) {
				this.dispatch("save-file", e);
			}
		},

		/**
		 * Warning should trigger.
		 * @param {string} msg - warning message
		 * @param {()=>{}} res - success callback.
		 */
		onWarn(msg, res) {
			this.$refs.warn.show(msg, res);
		},

		tryUse(it) {
			Game.tryItem(it);
		},

		/**
		 * Buy a spell or item without casting/using the item or its mods.
		 * @property {Item} item - item to buy.
		 */
		onBuy(item) {
			Game.tryBuy(item);
		},
	},

	computed: {
		hasHall() {
			return Profile.hasHall();
		},
		section: {
			get() {
				return this.psection;
			},
			set(v) {
				this.psection = v;
				if (v) Settings.set("curview", v.id);
			},
		},

		menuItems() {
			return this.state.sections.filter(it => !this.locked(it) && !it.parent);
		},

		hall() {
			return Profile.hall;
		},

		mergedresources() {
			return this.state.resources.concat(this.hall.resources);
		},
		drops() {
			return Game.state.drops;
		},

		turboButton() {
			return {
				backgroundColor: Game.isInTurboMode.value ? "green" : "",
			};
		},
	},
};
</script>

<template>
	<div class="full" @mouseover.capture.stop="itemOut($event)">
		<devconsole />
		<topbar @open-settings="togSettings = true">
			<template #center>
				<button
					type="button"
					v-if="state"
					@mouseenter.capture.stop="
						itemOver($event, null, null, null, 'Use stored time to speed up the game')
					"
					@click="handleTurboModeChange"
					:style="turboButton">
					Fast-forward
				</button>
				<span class="load-message" v-if="!state">LOADING DATA...</span>
				<span class="load-error" v-if="displayError">ERROR {{ displayError }}</span>
				<dots v-if="state" :dots="state.player.dots" />
			</template>
		</topbar>

		<!-- popups -->
		<itempopup />
		<warn ref="warn" @confirmed="onConfirmed" />
		<choice />
		<register v-if="Profile.CLOUD && togRegister" @close="togRegister = false" />
		<login v-if="Profile.CLOUD && showLogin" @close="showLogin = false" />
		<settings v-if="togSettings" @close-settings="togSettings = false" />
		<activities v-if="togActivities" @close="togActivities = false" />
		<!-- end popups -->

		<span class="load-message" v-if="displayError">
			Please try refreshing the page few times. If problem persists, you can seek help through Discord.
		</span>
	<div v-if="state" class="game-main" :style="{ paddingBottom: showQuickbar ? '1em' : '0' }">
			<resources :items="mergedresources" />
			<vue-menu class="game-mid" :items="menuItems" v-model="section">
				<template #sect_main>
					<tasks class="main-tasks" />
				</template>

				<template #sect_skills>
					<skills :state="state" />
				</template>

				<template #sect_player>
					<player />
				</template>

				<template #sect_home>
					<home :state="state" />
				</template>

				<template #sect_raid>
					<adventure :state="state" />
				</template>

				<template #sect_loot>
					<inventory :inv="drops" :take="true" />
				</template>

				<template #sect_equip>
					<div class="inv-equip">
						<equip :equip="state.equip" />
						<inventory :inv="state.inventory" />
					</div>
				</template>

				<template #sect_craft>
					<craft />
				</template>

				<template #sect_spells>
					<spells />
				</template>

				<template #sect_scraft>
					<scraft />
				</template>

				<template #sect_potions>
					<potions />
					<inventory :inv="state.inventory" types="potion" />
				</template>

				<template #sect_bestiary>
					<bestiary />
				</template>

				<template #sect_travelogue>
					<travelogue />
				</template>

				<template #sect_minions>
					<minions />
				</template>

				<template #sect_enchant>
					<enchanting />
				</template>

				<template #sect_glossary>
					<glossary />
				</template>
			</vue-menu>

			<vitals :state="state" />
			<log />
		</div>

		<div v-if="state" style="position:fixed;bottom:2.5em;right:1.5em;z-index:202;text-align:center;">
			<div style="font-size:0.95em;color:#444;margin-bottom:0.2em;">快捷栏显示/隐藏</div>
			<button
				class="quickbar-toggle-bottom"
				@click="showQuickbar = !showQuickbar"
				title="{{ showQuickbar ? '隐藏快捷栏' : '显示快捷栏' }}"
				style="background:#eee;border:1px solid #aaa;border-radius:50%;width:2em;height:2em;font-size:1.3em;cursor:pointer;opacity:0.85;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px #0002;"
			>{{ showQuickbar ? '✕' : '≡' }}</button>
		</div>
		<template v-if="state && showQuickbar && (state.bars.active.slots.some(v => v.item != null) || true)">
			<quickbar
				v-if="state.bars.active.slots.some(v => v.item != null)"
				:class="['quickbar', 'bot-bar', { hide: !showQuickbar }]"
				:bars="state.bars"
				@close="showQuickbar = false"
			/>
			<div
				v-else
				class="bot-bar"
				style="display:flex;align-items:center;justify-content:center;font-size:1.2em;line-height:1.4em;min-height:3em;width:100%;color:#666;"
			>
				将鼠标移到物品上并按住 <b>Shift</b> + <b>数字</b> 分配到快捷栏。再次按 <b>数字</b> 可使用对应快捷栏物品。
			</div>
		</template>
	</div>
</template>

<style scoped>
div.full {
	display: flex;
	background: inherit;
	flex-direction: column;
	min-width: 50vw;
	height: 100vh;
}

div.game-main {
	flex: 1 1 auto;
	min-height: 0;
	overflow-y: auto;
}

div.game-mid div.main-tasks {
	overflow-y: auto;
	height: 100%;
}

div.upgrade-list {
	min-height: 0;
	/*border-top: 1px solid var( --separator-color );*/
	margin-top: var(--sm-gap);
}

div.inv-equip {
	height: 100%;
	padding: 0;
	display: grid;
	grid-template-rows: 50% 50%;
	grid-auto-columns: 1fr;
}

div.inv-equip > div:nth-child(2) {
	border-top: 1px solid var(--separator-color);
}

div.bot-bar {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	background: inherit;
	border-top: 1px solid var(--separator-color);
	padding: var(--md-gap);
	z-index: 201;
}

span.load-message {
	padding: var(--md-gap) var(--md-gap) var(--md-gap);
}

span.load-error {
	padding: var(--md-gap) var(--md-gap) var(--md-gap);
	color: red;
}
</style>
