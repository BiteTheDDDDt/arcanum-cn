<script>
import Game from '../../game';
import ItemBase from '../itemsBase.js';
import { alphasort } from '../../util/util';

import ProgBar from '../components/progbar.vue';
import FilterBox from '../components/filterbox.vue';

import Explore from '../items/explore.vue';

import { ENTER_LOC, LOG_COMBAT } from '../../events';

const MAX_ITEMS = 7;

export default {

	props:['state'],
	mixins:[ItemBase],
	data(){
		return {
			log:Game.log,
			filtered:null
		}
	},
	beforeCreate(){
		this.ENTER_LOC = ENTER_LOC;
		this.game = Game;
	},
	components:{
		explore:Explore,
		progbar:ProgBar,
		filterbox:FilterBox,
		inv:()=>import( /* webpackChunkName: "inv-ui" */ './inventory.vue')
	},
	computed:{

		drops() { return Game.state.drops; },

		combatLog() {

			let items = this.log.items;
			let count = 0;
			let a = [];

			for( let i = items.length-1; i>=0; i-- ) {

				var it = items[i];
				if ( it.type === LOG_COMBAT ) {

					a.push(it);
					if ( ++count === MAX_ITEMS ) break;

				}

			}

			return a;

		},

		explore() { return this.state.raid.running ? this.state.raid : this.state.explore; },

		exploring() { return this.explore && this.explore.running; },

		/**
		 * Only sort once.
		 */
		allLocs(){
			return this.state.filterItems(
				it=>(it.type==='dungeon'||it.type==='locale')
			).sort( alphasort );
		},

		locales(){
			return this.allLocs.filter(
				it=>!this.locked(it)
			);
		}

	}

}
</script>


<template>

<div class="adventure">

		<explore v-if="exploring" :explore="explore" />

		<!--<filterbox v-model="filtered" :items="locales" min-items="8" />-->
		<div class="locales" v-else>
		<div class="dungeon" v-for="d in locales" :key="d.id">

			<span>
			<span>{{ d.name }}</span>

			<!-- EVENT MUST BE ON OUTER SPAN - CHROME -->
			<span @mouseenter.capture.stop="emit( 'itemover', $event, d )"><button class="raid-btn" :disabled="!game.canRun(d)"
				@click="emit( ENTER_LOC, d, true )">
				Enter</button></span>
				</span>

			<span class="bar"><progbar :value="d.exp" :max="d.length" /></span>

			</div>
		</div>

	<div class="raid-bottom">

		<inv class="inv" :inv="drops" take=true nosearch=true />
		<div class="log">
			<span v-if="exploring">Exploring...<br></span>

			<div class="outlog">
			<div class="log-item" v-for="(it,i) in combatLog" :key="i">
				<span class="log-title" v-if="it.title">{{ it.title }}</span>
				<span class="log-text" v-if="it.text">{{ it.text }}</span>
			</div>
			</div>
		</div>

	</div>

</div>

</template>

<style scoped>

div.adventure {
	display:flex;
	padding:0px 15px;
	align-self: flex-start;
	flex-flow: column nowrap;
	height:100%;
}

div.locales {
	display:flex;
	align-items:flex-start;
	flex-grow:1;
	flex-flow: row wrap;
	justify-content: space-between;
	overflow-y: auto;
	min-height: 50%;
	border-bottom: 1px solid var(--separator-color);

}

div.raid-bottom {
	display:flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	padding-top:8px;
	width:100%;
	overflow-y:auto;
}

.adventure .log {
	flex-basis:48%;
	flex-grow:1;
	margin: 0px 0px 10px 20px;
}

.active-dungeon {
	display:flex;
	flex-basis:40%;
	min-width:222px;
	flex-direction:column;

}

div.dungeon {
	display:flex;
	flex-basis: 40%;
	flex-flow: column nowrap;
}

.bar {
	align-self: stretch;
}
</style>
