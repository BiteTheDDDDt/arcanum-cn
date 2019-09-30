<script>
import ProgBar from 'ui/components/progbar.vue';
import Running from './running.vue';

import Game from '../game';
import ItemBase from './itemsBase';
import { STOP_ALL } from '../events';

/**
 * Player vital bars.
 */
export default {

	props:['state','player'],
	mixins:[ItemBase],
	components:{
		progbar:ProgBar,
		running:Running
	},
	created(){

		this.STOP_ALL = STOP_ALL;

	},
	computed:{

		focus() { return this.state.getData('focus'); },
		manaList() { return this.state.filterItems( it=>it.hasTag('manas') && !it.locked)},
		resting() {
			return this.state.restAction.running;
		},
		stamina(){ return this.state.getData('stamina'); }
	}

}
</script>

<template>

	<div class="vitals">

		<div class="separate">

			<button class="btn-sm" @click="dispatch(STOP_ALL)">Stop All</button>

			<button class="btn-sm" @click="dispatch('rest')" :disabled="resting"
			@mouseenter.capture.stop="dispatch('itemover',$event, state.restAction )">
			{{ state.restAction.name }}</button>

			<button v-if="!focus.locked" class="btn-sm" @mouseenter.capture.stop="dispatch('itemover',$event, focus )"
				:disabled="!usable(focus)"
				@click="dispatch('action', focus)">Focus</button>
		</div>

		<running />

		<!-- anything not a table is a headache -->
		<table class="bars">

		<tr><td>stamina</td>
		<td colspan="2"><progbar class="stamina" :value="stamina.value" :max="stamina.max.value"
			@mouseenter.capture.stop.native="dispatch('itemover',$event,stamina)"/></td></tr>

		<tr><td>hp</td>
		<td colspan="2"><progbar class="hp" :value="player.hp.value" :max="player.hp.max.value"
			@mouseenter.capture.stop.native="dispatch('itemover',$event,player.hp)"/></td></tr>

		<tr v-for="it in manaList" :key="it.key">
			<td>{{it.name}}</td>
		<td colspan="2"><progbar :value="it.value" :class="it.id" :max="it.max.value"
			@mouseenter.native.capture.stop="dispatch('itemover',$event,it)"/></td></tr>

		</table>

	</div>
</template>

<style scoped>

div.vitals {
	margin:4px 8px;
	flex-basis: 19%;
	min-width: 200px;
}

div.vitals .bars {
	width: -moz-available;
	width:-webkit-fill-available;
}

table .td-prog {
	columns: 2;
}

tr td:first-child {
	max-width: 33%;
}

tr td:last-child {
	width:100%;
}

</style>
