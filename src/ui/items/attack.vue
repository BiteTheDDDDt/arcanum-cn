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

	<div class="info-sect">Attack</div>

	<div v-if="hitBonus">Hit Bonus: {{ hitBonus }}</div>
	<div class="damage" v-if="damage!==null&&!item.dot">
		<span>Damage: {{ damage }}</span><span v-if="bonus">{{ bonus }}</span></div>
	<div v-if="!item.dot">Kind: {{ item.kind.toString().toTitleCase() }}</div>
	<div v-if="item.dot&&item.dmg"><br></div>
	<dot v-if="item.dot" :dot="item.dot" />
</div>

</template>