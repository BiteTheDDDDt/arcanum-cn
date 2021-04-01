<script>
import Game from 'game';
import Settings from 'modules/settings';
import { alphasort } from 'util/util';

import Profile from 'modules/profile';

import ItemsBase from '../itemsBase';

//import Choice from './components/choice.vue';
import SlotPick from '../components/slotpick.vue';
import FilterBox from '../components/filterbox.vue';
import { HOME } from 'values/consts';

/**
 * @emits sell
 */
export default {

	props:['state'],
	mixins:[ItemsBase],
	components:{
		slotpick:SlotPick,
		filterbox:FilterBox,
		hall:()=>import( /* webpackChunkName: "hall-ui" */ '../hall/hall.vue')
	},
	data(){

		let opts = Settings.getSubVars(HOME);

		return {

			hallOpen:false,

			/**
			 * @property {boolean} showMaxed
			 */
			showMaxed:opts.hasOwnProperty( 'showMaxed' ) ? opts.showMaxed : true,
			showOwned:opts.hasOwnProperty( 'showOwned' ) ? opts.showOwned : true,
			showUnowned:opts.hasOwnProperty( 'showUnowned' ) ? opts.showUnowned : true,
			showBlocked:opts.hasOwnProperty( 'showBlocked' ) ? opts.showBlocked : true,

			/**
			 * @property {Item[]} filtered - items after text-search filtering.
			 */
			filtered:null

		}

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
					if ( game.state.getData(p) && typeof game.state.getData(p) === 'object') {
						if ( game.state.getData(p).name.includes(t)) return true; 
					}
				}

			}	

			return false;


		}

	},
	computed:{

		hallUnlocked(){ return Game.state.getData('evt_hall')>0; },
		hallName(){ return Profile.hall.name; },

		chkShowMax:{
			get(){return this.showMaxed;},
			set(v){ this.showMaxed = Settings.setSubVar( HOME, 'showMaxed', v ); }
		},
		chkShowOwned:{
			get(){return this.showOwned;},
			set(v){ this.showOwned = Settings.setSubVar( HOME, 'showOwned', v ); }
		},
		chkShowUnowned:{
			get(){return this.showUnowned;},
			set(v){ this.showUnowned = Settings.setSubVar( HOME, 'showUnowned', v ); }
		},
		chkShowBlocked:{
			get(){return this.showBlocked;},
			set(v){ this.showBlocked = Settings.setSubVar( HOME, 'showBlocked', v ); }
		},

		space() { return this.state.getData('space'); },

		homesAvail() { return this.state.homes.filter( v=>!this.locked(v) ); },

		/**
		 * @property {GData[]} furniture - ALL furniture, alpha sorted.
		 */
		furniture(){

			let s = this.state;
			return s.filterItems( it=>
				it.type ==='furniture' || s.typeCost(it.cost, 'space')>0 ||
					s.typeCost(it.mod, 'space') >0
			).sort(
				alphasort
				//(a,b)=> a.name < b.name ? -1 : 1
			);
		},
		viewable() {

			let o = this.showOwned;
			let n = this.showUnowned;
			let b = this.showBlocked;
			let m = this.showMaxed;

			return this.furniture.filter( it=>!this.reslocked(it) &&
				( o||it.value==0) &&
				( b||it.canUse(Game))&&
				( m||!it.maxed() )&&
				(n||it.value>0)
			);

		}

	}

}
</script>

<template>

	<div class="home-view">

		<div class="top separate">

		<span>
		<span class="opt"><input :id="elmId('showMax')" type="checkbox" v-model="chkShowMax"><label :for="elmId('showMax')">Maxed</label></span>
		<span class="opt"><input :id="elmId('showOwn')" type="checkbox" v-model="chkShowOwned"><label :for="elmId('showOwn')">Owned</label></span>
		<span class="opt"><input :id="elmId('showUnowned')" type="checkbox" v-model="chkShowUnowned"><label :for="elmId('showUnowned')">Unowned</label></span>
		<span class="opt"><input :id="elmId('showBlock')" type="checkbox" v-model="chkShowBlocked"><label :for="elmId('showBlock')">Blocked</label></span>
		</span>

<filterbox class="inline" v-model="filtered" :prop="searchIt" :items="viewable" />
		<span class="space">Space: {{ Math.floor(space.free() ) }} / {{ Math.floor(space.max.value) }}</span>
		</div>

		<div class="content">

		<hall v-if="hallOpen" @close="closeHall" />
		<div class="pick-slots">

			<button class="task-btn" v-if="hallUnlocked" @click="openHall">{{ hallName }}</button>

			<slotpick title="Home" pick="home" must-pay=true />
			<slotpick title="Werry" hide-empty=true pick="werry" />

		</div>

		<div class="furniture">

			<div class="warn-text"
			style="text-align:center"
			v-if="state.items.space.empty()">No space remaining. Sell items or find a new Home.
			<span v-if="homesAvail.length>0">If your max gold is not enough to buy a new home, free space for more chests.</span></div>

		<table class="furniture">

		<tr><th>Space</th><th class="name">Furnishing</th><th>Owned</th><th/><th/></tr>


		<tr v-for="it in filtered" :key="it.id" @mouseenter.capture.stop="itemOver( $event, it )">

			<td class="space">{{ it.cost.space || it.mod.space }}</td>
			<td class="name">{{ it.name }}</td> <td class="count">{{ it.value.valueOf() }}</td>

			<td><span v-if="it.maxed()" class="sm">Max</span><button v-else type="button" :disabled="!it.canUse()" class="buy-btn"
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
	margin-bottom:var(--md-gap);
}

div.home-view .furniture table {
	 text-transform: capitalize;
	 flex-grow: 1;
	 border-spacing: 0;
     flex: 1; min-height: 0; width: 100%; max-width: 20rem;
     display: flex; flex-direction: column;
}
div.home-view .furniture table tr { display: flex; padding: var(--sm-gap); }
 div.home-view .furniture table tr:first-child {
        position: sticky; top: 0; background: var(--header-background-color); z-index: 1;
    }
 div.home-view .furniture table tr > *:nth-child(1) { flex-basis: 20%; }
 div.home-view .furniture table tr > *:nth-child(2) { flex-basis: 40%; }
 div.home-view .furniture table tr > *:nth-child(3) { flex-basis: 20%; }
div.home-view .furniture table tr button { margin: 0; font-size: 0.75em; }


table .count, table .space {
	text-align: center;
}
table .name {
	padding: 0 var(--md-gap) 0 0.9rem;
	min-width:10em;
	text-align: left;
}

table tr:nth-child(2n) {
	background: var( --odd-list-color );
}

</style>
