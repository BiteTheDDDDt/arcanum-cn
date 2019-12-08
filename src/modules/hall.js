import CharInfo from "./charinfo";
import Stat from "../values/stat";
import StatData from "../items/statData";

/**
 * Wizards hall.
 */
export default class Hall {

	toJSON(){

		//for( let p in this.items ) console.log('SAVING HALL ITEM: '+ p);

		return {

			name:this.name,
			chars:this.chars,
			active:this.active,
			items:this.items

		}

	}

	/**
	 * @property {number} active - zero-indexed slot of active char.
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
	set prestige(v) { this._prestige = v;

	}

	/**
	 * @property {StatData} points - player point total.
	 */
	get points(){return this._points;}
	set points(v){this._points=v;}
	/**
	 * GData specific to hall.
	 * @property {Object.<string,GData>} items
	 */
	get items() {return this._items;}
	set items(v){

		/*for( let p in v ){ console.log( 'hall: ' + p); }*/
		this._items=v;
	}

	/**
	 * @property {Stat} max - maximum char slots.
	 * slots are zero-based indices.
	 */
	get max() {return this._max; }
	set max(v) { this._max = v; }

	/**
	 *
	 * @param {object} vars - merged hall saved and module data,
	 * all hall items, and standard hall lists.
	 */
	constructor(vars=null ){

		if ( vars ) Object.assign(this, vars);

		if ( !this.chars ) this.chars = [];
		if ( !this.active ) this.active = 0;

		if ( !this.name ) this.name = "Wizard's Hall";

		/*if ( this.items ) {
			console.log( 'EVT HALL: ' + this.items.evt_hall.value );
		} else console.warn('HALL NOT YET OWNED');*/

		/** @todo: change default to 1 */
		//if ( !this.max ) this.max = 3;
		this.max = this.items.hallSize;

		console.log('HALL SIZE: ' + this.max.value );

		this.points = this.items.hallPoints;
		this.prestige = this.items.prestige;
		//console.warn('!!!!START PRESTIGE: ' + this.prestige.value );

		this.initChars();

	}

	/**
	 * @returns {boolean} true if hall is owned.
	 */
	owned() { return this.items.evt_hall > 0; }

	/**
	 *
	 * @param {string} slot
	 * @returns {boolean} false on invalid slot.
	 */
	dismiss( slot ) {

		if ( slot < 0 || slot >= this.chars.length ) return false;

		this.chars[slot].empty = true;
		this.chars[slot].name = null;
		this.chars[slot].hid = null;

		return true;

	}

	/**
	 * Recalculate point contributions from all chars.
	 * @property {?Game} g - current game.
	 */
	calcPoints( g ) {

		let p = 0;

		let max = Math.floor( this.max.value );

		for( let i = 0; i < max; i++ ) {

			var t = this.chars[i].getPoints();
			//console.log( this.chars[i].name + " POINTS: " + t );

			p += this.chars[i].getPoints();

		}

		if ( g ) {
			this.points.setBase( g, p)
		} else this.points.value = p;

		//console.log('RECALC POINTS: '+ this.points.valueOf() );
		//console.log('PRESTIGE: ' + this.prestige.valueOf() );

	}

	/**
	 * Creates char objects and calculates points.
	 */
	initChars(){

		let max = this.max.value;
		for( let i = 0; i < max; i++ ) {

			var c = this.chars[i];
			if ( c === undefined ) {
				this.chars.push( new CharInfo() );
			}

		}
		this.calcPoints();

	}

	/**
	 * Checks that current char array is bounded to max, and returns chars.
	 * Also creates new CharInfo for uninstantiated seats.
	 * @returns {CharInfo[]} available chars.
	 */
	getChars(){

		let max = this.max.value;
		for( let i = 0; i < max; i++ ) {

			if ( this.chars[i] === undefined ) {
				this.chars.push( new CharInfo() );
			}

		}

		if ( this.chars.length > max ) this.chars = this.chars.slice( 0, Math.floor(max) );

		return this.chars;

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
		char.update( p );

	}

	setLevel( player, lvl ){

		let char = this.getSlot( this.active );
		if ( char) char.level = lvl;

	}

	setName(name, slot=-1 ){

		let char = this.getSlot(slot);
		if ( char) char.name = name;

	}

	/**
	 * @param {number} hid - character hid to search for.
	 * @returns {number} slot of character with given hid, or -1.
	 */
	hidSlot( hid ){ return this.chars.findIndex( v=>v.hid==hid); }

	setTitle( title, slot=-1 ){
		let char = this.getSlot(slot);
		if ( char) char.title = title;
	}

	getSlot(slot=-1) {
		return this.chars[ slot < 0 ? this.active : slot ];
	}

	findSlot(p) { return this.chars.findIndex(p); }

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