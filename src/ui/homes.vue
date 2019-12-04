<script>
import Game from '../game';
import Settings from '../modules/settings';
import { alphasort } from '../util/util';

import Profile from '../modules/profile';

import ItemsBase from './itemsBase';

//import Choice from './components/choice.vue';
import SlotPick from './components/slotpick.vue';
import FilterBox from './components/filterbox.vue';
import { SET_SLOT } from '../events';
import { HOME } from '../values/consts';

/**
 * @emits sell
 */
export default {

	props:['state'],
	mixins:[ItemsBase],
	components:{
		slotpick:SlotPick,
		filterbox:FilterBox,
		hall:()=>import( /* webpackChunkName: "hall-ui" */ './hall/hall.vue')
	},
	data(){

		let opts = Settings.getSubVars(HOME);

		return {

			hallOpen:false,

			/**
			 * @property {boolean} hideMaxed
			 */
			hideMaxed:opts.hideMaxed||false,
			hideOwned:opts.hideOwned||false,
			hideNone:opts.hideNone||false,
			hideBlocked:opts.hideBlocked||false,
			hideUnowned:opts.hideUnowned||false,

			/**
			 * @property {Item[]} filtered - items after text-search filtering.
			 */
			filtered:null

		}

	},
	created() {
		this.SET_SLOT = SET_SLOT;
	},
	methods:{

		openHall(){ this.hallOpen = true; },

		closeHall(){this.hallOpen = false;},

		searchIt(it, t){

			if ( it.name.includes(t) ) return true;
			if ( it.tags){

				let tags = it.tags;
				for( let i = tags.length-1; i>=0;i--){
					if ( tags[i].includes(t)) return true;
				}

			}
			if ( it.mod && typeof it.mod === 'object') {

				for( let p in it.mod) {
					if ( p.includes(t) ) return true;
				}

			}

			return false;


		}

	},
	computed:{

		hallUnlocked(){ return Game.state.getData('evt_hall')>0; },
		hallName(){ return Profile.hall.name; },

		chkHideMax:{
			get(){return this.hideMaxed;},
			set(v){ this.hideMaxed = Settings.setSubVar( HOME, 'hideMaxed', v ); }
		},
		chkHideOwned:{
			get(){return this.hideOwned;},
			set(v){ this.hideOwned = Settings.setSubVar( HOME, 'hideOwned', v ); }
		},
		chkHideNone:{
			get(){return this.hideNone;},
			set(v){ this.hideNone = Settings.setSubVar( HOME, 'hideNone', v ); }
		},
		chkHideBlocked:{
			get(){return this.hideBlocked;},
			set(v){ this.hideBlocked = Settings.setSubVar( HOME, 'hideBlocked', v ); }
		},

		space() { return this.state.getData('space'); },

		homesAvail() { return this.state.homes.filter( v=>!this.locked(v) ); },

		/**
		 * @property {GData[]} furniture - ALL furniture, alpha sorted.
		 */
		furniture(){

			let s = this.state;
			return Game.filterItems( it=>
				it.type ==='furniture' || s.typeCost(it.cost, 'space')>0
			).sort(
				alphasort
				//(a,b)=> a.name < b.name ? -1 : 1
			);
		},
		viewable() {

			let o = this.hideOwned;
			let n = this.hideNone;
			let b = this.hideBlocked;
			let m = this.hideMaxed;

			return this.furniture.filter( it=>!this.reslocked(it) &&
				(!o||it.value==0) &&(!b||this.usable(it))&&(!m||!it.maxed())&&(!n||it.value>0)
			);

		}

	}

}
</script>

<template>

	<div class="home-view">

		<div class="top separate">

		<span>
		<span>Hide:</span>
		<span class="opt"><input :id="elmId('hideMax')" type="checkbox" v-model="chkHideMax"><label :for="elmId('hideMax')">Maxed</label></span>
		<span class="opt"><input :id="elmId('hideOwn')" type="checkbox" v-model="chkHideOwned"><label :for="elmId('hideOwn')">Owned</label></span>
		<span class="opt"><input :id="elmId('hideNone')" type="checkbox" v-model="chkHideNone"><label :for="elmId('hideNone')">Unowned</label></span>
		<span class="opt"><input :id="elmId('hideBlock')" type="checkbox" v-model="chkHideBlocked"><label :for="elmId('hideBlock')">Blocked</label></span>
		</span>

