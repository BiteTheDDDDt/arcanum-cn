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
		waiting(){
			console.log('WAITING: ' + this.runner.waiting.length );
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

		removeWait(t){
			this.runner.removeWait(t);
		},

		/**
		 * Increase priority.
		 */
		inc(t){
			this.runner.waitingUp(t);
		},

		/**
		 * Decrease priority.
		 */
		dec(t){
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

	<div class="section">
		<header>Waiting</header>
		<div v-if="waiting.length===0" class="note-text">None</div>
		<div v-else>
		<div v-for="(t,ind) in waiting" :key="ind">
			<button class="stop" @click="removeWait(t)">X</button><span>{{ t.name }}</span>
			<button @click="inc(t)" :disabled="(ind+1)===waiting.length">+</button>
			<button @click="dec(t)" :disabled="ind===0">-</button>
		</div>
		</div>
	</div>

	<div class="section">
		<header>Pursuits</header>
		<div v-if="pursuits.count===0" class="note-text">None</div>
		<div v-else>
		<div v-for="(t) in pursuits.items" :key="t.id">

			<button class="stop" @click="removePursuit(t)">X</button><span>{{ t.name }}</span>
			<!--<button v-if="runner.canPursuit(t)" :class="['pursuit', pursuits.includes( runner.baseTask(t) ) ? 'current' : '']"
					@click="runner.togglePursuit(t)"> F </button>-->
		</div>
		</div>
	</div>

</div>
</template>

<style scoped>

div.activities {
	width:100%;
	padding-top:1em;
	padding: 1.5em;
}

div.section {
	margin-top: 1em;
}

div.section header {
	border-bottom: 1px solid var(--separator-color);
	margin-bottom: var(--sm-gap);
}

</style>