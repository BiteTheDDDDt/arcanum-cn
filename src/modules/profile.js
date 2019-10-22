import Hall from "./hall";
import Settings from '../settings';
import Events, { LEVEL_UP, CHAR_NAME, CHAR_TITLE, CHAR_CLASS } from "../events";
import dataLoader, { loadFiles, prepData } from '../dataLoader';
import Module from "./gmodule";

const CHARS_DIR = 'chars/';
const SETTINGS_DIR = 'settings/';
const HALL_FILE = 'hall';

/**
* @const {string} SAVE_DIR - global save directory.
*/
const SAVE_DIR = __SAVE ? __SAVE + '/' : '';

/**
 * Control access to all local storage and profile information.
 */
export default {

	hall:null,

	/**
	 * @returns {string} old save location.
	 * @compat
	 */
	legacySave(){ return SAVE_DIR + 'gameData'; },

	/**
	 * Load data files for hall.
	 */
	loadHallData( save ) {

		let module = new Module();
		return module.load( 'hall').then( ()=>module.instance( save ));

	},

	/**
	 * Load Hall information.
	 */
	async loadHall(){

		let data = window.localStorage.getItem( SAVE_DIR + HALL_FILE );

		if ( data ) {
			try {
				data = JSON.parse(data);
			} catch(e) {console.error( e.message + '\n' + e.stack ); }
		}

		data = await this.loadHallData( data );

		this.hall = new Hall(data);

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
	 */
	setActive( slot, state ) {

		this.hall.updateChar( state.player );
		this.saveActive( state );
		this.hall.setActive( slot );

		this.saveHall();
	},

	/**
	 * State of current player/game loaded.
	 * @param {Game} game
	 */
	gameLoaded(game) {

		this.hall.updateChar( game.state.player );
		this.saveHall();

		this.hall.calcPoints();
		game.addData( this.hall.items );

		Events.add( LEVEL_UP, this.updateChar, this );
		Events.add( CHAR_NAME, this.updateChar, this );
		Events.add( CHAR_TITLE, this.updateChar, this );
		Events.add( CHAR_CLASS, this.updateChar, this );


	},

	/**
	 * Wipe current player data.
	 */
	clearActive(){

		// clear hall char.
		window.localStorage.setItem( this.activeLoc(), null );

	},

	dismiss( slot ) {

		if ( this.hall.clearChar(slot) ) {

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

				console.log('NO 1st Char. USING LEGACY');
				str = store.getItem( this.legacySave() );

			}

			return str;

		} catch (e ) {

			console.error( e.message + '\n' + e.stack );
			return null;

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

			return true;

		} catch(e) {
			console.error( e.message + '\n' + e.stack );
			return false;
		}

	},

	/**
	 * Load settings for active wizard.
	 */
	loadSettings() {

		try {

			let str = window.localStorage.getItem( this.settingsLoc() );
			let data = JSON.parse( str );

			Settings.setSettings( data );

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
	activeLoc() {
		return SAVE_DIR + CHARS_DIR + this.hall.active;
	},

	charLoc( ind ) {
		return SAVE_DIR + CHARS_DIR + ind;
	},

	settingsLoc( ind ){
		return SAVE_DIR + SETTINGS_DIR + ( ind === undefined ? this.hall.active : ind );
	},

	saveHall(){

		try {

			let json = JSON.stringify( this.hall );
			if ( json ) {

				window.localStorage.setItem( SAVE_DIR + HALL_FILE, json );
			}

		} catch(e){

			console.error( e.message + '\n' + e.stack );

		}

	},

	setName(name){
	},

	setLevel(level) {
	},

	setTitle(title){
	}

}