<script>

import ProgBar from './components/progbar.vue';
import Game from '../game';

/**
 * Single dungeon view.
 */
export default {

	props:['dungeon'],
	created(){
		this.game=Game;
	},
	components:{
		progbar:ProgBar
	}

}
</script>


<template>
	<div class="dungeon" v-if="dungeon">

		<progbar class="dungeon" :label="dungeon.name" :value="dungeon.exp" :max="dungeon.length" />
		<button class="raid-btn" :disabled="!game.canRun(dungeon)" @click="emit( 'raid', dungeon )">Enter</button>

	</div>
</template>

<style scoped>

</style>