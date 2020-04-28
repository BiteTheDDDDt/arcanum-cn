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

	is( k ) {
		return this.type === k || this.kind === k || this.hasTag(k) || this.name === k;
	}


}