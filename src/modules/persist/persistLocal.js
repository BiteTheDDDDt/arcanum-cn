const CHARS_DIR = 'chars/';
const HALL_FILE = 'hall';

export class Local {

	constructor(){
	}

	/**
	 * Clear all stored data.
	 */
	deleteAll(){ window.localStorage.clear(); }

	deleteChar( charid ) {

		window.localStorage.setItem( this.charLoc(charid), null );
		window.localStorage.setItem( this.settingsLoc(charid), null);

	}

	saveChar( charid, json ) {
		window.localStorage.setItem( this.charLoc( charid ), json );
	}

	loadChar(){
		return window.localStorage.getItem( this.charLoc( charid ) );
	}

	saveSettings(char) {
		window.localStorage.setItem( this.settingsLoc(), data );
	}

	loadSettings(char){
		return window.localStorage.getItem( this.settingsLoc() );
	}

	/**
	 *
	 * @param {string} data
	 */
	saveHall( data ){
		window.localStorage.setItem( this.hallLoc(), data );

	}

	loadHall(){
		return window.localStorage.getItem( this.hallLoc() );
	}

	settingsLoc(char){}

	charLoc( ind ) { return SAVE_DIR + CHARS_DIR + ind }

	hallLoc(){ return (SAVE_DIR + HALL_FILE); }

}