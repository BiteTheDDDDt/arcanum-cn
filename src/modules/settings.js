const Defaults = {

	saves:{
		autosave:true,
		remoteFirst:true,
		saveTime:30
	},
	darkMode:false,
	compactMode:false,
	curview:null,
	spells:{

	},
	skills:{
		hideMaxed:false
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

		darkMode:false,
		compactMode:false,
		spells:{

		}

	},

	getAll(){return this.vars;},

	/**
	 * Set value of a subkeyed object.
	 * @param {string} type
	 * @param {string} key
	 * @param {*} val
	 * @returns {*} the value set, for chaining.
	 */
	setSubVar( type, key, val) {

		let p = this.vars[type];
		if ( !p ) this.vars[type] = p = {};

		p[key] = val;

		return val;

	},

	/**
	 * Get subkeyed variable value.
	 * @param {string} type
	 * @param {string} key,
	 * @returns {*}
	 */
	getSubVar( type, key ) {

		let p = this.vars[type];
		if (!p )return null;
		return p[key];

	},

	/**
	 * Set base setting.
	 * @param {string} key
	 * @param {*} val
	 */
	set( key, val) { this.vars[key] = val; },

	get(key){ return this.vars[key] },

	/**
	 * Get vars sub-object.
	 * @param {*} type
	 */
	getSubVars( type ) {

		let vars = this.vars[type];
		if ( vars === undefined ) vars = this.vars[type] = {};

		return vars;

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

	}

};