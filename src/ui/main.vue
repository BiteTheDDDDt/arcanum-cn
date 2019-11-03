<script>
import Game from '../game';
import Menu from './components/menu.vue';
import ResoucesView from './resources.vue';
import Actions from './sections/actions.vue';
import Quickbar from './quickbar.vue';
import ItemsBase from './itemsBase';
import Warn from './components/warn.vue';
import Vitals from 'ui/vitals.vue';
import DotView from './dotView.vue';
import ItemPopup from './items/itemPopup.vue';
import TopBar from './top-bar.vue';
import SettingsUI from './sections/settings.vue';

import LogView from './outlog.vue';

import Settings from 'modules/settings';
import Cheats from '../modules/cheats';

import { TRY_BUY, USE, TRY_USE } from '../events';
import { TICK_TIME } from '../game';
import profile from '../modules/profile';

/**
 * @var {number} SAVE_TIME  - time in seconds between auto-saves.
 */
const SAVE_TIME = 30;

/**
 * @listens [sell,itemover,itemout]
 */
export default {

	//mixins:__DIST ? [ItemsBase] : [ItemsBase,Cheats],\
	mixins:[ItemsBase,Cheats],
	components:{
		resources:ResoucesView,
		actions:Actions,
		itempopup:ItemPopup,
		vitals:Vitals,
		log:LogView,
		quickbar:Quickbar,
		dots:DotView,
		warn:Warn,
		'top-bar':TopBar,
		settings:SettingsUI,
		choice:()=>import( /* webpackChunkName: "choice-ui" */ './components/choice.vue' ),
		skills:()=> import( /* webpackChunkName: "skills-ui" */ './sections/skills.vue' ),
		equip:()=>import( /* webpackChunkName: "equip-ui" */ './sections/equip.vue'),
		inventory:()=> import( /* webpackChunkName: "inv-ui" */ './sections/inventory.vue' ),
		potions:()=> import( /* webpackChunkName: "potions-ui" */ './sections/potions.vue'),
		homes:()=>import( /* webpackChunkName: "homes-ui" */ './homes.vue'),
		player:()=>import( /* webpackChunkName: "player-ui" */'./player.vue'),
		bestiary:()=>import(/* webpackChunkName: "bestiary-ui" */ './sections/bestiary.vue' ),
		spells:()=>import( /* webpackChunkName: "spells-ui" */ './sections/spells.vue'),
		adventure:()=>import( /* webpackChunkName: "raid-ui" */ './sections/adventure.vue'),
		enchanting:()=>import( /* webpackChunkName: "enchant-ui" */'./sections/enchanting.vue' ),
		minions:()=>import( /* webpackChunkName: "minions-ui" */ './sections/minions.vue' ),
		scraft:()=>import( /* webpackChunkName: "scraft-ui" */ './sections/scraft.vue' ),
		'vue-menu':Menu
	},
	data(){

		/**
		 *
		 */
		return {
			state:null,
			overItem:null,
			overTitle:null,
			overElm:null,
			psection:null,
			warnItem:null
		};

	},
	created(){

		this.listen('game-loaded', this.gameLoaded );
		this.listen('setting', this.onSetting );

		this.listen('pause', this.pause );
		this.listen('unpause', this.unpause );


	},
	beforeDestroy(){

		this.removeListener('game-loaded', this.gameLoaded );
		this.removeListener('setting', this.onSetting );
		this.removeListener('pause', this.pause );
		this.removeListener('unpause', this.unpause );

	},
	methods:{

		gameLoaded() {

			this.state = Game.state;

			let curview = Settings.get('curview') || 'sect_main';
			console.warn('VIEW CHANGE: ' +  curview );


			this.section = this.state.sections.find( v=>v.id===curview );

			this.initEvents();

		},

		/**
		 * Listen non-system events.
		 */
		initEvents() {

			this.add( 'itemover', this.itemOver );
			this.add( 'itemout', this.itemOut );

			this.add( 'sell', this.onSell );
			this.add( 'take', this.onTake );

			this.add( 'upgrade', this.onItem );
			this.add( 'action', this.onItem );
			this.add( 'spell', this.onItem );

			this.add( 'rest', this.onRest );

			this.add('equip', this.onEquip );
			this.add('unequip', this.onUnequip );
			this.add('enchant', this.onEnchant );
			this.add('craft', this.onCraft );

			this.add( TRY_USE, this.tryUse )
			this.add( USE, this.onUse );

			this.add('quickslot', this.doQuickslot);

			this.add( TRY_BUY, this.onBuy );

		},

		onSetting( setting, val ) {

			if ( setting === 'autoSave' ) {
				if ( val ) this.startAutoSave();
				else this.stopAutoSave();
			}

		},

		stopAutoSave() {
			if ( this.saver ) {
				//console.log('STOP AUTOSAVE');
				let int = this.saver;
				this.saver = null;
				clearInterval( int );
			}
		},

		startAutoSave() {

			if (!this.runner ) return;

			if ( Settings.get('autoSave') && !this.saver ) {
				//console.log('START AUTOSAVE');
				this.saver = setInterval( ()=>this.dispatch('autosave'), 1000*SAVE_TIME );
			}

		},

		pause() {

			if ( this.runner ) {
				let int = this.runner;
				this.runner = null;
				clearInterval( int );
			}
			this.stopAutoSave();

			if ( this.keyListen ) window.removeEventListener('keydown', this.keyListen, false );


		},
		unpause() {

			if ( Game.loaded ) {

				Game.lastUpdate = Date.now();
				if ( !this.runner ) {
					this.runner = setInterval( ()=>Game.update(), TICK_TIME );
				}

				this.keyListen = evt=>{
				if ( evt.repeat) return;
				this.keyDown( evt ); evt.stopPropagation(); }

				window.addEventListener('keydown', this.keyListen, false );
				this.startAutoSave();

			}


		},

		keyDown( e ){

			if ( !this.runner ) return;

			let slice = e.code.slice(0,-1);
			if ( slice === 'Digit' || slice === 'Numpad' ) {

				let num = Number( e.code.slice(-1) );
				//console.log('number: ' + num );

				if ( e.shiftKey && this.overItem ) this.state.setQuickSlot( this.overItem, num );
				else {
					let it = this.state.getQuickSlot(num);
					if ( it) this.doQuickslot(it);
				}

			}

		},

		doQuickslot(it) {

			 Game.tryItem( it.getTarget( Game ) );

		},

		onEquip( it, inv ) { Game.equip( it,inv ); },

		onUnequip(slot, it){ Game.unequip(slot, it) },

		onTake(it) { Game.take(it); },

		onCraft(it) { Game.craft(it); },

		/**
		 * Use instanced item.
		 */
		onUse(it) { Game.use(it); },

		/**
		 * @param {Enchant} e - enchantment
		 * @param {Item} targ - enchant target.
		 */
		onEnchant( e, targ ) {
			Game.tryUseOn( e, targ );
		},

		onSell( it, inv, count ) { Game.trySell( it, inv, count ); },

		itemOver(evt, it, title) {
			this.overItem = it;
			this.overTitle = title;
			this.overElm = evt.currentTarget;
		},

		itemOut(){

			this.overElm = null;
			this.overItem = null;

		},

		onRest(){Game.toggleAction( this.state.restAction ); },

		onConfirmed(it) {
			this.warnItem = null;
			Game.tryItem(it);
		},

		tryUse( it ) { Game.tryItem(it ) },

		/**
		 * Warning should trigger.
		 * @param {string} msg - warning message
		 * @param {{boolean})=>{null}} res - resolver to call with result.
		 */
		onWarn( msg, res ) {
		},

		/**
		 * Item clicked.
		 */
		onItem(item) {

			if ( item.warn ) {

				this.warnItem = item;
				//this.$refs.warn.warn( item );

			} else Game.tryItem(item);

		},

		/**
		 * Buy a spell or item without casting/using the item or its mods.
		 * @property {Item} item - item to buy.
		 */
		onBuy(item) { Game.tryBuy( item, true ); }

	},
	computed:{

		section:{

			get(){ return this.psection; },
			set(v){

				this.psection=v;
				Settings.set('curview', v.id );
			}
		},
		menuItems(){ return this.state.sections.filter( it=>!this.locked(it) ); }

	}

}
</script>

