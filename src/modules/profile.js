import Hall from "./hall";
import Settings from '../settings';

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
	 * Load Hall information.
	 */
	loadHall(){

		console.log('LOADING HALL');
		let str = window.localStorage.getItem( SAVE_DIR + HALL_FILE );
		if ( !str ) {

			console.log('NEW HALL');
			this.hall = new Hall();

		} else {

			try {

				console.log('PARSING SAVED HALL');
				this.hall = new Hall( JSON.parse(str ) );

			} catch (e) {

				console.error(e);

			}

		}

	},

	/**
	 * set active player index.
	 * @param {number} slot - slot to load.
	 */
	setActive( slot, state ) {

		this.hall.updateActive( state.player );
		this.saveActive( state );

	},

	/**
	 * State of current player/game loaded.
	 * @param {GameState} state
	 */
	stateLoaded(state) {

		this.hall.updateActive( state.player );
		this.saveHall();

	},

	/**
	 * Wipe current player data.
	 */
	clearActive(){

		// clear hall char.
		window.localStorage.setItem( this.activeLoc(), null );

	},

	/**
	 * @returns {string} - returns the JSON string for the current
	 * player slot, or null.
	 */
	loadActive(){

		try {

			let store = window.localStorage;
			let str = store.getItem( this.activeLoc() );

			// attempt load from legacy save.
			if ( !str ) {

				console.warn('NO CUR LOC. GETTING LEGACY CHAR.');
				str = store.getItem( this.legacySave() );

			} else console.warn('Hall-Char Loaded');

			return str;

		} catch (e ) {

			console.error(e);
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
			console.error(e);
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
			console.error(e);
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
			console.error(e);
		}

	},

	/**
	 * Save loc for Active wizard.
	 * @returns {string} - save location for current char file.
	 */
	activeLoc() {
		return SAVE_DIR + CHARS_DIR + this.hall.active;
	},

	settingsLoc(){
		return SAVE_DIR + SETTINGS_DIR + this.hall.active;
	},

	saveHall(){

		console.log('SAVING HALL');
		try {

			let json = JSON.stringify( this.hall );
			if ( json ) {
				window.localStorage.setItem( this.SAVE_DIR + HALL_FILE, json );
			}

		} catch(e){

			console.error(e);

		}

	},

	init(){
	},

	newChar() {
	},

	/**
	 * Set information for the current character.
	 * @param {*} charInfo
	 */
	setInfo( charInfo ) {
	},

	setName(name){
	},

	setLevel(level) {
	},

	setTitle(title){
	}

}