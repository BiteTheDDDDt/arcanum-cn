<script>
import Game from "@/game";
import Settings from "modules/settings";
import Menu from "@/ui/components/menu.vue";

import Profile from "modules/profile";

import ItemsBase from "@/ui/itemsBase";

import Furniture from "@/ui/sections/furniture.vue";
import SlotPick from "@/ui/components/slotpick.vue";
import { HOME } from "@/values/consts";
import { defineAsyncComponent } from "vue";

/**
 * @emits sell
 */
export default {
	props: ["state"],
	mixins: [ItemsBase],
	components: {
		slotpick: SlotPick,
		hall: defineAsyncComponent(() => import(/* webpackChunkName: "hall-ui" */ "../hall/hall.vue")),
		furniture: Furniture,
		converters: defineAsyncComponent(() => import(/* webpackChunkName: "converters-ui" */ "./converters.vue")),
		"vue-menu": Menu,
	},
	data() {
		let opts = Settings.getSubVars(HOME);

		return {
			hallOpen: false,
			hsection: null,
		};
	},
	methods: {
		openHall() {
			this.hallOpen = true;
		},

		closeHall() {
			this.hallOpen = false;
		},

		gameLoaded() {},
	},
	computed: {
		hallUnlocked() {
			return Game.state.getData("evt_hall") > 0;
		},
		hallName() {
			return Profile.hall.name;
		},

		menuItems() {
			return this.state.sections.filter(it => !this.locked(it) && it.parent === "home");
		},
		section: {
			get() {
				return this.hsection || "sect_furniture";
			},
			set(v) {
				this.hsection = v;
				if (v) Settings.set("homeview", v.id);
			},
		},
	},
	created() {
		let homeview = Settings.get("homeview") || "sect_furniture";
		this.section = Game.state.sections.find(v => v.id === homeview);
	},
};
</script>

<template>
	<div class="home-view">
		<hall v-if="hallOpen" @close="closeHall" />
		<div class="pick-slots">
			<button type="button" class="task-btn" v-if="hallUnlocked" @click="openHall">{{ hallName }}</button>

			<slotpick title="Home" pick="home" must-pay="true" nonetext="Move in" />
			<slotpick title="Werry" hide-empty="true" pick="werry" />
		</div>

		<div class="content">
			<vue-menu class="home-mid" :items="menuItems" v-model="section">
				<template #sect_furniture>
					<furniture class="home-furniture" />
				</template>
				<template #sect_converters>
					<converters />
				</template>
			</vue-menu>
		</div>
	</div>
</template>

<style scoped>
div.home-view {
	display: flex;
	height: 100%;
	width: 100%;
	flex-flow: row nowrap;
	padding-left: 1rem;
	padding-right: 1rem;
}

div.home-mid,
div.home-mid div.menu-items {
	width: 100%;
}

div.home-mid div.home-furniture {
	display: flex;
	overflow-y: auto;
	height: 93%;
	flex-basis: 100%;
}

div.home-view .content {
	display: flex;
	overflow-y: hidden;
	height: 100%;
	flex-direction: row;
	width: 100%;
	padding-top: var(--tiny-gap);
}

div.pick-slots {
	display: flex;
	flex-flow: column nowrap;

	margin-top: 0.9em;
	margin-right: 1rem;
	flex-basis: 5rem;
}
</style>
