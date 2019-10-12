<script>
import Game from '../../game';
import Group from './npc-group.vue';

export default {

	props:[ 'player', 'combat'],
	components:{
		'npc-group':Group
	}
}
</script>

<template>

<div class="combat">

	<npc-group class="group" :player="player" :npcs="combat.allies" label="allies" />
	<npc-group class="group" :npcs="combat.enemies" label="enemies" />

</div>

</template>

<style scoped>

.combat {
	display:flex;
	justify-content: space-between;
	width:98%;
}

.group {

	width:45%;
	max-width:45%;
	min-height:120px;
	border: 2px solid black;
	border-radius: 8px;
	padding: 12px;
	margin: 10px;

}

</style>