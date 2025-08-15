<script>
import settings from "@/modules/settings";

export default {
	props: ["char"],
	data() {
		return {
			hpDelta: undefined,
			barrierDelta: undefined,
		};
	},
	emits: ["mouseenter"],
	watch: {
		hpVal(newVal, oldVal) {
			if (typeof oldVal == "number") this.hpDelta = Math.abs((newVal - oldVal) / this.hpMax);
		},
		barrierVal(newVal, oldVal) {
			if (typeof oldVal == "number") this.barrierDelta = Math.abs((newVal - oldVal) / this.barrierMax);
		},
	},

	computed: {
		hpVal() {
			return +this.char.hp.value;
		},
		hpMax() {
			return +this.char.hp.max;
		},
		barrierVal() {
			return +this.char.barrier.value;
		},
		barrierMax() {
			return +this.char.barrier.max;
		},
		barMax() {
			return Math.max(this.hpMax, this.barrierMax);
		},

		hpStyle() {
			const smooth = settings.get("smoothBars");
			let s = "width:" + this.hpWidth + "%";
			if (typeof this.hpDelta === "number" && smooth) s += `;transition: width 1000ms ease-out`;
			return s;
		},

		barrierStyle() {
			const smooth = settings.get("smoothBars");
			let s = "width:" + this.barrierWidth + "%";
			if (typeof this.barrierDelta === "number" && smooth) s += `;transition: width 1000ms ease-out`;
			return s;
		},

		hpWidth() {
			const val = Math.floor(100 * (this.hpVal / this.barMax));
			return Math.max(0, Math.min(100, val));
		},

		barrierWidth() {
			const val = Math.floor(100 * (this.barrierVal / this.barMax));
			return Math.max(0, Math.min(100, val));
		},
	},
};
</script>

<template>
	<div class="container" @mouseenter.capture="this.$emit('mouseenter', $event)">
		<div class="bar" :id="elmId('bar')">
			<div class="barrier barrierfill" :style="barrierStyle"></div>
			<div class="hp hpFill" :style="hpStyle"></div>
			<div class="labels">
				<span class="barrier" v-if="barrierMax">
					{{ barrierVal.toFixed(1) + "/" + barrierMax.toFixed(1) }}
				</span>
				<span class="hp">{{ hpVal.toFixed(1) + "/" + hpMax.toFixed(1) }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
div.container {
	display: flex;
	height: 100%;
	width: 100%;
}

div.hpFill {
	pointer-events: none;
	position: absolute;
	top: 15%;
	height: 70%;
	opacity: 0.85;
}

div.barrierfill {
	pointer-events: none;
	height: 100%;
	opacity: 0.5;
}

.labels {
	position: absolute;
	top: 50%;
	right: var(--tiny-gap);
	transform: translate(0, -50%);
}

.labels span {
	font-size: 1rem;
	text-align: right;
	padding: 0 0.5em;
	margin: 0 var(--tiny-gap);
	color: #000;
	border-radius: var(--sm-gap);
	line-height: 1.1em;
}

span.hp {
	background: #faa;
}

span.barrier {
	background: #aafa;
}

div.bar {
	display: inline-block;
	background: #3339;
	overflow: hidden;
	padding: 0;
	min-height: 1.5rem;
	width: -webkit-fill-available;
	width: -moz-available;
	border-radius: var(--lg-radius);
}
</style>
