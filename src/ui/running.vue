<script>
import Game from '../game';
import {HALT_ACT} from '../events';
import { SKILL, DUNGEON, RAID, EXPLORE, LOCALE, TYP_RUN } from '../values/consts';

export default {

	props:['runner'],
	methods:{

		actionStr( a ){

			return (a.verb || a.name) + (a.length ?
				( ' ' + Math.floor(a.percent()) + '%' ) : '');

		},
		levelStr(a){
			return ' (' + Math.floor( a.valueOf() ) + '/' + Math.floor(a.max.valueOf() ) +')';
		},

		canHobby(a){
			return a.type !== TYP_RUN;
		},

		halt(a) { this.emit( HALT_ACT, a); },

		baseAction(a) {
			return ( a.type === RAID || a.type === EXPLORE ) ? a.locale : a;
		},

		toggleHobby(a) {

			a = this.baseAction(a);
			if ( !a) return;

			if ( this.pursuits.includes(a) ) {
				console.log('REMOVING PURSUIT: ' + a.id );
				this.pursuits.remove(a);
			} else {
				console.log('ADDING PURSUIT: '+a.id);
				this.pursuits.cycleAdd(a);
			}

		}

	},
	computed:{

		pursuits(){return Game.state.getData('pursuits')}

	}

}
</script>

<template>

<div class='running'>

	<div class="relative" v-for="v in runner.actives" :key="v.id">
		<button class="stop" @click="halt(v)">&nbsp;X&nbsp;</button><span>{{ actionStr(v) }}</span><span v-if="v.type==='skill'">{{levelStr(v)}}</span>
		<button v-if="pursuits.max>0&&canHobby(v)" :class="['pursuit', pursuits.includes( baseAction(v) ) ? 'current' : '']"
			@click="toggleHobby(v)"> F </button>
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

button.stop {
	background: rgb(211, 89, 89);
}

button.pursuit {
	position: absolute;
	background: rgb(22, 219, 22);
	top:0;
	right:0;
	opacity: 0.2;
}

button.pursuit.current {
	position: absolute;
	top:0;
	right:0;
	opacity: 0.7;
}

</style>