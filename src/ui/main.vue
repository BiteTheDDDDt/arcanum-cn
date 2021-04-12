<script>
import Profile from 'modules/profile';
import Game from 'game';
import Menu from './components/menu.vue';
import ResoucesView from './panes/resources.vue';
import Tasks from './sections/tasks.vue';
import Quickbar from './quickbar.vue';
import ItemsBase from './itemsBase';
import Vitals from './panes/vitals.vue';
import DotView from './items/dotView.vue';
import TopBar from './top-bar.vue';

import Warn from 'ui/popups/warn.vue';
import ItemPopup, { RollOver, ItemOut } from './popups/itemPopup.vue';
import SettingsUI from './popups/settings.vue';

import LogView from './outlog.vue';

import Settings from 'modules/settings';
import Cheats from 'debug/cheats';
import DevConsole from 'debug/devconsole.vue';

import { TRY_BUY, USE, TRY_USE, EVT_STAT } from '../events';
import { TICK_TIME } from '../game';
import { TASK } from '../values/consts';
import Task from '../items/task';

/**
 * @const {number} SAVE_TIME  - time in seconds between auto-saves.
 */
const SAVE_TIME = 30;

/**
 * @listens [sell]
 */
export default {

	//mixins:__DIST ? [ItemsBase] : [ItemsBase,Cheats],\
	mixins:[ItemsBase,Cheats],
	components:{
		devconsole:DevConsole,
		resources:ResoucesView,
		tasks:Tasks,
		itempopup:ItemPopup,
		vitals:Vitals,
		log:LogView,
		quickbar:Quickbar,
		dots:DotView,
		warn:Warn,
		topbar:TopBar,
		settings:SettingsUI,
		login:()=>import( /* webpackChunkName: "remote" */ './popups/login.vue' ),
		register:()=>import( /* webpackChunkName: "remote" */ './components/register.vue' ),
		activities:()=>import( /* webpackChunkName: "popups-ui" */ './popups/activities.vue' ),
		choice:()=>import( /* webpackChunkName: "popups-ui" */ './popups/choice.vue' ),

		skills:()=> import( /* webpackChunkName: "skills-ui" */ './sections/skills.vue' ),
		equip:()=>import( /* webpackChunkName: "equip-ui" */ './sections/equip.vue'),
		inventory:()=> import( /* webpackChunkName: "inv-ui" */ './sections/inventory.vue' ),
		potions:()=> import( /* webpackChunkName: "potions-ui" */ './sections/potions.vue'),
		home:()=>import( /* webpackChunkName: "home-ui" */ './sections/home.vue'),
		player:()=>import( /* webpackChunkName: "player-ui" */'./sections/player.vue'),
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
			psection:null,
			togRegister:false,
			showLogin:false,
			togSettings:false,
			/** toggle activity manager */
			togActivities:false
		};

	},

	beforeCreate(){

		/**
		 * @property {number} loopId - interval id for game loop.
		 */
		this.loopId = 0;
		/**
		 * @property {number} repeaterId - interval id for auto-repeating click.
		 */
		this.repeaterId = 0;

		/**
		 * @property {(evt)=>null} repeatEndFunc - mouseup func to end repeater.
		 */
		this.repeatEndFunc = null;

	},

	created(){

		this.Profile = Profile;

		this.listen('game-loaded', this.gameLoaded );
		this.listen('setting', this.onSetting );

		this.listen('pause', this.pause );
		this.listen('unpause', this.unpause );

		this.listen('show-register', this.onShowRegister, this);
		this.listen('show-login', this.onShowLogin, this);


	},
	beforeDestroy(){

		ItemOut();
		this.endRepeater();

		this.removeListener('game-loaded', this.gameLoaded );
		this.removeListener('setting', this.onSetting );
		this.removeListener('pause', this.pause );
		this.removeListener('unpause', this.unpause );

		this.removeListener( 'show-register', this.onShowRegister );
		this.removeListener( 'show-login', this.onShowLogin );

	},
	methods:{

		gameLoaded() {

			this.state = Game.state;

			let curview = Settings.get('curview') || 'sect_main';
			//console.warn('VIEW CHANGE: ' +  curview );
			this.section = this.state.sections.find( v=>v.id===curview );

			this.initEvents();

		},

		/**
		 * Listen non-system events.
		 */
		initEvents() {

			this.add( 'sell', this.onSell );
			this.add( 'take', this.onTake );

			this.add( 'upgrade', this.onItem );
			this.add( TASK, this.onItem );
			this.add( 'spell', this.onItem );

			this.add('equip', this.onEquip );
			this.add('unequip', this.onUnequip );
			this.add('enchant', this.onEnchant );
			this.add('craft', this.onCraft );
			// display warn dialog.
			this.add('warn', this.onWarn );

			this.add('showActivities', ()=>{this.togActivities=true} )

			this.add('repeater', this.makeRepeater, this );
			this.add('endrepeater', this.endRepeater, this );

			this.add( TRY_USE, this.tryUse )
			this.add( USE, this.onUse );

			this.add('quickslot', this.doQuickslot);

			this.add( TRY_BUY, this.onBuy );

			// dispatch start stats.
			this.dispatch( EVT_STAT, 'titles', this.state.player.titles.length );
			this.dispatch( EVT_STAT, 'level', this.state.getData('level').valueOf() );
			this.dispatch( EVT_STAT, 'prestige', this.state.getData('prestige').valueOf() );

		},

		onSetting( setting, val ) {

			if ( setting === 'autosave' ) {
				if ( val ) this.startAutoSave();
				else this.stopAutoSave();
			}

		},

		onShowLogin(){this.showLogin=true;},
		onShowRegister(){this.togRegister=true;},

		stopAutoSave() {
			if ( this.saver ) {
				//console.log('STOP AUTOSAVE');
				let int = this.saver;
				this.saver = null;
				clearInterval( int );
			}
		},

		startAutoSave() {

			if (!this.loopId ) return;
			var s = Settings;
				var setting = s.get('autosave');

			//if ( setting && !this.saver ) { //renabled autosaver regardless
			if (!this.saver ) {
				//console.log('START AUTOSAVE');
				this.saver = setInterval( ()=>this.dispatch('autosave'), 1000*SAVE_TIME );
			}

		},

		pause() {

			if ( this.loopId ) {
				let int = this.loopId;
				this.loopId = 0;
				clearInterval( int );
			}
			this.stopAutoSave();
			this.endRepeater();

			if ( this.keyListen ) window.removeEventListener('keydown', this.keyListen, false );


		},


		/**
		 * Item repeats until released.
		 * @param {GData} it - item being used.
		 */
		makeRepeater( it ){

			if ( this.repeaterId ) {
				clearInterval(this.repeaterId );
				this.repeaterId = 0;
			}
			this.repeaterId = setInterval( (t)=>Game.tryItem(t), 50, it );

			if ( !this.repeatEndFunc ) this.repeatEndFunc = ()=>this.endRepeater();
			document.addEventListener( 'mouseup', this.repeatEndFunc );

		},

		/**
		 * Cancel active repeater.
		 */
		endRepeater(){

			if ( this.repeaterId ) {
				clearInterval(this.repeaterId );
				this.repeaterId=0;
			}
			if ( this.repeatEndFunc ) {
				document.removeEventListener( 'mouseup', this.repeatEndFunc );
				this.repeatEndFunc = null;
			}

		},

		unpause() {

			if ( Game.loaded ) {

				Game.lastUpdate = Date.now();
				if ( !this.loopId ) {
					this.loopId = setInterval( ()=>Game.update(), TICK_TIME );
				}

				this.keyListen = evt=>{
				if ( evt.repeat) return;
				this.keyDown( evt ); evt.stopPropagation(); }

				window.addEventListener('keydown', this.keyListen, false );
				this.startAutoSave();

			}


		},

		keyDown( e ){

			if ( !this.loopId ) return;

			let slice = e.code.slice(0,-1);
			if ( slice === 'Digit' || slice === 'Numpad' ) {

				let num = Number( e.code.slice(-1) );
				//console.log('number: ' + num );

				if ( e.shiftKey && RollOver.item ) {

					let it = RollOver.item;
					this.state.setQuickSlot( RollOver.item, num );

				} else {
					let it = this.state.getQuickSlot(num);
					if ( it) this.doQuickslot(it);
				}

			}

		},

		doQuickslot(it) {
			 Game.tryItem( it.slotTarget( Game ) );
		},

		onEquip( it, inv ) { Game.equip( it,inv ); },

		onUnequip(slot, it){ Game.unequip(slot, it) },

		onTake(it) { Game.take(it); },

		onCraft(it) { Game.craft(it); },

		/**
		 * Use instanced item.
		 */
		onUse( it, inv ) { Game.use(it, inv); },

		/**
		 * @param {Enchant} e - enchantment
		 * @param {Item} targ - enchant target.
		 */
		onEnchant( e, targ ) {
			Game.tryUseOn( e, targ );
		},

		onSell( it, inv, count ) { Game.trySell( it, inv, count ); },

		itemOut:ItemOut,

		/**
		 * Item clicked.
		 */
		onItem(item) {

			if ( item.warn ) { //&& !Settings.getSubVar('nowarn', item.id)) {

				this.$refs.warn.show( item );

			} else Game.tryItem(item);

		},

		onConfirmed(it, nowarn) {

			if ( typeof it !== 'string' ) {
				it.warn = !nowarn;
				Game.tryItem(it);
			}

		},

		/**
		 * Warning should trigger.
		 * @param {string} msg - warning message
		 * @param {()=>{}} res - success callback.
		 */
		onWarn( msg, res ) {
			this.$refs.warn.show( msg, res );
		},

		tryUse( it ) { Game.tryItem(it ) },

		/**
		 * Buy a spell or item without casting/using the item or its mods.
		 * @property {Item} item - item to buy.
		 */
		onBuy(item) { Game.tryBuy( item ); }

	},
	computed:{

		section:{

			get(){ return this.psection; },
			set(v){

				this.psection=v;
				if ( v ) Settings.set('curview', v.id );
			}
		},
		menuItems(){ return this.state.sections.filter( it=>!this.locked(it) ); }

	}

}
</script>

