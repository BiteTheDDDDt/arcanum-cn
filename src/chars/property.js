import Base, {mergeClass} from '../items/base';
import { assign } from 'objecty';

export default class Property {

	get isRecipe(){return true}

	constructor(vars=null) {

		if ( vars ) assign( this, vars);

	}

}

mergeClass( Property, Base );