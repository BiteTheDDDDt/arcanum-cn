<script>
import Game from "@/game";
import { abbr } from "@/util/format";
import { TRY_USE } from "@/events";

/**
 * Bar for quick-use items.
 */
export default {
	props: ["bars"],
	methods: {
		abbr: abbr,
	},
	computed: {
		bar() {
			return this.bars.active;
		},
		slots() {
			return this.bar.slots;
		},
		hasItems() {
			return this.slots.some(v => v.item != null);
		},
	},
};
</script>

<template>
	<div class="quickbar" v-if="hasItems">
		<div class="quickslot" v-for="(it, i) in slots" :key="i" :class="['fill', it.item?.school ?? 'gray']">
			<div
				v-if="it.item != null"
				@click="emit('quickslot', it)"
				@mouseenter.capture.stop="itemOver($event, it.item || it)"
				class="container">
				<div>{{ abbr(it) }}</div>
				<div class="remove" @click="bar.clear(i)" />
			</div>
			<div class="container" v-else>{{ i != 9 ? i + 1 : 0 }}</div>
		</div>
	</div>
	<div class="quickbar" v-else>
		<p class="use-msg">
			Roll-over Item and hold {Shift} + {Number} to assign quickslot.<br />
			Press {Number} again to use quickslot Item.
		</p>
	</div>
</template>

<style scoped>
.quickbar {
	display: flex;
	flex-basis: 3em;
	width: 100%;
	flex-direction: row;
	justify-self: flex-end;
	z-index: 50;
	margin: 0;
}
.quickslot {
	min-width: 2em;
	min-height: 2em;
	cursor: pointer;
	text-transform: capitalize;
	margin: var(--tiny-gap) var(--sm-gap) var(--sm-gap) var(--sm-gap);
	text-align: center;
	/** relative so remove button correctly placed. **/
	position: relative;
	font-size: xx-large;
	border: 1px solid var(--dark-border-color);
}
.darkmode .quickslot {
	border: 1px solid var(--light-border-color);
}

.container {
	width: 100%;
	height: 100%;
	padding: var(--tiny-gap);
}
.gray {
	background-color: #88888826;
}

.remove {
	position: absolute;
	border: none;
	top: 0;
	right: 0;
	margin: 0;
	padding: 0;
	background: #fff0;
	color: #000;
	opacity: 0.65;
	z-index: 10;
	min-height: 0.9em;
	min-width: 0.9em;
	font-size: 0.8rem;
	font-weight: bold;
}
.remove::after {
	content: "x";
}

.use-msg {
	font-size: 1.2em;
	line-height: 1.4em;
	margin-left: 10%;
}
</style>
