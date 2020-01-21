import Hall from "./hall";
import Settings from './settings';
import Events, { LEVEL_UP, CHAR_NAME, CHAR_TITLE, CHAR_CLASS } from "../events";

import Module from "./gmodule";

const CHARS_DIR = 'chars/';
const SETTINGS_DIR = 'settings/';
export const HALL_FILE = 'hall';

/**
* @const {string} SAVE_DIR - global save directory.
*/
const SAVE_DIR = __SAVE ? __SAVE + '/' : '';

/**
 * Control access to all local storage and profile information.
 */
export default {

	/**
	 * @property {Hall} hall
	 */
	hall:null,

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
	 * Load Hall information.
	 * @param {object} data - optional data loaded from file.
	 */
	async loadHall( data=null ){

		if ( !data ) {

			data = window.localStorage.getItem( this.hallLoc() );

			if ( data ) {

				try {
					data = JSON.parse(data);
				} catch(e) {console.error( e.message + '\n' + e.stack ); }
			}

		}

		data = await this.loadHallData( data );

		this.hall = new Hall(data);

	},

	/**
	 * active player info changed.
	 * update and save hall data.
	 */
	onCharLevel( player, lvl ) {

		this.hall.setLevel( player, lvl );
		this.saveHall();

	},

	/**
	 * active player info changed.
	 * update and save hall data.
	 */
	updateChar( player, slot=-1 ) {

		this.hall.updateChar( player, slot );
		this.saveHall();

	},

	/**
	 * Set name of Wizards hall.
	 * @param {*} s
	 */
	setHallName(s){

		this.hall.name = s;
		this.saveHall();

	},

	/**
	 * set active player index.
	 * @param {number} slot - slot to load.
	 * @param {GameState} state - current state, for saving current.
	 * sort of stupid to have this here?
	 */
	setActive( slot, state ) {

		this.hall.updateChar( state.player );
		this.saveActive( state );
		this.hall.setActive( slot );

		this.saveHall();
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

		let p = game.state.player;
		let slot = this.hall.hidSlot( p.hid );

		if ( slot >= 0 ) {
			this.hall.setActive( slot );
		}
		this.hall.updateChar( p );

		this.saveHall();
		//this.hall.calcPoints( game );

		Events.add( LEVEL_UP, this.onCharLevel, this );
		Events.add( CHAR_NAME, this.updateChar, this );
		Events.add( CHAR_TITLE, this.updateChar, this );
		Events.add( CHAR_CLASS, this.updateChar, this );


	},

	dismiss( slot ) {

		if ( this.hall.dismiss(slot) ) {

			window.localStorage.setItem( this.charLoc(slot), null );
			window.localStorage.setItem( this.settingsLoc(slot), null);
			this.saveHall();

		}

	},

	/**
	 * @returns {string} - returns the JSON string for the current
	 * player slot, or null.
	 */
	loadActive(){

		try {

			let store = window.localStorage;
			let str = store.getItem( this.activeLoc() );

			/** @compat attempt load from legacy save. */
			if ( !str && this.hall.active === 0 ) {
				str = store.getItem( this.legacySave() );
			}

			return str;

		} catch (e ) {

			console.error( e.message + '\n' + e.stack );
			return null;

		}

	},

	/**
	 * @returns {string} old save location.
	 * @compat
	 */
	legacySave(){ return SAVE_DIR + 'gameData'; },

	/**
	 * Get JSON for complete save of hall and all wizrobes in it.
	 * @returns {object}
	 */
	getHallSave(){

		let data = {
			type:HALL_FILE,
			hall:this.hall,
			chars:[]
		};

		let max = Math.floor( this.hall.max );
		let store = window.localStorage;

		let chars = data.chars;
		for( let i = 0; i < max; i++ ) {

			let char = store.getItem( this.charLoc(i) );

			// parse to avoid double string encoding.
			if ( char ) char = JSON.parse(char);

			chars.push( char || null );

		}

		return data;

	},

	/**
	 * Set the complete hall data from data file.
	 * @param {FullHall} data
	 */
	setHallSave( data ) {

		this.setCharDatas( data.chars );
		console.dir( data.hall );
		window.localStorage.setItem( this.hallLoc(), JSON.stringify(data.hall) );

	},

	setCharDatas( chars ) {

		if ( !chars ) return;

		let store = window.localStorage;
		for( let i = chars.length-1; i >= 0; i-- ) {

			if ( chars[i] ) console.log( `HALL SAVE ${i}: ${chars[i].name}` );
			else console.log('HALL SAVE EMPTY: ' + i );
			store.setItem( this.charLoc(i), JSON.stringify( chars[i] ) );

		}

	},

	/**
	 * Save GameState of active wizard.
	 * @param {GameState} state
	 */
	saveActive( state ){

		try {

			let store = window.localStorage;

			let json = JSON.stringify( state );
			if ( json ) {
				store.setItem( this.activeLoc(), json );
			}

			this.saveSettings();

			return true;

		} catch(e) {
			console.error( e.message + '\n' + e.stack );
			return false;
		}

	},


	/**
	 * Wipe current player data and settings.
	 */
	clearActive(){

		// clear hall char.
		window.localStorage.setItem( this.activeLoc(), null );
		window.localStorage.setItem( this.settingsLoc(), null );

	},

	/**
	 * Load settings for active wizard.
	 * @returns {object}
	 */
	loadSettings() {

		try {

			let str = window.localStorage.getItem( this.settingsLoc() );
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
				window.localStorage.setItem( this.settingsLoc(), data );
			}

		} catch (e){
			console.error( e.message + '\n' + e.stack );
		}

	},

	/**
	 * Save loc for Active wizard.
	 * @returns {string} - save location for current char file.
	 */
	activeLoc() { return SAVE_DIR + CHARS_DIR + this.hall.active; },

	hasHall() { return this.hall && this.hall.owned() },

	/**
	 * Clear all stored data.
	 */
	clearAll:()=>window.localStorage.clear(),

	charLoc:( ind ) =>(SAVE_DIR + CHARS_DIR + ind),

	settingsLoc( ind ){
		return SAVE_DIR + SETTINGS_DIR + ( ind === undefined ? this.hall.active : ind );
	},

	hallLoc:()=>(SAVE_DIR + HALL_FILE),

	saveHall(){

		try {

			let json = JSON.stringify( this.hall );
			if ( json ) {
				window.localStorage.setItem( this.hallLoc(), json );
			}

		} catch(e){

			console.error( e.message + '\n' + e.stack );

		}

	}

}