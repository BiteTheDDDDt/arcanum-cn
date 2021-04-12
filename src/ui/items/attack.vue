<script>
import Range from '../../values/range';
import Dot from './dot-info.vue';

export default {

	props:['item'],
	name:'attack',
	components:{
		gdata:() => import( /* webpackChunkName: "gdata-ui" */ './gdata.vue'),
		dot:Dot
	},
	computed:{

		damage(){

			let dmg = this.item.attack.damage || this.item.attack.dmg;
			if( typeof dmg === 'number') return dmg;
			else if ( dmg ) {
				return dmg.toString();
			}

		},
		hitBonus(){
			return this.item.attack.tohit || 0;
		},
		bonus(){

			let bonus = this.item.attack.bonus;
			if ( !bonus || bonus.valueOf() == 0 ) return 0;

			if ( bonus > 0) return ' (+' + bonus + ')';
			else return ' (' + bonus + ')';

		},
		itemtype(){
			return this.item.type.toString();
		}

	}

}
</script>

<template>

<div class="attack">

	<div v-if="damage!==0&&damage!==null&&typeof damage !== 'undefined'&&itemtype!=='armor'||item.attack.targets">
		<div class="info-sect" >Attack</div>		
		<div v-if="hitBonus&&damage!==0&&damage!==null&&typeof damage !== 'undefined'">Hit Bonus: {{ hitBonus }}</div>
		<div class="damage" v-if="damage!==0&&damage!==null&&typeof damage !== 'undefined'">
			<span>Damage: {{ damage }}</span><span v-if="bonus">{{ bonus }}</span></div>
		<div v-if="damage!==0&&damage!==null&&typeof damage !== 'undefined'&&item.attack.kind">Kind: {{ item.attack.kind.toString().toTitleCase() }}</div>
		<div v-if="item.attack.targets">Targets: {{ item.attack.targetstring.toString().toTitleCase() }}</div>
	</div>
	<div v-if="item.attack.hits">
		<div v-for="hit in item.attack.hits">
			<div class="info-sect" >Attack hit</div>		
			<div v-if="hit.tohit&&hit.damage!==0&&hit.damage!==null&&typeof hit.damage !== 'undefined'">Hit Bonus: {{ hit.tohit }}</div>
			<div class="damage" v-if="hit.damage!==0&&hit.damage!==null&&typeof hit.damage !== 'undefined'">
				<span>Damage: {{ hit.damage }}</span><span v-if="bonus">{{ hit.bonus }}</span></div>
			<div v-if="hit.damage!==0&&hit.damage!==null&&typeof hit.damage !== 'undefined'&&hit.kind">Kind: {{ hit.kind.toString().toTitleCase() }}</div>
			<div v-if="hit.targets">Targets: {{ hit.targetstring.toString().toTitleCase() }}</div>
			<div class="info-subsect" v-if="hit.dot">Applies</div>
			<dot v-if="hit.dot" :dot="hit.dot" />
		</div>
	</div>
	<div class="info-sect" v-if="item.attack.dot">Applies</div>
	<dot v-if="item.attack.dot" :dot="item.attack.dot" />
</div>

</template>