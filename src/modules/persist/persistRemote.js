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

	logout(){ return FBRemote.logout()},

	loggedIn(){return FBRemote.loggedIn},

	clearAll(){

		if ( !FBRemote.loggedIn ) return null;

	},

	tryRegister(email, pw ){

		console.log('try register: ' + email );

		if ( !this.remote ) return;

		this.remote.register(email,pw).then(
			()=>{
				this.dispatch('register-sent');
			},
			err=>{
				console.log('dispatch reg error');
				this.dispatch('register-error', err );
			}
		);

	},

	/**
	 *
	 * @param {*} charid
	 * @returns {Promise<object>}
	 */
	manualSave( data, charid ){
		return this.saveChar( data, charid, MANUAL_SAVE_WAIT );
	},

	/**
	 *
	 * @param {*} hallid
	 * @returns {Promise<object>}
	 */
	manualSaveHall( data, hallid){
		return this.saveHall( data, hallid, MANUAL_SAVE_WAIT );
	},

	/**
	 *
	 * @param {string} charid
	 * @param {*} minWait
	 * @returns {Promise<object>}
	 */
	saveChar( data, charid, minWait=MIN_SAVE_WAIT ) {

		if ( !FBRemote.loggedIn ) return null;

		console.log('saving remote: ' + charid );

		var t = Date.now();
		if ( t - this.lastSave < minWait ) return null;
		this.lastSave = t;

		return FBRemote.saveChar( data, charid );
	},

	/**
	 *
	 * @param {string} hallid
	 * @param {*} minWait
	 * @returns {Promise<object>}
	 */
	saveHall( data, hallid, minWait=MIN_SAVE_WAIT ){

		if ( !FBRemote.loggedIn ) return null;

		var t = Date.now();
		if ( t - this.lastHallSave < minWait ) return null;
		this.lastHallSave = t;

		return FBRemote.saveHall( data, hallid );

	},

	/**
	 *
	 * @param {string} charid
	 * @returns {Promise<object>}
	 */
	loadChar( charid ){

		if ( !FBRemote.loggedIn ) return null;

		return FBRemote.loadChar( charid );
	},

	/**
	 *
	 * @param {string} hallid
	 * @returns {Promise<object>}
	 */
	loadHall( hallid ){

		if ( !FBRemote.loggedIn ) return null;

		return FBRemote.loadHall(hallid);
	}

}