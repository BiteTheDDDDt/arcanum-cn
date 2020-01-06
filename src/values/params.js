import {assign} from 'objecty';

/**
 * Marks object as params to instantiate other objects.
 */
export default class Params {

	constructor( vars ){

		assign(this,vars);

	}

}