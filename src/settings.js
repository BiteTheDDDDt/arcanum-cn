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

		},
		skills:{
			hideMaxed:false
		}

	},

	/**
	 * Set value of a subkeyed object.
	 * @param {*} type
	 * @param {*} key
	 * @param {*} val
	 * @returns {*} the value set, for chaining.
	 */
	setVar( type, key, val) {

		let p = this.vars[type];
		if ( !p ) this.vars[type] = p = {};

		p[key] = val;

		return val;

	},

	/**
	 * Get vars sub-object.
	 * @param {*} type
	 */
	getVars( type ) {
		return this.vars[type];
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