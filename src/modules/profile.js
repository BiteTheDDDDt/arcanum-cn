import Hall from "./hall";
import Settings from '../settings';

const HALL_FILE = 'hall';

/**
 * Control access to all local storage and profile information.
 */
export default {

	hall:null,

	/**
	 * @property {string} current - name of current character.
	 */
	current:null,

	/**
	 * @property {string} saveDir - global save directory.
	 */
	saveDir: __SAVE ? __SAVE + '/' : '',

	/**
	 * @returns {string} old save location.
	 */
	legacySave(){
		return this.saveDir + 'gameData';
	},

	/**
	 * Load information of all wizards.
	 */
	loadHall(){

		let str = window.localStorage.getItem( this.saveDir + HALL_FILE );
		if ( !str ) {

			this.hall = new Hall();

		} else {

			try {

				this.hall = new Hall( JSON.parse(str ) );

			} catch (e) {

				console.error(e);

			}

		}

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
			store.setItem( this.saveDir + HALL_FILE, json );

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