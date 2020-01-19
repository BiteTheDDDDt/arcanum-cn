import { Local } from "./persistLocal";
import { Remote } from './persistRemote';

/**
 * Handles persisting data to various sources: local, remote, file.
 */
export const Persist = {

	deleteAll(){

		Local.deleteAll();

	},

	deleteChar( charid ) {

		Local.deleteChar(charid);

	},

	saveChar( charid, json ) {

		Local.saveChar( charid, json );

	},

	loadChar(){

		Local.loadChar();

	},

	saveSettings(char) {

		Local.saveSettings(char);
	},

	loadSettings(char){

		Local.loadSettings(char);

	},

	/**
	 *
	 * @param {string} data
	 */
	saveHall( data ){

		Local.saveHall(data);

	},

	loadHall(){

		Local.loadHall();

	}

};