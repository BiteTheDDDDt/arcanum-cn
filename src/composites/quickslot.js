/**
 * Slot in quickslot bar.
 */
export default class QuickSlot {

	toJSON(){

		if ( this._item || this.recipe ) {


			if ( !this.recipe ) return this._item.id;
			return {
				item:this.item.id,
				recipe:this.recipe
			}

		}

		return undefined;

	}

	get name() { return this._item ? this._item.name : ''; }

	get item() { return this._item; }
	set item(v) {

		this._item = v;

		this.recipe = typeof v === 'object' ? v.recipe : null;

	}

	/**
	 * @property {boolean} - whether slotted item is an instanced item.
	 * if item is null, game searches for alternate item instanced from same recipe.
	 */
	get instance() { return this._instance; }
	set instance(v) { this._instance = v;}

	/**
	 * @property {string} recipe - recipe of the item, if any.
	 * used to find a similar item if the original item reference
	 * runs out.
	 */
	get recipe() {return this._recipe;}
	set recipe(v) {
		this.instance = v != null;
		this._recipe = v;
	}

	/**
	 * All quickSlots are created at startup, so vars is always
	 * JSON data or null.
	 * @param {Object} [vars=null]
	 */
	constructor( vars=null ) {

		if ( vars ) {

			if ( typeof vars === 'string') {

				this._item = vars;

			} else if ( typeof vars === 'object' ) {

				this._item = vars.item;
				this._recipe = vars.recipe;

			}

		} else this.item = null;

	}

	/**
	 * @returns {GData} target of the quickSlot item.
	 */
	getTarget() {
	}

	/**
	 *
	 * @param {Game} g
	 */
	use( g ) {
	}

	revive(gs) {

		if ( this._item ) this.item = gs.findData( this._item, false );
		else if ( this.recipe ) {

			if ( this.recipe ) {

				// no item.
				this.item = gs.findInstance( this.recipe, true );

			}

		}

	}

}