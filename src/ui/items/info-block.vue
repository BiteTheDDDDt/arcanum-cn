<script>
import ItemsBase from '../itemsBase.js';
import { SKILL } from '../../values/consts';
import { precise } from '../../util/format';
import Game from 'game';

/**
 * Display for a sub-block of gdata, such as item.effect, item.result, item.run, etc.
 *
 * @property {boolean} rate - info items are 'rate' per-second items.
 */
export default {
	props:['title', 'info', 'rate'],
	mixins:[ItemsBase],
	computed:{
		effects(){
			return this.effectItems( this.info, this.rate );
		}

	},
	methods:{
		/**
		 *
		 * @param {*} obj
		 * @param {boolean} rate - items represent /sec rates.
		 */
		effectItems( obj, rate=false) {

			let type = typeof obj;
			let results = {};

			if ( type === 'number') {
				//@todo these still happen.
				//console.warn('effect type is number: ' + obj) ;
				results.gold = obj;

			} else if ( type === 'string') {

				let it = Game.getData(obj);
				results[ it ? it.name : this.stripTags(obj) ] = true;

			} else if ( Array.isArray(obj) ) obj.forEach(v=>this.effectList(v,results));
			else if ( type === 'function' ) {

				/*if ( !obj.fText ){
					obj.fText = funcText( obj, Game );
					results[obj.fText] = true;
				} else {
					results[obj.fText] = true;
				}*/
				return undefined;

			}
			else if ( type === 'object') {

				this.effectList( obj, results, '', rate );

			}

			return results;

		},

		/**
		 * @param {Object} obj - object of effects to enumerate.
		 * @param {Object} results - [name/effect] pairs to display to user.
		 * @param {string} propPath - prop path from base.
		 * @param {boolean} rate - whether display is per/s rate.
		 */
		effectList( obj, results={}, propPath='', rate=false ) {

			if ( typeof obj === 'string' ) {

				let it = Game.getData(obj);
				results[ it ? it.name : this.stripTags(obj) ] = true;
				return;
			}

			for( let p in obj ) {

				// displayed path to subitem.
				var subPath = p;
				var sub = obj[p];
				var subRate = rate;

				if ( sub === null || sub === undefined ) {

					console.warn('Sub null: ' + propPath + ': ' + p );
					continue;
				} else if ( p === 'skipLocked') continue;
				else if ( p === 'mod' || p === 'effect') subPath = propPath;
				else if ( p === 'max' ) {

					subPath = 'max ' + propPath;

				} else if ( p==='base' || p === 'value') subPath = propPath;
				else if ( p === 'rate') {

					subPath = propPath;
					subRate = true;

					let baseItem = Game.getData( propPath.split('.')[0] );
					if ( baseItem && baseItem.type === SKILL ) subPath = 'train ' + subPath + ' rate';

				} else {

					// check if sub-prop refers to an item.
					let refItem = Game.getData(p);
					if ( refItem ) subPath = refItem.name;
					else subPath = this.stripTags( p );

					subPath = propPath ? propPath + ' ' + subPath : subPath;

				}

				if ( typeof sub !== 'object' ) results[subPath] = precise(sub) + ( subRate ? '/s' : '');
				else if ( typeof sub === 'function' ) {}
				else {

					if ( sub.skipLocked ) {

						let refItem = Game.getData(p);
						if ( refItem && (refItem.locked || refItem.disabled) ) continue;

					}

					if ( sub.toString && (sub.toString !== Object.prototype.toString) ) {

						results[subPath] = sub.toString() + ( subRate ? '/s' : '');

					} else this.effectList( sub, results, subPath, subRate );

				}

			}

		}
	}
}
</script>


<template>

	<div v-if="info&&effects">

		<div v-if="title" class="note-text"><hr>{{ title }}</div>
		<div v-for="(v,k) in effects" :key="k">
			<span v-if="typeof v === 'boolean'">{{ k }}</span>
			<span v-else-if="typeof v ==='number'">{{ `${k}: ${v}` }}</span>
				<span v-else>{{ `${k}: ${v}` }}</span>
		</div>


	</div>


</template>


<style scoped>

hr {
	margin-bottom: var(--sm-gap);
}

div.item-desc {
	margin: 0.6em 0 0.9em;
	font-size: 0.96em;
}

.item-name {
	font-weight: bold;
}
.flavor {
	font-style: italic;
}

</style>