<template>

	<div class="full" @mouseover.capture.stop="emit('itemout')">

		<top-bar>
			<template slot="center">
			<span class="load-message" v-if="!state">LOADING DATA...</span>
			<dots v-if="state" :dots="state.player.dots" />
			</template>
		</top-bar>

<!-- popups -->
		<itempopup :item="overItem" :elm="overElm" :title="overTitle" />
		<warn :item="warnItem" @confirmed="onConfirmed" @cancel="warnItem=null" />
		<choice />
		<settings />

		<div v-if="state" class="game-main">

		<resources :items="state.resources"/>

		<vue-menu class="game-mid" :items="menuItems" v-model="section">

		<template slot="sect_main">
		<actions class="main-actions" />
		</template>

		<template slot="sect_skills"><skills :state="state"></skills></template>

		<template slot="sect_player"><player /></template>

		<template slot="sect_house"><homes :state="state" /></template>

		<template slot="sect_raid"><adventure :state="state" /></template>

		<template slot="sect_equip">

			<div class="inv-equip">
				<equip :equip="state.equip" />
				<inventory :inv="state.inventory" />
			</div>

		</template>

		<template slot="sect_spells"><spells /></template>
		<template slot="sect_scraft"><scraft /></template>

		<template slot="sect_potions"><potions /></template>

		<template slot="sect_bestiary"><bestiary /></template>
		<template slot="sect_minions"><minions /></template>

		<template slot="sect_enchant"><enchanting /></template>
		</vue-menu>

		<vitals :state="state" />

		<log />

		</div>

		<div v-if="state" class="bot-bar"><quickbar :bars="state.bars" /></div>

	</div>
