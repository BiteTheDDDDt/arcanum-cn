export default class Group {

	toJSON(){

		return {

			id:this.id,
			items:this.items.map(v=>v.id),
			name:this.name

		}
	}

	get id() { return this._id; }
	set id(v) { this._id = v;}

	get items() { return this._items; }
	set items(v) {

		var a = [];

		let level = 0;

		if ( v ) {

			for( let i = v.length-1; i >= 0; i-- ) {

				var it = v[i];
				if ( typeof it === 'object') level += it.level || 0;
				a[i] = it;

			}


		}

		this.level = level;

		this._items = a;
	}

	get name() {return this._name; }
	set name(v) { this._name = v; }

	get level() { return this._level; }
	set level(v) { this._level = v; }

	constructor(vars=null ) {

		if( vars) Object.assign( this, vars );

		if (!this.items ) this.items = null;

	}

	canPay() {
	}

	exec() {

		for( let i = this.items.length-1; i>= 0;i--) {

			this.items[i].exec();

		}

	}

	/**
	 *
	 * @param {GameState} gs
	 */
	revive(gs){

		this.items = gs.toData(this.items);

	}

}