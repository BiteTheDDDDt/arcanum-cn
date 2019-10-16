<script>
import Game from '../game';

import ItemsBase from './itemsBase';
import UpgradeView from './upgrades.vue';
import FilterBox from './components/filterbox.vue';
import { SET_SLOT } from '../events';

/**
 * @emits sell
 */
export default {

	props:['state'],
	mixins:[ItemsBase],
	components:{
		upgrades:UpgradeView,
		filterbox:FilterBox
	},
	data(){

		return {
			/**
			 * @property {boolean} switching - true when switching homes.
			 */
			switching:false,
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

		searchIt(it, t){

			if ( it.name.includes(t) ) return true;
			if ( it.tags){

				let tags = it.tags;
				for( let i = tags.length-1; i>=0;i--){
					if ( tags[i].includes(t)) return true;
				}

			}

			return false;


		},
		toggleSwitch(){
			this.switching = !this.switching;
		}
	},
	computed:{

		space() { return this.state.getData('space'); },

		curHome() { return this.state.getSlot('home'); },

		homesAvail() {
			return this.state.homes.filter( v=>!this.locked(v) );
		},

		furniture(){

			let st = this.state;
			return Game.filterItems( it=>

				it.type ==='furniture' || st.typeCost(it.cost, 'space')>0

			).sort(
				(a,b)=> a.name < b.name ? -1 : 1
			);
		},
		viewable() { return this.furniture.filter( it=>!this.reslocked(it)); }

	}

}
</script>

<template>

	<div class="home-view">

		<div class="cur-home">

			<span @mouseenter.capture.stop="emit( 'itemover', $event, curHome )">home:<br>{{ curHome ? curHome.name : 'None'}}</span>
			<div v-if="homesAvail.length>0">
			<button @click="toggleSwitch">{{ switching ? 'Done' : 'Switch' }}</button>
			<upgrades v-if="switching" class="homes-view" :items="homesAvail" :pick-event="SET_SLOT" />
			</div>

		</div>

		<div class="furniture">

		<span class="separate">
		<filterbox class="inline" v-model="filtered" :prop="searchIt" :items="viewable" />
		<span class="space">Space: {{ Math.floor(space.value) }} / {{ Math.floor(space.max.value) }}</span>
		</span>

			<div class="warn-text"
			style="text-align:center"
			v-if="state.items.space.value===0">No space remaining. Sell items or find a new Home.
			<span v-if="homesAvail.length>0">If your max gold is not enough to buy a new home, free space for more chests.</span></div>

		<table class="furniture item-table">

		<tr><th>Space</th><th class="name">Furnishing</th><th>Owned</th><th/><th/></tr>


		<tr v-for="it in filtered" :key="it.id" @mouseenter.capture.stop="emit( 'itemover', $event, it )">

			<td class="space">{{ it.cost.space }}</td>
			<td class="name">{{ it.name }}</td> <td class="count">{{ it.value || 0 }}</td>
			<td><button type="button" :disabled="!usable(it)" class="buy-btn"
				@click="emit('upgrade',it)">Buy</button></td>

			<td><button type="button" :disabled="!it.value || it.value<=0" class="sell-btn" @click="emit('sell',it)">Sell</button></td>

		</tr>

		</table>

		</div>



	</div>

</template>

<style scoped>

/* div.home-view .homes-view { flex-flow: row wrap; display: flex; }
div.home-view .homes-view span {
	flex-basis: 20%; margin: 0; padding: 0; box-sizing: border-box; display: flex;
	}*/
div.home-view .homes-view span button {
	flex: 1; font-size: 0.75em;
	}
/*div.home-view .homes-view {
			position: absolute; z-index: 4; top: 100; left : 0; margin: var(--medium-gap);
			display: flex; flex-flow: row wrap;
			background: var(--popup-background-color);
			border: 2px solid var(--separator-color); border-radius: var(--subtle-border-radius);
			padding: var(--medium-gap);
		}
*/
span.space {
	text-align: center;
	margin: 0px 18px;
}
div.home-view {
	overflow-y:auto;
	display: flex;
	padding-left:16px;
	padding-right:15px;
	flex-direction: row;
	height:100%;
}

div.cur-home {
	margin-top:12px;
	margin-right: 16px;
	flex-basis: 110px;
}

div.nospace {
	color: red;
}

div.furniture {
	margin-bottom: 4px;
}

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
