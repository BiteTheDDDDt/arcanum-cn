const SAVE_DIR = '';
const CHARS_DIR = 'chars/';
const HALL_FILE = 'hall';

export const Local = {

	/**
	 * Clear all stored data.
	 */
	clearAll(){ window.localStorage.clear(); },

	deleteChar( charid ) {

		window.localStorage.setItem( this.charLoc(charid), null );
		window.localStorage.setItem( this.settingsLoc(charid), null);

	},

	saveChar( charid, json ) {
		window.localStorage.setItem( this.charLoc( charid ), json );
	},

	loadChar(){
		return window.localStorage.getItem( this.charLoc( charid ) );
	},

	/**
	 *
	 * @param {string} data
	 */
	saveHall( data ){
		window.localStorage.setItem( this.hallLoc(), data );
	},

	loadHall(){
		return window.localStorage.getItem( this.hallLoc() );
	},


	charLoc( ind ) { return SAVE_DIR + CHARS_DIR + ind },

	hallLoc(){ return (SAVE_DIR + HALL_FILE); }

}