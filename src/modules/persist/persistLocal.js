const SAVE_DIR = '';
const CHARS_DIR = 'chars/';

export const Local = {

	/**
	 * Clear all stored data.
	 */
	clearAll(){ window.localStorage.clear(); },

	deleteChar( charid ) {

		window.localStorage.setItem( this.charLoc(charid), null );
		window.localStorage.setItem( this.settingsLoc(charid), null);

	},

	saveChar( data, charid ) {
		window.localStorage.setItem( this.charLoc( charid ), data );
	},

	loadChar( charid ){
		return window.localStorage.getItem( this.charLoc( charid ) );
	},

	/**
	 *
	 * @param {string} data
	 */
	saveHall( data, hid ){
		window.localStorage.setItem( this.hallLoc( hid ), data );
	},

	loadHall( hid ){
		return window.localStorage.getItem( this.hallLoc( hid ) );
	},


	charLoc( charid ) { return SAVE_DIR + CHARS_DIR + charid },

	hallLoc( hid ){ return (SAVE_DIR + hid); }

}