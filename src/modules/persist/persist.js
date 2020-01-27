import { Local } from "./persistLocal";

/**
 * @const {number} LOCAL_FAIL - error indicating local io failure.
 */
export const LOCAL_FAIL = 1;
/**
 * @const {number} REMOTE_FAIL - error indicating remote io failure.
 */
export const REMOTE_FAIL = 2;

const HALL_FILE = 'hall';
const SETTINGS_DIR = 'settings/';

/**
 * Handles persisting data to various sources: local, remote, file.
 */
export const Persist = {

	remoteFirst:false,

	loggedIn(){return Remote && Remote.loggedIn;},

	async clearAll(){

		Local.clearAll();
		if ( Remote) return Remote.clearAll();

	},

	async deleteChar( charid ) {

		var file = this.charFile(charid);

		Local.deleteChar(file);
		if ( Remote) return Remote.deleteChar(file);

	},

	/**
	 * @param {string} data
	 * @param {string} charid
	 *
	 * @returns {Promise.<object>}
	 */
	async saveChar( data, charid ) {

		var file = this.charFile(charid);

		Local.saveChar( data, file );
		if ( Remote) return Remote.saveChar( data, file );

	},


	/**
	 * @param {string} data
	 * @param {?string} [hid=HALL_FILE]
	 */
	async saveHall( data, hid=HALL_FILE ){

		hid = HALL_FILE + '.json';
		Local.saveHall( data, hid );
		if ( Remote) return Remote.saveHall( data, hid );

	},

	async loadChar( charid ){

		var file = this.charFile(charid);

		if ( this.remoteFirst && Remote ) {

			console.log('REMOTE FIRST: ' + file );

			let res = await Remote.loadChar( file );
			if (res ) return res;
			return Local.loadChar( file );

		} else {

			console.log('LOCAL FIRST: ' + file );

			let res = Local.loadChar( file );
			if ( res || !Remote || !Remote.loggedIn ) return res;
			return Remote.loadChar( file );

		}


	},

	/**
	 * @returns {Promise.<object>}
	 */
	async loadHall( hid=HALL_FILE ){

		hid = HALL_FILE;
		if ( this.remoteFirst && Remote ) {

			let res = await Remote.loadHall( hid );
			if ( res ) return res;
			return Local.loadHall( hid );

		} else {

			let res = Local.loadHall( hid );
			if ( !res ) console.log('LOCAL HLAL NOT FOUND');
			if ( res || !Remote ) return res;

			return Remote.loadHall( hid );
		}

	},

	charFile: ( charid ) => {return charid},

	saveSettings( data, charid ) {
		window.localStorage.setItem( this.settingsLoc(charid), data );
	},

	loadSettings(charid){
		return window.localStorage.getItem( this.settingsLoc(charid) );
	},

	settingsLoc(charid){ return SETTINGS_DIR + '/'+charid +'/' },

};

var Remote = null;
if ( __CLOUD ) {

	import( /* webpackChunkName: "remote" */ './persistRemote' ).then( mod=>{
		Remote = mod.Remote;
	});

}
