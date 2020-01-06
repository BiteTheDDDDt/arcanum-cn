/**
 * Base view for all item lists.
 */
import { floor, precise } from '../util/format';

import Game, { TICK_LEN } from '../game';
import { SKILL } from '../values/consts';

export default {

	methods:{

		floor:floor,

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

		},

		/**
		 *
		 * @param {*} obj
		 * @param {boolean} rate - items represent /sec rates.
		 */
		effectItems( obj, rate=false) {

			let type = typeof obj;
			let results = {};

			if ( type === 'number') {
				console.warn('effect type is number: ' + obj) ;
			} else if ( type === 'string') {

				let it = Game.getData(obj);
				results[ it ? it.name : this.stripTags(obj) ] = true;

			} else if ( Array.isArray(obj) ) obj.forEach(v=>this.effectList(v,results));
			else if ( type === 'function' ) {}
			else if ( type === 'object') {

				this.effectList( obj, results, '', rate );

			}

			return results;

		},

		/**
		 * @param {Object} obj - object of effects to enumerate.
		 * @param {Object} results - [name/effect] pairs to display to user.
		 * @param {string} propPath - prop path from base.
		 * @param {boolean} rate - whether display is per/s rate.
		 */
		effectList( obj, results={}, propPath='', rate=false ) {

			if ( typeof obj === 'string' ) {

				let it = Game.getData(obj);
				results[ it ? it.name : this.stripTags(obj) ] = true;
				return;
			}

			for( let p in obj ) {

				// displayed path to subitem.
				var subPath = p;
				var sub = obj[p];
				var subRate = rate;

				if ( sub === null || sub === undefined ) {

					console.warn('Sub null: ' + propPath + ': ' + p );
					continue;
				} else if ( p === 'skipLocked') continue;
				else if ( p === 'mod' || p === 'effect') subPath = propPath;
				else if ( p === 'max' ) {

					subPath = 'max ' + propPath;

				} else if ( p==='base' || p === 'value') subPath = propPath;
				else if ( p === 'rate') {

					subPath = propPath;
					subRate = true;

					let baseItem = Game.getData( propPath.split('.')[0] );
					if ( baseItem && baseItem.type === SKILL ) subPath = 'train ' + subPath + ' rate';

				} else {

					// check if sub-prop refers to an item.
					let refItem = Game.getData(p);
					if ( refItem ) subPath = refItem.name;
					else subPath = this.stripTags( p );

					subPath = propPath ? propPath + ' ' + subPath : subPath;

				}

				if ( typeof sub !== 'object' ) results[subPath] = precise(sub) + ( subRate ? '/s' : '');
				else if ( typeof sub === 'function' ) {}
				else {

					if ( sub.skipLocked ) {

						let refItem = Game.getData(p);
						if ( refItem && (refItem.locked || refItem.disabled) ) continue;

					}

					if ( sub.toString && (sub.toString !== Object.prototype.toString) ) {

						results[subPath] = sub.toString() + ( subRate ? '/s' : '');

					} else this.effectList( sub, results, subPath, subRate );

				}

			}

		}

	}

}