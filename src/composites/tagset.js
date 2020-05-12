/**
 * @class TagSet to allow referencing tagged items by id.
 */
export default class TagSet {

	/**
	 * TagSets are internal and not meant to be saved.
	 */
	toJSON(){return undefined;}

	/**
	 * @property {string}
	 */
	get id() { return this._id; }
	set id(v) { this._id = v;}

	/**
	 * @property {Set.<GData>} items
	 */
	get items() { return this._items; }
	set items(v) {
		this._items = v;
	}

	[Symbol.iterator](){return this._items[Symbol.iterator]()}

	/**
	 * @property {string} type - type might need to be a standard type.
	 */
	get type() { return this._type; }
	set type(v) { this._type = v; }

	/**
	 * @property {string} name
	 */
	get name() {return this._name }
	set name(v) { this._name = v; }


	/*get.instanced() { return true; }
	set.instanced(v){}*/

	/**
	 * @property {boolean} locked
	 */
	get locked() {
		for( let it of this.items ) {
			if ( it.locked === false ) return false;
		}
		return true;
	}

	/**
	 * Used by cheat menu.
	 */
	set locked(v){
		for( let it of this.items ) {
			it.locked = v;
		}
	}

	/**
	 * @property {boolean} owned
	 */
	get owned(){
		for( let it of this.items ) {
			if ( it.owned === true ) return true;
		}
		return false;
	}

	get delta(){ return 0; }

	/**
	 * @returns {number}
	 */
	valueOf(){

		let v = 0;
		for( let it of this.items ) {
			v += it.valueOf();
		}
		return v;
	}

	/**
	 *
	 * @param {string} tag
	 */
	constructor(tag ) {

		this.id = tag;
		this.items = new Set();

		let ind = tag.indexOf('t_');
		if ( ind < 0) this.name = tag;
		else {
			this.name = tag.slice(ind+2);
		}

	}

	/**
	 * @returns {boolean}
	 */
	fillsRequire(){
		for( let it of this.items ) {
			if ( it.fillsRequire() ) return true;
		}
		return true;
	}

	/**
	 * @returns {boolean}
	 */
	canUse( g ) {
		return g.canPay( this.cost );
	}

	/**
	 * Tests whether item fills unlock requirement.
	 * @returns {boolean}
	 */
	fillsRequire(){
		for( let it of this.items ) {
			if ( it.fillsRequire()) return true;
		}
		return false;
	}

	/**
	 * @returns {boolean}
	 */
	filled( rate ){
		for( let it of this.items ) {
			if ( !it.filled(rate) ) return false;
		}
		return true;
	}

	/**
	 * @returns {boolean}
	 */
	maxed(){
		for( let it of this.items ) {
			if ( !it.maxed() ) return false;
		}
		return true;
	}

	remove(){
		console.warn('TagSet remove() not implemented');
	}

	/**
	 * Not implemented.
	 * @param {*} g
	 */
	onUse(g) {
		console.warn('TagSet onUse() not implemented');
	}

	/**
	 *
	 * @param {GData} it
	 */
	add( it ) {
		this.items.add(it);
	}

	/**
	 * @returns {GData} - random tagged item.
	 */
	random() {

		let size = this.items.size;
		if ( size <= 0 ) return null;

		// dont know better way to do random on iterator.
		let ind = Math.floor(Math.random()*size);

		const itr = this.items.values();
		while ( ind-- > 0 ) {
			itr.next();
		}
		return itr.next().value;


	}

	/**
	 *
	 * @param {Game} g
	 * @param {*} amt
	 */
	amount( amt ) {

		for( let it of this.items ) {
			//if ( typeof it.amount === 'function' ) it.amount( amt );
			it.amount(amt);
		}

	}

	disable(){
	}

	/**
	 *
	 * @param {Object} mods - effect/mod description.
	 * @param {number} amt - factor of base amount added
	 * ( fractions of full amount due to tick time. )
	 */
	applyVars( mods, amt=1 ) {

		for( let it of this.items ) {
			it.applyVars( mods, amt );
		}

	}

	/**
	 * Apply mod to every tagged item.
	 * @param {Mod|Object} mods
	 * @param {number} amt
	 * @param {Object} [targ=null]
	 */
	applyMods( mods, amt=1 ) {

		for( let it of this.items ) {
			it.applyMods( mods, amt, it );
		}

	}

	hasTag(t){ return t === 'tagset'}

	/**
	 * Get raw array of tagged items.
	 * @returns {GData[]}
	 */
	toArray(){
		return Array.from(this.items);
	}

	/**
	 * Filter tagged items.
	 * @param {v=>boolean} p
	 * @returns {GData[]}
	 */
	filter(p){

		let a = [];

		for( let it of this.items ) {
			if ( p(it) ) a.push(it);
		}

		return a;

	}

	/**
	 * Wrap Set forEach()
	 * @param {*=>*} p
	 */
	forEach(p){
		return this.items.forEach(p);
	}

}