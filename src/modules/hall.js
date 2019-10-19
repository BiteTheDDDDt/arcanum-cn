import CharInfo from "./charinfo";
import Stat from "../values/stat";

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
	set chars(v) {


		for( let i = v.length-1; i >= 0; i-- ) {
			v[i] = new CharInfo(v[i]);
		}

		this._chars = v;
	}

	get points() { return this._points; }
	set points(v) {

		if ( v instanceof Stat ) this._points = v;
		else if ( this._points === undefined ) this._points = new Stat( v, 'hallPoints');
		else if ( typeof v === 'number' ) this._points.base = v;
		else this._points = new Stat(v, 'hallPoints');

	}

	/**
	 * GData specific to hall.
	 * @property {Object.<string,GData>} items
	 */
	get items() {return this._items;}
	set items(v){

		for( let p in v ){
			console.log( 'hall: ' + p);
		}

		this._items=v;
	}

	/**
	 * @property {number} max - maximum char slots.
	 */
	get max() {return this._max; }
	set max(v) {

		this._max = v instanceof Stat ? v : new Stat(v);

	}

	constructor(vars=null ){

		if ( vars ) Object.assign(this, vars);

		if ( !this.chars ) this.chars = [];
		if ( !this.active ) this.active = 0;

		if ( !this.name ) this.name = "Wizard's Hall";

		/** @todo: change default to 1 */
		//if ( !this.max ) this.max = 3;
		this.max = 3;

		this.initChars();

	}

	initChars(){

		let total = 0;
		let max = this.max.value;
		for( let i = 0; i < max; i++ ) {

			var c = this.chars[i];
			if ( c === undefined ) {
				this.chars.push( new CharInfo() );
			} else {
				total += c.points;
			}

		}

		this.points = total;

	}

	/**
	 * Sets the active slot index so the specified slot will be used
	 * on next store/load.
	 * Does not perform any actual loading or data changes.
	 * @param {number} slot
	 * @returns {boolean} false on invalid slot.
	 */
	setActive( slot ) {

		if ( slot < 0 || slot >= this.chars.length ) {
			console.warn('invalid char slot: '+ slot);
			return false;
		}
		this.active = slot;
		return true;

	}

	/**
	 * Player data loaded. Copy information into the active slot.
	 * @param {Player} p
	 */
	updateChar( p, slot=-1 ) {

		let char = this.getSlot(slot);

		if ( !char ) char = this.chars[ (slot < 0 ? this.active : slot)  ] = new CharInfo();

		char.name = p.name;
		char.level = p.level.valueOf();
		char.title = p.title;
		char.gclass = p.gclass;
		char.empty = false;

	}

	/**
	 *
	 * @param {*} slot
	 * @returns {boolean} false on invalid slot.
	 */
	clearChar( slot ) {

		if ( slot < 0 || slot >= this.chars.length ) return false;

		this.chars[slot].empty = true;
		this.chars[slot].name = null;

		return true;

	}

	setLevel( lvl, slot=-1 ){

		let char = this.getSlot(slot);
		if ( char) char.level = lvl;

	}

	setName(name, slot=-1 ){

		let char = this.getSlot(slot);
		if ( char) char.name = name;

	}

	setTitle( title, slot=-1 ){
		let char = this.getSlot(slot);
		if ( char) char.title = title;
	}

	getSlot(slot=-1) {
		return this.chars[ slot < 0 ? this.active : slot ];
	}

	findSlot(p) {
		return this.chars.findIndex(p);
	}

	/**
	 * Get slot index by name.
	 * @param {string} charName
	 * @returns {number}
	 */
	byName( charName ) {
		return this.chars.findIndex( v=>v.name === charName);
	}

	rmChar( slot ) {
		this.chars[ slot ] = undefined;
	}

}