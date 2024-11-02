<script>
import Game from '@/game';
import { centerXY, positionAt } from '@/ui/popups/popups.js';

/**
 * Popup Activities Manager.
 */
export default {

	mixins: [],
	data() {

		return {
			/**
			 * force refresh when array keys swapped.
			 */
			activeKey: 0,
			waitKey: 0
		};

	},
	mounted() {

		if (this.elm) positionAt(this.$el, this.elm, 0);
		else centerXY(this.$el, 0.2);

	},
	computed: {

		runner() {
			return Game.runner;
		},

		actives() {
			return this.runner.actives;
		},

		activesLen() {
			return this.actives.length;
		},

		waiting() {
			return this.runner.waiting;
		},
		/**
		 * reversed clone of pursuit items.
		 * @property {DataList>Inventory}
		 */
		pursuits() {
			return this.runner.pursuits.items;
		}

	},
	methods: {

		moveActive(task, amt) {
			this.runner.moveActive(task, amt);
		},

		removeActive(t) {
			this.runner.stopTask(t);
		},

		moveWaiting(task, amt) {
			this.runner.moveWaiting(task, amt);
		},

		removeWait(t) {
			this.runner.removeWait(t);
		},

		movePursuit(task, amt) {
			this.runner.pursuits.move(task, amt);
		},

		removePursuit(t) {
			this.runner.pursuits.remove(t);
		}

	}

}
</script>

<template>
	<div class="popup activities">

		<div class="popup-close" @click="$emit('close')">X</div>

		<div class="section" :key="'k' + activeKey">
			<header>Activities</header>
			<div v-if="actives.length === 0" class="note-text">None</div>
			<div v-else>
				<div v-for="(t, ind) in actives" :key="'a' + ind" class="task-info">
					<button type="button" class="stop" @click="removeActive(t)">X</button><span class="task-name">{{
						t.name.toTitleCase() }}</span>
					<div v-if="actives.length > 1">
						<button type="button" @click="moveActive(t, -1)" :disabled="ind === 0">↑</button>
						<button type="button" @click="moveActive(t, 1)" :disabled="(ind + 1) === actives.length">↓</button>
					</div>

				</div>
			</div>
		</div>

		<div class="section" :key="'w' + waitKey">
			<header>Waiting/Blocked</header>
			<div v-if="waiting.length === 0" class="note-text">None</div>
			<div v-else>
				<div v-for="(t, ind) in [...waiting].reverse()" :key="'w' + ind" class="task-info">
					<button type="button" class="stop" @click="removeWait(t)">X</button><span class="task-name">{{
						t.name.toTitleCase() }}</span>
					<!-- note: indices are reversed. Move amount reversed. -->
					<div v-if="waiting.length > 1">
						<button type="button" @click="moveWaiting(t, 1)" :disabled="ind === 0">↑</button>
						<button type="button" @click="moveWaiting(t, -1)" :disabled="(ind + 1) === waiting.length">↓</button>
					</div>

				</div>
			</div>
		</div>

		<div class="section">
			<header>Pursuits</header>
			<div v-if="pursuits.count === 0" class="note-text">None</div>
			<div v-else>
				<div v-for="(t, ind) in pursuits" :key="'p' + ind" class="task-info">

					<button type="button" class="stop" @click="removePursuit(t)">X</button><span class="task-name">{{
						t.name.toTitleCase() }}</span>
					<div v-if="pursuits.length > 1">
						<button type="button" @click="movePursuit(t, -1)" :disabled="ind === 0">↑</button>
						<button type="button" @click="movePursuit(t, 1)" :disabled="(ind + 1) === pursuits.length">↓</button>
					</div>
					<!--<button type="button" v-if="runner.canPursuit(t)" :class="['pursuit', pursuits.includes( runner.baseTask(t) ) ? 'current' : '']"
					@click="runner.togglePursuit(t)"> F </button>-->
				</div>
			</div>
		</div>

	</div>
</template>

<style scoped>
div.activities {
	min-width: 28rem;
	width: fit-content;
	padding-top: 1em;
	padding: 1.5em;
}

div.section {
	margin-top: 1em;
	min-width: 100%;
}

div.task-info {
	display: flex;
	width: 90%;
	margin: var(--sm-gap) 0;
}

button.stop {
	margin: 0 var(--sm-gap);
}

span.task-name {
	flex-grow: 1;
	vertical-align: center;
}

div.section header {
	border-bottom: 1px solid var(--separator-color);
	margin-bottom: var(--sm-gap);
}
</style>