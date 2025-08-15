<script>
import { onBeforeMount } from "vue";
import { ref, computed, watch } from "vue";

export default {
	name: "FilterBox",
	props: {
		items: {
			type: Array,
			required: true,
		},
		modelValue: {
			type: [Array, null],
			required: true,
		},
		prop: {
			type: [String, Function],
			required: false,
			default: "name",
		},
		minItems: {
			type: Number,
			default: 0,
		},
		defFunc: {
			type: Function,
			required: false,
		},
	},
	emits: ["update:modelValue"],
	setup(props, { emit }) {
		const filterText = ref("");

		const filteredItems = computed(() => {
			if (!filterText.value) {
				if (typeof props.defFunc === "function") props.defFunc(props.items);
				return props.items;
			}

			return props.items.filter(item => {
				if (typeof props.prop === "function") {
					return props.prop(item, filterText.value);
				} else {
					return item[props.prop].toLowerCase().includes(filterText.value.toLowerCase());
				}
			});
		});

		onBeforeMount(() => emit("update:modelValue", props.items));

		watch(filteredItems, newFilteredItems => {
			emit("update:modelValue", newFilteredItems);
		});

		return {
			filterText,
			filteredItems,
		};
	},
};
</script>

<template>
	<div class="filter-box" v-if="!this.minItems || this.items.length >= this.minItems">
		<label :for="elmId('filter')">Find</label>
		<input :id="elmId('filter')" v-model="filterText" type="text" />
	</div>
</template>

<style scoped>
label {
	margin-right: var(--md-gap);
}
</style>
