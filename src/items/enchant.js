import Action from './action';
import GData from './gdata';
import { setModCounts } from './base';
import { canTarget } from '../values/consts';
import Runnable from '../composites/runnable';
import Enchanting from '../composites/enchanting';


export default class Enchant extends Action {

	/**
	 * @property {string} target - target type, name, kind, or tag, to which
	 * the enchantment can be applied.
	 */
	get targets(){return this._targets;}
	set targets(v){
		this._targets = typeof v === 'string' ? v.split(',') : v;
	}

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
			targ.enchants -= this.level;
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

		return !this._targets || canTarget( this._targets, targ );

	}

}