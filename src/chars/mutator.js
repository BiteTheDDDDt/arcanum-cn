import Base, {mergeClass} from '../items/base';
import { assign } from 'objecty';
import { ParseMods } from '../modules/parsing';

/**
 * @class A Mutator alters an instanced object.
 */
export default class Mutator {

	get isRecipe(){return true}

	get exclude(){return this._exclude;}
	set exclude(v) {
		this._exclude = typeof v === 'string' ? v.split(',') : v;
	}

	get only(){return this._only;}
	set only(v) {
		this._only = typeof v === 'string' ? v.split(',') : v;
	}

	/**
	 * @property {object} alter - alteration mods applied to target.
	 */
	get alter(){
		return this._alter;
	}
	set alter(v) {
		this._alter = v;
	}

	get bonus(){return this._bonus;}
	set bonus(v){ this._bonus = v; }

	constructor(vars=null) {

		if ( vars ) assign( this, vars);

		if ( this.bonus ) this.bonus = ParseMods( this.bonus, this.id, 1 );

	}

}

mergeClass( Mutator, Base );