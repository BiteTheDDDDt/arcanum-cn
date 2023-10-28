<script>
import Game from '../../game';
import Upgrades from '../panes/upgrades.vue';

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

		tasks(){return Game.state.tasks.filter(v=>(!v.perpetual||v.perpetual==0)&&(!v.length||v.length==0))},
		runnables(){return Game.state.tasks.filter(v=>(v.perpetual>0||v.length>0)&&!v.craftable)},
		crafts(){return Game.state.tasks.filter(v=>(v.perpetual>0||v.length>0)&&v.craftable)},

		visActs(){return this.tasks.filter(v=>this.show(v))},
		visRuns(){ return this.runnables.filter(v=>this.show(v))},
		visCrafts() { return this.crafts.filter(v=>this.show(v))},

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
		<div v-if="visActs.length != 0" class="div-hs">Actions</div>
		<upgrades class="task-list" :items="visActs" :preventClick="inConfig" />
		<div v-if="visRuns.length != 0" class="div-hs">Tasks</div>
		<upgrades class="task-list" :items="visRuns" :preventClick="inConfig" />
		<div v-if="ups.length != 0" class="div-hs">Upgrades</div>
		<upgrades class="upgrade-list" :items="ups" :preventClick="inConfig" />
		<div v-if="classes.length != 0" class="div-hs">Classes</div>
		<upgrades class="upgrade-list" :items="classes" :preventClick="inConfig" />
		<div v-if="visCrafts.length != 0" class="div-hs">Craftables</div>
		<upgrades class="upgrade-list" :items="visCrafts" :preventClick="inConfig" />
	</div>
</template>

<style scoped>

    div.task-list, .main-tasks > div.upgrade-list {
        margin: 0; padding: var(--md-gap);
		display: grid;
		grid-template-columns: repeat( auto-fit, var(--task-button-width) );
    }

    div.task-list .runnable:hover {background: var(--accent-color-hover); }
    div.task-list .runnable:active {background: var(--accent-color-active); }


</style>
