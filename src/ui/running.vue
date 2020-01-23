<script>
import Game from '../game';
import {HALT_TASK, STOP_ALL} from '../events';
import { SKILL, DUNGEON, RAID, EXPLORE, LOCALE, TYP_RUN, PURSUITS } from '../values/consts';

export default {

	props:['runner'],
	data(){
		return {
		}
	},
	created(){
		this.game = Game;
		this.STOP_ALL = STOP_ALL;
	},
	computed:{

		focus() { return Game.state.getData('focus'); },
		restAction(){return Game.state.restAction },
		resting() {
			return this.restAction;
		},

		pursuits(){return Game.state.getData(PURSUITS)}

	},
	methods:{

		/**
		 * display activities manager.
		 */
		showManager(){
		},

		taskStr( a ){

			return (a.verb || a.name) + (a.length ?
				( ' ' + Math.floor(a.percent()) + '%' ) : '');

		},
		levelStr(a){
			return ' (' + Math.floor( a.valueOf() ) + '/' + Math.floor(a.max.valueOf() ) +')';
		},

		canHobby(a){
			return a.type !== TYP_RUN;
		},

		halt(a) { this.emit( HALT_TASK, a); },

		baseTask(a) {
			return ( a.type === RAID || a.type === EXPLORE ) ? a.locale : a;
		},

		toggleHobby(a) {

			a = this.baseTask(a);
			if ( !a) return;

			if ( this.pursuits.includes(a) ) {
				this.pursuits.remove(a);
			} else {
				this.pursuits.cycleAdd(a);
			}

		}

	}

}
</script>

<template>

<div>
	<div class="separate">

		<button class="btn-sm" @click="emit(STOP_ALL)">Stop All</button>

		<button class="btn-sm" @click="emit('rest')" :disabled="resting"
		@mouseenter.capture.stop="emit( 'itemover',$event, restAction )">{{ restAction.name }}</button>

		<button class="btnConfig" @click="emit('showActivities')"></button>
		<button v-if="!focus.locked" class="btn-sm" @mouseenter.capture.stop="emit( 'itemover',$event, focus )"
			:disabled="!focus.canUse(game)"
			@click="emit('task', focus)">Focus</button>
	</div>

	<div class='running'>

		<div class="relative" v-for="v of runner.actives" :key="v.id">
			<button class="stop" @click="halt(v)">&nbsp;X&nbsp;</button><span>{{ taskStr(v) }}</span><span v-if="v.type==='skill'">{{levelStr(v)}}</span>
			<button v-if="pursuits.max>0&&canHobby(v)" :class="['pursuit', pursuits.includes( baseTask(v) ) ? 'current' : '']"
				@click="toggleHobby(v)"> F </button>
		</div>

	</div>
</div>

</template>

<style scoped>

div.running {
	display:flex;
	flex-flow: column nowrap;
}

div.running .relative {
	position: relative;
}

</style>