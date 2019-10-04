import Inventory from "./inventory";

/**
 * Always try spells in order from start.
 */
export const ORDER = 'top';
export const RANDOM = 'rand';
export const LOOP = 'loop';

export default class SpellList extends Inventory {

	toJSON(){

		let data = super.toJSON();
		data.order = this.order;
		data.lastInd = this.lastInd || undefined;

		return data;

	}

	/**
	 * @property {number} lastInd - index of last casted spell.
	 * only used for casting spells in loop order.
	 */
	get lastInd() { return this._lastInd; }
	set lastInd(v) { this._lastInd = v;}

	/**
	 * @property {number} order - ORDER,RANDOM,LOOP - cast attempt order.
	 */
	get order() { return this._order; }
	set order(v) { this._order=v;}

	constructor( vars=null ) {

		super(vars);

		this.name = this.name || 'spelllist';
		this.lastInd = this.lastInd || 0;

		this.spaceProp = 'level';

		this.order = this.order || LOOP;

	}

	/**
	 * usable if at least one spell can be cast.
	 * @param {Game} g
	 * @returns {boolean}
	 */
	canUse( g ) {

		var len = this.items.length;

		for( let i = 0; i < len; i++ ) {
			if ( this.items[i].canUse(g) ) return true;
		}

		return false;

	}

	/**
	 *
	 * @param {Game} g
	 * @returns {boolean} true if spell was successfully cast.
	 */
	onUse(g) {

		var len = this.items.length;

		let start = this.nextInd();
		let i = start;

		do {

			if ( this.items[i].canUse(g) ) {

				g.payCost( this.items[i].cost );
				console.log('USING: ' + this.items[i].name );
				this.items[i].onUse(g);
				this.lastInd = i;
				return true;

			}

			if ( ++i >= len ) i = 0;

		} while ( i !== start );

		console.log('NO SPELLS FOUND');

		return false;

	}

	/**
	 * @returns {number} - index of next spell to cast.
	 */
	nextInd(){

		if ( this.order === ORDER ) {
			return 0;

		} else if ( this.order === LOOP ) {

			return this.lastInd < this.items.length-1 ? this.lastInd+1 : 0;

		} else if ( this.order === RANDOM ) {
			return Math.floor( Math.random()*this.items.length );
		}
		return 0;

	}

	/**
	 *
	 * @param {GameState} gs
	 */
	revive(gs){

		super.revive(gs);
		if (this.max.value === 0 ) this.max.value = gs.player.level;

	}

}