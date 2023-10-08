<script>
import Game from '../../game';

import ItemsBase from '../itemsBase.js';
import InfoBlock from './info-block.vue';
import {CheckTypes} from './infoBlock.js';
import Attack from './attack.vue';
import Dot from './dot-info.vue';
import DamageMixin from './damageMixin.js';

import {precise} from '../../util/format';
import Summon from './summon.vue';

export default {
	props:['item'],
	name:"gdata",
	mixins:[ItemsBase, DamageMixin()],
	components:{
    info: InfoBlock,
    attack: Attack,
    dot: Dot,
    summon : Summon
},
	methods:{
		precise:precise,

		/**
		 * Convert tag strings into viewable format.
		 * @param {string|string[]} t
		 * @returns {string|string[]}
		 */
		tagNames( t ) {

			if ( Array.isArray(t) ) return t.map( this.tagNames, this );

			if ( typeof t === 'string' && t.substring(0,2) === 't_' ) return t.slice(2).toTitleCase();
			
			return t.toTitleCase();

		},
		formatNumber(number) {
			let parsednumber= (Math.floor(parseFloat(number)));
			if(parsednumber) {
				parsednumber = parsednumber.toString();
				let brokenNumbersPostPoint= parsednumber.split('.');
				let numbersBeforePoint= brokenNumbersPostPoint[0];
				let numbersAfterPoint= brokenNumbersPostPoint.length > 1 ? '.' + brokenNumbersPostPoint[1] : '';
				var rgx = /(\d+)(\d{3})/;
				while (rgx.test(numbersBeforePoint)) {
					numbersBeforePoint= numbersBeforePoint.replace(rgx, '$1' + ',' + '$2');
				}
				return numbersBeforePoint+ numbersAfterPoint;
			}
			else
			{
				return number;
			}
		},
		formatTime(millis) {
			let hr = Math.floor(millis/3600000);
			let min = Math.floor(millis/60000) % 60;
			let sec = Math.floor(millis/1000) % 60;
			
			return `${(hr < 10 && "0") + hr}:${(min < 10 && "0") + min}:${(sec < 10 && "0") + sec}`;
		}

	},
	beforeCreate(){
		this.player = Game.state.player;
		this.CheckTypes = CheckTypes;
	},
	computed:{

		name(){return this.item.sname || this.item.name.toTitleCase(); },
		damage(){
			return this.getDamage(this.item);
		},
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

			let tags = this.item.tags;
			if(typeof tags === 'string') tags = [tags];
			let names = [];
			for(var i=0; i < tags.length; i++) {
				let tag = tags[i];
				tag = Game.state.tagSets[tag] || tag;
				if(tag == null || tag.hide) continue;
				if(tag instanceof Object && tag.name) {
					names.push(tag.name.toTitleCase());
				} else {
					names.push(this.tagNames(tag));
				}
			}
			
			return names.join(', ');

		}

	}

}
</script>


<template>

