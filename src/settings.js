export default {

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

	load() {

		let str = window.localStorage.getItem( 'gameSettings');

		if ( str ) {

			let data = JSON.parse( str );
			for ( let p in data ) {
				this.vars[p] = data[p];
			}

		}

	},

	save(){

		let store = window.localStorage;
		if ( store ) {

			let json = JSON.stringify( this.vars );
			store.setItem('gameSettings', json );

		}

	}

};