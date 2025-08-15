<script>
import { centerX } from "@/ui/popups/popups.js";

const WARN_MSG = "This action is not reversible. Continue?";

export default {
	emits: ["confirmed"],

	data() {
		return {
			item: null,
			cb: null,
			nowarn: false,
			nomsg: false,
			passon: null,
		};
	},

	updated() {
		if (this.item) {
			centerX(this.$el);
		}
	},

	computed: {
		msg() {
			if (typeof this.item === "string") return WARN_MSG;
			return this.item.warnMsg || WARN_MSG;
		},
	},

	methods: {
		show(it, cb = null, nomsg = false, passon = null) {
			this.item = it;
			this.cb = cb;
			this.nowarn = false;
			this.nomsg = nomsg;
			this.passon = passon;
		},
		confirm() {
			let it = this.item;
			let f = this.cb;
			let nowarn = this.nowarn;
			let passon = this.passon;

			this.item = null;
			this.cb = null;
			this.nowarn = false;
			this.passon = null;
			this.nomsg = false;

			if (it) this.$emit("confirmed", it, nowarn, passon);
			if (f) f();
		},
		cancel() {
			this.cb = null;
			this.nowarn = false;
			this.item = null;
			this.passon = null;
			this.nomsg = false;
		},
	},
};
</script>

<template>
	<div class="popup" v-if="item">
		<div v-if="typeof item === 'string'">
			<div>{{ item }}</div>
			<div v-if="!nomsg">{{ msg }}</div>
		</div>
		<div v-else>
			<div class="log-title">{{ item.name.toString().toTitleCase() }}</div>
			<div>{{ item.desc }}</div>
			<div v-if="!nomsg">{{ msg }}</div>
			<div class="skip">
				<label :for="elmId('nowarn')">Skip Warning</label>
				<input type="checkbox" v-model="nowarn" :id="elmId('nowarn')" />
			</div>
		</div>

		<div>
			<button type="button" @click="confirm">Confirm</button>
			<button type="button" @click="cancel">Cancel</button>
		</div>
	</div>
</template>

<style scoped>
div.skip {
	margin-top: 1em;
	font-size: 0.9em;
}

div.popup div {
	margin: var(--sm-gap) 0;
}
</style>
