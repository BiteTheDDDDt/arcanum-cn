import Proxy from "./proxy";

/**
 * Slot in quickslot bar.
 */
export default class QuickSlot extends Proxy {

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

	get name() {

		return super.item ? super.item.name :
		this.recipe || '';

	}

	get item() { return super.item; }
	set item(v) {

		super.item = v;

		if ( v && typeof v === 'object' ){

			// if id === recipe, the item is just using the recipe as a stand-in until item is found.
			if ( v.id !== this.recipe ) this.recipe = v.recipe || null;

		} else this.recipe = null;

	}

	/**
	 * @property {string} recipe - recipe of the item, if any.
	 * used to find a similar item if the original item reference
	 * runs out.
	 * @todo clean this up so recipes are reassigned to item automatically.
	 */
	get recipe() {return this._recipe;}
	set recipe(v) {

		this._recipe = v;
	}

	/**
	 * All quickSlots are created at startup, so vars is always
	 * JSON data or null.
	 * @param {Object} [vars=null]
	 */
	constructor( vars=null ) {

		super();

		if ( vars ) {

			if ( typeof vars === 'string') {

				this.item = vars;
				this.recipe = null;

			} else if ( typeof vars === 'object' ) {

				this.item = vars.item;
				this.recipe = vars.recipe;

			}

		} else {
			this.item = null;
			this.recipe = null;
		}

	}

	/**
	 * @returns {GData} target of the quickSlot item.
	 */
	slotTarget( g ) {

		// if the recipe.id === item.id then the recipe was being used as a representative stand-in until an item isntance
		// could be found.
		if ( this.item && !this.recipe ) {

			return this.item;

		} else if ( this.item ) {

			if ( this.item.value > 0 || (this.recipe !== this.item.id )) return this.item;


		} else if ( this.recipe ) return g.state.findInstance( this.recipe, true );

		return null;

	}

	/**
	 * Unused?!?!?
	 * @param {Game} g
	 */
	onUse( g ) {

		let targ = this.slotTarget(g);
		if ( targ != null && targ.value >0 ) targ.onUse(g);

	}

	revive(gs) {

		if ( this.item ) {

			//console.log('finding quickslot item: ' + this.item );

			var revive = gs.findData( this.item, false );
			if ( revive ) {
				//console.log('quickslot found: ' + revive.id );
				this.item = revive;
				return;
			}

		}

		// if the item didnt revive, need to rely on recipe.
		if ( this.recipe ) {

			// save recipe so item setter doesnt overwrite.
			let recipe = this.recipe;

			//console.log('finding slot recipie: ' + this.recipe );

			// no item. if a matching item type can't be found, the recipe item
			// is used as the quickbar rollover and a type will be searched on use.
			this.item = gs.findInstance( recipe, true ) || gs.getData( recipe );

		}

	}

}