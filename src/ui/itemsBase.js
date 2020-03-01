/**
 * Base view for all item lists.
 */
import { floor } from '../util/format';

import Game from '../game';

export default {

	methods:{

		floor:floor,

		slottable(it){

			if ( it.disabled || (it.need && !Game.unlockTest( it.need, it )) ) return false;
			if ( it.buy && !it.owned && !Game.canPay(it.buy) ) return false;
			if ( it.slot && Game.state.getSlot(it.slot, it.type ) === it) return false;
			return true;

		},

		reslocked( it ) {
			return it.disabled === true || it.locks > 0 || it.locked !== false;
		},

		locked(it) {

			return (it.disabled === true) || it.maxed() || it.locks>0 || (it.locked !== false);

		}

	}

}