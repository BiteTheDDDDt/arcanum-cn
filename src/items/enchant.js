import Task from './task';
import GData from './gdata';
import { SetModCounts } from './base';
import { canTarget, ENCHANTSLOTS } from '../values/consts';
import Enchanting from '../composites/enchanting';


export default class Enchant extends Task {

	get isRecipe(){return true;}

	/**
	 * @property {string} only - limit target type by name, kind, or tag, to which
	 * the enchantment can be applied.
	 */
	get only(){return this._only;}
	set only(v){
		this._only = typeof v === 'string' ? v.split(',') : v;
	}

	get controller(){ return ENCHANTSLOTS; }

	constructor( vars ){

		super(vars);

		this.verb = this.verb || 'enchanting';

		this.level = this.level || 1;
		this.need = this.need || 'enchantsource';

		if ( this.alter ) SetModCounts( this.alter, 1);

	}

	/**
	 * Begin using Enchant on item. Increase item level immediately.
	 * @param {GData} targ
	 * @returns {Enchanting}
	 */
	beginUseOn( targ ) {
		return new Enchanting( this, targ );
	}

	/**
	 * Catch complete
	 */
	complete(){}

	/**
	 * Called when enchant is being used on target.
	 * @param {*} targ
	 * @param {Context} g - execution context, Game.
	 */
	useOn( targ, g ) {

		if ( !targ) return;
		targ.doAlter( this );

	}

	/**
	 * Test if enchantment can be applied to target item.
	 * @param {Item} targ
	 */
	canAlter( targ ) {

		if ( targ.hasEnchant(this.id) || (targ.enchants + this.level > targ.enchants.max) ) {
			return false;
		}

		//console.log('can target: ' + canTarget(this.only, targ));

		return !this.only || canTarget( this.only, targ );

	}

	/**
	 * Called when enchant stopped? Is it?
	 * @param {*} targ
	 */
	/*onStop(targ){
	}*/


}