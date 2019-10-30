<script>
import Game from '../game';
import Settings from '../modules/settings';
import { alphasort } from '../util/util';

import Hall from './hall/hall.vue';
import Profile from '../modules/profile';

import ItemsBase from './itemsBase';

//import Choice from './components/choice.vue';
import SlotPick from './components/slotpick.vue';
import FilterBox from './components/filterbox.vue';
import { SET_SLOT } from '../events';

/**
 * @emits sell
 */
export default {

	props:['state'],
	mixins:[ItemsBase],
	components:{
		slotpick:SlotPick,
		filterbox:FilterBox,
		hall:Hall
	},
	data(){

		let opts = Settings.getSubVars('home');

		return {

			hallOpen:false,

			/**
			 * @property {boolean} hideMaxed
			 */
			hideMaxed:opts.hideMaxed||false,

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
			set(v){
				this.hideMaxed = Settings.setSubVar( 'home', 'hideMaxed', v );
			}
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

			if ( this.hideMaxed ) return this.furniture.filter(it=>!it.maxed()&&!this.reslocked(it) );
			return this.furniture.filter( it=>!this.reslocked(it));

		}

	}

}
</script>

<template>

	<div class="home-view">

<hall v-if="hallOpen" @close="closeHall" />
		<div class="pick-slots">

			<div v-if="hallUnlocked"><button class="btnHall" @click="openHall">{{ hallName }}</button></div>

			<slotpick title="home" pick="home" />
			<slotpick title="werry" hide-empty="true" pick="werry" />

		</div>

		<div class="furniture">

		<span class="separate">
		<filterbox class="inline" v-model="filtered" :prop="searchIt" :items="viewable" />

		<span><input :id="elmId('hideMax')" type="checkbox" v-model="chkHideMax">
			<label :for="elmId('hideMax')">Hide Maxed</label></span>

		<span class="space">Space: {{ Math.floor(space.free() ) }} / {{ Math.floor(space.max.value) }}</span>
		</span>

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

</template>

<style scoped>

div.home-view .btnHall {
width:90%;
}

span.space {
	text-align: center;
	margin: 0px 18px;
}

span.sm {
	margin: var(--sm-gap);
}
div.home-view {
	overflow-y:auto;
	display: flex;
	padding-left:16px;
	padding-right:15px;
	flex-direction: row;
	height:100%;
}

div.pick-slots {

	display:flex;
	flex-flow: column nowrap;

	margin-top:12px;
	margin-right: 16px;
	flex-basis: 120px;
}

div.nospace {
	color: red;
}

div.furniture {
	flex-grow: 1;
	margin-bottom: 4px;
}

div.home-view .furniture .item-table {
     text-transform: capitalize; overflow-y: scroll;
	 flex-grow: 1;
     flex: 1; min-height: 0; width: 100%; max-width: 400px;
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
