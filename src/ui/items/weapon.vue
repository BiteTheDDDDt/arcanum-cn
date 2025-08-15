<script>
import { defineAsyncComponent } from "vue";
import Range from "@/range";
import Attack from "@/ui/items/attack.vue";

export default {
	props: ["item"],
	name: "attack",
	components: {
		gdata: defineAsyncComponent(() => import(/* webpackChunkName: "gdata-ui" */ "./gdata.vue")),
	},
	computed: {},
};
</script>

<template>
	<div class="attack">
		<div>Hit Bonus: {{ item.tohit || 0 }}</div>
		<div>{{ item.hands > 1 ? "Two Handed" : "One Handed" }}</div>
		<div>Kind: {{ item.kind.toString().toTitleCase() }}</div>
		<gdata v-if="item.dot" :item="item.dot" />
	</div>
</template>
