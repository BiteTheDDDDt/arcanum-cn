/**
 * Functions/properties shared by instances.
 */
export default {

	get instanced() { return true; },

	/**
	 * @property {string} recipe - id of item template used to instance this item.
	 */
	get recipe() { return this.template?  this.template.id : this._id; },
	set recipe(v) { if ( !this.template ) this.template = v},

	get template(){ return this._template;},
	set template(v){this._template=v;},

	get mod(){return this._mod;},
	set mod(v){this._mod =v;},

	/**
	 * @property {Alter[]} alters - alterations applied to object.
	 */
	get alters(){ return this._alters; },
	set alters(v){ this._alters=v; },

	/**
	 * Map property strings to source property objects.
	 */
	initAlters( g ){

		let alters = this.alters || [];
		if ( typeof alters === 'string') {
			alters = alters.split(',');
		}

		let len = alters.length;
		let a = [];
		for( let i = 0; i < len; i++ ) {

			let p = g.getData( alters[i] );
			if (!p || (typeof p !== 'object') ) continue;
			else {

				a.push(p);

				if ( p.alter ) {
					console.log(this.id + ' INIT ALTER: ' + p.id );
					this.applyMods( p.alter, 1, this );
				}
			}

		}

		this.alters = a;
	},

	/**
	 * Add an alteration to the base instance.
	 * @param {Alter} alter
	 */
	doAlter( alter ) {

		if (!alter) {
			console.log('NO ALTER. NULL RETURN');
			return;
		}

		if ( alter.alter ) this.applyMods( alter.alter, 1, this );

		if ( !Array.isArray(this.alters ) ) this.alters = [];
		else if ( this.alters.includes(alter) ) return;

		this.addAdj( alter.adj || alter.name, alter );
		this.alters.push(alter);

	},

	/**
	 * Apply an adjective to the item's name.
	 * @param {string} adj
	 * @param {object} src - adjective source.
	 * @param {?string} [fallback=null] - fallback prefix to apply.
	 */
	addAdj( adj, src, fallback=null ) {

		if ( adj ) {

			if ( adj.includes( '%' ) ) {

				this.name = adj.replace( '%s', src.name ).replace( '%i', this.name );
				return;

			} else if ( !this.name.includes(adj) ) {

				this.name = adj + ' ' + this.name;
				return;

			}

		}

		if ( fallback ) this.addAdj( fallback, src );

	},

	is( k ) {
		return this.type === k || this.kind === k || this.hasTag(k) || this.name === k;
	}


}