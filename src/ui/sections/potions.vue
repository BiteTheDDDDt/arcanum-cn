<script>
import Game from "@/game";

import FilterBox from "@/ui/components/filterbox.vue";
import ItemsBase from "@/ui/itemsBase";
import { TRY_BUY } from "@/events";

export default {
	mixins: [ItemsBase],
	data() {
		return {
			/**
			 * @property {Item[]} filtered - filtered search results.
			 */
			filtered: null,
		};
	},

	components: {
		inv: () => import(/* webpackChunkName: "inv-ui" */ "./inventory.vue"),
		filterbox: FilterBox,
	},
	beforeCreate() {
		this.game = Game;
	},
	computed: {
		potions() {
			return Game.state.potions.filter(v => !this.locked(v));
		},
		BUY() {
			return TRY_BUY;
		},
	},
};
</script>

<template>
	<div class="potions">
		<filterbox v-model="filtered" :items="potions" :min-items="7" />

		<div class="potion-col">
			<div
				v-for="it in filtered"
				class="separate"
				:key="'sect-pot-' + it.id"
				@mouseenter.capture.stop="itemOver($event, it)">
				<span>{{ it.name.toTitleCase() }}</span>

				<button
					type="button"
					v-if="it.buy && !it.owned"
					:disabled="!it.canBuy(game) || (game.state.inventory.full() && !game.state.inventory.findMatch(it))"
					@click="emit(BUY, it)">
					🔒
				</button>
				<button
					v-else
					type="button"
					:disabled="!it.canUse() || (game.state.inventory.full() && !game.state.inventory.findMatch(it))"
					@click="emit('craft', it)">
					Brew
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
div.potions .potion-col {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 0.5fr));
	column-gap: var(--lg-gap);
	overflow-x: hidden;
	width: 100%;
}

div.flex-col .separate {
	width: 48%;
}

div.potions {
	padding: 0 1rem;
}
</style>
