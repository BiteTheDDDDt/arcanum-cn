import Action from './action';
import { setModCounts } from './base';
import { canTarget } from '../values/consts';
import Enchanting from '../composites/enchanting';


export default class Enchant extends Action {

	/**
	 * @compat @deprecated
	 */
	get targets(){return this.only}
	set targets(v){ this.only =v; }

	/**
	 * @property {string} only - target type, name, kind, or tag, to which
	 * the enchantment can be applied.
	 */
	get only(){return this._only;}
	set only(v){this._only = typeof v === 'string' ? v.split(',') : v;}

	constructor(vars){

		super(vars);

		this.verb = this.verb || 'enchanting';

		this.level = this.level || 1;
		this.need = this.need || 'enchantsource';

		if ( this.mod ) setModCounts( this.mod, 1);

	}

	/**
	 * Begin using Enchant on item. Increase item level immediately.
	 * @param {GData} targ
	 * @returns {Runnable}
	 */
	beginUseOn( targ ) {
		return new Enchanting( this, targ );
	}

	/**
	 * Called when enchant completes on a target.
	 * @param {*} targ
	 */
	useOn( targ ) {

		if ( !targ) return;

		targ.enchants += this.level;

		if ( this.adj && !targ.name.includes(this.adj) ) {

			targ.name += ' ' + this.adj;

		} else if ( !targ.name.includes('Enchanted') ) targ.name = 'Enchanted ' + targ.name;

		targ.busy = false;

		this.exec();

	}

	/**
	 * Called when enchant stopped.
	 * @param {*} targ
	 */
	onStop(targ){

		if ( targ) {
			targ.busy = false;
		}
	}

	/**
	 * Catch complete
	 */
	complete(){
	}

	/**
	 * Test if enchantment can be applied to target item.
	 * @param {Item} targ
	 */
	canUseOn( targ ) {

		let itLevel = targ.level || 1;
		if ( (targ.enchants + this.level > itLevel) || targ.busy ) return false;

		return !this.only || canTarget( this.only, targ );

	}

}