</template>

<style scoped>

div.full {
	display:flex;
	background:inherit;
	flex-direction: column;
	min-width:500px;
	max-height:100vh;
	height:100vh;
	margin: 0px 8px;
}

div.game-main {
	display:flex;
	max-height: calc( 100vh - 150px);
	flex-direction: row;
	flex-grow: 1;
	justify-content: space-between;
}

div.game-mid {
	display:flex;
	flex-flow: column nowrap;
	border-left: 1px solid var(--separator-color); border-right: 1px solid var(--separator-color);
	max-height: 100%;
	height:100%;
	flex-basis:48%;
	flex-grow:1;
	align-content: space-around;
}

div.game-mid div.main-actions {
	overflow-y: auto;
	height:100%;
}

div.action-list, div.upgrade-list {
	display:flex;
	min-height:0;
	flex-flow: row wrap;
	flex-direction: row;
	padding:0px 6px;
	text-transform: capitalize;
}

div.action-list {
	justify-items: flex-start;
}

div.upgrade-list, div.action-list {
	margin: 8px 2px 2px 8px;
}

div.upgrade-list {
	min-height:0;
	/*border-top: 1px solid var( --separator-color );*/
	margin-top:4px;
}

div.inv-equip {
	height:100%;
	padding: 0; display: grid; grid-template-rows: 50% 50%; grid-auto-columns: 1fr;
}

div.inv-equip > div:nth-child(2) {
        border-top: 1px solid var(--separator-color);
	}

div.bot-bar {
	background: inherit;
	border-top: 1px solid var(--separator-color); padding: var(--md-gap);
}

</style>