<filterbox class="inline" v-model="filtered" :prop="searchIt" :items="viewable" />
		<span class="space">Space: {{ Math.floor(space.free() ) }} / {{ Math.floor(space.max.value) }}</span>
		</div>

		<div class="content">

		<hall v-if="hallOpen" @close="closeHall" />
		<div class="pick-slots">

			<div class="action-btn" v-if="hallUnlocked"><button class="btnHall" @click="openHall">{{ hallName }}</button></div>

			<slotpick title="home" pick="home" />
			<slotpick title="werry" hide-empty="true" pick="werry" />

		</div>

		<div class="furniture">

			<div class="warn-text"
			style="text-align:center"
			v-if="state.items.space.empty()">No space remaining. Sell items or find a new Home.
			<span v-if="homesAvail.length>0">If your max gold is not enough to buy a new home, free space for more chests.</span></div>

		<table class="furniture item-table">

		<tr><th>Space</th><th class="name">Furnishing</th><th>Owned</th><th/><th/></tr>


		<tr v-for="it in filtered" :key="it.id" @mouseenter.capture.stop="emit( 'itemover', $event, it )">

			<td class="space">{{ it.cost.space }}</td>
			<td class="name">{{ it.name }}</td> <td class="count">{{ it.value.valueOf() }}</td>

			<td><span v-if="it.maxed()" class="sm">Max</span><button v-else type="button" :disabled="!usable(it)" class="buy-btn"
				@click="emit('upgrade',it)">Buy</button></td>

			<td><button type="button" :disabled="it.value<=0" class="sell-btn" @click="emit('sell',it)">Sell</button></td>

		</tr>

		</table>

		</div>

		</div>


	</div>

</template>

<style scoped>

span.space {
	text-align: center;
	margin: 0px var(--lg-gap);
}

span.sm {
	margin: var(--sm-gap);
}
div.home-view {
	display: flex;
	height:100%;
	flex-flow: column nowrap;
	padding-left:1rem;
	padding-right:1rem;
}

div.home-view .content {
	display: flex;
	overflow-y: hidden;
	height:100%;
	flex-direction: row;
	width: 100%;
	padding-top: var(--tiny-gap);
}


div.home-view .btnHall {
	width:90%;
}

div.pick-slots {

	display:flex;
	flex-flow: column nowrap;

	margin-top:0.9em;
	margin-right: 1rem;
	flex-basis: 5rem;
}

div.nospace {
	color: red;
}

div.furniture {
	width: 100%;
	overflow-y: auto;
	height:100%;
	margin-bottom: 4px;
}

div.home-view .furniture .item-table {
	 text-transform: capitalize;
	 flex-grow: 1;
     flex: 1; min-height: 0; width: 100%; max-width: 420px;
     display: flex; flex-direction: column;
}
div.home-view .furniture .item-table tr { display: flex; padding: var(--sm-gap); }
 div.home-view .furniture .item-table tr:first-child {
        position: sticky; top: 0; background: var(--header-background-color); z-index: 1;
    }
 div.home-view .furniture .item-table tr > *:nth-child(1) { flex-basis: 20%; }
 div.home-view .furniture .item-table tr > *:nth-child(2) { flex-basis: 40%; }
 div.home-view .furniture .item-table tr > *:nth-child(3) { flex-basis: 20%; }
div.home-view .furniture .item-table tr button { margin: 0; font-size: 0.75em; }


table .count, table .space {
	text-align: center;
}
table .name {
	padding: 0px 8px 0px 12px;
	min-width:120px;
	text-align: left;
}

table tr:nth-child(2n) {
	background: var( --odd-list-color );
}

</style>
