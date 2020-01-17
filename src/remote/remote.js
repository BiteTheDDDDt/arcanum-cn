import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import { JSONLoad } from "../util/jsonLoader";
import Events from '../events';

const StringFormat = firebase.storage.StringFormat;

window.firebase = firebase;

/**
 * @const {string} USERSAVES - storage path to user saves.
 */
const USERSAVES = 'usersaves';

const firebaseConfig = {
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

	get userid() {
		return this.auth.currentUser.uid;
	},
	get loggedIn(){
		return this.auth.currentUser != null;
	},

	init(){

		firebase.initializeApp( firebaseConfig );
		this.auth = firebase.auth();

		this.auth.onAuthStateChanged( user=>{
			console.log('AUTH STATE CHANGED: ' + user.uid );
			Events.dispatch('login-changed', user!=null);
		});

	},

	logout(){
		return this.auth.signOut();
	},

	login(uname, pw ) {
	},

	register( email, pw ) {
	},

	loadChar( pid='default'){

		var store = firebase.storage().ref( USERSAVES + '/' + this.userid + '/' + pid );
		return store.getDownloadURL().then( url=>JSONLoad(url, false), err=>{
			console.warn(err);
			return null;
		});

	},

	/**
	 *
	 * @param {string} save
	 * @param {string} [pid='default']
	 */
	saveChar( save, pid='default' ){

		var store = firebase.storage().ref( USERSAVES + '/' + this.userid + '/' + pid );
		if (!store) console.warn('no data store: ' + store);
		console.log('UPLOADING FILE DATA');

		return store.putString( save, StringFormat.RAW );

	}

}

FBRemote.init();