import Inventory from "./inventory";
import { TYP_RUN, ENCHANTSLOTS } from "../values/consts";
import Enchanting from "../composites/enchanting";

export default class EnchantSlots extends Inventory {

	get exp(){
		return this._exp;
	}
	/**
	 * @private
	 * @property {number} exp
	 */
	set exp(v){
		this._exp = v;
	}

	/**
	 * @property {number} length
	 */
	get length(){
		return this._length;
	}
	/**
	 * @private
	 * @property {number} length
	 */
	set length(v){
		this._length=v;
	}
	percent(){
		return this._length>0 ? Math.round(100*this.exp/this.length) : 0;
	}

	constructor( vars ) {

		super(vars);

		this.id = ENCHANTSLOTS;
		this.name = 'enchanting';
		this.spaceProp = 'level';

		this.removeDupes = true;

		this._exp = 0;
		this._length = 0;

	}

	/**
	 * Note: this is called by Runner to determine if enchants complete.
	 */
	maxed(){

		for( let i = this.items.length-1; i>= 0; i--) {
			if ( !this.items[i].done ) {
				return false;
			}
		}
		return true;

	}

	revive( gs ){

		let ltot = 0;
		let extot = 0;

		for( let i = this.items.length-1; i >= 0; i--) {

			var it = new Enchanting( this.items[i] );
			if ( !it ) {
				console.warn('invalid enchanting: ' + i );
				this.items.splice(i,1);
				continue;
			}
			it.revive(gs);
			if ( !it || it.target === null || it.item === null ) {
				this.items.splice(i,1);
			} else {
				ltot += it.length;
				extot += it.exp;
			}
			this.items[i] = it;


		}

		this.exp = extot;
		this.length = ltot;

		this.calcUsed();

	}

	update(dt) {

		let ltot = 0;
		let extot = 0;

		for( let i = this.items.length-1; i >= 0; i--) {

			var it = this.items[i];
			if ( !it.done ) {

				it.update(dt);
				ltot += it.length;
				extot += it.exp;

			}

		}

		this.exp = extot;
		this.length = ltot;

	}

	/**
	 *
	 * @param {Enchanting} e
	 */
	runWith( e ) {

		if ( !this.includes(e) && e instanceof Enchanting ) {
			super.add(e);
		}

	}

	add( item, enchant=null ){

		if ( item.type === TYP_RUN ){

			super.add(item);

		} else if ( item && enchant ) {

			let r = new Enchanting( enchant, item );
			super.add( r );

		}

	}

	/**
	 *
	 * @param {} e - running task or enchant target.
	 */
	remove( e ){

		if ( e.type !== TYP_RUN) {

			e = this.items.find( v=>v.targ===e);
			if ( !e) return;

		}

		super.remove( e );

	}

}