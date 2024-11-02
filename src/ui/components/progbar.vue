<script>
import settings from '@/modules/settings';

export default {

	props: ['value', 'max', 'label', 'hideStats', 'color'],
	data() {
		return {
			delta: undefined
		}
	},
	emits: ['mouseenter'],
	watch: {

		value(newVal, oldVal) {
			if (typeof oldVal === 'number') {
				this.delta = Math.abs((newVal - oldVal) / this.max);
			}
		}
	},

	computed: {

		style() {
			const smooth = settings.get('smoothBars')
			let s = 'width:' + this.width + '%';
			if (this.color) s += ';background:' + this.color;
			if (typeof this.delta === 'number' && smooth) {
				s += `;transition: width 1000ms ease-out`
			}

			return s;

		},

		width() {
			const val = Math.floor(100 * (this.value / this.max));
			if (val > 100) return 100;
			return val < 0 ? 0 : val;
		}
	}

}
</script>


<template>

	<div class="container" @mouseenter.capture="this.$emit('mouseenter', $event);">
		<label v-if="label" :for="elmId('bar')">{{ label }}</label>
		<div class="bar" :id="elmId('bar')">
			<div class="fill" :style="style">
				<span class="bar-text" v-if="!hideStats">{{ value.toFixed(1) + '/' + max.toFixed(1) }}</span>
				<span v-else>&nbsp;</span>
			</div>
		</div>
	</div>

</template>

<style>
div.container {
	display: flex;
	height: 100%;
	width: 100%;
}

div.bar .fill {
	height: 100%;
	padding: 0;
	margin: 0;
}

div.bar .bar-text {
	color: var(--progbar-text-color);
}


div.bar {

	display: inline-block;
	background: #333;
	overflow: hidden;
	padding: 0;
	min-height: 1.5rem;
	width: -webkit-fill-available;
	width: -moz-available;
	border-radius: var(--lg-radius);
}
</style>
