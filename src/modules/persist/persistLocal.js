const CHARS_DIR = 'chars/';
const HALL_FILE = 'hall';

export class Local {

	constructor(){
	}

	/**
	 * Clear all stored data.
	 */
	deleteAll(){ window.localStorage.clear(); }

	deleteChar() {

		window.localStorage.setItem( this.charLoc(slot), null );
		window.localStorage.setItem( this.settingsLoc(slot), null);

	}

	saveChar() {
	}

	loadChar(){
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

	charLoc( ind ) { return SAVE_DIR + CHARS_DIR + ind }

	hallLoc(){ return (SAVE_DIR + HALL_FILE); }

}