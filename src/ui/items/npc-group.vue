<script>
import ProgBar from "@/ui/components/progbar.vue";
import CombatBar from "@/ui/components/combatbar.vue";
import ItemBase from "@/ui/itemsBase";
import DotView from "@/ui/items/dotView.vue";

export default {
	mixins: [ItemBase],
	props: ["npcs", "label"],
	components: {
		bar: CombatBar,
		prog: ProgBar,
		dots: DotView,
	},
};
</script>

<template>
	<div class="npc-group">
		<span class="title" v-if="label">{{ label }}</span>
		<div v-for="p in npcs" :key="p.id">
			<span class="name-span">
				<span @mouseenter.capture.stop="itemOver($event, p)">{{ p.name.toTitleCase() }}</span>
				<dots class="inline" mini="true" :dots="p.dots" :char="p" />
			</span>
			<bar :char="p" @mouseenter.capture.stop="itemOver($event, p)" />
			<prog type="timer" :revbar="true" :smallbar="true" :value="p.timer" :max="p.delay" />
		</div>
	</div>
</template>

<style scoped>
.name-span {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}

.npc-group > div {
	margin: var(--sm-gap);
}

.title {
	font-weight: bold;
	border-bottom: 1px solid var(--separator-color);
}
</style>
