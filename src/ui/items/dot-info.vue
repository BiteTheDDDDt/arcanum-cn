<script>

import Range from '../../values/range';
import ItemsBase from '../itemsBase';
import InfoBlock from './info-block.vue';
/**
 * This is the dot InfoBlock in an info-popup, not the dotView in window.
 */
export default {

	props:['dot', 'title', 'item', 'target'],
	name:'dot',
	mixins:[ItemsBase],
	components:{
		gdata:() => import( /* webpackChunkName: "gdata-ui" */ './gdata.vue'),
		info:InfoBlock
	},
	computed:{

		damage(){

			let dmg = this.dot.damage || this.dot.dmg;
			if( typeof dmg === 'number') {
				return dmg;
			} else if ( dmg ) {

				if ( typeof dmg === 'object') {

					if ( dmg.toString == Object.prototype.toString ) {
						console.warn('raw dot object dmg');
						if ( dmg.min && dmg.max ) return dmg.min + '~' + dmg.max;
					}

				}
				return dmg.toString();

			}

		}

	}

}
</script>

<template>

<div class="dot">

	<div v-if="Array.isArray(dot)">
		<div v-for="dots in dot">		
			<div class="info-subsect" >Effect</div>
			<div v-if="dots.name"><span>Name: </span><span>{{dots.name.toString().toTitleCase()}}</span></div>
			<div v-if="dots.effect||dots.mod">
				<info v-if="dots.effect" :info="dots.effect" rate="true" />
				<info v-if="dots.mod" :info="dots.mod" :target="this.target" />
			</div>
			<div>
				<div v-if="dots.damage||dots.dmg">
					<span>Damage: </span><span>{{dots.damage}}</span></div>
				<div v-if="dots.kind"><span>Kind: </span><span>{{dots.kind.toString().toTitleCase()}}</span></div>
				<div v-if="dots.duration"><span>Duration: </span><span>{{ dots.duration  + "s" || 'infinity' }}</span></div>
			</div>
			<div>
				<div v-if="!dots.damage&&!dots.dmg&&!dots.effect&&!dots.mod">
					<div v-if="dots.id"><span>Id: </span><span>{{dots.id.toString().toTitleCase()}}</span></div>
				</div>
			</div>
		</div>
	</div>
	<div v-if="item.name&&dot.name">
		<div v-if="dot.name!==item.name"><span>Name: </span><span>{{dot.name.toString().toTitleCase()}}</span></div>
	</div>
	<div v-if="!item.name">
		<div v-if="dot.name"><span>Name: </span><span>{{dot.name.toString().toTitleCase()}}</span></div>
	</div>
	<div v-if="dot.effect||dot.mod">
		<info v-if="dot.effect" :info="dot.effect" rate="true" />
		<info v-if="dot.mod" :info="dot.mod" :target="this.target" />
	</div>

	<div v-if="title" class="note-text">{{ title }}:</div>

	<div>
		<div v-if="dot.damage||dot.dmg">
			<span>Damage: </span><span>{{damage}}</span></div>
		<div v-if="dot.kind"><span>Kind: </span><span>{{dot.kind.toString().toTitleCase()}}</span></div>
		<div v-if="dot.duration"><span>Duration: </span><span>{{ dot.duration  + "s" || 'infinity' }}</span></div>
	</div>

	<div>
		<div v-if="!dot.damage&&!dot.dmg&&!dot.effect&&!dot.mod">
			<div v-if="dot.id"><span>Id: </span><span>{{dot.id.toString().toTitleCase()}}</span></div>
		</div>
	</div>
	
</div>

</template>