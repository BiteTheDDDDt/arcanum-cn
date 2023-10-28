<script>
import ItemBase from './itemsBase';
import Game from '../game';

export default {

	props:['viewing'],
	mixins:[ItemBase],
	created(){
		this.game = Game;
	},
	computed:{

		state() { return Game.state; },

		list(){ return Game.state.spelllist; }

	}

}
</script>

<template>

	<div class="spellbook">
		<table>
		<tr v-for="s in viewing" :key="s.id" @mouseenter.capture.stop="itemOver( $event, s )">

			<td>

				<button v-if="s.owned&&list.canAdd(s)" @click="list.add(s)">Memorize</button>

				</td>
			<td>{{s.name.toTitleCase()}}</td>
			<td>

				<button v-if="s.owned" @click="emit('spell', s)" :disabled="!s.canUse(game)">Cast</button>

				<button v-else @click="emit('buy', s)" :disabled="!s.canBuy(game)">Learn</button>

			</td>

		</tr>
		</table>
	</div>

</template>

<style scoped>

.spellbook {
	padding: var(--sm-gap);
	overflow-y: auto;
	height:100%;
	margin-bottom: 1.2rem;
}
div.spellbook table { display: flex; flex-flow: row wrap; justify-content: space-between; }
.spellbook table tr { display:flex; flex-basis: 48%; }
.spellbook table tr td:nth-child(1), .spellbook table tr td:nth-child(3) {
	flex-basis: 20%; order: 3; }
.spellbook table tr td:nth-child(2) { flex: 1; order: 1;}
.spellbook table tr td:nth-child(3) { flex-basis: 20%; order: 2; }
.spellbook table td { display: flex; }

 div.spellbook { flex-direction: column; padding: 0; }
div.spellbook { margin: 0; padding: var(--md-gap); }

    div.spellbook  table tr { padding: var(--sm-gap); display:flex; align-items:center; }
    div.spellbook  table tr td:nth-child(1),
    div.spellbook  table tr td:nth-child(2){ flex: 1; }
    div.spellbook  table tr td:nth-child(2){ flex: 2; }
	div.spellbook button { flex: 1; font-size: var(--compact-small-font); margin: 0; }


</style>
