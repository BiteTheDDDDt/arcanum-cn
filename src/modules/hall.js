import CharInfo from "./charinfo";
import { TimeId } from "../values/consts";

/**
 * Wizards hall.
 */
export default class Hall {

	toJSON(){

		//for( let p in this.items ) console.log('SAVING HALL ITEM: '+ p);

		return {

			id:this.id,
			name:this.name,
			chars:this.chars,
			curId:this.curId,
			items:this.items

		}

	}

	/**
	 * @property {string} id
	 */
	get id(){return this._id;}
	set id(v){this._id = v;}

	/**
	 * @property {string} name - name of hall.
	 */
	get name() { return this._name; }
	set name(v) { this._name = v; }

	/**
	 * @property {number} active - zero-indexed slot of active char.
	 */
	get curSlot() { return this._curSlot; }
	set curSlot(v) {
		this._curSlot = v;
	}

	/**
	 * @public @property {string} activeId - pid of active character.
	 */
	get curId(){
		return this._curId;
	}
	/**
	 * @private @property {string} activeId
	 */
	set curId(v){
		this._curId=v;
	}

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

		if (!this.id ) {
			this.id = TimeId('h');
			console.log('NEW HALL ID: ' + this.id );
		} else console.log('HALL ID: ' + this.id );

		if ( !this.chars ) this.chars = [];

		this.findCur(vars);

		if ( !this.name ) this.name = "Wizard's Hall";

		/*if ( this.items ) {
			console.log( 'EVT HALL: ' + this.items.evt_hall.value );
		} else console.warn('HALL NOT YET OWNED');*/
		this.max = this.items.hallSize;

		this.points = this.items.hallPoints;
		this.prestige = this.items.prestige;
		//console.warn('!!!!START PRESTIGE: ' + this.prestige.value );

		this.initChars();

	}

	/**
	 * Set curId/active index based on save.
	 * @param {object} vars
	 */
	findCur(vars){

		if ( vars.active ) {

			console.log('LEGACY HALL SLOT: ' + vars.active );

			this.legacy = true;
			this.setActive( vars.active );

		} else {

			let pid = this.curId = vars.curId;
			this.curSlot = this.chars.findIndex(c=>c.pid===pid);

			console.log('CUR HALL CHAR: ' + pid + '  AT SLOT: '+this.curSlot )

		}

		if ( !this.curId ||  this.curSlot < 0 ) {
			this.curId = null;
			this.curSlot = 0;
		}

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
		this.chars[slot].pid = null;

		return true;

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
		this.curSlot = slot;

		let char = this.getSlot(slot);
		this.curId = char.pid;

		return true;

	}

	/**
	 * Player data loaded. Copy information into the active slot.
	 * @param {Player} p
	 */
	updateChar( p, pid=null ) {

		let char = this.getSlot(this.curSlot);

		if ( !char ) char = this.chars[ this.curSlot  ] = new CharInfo();
		char.update( p );
		if ( pid ) {
			this.curId = char.pid = pid;
		}

	}

	setLevel( player, lvl ){

		let char = this.getSlot( this.curSlot );
		if ( char) char.level = lvl;

	}

	setName(name, slot=-1 ){

		let char = this.getSlot(slot);
		if ( char) char.name = name;

	}

	/**
	 * @param {number} pid - character pid to search for.
	 * @returns {number} slot of character with given pid, or -1.
	 */
	pidSlot( pid ){ return this.chars.findIndex( v=>v.pid==pid); }

	setTitle( title, slot=-1 ){
		let char = this.getSlot(slot);
		if ( char) char.title = title;
	}

	/**
	 * Gets id of character at slot.
	 * @param {number} slot
	 * @returns {string}
	 */
	charId( slot=-1) {
		if ( slot > this.chars.length ) return null;
		return this.chars[slot].pid;
	}

	/**
	 * CharacterInfo by slot.
	 * @param {*} slot
	 * @returns {CharInfo}
	 */
	getSlot(slot=-1) {
		return this.chars[ slot < 0 ? this.curSlot : slot ];
	}

	/**
	 * Remove character by slot.
	 * @param {number} slot
	 */
	rmChar( slot ) {
		this.chars[ slot ] = undefined;
	}

}