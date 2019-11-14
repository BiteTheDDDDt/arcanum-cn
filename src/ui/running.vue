<script>
import Game from '../game';
import {HALT_ACT} from '../events';
import { SKILL } from '../values/consts';

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

		halt(a) { this.emit( HALT_ACT, a); },

		toggleHobby(a) {

			if ( this.pursuits.includes(a) ) {
				this.pursuits.remove(a);
			} else {
				this.pursuits.cycleAdd(a);
			}

		}

	},
	computed:{

		pursuits(){return this.state.getData('pursuits')}

	}

}
</script>

<template>

<div class='running'>

	<div v-for="v in runner.actives" :key="v.id">
		<button @click="halt(v)">Stop</button><span>{{ actionStr(v) }}</span><span v-if="v.type==='skill'">{{levelStr(v)}}</span>
	</div>

</div>

</template>

<style scoped>

div.running {
	display:flex;
	flex-flow: column nowrap;
}

</style>