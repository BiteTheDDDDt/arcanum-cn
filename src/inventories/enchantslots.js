import Inventory from "./inventory";
import Runnable from "../composites/runnable";
import { TYP_RUN, ENCHANTSLOTS } from "../values/consts";
import Enchanting from "../composites/enchanting";

export default class EnchantSlots extends Inventory {

	/**
	 * @private
	 * @property {Runner} runner
	 */
	get runner(){return this._runner;}
	set runner(v) { this._runner = v;}

	constructor( vars ) {

		super(vars);

		this.enchantslots.id = this.enchantslots.name = ENCHANTSLOTS;
		this.spaceProp = 'level';

	}

	maxed(){

		for( let i = this.items.length-1; i>= 0; i--) {
			if ( !this.items[i].done ) return false;
		}
		return true;

	}

	revive( gs ){

		this.runner = gs.runner;

		for( let i = this.items.length-1; i >= 0; i--) {

			var it = new Enchanting( this.items[i] );
			it.revive(gs);
			if ( a.target === null || a.item === null ) {
				this.items.splice(i,1);
			}


		}

		this.calcUsed();

	}

	update(dt) {

		for( let i = this.items.length-1; i >= 0; i--) {

			var it = this.items[i];
			if ( !it.done ) {
				it.update(dt);
			}

		}

	}

	/**
	 *
	 * @param {Enchanting} e
	 */
	runWith( e ) {

		if ( !this.includes(e) ) {
			super.add(e);
		}

	}

	add( item, enchant=null ){

		if ( item.type === TYP_RUN ){

			super.add(item);

		} else {

			let r = new Enchanting( enchant, item );
			super.add( r );

		}

	}

	/**
	 *
	 * @param {} e - running action or enchant target.
	 */
	remove( e ){

		if ( e.type !== TYP_RUN) {

			e = this.items.find( v=>v.targ===e);
			if ( !e) return;

		}

		if ( e.target ) e.target.busy = false;

		super.remove( e );

	}

}