<div class="item-info">
	<!-- Begin upper section of tooltip -->
	<span class="separate">
		<span class="item-name">{{name.toString().toTitleCase()}}</span>

		<span v-if="item.type==='resource'||item.type==='stat'">
			{{ formatNumber(item.current.toFixed(0)) + ( formatNumber(item.max) ? (' / ' + formatNumber(item.max.value ) ) :'' ) }}
		</span>
		<span v-else-if="item.type==='furniture'">
			max: {{ item.max ? formatNumber(item.max.value ) : ( (item.repeat) ? '&infin;' : 1) }}
		</span>
		<span v-else-if="item.type==='upgrade'||item.type==='task'">
			<br>
			<span v-if="item.value">{{formatNumber(+item.value)}}</span>
			<span v-if="item.max">/ {{formatNumber(+item.max)}}</span>
			<span v-else-if="item.type==='upgrade'">/ 1</span>
		</span>

		<span v-if="item.type==='locale'||item.type==='dungeon'">
			<span v-if="item.value">{{formatNumber(+item.value)}}</span>
			<span v-if="item.max">/ {{formatNumber(+item.max)}}</span>
		</span>

		<span v-if="item.sym">{{item.sym}}</span>
	</span>

	<div class="tight note-text" v-if="item.tags||item.hands"><span v-if="item.hands>1">Two-Handed </span>{{tags}}</div>

	<span class="flex-right" v-if="item.rate&&item.rate.value!=0">{{ precise( item.rate.value ) }}/s</span>

	<div>
		<span class="separate">
			<span v-if="item.showLevel">Level: {{item.showLevel()}}</span>
			<span v-else-if="item.level">Level: {{item.level}}</span>

			<span v-if="item.slot">Slot: {{ item.slot.toString().toTitleCase() }}</span>
		</span>

		<span v-if="item.enchants&&item.enchants.max>0">Enchant Levels: {{item.enchants.value}} / {{ item.enchants.max }}</span>

		<span v-if="item.at&&(nextAt>0)" class="note-text">
			Next Improvement: {{ Math.round(100*item.value/nextAt)+'%'}}
		</span>
		<span v-else-if="item.every&&(nextEvery>=0)" class="note-text">
			Next Improvement: {{ Math.round(100*nextEvery)+'%'}}
		</span>

		<div v-if="item.cd||item.timer>0" class="note-text">Cooldown: {{ item.timer > 0 ? item.timer.toFixed(2) + ' Left' : item.cd + 's' }}</div>
		<div v-if="+item.dist">Distance: {{item.dist}}</div>
		<div v-if="+item.armor">Armor: {{ item.armor }}</div>
		<div v-if="+item.dmg&&(!item.attack || item.attack.dmg!==item.dmg)">Base damage: {{ damage }}</div>

		<div class="item-desc" v-if="item.desc">{{ item.desc }}</div>
	</div>

	<span v-if="item.length>0&&item.type==='task'">
		Completion time: {{formatTime((item.length-item.exp)*1000)}}
	</span>
	<!-- End of upper section of tooltip -->

	<info v-if="item.need" :info="item.need" :checkType="CheckTypes.NEED" title="Need" :require="true" />
	<info v-if="item.buy&&!item.owned" :info="item.buy" :checkType="CheckTypes.COST" title="Purchase Cost" />
	<info v-if="item.cost" :info="item.cost" :checkType="CheckTypes.COST" title="Cost" />
	<info v-if="item.sell||item.instanced||item.type==='Furniture'" :info="sellPrice" :checkType="CheckTypes.FULL" title="Sell" />
	<info v-if="item.run" :info="item.run" :checkType="CheckTypes.COST" title="Progress Cost" rate="true" />

	<div v-if="item.attack&&item.type !== 'armor'">
		<div class="info-sect" >Attack</div>
		<attack :item="item" class="info-subsubsect" />
	</div>

	<div v-if="item.effect">
		<div class="info-sect">Effects:</div>
		<info :info="item.effect" :rate="item.perpetual>0||item.length>0" :checkType="CheckTypes.FULL" />
	</div>

	<div v-if="(item.mod&&Object.values(item.mod).length)||(item.alter&&Object.values(item.alter).length)">
		<div class="info-sect">Modifications:</div>
		<info v-if="item.mod&&Object.values(item.mod).length" :info="item.mod" />
		<info v-if="item.alter&&Object.values(item.alter).length" :info="item.alter" />
	</div>
	<div v-if="item.summon">
		<div class="info-sect">Summons:</div>
		<summon :item="item" class="info-subsubsect"  />
	</div>
	<div v-if="item.result">
		<div class="info-sect">Results:</div>
		<info :info="item.result" :checkType="CheckTypes.FULL" />
	</div>

	<div v-if="item.use">
		<div class="info-sect">When used:</div>
		<div class="info-subsubsect">
			<info :info="item.use" :separate="true" />
			<!-- <attack v-if="item.use.attack" :item="item.use" /> -->
		</div>
	</div>

	<div v-if="item.runmod&&Object.values(item.runmod).length">
		<div class="info-sect">When active:</div>
		<info :info="item.runmod" />
	</div>

	<div v-if="item.dot">
		<div class="info-sect">Buffs:</div>
		<dot :dot="item.dot" :item="item" class="info-subsubsect" />
	</div>

	<div v-if="item.lock">
		<div class="info-sect">Locks:</div>
		<info :info="item.lock" />
	</div>

	<div v-if="item.disable">
		<div class="info-sect">Disables:</div>
		<info :info="item.disable" />
	</div>

	<div class="note-text" v-if="item.flavor">{{item.flavor}}</div>
</div>

</template>


<style scoped>

.tight {
	margin:0;
	padding:0;
}

div.item-desc {
	margin: 0.6em 0 0.9em;
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
