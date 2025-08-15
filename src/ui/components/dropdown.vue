<script>
// show is the variable name of the object displayed for the name.
// pick is the name of the variable returned as the selected data item. Use '*' for the picked object itself.
export default {
	emits: ["input"],

	/**
	 * @property {string} label - the label displayed for the entire control, if any.
	 * @property {string[]|Object[]} options - options to display.
	 *
	 * @property {?string|function} [show='text'] - property of the picked object to display to
	 * the user, or a function that takes the object and returns the display string.
	 * If undefined, the object itself is used.
	 *
	 * @property {string|function} [pick='modelValue'] - property of selected object to return
	 * when an object is selected. If undefined, the object itself is returned.
	 *
	 * @property {string} disabled - text to display when nothing is selected.
	 *
	 * @property {boolean} searchable - whether to show the search bar to search the dropdown.
	 *
	 */
	props: ["label", "options", "modelValue", "show", "pick", "disabled", "disabledValue", "searchable"],

	data() {
		return {
			pshow: this.show || "text",
			pvar: this.pick || "modelValue",
			inputData: null,
		};
	},

	methods: {
		text(t) {
			if (!this.pshow || !(t instanceof Object)) return t;
			if (typeof this.pshow === "function") return this.pshow(t);

			let text = t[this.pshow];
			return text === undefined || text === null ? t : text;
		},
		val(t) {
			if (!this.pvar || !(t instanceof Object)) return t;
			if (typeof this.pvar === "function") return this.pvar(t);

			let value = t[this.pvar];
			return value === undefined || value === null ? t : value;
		},
	},

	computed: {
		selected: {
			get() {
				return this.value;
			},
			set(v) {
				this.$emit("update:modelValue", v);
			},
		},
		filterOptions() {
			if (!this.inputData) {
				return this.options;
			}
			let filtered = this.options.slice();
			let searchValue = this.show || "name";
			for (let a = filtered.length - 1; a >= 0; a--) {
				if (!filtered[a][searchValue].includes(this.inputData)) filtered.splice(a, 1);
			}
			return filtered;
		},
	},
};
</script>
<template>
	<div class="dropdown">
		<label class="form-label" v-if="label" :for="elmId('sel')">{{ label }}</label>
		<br />
		<input
			v-if="this.searchable"
			type="text"
			placeholder="Search..."
			v-model="inputData"
			id="SearchInput"
			:disabled="this.options.length <= 0" />
		<select
			:id="elmId('sel')"
			:name="elmId('sel')"
			v-model="selected"
			:key="options"
			:disabled="this.options.length <= 0">
			<option v-if="disabled" disabled :value="disabledValue">
				{{ disabled }}
			</option>
			<option v-for="(t, ind) in filterOptions" :value="val(t)" :key="ind">
				{{ text(t) }}
			</option>
		</select>
	</div>
</template>
