<script>
import { LogTypes } from "@/events";
import Game from "@/game";

/**
 * Displays event output to user.
 */
export default {
	data() {
		let filter = 0;
		for (const p in LogTypes) {
			filter |= LogTypes[p];
		}

		return {
			log: Game.log,
			LogTypes: LogTypes,
			filter: filter,
			showOptions: false,

			/**
			 * @property {string[]} exclude - types to exclude.
			 */
		};
	},
	methods: {
		changed(box) {
			if (box.checked) {
				this.filter = this.filter | box.value;
			} else {
				this.filter = ~box.value & this.filter;
			}
		},

		doOptions() {
			this.showOptions = !this.showOptions;
		},

		clearLog() {
			this.log.clear();
		},
	},
	computed: {
		visItems() {
			let all = this.log.items;

			let a = [];

			for (let i = all.length - 1; i >= 0; i--) {
				var it = all[i];
				if (!it.type || (this.filter & it.type) > 0) a.push(it);
			}
			return a;
		},
	},
};
</script>

<template>
	<div class="log-view">
		<div class="top-span">
			<button type="button" class="inline btn-sm" @click="clearLog">Clear</button>
			<!--<button type="button" class="text-button" @click="doOptions">&#9881;</button>-->
			<span class="checks">
				<span v-for="(p, k) in LogTypes" :key="k">
					<input
						type="checkbox"
						:value="p"
						:id="elmId(k)"
						:checked="filter & p"
						@change="changed($event.target)" />
					<label :for="elmId(k)">{{ k.toString().toTitleCase() }}</label>
				</span>
			</span>

			<div v-if="showOptions" class="options"></div>
		</div>

		<div class="outlog">
			<div class="log-item" v-for="(it, i) in visItems" :key="i">
				<div>
					<span v-if="it.title" class="log-title item-name">{{ it.title }}</span>
				</div>
				<span class="log-text">{{ it.text }}</span>
				<span class="num-align" v-if="it.count > 1">(x{{ it.count }})</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
div.log-view {
	border-left: 1px solid var(--very-quiet-text-color);
	display: flex;
	flex-flow: column nowrap;
	margin-left: var(--md-gap);
	flex-basis: 20%;
	max-width: 14em;
	max-height: inherit;
	min-width: 8em;
	margin: 0;
}

div.log-view div.top-span {
	max-height: unset;
	border-bottom: 1px solid var(--separator-color);
	display: flex;
	flex-flow: row nowrap;
	margin: var(--tiny-gap) 0;
	padding-bottom: var(--tiny-gap);
}

div.log-view div.top-span .checks {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	height: 4em;
	align-items: center;
	font-size: 0.8em;
	display: flex;
	flex-flow: row wrap;
	align-items: flex-start;
}

div.log-view div.top-span .checks span {
	flex-basis: 50%;
	overflow: hidden;
	white-space: nowrap;
}

div.log-view .outlog {
	display: flex;
	overflow-y: auto;
	flex-direction: column;
	max-height: unset;
	flex: 1;
	font-size: var(--compact-small-font);
}
</style>
