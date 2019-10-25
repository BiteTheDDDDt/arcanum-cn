import CharInfo from "./charinfo";
import Stat from "../values/stat";
import StatData from "../items/statData";
import GData from "../items/gdata";

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

	/**
	 * @property {CharInfo[]} chars
	 */
	get chars() { return this._chars; }
	set chars(v) {


		for( let i = v.length-1; i >= 0; i-- ) {
			v[i] = new CharInfo(v[i]);
		}

		this._chars = v;
	}

	/**
	 * @property {StatData} prestige
	 */
	get prestige() { return this._prestige; }
	set prestige(v) {

		this._prestige = v;

	}

	/**
	 * GData specific to hall.
	 * @property {Object.<string,GData>} items
	 */
	get items() {return this._items;}
	set items(v){

		/*for( let p in v ){
			console.log( 'hall: ' + p);
		}*/
		this._items=v;
	}

	/**
	 * @property {Stat} max - maximum char slots.
	 */
	get max() {return this._max; }
	set max(v) {

		this._max = v instanceof Stat ? v : new Stat(v);

	}

	/**
	 *
	 * @param {object} vars
	 */
	constructor(vars=null ){

		if ( vars ) Object.assign(this, vars);

		if ( !this.chars ) this.chars = [];
		if ( !this.active ) this.active = 0;

		if ( !this.name ) this.name = "Wizard's Hall";

		/** @todo: change default to 1 */
		//if ( !this.max ) this.max = 3;
		this.max = 3;

		let it = this.items.prestige;
		if ( !it ){
			console.warn('cannot find prestige data');
			this.prestige = new StatData(0);
		} else {
			this.prestige = it;
		}

		console.log('HALL LOADED. PRESTIGE: ' + this.prestige.max );

		this.initChars();

	}

	/**
	 *
	 * @param {*} slot
	 * @returns {boolean} false on invalid slot.
	 */
	dismiss( slot ) {

		if ( slot < 0 || slot >= this.chars.length ) return false;

		this.chars[slot].empty = true;
		this.chars[slot].name = null;

		return true;

	}

	/**
	 * Recalculate point contributions from all chars.
	 */
	calcPoints() {

		let p = 0;
		for( let i = this.chars.length-1; i>= 0; i--) {

			p += this.chars[i].getPoints();

		}

		this.prestige.value = p;

	}

	initChars(){

		let total = 0;
		let max = this.max.value;
		for( let i = 0; i < max; i++ ) {

			var c = this.chars[i];
			if ( c === undefined ) {
				this.chars.push( new CharInfo() );
			} else {
				total += c.getPoints();
			}

		}

		this.prestige.value = total;

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
		char.titles = p.titles.length;
		char.fame = p.fame.value.value;
		char.gclass = p.gclass;
		char.empty = false;

		console.log('loaded points: ' + char.getPoints() );
		console.log('CHAR UPDATES');

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