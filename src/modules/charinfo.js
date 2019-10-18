/**
 * Character stub for Hall of Wizards.
 */
export default class CharInfo {

	toJSON(){

		if ( this.empty ) return undefined;

		return {
			name:this.name,
			level:this.level,
			gclass:this.gclass,
			title:this.title||undefined,
			gender:this.gender||undefined,
			school:this.school||undefined,
			points:this.points||undefined
		}

	}

	get name() { return this._name; }
	set name(v) { this._name =v;}

	get level(){return this._level;}
	set level(v) {this._level=v;}

	get title(){return this._title;}
	set title(v){ this._title =v;}

	get gender(){return this._gender;}
	set gender(v){ this._gender =v;}

	get school() { return this._school; }
	set school(v) { this._school = v; }

	get points() { return this._points; }
	set points(v) { this._points=v;}

	constructor( vars=null ){

		if ( vars ) Object.assign( this,vars );
		if ( !this.name ) this.empty = true;

		if ( !this.points ) this.points = 0;

	}

}