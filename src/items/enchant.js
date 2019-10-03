import Action from './action';

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
	 * Called when enchant is being used on target.
	 * @param {*} it
	 */
	usingWith( it ) {

		console.log( this.id + ' enchant: ' + it.id );
		if ( this.adj && !it.name.includes(this.adj) ) {

			it.name += ' ' + this.adj;

		} else if ( !it.name.includes('Enchanted') ) it.name = 'Enchanted ' + it.name;

		it.enchants = (it.enchants || 0) + this.level;

		this.exec();

	}

	/**
	 * Catch complete
	 */
	complete(){
	}

	/**
	 * Test if enchantment can be applied to target item.
	 * @param {Item} it
	 */
	canApply( it ) {

		if ( it.enchants + this.level > it.level ) return false;

		return !this._targets ||
			this._targets.some(t=> it.type === t || it.kind === t || it.slot === t || it.hasTag(t) );

	}

}