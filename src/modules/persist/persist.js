import { Local } from "./persistLocal";
import { Remote } from './persistRemote';

/**
 * @const {number} LOCAL_FAIL - error indicating local io failure.
 */
export const LOCAL_FAIL = 1;
/**
 * @const {number} REMOTE_FAIL - error indicating remote io failure.
 */
export const REMOTE_FAIL = 2;

/**
 * Handles persisting data to various sources: local, remote, file.
 */
export const Persist = {

	remoteFirst:false,

	deleteAll(){

		Local.deleteAll();
		Remote.deleteAll();

	},

	deleteChar( charid ) {

		Local.deleteChar(charid);
		Remote.deleteChar(charid);

	},

	/**
	 *
	 * @param {*} charid
	 * @param {*} json
	 * @returns {Promise.<object>}
	 */
	saveChar( charid, json ) {

		Local.saveChar( charid, json );
		Remote.saveChar( charid, json );

	},


	/**
	 *
	 * @param {string} data
	 */
	saveHall( data ){

		Local.saveHall(data);
		Remote.saveHall(data);

	},

	async loadChar( charid ){

		if ( this.remoteFirst) {

			let res = await Remote.loadChar( charid );
			if (res ) return res;
			return Local.loadChar( charid );

		} else {

			let res = Local.loadChar( charid );
			if ( res ) return res;
			return Remote.loadChar( charid );

		}


	},

	/**
	 * @returns {Promise.<object>}
	 */
	async loadHall(){

		if ( this.remoteFirst ) {

			let res = await Remote.loadHall();
			if ( res ) return res;
			return Local.loadHall();

		} else {

			let res = Local.loadHall();
			if ( res ) return res;

			return Remote.loadHall();
		}

	},

	saveSettings(char) {
		return Local.saveSettings(char);
	},

	loadSettings(char){
		return Local.loadSettings(char);
	}

};