import Hall from "./hall";
import Settings from './settings';
import Events, { LEVEL_UP, CHAR_NAME, CHAR_TITLE, CHAR_CLASS } from "../events";

import Module from "./module";
import { Persist } from "./persist/persist";

const HALL_FILE = 'hall';

/**
 * Control access to all local storage and profile information.
 */
export default {

	/**
	 * @const {number}
	 */
	VERSION:__VERSION,

	/**
	 * @const {boolean}
	 */
	CLOUD:__CLOUD,

	/**
	 * @property {Hall} hall
	 */
	hall:null,

	/**
	 * Reactive information about active profile.
	 * @property {Object} active - reactive profile information for Vue.
	 */
	active:{
		loggedIn:false
	},

	get loggedIn(){return this.active.loggedIn},
	set loggedIn(v){this.active.loggedIn=v},

	logout(){
		Persist.logout();
	},

	/**
	 * @property {boolean} remoteFirst - prefer remote save over local.
	 */
	set remoteFirst(v){ Persist.remoteFirst =v;},

	/**
	 * Load Hall information.
	 */
	async loadHall( type=null ){

		var save = await Persist.loadHall( HALL_FILE, type );
		var data = await this.loadHallData( save );

		this.hall = new Hall(data);
		if ( this.hall.legacy ) this.resaveLegacy();

	},

	/**
	 * Load legacy char locations and resave with new
	 * naming scheme.
	 * @compatibility
	 */
	async resaveLegacy(){

		console.log('RESAVING LEGACY FILES');

		let max = this.hall.max.value;
		for( let i = 0; i < max; i++ ) {

			var c = this.hall.getSlot(i);
			if ( c.empty ) continue;

			console.log('load (to save) legacy: ' + i );
			let data = await Persist.loadChar( i );
			// parse to avoid double string encoding.
			if ( data ) {
				console.log('save: ' + i + ' to: ' + c.pid );
				await Persist.saveChar( JSON.stringify(data), c.pid );

			} else console.log('NO LEGACY FOUND: ' + i );


		}
		this.hall.legacy = false;

	},

	/**
	 * Load data files for hall.
	 * @param {object} save - save data of hall.
	 * @returns {Promise.<HallData>}
	 */
	loadHallData( save ) {

		let module = new Module();
		return module.load( HALL_FILE ).then( ()=>module.instance( save ));

	},

	/**
	 * active player info changed.
	 * update and save hall data.
	 * @returns {Promise.<>}
	 */
	onCharLevel( player, lvl ) {

		this.hall.setLevel( player, lvl );
		return this.saveHall();

	},

	/**
	 * active player info changed.
	 * update and save hall data.
	 * @returns {Promise}
	 */
	updateChar( player ) {

		this.hall.updateChar( player );
		return this.saveHall();

	},

	/**
	 * Set name of Wizards hall.
	 * @param {*} s
	 * @returns {Promise}
	 */
	setHallName(s){

		this.hall.name = s;
		return this.saveHall();

	},

	/**
	 * set active player index.
	 * @param {number} slot - slot to load.
	 * @param {GameState} state - current state, for saving current.
	 * sort of stupid to have this here?
	 */
	setActive( slot, state ) {

		this.hall.updateChar( state.player );

		if ( this.saveActive( state ) ) {

			this.hall.setActive( slot );
			this.saveHall();

		} else console.error( 'CUR CHAR NOT SAVED');

	},

	/**
	 * @returns {.<string,GData>} special hall data items.
	 */
	getHallItems(){ return this.hall.items; },

	/**
	 * Game of current player/game loaded.
	 * @param {Game} game
	 */
	gameLoaded(game) {

		let gs = game.state;
		let p = gs.player;

		let id = gs.pid || p.hid;
		console.log('player id: ' + id );

		let slot = this.hall.pidSlot( id );

		if ( slot >= 0 ) {
			this.hall.setActive( slot );
		}
		this.hall.updateChar( p, id );

		this.saveHall();
		//this.hall.calcPoints( game );

		Events.add( LEVEL_UP, this.onCharLevel, this );
		Events.add( CHAR_NAME, this.updateChar, this );
		Events.add( CHAR_TITLE, this.updateChar, this );
		Events.add( CHAR_CLASS, this.updateChar, this );


	},

	/**
	 * Dismiss character by character slot.
	 * @param {number} slot
	 */
	dismiss( slot ) {

		if ( this.hall.dismiss(slot) ) {

			Persist.deleteChar( this.hall.charId(slot) );
			this.saveHall();

		}

	},

	/**
	 * @returns {string} - returns the JSON string for the current
	 * player slot, or null.
	 */
	async loadActive(){

		try {

			if ( this.hall.curId ) console.log('loading hall char: ' + this.hall.curId);
			else if ( this.hall.curSlot ) console.log('loading slot: '+ this.hall.curSlot );

			return Persist.loadChar( this.hall.curId || this.hall.curSlot );

		} catch (e ) {

			console.error( e.message + '\n' + e.stack );
			return null;

		}

	},

	/**
	 * Get JSON for complete save of hall and all wizrobes in it.
	 * @returns {object}
	 */
	async getHallSave(){

		let data = {
			type:HALL_FILE,
			hall:this.hall,
			chars:[]
		};

		let max = Math.floor( this.hall.max );

		let chars = data.chars;
		for( let i = 0; i < max; i++ ) {

			let char = await Persist.loadChar( this.hall.charId(i) );

			// parse to avoid double string encoding.
			//if ( char ) char = JSON.parse(char);

			chars.push( char || null );

		}

		return data;

	},

	/**
	 * Set the complete hall data from save file.
	 * Loads the data as the current hall.
	 * @param {FullHall} save
	 */
	async setHallSave( save ) {

		await this.setCharDatas( save.chars );
		console.dir( save.hall, 'Hall Save' );

		/** @compat */
		if ( save.hall.active ) {

			let active = save.hall.active;
			console.log('active: ' + active );
			let cur = save.hall.chars[active];
			if ( cur ) {
				save.hall.curId = cur.pid || cur.hid;
				console.log('switching to cur: ' + save.hall.curId );
			} else console.warn('cur not found: ' + cur );
			delete save.hall.active;

		}
		return Persist.saveHall( JSON.stringify(save.hall), save.hall.id );

	},

	/**
	 * Used to save all the character data when a hall
	 * is loaded from file.
	 * @param {*} chars
	 */
	async setCharDatas( chars ) {

		if ( !chars ) return;

		var id;

		for( let i = chars.length-1; i >= 0; i-- ) {

			var char = chars[i];
			if ( char ) {

				 console.log( `HALL SAVE ${i}: ${char.name}` );

				id = char.pid;
				if ( !id ) {

					var p = char.items.player;
					// @compat hid
					if ( p ) id = p.pid || p.hid
				}

			} else {
				console.log('EMPTY HALL SLOT: ' + i );

			}

			await Persist.saveChar( JSON.stringify(chars[i]), id );
			id = null;

		}

	},

	/**
	 * Save GameState of active wizard.
	 * @param {GameState} state
	 * @returns {string} json save data.
	 */
	async saveActive( state ){

		try {

			console.log('cur char id: ' + this.hall.curId );
			let json = JSON.stringify(state);
			if ( json ) {
				await Persist.saveChar( json, this.hall.curId );
			}

			this.saveSettings();

			return json;

		} catch(e) {
			console.error( e.message + '\n' + e.stack );
			return null;
		}

	},


	/**
	 * Wipe current player data and settings.
	 */
	async clearActive(){
		return Persist.deleteChar( this.curId );
	},

	/**
	 * Load settings for active wizard.
	 * @returns {object}
	 */
	loadSettings() {

		try {

			let str = Persist.loadSettings();
			let data = JSON.parse( str );

			Settings.setSettings( data );

			return Settings.getAll();

		} catch (e ) {
			console.error( e.message + '\n' + e.stack );
		}

	},

	/**
	 * Save settings for active wizard.
	 */
	saveSettings(){

		try {

			let data = JSON.stringify( Settings );
			if ( data ) {
				Persist.saveSettings( data, this.curId );
			}

		} catch (e){
			console.error( e.message + '\n' + e.stack );
		}

	},

	hasHall() { return this.hall && this.hall.owned() },

	/**
	 * Clear all stored data.
	 */
	clearAll(){
		Persist.clearAll();
	},

	async saveHall(){

		try {

			let data = JSON.stringify( this.hall );
			if ( data ) {
				await Persist.saveHall( data, this.hall.id );
			}

		} catch(e){

			console.error( e.message + '\n' + e.stack );

		}

	}

}