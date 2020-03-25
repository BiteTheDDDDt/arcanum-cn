import Base, {mergeClass} from '../items/base';
import { assign } from 'objecty';

export default class Property {

	get isRecipe(){return true}

	get exclude(){return this._exclude;}
	set exclude(v) {
		this._exclude = typeof v === 'string' ? v.split(',') : v;
	}

	get only(){return this._only;}
	set only(v) {
		this._only = typeof v === 'string' ? v.split(',') : v;
	}

	constructor(vars=null) {

		if ( vars ) assign( this, vars);

		console.log('prop name: ' + this.name );
	}

}

mergeClass( Property, Base );