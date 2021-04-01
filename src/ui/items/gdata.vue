<script>
import Game from '../../game';

import ItemsBase from '../itemsBase.js';
import InfoBlock from './info-block.vue';
import Attack from './attack.vue';
import Dot from './dot-info.vue';

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

		}

	},
	beforeCreate(){
		this.player = Game.state.player;
	},
	computed:{

		name(){return this.item.sname || this.item.name.toTitleCase(); },
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
			for(var i=0; i < this.item.tags.length; i++) {
				if (this.item.tags[i] == 'gemimbue') {
					this.item.tags[i] = 'Imbue Gem'
				};
				if (this.item.tags[i] == 'magicgems') {
					this.item.tags[i] = 'Magic Gems'
				};
				if (this.item.tags[i] == 'prismaticgems') {
					this.item.tags[i] = 'Prismatic Gems'
				};
				if (this.item.tags[i] == 'elementalgems') {
					this.item.tags[i] = 'Elemental Gems'
				};
				if (this.item.tags[i] == 'primordialgems') {
					this.item.tags[i] = 'Primordial Gems'
				};
				if (this.item.tags[i] == 'elementalrunes') {
					this.item.tags[i] = 'Elemental Runes'
				};
				if (this.item.tags[i] == 'primaticrunes') {
					this.item.tags[i] = 'Prismatic Runes'
				};
				if (this.item.tags[i] == 'primordialrunes') {
					this.item.tags[i] = 'Primordial Runes'
				};
				if (this.item.tags[i] == 'manas') {
					this.item.tags[i] = 'Mana'
				};
 				this.item.tags[i] = this.item.tags[i];
			}
			if ( typeof t === 'string') return this.tagNames(t);
			else if ( Array.isArray(t) ) return t.map( this.tagNames, this ).join(', ');

		}

	}

}
</script>


<template>

<div class="item-info">
	<span class="separate">
		<span class="item-name">{{name.toString().toTitleCase()}}</span>

			<span v-if="item.type==='resource'||item.type==='stat'">{{ item.current.toFixed(0) + ( item.max ? (' / ' + Math.floor(item.max.value ) ) :'' ) }}</span>
			<span v-else-if="item.type==='furniture'">max: {{
				item.max ? Math.floor(item.max.value ) : ( (item.repeat) ? '&infin;' : 1) }}</span>

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

			<div v-if="item.dist">Distance: {{item.dist}}</div>
			<div v-if="item.armor">Armor: {{ item.armor }}</div>
			<div class="item-desc" v-if="item.desc">{{ item.desc }}</div>

		</div>

		<info v-if="item.need" :info="item.need" title="Need" />
		<info v-if="item.buy&&!item.owned" :info="item.buy" title="Purchase Cost" />
		<info v-if="item.cost&&item.id != 'bloodshot'" :info="item.cost" title="Cost" />
		<info v-if="item.cost&&item.id == 'bloodshot'" :info="'Life: ' + (this.player.hp/3).toFixed(2)" title="Cost" />
		<info v-if="item.sell||item.instanced||item.type==='Furniture'" :info="sellPrice" title="Sell" />
		<info v-if="item.run" :info="item.run" title="Progress Cost" rate="true" />

		<attack v-if="item.attack" :item="item.attack" />

		<div v-if="item.effect||item.mod||item.result||item.dot||item.use" class="info-sect">Effects:</div>

		<dot v-if="item.dot" :dot="item.dot" />

		<info v-if="item.effect" :info="item.effect" :rate="item.perpetual||item.length>0" />
		<info v-if="item.mod" :info="item.mod" />
		<info v-if="item.alter" :info="item.alter" />
		<info v-if="item.use" :info="item.use" />
		<info v-if="item.result" :info="item.result" />

		<div v-if="item.lock||item.disable" class="info-sect">Locks:</div>
		<info v-if="item.lock" :info="item.lock" />
		<info v-if="item.disable" :info="item.disable" />

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