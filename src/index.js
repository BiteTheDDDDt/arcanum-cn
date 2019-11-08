import Vue from 'vue';
import Main from 'ui/main.vue';
import Confirm from 'ui/components/confirm.vue';
import Game from './game';
import Events from './events';
import Profile from './modules/profile';

/**
 * Global dispatch.
 */
//var dispatch = new Vue();

Vue.mixin({

	components:{ confirm:Confirm },
	methods: {

		/**
		 * System-related events.
		 */
		listen:Events.listen,
		dispatch:Events.dispatch,
		removeListener:Events.removeListener,

		/**
		 * Game-level events.
		 */
		emit:Events.emit,
		add:Events.add,

		// get id for html element.
		elmId(name) { return name + this._uid; }

	}

});

const vm = new Vue({
	el: '#vueRoot',
	components:{ Main },
	data(){
		return {
			renderKey:1
		}
	},
	created(){

		this.saveLink = null;
		this.game = Game;

		this.listen('save-file', this.saveFile, this );
		this.listen('hall-file', this.hallFile, this );

		this.listen('load-file', this.loadFile, this );
		this.listen('load', this.loadSave, this );
		this.listen('reset', this.reset,this );

		this.listen('save-settings', Profile.saveSettings, Profile );

		this.listen('set-char', this.setChar, this );
		this.listen('dismiss-char', this.dismissChar, this );

		this.listen('save', this.save );
		this.listen('autosave', this.save );

		this.listen( 'setting', this.onSetting, this );

		this.loadProfile();

	},
	methods:{

		/**
		 * Set current character.
		 */
		setChar( ind ){

			Profile.setActive( ind, this.game.state );
			this.loadSave();

		},

		dismissChar(ind) {

			//console.log('DISMISS: ' + ind );
			Profile.dismiss( ind );

		},

		loadProfile(){

			console.warn('LOADING PROFILE');
			Profile.loadHall().then( ()=>this.loadSave() );

		},

		/**
		 * Load the save for the active wizard.
		 */
		loadSave() {

			try {

				console.warn('LOADING SAVE');
				let str = Profile.loadActive();
				this.setStateJSON( JSON.parse(str) );

			} catch (e ) { console.error( e.message + '\n' + e.stack ); }

		},

		/**
		 * GameState was revived from JSON.
		 * @param {Game} game
		 */
		gameLoaded( game ) {

			if ( !game ) console.warn('gameloaded(): NULL' );

			let settings = Profile.loadSettings();
			this.onSettings( settings );

			this.dispatch( 'game-loaded' );

			Profile.gameLoaded( game );

			this.dispatch('unpause');

		},

		/**
		 * Call on settings loaded.
		 * @param {*} vars
		 */
		onSettings(vars){

			if (!vars) return;

			this.onSetting( 'darkMode', vars.darkMode );
			this.onSetting( 'compactMode', vars.compactMode );
		},

		onSetting( setting, v ) {

			if ( setting === 'darkMode') {

				if ( v ) document.body.classList.add( 'darkmode');
				else document.body.classList.remove( 'darkmode');

			} else if ( setting === 'compactMode' ) {

				if ( v ) document.body.classList.add( 'compact');
				else document.body.classList.remove( 'compact');

			}

		},

		saveFile(e ){

			// event shouldnt be null but sometimes is.
			if (!e )return;
			try {

				if ( this.saveLink ) URL.revokeObjectURL( this.saveLink );

				let state = this.game.state;
				this.saveLink = this.makeLink( state, e.target, state.player.name );

			} catch(ex) {
				console.error( ex.message + '\n' + ex.stack );
			}

		},

		hallFile(e){

			if ( !e ) return;

			this.save();		// save game first.

			try {

				if ( this.hallLink) URL.revokeObjectURL( this.hallLink );

				let data = Profile.getHallSave();
				this.saveLink = this.makeLink( data, e.target, 'hall');

			} catch(ex){
				console.error( ex.message + '\n' + ex.stack );
			}

		},

		/**
		 * Create URL link for data.
		 * @param {object} data
		 * @param {HTMLElement} targ - link target.
		 * @returns {DOMString}
		 */
		makeLink( data, targ, saveName='arcanum' ) {

			let json = JSON.stringify(data);
			let file = new File( [json], saveName + '.json', {type:"text/json;charset=utf-8"} );

			targ.title = file.name;
			return targ.href = URL.createObjectURL( file );

		},

		loadFile(files) {

			const file = files[0];
			if ( !file) return;

			const reader = new FileReader();
			reader.onload = (e)=>{

				try {

					let data = JSON.parse( e.target.result );

					this.setStateJSON( e.target.result );

				} catch(ex){
					console.error(  err.message + '\n' + err.stack );
				}

			}
			reader.readAsText( file );

		},

		/**
		 * Set JSON for hall and all associated wizards.
		 * @param {object} data
		 */
		setHallJSON( data ) {
		},

		/**
		 * Set wizard-state game data in the form of a json
		 * text string.
		 * @param {object} obj - raw game data.
		 */
		setStateJSON( obj=null ){

			this.dispatch('pause');

			try {

				if ( this.game.loaded ) this.renderKey++;

				this.game.load( obj, Profile.getHallData() ).then( this.gameLoaded,
					e=>console.error( e.message + '\n' + e.stack ) );

			} catch( err ) {
				console.error(  err.message + '\n' + err.stack );
			}
		},

		save() {

			if (!this.game.loaded ) return;
			Profile.saveActive( this.game.state );

		},
		reset() {

			this.dispatch('pause');

			Profile.clearAll();

			this.setStateJSON(null);

		}

	},
	render( createElm ) {
		return createElm(Main, { key:this.renderKey } );
	}

});