<script>
import Game from '../../game';

import ItemsBase from '../itemsBase.js';
import InfoBlock from './info-block.vue';
import Attack from './attack.vue';
import Dot from './dot.vue';

import {precise} from '../../util/format';

export default {
	props:['item'],
	name:"gdata",
	mixins:[ItemsBase],
	components:{
		info:InfoBlock,
		attack:Attack,
		dot:Dot
	},
	methods:{
		precise:precise
	},
	computed:{

		name(){return this.item.sname || this.item.name; },
		sellPrice(){ return Game.sellPrice(this.item);},

		nextImprove(){
			return this.nextAt > 0 ? this.nextAt : this.nextEvery;
		},

		/**
		 * Occurance of next 'every' improvement relative to cur value.
		 */
		nextEvery() {

			let v = Math.floor( this.item.value );

			var next = Number.MAX_VALUE;

			var f;	// save every-divisor for pct computation.

			for( let p in this.item.every ) {

				var dist = p - ( v % p );
				if ( dist < next ) {
					next = dist;
					f = p;
				}

			}

			return ( next !== Number.MAX_VALUE) ? ( (f-dist) / f ) : -1;

		},

		nextAt() {

			let v = this.item.value;

			// least upper bound.
			var sup = Number.MAX_VALUE;
			for( let p in this.item.at ) {
				p = Number(p);
				if ( p > v && p < sup ) sup = p;
			}

			return ( sup > v && sup !== Number.MAX_VALUE ) ? sup : -1;

		},
		tags(){

			let t = this.item.tags;
			if ( typeof t === 'string') return this.stripTags(t);
			else if ( Array.isArray(t) ) return t.map( this.stripTags, this ).join(', ');

		}


	}

}
</script>


<template>

<div class="item-info">
	<span class="separate">
		<span class="item-name">{{name}}</span>

			<span v-if="item.type==='resource'||item.type==='stat'">{{ item.current.toFixed(0) + ( item.max ? (' / ' + Math.floor(item.max.value ) ) :'' ) }}</span>
			<span v-else-if="item.type==='furniture'">max: {{
				item.max ? Math.floor(item.max.value ) : ( (item.repeat) ? '&infin;' : 1) }}</span>

			<span v-if="item.sym">{{item.sym}}</span>


	</span>
	<div class="tight note-text" v-if="item.tags">{{tags}}</div>
		<span class="flex-right" v-if="item.rate&&item.rate.value!=0">{{ precise( item.rate.value ) }} /s</span>
		<div>


		<span class="separate">
			<span v-if="item.showLevel">lvl: {{item.showLevel()}}</span>
			<span v-else-if="item.level">lvl: {{item.level}}</span>
			<span v-if="item.slot">slot: {{ item.slot }}</span>
		</span>
		<span v-if="item.at&&(nextAt>0)" class="note-text">
			Next Improvement: {{ Math.round(100*item.value/nextAt)+'%'}}
		</span>
		<span v-else-if="item.every&&(nextEvery>=0)" class="note-text">
			Next Improvement: {{ Math.round(100*nextEvery)+'%'}}
		</span>

			<div v-if="item.cd&&item.timer>0">Cooldown: {{ item.timer.toFixed(2) }}</div>

			<div v-if="item.dist">distance: {{item.dist}}</div>
			<div v-if="item.armor">armor: {{ item.armor }}</div>
			<div class="item-desc" v-if="item.desc">{{ item.desc }}</div>

		</div>

		<info v-if="item.need" :info="item.need" title="need" />
		<info v-if="item.buy&&!item.owned" :info="item.buy" title="purchase cost" />
		<info v-if="item.cost" :info="item.cost" title="cost" />
		<info v-if="item.sell||item.instance||item.type==='furniture'" :info="sellPrice" title="sell" />
		<info v-if="item.run" :info="item.run" title="progress cost" rate="true" />

		<attack v-if="item.attack" :item="item.attack" />

		<div v-if="item.effect||item.mod||item.result||item.dot||item.use" class="popup-sect">effects:</div>

		<dot v-if="item.dot" :dot="item.dot" />

		<info v-if="item.effect" :info="item.effect" :rate="item.perpetual||item.length>0" />
		<info v-if="item.mod" :info="item.mod" />
		<info v-if="item.use" :info="item.use" />
		<info v-if="item.result" :info="item.result" />

		<div v-if="item.lock||item.disable" class="popup-sect">locks:</div>
		<info v-if="item.lock" :info="item.lock" />
		<info v-if="item.disable" :info="item.disable" />

		<div class="note-text" v-if="item.flavor">{{ item.flavor}}</div>
</div>

</template>


<style scoped>

.tight {
	margin:0;
	padding:0;
}

div.item-desc {
	margin: 5px 0px 10px;
	font-size: 0.96em;
}

.item-name {
	font-weight: bold;
}

.separate > span {
	margin-left:var(--small-gap);
}
.flavor {
	font-style: italic;
}

</style>