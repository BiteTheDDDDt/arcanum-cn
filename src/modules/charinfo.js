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
			titles:this.titles||undefined,
			gender:this.gender||undefined,
			school:this.school||undefined,
			fame:this.fame||undefined,
			points:this.points||undefined
		}

	}

	get name() { return this._name; }
	set name(v) { this._name =v;}

	get level(){return this._level;}
	set level(v) {this._level=v;}

	get title(){return this._title;}
	set title(v){ this._title =v;}

	get fame() { return this._fame; }
	set fame(v){this._fame=v;}

	/**
	 * @property {number} - number of titles earned.
	 */
	get titles(){return this._titles; }
	set titles(v){this._titles =v;}

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
		if ( !this.fame ) this.fame = 0;
		if ( !this.titles ) this.titles = 0;
		if (!this.levels ) {
			console.log( ('empty: ' + this.empty ) + ' MISSING LEVEL: ' + this.name );
			this.levels = 0;
		}


	}

	/**
	 * @returns {number} - calculate point contribution from char stats.
	 */
	getPoints(){
		if ( this.empty ) return 0;
		return this.fame + ( this.titles + this.levels ) /10;
	}

}