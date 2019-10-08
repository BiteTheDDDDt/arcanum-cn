import Base, {mergeClass} from './base';
import Dot from '../chars/dot';
import { cloneClass } from '../util/util';
import { parseMods } from '../dataLoader';

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

		if ( !this.template && !this.recipe ) {

			//console.warn('MISSING TEMPLATE: ' + this.id );
			data.type = this.type;

		}

		data.id = this.id;
		data.recipe = this.recipe;

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

		this.value = this._value || 1;
		if ( this.consume === null || this.consume === undefined ) this.consume = this.defaults.consume;
		if ( this.stack === null || this.stack === undefined ) this.stack = this.defaults.stack;

	}

	canUse(g) {
		return this.consume || this.use;
	}

	onUse( g, targ, inv=null ) {

		if ( this.consume === true ) {
			this.value--;
			if ( this.value <= 0 ) ( inv || g.state.inventory ).remove( this );
		}

		if ( this.use ) {

			if (this.use.dot ) {
				g.state.player.addDot( new Dot( this.use.dot, this.id, this.name) );
			}
			g.applyEffect( this.use );

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
			//console.log('it revive from: ' + this.template );
			cloneClass( this.template, this );
		}

		if ( this.mod ) this.mod = parseMods( this.mod, this.id );

	}

}

mergeClass( Item, Base );