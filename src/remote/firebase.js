import * as firebase from "firebase/app";
import "firebase/auth";

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

	init(){

		firebase.initializeApp( firebaseConfig );
	}


}

FBRemote.init();