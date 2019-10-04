<script>
import ItemBase from './itemsBase';
import Game from '../game';

export default {

	props:['viewing'],
	mixins:[ItemBase],

	methods:{

		addList(it) {
			this.list.add(it);
		}

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
		<tr v-for="s in viewing" :key="s.id" @mouseenter.capture.stop="emit( 'itemover', $event, s )">

			<td>

				<button v-if="s.owned&&list.canAdd(s)" @click="addList(s)">Memorize</button>
				<!--<button v-if="s.owned&&s.attack" @click="emit('primary',s)">
				{{ state.player.primary===s ? 'Unequip' : 'Primary' }}
				</button>-->

				</td>
			<td>{{ s.name }}</td>
			<td>

				<button v-if="s.owned" @click="emit('spell', s)" :disabled="!usable(s)">Cast</button>

				<button v-else @click="emit('buy', s)" :disabled="!usable(s)">Learn</button>

			</td>

		</tr>
		</table>
	</div>

</template>

<style scoped>

.spellbook {
	padding: 4px;
	overflow-y: auto;
	height:100%;
	margin-bottom: 20px;
}
.spellbook table { display: flex; flex-flow: row wrap; justify-content: space-between; }
.spellbook table tr { display:flex; flex-basis: 48%; }
.spellbook table tr td:nth-child(1), .spellbook table tr td:nth-child(3) {
	flex-basis: 20%; order: 3; }
.spellbook table tr td:nth-child(2) { flex: 1; order: 1;}
.spellbook table tr td:nth-child(3) { flex-basis: 20%; order: 2; }
.spellbook table td { display: flex; }

 div.spellbook { flex-direction: column; padding: 0; }
div.spellbook { margin: 0; padding: var(--medium-gap); }

 div.spellbook table {
        display: grid; grid-template-columns: minmax( 256px, 1fr ) repeat( auto-fit, minmax( 256px, 1fr ));
        grid-auto-rows:  1fr;
    }
    div.spellbook  table tr { padding: var(--small-gap); display:flex; align-items:center; }
    div.spellbook  table tr td:nth-child(1),
    div.spellbook  table tr td:nth-child(2){ flex: 1; }
    div.spellbook  table tr td:nth-child(2){ flex: 2; }
	div.spellbook button { flex: 1; font-size: var(--compact-small-font); margin: 0; }


</style>
