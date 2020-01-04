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

		let ops = Settings.getSubVars('main');
		if (!ops.hide) ops.hide = {}

		return {
			hide:ops.hide
		}

	},
	computed:{

		tasks(){return Game.state.tasks.filter(v=>!v.perpetual&&!v.length)},
		runnables(){return Game.state.tasks.filter(v=>v.perpetual||v.length>0)},

		visActs(){return this.tasks.filter(v=>this.show(v))},
		visRuns(){ return this.runnables.filter(v=>this.show(v))},

		ups(){
			return Game.state.upgrades.filter( v=>!this.locked(v)&&this.show(v) )
		},
		classes(){
			return Game.state.classes.filter(v=>!this.locked(v)&&this.show(v));
		}

	}

}
</script>

<template>
	<div class="main-tasks" ref="hidables">
		<div class="config"><button ref="btnHides" class="btnConfig"></button></div>
		<upgrades class="task-list" :items="visActs" />
		<upgrades class="task-list" :items="visRuns" />
		<upgrades class="upgrade-list" :items="ups" />
		<upgrades class="upgrade-list" :items="classes" />
	</div>
</template>

<style scoped>

    .main-tasks > div.task-list,
    .main-tasks > div.upgrade-list {
        margin: 0; padding: var(--md-gap);
		display: grid;
		grid-template-columns: repeat( auto-fit, var(--task-button-width) );
    }

    .main-tasks > div.task-list .runnable button:hover {background: var(--accent-color-hover); }
    .main-tasks > div.task-list .runnable button:active {background: var(--accent-color-active); }


</style>