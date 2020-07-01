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

		if ( this.alters && this.alters.length>0){

			this.alters = this.alters.filter(function (el) 
			{
			  return el != null;
			});
			data.alters = this.alters.map( v=>v.id );
		}

		data.cnt = this.count || undefined;

		data.id = this.id;
		data.recipe = this.recipe;

		return data ? data : undefined;

	}

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

		//this.initAlters(gs);

	}

	begin(g){
		//console.log('BEGIN CALLED: ' + this.id );
		this.initAlters(g);
	}

}

mergeClass( Item, Base );
mergeClass( Item, Instance );