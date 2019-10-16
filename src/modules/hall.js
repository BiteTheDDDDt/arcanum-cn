/**
 * Wizards hall.
 */
export default class Hall {

	toJSON(){

		return {

			name:this.name,
			chars:this.chars,
			active:this.active

		}

	}

	/**
	 * @property {number} active - slot of active char.
	 */
	get active() { return this._active; }
	set active(v) { this._active = v;}

	/**
	 * @property {string} name - name of hall.
	 */
	get name() { return this._name; }
	set name(v) { this._name = v; }

	get chars() { return this._chars; }
	set chars(v) { this._chars = v; }

	/**
	 * @property {number} max - maximum char slots.
	 */
	get max() {return this._max; }
	set max(v) { this._max =v;}

	constructor(vars=null ){

		if ( vars ) Object.assign(this, vars);

		if ( !this.chars ) this.chars = [];

		if ( !this.active ) this.active = 0;

	}

	setLevel(lvl){

	}

	setName(name){

	}

	setTitle(){
	}

	setInfo(){
	}

	addChar( info, slot ) {


		this.chars[ info.name ] = info;

	}

	findSlot(p) {
		return this.chars.findIndex(p);
	}

	getSlot( charName ) {
		return this.chars.findIndex( v=>v.name === charName);
	}

	rmChar( name ) {
		this.chars[ name ] = undefined;
	}

}