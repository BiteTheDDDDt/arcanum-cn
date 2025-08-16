<script>
import ItemsBase from "ui/itemsBase";
import { formatNumber } from "@/util/format";
import Game from "@/game";

export default {
	props: {
		spells: {
			type: Array,
			required: true,
		},
		school: {
			type: String,
			required: true,
		},
		isOpen: {
			type: Boolean,
		},
		mode: {
			type: String,
		},
	},
	mixins: [ItemsBase],
	emits: ["toggleOpen"],
	created() {
		this.game = Game;
	},
	methods: {
		formatNumber: formatNumber,
	},
	computed: {
		shown() {
			return this.mode === "scraft" ? this.spells.filter(it => !it.hasTag("t_nospellcraft")) : this.spells;
		},
		list() {
			return Game.state.spelllist;
		},
		scraftlist() {
			return Game.state.scraftlist;
		},
	},
};
</script>

<template>
	<div class="spellschool" :class="[school, 'bg']" v-if="shown.length > 0">
		<div class="schooltitle" :class="[school, 'fill']" @click="$emit('toggleOpen', school)">
			<span>{{ isOpen ? "▼" : "▶" }}</span>
			<span>{{ school }}</span>
			<span>{{ isOpen ? "▼" : "◀" }}</span>
		</div>
		<div class="schoolspells" v-if="isOpen">
			<template v-for="s in shown">
				<div class="spell" @mouseenter.capture.stop="itemOver($event, s)">
					<span>{{ s.name.toTitleCase() }}</span>
					<div>
						<button
							v-if="s.owned && !(mode === 'scraft')"
							@click="emit('spell', s)"
							:disabled="!s.canUse(game)"
							class="spellButton">
							施放
						</button>
						<button
							v-else-if="!s.owned"
							@click="emit('buy', s)"
							:disabled="!s.canBuy(game)"
							class="spellButton">
							学习
						</button>
						<button
							v-if="s.owned && list.canAdd(s) && list.max.value > 0 && !(mode === 'scraft')"
							@click="list.add(s)"
							class="spellButton">
							记忆
						</button>
						<button
							v-if="s.owned && mode === 'scraft'"
							@click="scraftlist.add(s)"
							:disabled="!scraftlist.canAdd(s)"
							class="spellButton">
							+
						</button>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<style scoped>
.spellschool {
	padding: 1px var(--sm-gap);
	overflow-y: auto;
	position: relative;
	flex-direction: column;
}

.schooltitle {
	display: grid;
	grid-template-columns: 5% 90% 5%;
	cursor: pointer;
	border: 1px solid #888;
	text-align: center;
	text-transform: capitalize;
	font-weight: bold;
}

.darkmode .schooltitle {
	border: 1px solid black;
}

.schoolspells {
	display: grid;
	grid-template-columns: 50% 50%;
	align-content: flex-start;
	row-gap: 1px;
	margin: 2px 0;
}

@media only screen and (max-width: 1440px) {
	.schoolspells {
		display: grid;
		grid-template-columns: 100%;
		align-content: flex-start;
		row-gap: 1px;
		margin: 2px 0;
	}
}

.spell {
	display: grid;
	grid-template-columns: 60% 35%;
	margin-left: 5%;
}

.spell span {
	display: inline-block;
	align-content: center;
}

.spellButton {
	background-color: #bbb7;
	border-color: #777;
}

.spellButton:hover {
	background-color: #888e;
}

.spellButton:disabled {
	color: #777;
	background-color: #bbb3;
}

.darkmode .spellButton {
	color: #ccc;
	border-color: #111;
	background-color: #5557;
}

.darkmode .spellButton:hover {
	background-color: #666e;
}

.darkmode .spellButton:disabled {
	color: #000;
	background-color: #5557;
}
</style>
