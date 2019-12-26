import Inventory from "./inventory";
import Runnable from "../composites/runnable";
import { TYP_RUN } from "../values/consts";

export default class EnchantSlots extends Inventory {

	/**
	 * @private
	 * @property {Runner} runner
	 */
	get runner(){return this._runner;}
	set runner(v) { this._runner = v;}

	constructor( vars ) {

		super(vars);

		this.enchantslots.id = this.enchantslots.name = 'enchantSlots';
		this.spaceProp = 'level';

	}

	revive( gs ){

		this.runner = gs.runner;

		for( let i = this.items.length-1; i >= 0; i--) {

			var it = new Runnable( this.items[i] );
			it.revive(gs);
			if ( a.target === null || a.item === null ) {
				this.items.splice(i,1);
			}


		}

		this.calcUsed();

	}

	add( item, enchant=null ){

		if ( item.type === TYP_RUN ){

			super.add(item);

		} else {

			let r = new Runnable( enchant, item );
			super.add( r );

		}

	}

	remove( item ){

		if ( item.type === TYP_RUN) {
			super.remove(item);
		} else {

			let it = this.items.find( v=>v.targ===item);
			if ( !it) return;

			super.remove(it);

		}

	}

}