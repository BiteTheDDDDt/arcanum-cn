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
	initAlters( gs ){

		let props = this.alters;
		if ( !props ) return;
		if ( typeof props === 'string') {
			props = props.split(',');
		}

		let len = props.length;
		let a = [];
		for( let i = 0; i < len; i++ ) {

			let p = gs.getData( props[i] );
			if (!p ) continue;
			a.push(p);

		}

		this.alters = a;
	},

	addAlter( prop ) {

		if (!prop) return;

		if ( prop.alter ) this.applyMods( prop.alter, 1, this );

		if ( !Array.isArray(this.alters ) ) this.alters = [];
		else if ( this.alters.includes(prop) ) return;

		this.addAdj( prop.adj || prop.name, prop );
		this.alters.push(prop);

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