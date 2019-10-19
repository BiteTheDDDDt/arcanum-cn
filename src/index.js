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

	components:{
		confirm:Confirm
	},
	methods: {

		/**
		 * System-related events.
		 */
		listen:Events.listen,
		dispatch:Events.dispatch,

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
	created(){

		this.lastSave = null;
		this.game = Game;

		this.listen('save-file', this.saveFile );
		this.listen('load-file', this.loadFile );
		this.listen('load', this.loadSave );
		this.listen('reset', this.reset );

		this.listen('set-char', this.setChar, this );
		this.listen('dismiss-char', this.dismissChar, this );

		this.listen('save', this.save );
		this.listen('autosave', this.save );

		this.listen( 'setting', this.onSetting );

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

			console.log('DISMISS: ' + ind );
			Profile.dismiss( ind );

		},

		loadProfile(){

			Profile.loadHall();
			this.loadSave();

		},

		/**
		 * Load the save for the active wizard.
		 */
		loadSave() {

			try {

				let str = Profile.loadActive();
				if ( !str ) console.log('no data saved.');

				this.setStateJSON( str );

			} catch (e ) {
				console.error(e);
			}

		},

		/**
		 * GameState was revived from JSON.
		 * @param {GameState} state
		 */
		gameLoaded( state ) {

			console.log('GAMELOADED(): ' + state );
			this.dispatch( 'game-loaded' );

			Profile.loadSettings();
			Profile.stateLoaded( state );
			Profile.saveHall();

			this.dispatch('unpause');

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

			try {

				if ( this.lastSave ) URL.revokeObjectURL( this.lastSave );

				let state = this.game.state;
				let json = JSON.stringify( state );

				this.lastSave = new File( [json],
					(state.player.name || 'arcanum') + '.json', {type:"text/json;charset=utf-8"} );

				e.target.title = this.lastSave.name;
				e.target.href = URL.createObjectURL( this.lastSave );

			} catch(ex) {
				console.error(ex);
			}

		},

		loadFile(files) {

			const file = files[0];
			if ( !file) return;

			const reader = new FileReader();
			reader.onload = (e)=>{

				this.setStateJSON( e.target.result );

			}
			reader.readAsText( file );

		},

		/**
		 * Set wizard-state game data in the form of a json
		 * text string.
		 * @param {string} text
		 */
		setStateJSON( text ){

			this.dispatch('pause');

			try {

				let obj = text ? JSON.parse( text ) : null;
				this.game.load( obj ).then( this.gameLoaded,
					e=>console.error(e) );

			} catch( err ) {
				console.error( err);
			}

		},

		save() {
			Profile.saveActive( this.game.state );
		},
		reset() {

			this.dispatch('pause');

			Profile.clearActive();

			this.game.reset().then( this.gameLoaded );

		}

	},
	render( createElm ) {
		return createElm(Main, { props:{} } );
	}

});