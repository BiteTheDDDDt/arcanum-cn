/**
 * Wizards hall.
 */
export default class Hall {

	get chars() { return this._chars; }
	set chars(v) { this._chars = v; }

	constructor(vars=null ){

		if ( vars ) Object.assign(this, vars);

		if (!this.chars) this.chars = {};

	}

	save(){
	}

	load(){
	}

}