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

	clearAll(){
	},

	manualSave( charid ){
		return this.saveChar( charid, MANUAL_SAVE_WAIT );
	},

	saveChar( charid, minWait=MIN_SAVE_WAIT ) {

		var t = Date.now();
		if ( t - this.lastSave < minWait ) return null;
		this.lastSave = t;

		return FBRemote.saveChar(charid );
	},

	saveHall( charid ){
	},

	loadChar( charid ){
		return FBRemote.loadChar();
	},

	loadHall( charid ){
		return null;
	}

}