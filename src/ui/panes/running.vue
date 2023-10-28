<script>
import Game from '../../game.js';
import {HALT_TASK, STOP_ALL} from '../../events';
import { SKILL, DUNGEON, EXPLORE, LOCALE, TYP_RUN, PURSUITS, TASK } from 'values/consts';

export default {

	props:['runner'],
	created(){
		this.game = Game;
		this.STOP_ALL = STOP_ALL;
		this.TASK = TASK;
		this.autofocus = false
	},
	computed:{

		focus() { return Game.state.getData('focus'); },
		restAction(){return Game.state.restAction },
		resting() {
			return this.restAction.running;
		},

		pursuits(){return Game.state.getData(PURSUITS)}

	},
	methods:{

		taskStr( a ){

			return (a.verb || a.name.toTitleCase() ) + (a.length ? ( ' ' + Math.floor(a.percent()) + '%' ) : '');

		},
		levelStr(a){
			return ' (' + Math.floor( a.valueOf() ) + '/' + Math.floor(a.max.valueOf() ) +')';
		},

		halt(a) {
			this.emit( HALT_TASK, a);
		},
		run(){
			if(this.autofocus){
				this.emit('endrepeater', this.focus)
				document.getElementById('auto').style = ""
				this.autofocus = false
			}else{
				this.emit('repeater', this.focus)
				document.getElementById('auto').style = "background-color:green;"
				this.autofocus = true
			}
				
		},

	}

}
</script>

<template>

<div>
	<div class="separate">

		<button class="btn-sm" @click="emit(STOP_ALL)">Stop All</button>

		<button class="btn-sm" @click="emit(TASK, restAction)" :disabled="resting"
		@mouseenter.capture.stop="itemOver($event, restAction )">{{ restAction.name.toTitleCase() }}</button>
		<div v-if="!focus.locked">
			<button class="btn-sm" @mouseenter.capture.stop="itemOver($event, focus )"
			:disabled="!focus.canUse" @click="emit(TASK, focus)"
			@mousedown="emit('repeater', focus)" @mouseup="emit('endrepeater',focus)">Focus</button>
		<button class="btn-sm" @click="run()" id="auto" :disabled="!focus.canUse">Auto Focus</button>
		</div>
		<button class="btnMenu" @click="emit('showActivities')"></button>
	</div>

	<div class='running'>

		<div class="relative" v-for="v of runner.actives" :key="v.id">
			<button class="stop" @click="halt(v)">&nbsp;X&nbsp;</button><span>{{ taskStr(v) }}</span><span v-if="v.type==='skill'">{{levelStr(v)}}</span>
			<button v-if="runner.canPursuit(v)" :class="['pursuit', pursuits.includes( runner.baseTask(v) ) ? 'current' : '']"
				@click="runner.togglePursuit(v)"> F </button>
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