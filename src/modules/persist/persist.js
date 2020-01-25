import { Local } from "./persistLocal";

/**
 * @const {number} LOCAL_FAIL - error indicating local io failure.
 */
export const LOCAL_FAIL = 1;
/**
 * @const {number} REMOTE_FAIL - error indicating remote io failure.
 */
export const REMOTE_FAIL = 2;

const SETTINGS_DIR = 'settings/';

/**
 * Handles persisting data to various sources: local, remote, file.
 */
export const Persist = {

	remoteFirst:false,

	async clearAll(){

		Local.clearAll();
		if ( Remote) return Remote.clearAll();

	},

	async deleteChar( charid ) {

		Local.deleteChar(charid);
		if ( Remote) return Remote.deleteChar(charid);

	},

	/**
	 *
	 * @param {*} charid
	 * @param {*} json
	 * @returns {Promise.<object>}
	 */
	async saveChar( charid, json ) {

		Local.saveChar( charid, json );
		if ( Remote) return Remote.saveChar( charid, json );

	},


	/**
	 *
	 * @param {string} data
	 */
	async saveHall( data ){

		Local.saveHall(data);
		if ( Remote) return Remote.saveHall(data);

	},

	async loadChar( charid ){

		if ( this.remoteFirst && Remote ) {

			let res = await Remote.loadChar( charid );
			if (res ) return res;
			return Local.loadChar( charid );

		} else {

			let res = Local.loadChar( charid );
			if ( res || !Remote ) return res;
			return Remote.loadChar( charid );

		}


	},

	/**
	 * @returns {Promise.<object>}
	 */
	async loadHall(){

		if ( this.remoteFirst && Remote ) {

			let res = await Remote.loadHall();
			if ( res ) return res;
			return Local.loadHall();

		} else {

			let res = Local.loadHall();
			if ( res || !Remote ) return res;

			return Remote.loadHall();
		}

	},

	settingsLoc(char){ return SETTINGS_DIR + '/'+char +'/' },

	saveSettings(charid) {
		window.localStorage.setItem( this.settingsLoc(charid), data );
	},

	loadSettings(charid){
		return window.localStorage.getItem( this.settingsLoc(charid) );
	}

};

var Remote = null;
if ( __CLOUD ) {

	import( /* webpackChunkName: "remote" */ './persistRemote' ).then( mod=>{
		Remote = mod.Remote;
	});

}
