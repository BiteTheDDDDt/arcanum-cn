<script>
import Game from '../game';
import {alphasort} from '../util/util';

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
		actions() {
			return Game.state.actions.filter(v=>!v.repeat&&!v.disabled&&v.value>=1).sort(alphasort);
		},
		upgrades(){
			return Game.state.upgrades.filter(v=>!v.disabled&&v.value>=1).sort(alphasort);
		}
	}

}
</script>


<template>
<div class="allupgrades">
	<div class="div-hr">upgrades</div>
	<div class="up-list">
	<div v-for="it in classes" :key="it.id" @mouseenter.capture.stop="emit( 'itemover', $event,it)">{{it.name + count(it) }}</div>
	<div v-for="it in actions" :key="it.id" @mouseenter.capture.stop="emit( 'itemover', $event,it)">{{it.name + count(it) }}</div>
	<div v-for="it in upgrades" :key="it.id" @mouseenter.capture.stop="emit( 'itemover', $event,it)">{{it.name + count(it) }}</div>
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
	margin-bottom:14px;
	overflow-x:visible;
}

div.allupgrades .div-hr { background: var(--header-background-color); padding: var(--sm-gap); }

</style>