<script>
import Game from 'game';
import { precise } from 'util/format';
import {alphasort} from 'util/util';
import {CheckTypes} from '../../ui/items/infoBlock.js';
import Profile from 'modules/profile';

export default {

	methods:{
		canAfford(key, num){	
			return Game.canPay(key, num);
		},
		cantFill(key){
			let item = Game.state.getData(key);
			return item.maxed();
		},
		count(it){
			return it.value > 1 ? ( ' (' + Math.floor(it.value) + ')' ) : '';
		},
		isEmpty(it){
			for( let [key, value] of Object.entries(Game.getData(it).convert.input) ){
				if(!this.canAfford({[key]: value}, it.convert.singular ? 1 : it.value)) return true;
			}
			return false;
		},
		isFull(it) {
			let outputs = Game.getData(it).convert.output.effect;
			if(!outputs || !Object.keys(outputs).length) return false;
			for(let key in outputs){
				if(!this.cantFill(key, it.value)) return false;
			}
			return true;
		},
		lookup(key){
			return Game.state.getData(key).name.toTitleCase();
		},
		precise:precise
	},
	computed:{

		allSections(){
			let list = {
				"upgrades": this.upgrades,
				"furniture": this.furniture,
				"resources": this.resources
			}

			return list;
		},

		upgrades(){
			return (Game.state.upgrades.concat(this.hall.upgrades)).filter(v=>!v.disabled&&v.convert&&v.value>=1&&!v.cost.space&&!Game.state.typeCost(v.mod,'space')).sort(alphasort);
		},
		furniture(){

			let s = Game.state;
			return s.filterItems(it =>
				(it.type === 'furniture' || s.typeCost(it.cost, 'space') > 0 ||
				s.typeCost(it.mod, 'space') > 0)&&!it.disabled&&it.convert&&it.value>0
			).sort(
				alphasort
			);

		},
		resources(){
			return (Game.state.resources.concat(this.hall.resources)).filter(v=>!v.disabled&&v.convert&&v.value>=0.1).sort(alphasort);
		},
		hall() { return Profile.hall; },

	},
	beforeCreate(){
		this.CheckTypes = CheckTypes;
	},

}
</script>

<template>
	<div class="converters" ref="conv-anchor">
		<span><strong>Converters</strong></span>
		<div>Displays all converters, their inputs, and their output effects.</div>
		<div>Does not display "mod" outputs.</div>
		<div class="conv-list">

			<table v-for="(list,title) in allSections" v-if="list.length !=0">
				<tr><th colspan="4">{{ title.toTitleCase() }}</th></tr>
				<tr><th>Converter</th><th>Total Inputs</th><th>Total Outputs</th><th>Converter Status</th></tr>
				<tr v-for="it in list" :key="it.id" @mouseenter.capture.stop="itemOver( $event,it)">
					<td>{{it.name.toTitleCase() + count(it) }}</td>
					<td><div v-for="(value, key) in it.convert.input" :class="{failed: !canAfford({[key]: value}, it.convert.singular ? 1 : it.value)}">{{ precise(value * (it.convert.singular ? 1 : it.value),4) }} {{ lookup(key) }}</div></td>
					<td><div v-for="(value, key) in it.convert.output.effect" :class="{full: cantFill(key)}">{{ precise(value * (it.convert.singular ? 1 : it.value),4) }} {{ lookup(key) }}</div></td>
					<td>
						<div v-if="isFull(it)">Not running - output full</div>
						<div v-else-if="isEmpty(it)">Not running - input missing</div>
					</td>
				</tr>
			</table>

		</div>


	</div>
</template>

<style scoped>

div.converters {
	display:flex;
	flex-flow: column nowrap;
	overflow-y: auto;
	height:100%;
	padding: 10px;
	padding-bottom: 30px;
}
div.conv-list {
	margin-bottom:1rem;
	overflow-x:visible;
}

table {
	margin: 15px;
	border-collapse: collapse;
	min-width: 80%;
}

td {
	padding-left: 5px;
	padding-right: 5px;
	border-right: solid 1px #000; 
    border-left: solid 1px #000;
	width: 25%;
}

table tr:first-child {
	top: 0;
	background: var(--header-background-color);
}

table tr:nth-child(2n) {
	background: var(--odd-list-color);
}

.failed {
	color: red;
}
.full {
	color: slategrey;
}
.darkmode .failed, .darkmode .full {
	color: #505050;
}

</style>