<script>
import Game from "@/game";

export default {
	props: ["state"],
	computed: {
		hsl() {
			return this.h + ", " + this.s + "%," + this.l + "%";
		},

		h() {
			return Math.round(
				120 +
					120 * Math.max(this.wv / this.wm, this.uv / this.um) -
					120 * Math.max(this.bf / this.bm, this.rv / this.rm) -
					200 * (this.madness / this.madness.max),
			);
		},
		s() {
			return 90 * (1 - this.madness / this.madness.max);
		},
		l() {
			return Math.round(
				100 * (1 - (this.wv + this.uv + this.bv + this.rv) / (this.wm + this.um + this.bm + this.rm)),
			);
		},

		weary() {
			return this.state.getData("weary");
		},
		wv() {
			return this.weary.value;
		},
		wm() {
			return this.weary.max.value;
		},

		unease() {
			return this.state.getData("unease");
		},
		uv() {
			return this.unease.value;
		},
		um() {
			return this.unease.max.value;
		},

		bf() {
			return this.state.getData("bf");
		},
		bv() {
			return this.bf.value;
		},
		bm() {
			return this.bf.max.value;
		},

		rage() {
			return this.state.getData("rage");
		},
		rv() {
			return this.rage.value;
		},
		rm() {
			return this.rage.max.value;
		},

		madness() {
			return this.state.getData("madness");
		},
		mv() {
			return this.madness.value;
		},
		mm() {
			return this.madness.max.value;
		},
	},
};
</script>

<template>
	<div class="mood" :style="'background:hsl(' + hsl + ')'">&nbsp;</div>
</template>

<style scoped>
.mood {
	border: var(--tiny-gap) solid black;
	width: 3em;
	height: 3em;
}
</style>
