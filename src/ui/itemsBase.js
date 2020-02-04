/**
 * Base view for all item lists.
 */
import { floor } from '../util/format';

import Game, { TICK_LEN } from '../game';

export default {

	methods:{

		floor:floor,

		slottable(it){

			if ( it.disabled || (it.need && !Game.unlockTest( it.need, it )) ) return false;
			if ( it.buy && !it.owned && !Game.canPay(it.buy) ) return false;
			if ( it.slot && Game.state.getSlot(it.slot, it.type ) === it) return false;
			return true;

		},

		usable(it) {
			return (it.length || it.perpetual ) ? it.canRun( Game, TICK_LEN) : it.canUse(Game );
		},

		buyable(it) { return it.canBuy(Game) },

		reslocked( it ) {
			return it.disabled === true || it.locks > 0 || it.locked !== false;
		},

		locked(it) {

			return (it.disabled === true) || it.maxed() || it.locks>0 || (it.locked !== false);

		},

		/**
		 * Convert tag strings into viewable format.
		 * @param {*} t
		 */
		stripTags( t ) {

			if ( Array.isArray(t) ) return t.map( this.stripTags, this );

			if ( typeof t === 'string' && t.substring(0,2) === 't_' ) return t.slice(2);

			return t;

		}

	}

}