import {
	Stitch,
	RemoteMongoClient,
	UserPasswordCredential,
	UserPasswordAuthProviderClient,
	UserApiKeyCredential,
	BSON
} from "mongodb-stitch-browser-sdk";

const APP_ID = 'arcanum-yrpin';
const DB = 'arcanum';
const SAVES_TABLE = 'usersaves';

export const MongoRemote = {

	get userid(){return this.client.auth.user.id },
	get loggedIn(){ return this.client.auth.isLoggedIn; },

	init() {

		this.client = Stitch.initializeDefaultAppClient( APP_ID );
		this.mongodb = this.client.getServiceClient( RemoteMongoClient.factory, "mongodb-atlas" );

		if ( this.loggedIn ) this.showUser();

	},

	register( email, pw ) {

		const emailClient = Stitch.defaultAppClient.auth.getProviderClient( UserPasswordAuthProviderClient.factory );
		return emailClient.registerWithEmail( email, pw );

	},

	/**
	 * Attempt login with api key.
	 * @param {string} key
	 */
	keyLogin(key){

		Stitch.defaultAppClient.auth.loginWithCredential( new UserApiKeyCredential(key) ).then(
			keyid=>{

			},err={

			}
		)

	},

	login( user, pw ){

		return this.client.auth
		.loginWithCredential( new UserPasswordCredential( user, pw ) ).then(
		user=>{
			this.showUser();
			return user;
		},
		err=>{
			console.error(err)
		}
	)

	},

	showUser(){
		console.dir( this.client.auth.user, 'user login' );
	},

	logout(){
		this.client.auth.logout();
	},

	/**
	 *
	 * @param {*} pid
	 * @returns {Promise.<string>} resolves to game data or null.
	 */
	loadChar( pid ){

		const saves = this.mongodb.db( DB ).collection( SAVES_TABLE );
		let search = { userid:this.userid };
		if ( pid ) search.pid = pid;

		return saves.findOne( search ).then( res=>{

			if (res ) {

				console.dir( res, 'DB CHAR LOADED');
				if ( res.save ) return res.save;
				return res;

			} else {
				console.warn('DB LOAD: NO MATCH FOUND' );
			}

			return null;

		}, err=>null );

	},

	/**
	 *
	 * @param {*} json
	 * @param {string} pid - player id.
	 */
	saveChar( json, pid ){

		let doc = {
			pid:pid,
			save:json,
			userid:this.client.auth.user.id
		};

		const saves = this.mongodb.db( DB ).collection( SAVES_TABLE );
		saves.findOneAndUpdate( { pid:pid, userid:doc.userid }, doc, {upsert:true} ).then( res=>{

			if ( res ) {
				console.dir(res,'CHAR SAVED: ' + res.upsertedId );
				if ( res.upsertedId ) {
					return res.upsertedId;
				}
			}

		},
		err=>{
			console.error( err );
		});

	},

	delChar(_id){
	}


};

MongoRemote.init();