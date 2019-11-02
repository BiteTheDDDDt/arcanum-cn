<script>
import Range from '../../values/range';
import Dot from './dot.vue';

export default {

	props:['item'],
	name:'attack',
	components:{
		gdata:() => import( /* webpackChunkName: "gdata-ui" */ './gdata.vue'),
		dot:Dot
	},
	computed:{

		damage(){

			let dmg = this.item.damage;
			if( typeof dmg === 'number') return dmg;
			else if ( dmg instanceof Range ) return dmg.toString();
			else if ( dmg ) {
				//console.log('unknown damage:' + this.item.damage );
				//console.log( typeof this.item.damage );
				//console.log( this.item.damage.min);
			}

		},
		bonus(){

			let bonus = this.item.bonus;
			if ( bonus == 0 ) return 0;
			if ( bonus > 0) return ' (+' + bonus + ')';
			else return ' (' + bonus + ')';

		}

	}

}
</script>

<template>

<div class="attack">

	<div class="popup-sect">attack</div>

	<div>hit bonus: {{ item.tohit || 0 }}</div>
	<div v-if="item.hands>1">Two-Handed</div>
	<div class="damage" v-if="damage!==null">
		<span>damage: {{ damage }}</span><span v-if="bonus">{{ bonus }}</span></div>
	<div>kind: {{ item.kind }}</div>
	<dot v-if="item.dot" :dot="item.dot" />

</div>

</template>