import Action from './action';
import GData from './gdata';

const defaults = {
	verb:'enchanting'
};

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

		this.level = this.level || 0;
		this.need = this.need || 'enchantsource';

	}

	/**
	 * Begin using Enchant on item. Increase item level immediately.
	 * @param {GData} targ
	 */
	beginUseOn( targ ) {
		targ.enchants = (targ.enchants || 0) + this.level;
		targ.busy = true;
	}

	/**
	 * Called when enchant is being used on target.
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
	 * Catch complete
	 */
	complete(){
	}

	/**
	 * Test if enchantment can be applied to target item.
	 * @param {Item} targ
	 */
	canApply( targ ) {

		let itLevel = targ.level || 1;
		if ( targ.enchants + this.level > itLevel || targ.busy ) return false;

		return !this._targets ||
			this._targets.some(t=> targ.type === t || targ.kind === t || targ.slot === t || targ.hasTag(t) );

	}

}