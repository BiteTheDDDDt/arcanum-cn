import Game from '../game';

/**
 * CURRENTLY UNUSED.
 */
export default class Home {

	/**
	 * @property {Upgrade} item - current home item.
	 */
	get item() { return this._item;}
	set item(v) { this._item =v;}

	get furniture() { return this._furniture; }
	set furniture(v) { this._furniture = v;}

	constructor(vars=null){

		if ( vars ) Object.assign(this, vars);

		this._furniture = this._furniture || [];
		this._item = this._item || null;

	}

}