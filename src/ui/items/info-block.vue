<script>
import Game from '../../game';
import { FP, getParams } from '../../values/consts';

import ItemsBase from '../itemsBase.js';
import { CheckTypes, InfoBlock, DisplayName, ConvertPath } from './infoBlock';

/**
 * Display for a sub-block of gdata, such as item.effect, item.result, item.run, etc.
 *
 * @property {boolean} rate - info items are 'rate' per-second items.
 * @property {boolean} checkType - enable unlock and cost checks.
 */
export default {
	props:['title', 'info', 'rate', 'checkType', 'target'],
	mixins:[ItemsBase],
	beforeCreate(){
		this.infos = new InfoBlock();
		this.player = Game.state.player;
		this.CheckTypes = CheckTypes;
	},
	computed:{
		effects(){

			this.infos.clear();
			return this.effectItems( this.info, this.rate, this.checkType, this.target );

		}

	},
	methods:{
		getParams: getParams,

		/**
		 *
		 * @param {*} obj
		 * @param {boolean} rate - items represent /sec rates.
		 * @param {boolean} checkType - items check type.
		 */
		effectItems( obj, rate=false, checkType=null, target=null) {

			let type = typeof obj;

			if ( type === 'number') {

				//@todo still happens. mostly for sell cost as gold.
				//console.warn('effect type is number: ' + obj) ;
				let ref = InfoBlock.GetItem("gold");
				this.infos.add( ref.name, obj, rate, checkType, ref );

			} else if ( type === 'string') {

				this.infos.add( DisplayName(obj), true, false, checkType, InfoBlock.GetItem( obj ) );

			} else if ( Array.isArray(obj) ) obj.forEach( v=>this.effectList(v, '', rate, checkType, null, target) );
			else if ( type === 'function' ) {

				/*if ( !obj.fText ){
					obj.fText = funcText( obj, Game );
					infos[obj.fText] = true;
				}*/
				return undefined;

			}
			else if ( type === 'object') {

				this.effectList( obj, '', rate, checkType, null, target );

			}

			return this.infos.results;

		},

		/**
		 * @param {Object} obj - object of effects to enumerate.
		 * @param {string} rootPath - prop path from base.
		 * @param {boolean} rate - whether display is per/s rate.
		 * @param {boolean} checkType - type of check to use for checking availability.
		 */
		effectList( obj, rootPath='', rate=false, checkType=null, refItem=null, target=null ) {

			if ( typeof obj === 'string' ) {
				this.infos.add( DisplayName(obj), true, rate, checkType, InfoBlock.GetItem(obj, refItem) );
				return;
			}

			for( let p in obj ) {

				let sub = obj[p];
				if ( sub === null || sub === undefined || p === 'skipLocked' ) {
					continue;
				}

				let subItem = InfoBlock.GetItem( p, refItem );

				let subRate = rate;
				let subCheckType = checkType;
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
					this.infos.add(subPath, sub(...params), subRate, subCheckType, subItem);
				} else if ( sub instanceof Object ) {

					if ( sub.skipLocked ) {

						let refItem = this.infos.rootItem;
						if ( refItem && (refItem.locked || refItem.disabled) ) continue;

					}
					if ( sub.constructor !== Object && sub.constructor.name !== 'Attack' ) {
						this.infos.add(subPath, sub, subRate, subCheckType, subItem);
					} else if ( sub.constructor.name !== 'Attack' ){
						
						//special code for DOT subpath, currently unique to potions
						if(subPath === 'dot') {
							sub = {...sub}
							if(sub.id) delete sub.id;
							if(sub.name) delete sub.name;
							if(sub.tags) {
								sub.tags = sub.tags.split(",").map(t => {
									let tag = Game.state.tagSets[t];
									return tag ? tag.name : t;
								});
							}
							if(sub[undefined]) delete sub[undefined];
						}
						this.effectList( sub, subPath, subRate, subCheckType, subItem, target );
					
					}
				} else {
					this.infos.add(subPath, sub, subRate, subCheckType, subItem );
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
      		<span :class="{failed: !v.isAvailable, full: checkType === CheckTypes.FULL}">
				{{ v.toString() }}
				<span v-if="!v.isAvailable && checkType === CheckTypes.FULL">(Full)</span>
			</span>
			
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
.failed {
	color: red;
}
.failed.full {
	color: slategrey;
}
.darkmode .failed.full {
	color: #505050;
}
</style>