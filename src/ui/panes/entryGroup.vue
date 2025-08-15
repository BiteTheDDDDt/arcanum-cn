<script>
import ItemsBase from "ui/itemsBase";
import { formatNumber } from "@/util/format";
export default {
	/**
	 * @property {string} group - displayed group name.
	 * @property {object<string,boolean>} - elements to hide.
	 */
	props: ["items", "group", "hide"],
	mixins: [ItemsBase],
	emits: ["update:modelValue"],
	inject: ["selected"],
	methods: {
		formatNumber: formatNumber,
	},
	data() {
		return {
			isOpen: true,
		};
	},
	computed: {
		shown() {
			const a = [];
			const len = this.items.length;
			for (let i = 0; i < len; i++) {
				const it = this.items[i];
				if (!this.reslocked(it) && !this.hide[it.id]) a.push(it);
			}

			return a;
		},
	},
};
</script>

<template>
	<div v-if="shown.length > 0">
		<div class="groupTitle separate" @click="isOpen = !isOpen">
			<span>{{ group }}</span>
			<span class="arrows">{{ isOpen ? "▼" : "▲" }}</span>
		</div>
		<div v-if="isOpen" class="gloss-items">
			<div class="rsrc separate hidable gloss-item" v-for="it in shown" :data-key="it.id" :key="it.id">
				<span v-if="it != selected" @click="selected = it">
					<u>{{ it.name.toTitleCase() }}</u>
				</span>
				<span v-else>{{ it.name.toTitleCase() }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
div.groupTitle {
	cursor: pointer;
	text-transform: capitalize;
	color: var(--title-text-color);
	border: 1px solid var(--list-header-border);
	background-color: var(--list-header-color);
	padding: 1px;
	margin: -1px 0 0 0px;
}

@supports (-moz-appearance: button) and (contain: paint) {
	div.groupTitle {
		cursor: pointer;
		text-transform: capitalize;
		color: var(--title-text-color);
		border: 1px solid var(--list-header-border);
		background-color: var(--list-header-color);
	}
}

.rsrc .item-name {
	flex: 1;
	color: #999;
	padding-right: var(--sm-gap);
}

.gloss-items .gloss-item {
	color: #000;
}

body.darkmode .gloss-items .gloss-item {
	color: #fff;
}

.gloss-items .gloss-item u {
	color: #999;
}

.gloss-items .gloss-item:hover,
.gloss-items .gloss-item u:hover {
	color: #33f;
}
</style>
