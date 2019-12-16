export default class Travel {

	toJSON(){
	}

	get dest() { return this._dest; }
	set dest(v) { this._dest = v; }

	get length() { return this._dest.dist; }

	get progress() { return this._travelled; }

	constructor(vars=null) {

		if ( vars ) Object.assign( this, vars );

		this._travelled = this._travelled || 0;

	}

	setDest( d ) {
	}

	revive(state) {

		if ( typeof this._dest === 'string') this.dest = state.getData(this._dest);

	}

}