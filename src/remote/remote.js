import * as firebase from "firebase/app";
import "firebase/auth";

window.firebase = firebase;

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

	get loggedIn(){
		return false;
	},

	init(){

		firebase.initializeApp( firebaseConfig );
	},

	login(uname, pw ) {
	},

	register( email, pw ) {
	},

	loadChar(){
	},

	saveChar( save, pid ){
	}

}

FBRemote.init();