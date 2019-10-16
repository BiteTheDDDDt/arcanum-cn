/**
 * Character stub for Hall of Wizards.
 */
export default class CharInfo {

	get name() { return this._name; }
	set name(v) { this._name =v;}

	get level(){return this._level;}
	set level(v) {this._level=v;}

	get title(){return this._title;}
	set title(v){ this._title =v;}

	get gender(){return this._gender;}
	set gender(v){ this._gender =v;}

	constructor( vars=null ){

		if ( vars ) Object.assign( this,vars );
		else {
		}

	}

}