/**
 * @class TagList to allow referencing tagged items by id.
 */
export default class TagSet {

	/**
	 * TagSets are internal and not meant to be saved.
	 */
	toJSON(){return undefined;}

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

	get name() {return this._name }
	set name(v) { this._name = v; }


	/*get.instanced() { return true; }
	set.instanced(v){}*/

	get locked() {
		for( let it of this.items ) {
			if ( it.locked === false ) return false;
		}
		return true;
	}

	get owned(){
		for( let it of this.items ) {
			if ( it.owned === true ) return true;
		}
		return false;
	}

	constructor(tag ) {

		this.id = tag;
		this.items = new Set();

		let ind = tag.indexOf('t_');
		if ( ind < 0) this.name = tag;
		else {
			this.name = tag.slice(ind+2);
		}

	}

	fillsRequire(){
		for( let it of this.items ) {
			if ( it.fillsRequire() ) return true;
		}
		return true;
	}

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

	filled( rate ){
		for( let it of this.items ) {
			if ( !it.filled(rate) ) return false;
		}
		return true;
	}

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

	add( it ) {
		this.items.add(it);
	}

	/**
	 *
	 * @param {Game} g
	 * @param {*} amt
	 */
	amount( g, amt ) {

		for( let it of this.items ) {
			if ( typeof it.amount === 'function' ) it.amount( g, amt );
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
			it.dirty = true;
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
			it.dirty = true;
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