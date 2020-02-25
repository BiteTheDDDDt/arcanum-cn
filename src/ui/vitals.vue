<script>
import ProgBar from 'ui/components/progbar.vue';
import Running from './running.vue';
//import Mood from './items/mood.vue';

import Settings from 'modules/settings';

import Game from '../game';
import UIMixin from './uiMixin';
import ItemBase from './itemsBase';


/**
 * Player vital bars.
 */
export default {

	props:['state'],
	mixins:[ItemBase, UIMixin],
	components:{
		progbar:ProgBar,
		//mood:Mood,
		running:Running
	},
	data(){

		let ops = Settings.getSubVars('vitals');
		if (!ops.hide) ops.hide = {};

		return {
			hide:ops.hide
		}

	},

	computed:{

		hp(){return this.state.getData('hp');},

		manaList() { return this.state.filterItems( it=>it.hasTag('manas') && !it.locked)},
		visMana(){return this.manaList.filter(v=>this.show(v))},

		stamina(){ return this.state.getData('stamina'); }
	}

}
</script>

<template>

	<div class="vitals">

		<running :runner="state.runner" />

		<div class="config"><button ref="btnHides" class="btnConfig"></button></div>

		<!-- anything not a table is a headache -->
		<table class="bars">

		<tr class="hidable" data-key="stamina" v-show="show(stamina)"><td>stamina</td><td colspan="2"><progbar class="stamina" :value="stamina.valueOf()" :max="stamina.max.value"
			@mouseenter.capture.stop.native="itemOver($event,stamina)"/></td></tr>

		<tr class="hidable" data-key="hp" v-show="show(hp)"><td>hp</td><td colspan="2"><progbar class="hp" :value="hp.valueOf()" :max="hp.max.value"
			@mouseenter.capture.stop.native="itemOver($event,hp)"/></td></tr>

		<tr class="hidable" v-for="it in visMana" :key="it.key" :data-key="it.id">
			<td>{{it.name}}</td><td colspan="2"><progbar :value="it.valueOf()" :class="it.id" :max="it.max.value" :color="it.color"
			@mouseenter.native.capture.stop="itemOver($event,it)"/></td></tr>

		<!--<tr><td>mood</td><td><mood :state="state" /></td></tr>-->
		</table>

	</div>
</template>

<style scoped>

    div.vitals {
        text-transform: capitalize;
        margin: 0; padding: 0;
        min-width: 15rem; overflow-y :auto; overflow-x: hidden;
    }
	div.vitals .bars {
		display: flex; flex-flow: column;
		width: -moz-available;
		width:-webkit-fill-available;
	}

    div.vitals .bars tr { display: flex; align-items: center; }
    div.vitals .bars tr td:nth-child(2) div { display: flex; flex-flow: column; justify-content: center; }
    div.vitals .bars tr:first-child { min-height: 4em; }
    div.vitals .bars tr:not(:first-child) { padding: var(--sm-gap) var(--sm-gap); }
	div.vitals .bars tr td:nth-child(1) { flex-basis: 50%; }

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
