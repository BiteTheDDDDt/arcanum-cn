<script>
import Game from 'game';

/**
 * Popup Activities Manager.
 */
export default {

	data(){

		return {

		};

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
		 */
		pursuits(){
			return this.runner.pursuits.items;
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

	<div>Waiting</div>
	<div v-for="(t,ind) in waiting" :key="ind">

		<button @click="removeWait(t)">X</button><span>{{ t.name }}</span>
		<button @click="inc(t)" :disabled="(ind+1)===waiting.length">+</button>
		<button @click="dec(t)" :disabled="ind===0">-</button>
	</div>

	<div>Pursuits</div>
	<div v-for="(t,ind) in pursuits" :key="ind">

		<button @click="removePursuit(t)">X</button><span>{{ t.name }}</span>
		<button v-if="runner.canPursuit(t)" :class="['pursuit', pursuits.includes( runner.baseTask(t) ) ? 'current' : '']"
				@click="runner.togglePursuit(t)"> F </button>
	</div>

</div>
</template>

<style scoped>

</style>