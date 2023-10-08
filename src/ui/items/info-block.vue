<script>
import Game from '../../game';
import { applyParams, FP } from '../../values/consts';

import ItemsBase from '../itemsBase.js';
import { CheckTypes, InfoBlock, DisplayName, ConvertPath } from './infoBlock';
import { RollOver } from '../popups/itemPopup.vue';
import Char from '../../chars/char';

let attack;
let dot;
/** Regex to check if a string is a function. Note: does not process newlines, have to be removed manually. */
const FunctionRegex = /^function *\w+\( *(?<params>[^\)]+) *\) *{ *return +(?<body>.*)}$/;
/** Regex to check if a function's body matches the "one of" pattern. */
const OneOfRegex = /^\( *(?:(?:(?<! |\() *\|\| *)?(?:\+g\.(\w+)|g\.(\w+) *> *0)){2,} *\)$|^\( *(?:(?:(?<! |\() *\+ *)?g\.(\w+)){2,} *\)(?: *> *0)?$|^ *(?:(?:(?<!^| ) *\|\| *)?(?:\+g\.(\w+)|g\.(\w+) *> *0)){2,}$|^(?:(?:(?<!^| |\() *\+ *)?g\.(\w+)){2,}(?: *> *0)?$/;
/** Regex to identify gdata items that do not check for subproperties. */
const GdataIdRegex = /g\.(?<id>\w+)(?!\.)/g;

/**
 * Display for a sub-block of gdata, such as item.effect, item.result, item.run, etc.
 *
 * @property {boolean} rate - info items are 'rate' per-second items.
 * @property {boolean} checkType - enable unlock and cost checks.
 */
export default {
	props:['title', 'info', 'rate', 'checkType', 'target', 'require', 'separate'],
	mixins:[ItemsBase],
	components: {
		// dot: require("./dot-info.vue"),
		// attack: require("./attack.vue")
	},
	beforeCreate(){
		this.infos = new InfoBlock();
		this.player = Game.state.player;
		this.CheckTypes = CheckTypes;
		// janky code time. since the components cannot be set within the components property without causing a circular dependency,
		// requiring and setting the components in beforeCreate to avoid the error.
		if(!attack) attack = require("./attack.vue").default;
		if(!dot) dot = require("./dot-info.vue").default;
		this.$options.components.attack = attack;
		this.$options.components.dot = dot;
	},
	methods:{
		processItems() {
			this.subTitle = null;
			this.infos.clear();
			this.item = RollOver.item;
			this.items = this.effectItems( this.info, this.rate, this.checkType, this.target );
			return this.items != null && Object.keys(this.items).length;
		},

		/**
		 *
		 * @param {*} obj
		 * @param {boolean} rate - items represent /sec rates.
		 * @param {boolean} checkType - items check type.
		 */
		effectItems( obj, rate=false, checkType=null, target=null) {

			let type = typeof obj;
			let res;

			if ( type === 'number') {

				//@todo still happens. mostly for sell cost as gold.
				//console.warn('effect type is number: ' + obj) ;
				let ref = InfoBlock.GetItem("gold");
				this.infos.add( ref.name, obj, rate, checkType, ref );

			} else if ( type === 'string') {

				this.infos.add( DisplayName(obj), true, false, checkType, InfoBlock.GetItem( obj ) );

			} else if ( Array.isArray(obj) ) obj.forEach( v=>this.effectList(v, '', rate, checkType, null, target) );
			else if ( type === 'function' ) {
				//TODO other possible parsing for functions.
				if(!this.require) return;

				let res = FunctionRegex.exec(obj.toString().replaceAll("\n", ""));
				if(!res) return;

				let body = res.groups.body;
				if(!OneOfRegex.test(body)) return;

				this.subTitle = "One of";
				[...body.matchAll(GdataIdRegex)].forEach(match => {this.effectList(match.groups.id, '', rate, checkType, null, target)});

				/*if ( !obj.fText ){
					obj.fText = funcText( obj, Game );
					infos[obj.fText] = true;
				}*/

			}
			else if ( type === 'object') {
				if(this.separate) {
					// TODO separate out action, and parse it as its own thing, like attack and dot.
					let {attack, dot, ...eff} = obj;
					this.effectList( eff, '', rate, checkType, null, target );
					res = {attack, dot, eff: this.infos.results};
				} else {
					this.effectList( obj, '', rate, checkType, null, target );
				}

			}

			return res ?? {eff: this.infos.results};

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
					let params = {
						[FP.GAME]: Game.gdata,
						[FP.ACTOR]: RollOver.item instanceof Char ? RollOver.item : RollOver.source instanceof Char ? RollOver.source : this.player,
						[FP.TARGET]: this.player, //TODO have a dummy enemy parameter that isnt the player 
						[FP.CONTEXT]: this.player.context, //TODO replace context with target context once target is replaced.
						[FP.STATE]: Game.state
					};
					this.infos.add(subPath, applyParams(sub, params), subRate, subCheckType, subItem);
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

	<div v-if="info&&processItems()" class="info-block">

		<div v-if="title" class="note-text"><hr>{{ title }}</div>
		<div>
			<div v-if="subTitle" class="note-text">{{ subTitle }}</div>
			<div :class="subTitle ? 'info-subsubsect' : ''">
				<div v-for="v in items.eff" :key="v.name">
					<span :class="{failed: !v.isAvailable, full: checkType === CheckTypes.FULL}">
						{{ v.toString() }}
						<span v-if="!v.isAvailable && checkType === CheckTypes.FULL">(Full)</span>
					</span>

				</div>
				<div v-if="items.dot">
					<div class="info-sect">Applies:</div>
					<dot :dot="items.dot" :target="target" :item="item" />
				</div>
				<div v-if="items.attack">
					<div class="info-sect">Attack</div>
					<attack :item="item" :atk="items.attack" />
				</div>
			</div>
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