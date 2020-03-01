<script>
import ItemsBase from '../itemsBase.js';
import { SKILL } from '../../values/consts';
import { precise } from '../../util/format';
import Game from 'game';
import {ImportBlock, InfoBlock} from './infoBlock';

import {RollOver} from 'ui/popups/itemPopup.vue';

/**
* Name to use for object in current context.
*/
const DisplayName = ( obj ) => {

	let it = RollOver.context.getData(obj);
	return it ? it.name : obj;

},

/**
 * Convert item path display based on next subprop.
 * Certain properties indicate the display path should be treated specially,
 * such as switching the order of 'max' or omitting 'base' and 'value' display.
 */
var PathConversions = {

	effect:( rootPath )=>rootPath,
	skipLocked:()=>undefined,
	max:( rootPath )=>'max ' + rootPath,
	rate:(rootPath, subPath)=>{

		subPath = rootPath;

		let ind = rootPath.indexOf('.');
		if ( ind > 0 ) {

			let baseItem = RollOver.context.getData( rootPath.slice(0,ind) );
			if ( baseItem && baseItem.type === SKILL ) subPath = 'train ' + subPath + ' rate';

		}

		return subPath;
	}


};

PathConversions.mod = PathConversions.base = PathConversions.value = PathConversions.effect;

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
			let infos = new InfoBlock();

			if ( type === 'number') {

				//@todo these still happen.
				console.warn('effect type is number: ' + obj) ;
				infos.add( 'gold', obj, this.rate );

			} else if ( type === 'string') {

				infos.add( DisplayName(obj), true );

			} else if ( Array.isArray(obj) ) obj.forEach(v=>this.effectList(v,infos));
			else if ( type === 'function' ) {

				/*if ( !obj.fText ){
					obj.fText = funcText( obj, Game );
					infos[obj.fText] = true;
				}*/
				return undefined;

			}
			else if ( type === 'object') {

				this.effectList( obj, infos, '', rate );

			}

			return infos;

		},


		/**
		 * Convert display path based on current path object
		 * and current property being displayed.
		 * @returns {string} path displayed. returns undefined if no information
		 * should be displayed for this variable path.
		 */
		convertPath( rootPath, prop ){

			let func = PathConversions[prop];
			if ( func !== undefined ) {

				// use conversion function.
				return func( rootPath, prop );

			} else {

				// no conversion func.
				prop = DisplayName( prop );
				return rootPath ? rootPath + ' ' + prop : prop;

			}

		},

		/**
		 * @param {Object} obj - object of effects to enumerate.
		 * @param {Object} infos - [name/effect] pairs to display to user.
		 * @param {string} rootPath - prop path from base.
		 * @param {boolean} rate - whether display is per/s rate.
		 */
		effectList( obj, infos, rootPath='', rate=false ) {

			if ( typeof obj === 'string' ) {
				infos.add( DisplayName(obj), true, rate );
				return;
			}

			for( let p in obj ) {

				let sub = obj[p];
				if ( sub === null || sub === undefined ) {
					console.warn('Sub null: ' + rootPath + ': ' + p );
					continue;
				}

				let subRate = rate || p === 'rate';
				// displayed path to subitem.
				let subPath = this.convertPath( rootPath, p );

				// path conversion indicated no display.
				if ( subPath === undefined ) continue;

				if ( typeof sub !== 'object' ) infos.add(subPath, sub, subRate );
				else if ( typeof sub !== 'function ' ) {

					if ( sub.skipLocked ) {

						let refItem = RollOver.context.getData(p);
						if ( refItem && (refItem.locked || refItem.disabled) ) continue;

					}

					if ( sub.toString && (sub.toString !== Object.prototype.toString) ) {

						infos.add( subPath, sub.toString(), subRate );

					} else this.effectList( sub, infos, subPath, subRate );

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