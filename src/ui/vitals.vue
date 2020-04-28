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
		<div class="statbars">

		<div class="hidable statbar" data-key="stamina" v-show="show(stamina)">
			<span class="name">stamina</span><span class="barspan"><progbar class="stamina" :value="stamina.valueOf()" :max="stamina.max.value"
			@mouseenter.capture.stop.native="itemOver($event,stamina)"/></span></div>

		<div class="hidable statbar" data-key="hp" v-show="show(hp)"><span class="name">hp</span><span class="barspan"><progbar class="hp" :value="hp.valueOf()" :max="hp.max.value"
			@mouseenter.capture.stop.native="itemOver($event,hp)"/></span></div>

		<div class="hidable statbar" v-for="it in visMana" :key="it.key" :data-key="it.id">
			<span class="name">{{it.name}}</span><span class="barspan"><progbar :value="it.valueOf()" :class="it.id" :max="it.max.value" :color="it.color"
			@mouseenter.native.capture.stop="itemOver($event,it)"/></span></div>

		<!--<tr><td>mood</td><td><mood :state="state" /></td></tr>-->
		</div>

	</div>
</template>

<style scoped>

    .vitals {
        text-transform: capitalize;
        margin: 0; padding: 0;
        min-width: 15rem; overflow-y :auto; overflow-x: hidden;
    }


</style>
