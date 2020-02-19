<script>

import Range from '../../values/range';
import ItemsBase from '../itemsBase';

import InfoBlock from './info-block.vue';
/**
 * This is the popup rollOver dot item, as opposed to the Dot view in window.
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

	<div class="note-text">{{ title || 'dot'}}:</div>
	<div>
		<div><span>duration: </span><span>{{ dot.duration || 'infinity' }}</span></div>
		<div v-if="dot.damage||dot.dmg"><span>damage: </span><span>{{damage}}</span></div>
		<div v-if="dot.kind"><span>kind: </span><span>{{dot.kind}}</span></div>
	</div>

			<div v-if="dot.effect||dot.mod">

			<div v-if="dot.effect||dot.mod" class="note-text">effects:</div>
			<info v-if="dot.effect" :info="dot.effect" rate="true" />
			<info v-if="dot.mod" :info="dot.mod" />


		</div>

</div>

</template>