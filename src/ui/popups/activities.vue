<script>
import Game from 'game';
import { centerXY, positionAt } from './popups.js';

/**
 * Popup Activities Manager.
 */
export default {

	mixins:[],
	data(){

		return {
			/**
			 * force refresh when array keys swapped.
			 */
			activeKey:0,
			waitKey:0
		};

	},
	mounted() {

		if ( this.elm) positionAt( this.$el, this.elm, 0 );
		else centerXY( this.$el, 0.2 );

	},
	computed:{

		runner(){
			return Game.runner;
		},

		actives(){
			return this.runner.actives;
		},

		activesLen(){return this.actives.size;},

		waiting(){
			return this.runner.waiting.reverse();
		},
		/**
		 * reversed clone of pursuit items.
		 * @property {DataList>Inventory}
		 */
		pursuits(){
			return this.runner.pursuits;
		}

	},
	methods:{

		incActive(t){
			this.actives.inc(t);
			this.activeKey++;
		},

		decActive(t){
			this.actives.dec(t);
			this.activeKey++;
		},

		removeActive(t){
			this.runner.stopTask(t);
		},

		removeWait(t){
			this.runner.removeWait(t);
		},

		/**
		 * Increase priority.
		 */
		incWaiting(t){
			this.runner.waitingUp(t);
		},

		/**
		 * Decrease priority.
		 */
		decWaiting(t){
			this.runner.waitingDown(t);
		},

		removePursuit(t){
			this.pursuits.remove(t);
		},

		/**
		 * Increase priority.
		 */
		incPursuits(t){
			this.runner.pursuitUp(t);
		},

		/**
		 * Decrease priority.
		 */
		decPursuits(t){
			this.runner.pursuitDown(t);
		}

	}

}
</script>

<template>
<div class="popup activities">

	<div class="popup-close" @click="$emit('close')">X</div>

	<div class="section" :key="'k'+activeKey">
		<header>Activities</header>
		<div v-if="activesLen===0" class="note-text">None</div>
		<div v-else>
		<div v-for="(t,ind) in actives.values().reverse()" :key="'a'+ind" class="task-info">
			<button class="stop" @click="removeActive(t)">X</button><span class="task-name">{{ t.name.toTitleCase() }}</span>
			<!-- note: indices are reversed -->
			<button @click="incActive(t)" :disabled="ind===0">+</button>
			<button @click="decActive(t)" :disabled="(ind+1)===activesLen">-</button>

		</div>
		</div>
	</div>

	<div class="section" :key="'w'+waitKey">
		<header>Waiting/Blocked</header>
		<div v-if="waiting.length===0" class="note-text">None</div>
		<div v-else>
		<div v-for="(t,ind) in waiting" :key="'w'+ind" class="task-info">
			<button class="stop" @click="removeWait(t)">X</button><span class="task-name">{{ t.name.toTitleCase() }}</span>
			<button @click="incWaiting(t)" :disabled="ind===0">+</button>
			<button @click="decWaiting(t)" :disabled="(ind+1)===waiting.length">-</button>

		</div>
		</div>
	</div>

	<div class="section">
		<header>Pursuits</header>
		<div v-if="pursuits.count===0" class="note-text">None</div>
		<div v-else>
		<div v-for="(t) in pursuits.items" :key="t.id" class="task-info">

			<button class="stop" @click="removePursuit(t)">X</button><span class="task-name">{{ t.name.toTitleCase() }}</span>
			<!--<button v-if="runner.canPursuit(t)" :class="['pursuit', pursuits.includes( runner.baseTask(t) ) ? 'current' : '']"
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
	padding-top:1em;
	padding: 1.5em;
}

div.section {
	margin-top: 1em;
	min-width: 100%;
}

div.task-info {
	display:flex;
	width: 90%;
	margin: var(--sm-gap) 0;
}

button.stop {
	margin: 0 var(--sm-gap);
}

span.task-name {
	flex-grow:1;
	vertical-align: center;
}

div.section header {
	border-bottom: 1px solid var(--separator-color);
	margin-bottom: var(--sm-gap);
}

</style>