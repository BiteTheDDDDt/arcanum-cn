import Base, {mergeClass} from './base';
import { mergeSafe} from 'objecty';

const ItemDefaults = {
	stack:true,
	consume:true
}

/**
 * @class Item
 * Carryable or equippable instanced Item.
 * An instanced item can be created, destroyed, discarded, etc.
 */
export default class Item {

	/**
	 * @property {object} onuse - effect to apply on 'use' action.
	 * might be replaced with 'effect' since it seems to be the same.
	 */

	toJSON() {

		let data = this.excludeJSON() || {};

		data.id = this.id;
		data.recipe = this.recipe;
		data.value = this.value;

		return data ? data : undefined;

	}

	get instance() { return true; }

	/**
	 * @property {string} recipe - id of item template used to instance this item.
	 */
	get recipe() { return this.template?  this.template.id : this._id; }
	set recipe(v) {}

	/**
	 * @property {boolean} consume - whether the item is consumed when used.
	 */
	get consume() { return this._consume; }
	set consume(v) { this._consume = v;}

	/**
	 * @property {boolean} stack - whether the item should stack.
	 */
	get stack() { return this._stack; }
	set stack(v) { this._stack = v; }

	get defaults() { return this._defaults || ItemDefaults }
	set defaults(v) { this._defaults = v;}

	constructor( vars=null ) {

		if ( vars ) Object.assign( this, vars );

		if ( this.consume === null || this.consume === undefined ) this.consume = this.defaults.consume;
		if ( this.stack === null || this.stack === undefined ) this.stack = this.defaults.stack;

	}

	canUse(g) {
		return this.consume || this.onuse;
	}

	onUse( g, targ, inv=null ) {

		if ( this.consume === true ) {
			this.value--;
			if ( this.value <= 0 ) ( inv || g.state.inventory ).remove( this );
		}

		if ( this.onuse ) {

			if (this.onuse.dot ) {
				g.state.player.addDot( new Dot( this.onuse.dot, this.id, this.name) );
			}
			g.applyEffect( this.onuse );

		}

	}

	/**
	 * Non-stacking. Does not apply.
	 * @param {*} g
	 */
	amount(g) {
	}

	maxed(){
		return (this.stack === false &&this.value>0) || ( this.max && this.value >= this.max );
	}

	/**
	 * does nothing.
	 */
	revive( state ){

		if ( typeof this.template ==='string' ) this.template = state.getData( this.template );
		if ( this.template ) {
			console.log('it revive from: ' + this.template );
			mergeSafe( this, this.template);
		}

	}

}

mergeClass( Item, Base );