import {
	Stitch,
	RemoteMongoClient,
	UserPasswordCredential,
	UserPasswordAuthProviderClient,
	BSON
} from "mongodb-stitch-browser-sdk";

const APP_ID = 'arcanum-yrpin';
const DB = 'arcanum';
const SAVES_TABLE = 'usersaves';

export class MongoRemote {

	loggedIn(){ return this.client.auth.isLoggedIn; }

	constructor(){

		this.client = Stitch.initializeDefaultAppClient( APP_ID );
		this.mongodb = this.client.getServiceClient( RemoteMongoClient.factory, "mongodb-atlas" );

		//this.anonLogin();

	}

	/*anonLogin(){

		return this.client.auth.loginWithCredential( new AnonymousCredential() ).then(
			user=>{console.dir(user, 'anon login')},
			err=>console.error(err)
		);

	}*/

	register( email, pw ) {

		const emailClient = Stitch.defaultAppClient.auth.getProviderClient( UserPasswordAuthProviderClient.factory );
		return emailClient.registerWithEmail( email, pw );

	}

	login( user, pw ){

		return this.client.auth
		.loginWithCredential( new UserPasswordCredential( user, pw ) ).then(
		user=>{
			console.log('logged in: ' + user.id );
			return user;
		},
		err=>{
			console.error(err)
		}
	)

	}

	logout(){
		this.client.auth.logout();
	}

	saveChar( save ){

		const saves = this.mongodb.db( DB ).collection( SAVES_TABLE );
		saves.replaceOne( { _id:save._id }, save, {upsert:true} ).then( res=>{

			console.dir(res,'CHAR SAVED');
			if ( res.upsertedId ) {

				// new id.

			}

		});

	}

	delChar(_id){
	}


}