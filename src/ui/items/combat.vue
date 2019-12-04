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
	overflow-y: auto;
    flex-flow: row;
}


.combat	.group {

	margin: 0; padding: var(--sm-gap);
	width:48%;
	min-height:10em;

}

</style>