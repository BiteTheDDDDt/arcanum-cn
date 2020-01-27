const SAVE_DIR = '';
const CHARS_DIR = 'chars/';

export const Local = {

	/**
	 * Clear all stored data.
	 */
	clearAll(){ window.localStorage.clear(); },

	deleteChar( charid ) {

		window.localStorage.setItem( this.charLoc(charid), null );

	},

	saveChar( data, charid ) {
		window.localStorage.setItem( this.charLoc( charid ), data );
	},

	loadChar( charid ){
		let str = window.localStorage.getItem( this.charLoc( charid ) );
		if ( str ) return JSON.parse(str);
		return null;
	},

	/**
	 *
	 * @param {string} data
	 */
	saveHall( data, hid ){
		window.localStorage.setItem( this.hallLoc( hid ), data );
	},

	loadHall( hid ){
		let str = window.localStorage.getItem( this.hallLoc( hid ) );
		if ( str) return JSON.parse(str);
		return null;
	},


	charLoc( charid ) { return SAVE_DIR + CHARS_DIR + charid },

	hallLoc( hid ){ return (SAVE_DIR + hid); }

}