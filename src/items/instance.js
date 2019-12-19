/**
 * Functions/properties shared by instances.
 */
export default {

	get instanced() { return true; },

	is( k ) {
		return this.type === k || this.kind === k || this.hasTag(k) || this.name === k;
	}


}