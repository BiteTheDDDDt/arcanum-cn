<script>

import Range from '../../values/range';
import ItemsBase from '../itemsBase';

import InfoBlock from './info-block.vue';
/**
 * This is the dot InfoBlock in an info-popup, not the dotView in window.
 */
export default {

	props:['dot', 'title'],
	name:'dot',
	mixins:[ItemsBase],
	components:{
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

	<div v-if="dot.effect||dot.mod">
		<info v-if="dot.effect" :info="dot.effect" rate="true" />
		<info v-if="dot.mod" :info="dot.mod" />
	</div>

	<div v-if="title" class="note-text">{{ title }}:</div>

	<div>
		<div v-if="dot.damage||dot.dmg">
			<span>Damage: </span><span>{{damage}}</span></div>
		<div v-if="dot.kind"><span>Kind: </span><span>{{dot.kind.toString().toTitleCase()}}</span></div>
		<div><span>Duration: </span><span>{{ dot.duration  + "s" || 'infinity' }}</span></div>
	</div>

</div>

</template>