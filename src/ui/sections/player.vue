<script>
import Game from 'game';
import { floor, lowFixed, precise } from 'util/format';

import AllUpgrades from '../panes/allupgrades.vue';
import SlotPick from '../components/slotpick.vue';
import Profile from 'modules/profile';
import { getDelay } from '../../values/consts';

export default {

	components:{
		upgrades:AllUpgrades,
		slotpick:SlotPick,
		hall:()=>import( /* webpackChunkName: "hall-ui" */ 'ui/hall/hall.vue')
	},
	data(){

		return {
			hallOpen:false
		}

	},
	beforeCreate(){
		this.player = Game.state.player;
	},
	computed:{

		wizName:{
			get(){ return this.player.name },
			set(v){
				if ( v ) this.player.setName(v);
			}
		},


		hallUnlocked(){ return Profile.hasHall(); },
		hallName(){ return Profile.hall.name; },

		title(){ return this.player.title; },
		speed() {
			return this.player.speed.value
		},
		delay() {
			let a = ""
			return  a.concat('Turn delay: ', getDelay(this.player.speed.value).toPrecision(2), ' seconds')
		},
		/**
		 * @note intentionally GData. make clearer.
		 */
		stamina() { return this.player.stamina; },
		hp() {return this.player.hp; },

		bonusNames(){
			return Object.keys( this.player.bonuses );
		},
		hitNames(){
			return Object.keys( this.player.hits );
		},
		potencies() {return Game.state.potencies},
		level() {return this.player.level.value },

		defense() {return this.player.defense },
		dodge(){ return Math.floor(this.player.dodge.valueOf()) },
		luck(){return Math.floor(this.player.luck.valueOf()) },
		damage() { return this.player.damage.valueOf() },
		tohit() {return this.player.tohit.value; },
		exp() {return this.floor( this.player.exp.value ); },
		next() {return this.floor( this.player.next ); },
		mount() { return Game.state.getSlot('mount'); },
		dist() { return this.player.dist; },
		chaincast() { return (this.player.chaincast - 1).toPrecision(3); },
		sp() { return this.player.sp; },
		spStr(){return lowFixed( this.player.sp ); }


	},
	methods:{

		floor:floor,
		precise:precise,

		openHall(){ this.hallOpen = true; },

		closeHall(){this.hallOpen = false;},

		pickTitle($evt){

			this.emit( 'choice', this.player.titles, {
				cb:(p)=>{

					if ( p ) {
						this.player.setTitle(p);
					}

				},
				elm:$evt.target,
				strings:true
			});

		}

	}

}
</script>


<template>

	<div class="player-view">

		<hall v-if="hallOpen" @close="closeHall" />

		<div class="player-tables">

		<div>
		<table>
		<tr><td>Name</td><th class="text-entry">
			<input class="fld-name" type="text" v-model="wizName"></th></tr>

		<tr v-if="hallUnlocked"><td></td><th><button @click="openHall">{{ hallName }}</button></th></tr>

		<tr @mouseenter.capture.stop="itemOver( $event, player.titles, null, 'Titles')">
			<td><span v-if="player.titles.length>0"><button class="config" @click="pickTitle($event)"></button></span>Title</td><th> {{ title}}</th></tr>
		<tr><td>Notoriety</td><th>{{ Math.floor(player.fame.valueOf() ) }}</th></tr>
		<tr><td>Level</td><th> {{ level }}</th></tr>
		<tr><td>Experience</td><th> {{ exp }} / {{ next }} </th></tr>
		<tr><td>Virtue : Evil</td><th> {{ Math.floor(player.virtue.valueOf()) }} : {{Math.floor(player.evilamt.valueOf())}}</th></tr>
		<tr><td @mouseenter.capture.stop="itemOver( $event,sp)">Skill Points</td><th> {{spStr }}</th></tr>


		<tr><td>Rest</td><th><slotpick pick="rest" /></th></tr>
		<tr><td>Mount</td><th><slotpick pick="mount" /></th></tr>
		<tr><td @mouseenter.capture.stop="itemOver( $event,dist)">Distance</td><th>{{ dist.current }}</th></tr>
		</table>
		</div>

		<div>
		<table>
			<tr><td @mouseenter.capture.stop="itemOver( $event, hp)">Life</td><th>
			{{ floor( hp.valueOf() ) }} / {{ floor( hp.max.value ) }}</th></tr>

			<tr><td>Stamina</td><th>
			{{ floor( stamina.valueOf() ) }} / {{ floor(stamina.max.value )}}</th></tr>

			<tr><td>Defense</td><th>{{ defense }}</th></tr>
			<tr><td>Dodge</td><th>{{ dodge }}</th></tr>
			<tr><td>Luck</td><th>{{ luck }}</th></tr>
			<tr><td>Damage Bonus</td><th>{{ damage }}</th></tr>
			<tr><td>Hit Bonus</td><th>{{ precise( tohit ) }}</th></tr>

			<tr @mouseenter.capture.stop="itemOver( $event,null,null,null,delay)">
				<td>Speed</td><th>{{ speed }} </th> </tr>
			<tr @mouseenter.capture.stop="itemOver( $event,player.weapon)">
				<td>Weapon</td><th>{{ player.weapon ? player.weapon.name.toTitleCase() : 'None' }}</th></tr>


		</table>
		</div>

		<div>
		<table class="resists">
			<tr><th>Resists</th></tr>
			<tr v-for="(r,k) in player.resist" :key="k">
				<td>{{ k.toString().toTitleCase() }}</td><td class="num-align">{{ precise( r.value ) }}%</td>
			</tr>
		</table>
		</div>

		<div>
		<table class="bonuses">
			<tr><th>Bonus Damage</th></tr>
			<tr v-for="(r,k) in player.bonuses" :key="k">
				<td v-if="r.valueOf()!==0">{{ k.toString().toTitleCase() }}: {{ r.valueOf() }}</td>
			</tr>
		</table>
		</div>

		<div>
		<table class="hits">
			<tr><th>Hit Bonus</th></tr>
			<tr v-for="(r,k) in player.hits" :key="k">
				<td v-if="r.valueOf()!==0">{{ k.toString().toTitleCase() }}: {{ r.valueOf() }}</td>
			</tr>
		</table>
		</div>

		<div>
		<table class="immunities">
			<tr><th>Immunities</th></tr>
			<tr v-for="(r,k) in player.immunities" :key="k">
				<td v-if="r>0">{{ k.toString().toTitleCase() }}</td>
			</tr>
		</table>
		</div>

		</div>

		<upgrades></upgrades>

	</div>

</template>

<style scoped>

div.player-view {
	display:flex;
	flex-direction: row;
	height:100%;
	padding-left:1rem;
	justify-content: space-between;
}

div.player-view div.player-tables {
	display:flex;
	flex-flow: row wrap;
	align-content:flex-start;
	flex-grow: 1;
}

div.player-tables div {
	margin-top:var(--md-gap);
	flex-basis: 50%;
}

div.player-view input[type=text].fld-name { margin: 0; }

div.player-view input[type=text] {
	border: none; background: transparent; font-size: 1em; cursor: text; position: relative;
}

td, th {
	padding:var(--tiny-gap) var(--sm-gap);
	vertical-align: text-top;
}

td {
	text-align:right;
}

th { text-align: left; }

</style>
