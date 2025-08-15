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
			let a = [];
			let len = this.items.length;
			for (let i = 0; i < len; i++) {
				let it = this.items[i];
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
		<div v-if="isOpen">
			<div
				class="rsrc separate hidable"
				v-for="it in shown"
				:data-key="it.id"
				:key="it.id"
				@mouseenter.capture.stop="itemOver($event, it)">
				<span class="item-name">{{ it.name }}</span>
				<span class="num-align">
					{{
						formatNumber(it.value.value > 0 ? Math.floor(it.value.value) : 0) +
						(it.max && it.max.value > 0 ? "/" + formatNumber(it.max.value) : "")
					}}
				</span>
				<!--<td>{{ it.delta != 0 ? '&nbsp;(' + it.delta.toFixed(2) + '/t )' : ''}}</td>-->
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
</style>
