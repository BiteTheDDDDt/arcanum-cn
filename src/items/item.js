import Base, {mergeClass} from './base';
import {assign, cloneClass } from 'objecty';
import { ParseMods } from 'modules/parsing';
import Instance from './instance';
import RValue from '../values/rvals/rvalue';

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

		if ( this.enchants && this.enchants.length>0){
			data.enchants = this.enchants.join(',');
		}

		data.cnt = this.count || undefined;

		data.id = this.id;
		data.recipe = this.recipe;

		return data ? data : undefined;

	}

	/**
	 * @property {string[]} enchants - ids of enchantments applied.
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
	 * @property {number} enchantTot - total level of all enchantments applied.
	 */
	get enchantTot(){return this._enchantTot}
	set enchantTot(v){
		this._enchantTot=v;
	}

	/**
	 * @property {number} enchantMax - max sum of enchant levels applied.
	 */
	get maxEnchants() { return this._maxEnchants; }
	set maxEnchants(v) { this._maxEnchants=v;}

	/**
	 * @property {boolean} consume - whether to consume the item on use.
	 */
	get consume() { return this._consume; }
	set consume(v) { this._consume = v;}

	/**
	 * @property {RValue} count - count of item held.
	 */
	get count(){ return this._count; }
	set count(v){this._count = new RValue(v); }

	/**
	 * @property {boolean} stack - whether the item can stack.
	 */
	get stack() { return this._stack; }
	set stack(v) { this._stack = v; }

	get defaults() { return this._defaults || ItemDefaults }
	set defaults(v) { this._defaults = v;}

	constructor( vars=null, save=null ) {

		if ( vars ) { cloneClass( vars, this ); }
		if ( save ) assign(this,save);

		if ( !this.maxEnchants ) this.maxEnchants = 0;
		if ( !this.enchantTot ) this.enchantTot = 0;

		if ( !this.count ) {

			if ( vars ) {
				if ( vars.cnt ) this.count = vars.cnt;
				else if ( vars.val ) this.count = vars.val;
			}
			if ( !this.count ) this.count = 1;

		}
		this.value = 0;

		if ( this.consume === null || this.consume === undefined ) this.consume = this.defaults.consume;
		if ( this.stack === null || this.stack === undefined ) this.stack = this.defaults.stack;

	}

	/**
	 * Test if item has an enchantment.
	 * @param {string} id
	 * @returns {boolean}
	 */
	hasEnchant(id){
		return this._enchants && this._enchants.includes(id);
	}

	canPay(cost) { return this.count >= cost; }

	canUse(g) { return this.consume || this.use; }

	onUse( g, inv ) {

		if ( this.consume === true ) {
			this.count--;
			if ( this.count <= 0 ) ( inv || g.state.inventory ).remove( this );
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

	/**
	 * Do nothing when item mod changes.
	 */
	modChanged(){
	}

	maxed(){
		return (this.stack === false &&this.count>0) || ( this.max && this.count >= this.max );
	}

	revive( gs ){

		if ( typeof this.template ==='string' ) this.template = gs.getData( this.template );
		/*if ( this.template ) {
			//console.log('it revive from: ' + this.template );
			//cloneClass( this.template, this );
		}*/

		if ( this.mod ) this.mod = ParseMods( this.mod, this.id, this );

	}

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

	}

	/**
	 *
	 * @param {Enchant} e - enchantment being added.
	 */
	addEnchant( e ) {

		if ( !this.enchants ) this.enchants = [];
		this.enchants.push(e.id);

		this.addAdj( e.adj, e, 'enchanted');

		this.enchantTot += e.level || 0;

	}

	/**
	 *
	 * @param {GameState} gs
	 */
	begin(gs) {

		let tot = 0;

		let enchants = this.enchants;
		if ( enchants && Array.isArray(enchants) ) {

			for( let i = enchants.length-1; i>= 0; i-- ) {

				let data = gs.getData( enchants[i] );
				if ( data === undefined ) continue;

				//if ( data.mod ) this.applyMods( data.mod );

				tot += Number(data.level) || 0;

			}

		}

		this.enchantTot = tot;

	}


}

mergeClass( Item, Base );
mergeClass( Item, Instance );