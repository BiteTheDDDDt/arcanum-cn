<script>
import Game from '../../game';
import ItemBase from '../itemsBase.js';
import { alphasort, levelsort } from '../../util/util';
import Settings from '../../modules/settings';

import ProgBar from '../components/progbar.vue';
import FilterBox from '../components/filterbox.vue';

import Explore from '../items/explore.vue';

import { LOG_COMBAT } from '../../events';
import { EXPLORE, DUNGEON, LOCALE } from '../../values/consts';

const MAX_ITEMS = 7;

/**
 * Handles display of both Dungeons/Locales.
 */
export default {

	props:['state'],
	mixins:[ItemBase],
	data(){

		let ops = Settings.getSubVars(EXPLORE);

		return {
			showDone:ops.hasOwnProperty('showDone') ? ops.showDone : true,
			showRaid:ops.hasOwnProperty('showRaid') ? ops.showRaid : true,
			showLocale:ops.hasOwnProperty('showLocale') ? ops.showLocale : true,
			lvlSort:ops.lvlSort,
			log:Game.log,
			filtered:null
		}

	},
	beforeCreate(){
		this.game = Game;
	},
	components:{
		explore:Explore,
		progbar:ProgBar,
		filterbox:FilterBox,
		inv:()=>import( /* webpackChunkName: "inv-ui" */ './inventory.vue')
	},
	computed:{

		chkLevelSort:{
			get(){ return this.lvlSort; },
			set(v){
				this.lvlSort = Settings.setSubVar( EXPLORE, 'lvlSort', v );
			}
		},
		chkShowDone:{
			get(){return this.showDone;},
			set(v){
				this.showDone = Settings.setSubVar( EXPLORE, 'showDone', v );
			}
		},

		chkShowRaid:{
			get(){return this.showRaid;},
			set(v){
				this.showRaid = Settings.setSubVar( EXPLORE, 'showRaid', v );
			}
		},

		chkShowLocale:{
			get(){return this.showLocale;},
			set(v){
				this.showLocale = Settings.setSubVar( EXPLORE, 'showLocale', v );
			}
		},

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

		explore() { return this.state.explore; },

		/**
		 * Only sort once.
		 */
		allLocs(){
			return this.state.filterItems(
				it=>(it.type===DUNGEON||it.type===LOCALE)
			).sort( this.lvlSort ? levelsort : alphasort );
		},

		locales(){

			let d = this.showDone;
			let r = this.showRaid;
			let l = this.showLocale;

			return this.allLocs.filter(
				it=>!this.locked(it) && (d||it.value<=0) &&
				( r||it.type!==DUNGEON ) &&
				( l || it.type !==LOCALE )
			);

		}

	}

}
</script>


<template>

<div class="adventure">

		<!-- also contains combat -->
		<explore v-if="explore.running" :explore="explore" />

		<div class="content" v-else>
			<div class="top">

				<span>
				<span class="opt"><input :id="elmId('lvlSort')" type="checkbox" v-model="chkLevelSort">
				<label :for="elmId('lvlSort')">Sort Level</label></span>
				</span>

				<span>
				<span class="opt"><input :id="elmId('showDone')" type="checkbox" v-model="chkShowDone">
				<label :for="elmId('showDone')">Complete</label></span>
				<span class="opt"><input :id="elmId('showRaid')" type="checkbox" v-model="chkShowRaid">
				<label :for="elmId('showRaid')">Dungeon</label></span>
				<span class="opt"><input :id="elmId('showLocale')" type="checkbox" v-model="chkShowLocale">
				<label :for="elmId('showLocale')">Explore</label></span>
				</span>


				<filterbox class="inline" v-model="filtered" :items="locales" min-items="8" />


			</div>
			<div class="locales">

				<div class="locale" v-for="d in filtered" :key="d.id">

					<span class="separate">
						<!-- EVENT MUST BE ON OUTER SPAN - CHROME -->
					<span @mouseenter.capture.stop="itemOver( $event, d )"><span>{{ d.sname.toString().toTitleCase() }}</span>

					<button class="raid-btn" :disabled="!game.canRun(d)" @click="emit( 'task', d )">Enter</button></span>


					<span class="sym">{{ d.sym }}</span>
					</span>

					<progbar :value="d.exp.valueOf()" :max="d.length.valueOf()" />

				</div>

			</div>
		</div>

	<div class="raid-bottom" v-if="explore.running||drops.count>0">

		<inv class="inv" :inv="drops" take=true />
		<div class="log">
			<!--<span v-if="exploring">Exploring...<br></span>-->

			<div class="outlog">
			<div class="log-item" v-for="(it,i) in combatLog" :key="i">
				<div><span class="log-title" v-if="it.title">{{ it.title.toString().toTitleCase() }}</span></div>
				<span class="log-text" v-if="it.text">{{ it.text }}</span>
			</div>
			</div>
		</div>

	</div>

</div>

</template>

<style scoped>

.sym {
	align-self:center;
}
div.adventure {
	display:flex;
	padding:0 1rem;
	align-self: flex-start;
	flex-flow: column;
	padding: 0; margin: 0;
	height: 100%;
	overflow-y:hidden;

}

div.adventure .content {
	flex-basis: 70%;
	flex-grow: 1;
	overflow: hidden;
}

div.top {
	padding-left: var(--md-gap);
	width: 100%;
	justify-content: space-evenly;
}

div.locales {

	display: flex;
	flex-flow: row wrap;
	grid-gap: 0;
	flex-grow:1;
	justify-content: space-between;
	overflow-y: auto;
	min-height: 50%;
	height:100%;
	padding: var(--tiny-gap) var(--md-gap);

}
div.locales .locale {
	flex-basis: 48%;
}


body.compact div.adventure > div.locales {
	display:grid;
	grid-template-columns: minmax( 9rem, 1fr) repeat( auto-fit, minmax( 9rem, 1fr) );
}
body.compact div.adventure > div.locales .locale { background: var(--list-entry-background); }
body.compact div.adventure > div.locales .locale .bar { border: none;}

		div.adventure > div.locales .locale {
			padding: var(--md-gap);
			border-radius: var(--list-entry-border-radius);
			display: flex; flex-flow: column; height: 100%;
		}
		div.adventure > div.locales .locale > span:nth-child(1) {
			display: flex; flex-flow: row; justify-content: space-between; flex: 1;
		}



div.raid-bottom {
	display:flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	border-top: 1px solid var(--separator-color);
	min-height: 0;
	max-height: 35%;
	width:100%;
	overflow-y:auto;
}

.menu-content div.adventure .log span { padding: var(--sm-gap); }
.menu-content div.adventure .log .outlog { overflow-y: auto; overflow-x: hidden; }

.raid-bottom .log {
	flex: 1; font-size: var(--compact-small-font); border-left: 1px solid var(--separator-color);
	display:  flex; flex-direction: column;
	flex-basis:50%;
	flex-grow:1;
	margin: 0;
}

</style>
