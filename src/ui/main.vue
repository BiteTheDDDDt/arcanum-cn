<script>
import Game from '../game';
import Menu from './components/menu.vue';
import ResoucesView from './resources.vue';
import Upgrades from './upgrades.vue';
import Quickbar from './quickbar.vue';
import ItemsBase from './itemsBase';
import Warn from './components/warn.vue';
import Vitals from 'ui/vitals.vue';
import DotView from './dotView.vue';
import ItemPopup from './itemPopup.vue';
import TopBar from './top-bar.vue';
import SettingsUI from './settings.vue';


import LogView from './outlog.vue';

import Settings from '../settings';
import Cheats from '../cheats';

import { TRY_BUY, USE, TRY_USE } from '../events';
import { TICK_TIME } from '../game';

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
		upgrades:Upgrades,
		itempopup:ItemPopup,
		vitals:Vitals,
		log:LogView,
		quickbar:Quickbar,
		dots:DotView,
		warn:Warn,
		'top-bar':TopBar,
		settings:SettingsUI,
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

		return {
			state:null,
			overItem:null,
			overTitle:null,
			overElm:null,
			psection:null
		};

	},
	created(){

		/**
	 	* @property {Game} game
	 	*/
		this.game = Game;

		this.listen('game-loaded', this.gameLoaded );
		this.listen('setting', this.onSetting );

		this.listen('pause', this.pause );
		this.listen('unpause', this.unpause );


	},
	methods:{

		gameLoaded() {

			this.state = Game.state;
			this.section = this.state.sections.find( v=>v.id==='sect_main');

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

			if ( Settings.vars.autoSave && !this.saver ) {
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

			if ( this.game.loaded ) {

				if ( !this.runner ) {
					this.game.lastUpdate = Date.now();
					this.runner = setInterval( ()=>this.game.update(), TICK_TIME );
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

			 this.game.tryItem( it.getTarget( this.game ) );

		},

		onEquip( it, inv ) { this.game.equip( it,inv ); },

		onUnequip(slot, it){ this.game.unequip(slot, it) },

		onTake(it) { this.game.take(it); },

		onCraft(it) { this.game.craft(it); },

		/**
		 * Use instanced item.
		 */
		onUse(it) { this.game.use(it); },

		/**
		 * @param {Enchant} e - enchantment
		 * @param {Item} targ - enchant target.
		 */
		onEnchant( e, targ ) {
			this.game.tryUseOn( e, targ );
		},

		onSell( it, inv, count ) { this.game.trySell( it, inv, count ); },

		itemOver(evt, it, title) {
			this.overItem = it;
			this.overTitle = title;
			this.overElm = evt.currentTarget;
		},

		itemOut(){

			this.overElm = null;
			this.overItem = null;

		},

		onRest(){ this.game.toggleAction( this.state.restAction ); },

		onConfirmed(it) { this.game.tryItem(it); },

		tryUse( it ) { this.game.tryItem(it ) },

		/**
		 * Item clicked.
		 */
		onItem(item) {

			if ( item.warn ) this.$refs.warn.warn( item );
			else this.game.tryItem(item);

		},

		/**
		 * Buy a spell or item without casting/using the item or its mods.
		 * @property {Item} item - item to buy.
		 */
		onBuy(item) { this.game.tryBuy(item); }

	},
	computed:{

		section:{

			get(){
				return this.psection;
			},
			set(v){

				this.psection=v;
				Settings.save();

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
		<warn ref="warn" @confirmed="onConfirmed" />
		<settings />

		<div v-if="state" class="game-main">

		<resources :items="state.resources"/>

		<vue-menu class="game-mid" :items="menuItems" v-model="section">

		<template slot="sect_main">

		<div class="main-actions">
		<upgrades class="action-list" :items="state.actions.filter(v=>!v.perpetual&&!v.length)" />
		<upgrades class="action-list" :items="state.actions.filter(v=>v.perpetual||v.length>0)" />
		<upgrades class="upgrade-list" :items="state.upgrades" />
		<upgrades class="upgrade-list" :items="state.classes" />
		</div>

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

		<vitals :player="state.player" :state="state" />

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


div.bot-bar {
	background: inherit;
	border-top: 1px solid var(--separator-color); padding: var(--large-gap);
}

</style>