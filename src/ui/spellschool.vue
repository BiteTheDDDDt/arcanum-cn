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
		shown() { return this.spells; },
		list() { return Game.state.spelllist; },
	},
};
</script>

<template>
	<div class="spellschool" v-if="shown.length > 0">
		<div class="schoolfill" :class="[school]" />

		<div class="schooltitle separate" :class="[school]" @click="$emit('toggleOpen', school)">
			<div class="schoolfill" :class="[school]" />
			<div class="title">{{ school }}</div>
			<span class="arrows">{{ isOpen ? "▼" : "▲" }}</span>
		</div>
		<table v-if="isOpen">
			<tr v-for="s in shown" :data-key="s.id" :key="s.id" @mouseenter.capture.stop="itemOver($event, s)"
				:class="[s.school]">
				<td>{{ s.name.toTitleCase() }}</td>
				<td>
					<button type="button" v-if="s.owned" @click="emit('spell', s)" :disabled="!s.canUse(game)">
						Cast
					</button>

					<button v-else type="button" @click="emit('buy', s)" :disabled="!s.canBuy(game)">Learn</button>
					<button type="button" v-if="s.owned && list.canAdd(s)" @click="list.add(s)">Memorize</button>
				</td>
			</tr>
		</table>
	</div>
</template>

<style scoped>
div.spellschool {
	padding: var(--sm-gap);
	overflow-y: auto;
	position: relative;
	flex-direction: column;
}

div.spellschool table {
	display: flex;
	flex-flow: row wrap;
	column-gap: 4px;
}

.spellschool table tr {
	display: flex;
	flex-basis: 49%;
	align-items: center;
}

.spellschool table tr td:nth-child(1) {
	flex: 2;
	flex-basis: 50%;
}

.spellschool table tr td:nth-child(2) {
	flex: 1;
	flex-basis: 45%;
}

div.schooltitle {
	cursor: pointer;
	border: 1px solid #000f;
	padding: 1px;
	margin: -1px 0 0 0px;
	position: relative;
	display: flex;
}

@supports (-moz-appearance: button) and (contain: paint) {
	div.schooltitle {
		cursor: pointer;
		border: 1px solid #000f;
		padding: 1px;
		margin: -1px 0 0 0px;
		position: relative;
		display: flex;
	}
}

div.title {
	text-transform: capitalize;
	font-weight: bold;
	text-align: center;
	flex-grow: 100;
}

div.schoolfill {
	pointer-events: none;
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
	opacity: 0.15;
}

.martial.schoolfill {
	background-color: #ff6900;
}

.mana.schoolfill {
	background-color: #2531b3;
}

.water.schoolfill {
	background-color: var(--water-color);
}

.air.schoolfill {
	background-color: var(--air-color);
}

.fire.schoolfill {
	background-color: var(--fire-color);
}

.earth.schoolfill {
	background-color: var(--earth-color);
}

.nature.schoolfill {
	background-color: var(--nature-color);
}

.spirit.schoolfill {
	background-color: var(--spirit-color);
}

.light.schoolfill {
	background-color: var(--light-color);
}

.shadow.schoolfill {
	background-color: var(--shadow-color);
}

.time.schoolfill {
	background-color: var(--tempus-color);
}

.void.schoolfill {
	background-color: var(--void-color);
}

.summoning.schoolfill {
	background-color: #aaf;
}

.charms.schoolfill {
	background-color: #faf;
}

.astral.schoolfill {
	background-color: #aff;
}

.animation.schoolfill {
	background-color: #cca;
}

.blood.schoolfill {
	background-color: #ac0404;
}

.chaos.schoolfill {
	background-color: #ffae00;
}

.crafted.schoolfill {
	background-color: #a4f;
}
</style>
