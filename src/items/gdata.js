import { defineExcept, clone } from 'objecty';
import Stat from '../values/stat';
import Base, {mergeClass} from './base';
import { arrayMerge, assignPublic } from '../util/util';
import Events, { ITEM_ATTACK, EVT_EVENT } from '../events';
import Dot from '../chars/dot';

/**
 * @typedef {Object} Effect
 * @property {?number} duration
 */

/**
 * Game Data base class.
 */
export default class GData {

	/**
	 * @property {boolean} disabled - whether the item has been
	 * disabled / is no longer available.
	 */
	get disabled() { return this._disabled; }
	set disabled(v) { this._disabled = v;}

	/**
	 * @property {Stat} max
	 */
	get max() { return this._max; }
	set max(v) {

		if ( this._max ) {

			if ( v instanceof Stat ) this._max = v;
			else if ( !isNaN(v) ) this._max.base = v;

		} else this._max = v instanceof Stat ? v : new Stat(v,true);
	}

	/**
	 * @property {Stat} rate - rate of stat change in value/second.
	 */
	get rate() { return this._rate; }
	set rate(v){

		if ( v instanceof Stat ) this._rate = v;
		else if ( this._rate ) {

			if ( typeof v === 'object' ) Object.assign( this._rate, v);
			else this._rate.base = v;

		} else this._rate = new Stat(v);

	}

	/**
	 * @property {number|Object.<string,number>} cost
	 */
	get cost() { return this._cost; }
	set cost(v) { this._cost=v;}

	/**
	 * @property {string|Object}
	 */
	get require() { return this._require; }
	set require(v) { this._require =v;}

	/**
	 * @property {Object|Array|string|function} effect
	 */
	get effect() { return this._effect; }
	set effect(v) { this._effect=v;}

	/**
	 * @property {number} locks - number of locks preventing item from
	 * being used or unlocked.
	 */
	get locks() { return this._locks||0;}
	set locks(v) { this._locks = v;}

	/**
	 * @property {boolean} locked
	 */
	get locked() { return this._locked; }
	set locked(v) { this._locked = v; }

