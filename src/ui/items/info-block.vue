<script>
import Game from '../../game';
import { FP, getParams } from '../../values/consts';

import ItemsBase from '../itemsBase.js';
import { InfoBlock, DisplayName, ConvertPath } from './infoBlock';

/**
 * Display for a sub-block of gdata, such as item.effect, item.result, item.run, etc.
 *
 * @property {boolean} rate - info items are 'rate' per-second items.
 */
export default {
	props:['title', 'info', 'rate', 'target'],
	mixins:[ItemsBase],
	beforeCreate(){
		this.infos = new InfoBlock();
		this.player = Game.state.player;
	},
	computed:{
		effects(){

			this.infos.clear();
			return this.effectItems( this.info, this.rate, this.target );

		}

	},
	methods:{
		getParams: getParams,

		/**
		 *
		 * @param {*} obj
		 * @param {boolean} rate - items represent /sec rates.
		 */
		effectItems( obj, rate=false, target=null) {

			let type = typeof obj;

			if ( type === 'number') {

				//@todo still happens. mostly for sell cost as gold.
				//console.warn('effect type is number: ' + obj) ;
				this.infos.add( 'gold', obj, this.rate );

			} else if ( type === 'string') {

				this.infos.add( DisplayName(obj), true, false, InfoBlock.GetItem( obj ) );

			} else if ( Array.isArray(obj) ) obj.forEach( v=>this.effectList(v) );
			else if ( type === 'function' ) {

				/*if ( !obj.fText ){
					obj.fText = funcText( obj, Game );
					infos[obj.fText] = true;
				}*/
				return undefined;

			}
			else if ( type === 'object') {

				this.effectList( obj, '', rate, null, target );

			}

			return this.infos.results;

		},

		/**
		 * @param {Object} obj - object of effects to enumerate.
		 * @param {string} rootPath - prop path from base.
		 * @param {boolean} rate - whether display is per/s rate.
		 */
		effectList( obj, rootPath='', rate=false, refItem=null, target=null ) {

			if ( typeof obj === 'string' ) {
				this.infos.add( DisplayName(obj), true, rate, InfoBlock.GetItem(obj, refItem) );
				return;
			}

			for( let p in obj ) {

				let sub = obj[p];
				if ( sub === null || sub === undefined || p === 'skipLocked' ) {
					continue;
				}

				let subItem = InfoBlock.GetItem( p, refItem );

				let subRate = rate;
				// displayed path to subitem.
				let subPath = ConvertPath( rootPath, ( p === "self" && target ) || p );

				// path conversion indicated no display.
				if ( subPath === undefined ) continue;

				if ( sub instanceof Function ) {
					let params = this.getParams(sub).map(param => {
						switch(param) {
							case FP.GAME: return Game.gdata;
							case FP.ACTOR: return this.player;
							case FP.TARGET: return this.player; //TODO have a dummy enemy parameter that isnt the player 
							case FP.CONTEXT: return this.player.context; //TODO replace context with target context once target is replaced.
							case FP.STATE: return Game.state;
						}
					})
					this.infos.add(subPath, sub(...params), subRate, subItem);
				} else if ( sub instanceof Object ) {

					if ( sub.skipLocked ) {

						let refItem = this.infos.rootItem;
						if ( refItem && (refItem.locked || refItem.disabled) ) continue;

					}
					if ( sub.constructor !== Object && sub.constructor.name !== 'Attack' ) {
						this.infos.add(subPath, sub, subRate, subItem);
					} else if ( sub.constructor.name !== 'Attack' ){
						
						//special code for DOT subpath, currently unique to potions
						if(subPath === 'dot') {
							sub = {...sub}
							if(sub.id) delete sub.id;
							if(sub.name) delete sub.name;
							if(sub[undefined]) delete sub[undefined];
						}
						this.effectList( sub, subPath, subRate, subItem );
					
					}
				} else {
					this.infos.add(subPath, sub, subRate, subItem );
				}
			}
		}
	}
}
</script>


<template>

	<div v-if="info&&effects">

		<div v-if="title" class="note-text"><hr>{{ title }}</div>
		<div v-for="v in effects" :key="v.name">
      <span>{{ v.toString() }}</span>
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