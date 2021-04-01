<script>
import Game from 'game';
import {alphasort} from 'util/util';

export default {

	methods:{

		count(it){
			return it.value > 1 ? ( ' (' + Math.floor(it.value) + ')' ) : '';
		}
	},
	computed:{
		classes() {
			return Game.state.classes.filter(v=>!v.disabled&&v.value>=1);
		},
		tasks() {
			return Game.state.tasks.filter(v=>v.max==1&&!v.disabled&&v.value>=1).sort(alphasort);
		},
		upgrades(){
			return Game.state.upgrades.filter(v=>!v.disabled&&v.value>=1).sort(alphasort);
		}
	}

}
</script>


<template>
<div class="allupgrades">
	<div class="up-list">
	<div v-if="classes.length != 0" class="div-hr">Classes</div>
	<div v-for="it in classes" :key="it.id" @mouseenter.capture.stop="itemOver( $event,it)">{{it.name.toTitleCase() + count(it) }}</div>
	<div v-if="tasks.length != 0" class="div-hr">Tasks</div>
	<div v-for="it in tasks" :key="it.id" @mouseenter.capture.stop="itemOver( $event,it)">{{it.name.toTitleCase() + count(it) }}</div>
	<div v-if="upgrades.length != 0" class="div-hr">Upgrades</div>
	<div v-for="it in upgrades" :key="it.id" @mouseenter.capture.stop="itemOver( $event,it)">{{it.name.toTitleCase() + count(it) }}</div>
	</div>
</div>
</template>

<style scoped>

div.allupgrades {
	display:flex;
	flex-flow: column nowrap;
	height:100%;
}
div.up-list {
	margin-bottom:1rem;
	overflow-x:visible;
}

</style>