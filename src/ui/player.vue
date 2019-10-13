<script>
import Game from '../game';
import { floor, lowFixed, precise } from '../util/format';

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
		level() {return this.player.level.value.value; },
		hp() {return this.player.hp; },
		defense() {return this.player.defense.value; },
		dodge(){ return Math.floor(this.player.dodge.valueOf()) },
		luck(){return Math.floor(this.player.luck.valueOf()) },
		damage() { return this.player.damage || 0 },
		tohit() {return this.player.tohit.value; },
		exp() {return this.floor( this.player.exp.value ); },
		next() {return this.floor( this.player.next ); },
		mount() { return Game.state.getSlot('mount'); },
		dist() { return this.player.dist; },

		sp() { return this.player.sp; },
		spStr(){return lowFixed( this.player.sp ); }


	},
	components:{
		'upgrades':AllUpgrades,
		'slotpick':SlotPick
	},
	beforeCreate(){

		this.player = Game.state.player;
	},
	methods:{
		floor:floor,
		precise:precise
	}

}
</script>


<template>

	<div class="player-view">

		<div class="player-tables">

		<div>
		<table>
		<tr><td>name</td><th class="text-entry">
			<input class="fld-name" type="text" v-model="name"></th></tr>
		<tr @mouseenter.capture.stop="emit( 'itemover', $event,player.titles, 'Titles')"><td>title</td><th> {{ title}}</th></tr>
		<!--<tr><td>alignment</td><th>{{ player.alignment }}</th></tr>-->
		<tr><td>level</td><th> {{ level }}</th></tr>
		<tr><td>exp</td><th> {{ exp }} / {{ next }} </th></tr>
		<tr><td @mouseenter.capture.stop="emit( 'itemover', $event,sp)">skill points</td><th> {{spStr }}</th></tr>

		<tr><td>rest</td><th><slotpick pick="rest" /></th></tr>
		<tr><td>mount</td><th><slotpick pick="mount" /></th></tr>
		<tr><td @mouseenter.capture.stop="emit( 'itemover', $event,dist)">distance</td><th>{{ dist.current }}</th></tr>
		</table>
		</div>

		<div>
		<table>
			<tr><td @mouseenter.capture.stop="emit( 'itemover', $event, hp)">life</td><th>
			{{ floor( hp.value ) }} / {{ floor( hp.max.value ) }}</th></tr>

			<tr><td>stamina</td><th>
			{{ floor( stamina.value ) }} / {{ floor(stamina.max.value )}}</th></tr>

			<tr><td>defense</td><th>{{ defense }}</th></tr>
			<tr><td>dodge</td><th>{{ dodge }}</th></tr>
			<tr><td>luck</td><th>{{ luck }}</th></tr>
			<tr><td>damage bonus</td><th>{{ damage }}</th></tr>
			<tr><td>hit bonus</td><th>{{ tohit }}</th></tr>

			<tr><td>speed</td><th>{{ speed.toFixed(2) }}</th></tr>

			<tr @mouseenter.capture.stop="emit( 'itemover', $event,player.weapon)">
				<td>weapon</td><th>{{ player.weapon ? player.weapon.name : 'None' }}</th></tr>


		</table>
		</div>

		<div>
		<table class="resists">
			<tr><th>resists</th></tr>
			<tr v-for="(r,k) in player.resist" :key="k">
				<td>{{k}}</td><td class="num-align">{{ precise( r.value ) }}%</td>
			</tr>
		</table>
		</div>

		<div>

		<table class="immunities">
			<tr><th>immunities</th></tr>
			<tr v-for="(r,k) in player.immunities" :key="k">
				<td v-if="r>0">{{k}}</td>
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
	padding-left:14px;
	justify-content: space-between;
}

div.player-view div.player-tables {
	display:flex;
	flex-flow: row wrap;
	align-content:flex-start;
	flex-grow: 1;
}

div.player-tables div {
	margin-top:10px;
	flex-basis: 50%;
}

div.player-view input[type=text].fld-name {
	margin: 0; }



div.player-view input[type=text] {
	border: none; background: transparent; font-size: 1em; cursor: text; position: relative;
}

td, th {
	padding: 2px 4px;
	vertical-align: text-top;
}

td {
	text-align:right;
}

th { text-align: left; }

</style>
