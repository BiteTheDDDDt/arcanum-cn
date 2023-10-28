/**
 * Character stub for Hall of Wizards.
 */
export default class CharInfo {

	toJSON(){

		if ( this.empty ) return undefined;

		return {
			name:this.name,
			pid:this.pid,
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

	/**
	 * @deprecated @compat
	 */
	get hid(){return this._pid}
	set hid(v){this.pid = v}

	get pid(){ return this._pid;}
	set pid(v){this._pid=v;}

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

		if ( vars ) {

			Object.assign( this,vars );
			if ( vars.empty || !vars.name )this.empty = true;
			else this.empty = false;

		} else {

			this.empty = true;
		}

		if ( !this.points ) this.points = 0;
		if ( !this.fame ) this.fame = 0;
		if ( !this.titles ) this.titles = 0;
		if (!this.level ) {this.level = 0; }


	}

	/**
	 * Update player information.
	 * @param {Player} p
	 */
	update( p ) {

		if ( !p ) {
			this.empty = true;
			retur
		}

		this.name = p.name;
		this.level = p.level ? p.level.valueOf() : 0;

		//this.pid = p.hid;

		this.title = p.title;
		this.titles = p.titles ? p.titles.length : 0;
		this.fame = p.fame ? p.fame.valueOf() : 0;
		this.points = p.points ? p.points.valueOf() : 0;
		this.gclass = p.gclass;
		this.empty = false;

	}

	/**
	 * @returns {number} - calculate point contribution from char stats.
	 */
	getPoints(){
		if ( this.empty ) return 0;

		if ( isNaN( this.points ) ) console.warn( this.name + 'points: NaN: ' + this.points );
		if ( isNaN( this.fame ) ) console.warn( this.name + 'fame: NaN: ' + this.fame );
		if ( isNaN( this.titles ) ) console.warn( this.name + 'titles: NaN: ' + this.titles );
		if ( isNaN( this.level ) ) {
			console.warn( this.name + 'level: NaN: ' + this.level );
			this.level = 0;
		}

		return this.points + this.fame + ( this.titles + this.level ) /10;
	}

}