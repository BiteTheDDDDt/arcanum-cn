<script>
import { TICK_TIME } from "@/game";
import settings from "@/modules/settings";

export default {
	props: ["value", "max", "label", "hideStats", "type", "color", "revbar", "smallbar"],
	data() {
		return { delta: undefined };
	},
	emits: ["mouseenter"],
	watch: {
		value(newVal, oldVal) {
			if (typeof oldVal === "number") this.delta = Math.abs((newVal - oldVal) / this.max);
		},
	},

	computed: {
		style() {
			const smooth = settings.get("smoothBars");
			let s = "width:" + this.width + "%";
			if (this.color) s += ";background:" + this.color;
			if (typeof this.delta === "number" && smooth) {
				s += `;transition: width `;
				s += TICK_TIME * 2;
				s += "ms ease-out";
			}

			return s;
		},

		width() {
			const val = this.revbar
				? 100 - Math.floor(100 * (this.value / this.max))
				: Math.floor(100 * (this.value / this.max));
			if (val > 100) return 100;
			return val < 0 ? 0 : val;
		},
		shownValue() {
			return !this.smallbar ? this.value.toFixed(1) + "/" + this.max.toFixed(1) : "";
		},
	},
};
</script>

<template>
	<div :class="[this.smallbar ? 'small' : '', 'container']" @mouseenter.capture="this.$emit('mouseenter', $event)">
		<label v-if="label" :for="elmId('bar')">{{ label }}</label>
		<div class="bar" :id="elmId('bar')">
			<div :class="['barfill', type]" :style="style">
				<span class="bar-text" v-if="!hideStats && this.shownValue != ''">
					{{ shownValue }}
				</span>
				<span v-else>&nbsp;</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	height: 100%;
	width: 100%;
}

.barfill {
	height: 100%;
	padding: 0;
	margin: 0;
}

.bar-text {
	color: var(--progbar-text-color);
}

.bar {
	display: inline-block;
	overflow: hidden;
	padding: 0;
	min-height: 1.5rem;
	width: -webkit-fill-available;
	width: -moz-available;
	border-radius: var(--lg-radius);
}

.lightmode .bar {
	background: #6669;
}

.darkmode .bar {
	background: #3339;
}

.small .bar {
	display: inline-block;
	background: #333;
	overflow: hidden;
	padding: 0;
	min-height: 0.6rem;
	max-height: 0.6rem;
	width: 33%;
}
</style>
