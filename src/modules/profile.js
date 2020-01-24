import Hall from "./hall";
import Settings from './settings';
import Events, { LEVEL_UP, CHAR_NAME, CHAR_TITLE, CHAR_CLASS } from "../events";

import Module from "./module";
import { Persist } from "./persist/persist";

const CHARS_DIR = 'chars/';
const HALL_FILE = 'hall';
const SETTINGS_DIR = 'settings/';

/**
* @const {string} SAVE_DIR - global save directory.
*/
const SAVE_DIR = '';

/**
 * Control access to all local storage and profile information.
 */
export default {

	/**
	 * @property {Hall} hall
	 */
	hall:null,

	/**
	 * @property {Object} active - reactive profile information for Vue.
	 */
	active:{
		loggedIn:false
	},

	get loggedIn(){return this.active.loggedIn},
	set loggedIn(v){this.active.loggedIn=v},

	/**
	 * Load data files for hall.
	 * @param {object} save - save data of hall.
	 * @returns {Promise.<HallData>}
	 */
	loadHallData( save ) {

		let module = new Module();
		return module.load( HALL_FILE ).then( ()=>module.instance( save ));

	},

	/**
	 * Load Hall information.
	 * @param {object} data - optional data loaded from file.
	 */
	async loadHall( data=null ){

		if ( !data ) {

			data = Persist.loadHall();

			if ( data ) {

				try {
					data = JSON.parse(data);
				} catch(e) {console.error( e.message + '\n' + e.stack ); }
			}

		}

		data = await this.loadHallData( data );

		this.hall = new Hall(data);

	},

	/**
	 * active player info changed.
	 * update and save hall data.
	 */
	onCharLevel( player, lvl ) {

		this.hall.setLevel( player, lvl );
		this.saveHall();

	},

	/**
	 * active player info changed.
	 * update and save hall data.
	 */
	updateChar( player, slot=-1 ) {

		this.hall.updateChar( player, slot );
		this.saveHall();

	},

	/**
	 * Set name of Wizards hall.
	 * @param {*} s
	 */
	setHallName(s){

		this.hall.name = s;
		this.saveHall();

	},

	/**
	 * set active player index.
	 * @param {number} slot - slot to load.
	 * @param {GameState} state - current state, for saving current.
	 * sort of stupid to have this here?
	 */
	setActive( slot, state ) {

		this.hall.updateChar( state.player );

		if ( this.saveActive( state ) ) {

			this.hall.setActive( slot );
			this.saveHall();

		} else console.error( 'CUR CHAR NOT SAVED');

	},

	/**
	 * @returns {.<string,GData>} special hall data items.
	 */
	getHallItems(){ return this.hall.items; },

	/**
	 * Game of current player/game loaded.
	 * @param {Game} game
	 */
	gameLoaded(game) {

		let p = game.state.player;
		let slot = this.hall.hidSlot( p.hid );

		if ( slot >= 0 ) {
			this.hall.setActive( slot );
		}
		this.hall.updateChar( p );

		this.saveHall();
		//this.hall.calcPoints( game );

		Events.add( LEVEL_UP, this.onCharLevel, this );
		Events.add( CHAR_NAME, this.updateChar, this );
		Events.add( CHAR_TITLE, this.updateChar, this );
		Events.add( CHAR_CLASS, this.updateChar, this );


	},

	dismiss( slot ) {

		if ( this.hall.dismiss(slot) ) {

			Persist.deleteChar( slot );
			this.saveHall();

		}

	},

	/**
	 * @returns {string} - returns the JSON string for the current
	 * player slot, or null.
	 */
	loadActive(){

		try {

			let store = window.localStorage;
			let str = store.getItem( this.activeLoc() );

			return str;

		} catch (e ) {

			console.error( e.message + '\n' + e.stack );
			return null;

		}

	},

	/**
	 * Get JSON for complete save of hall and all wizrobes in it.
	 * @returns {object}
	 */
	getHallSave(){

		let data = {
			type:HALL_FILE,
			hall:this.hall,
			chars:[]
		};

		let max = Math.floor( this.hall.max );

		let chars = data.chars;
		for( let i = 0; i < max; i++ ) {

			let char = Persist.loadChar( this.charLoc(i) );

			// parse to avoid double string encoding.
			if ( char ) char = JSON.parse(char);

			chars.push( char || null );

		}

		return data;

	},

	/**
	 * Set the complete hall data from data file.
	 * @param {FullHall} data
	 */
	setHallSave( data ) {

		this.setCharDatas( data.chars );
		console.dir( data.hall );

		Persist.saveHall( JSON.stringify(data.hall) );

	},

	setCharDatas( chars ) {

		if ( !chars ) return;

		for( let i = chars.length-1; i >= 0; i-- ) {

			if ( chars[i] ) console.log( `HALL SAVE ${i}: ${chars[i].name}` );
			else console.log('HALL SAVE EMPTY: ' + i );

			var json = JSON.stringify(chars[i]);
			Persist.saveChar( this.charLoc(i), json);

		}

	},

	/**
	 * Save GameState of active wizard.
	 * @param {GameState} state
	 * @returns {string} json save data.
	 */
	saveActive( state ){

		try {

			let json = JSON.stringify( state );
			if ( json ) {
				Persist.saveChar( json );

			}

			this.saveSettings();

			return json;

		} catch(e) {
			console.error( e.message + '\n' + e.stack );
			return null;
		}

	},


	/**
	 * Wipe current player data and settings.
	 */
	clearActive(){

		// clear hall char.
		Persist.deleteChar( this.activeLoc() );



	},

	/**
	 * Load settings for active wizard.
	 * @returns {object}
	 */
	loadSettings() {

		try {

			let str = Persist.loadSettings();
			let data = JSON.parse( str );

			Settings.setSettings( data );

			return Settings.getAll();

		} catch (e ) {
			console.error( e.message + '\n' + e.stack );
		}

	},

	/**
	 * Save settings for active wizard.
	 */
	saveSettings(){

		try {

			let data = JSON.stringify( Settings );
			if ( data ) {
				Persist.saveSettings();
			}

		} catch (e){
			console.error( e.message + '\n' + e.stack );
		}

	},

	/**
	 * Save loc for Active wizard.
	 * @returns {string} - save location for current char file.
	 */
	activeLoc() { return SAVE_DIR + CHARS_DIR + this.hall.active; },

	hasHall() { return this.hall && this.hall.owned() },

	settingsLoc( ind ){
		return SAVE_DIR + SETTINGS_DIR + ( ind === undefined ? this.hall.active : ind );
	},

	/**
	 * Clear all stored data.
	 */
	clearAll(){
		Persist.clearAll();
	},

	charLoc:( ind ) =>(SAVE_DIR + CHARS_DIR + ind),

	hallLoc:()=>(SAVE_DIR + HALL_FILE),

	saveHall(){

		try {

			let json = JSON.stringify( this.hall );
			if ( json ) {
				Persist.saveHall(json);
			}

		} catch(e){

			console.error( e.message + '\n' + e.stack );

		}

	}

}