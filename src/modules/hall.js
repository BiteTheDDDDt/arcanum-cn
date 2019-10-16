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
	 * @property {string} active - name of active char.
	 */
	get active() { return this._active; }
	set active(v) { this._active = v;}

	get name() { return this._name; }
	set name(v) { this._name = v; }

	get chars() { return this._chars; }
	set chars(v) { this._chars = v; }

	constructor(vars=null ){

		if ( vars ) Object.assign(this, vars);

		if ( !this.chars ) this.chars = {};

	}

	setLevel(lvl){

	}

	setName(name){

	}

	setTitle(){
	}

	setInfo(){
	}

	addChar( info ) {

		this.chars[ info.name ] = info;

	}

	rmChar( name ) {
		this.chars[ name ] = undefined;
	}

}