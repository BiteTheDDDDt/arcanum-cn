<script>
import ItemsBase from "@/ui/itemsBase.js";
import Progress from "@/ui/components/progbar.vue";
import { toLarge } from "@/util/format";

export default {
	/**
	 * @property {boolean} active - true if skill is the active skill.
	 */
	props: ["skill", "active"],
	mixins: [ItemsBase],
	components: {
		bar: Progress,
	},
	computed: {
		rate() {
			return this.skill.rate.value.toFixed(1);
		},
		exp() {
			return toLarge(Math.floor(this.skill.exp));
		},
		length() {
			return toLarge(Math.floor(this.skill.length));
		},
	},
};
</script>

<template>
	<div class="skill fade-in">
		<span class="separate" @mouseenter.capture.stop="itemOver($event, skill)">
			<span>{{ skill.name }}</span>

			<div class="flex-row" v-if="skill.owned">
				<div class="flex-col">
					<span>Level</span>
					<span>
						{{ Math.floor(skill.valueOf()) + "/" + (Math.trunc(skill.max.valueOf() * 10) / 10).toFixed(1) }}
					</span>
				</div>

				<button type="button" class="train-btn" @click="$emit('train', skill)" :disabled="!skill.canUse()">
					{{ active ? "Stop" : "Train" }}
				</button>
			</div>

			<span v-else>
				<button type="button" @click="emit('buy', skill)" :disabled="!skill.canUse()">🔒</button>
			</span>
		</span>

		<div v-if="skill.owned">
			<bar :value="skill.exp" :max="skill.length" hide-stats="true" />
			exp: {{ exp + " / " + length }}
		</div>
	</div>
</template>

<style scoped>
.separate {
	min-width: 100%;
	width: fit-content;
}

.skill {
	margin-bottom: 0;
	flex-basis: 100%;
	box-sizing: border-box;
	padding: var(--md-gap);
	text-transform: capitalize;
	font-size: var(--compact-small-font);
	border-radius: var(--list-entry-border-radius);
}

.skill button {
	font-size: 0.75em;
}

.skill > div {
	font-size: 0.75em;
	text-align: right;
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
}

.skill .separate span:first-child {
	text-overflow: clip;
	overflow: visible;
	line-clamp: 2;
	-webkit-line-clamp: 2;
}

.skill .separate span:nth-child(2) {
	flex-basis: 50%;
	color: var(--quiet-text-color);
}

.skill div:last-child {
	color: var(--quiet-text-color);
	text-align: center;
}

/* Compact mode style */
body.compact .skill {
	background: var(--list-entry-background);
	width: 100%;
}

body.compact .skill div:last-child {
	display: flex;
}
</style>
