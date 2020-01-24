import Base, {mergeClass} from './base';
import {assign, cloneClass } from 'objecty';
import { ParseMods } from 'modules/parsing';
import Instance from './instance';

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

		let data = Base.toJSON.call(this);

		if ( !this.template && !this.recipe ) {

			//console.warn('MISSING TEMPLATE: ' + this.id );
			data.type = this.type;

		}

		if ( this.enchants && this.enchants.length > 0 ) data.enchants = this.enchants.join(',');

		data.id = this.id;
		data.recipe = this.recipe;

		return data ? data : undefined;

	}

	get instanced() { return true; }
	set instanced(v){}

	/**
	 * @property {string} recipe - id of item template used to instance this item.
	 */
	get recipe() { return this.template?  this.template.id : this._id; }
	set recipe(v) { if ( !this.template ) this.template = v}

	/**
	 * @property {string[]} enchants - ids of all enchantments applied.
	 */
	get enchants() {
		return this._enchants;
	}
	set enchants(v) {

		if ( typeof v === 'number') {
			/**@compat */
			this.enchantTot = v;

		} else if ( typeof v === 'string' ){

			this._enchants = v.split(',');

		} else if ( Array.isArray(v)){

			this._enchants = v;

		} else console.warn('invalid enchants: ' + v );

	}

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

		if ( vars ) assign(this,vars);

		this.value = this._value || 1;

		if ( this.consume === null || this.consume === undefined ) this.consume = this.defaults.consume;
		if ( this.stack === null || this.stack === undefined ) this.stack = this.defaults.stack;

	}

	canPay(cost) { return this.value >= cost; }

	canUse(g) {
		return this.consume || this.use;
	}

	onUse( g, inv ) {

		if ( this.consume === true ) {
			this.value--;
			if ( this.value <= 0 ) ( inv || g.state.inventory ).remove( this );
		}

		if ( this.use ) {

			if (this.use.dot ) {
				g.state.player.addDot( this.use.dot, this );
			}
			g.applyVars( this.use );

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
	revive( gs ){

		if ( typeof this.template ==='string' ) this.template = gs.getData( this.template );
		if ( this.template ) {
			//console.log('it revive from: ' + this.template );
			// STILL NECESSARY.
			cloneClass( this.template, this );
		}

		if ( this.mod ) this.mod = ParseMods( this.mod, this.id, this );
		if ( this.enchants ) this.reviveEnchants(gs);

	}

	addEnchant( e ) {

		if ( !this.enchants ) this.enchants = [];
		this.enchants.push(e);

		this.enchantTot += e.level || 0;

	}

	/**
	 *
	 * @param {GameState} gs
	 */
	begin(gs) {

		let enchants = this.enchants;
		if ( !enchants || !Array.isArray(enchants) ) return;

		let tot = this.enchantTot || 0;
		for( let i = enchants.length-1; i>= 0; i-- ) {

			let data = gs.getData( enchants[i] );
			if ( !data ) continue;

			console.log( this.id + ' REENCHANT: ' + data.id );
			if ( data.mod ) this.applyMods( data.mod );

			tot += data.level || 0;

		}

		this.enchantTot = tot;

	}


}

mergeClass( Item, Base );
mergeClass( Item, Instance );