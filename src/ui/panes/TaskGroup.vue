<script setup>
import game from "@/game";
import settings from "@/modules/settings";
import upgrades from "@/ui/panes/upgrades.vue";
import { computed, ref, watchEffect } from "vue";

const props = defineProps(["id", "group", "preventClick"]);

const prop = computed(() => {
	const [key, items] = props.group;
	return {
		key: key,
		title: key.toTitleCase(),
		items: items,
	};
});

const id = computed(() => `taskGroup_${props.id}_${game.state.pid}`);

const isOpen = ref(true);

watchEffect(() => {
	isOpen.value = settings.getSubVar(id.value, prop.value.key) ?? true;
});

function toggle() {
	isOpen.value = settings.setSubVar(id.value, prop.value.key, !isOpen.value);
}
</script>

<template>
	<div class="taskgroup">
		<div class="titlebar" @click="toggle">
			<span class="arrows">{{ isOpen ? "▼" : "▶" }}</span>
			<span>{{ prop.title }}</span>
			<span>{{ isOpen ? "▼" : "◄" }}</span>
		</div>
		<div v-if="isOpen">
			<upgrades class="task-list" :items="prop.items" :preventClick="props.preventClick" />
		</div>
	</div>
</template>

<style scoped>
div.taskgroup {
	padding: 1px var(--sm-gap);
}

div.titlebar {
	display: grid;
	grid-template-columns: 5% 90% 5%;
	cursor: pointer;
	border: 1px solid #8888;
	background-color: #8881;
	text-align: center;
}
.darkmode .titlebar {
	border: 1px solid black;
}

div.task-list {
	padding: var(--md-gap);
	display: grid;
	justify-items: center;
	grid-template-columns: repeat(auto-fit, var(--task-button-width));
}

div.task-list .runnable:hover {
	background: var(--accent-color-hover);
}

div.task-list .runnable:active {
	background: var(--accent-color-active);
}
</style>
