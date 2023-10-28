import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import { JSONLoad } from "../util/jsonLoader";
import Events from '../events';

const StringFormat = firebase.storage.StringFormat;

window.firebase = firebase;

/**
 * @const {string} USER_SAVES - storage path to user saves.
 */
const USER_SAVES = 'usersaves';

const Config = {
	apiKey: "AIzaSyDa2Qj2VQvTzhG0MwzxS-IhQy9LYpCgrRM",
	authDomain: "theory-of-magic-49589.firebaseapp.com",
	databaseURL: "https://theory-of-magic-49589.firebaseio.com",
	projectId: "theory-of-magic-49589",
	storageBucket: "theory-of-magic-49589.appspot.com",
	messagingSenderId: "347528879664",
	appId: "1:347528879664:web:1ba41f1286d54923e317f5"
 };


/**
 * Remote management using Google Firebase.
 */
export const FBRemote = {

	get userid() { return this.auth.currentUser.uid; },
	get loggedIn(){ return this.auth.currentUser != null; },

	init(){

		firebase.initializeApp( Config );
		this.auth = firebase.auth();

		this.auth.onAuthStateChanged( user=>{

			if ( user ) console.log('AUTH: ' + user.uid );
			Events.dispatch('login-changed', user!=null);

		});

	},

	logout(){ return this.auth.signOut(); },

	login(uname, pw ) {
	},

	register( email, pw ) {
	},

	/**
	 * Delete all chars from current hall.
	 * @param {*} hid
	 */
	deleteHall( hid ){

		return null;

	},

	/**
	 * load player hall file, if any.
	 * @returns {Promise.<object>}
	 */
	loadHall(){

		var store = firebase.storage().ref( this.hallDir( this.userid ) );
		return store.getDownloadURL().then( url=>JSONLoad(url, false), err=>{
			console.warn(err);
			throw err;
		});
	},

	/**
	 *
	 * @param {} charid
	 * @returns {Promise<object>} json save object, or null.
	 */
	loadChar( charid){

		var store = firebase.storage().ref( this.saveDir( this.userid, charid ) );
		console.log('LOADING FIREBASE: ' + charid );
		return store.getDownloadURL().then( url=>JSONLoad(url, false), err=>{
			console.warn(err);
			return null;
		});

	},

	/**
	 *
	 * @param {string} charid
	 * @returns {Promise.<object>}
	 */
	deleteChar( charid ) {
		return firebase.storage().ref( this.saveDir(this.userid, charid ) ).delete();
	},

	/**
	 *
	 * @param {string} save
	 * @param {string} charid
	 * @returns {Promise.<object>}
	 */
	saveChar( save, charid ){

		var store = firebase.storage().ref( this.saveDir( this.userid, charid ) );
		return store.putString( save, StringFormat.RAW );

	},

	/**
	 *
	 * @param {*} save
	 * @param {*} hid
	 * @returns {Promise<object>}
	 */
	saveHall( save, hid ) {
		var store = firebase.storage().ref( this.hallDir( this.userid ) );
		return store.putString( save, StringFormat.RAW );
	},

	hallDir:( uid ) => { return USER_SAVES + '/' + uid + '/hall.json'; },

	saveDir:( uid, pid ) => { return USER_SAVES + '/' + uid + '/' + pid + '.json' }

}

FBRemote.init();