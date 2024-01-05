<script>
import Dot from './dot-info.vue';
import InfoBlock from './info-block.vue';
import DamageMixin from './damageMixin.js';
import game from '../../game';

export default {

	props:['item', 'atk', 'target'],
	name:'attack',
	mixins: [DamageMixin()],
	components:{
		dot:Dot,
		info:InfoBlock
	},
	computed:{

		attack() {
			return this.atk || this.item.attack;
		},
		damage() {
			return this.getDamage(this.attack);
		},
		hitBonus(){
			return this.attack.tohit || 0;
		},
		bonus(){

			let bonus = this.attack.bonus;
			if ( !bonus || bonus.valueOf() == 0 ) return 0;

			if ( bonus > 0) return ' (+' + bonus + ')';
			else return ' (' + bonus + ')';

		},
		itemtype(){
			return this.item.type?.toString()||"untyped";
		},
		calcTarget() {
			return this.attack.targetstring || this.target || "enemy";
		},
		potency() {
			let potencystring = ""
			for (let a of this.attack.potencies)
			{	
				if(potencystring != "") potencystring = potencystring.concat(", ");
				potencystring = potencystring.concat(game.state.getData(a).name.replace(" damage","").toTitleCase())
			}
			return potencystring
		}

	}

}
</script>

<template>

<div class="attack">

	<div v-if="Array.isArray(attack)">
		<div v-for="(attackunit, idx) in attack" :key="'atk-' + idx">
			<div v-if="idx !== 0" class="info-sect"></div>
			<attack :item="item" :atk="attackunit" />
		</div>
	</div>
	<div v-else>
		<div v-if="damage&&itemtype!=='armor'||attack.hits||attack.dot||attack.result">
			<div v-if="attack.name&&attack.name!==item.name"><span>Name: </span><span>{{attack.name.toString().toTitleCase()}}</span></div>
			
			<div v-if="damage">
				<div v-if="hitBonus">Hit Bonus: {{ hitBonus }}</div>
				<div class="damage">Estimated damage: {{ damage }}<span v-if="bonus">{{ bonus }}</span></div>
				<div v-if="attack.kind">Kind: {{ attack.kind.toString().toTitleCase() }}</div>
			</div>

			<div v-if="attack.targets">Targets: {{ calcTarget.toString().toTitleCase() }}</div>
			<div v-if="attack.result" class="info-sect">Results:</div>
			<info v-if="attack.result" :info="attack.result" :target="calcTarget" />
		</div>

		<div v-if="attack.hits">
			<div v-for="(hit, idx) in attack.hits" :key="'hit-' + idx">
				<div class="info-sect" >Attack hit</div>
				<attack :item="item" :atk="hit" class="info-subsubsect" />
			</div>
		</div>

		<div v-if="attack.dot">
			<div class="info-sect">Applies</div>
			<dot :dot="attack.dot" :item="attack" :target="calcTarget" class="info-subsubsect" />
		</div>
	</div>
</div>

</template>