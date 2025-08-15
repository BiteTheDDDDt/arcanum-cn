<script>
import Game from "@/game";
import { alphasort } from "@/util/util";

export default {
	methods: {
		count(it) {
			return it.value > 1 ? " (" + Math.floor(it.value) + ")" : "";
		},
	},
	computed: {
		classes() {
			return Game.state.classes.filter(v => !v.disabled && v.value >= 1);
		},
		tiers() {
			return Game.state.upgrades.filter(v => v.max >= 1 && !v.disabled && v.value >= 1 && v.wizardtier);
		},
		tasks() {
			return Game.state.tasks
				.filter(v => v.max >= 1 && !v.disabled && v.value >= 1 && !v.morality)
				.sort(alphasort);
		},
		morals() {
			return Game.state.tasks
				.filter(v => v.max >= 1 && !v.disabled && v.value >= 1 && v.morality)
				.sort(alphasort);
		},
		upgrades() {
			return Game.state.upgrades.filter(v => !v.disabled && v.value >= 1 && !v.wizardtier).sort(alphasort);
		},
		hallUpgrades() {
			return Object.values(Game.state.items)
				.filter(
					v =>
						v.type === "upgrade" &&
						!this.upgrades.includes(v) &&
						!v.disabled &&
						v.value >= 1 &&
						!v.wizardtier,
				)
				.sort(alphasort);
		},
	},
};
</script>

<template>
	<div class="allupgrades">
		<div class="up-list">
			<div v-if="classes.length != 0" class="div-hr">Classes</div>
			<div v-for="it in classes" :key="it.id" @mouseenter.capture.stop="itemOver($event, it)">
				{{ it.name.toTitleCase() + count(it) }}
			</div>
			<div v-if="tiers.length != 0" class="div-hr">Tiers</div>
			<div v-for="it in tiers" :key="it.id" @mouseenter.capture.stop="itemOver($event, it)">
				{{ it.name.toTitleCase() + count(it) }}
			</div>
			<div v-if="morals.length != 0" class="div-hr">Morality</div>
			<div v-for="it in morals" :key="it.id" @mouseenter.capture.stop="itemOver($event, it)">
				{{ it.name.toTitleCase() + count(it) }}
			</div>
			<div v-if="tasks.length != 0" class="div-hr">Tasks</div>
			<div v-for="it in tasks" :key="it.id" @mouseenter.capture.stop="itemOver($event, it)">
				{{ it.name.toTitleCase() + count(it) }}
			</div>
			<div v-if="upgrades.length != 0" class="div-hr">Upgrades</div>
			<div v-for="it in upgrades" :key="it.id" @mouseenter.capture.stop="itemOver($event, it)">
				{{ it.name.toTitleCase() + count(it) }}
			</div>
			<div v-if="hallUpgrades.length != 0" class="div-hr">Hall Upgrades</div>
			<div v-for="it in hallUpgrades" :key="it.id" @mouseenter.capture.stop="itemOver($event, it)">
				{{ it.name.toTitleCase() + count(it) }}
			</div>
		</div>
	</div>
</template>

<style scoped>
div.allupgrades {
	display: flex;
	flex-flow: column nowrap;
	height: 100%;
}

div.up-list {
	margin-bottom: 1rem;
	overflow-x: visible;
}
</style>
