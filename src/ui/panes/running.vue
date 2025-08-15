<script>
import Game from "@/game.js";
import { HALT_TASK, STOP_ALL } from "@/events";
import { HOBBIES, GOALS, TASK } from "@/values/consts";

export default {
	props: ["runner"],
	created() {
		this.game = Game;
		this.STOP_ALL = STOP_ALL;
		this.TASK = TASK;
		this.autofocus = false;
	},
	computed: {
		focus() {
			return Game.state.getData("focus");
		},
		restAction() {
			return Game.state.restAction || Game.getData("rest");
		},
		resting() {
			return this.restAction.running || !this.restAction.canRun(this.game);
		},

		hobbies() {
			return Game.state.getData(HOBBIES);
		},
		goals() {
			return Game.state.getData(GOALS);
		},
		activitiesTip() {
			return "Displays your active and waiting tasks in greater detail.";
		},
	},
	data() {
		return {
			highlightAutoFocus: false,
		};
	},
	methods: {
		taskStr(a) {
			return (a.verb || a.name.toTitleCase()) + (a.length ? " " + Math.floor(a.percent()) + "%" : "");
		},
		levelStr(a) {
			return " (" + Math.floor(a.valueOf()) + "/" + Math.floor(a.max.valueOf()) + ")";
		},
		halt(a) {
			this.emit(HALT_TASK, a);
		},
		autofocusSwitch(focusMouseDown) {
			if (focusMouseDown) {
				Game.activeRepeaters.set(this.focus, 0);
				this.autofocus = true;
				this.highlightAutoFocus = false;
			} else if (this.autofocus) {
				Game.activeRepeaters.delete(this.focus);
				this.highlightAutoFocus = false;
				this.autofocus = false;
			} else {
				Game.activeRepeaters.set(this.focus, 0);
				this.autofocus = true;
				this.highlightAutoFocus = true;
			}
		},
	},
};
</script>

<template>
	<div>
		<div class="separate-run">
			<button type="button" class="btn-sm" @click="emit(STOP_ALL)">Stop All</button>
			<button
				type="button"
				class="btn-sm"
				v-if="!focus.locked"
				@mouseenter.capture.stop="itemOver($event, focus)"
				:disabled="!focus.canUse"
				@mousedown="autofocusSwitch(true)"
				@mouseup="autofocusSwitch(false)"
				@click="emit(TASK, focus)">
				Focus
			</button>
			<button
				type="button"
				class="btn-sm"
				v-if="!focus.locked"
				@click="autofocusSwitch(false)"
				id="auto"
				:disabled="!focus.canUse"
				:class="{ highlighted: highlightAutoFocus }">
				Auto Focus
			</button>
			<button
				type="button"
				class="btnMenu"
				@mouseenter.capture.stop="itemOver($event, null, null, null, activitiesTip)"
				@click="emit('showActivities')"></button>
		</div>

		<div class="running">
			<div
				class="relative"
				v-for="v of runner.actives"
				:key="v.id"
				@mouseenter.capture.stop="itemOver($event, v)">
				<button type="button" class="stop" @click="halt(v)">&nbsp;X&nbsp;</button>

				<span>{{ taskStr(v) }}</span>
				<span v-if="v.type === 'skill'"> {{ levelStr(v) }}</span>

				<button
					type="button"
					v
					v-if="runner.canGoal(v)"
					:class="['goal', goals.includes(runner.baseTask(v)) ? 'current' : '']"
					@click="runner.toggleGoal(v)">
					G
				</button>
				<button
					type="button"
					v
					v-if="runner.canPursuit(v)"
					:class="['pursuit', hobbies.includes(runner.baseTask(v)) ? 'current' : '']"
					@click="runner.togglePursuit(v)">
					H
				</button>
			</div>

			<div class="relative" v-for="n in Math.max(Math.floor(runner.max - runner.actives.length), 0)">
				<button type="button" class="stop" disabled>&nbsp;X&nbsp;</button>
				<span>Idle</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
.separate-run {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.separate-run .btn-sm {
	width: 100%;
}

.compact .separate-run .btn-sm {
	font-size: 0.75em;
}

.running {
	display: flex;
	flex-flow: column nowrap;
}

.running .relative {
	position: relative;
}

.highlighted {
	background-color: green;
}
</style>
