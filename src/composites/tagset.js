import { assign } from 'objecty';

/**
 * @class TagList to allow referencing tagged items by id.
 */
export default class TagSet {

	get id() { return this._id; }
	set id(v) { this._id = v;}

	/**
	 * @property {Set} items
	 */
	get items() { return this._items; }
	set items(v) {
		this._items = v;
	}

	/**
	 * @property {string} type - type might need to be a standard type
	 * in order to mimic a default item in item lists.
	 * 'custom' can distinguish as group.
	 */
	get type() { return this._type; }
	set type(v) { this._type = v; }

	get name() {return this._name; }
	set name(v) { this._name = v; }


	/*get.instanced() { return true; }
	set.instanced(v){}*/

	get locked() { return false;}
	get owned(){return true;}

	constructor(tag ) {

		this.id = tag;

		this.items = new Set();

	}
	canUse( g ) {
		return g.canPay( this.cost );
	}

	filled(){
		console.warn('TagSet filled() not implemented');
	}

	maxed(){
		for( let it of this.items ) {
			if ( !it.maxed() ) return false;
		}
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
			it.amount( g, amt );
		}

	}

	disable(){
	}

	lock( amt=1 ){
		for( let it of this.items ) {
			it.lock(amt);
		}
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
	applyMods( mods, amt=1, targ=this ) {

		for( let it of this.items ) {
			it.applyMods( mods, amt, targ );
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