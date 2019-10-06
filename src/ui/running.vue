<script>
import Game from '../game';
import {HALT_ACT} from '../events';

export default {

	props:['runner'],
	methods:{

		actionStr( a ){
			return (a.verb || a.name) +
				( ( a.length ) ? ' ' + a.percent().toFixed(0) + '%': '' );
		},
		halt(a) { this.emit( HALT_ACT, a); }

	}
}
</script>

<template>

<div class='running'>

	<div v-for="v in runner.actives" :key="v.id">
		<button @click="halt(v)">Stop</button><span>{{ actionStr(v) }}</span>
	</div>

</div>

</template>

<style scoped>

div.running {
	display:flex;
	flex-flow: column nowrap;
}

</style>