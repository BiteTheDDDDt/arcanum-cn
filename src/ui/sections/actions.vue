<script>
import Game from '../../game';
import Upgrades from '../upgrades.vue';

import Settings from 'modules/settings';
import ItemsBase from '../itemsBase';
import UIMixin from '../uiMixin';

export default {

	mixins:[ItemsBase,UIMixin],
	components:{
		upgrades:Upgrades
	},
	data(){

		let ops = Settings.getVars('main');
		if (!ops.hide) ops.hide = {}

		return {
			hide:ops.hide
		}

	},
	computed:{

		state(){return Game.state;},
		actions(){return this.state.actions.filter(v=>!v.perpetual&&!v.length)},
		runnables(){return this.state.actions.filter(v=>v.perpetual||v.length>0)},

		visActs(){return this.actions.filter(v=>this.show(v))},
		visRuns(){ return this.runnables.filter(v=>this.show(v))},

		ups(){
			return Game.state.upgrades.filter( v=>!this.locked(v)&&this.show(v) )
		},
		classes(){
			return this.state.classes.filter(v=>!locked(v)&&this.show(v));
		}

	}

}
</script>

<template>
	<div class="main-actions" ref="hidables">
		<div class="config"><button ref="btnHides" class="btnConfig">&#9881;</button></div>
		<upgrades class="action-list" :items="visActs" />
		<upgrades class="action-list" :items="visRuns" />
		<upgrades class="upgrade-list" :items="state.upgrades" />
		<upgrades class="upgrade-list" :items="state.classes" />
	</div>
</template>

<style scoped>

</style>