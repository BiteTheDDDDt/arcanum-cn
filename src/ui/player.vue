<script>
import Game from '../game';
import { floor } from '../util/format';

import AllUpgrades from './allupgrades.vue';
import SlotPick from './components/slotpick.vue';

export default {

	computed:{

		name:{
			get(){ return this.player.name; },
			set(v){
				if ( v ) this.player.name = v;
			}
		},
		title(){ return this.player.title; },
		speed() {



			let s = this.player.speed.value;
			/** compat */
			if ( typeof s === 'object') return s.value;
			return s;

		},
		stamina() { return this.player.stamina; },
		level() {return this.player.level; },
		hp() {return this.player.hp; },
		defense() {return this.player.defense.value; },
		dodge(){ return this.player.dodge.value },
		damage() { return this.player.damage || 0 },
		tohit() {return this.player.tohit.value; },
		exp() {return this.floor( this.player.exp.value ); },
		next() {return this.floor( this.player.next ); },
		mount() { return Game.state.getSlot('mount'); },
		dist() { return this.player.dist; },
		sp(){return this.player.sp; }


	},
	components:{
		'upgrades':AllUpgrades,
		'slotpick':SlotPick
	},
	beforeCreate(){

		this.player = Game.state.player;
	},
	methods:{
		floor:floor
	}

}
</script>


<template>

	<div class="player-view">

		<table>

		<tr><td>name</td><th>
			<input class="fld-name" type="text" v-model="name"></th></tr>
		<tr @mouseenter.capture.stop="dispatch( 'itemover', $event,player.titles, 'Titles')"><td>title</td><th> {{ title}}</th></tr>
		<!--<tr><td>alignment</td><th>{{ player.alignment }}</th></tr>-->
		<tr><td>level</td><th> {{ level }}</th></tr>
		<tr><td>exp</td><th> {{ exp }} / {{ next }} </th></tr>
		<tr><td @mouseenter.capture.stop="dispatch( 'itemover', $event,sp)">skill points</td><th> {{ sp.value.toFixed(2) }}</th></tr>

		<tr><td>mount</td><th><slotpick pick="mount" /></th></tr>
		<tr><td @mouseenter.capture.stop="dispatch( 'itemover', $event,dist)">distance</td><th>{{ dist.current }}</th></tr>
		</table>

		<table>
			<tr><td @mouseenter.capture.stop="dispatch( 'itemover', $event, hp)">life</td><th>
			{{ floor( hp.value ) }} / {{ floor( hp.max.value ) }}</th></tr>

			<tr><td>stamina</td><th>
			{{ floor( stamina.value ) }} / {{ floor(stamina.max.value )}}</th></tr>

			<tr><td>defense</td><th>{{ defense }}</th></tr>
			<tr><td>dodge</td><th>{{ dodge }}</th></tr>
			<tr><td>damage bonus</td><th>{{ damage }}</th></tr>
			<tr><td>hit bonus</td><th>{{ tohit }}</th></tr>

			<tr><td>speed</td><th>{{ speed.toFixed(2) }}</th></tr>

			<tr @mouseenter.capture.stop="dispatch( 'itemover', $event,player.weapon)">
				<td>weapon</td><th>{{ player.weapon ? player.weapon.name : 'None' }}</th></tr>

			<tr @mouseenter.capture.stop="dispatch( 'itemover', $event,player.primary)">
				<td>spell</td><th>{{ player.primary ? player.primary.name : 'None' }}</th></tr>


		</table>

		<table class="resists">
			<tr v-for="(r,k) in player.resist" :key="k">
				<td>{{k}}</td><td class="num-align">{{r}}%</td>
			</tr>
		</table>
		<table class="immunities">
			<tr v-for="(r,k) in player.immunities" :key="k">
				<td>{{k}}</td>
			</tr>
		</table>

		<upgrades></upgrades>

	</div>

</template>

<style scoped>

div.player-view {
	display:flex;
	flex-direction: row;
	height:100%;
	padding-left:14px;
	justify-content: space-between;
}

div.player-view input[type=text].fld-name { margin: 0; }

td, th {
	padding: 2px 4px;
	vertical-align: text-top;
}

td {
	text-align:right;
}

th { text-align: left; }

</style>
