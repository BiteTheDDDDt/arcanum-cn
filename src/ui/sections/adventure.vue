<script>
import Game from '../../game';
import ItemBase from '../itemsBase.js';
import { alphasort } from '../../util/util';
import Settings from '../../modules/settings';

import ProgBar from '../components/progbar.vue';
import FilterBox from '../components/filterbox.vue';

import Explore from '../items/explore.vue';

import { ENTER_LOC, LOG_COMBAT } from '../../events';

const MAX_ITEMS = 7;

/**
 * Handles display of both Dungeons/Locales.
 */
export default {

	props:['state'],
	mixins:[ItemBase],
	data(){

		let ops = Settings.getSubVars('explore');

		return {
			hideDone:ops.hideDone||false,
			hideRaid:ops.hideRaid||false,
			hideLocale:ops.hideLocale||false,
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

		chkHideDone:{
			get(){return this.hideDone;},
			set(v){
				this.hideDone = Settings.setSubVar( 'explore', 'hideDone', v );
			}
		},

		chkHideRaid:{
			get(){return this.hideRaid;},
			set(v){
				this.hideRaid = Settings.setSubVar( 'explore', 'hideRaid', v );
			}
		},

		chkHideLocale:{
			get(){return this.hideLocale;},
			set(v){
				this.hideLocale = Settings.setSubVar( 'explore', 'hideLocale', v );
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

			let d = this.hideDone;
			let r = this.hideRaid;
			let l = this.hideLocale;

			return this.allLocs.filter(
				it=>!this.locked(it) && (!d||it.value<=0) && (!r||it.type!=='dungeon') &&(!l||it.type!=='locale')
			);

		}

	}

}
</script>


<template>

<div class="adventure">

		<!-- also contains combat -->
		<explore v-if="exploring" :explore="explore" />

		<div class="content" v-else>
			<div class="top">

				<span class="hides">

				<span>Hide:</span>
				<span class="opt"><input :id="elmId('hideDone')" type="checkbox" v-model="chkHideDone">
				<label :for="elmId('hideDone')">Complete</label></span>
				<span class="opt"><input :id="elmId('hideRaid')" type="checkbox" v-model="chkHideRaid">
				<label :for="elmId('hideRaid')">Dungeon</label></span>
				<span class="opt"><input :id="elmId('hideLocale')" type="checkbox" v-model="chkHideLocale">
				<label :for="elmId('hideLocale')">Explore</label></span>


				</span>

				<filterbox class="inline" v-model="filtered" :items="locales" min-items="8" />


			</div>
			<div class="locales">

				<div class="dungeon" v-for="d in filtered" :key="d.id">

					<span class="separate">
						<!-- EVENT MUST BE ON OUTER SPAN - CHROME -->
					<span @mouseenter.capture.stop="emit( 'itemover', $event, d )"><span>{{ d.sname }}</span>

					<button class="raid-btn" :disabled="!game.canRun(d)" @click="emit( ENTER_LOC, d, true )">Enter</button></span>


					<span class="sym">{{ d.sym }}</span>
					</span>

					<span class="bar"><progbar :value="d.exp.valueOf()" :max="d.length" /></span>

				</div>

			</div>
		</div>

	<div class="raid-bottom">

		<inv class="inv" :inv="drops" take=true />
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

.sym {
	align-self:center;
}
div.adventure {
	display:flex;
	padding:0px 15px;
	align-self: flex-start;
	flex-flow: column nowrap;
	height:100%;
}

div.adventure .content {
	height:100%;
}

div.top {
	padding-left: var(--md-gap);
	justify-content: center;
}

div.top .hides {
	display:flex;
	padding: 0 var(--sm-gap);
}

div.top .hides > span {
	padding: 0 var(--sm-gap);
}

div.locales {
	display:flex;
	align-items:flex-start;
	flex-grow:1;
	flex-flow: row wrap;
	justify-content: space-between;
	overflow-y: auto;
	min-height: 50%;
	height:100%;
		padding: var(--sm-gap);
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
