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
		console.log('LOCAL SAVE AT: ' + this.charLoc(charid ));
		window.localStorage.setItem( this.charLoc( charid ), data );
	},

	loadChar( charid ){
		let str = window.localStorage.getItem( this.charLoc( charid ) );

		console.log('LOCAL LOAD CHAR: ' + this.charLoc(charid) );
		if ( str ) {
			console.log('loading LOCAL: ' + charid );
			return JSON.parse(str);
		}
		console.log('CHAR NOT FOUND');
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
		console.log('LOCAL LOAD HALL: ' + this.hallLoc(hid) );
		if ( str) return JSON.parse(str);
		console.log('LOCAL HALL NOT FOUND');
		return null;
	},


	charLoc( charid ) { return SAVE_DIR + CHARS_DIR + charid },

	hallLoc( hid ){ return (SAVE_DIR + hid); }

}