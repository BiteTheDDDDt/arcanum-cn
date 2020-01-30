<script>
import Range from '../../values/range';
import Dot from './dot-block.vue';

export default {

	props:['item'],
	name:'attack',
	components:{
		gdata:() => import( /* webpackChunkName: "gdata-ui" */ './gdata.vue'),
		dot:Dot
	},
	computed:{

		damage(){

			let dmg = this.item.damage || this.item.dmg;
			if( typeof dmg === 'number') return dmg;
			else if ( dmg ) {
				return dmg.toString();
			}

		},
		hitBonus(){
			return this.item.tohit || 0;
		},
		bonus(){

			let bonus = this.item.bonus;
			if ( !bonus || bonus.valueOf() == 0 ) return 0;

			if ( bonus > 0) return ' (+' + bonus + ')';
			else return ' (' + bonus + ')';

		}

	}

}
</script>

<template>

<div class="attack">

	<div class="info-sect">attack</div>

	<div v-if="hitBonus">hit bonus: {{ hitBonus }}</div>
	<div class="damage" v-if="damage!==null">
		<span>damage: {{ damage }}</span><span v-if="bonus">{{ bonus }}</span></div>
	<div>kind: {{ item.kind }}</div>
	<dot v-if="item.dot" :dot="item.dot" />

</div>

</template>