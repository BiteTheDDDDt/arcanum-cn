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
	 * Load all-wizards/Hall information.
	 */
	load(){

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
	 * State of current player/game loaded.
	 * @param {GameState} state
	 */
	stateLoaded(state){
		this.hall.playerLoaded( state.player );
	},

	/**
	 * Wipe current player data.
	 */
	clearCur(){

		// clear hall char.

		window.localStorage.setItem( this.getSaveLoc(), null );

	},

	/**
	 * @returns {string} - returns the JSON string for the current
	 * player slot, or null.
	 */
	loadCur(){

		try {

			let store = window.localStorage;
			let str = store.getItem( this.curSaveLoc() );

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
	 *
	 * @param {GameState} state
	 */
	saveCur( state ){

		try {

			let store = window.localStorage;

			let json = JSON.stringify( state );
			store.setItem( this.curSaveLoc(), json );

			return true;

		} catch(e) {
			console.error(e);
			return false;
		}

	},

	saveSettings(){
	},

	/**
	 * @returns {string} - save location for current char file.
	 */
	curSaveLoc() {
		return SAVE_DIR + CHARS_DIR + this.hall.active;
	},

	settingsLoc(){
		return SAVE_DIR + SETTINGS_DIR + this.hall.active;
	},

	/**
	 * Get JSON data of current character.
	 */
	charFile(){
	},

	/**
	 * Load active character.
	 */
	loadActive() {
	},

	saveHall(){

		try {

			let json = JSON.stringify( this.hall );
			store.setItem( this.SAVE_DIR + HALL_FILE, json );

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