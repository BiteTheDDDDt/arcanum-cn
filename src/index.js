import Game from './game';
import Events from './events';
import Profile from 'modules/profile';

import Vue from 'vue';
import Main from 'ui/main.vue';

import Confirm from 'ui/components/confirm.vue';
import { ItemOver } from 'ui/popups/itemPopup.vue';

//window.localStorage.clear();

if ( __KONG ) {

	kongregateAPI.loadAPI( function(){

	window.kong = kongregateAPI.getAPI();
	// You can now access the Kongregate API with:
	// kongregate.services.getUsername()

	});
}

Vue.mixin({

	components:{ confirm:Confirm },
	methods: {

		/**
		 * System-related events.
		 */
		listen:Events.listen,
		dispatch:Events.dispatch,
		removeListener:Events.removeListener,

		itemOver:ItemOver,

		/**
		 * Game-level events.
		 */
		emit:Events.emit,
		add:Events.add,

		// get id for html element.
		elmId(name) { return name + this._uid; }

	}

});

/**
 * @fires {} register-error
 * @fires {} register-sent
 * @fires {} logged-in
 */
const vm = new Vue({
	el: '#vueRoot',
	components:{
		Main
	},
	data(){
		// hacky re-render force. used to rerender on game reload.
		return {
			active:Profile.active,
			renderKey:1
		}
	},
	created(){

		this.saveLink = null;
		this.game = Game;

		//this.tryAutoLogin();

		this.listen('save-file', this.saveFile, this );
		this.listen('hall-file', this.hallFile, this );

		this.listen('load-file', this.loadFile, this );
		this.listen('load', this.loadSave, this );
		this.listen('reset', this.reset,this );
		this.listen('resetHall', this.resetHall, this );

		this.listen('stat', this.doStat, this );

		this.listen('save-settings', Profile.saveSettings, Profile );

		this.listen('set-char', this.setChar, this );
		this.listen('dismiss-char', this.dismissChar, this );

		this.listen('save', this.manualSave, this );
		this.listen('autosave', this.save, this );

		this.listen( 'setting', this.onSetting, this );
		this.listen( 'logout', this.logout, this );
		this.listen( 'login-changed', this.onLoginChanged, this );
		//this.listen( 'try-register', this.tryRegister, this );

		this.loadHall();

	},
	methods:{

		onLoginChanged( loggedIn ){

			console.log('LOGGED IN: ' + loggedIn );
			Profile.loggedIn = loggedIn;

			if ( loggedIn ) {
				this.loadHall('remote');
			}

		},

		logout(){
			Profile.logout();
		},

		tryLogin(uname, pw) {
		},

		loadHall( type=null ){

			//if ( forceClear ) this.reset();

			console.log('loading hall type: ' + type );
			this.dispatch('pause');
			Profile.loadHall( type ).then( ()=>this.loadSave() );


		},

		doStat( evt, val ) {

			if ( window.kong ) {
				window.kong.stats.submit( evt, val );
			}
		},

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

		/**
		 * Load the save for the active wizard.
		 */
		async loadSave() {

			try {

				this.dispatch('pause');

				let data = await Profile.loadActive();
				this.setStateJSON( data );

			} catch (e ) { console.error( e.message + '\n' + e.stack ); }

		},

		/**
		 * Game was revived from JSON.
		 * @param {Game} game
		 */
		gameLoaded( game ) {

			if ( !game ) console.warn('gameloaded(): NULL' );

			this.settingsLoaded( Profile.loadSettings() );

			this.dispatch( 'game-loaded' );

			console.log('Begin player id: ' + game.state.pid );

			Profile.gameLoaded( game );

			this.dispatch('unpause');

		},

		/**
		 * Call on settings loaded.
		 * @param {*} vars
		 */
		settingsLoaded(vars){

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

			} else if ( setting === 'remoteFirst') {

				Profile.remoteFirst = true;
			}


		},

		/**
		 *
		 * @param {*} e
		 * @returns {void}
		 */
		saveFile(e ){

			// event shouldnt be null but sometimes is.
			if (!e )return;
			try {

				e.preventDefault();
				let state = this.game.state;
				this.makeLink( state, state.player.name );

			} catch(ex) {
				console.error( ex.message + '\n' + ex.stack );
			}

		},

		/**
		 *
		 * @param {*} e
		 * @returns {void}
		 */
		async hallFile(e){

			if ( !e ) return;

			this.save();		// save game first.

			try {
				e.preventDefault();

				if ( this.hallLink) URL.revokeObjectURL( this.hallLink );

				let data = await Profile.getHallSave();
				this.makeLink( data, 'hall');

			} catch(ex){
				console.error( ex.message + '\n' + ex.stack );
			}

		},

		/**
		 * Create URL link for data.
		 * @param {object} data
		 * @returns {DOMString}
		 */
		makeLink( data, saveName ) {

			if ( this.saveLink ) URL.revokeObjectURL( this.saveLink );

			let json = JSON.stringify(data);
			let file = new Blob( [json], {type:"text/json;charset=utf-8"} );

			var a = document.createElement( 'a');
			//targ.type = 'text/json';
			a.download = a.title = saveName + '.json';

			this.saveLink = URL.createObjectURL( file );
			a.href = this.saveLink;
			a.click();

		},

		/**
		 * Load file from data.
		 * @param {*} files
		 */
		loadFile(files) {

			const file = files[0];
			if ( !file) return;

			this.dispatch('pause');


			const reader = new FileReader();
			reader.onload = (e)=>{

				try {

					let data = JSON.parse( e.target.result );
					if ( data.type ==='hall') {

						this.setHallJSON( data );

					} else {

						this.setStateJSON( data );

					}


				} catch(err){
					console.error(  err.message + '\n' + err.stack );
				}

			}
			reader.readAsText( file );

		},

		/**
		 * Set JSON for complete hall-file with all associated wizards.
		 * @param {object} data
		 */
		async setHallJSON( data ) {

			await Profile.setHallSave( data );
			this.loadHall();	// load the hall data back. bit wasteful but organized.

		},

		/**
		 * Set wizard-state game data in the form of a json
		 * text string.
		 * @param {object} obj - raw game data.
		 */
		setStateJSON( obj=null ){

			try {

				//if ( this.game.loaded ) this.renderKey++;
				this.renderKey++;

				this.game.load( obj, Profile.getHallItems() ).then( this.gameLoaded,
					e=>console.error( e.message + '\n' + e.stack ) );

			} catch( err ) {
				console.error(  err.message + '\n' + err.stack );
			}
		},

		manualSave(){
			this.save();
		},

		async save() {

			if (!this.game.loaded ) return;
			console.log('saving...');
			let charsave = await Profile.saveActive( this.game.state );

			console.log('saving hall..: ' + charsave );
			if ( charsave ) {

				Profile.saveHall();

			} else{
					console.warn('ERR ON SAVE. NO SAVE.');	
					alert('ERR ON SAVE. NO SAVE.');
			} 

		},

		reset(){

			this.dispatch('pause');

			Profile.clearActive();
			this.setStateJSON(null);


		},
		async resetHall() {

			this.dispatch('pause');

			await Profile.clearAll();

			this.loadHall();

		}

	},
	render( createElm ) {
		return createElm( Main, { key:this.renderKey } );
	}

});