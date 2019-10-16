const Defaults = {

	autoSave:true,
	saveTime:30,
	darkMode:false,
	compactMode:false,
	spells:{

	}

}

Object.freeze( Defaults );


export default {

	toJSON(){
		return this.vars;
	},

	/**
	 * @property {Object} vars - variables saved to browser.
	 */
	vars: {

		autoSave:true,
		saveTime:30,
		darkMode:false,
		compactMode:false,
		spells:{

		}

	},

	/**
	 * Set value of a subkeyed object.
	 * @param {*} type
	 * @param {*} key
	 * @param {*} val
	 */
	setVar( type, key, val) {

		let p = this.vars[type];
		if ( !p ) this.vars[type] = p = {};

		p[key] = val;

	},

	/**
	 * Get vars sub-object.
	 * @param {*} type
	 */
	getVars( type ) {
		return this.vars[type];
	},

	/**
	 * Set stored settings for the current wizard save.
	 * @param {*} data
	 */
	setSettings( data ) {

		this.vars = Object.assign( {}, Defaults );

		for ( let p in data ) {
			this.vars[p] = data[p];
		}

	},

	load() {

		/** @todo: access from global point. */
		let str = window.localStorage.getItem( this.saveLoc() );

		if ( str ) {

			let data = JSON.parse( str );
			for ( let p in data ) {
				this.vars[p] = data[p];
			}

		}

	},

	saveLoc() {
		(__SAVE ? __SAVE + '/' : '' ) + 'gameSettings'
	},

	save(){

		let store = window.localStorage;
		if ( store ) {

			let json = JSON.stringify( this.vars );
			store.setItem( this.saveLoc(), json );

		}

	}

};