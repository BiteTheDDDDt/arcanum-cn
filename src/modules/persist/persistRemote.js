import { FBRemote } from 'remote/remote';

/**
 * @const {number} MIN_SAVE_WAIT - minimum time in milliseconds for automatic
 * save uploading.
 */
const MIN_SAVE_WAIT = 3*60*1000;

/**
 * @const {number} MANUAL_SAVE_WAIT - minimum wait time in milliseconds
 * between manual save uploads.
 */
const MANUAL_SAVE_WAIT = 10*1000;

export const Remote = {

	lastSave:0,

	lastHallSave:0,

	clearAll(){
	},

	/**
	 *
	 * @param {*} charid
	 * @returns {Promise<object>}
	 */
	manualSave( charid ){
		return this.saveChar( charid, MANUAL_SAVE_WAIT );
	},

	/**
	 *
	 * @param {*} hallid
	 * @returns {Promise<object>}
	 */
	manualSaveHall(hallid){
		return this.saveHall(hallid, MANUAL_SAVE_WAIT );
	},

	/**
	 *
	 * @param {string} charid
	 * @param {*} minWait
	 * @returns {Promise<object>}
	 */
	saveChar( charid, minWait=MIN_SAVE_WAIT ) {

		var t = Date.now();
		if ( t - this.lastSave < minWait ) return null;
		this.lastSave = t;

		return FBRemote.saveChar(charid );
	},

	/**
	 *
	 * @param {string} hallid
	 * @param {*} minWait
	 * @returns {Promise<object>}
	 */
	saveHall( hallid, minWait=MIN_SAVE_WAIT ){

		var t = Date.now();
		if ( t - this.lastHallSave < minWait ) return null;
		this.lastHallSave = t;

		return FBRemote.saveHall( hallid );

	},

	/**
	 *
	 * @param {string} charid
	 * @returns {Promise<object>}
	 */
	loadChar( charid ){
		return FBRemote.loadChar( charid );
	},

	/**
	 *
	 * @param {string} hallid
	 * @returns {Promise<object>}
	 */
	loadHall( hallid ){
		return FBRemote.loadHall(hallid);
	}

}