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

		this.listen('save', this.save );
		this.listen('autosave', this.save );

		this.listen( 'setting', this.onSetting );

		this.loadSave();

	},
	methods:{

		loadProfile(){
		},

		gameLoaded() {
			console.log('gameLoaded()');
			this.dispatch( 'game-loaded' );
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

				this.setGameData( e.target.result );

			}
			reader.readAsText( file );

		},

		loadSave() {

			let str = Profile.loadCur();
			if ( !str ) console.log('no data saved.');

			try {
				this.setGameData( str );
			} catch (e ) {
				console.error(e);
			}

		},

		setGameData( text ){

			this.dispatch('pause');

			let obj = text ? JSON.parse( text ) : null;
			this.game.load( obj ).then( this.gameLoaded,
				e=>console.error(e) );

		},

		save() {
			Profile.saveCur( this.game.state );
		},
		reset() {

			this.dispatch('pause');

			Profile.clearCur();

			this.game.reset().then( this.gameLoaded );

		}

	},
	render( createElm ) {
		return createElm(Main, { props:{} } );
	}

});