<template>

	<div class="full" @mouseover.capture.stop="itemOut">

		<devconsole />
		<topbar @open-settings="togSettings=true">
			<template slot="center">
			<span class="load-message" v-if="!state">LOADING DATA...</span>
			<dots v-if="state" :dots="state.player.dots" />
			</template>
		</topbar>

<!-- popups -->
		<itempopup />
		<warn ref="warn" @confirmed="onConfirmed" />
		<choice />
		<register v-if="Profile.CLOUD&&togRegister" @close="togRegister=false" />
		<login v-if="Profile.CLOUD&&showLogin" @close="showLogin=false" />
		<settings v-if="togSettings" @close-settings="togSettings=false" />
		<activities v-if="togActivities" @close="togActivities=false" />

<!-- end popups -->

		<div v-if="state" class="game-main">

		<resources :items="state.resources"/>

		<vue-menu class="game-mid" :items="menuItems" v-model="section">

		<template slot="sect_main">
		<tasks class="main-tasks" />
		</template>

		<template slot="sect_skills"><skills :state="state"></skills></template>

		<template slot="sect_player"><player /></template>

		<template slot="sect_home"><home :state="state" /></template>

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
		<template slot="sect_minions"><minions :minions="state.minions" /></template>

		<template slot="sect_enchant"><enchanting /></template>
		</vue-menu>

		<vitals :state="state" />

		<log />

		</div>

		<quickbar v-if="state" class="bot-bar" :bars="state.bars" />

	</div>
</template>

<style scoped>

div.full {
	display:flex;
	background:inherit;
	flex-direction: column;
	min-width:50vw;
	max-height:100vh;
	height:100vh;
}

div.game-mid div.main-tasks {
	overflow-y: auto;
	height:100%;
}


div.upgrade-list {
	min-height:0;
	/*border-top: 1px solid var( --separator-color );*/
	margin-top:var(--sm-gap);
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