	get owned() { return this._owned;}
	set owned(v) { this._owned = v; }

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null, defaults=null ){

		if ( vars ) assignPublic( this, vars );
		if ( defaults ) this.setDefaults( defaults );

		if ( this._locked === undefined || this._locked === null ) this.locked = true;

		/**
		 * recomputed at game start.
		 */
		this.locks = 0;

		this._value = this._value || 0;

		if ( vars.nomax ) {
			this._max = null;
		}

		//if ( this.owned && !this.buy && !this.value ) this._value = 1;
		//if ( this.owned) console.log('owned: ' + this.owned + ' id: ' + this.id);

		//if ( this.slot ) console.log( this.id + ' slot: ' + this.slot );
		defineExcept( this, null,
			['require', 'rate', 'need', 'value', 'buy', 'max', 'cost', 'id', 'name', 'warn', 'effect', 'slot' ]);

	}

	/**
	 * Determines whether an item can be run as a continuous action.
	 * @param {Game} g
	 * @param {number} dt - minimum length of time item would run.
	 * @returns {boolean}
	 */
	canRun( g, dt ) {

		if ( this.disabled || this.maxed() || (this.need && !g.unlockTest( this.need, this )) ) return false;

		if ( this.buy && !this.owned && !g.canPay(this.buy) ) return false;

		// cost only paid at _start_ of runnable action.
		if ( this.cost && (this.exp === 0) && !g.canPay(this.cost) ) return false;

		if ( this.fill && g.filled( this.fill, this ) ) return false;

		return this.run && g.canPay( this.run, dt );

	}

	/**
	 * Determine if an item can be used. Ongoing/perpetual actions
	 * test with 'canRun' instead.
	 * @param {Game} g
	 */
	canUse( g ){

		if ( this.perpetual || this.length>0 ) { return g.canRun(this); }

		if ( this.disabled || (this.need && !g.unlockTest( this.need, this )) ) return false;
		if ( this.buy && !this.owned && !g.canPay(this.buy) ) return false;

		if ( this.slot && g.state.getSlot(this.slot, this.type ) === this) return false;
		if ( this.maxed() ) return false;

		if ( this.cd && this.timer > 0 ) return false;

		if ( this.fill && g.filled( this.fill, this ) ) return false;

		return !this.cost || g.canPay(this.cost);
	}

	/**
	 * Add or remove amount from Item, after min/max bounds are taken into account.
	 * Returns the amount actually added or removed.
	 *
	 * @param {number} amt
	 * @returns {number}
	 */
	topoff( amt ) {

		if ( amt <= 0 ) {

			if ( this.value < 0 ) return 0;
			else if ( this.value + amt < 0 ) amt = -this.value;

			this.value += amt;

			return amt;

		}

		if ( this.repeat !== true && !this.max &&
			this.value > 1 &&
			(!this.buy || this.owned===true) ) {
			return 0;
		}

		if ( this.max && (this.value + amt) >= this.max.value ) amt = this.max.value - this.value;
		if ( amt === 0 ) return 0;

		this.value += amt;

		return amt;

	}

	/**
	 * Default implementation of use() is to add 1.
	 * @param {Game} g
	 */
	use( g ) {

		if ( this.slot ) g.setSlot( this );
		this.amount( g, 1 );

	}

	/**
	 * Get or lose quantity.
	 * @param {Game} g
	 */
	amount( g, count=1 ) {

		if ( this.topoff ) count = this.topoff(count);
		if ( count === 0 ) return;

		if ( this.isRecipe ) {
			console.log('CREATING isRecipe: ' + this.id );
			return this.create( g, true );
		}

		if ( this.exec ) this.exec();

		if ( this.title ) g.state.player.title = this.title;
		if ( this.effect ) g.applyEffect(this.effect);
		if ( this.mod ) g.addMod( this.mod, count );
		if ( this.lock ) g.lock( this.lock );
		if ( this.dot ) g.state.player.addDot( new Dot(this.dot, this.id, this.name) );

		if ( this.disable ) g.disable( this.disable );

		if ( this.log ) Events.emit( EVT_EVENT, this.log );

		if ( this.attack ) {
			if (this.type !== 'wearable' && this.type !== 'weapon') Events.emit( ITEM_ATTACK, this );
		}

		this.dirty = true;
		return true;

	}

	/**
	 * Determine whether the item is filled relative to a filling rate.
	 * if the filling rate + natural item rate can't fill the item
	 * it is considered filled to avoid getting stuck.
	 * @param {number} rate
	 */
	filled( rate=0 ) { return (this.max && this.value>=this.max.value) || (this.rate && (this.rate+rate) <= 0); }

	/**
	 * @returns {boolean} true if an unlocked item is at maximum value.
	*/
	maxed() {

		return this.max ? (this.value >= Math.floor(this.max.value) ) :
			( this.repeat !== true &&
				this._value > 0 &&
				(!this.buy || this.owned===true) );

	}

	setDefaults( defaults ) {

		var obj;

		for( let p in defaults ) {

			var cur = this[p];
			if ( cur === undefined || cur === null ) {

				obj = defaults[p];
				if ( typeof obj === 'function' ) this[p] = obj( this );
				else if ( typeof obj === 'object' ) this[p] = clone( obj );
				else this[p] = obj;

			}

		}

	}

	/**
	 * shorthand for locked||disabled||locks>0
	 */
	blocked() {
		return this.locked || this.disabled || this.locks>0;
	}

	/**
	 * Perform cost scaling based on current value.
	 * @param {*} s
	 */
	scaleCost( s ) {

		let cost = this.cost;
		if (!cost) return;

		let type = typeof cost;
		if ( type === 'string') return;
		else if ( !isNaN(type)) {

		}

	}

	/**
	 * Add a requirement for unlocking this data.
	 * @param {string|string[]} item
	 */
	addRequire( item ) {

		if ( !this.require ) {
			this.require = item;
		} else {

			if ( this.require === item ||
				(Array.isArray(this.require) && this.require.includes(item)) ) return;
			this.require = arrayMerge( this.require, item );
		}

	}

}

mergeClass( GData, Base );