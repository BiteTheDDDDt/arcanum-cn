<script>
import ItemsBase from '../itemsBase.js';
import { InfoBlock, DisplayName, ConvertPath } from './infoBlock';

/**
 * Display for a sub-block of gdata, such as item.effect, item.result, item.run, etc.
 *
 * @property {boolean} rate - info items are 'rate' per-second items.
 */
export default {
	props:['title', 'info', 'rate'],
	mixins:[ItemsBase],
	beforeCreate(){
		this.infos = new InfoBlock();
	},
	computed:{
		effects(){

			this.infos.clear();
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

			if ( type === 'number') {

				//@todo still happens. mostly for sell cost as gold.
				//console.warn('effect type is number: ' + obj) ;
				this.infos.add( 'gold', obj, this.rate );

			} else if ( type === 'string') {

				this.infos.add( DisplayName(obj), true );

			} else if ( Array.isArray(obj) ) obj.forEach( v=>this.effectList(v) );
			else if ( type === 'function' ) {

				/*if ( !obj.fText ){
					obj.fText = funcText( obj, Game );
					infos[obj.fText] = true;
				}*/
				return undefined;

			}
			else if ( type === 'object') {

				this.effectList( obj, '', rate );

			}

			return this.infos.results;

		},

		/**
		 * @param {Object} obj - object of effects to enumerate.
		 * @param {string} rootPath - prop path from base.
		 * @param {boolean} rate - whether display is per/s rate.
		 */
		effectList( obj, rootPath='', rate=false ) {

			if ( typeof obj === 'string' ) {
				this.infos.add( DisplayName(obj), true, rate );
				return;
			}

			for( let p in obj ) {

				let sub = obj[p];
				if ( sub === null || sub === undefined ) {
					console.warn('null: ' + rootPath + ': ' + p );
					continue;
				}

				this.infos.setPathRoot(p);

				let subRate = rate || p === 'rate';
				// displayed path to subitem.
				let subPath = ConvertPath( rootPath, p );

				// path conversion indicated no display.
				if ( subPath === undefined ) continue;

				if ( typeof sub !== 'object' ) this.infos.add(subPath, sub, subRate );
				else if ( typeof sub !== 'function ' ) {

					if ( sub.skipLocked ) {

						let refItem = this.infos.rootItem;
						if ( refItem && (refItem.locked || refItem.disabled) ) continue;

					}
					if ( sub.constructor !== Object ) {

						this.infos.add( subPath, sub, subRate );

					} else this.effectList( sub, subPath, subRate );

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