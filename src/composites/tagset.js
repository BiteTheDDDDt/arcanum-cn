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
		this._items = new Set( v );
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


	/*get instance() { return true; }
	set instance(v){}*/

	get locked() { return false;}
	get owned(){return true;}
	maxed(){ return false; }

	constructor(vars=null ) {

		if( vars) Object.assign( this, vars );

		if (!this.items ) this.items = null;

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
			it.lock( amt );
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
	 * Apply mod to every data of group.
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

	/**
	 *
	 * @param {*} p
	 */
	filter(p){
	}

	/**
	 * Wrap items forEach()
	 * @param {*} p
	 */
	forEach(p){
		return this.items.forEach(p);
	}

}