import Game from './game';
import { quickSplice } from './util/util';

/**
 * @const {RegExp} FuncRE - regular expression to find tree relationships
 * in requirement/need functions.
 */
const FuncRE = /[^\.]\b\w+\.((?:\w|\.)+\b)/gi;

export default class TechTree {

	/**
	 *
	 * @param {Object} [vars=null]
	 */
	constructor( items ) {

		/**
		 * @property {object.<string,GData>} items - used to check if items
		 * locked/unlocked etc in unlock links.
		 */
		this.items = items;

		/**
		 * @property {Object.<string,Array>} unlocks - item id to Items potentially unlocked
		 * by changes in Item.
		 */
		this.unlocks = {};

		for( let p in this.items ) {
			this.mapUnlockers( this.items[p]);
		}

		/**
		 * Unlocked items that might unlock other items.
		 */
		this.fringe = [];

		for( let p in this.items ) {

			if ( !this.items[p].locked && this.unlocks[p] ) this.fringe.push( this.items[p] );
			else {

				// check cyclic unlock. resources unlock themselves with any amount;
				// these must be added to fringe without being unlocked.
				let links = this.unlocks[p];
				if ( links && links.includes(p) ) {
					console.warn('circle: ' + p);
					this.fringe.push( this.items[p] );
				}

			}

		}

	}

	/**
	 * Item was unlocked. Add to fringe if it potentially unlocks other items.
	 * @param {GData} it
	 */
	unlocked( it ) {

		if ( this.unlocks[it.id] !== undefined ){
			// if duplicate entry in fringe, should be weeded out naturally anyway.
			this.fringe.push( it );
		}

	}

	/**
	 * Check fringe items for potential unlock events.
	 */
	checkFringe(){

		let arr = this.fringe;

		//if ( Math.random() < 0.1 ) console.log('FRINGE SIZE: ' + arr.length );

		for( let i = arr.length-1; i >= 0; i-- ) {

			var it = arr[i];
			if ( it.disabled ) {

				quickSplice( arr, i );

			} else if ( it.dirty === true ) {

				it.dirty = false;
				// no potential unlocks left.
				if ( this.changed( it.id ) === false ) {
					quickSplice( arr, i);
				}


			}


		}

	}

	/**
	 * Call when src Item changes.
	 * Test unlocks on all variables linked by a possible unlock chain.
	 * @param {string} src - id of changed Item.
	*/
	changed( src ){

		let links = this.unlocks[src];
		// never-null. this is guaranteed.
		if ( links === undefined ) return false;

		// links is id-array.

		let it;
		for( let i = links.length-1; i>= 0; i--) {

			it = this.items[ links[i] ];
			if ( !it ) {
				console.warn('BAD UNLOCK LINK: ' + id );
				quickSplice( links, i );
			} else if ( it.locked === false || it.disabled === true || Game.tryUnlock(it) ) {

				// remove unlock link.
				quickSplice( links, i );

			}

		}

		if ( links.length === 0 ) {
			this.unlocks[src] = undefined;
			return false;
		}

		return true;

	}

	/**
	 * Mark all Items which might potentially unlock this item.
	 * @param {Item} item
	 */
	mapUnlockers( item ) {

		if ( !item.locked || item.disabled ) return;

		if ( item.require ) this.markLinks( item, item.require );
		if ( item.need ) this.markLinks( item, item.need );

	}

	/**
	 * Mark the links that unlock item.
	 * @param {*} item
	 * @param {*} need
	 */
	markLinks( item, need ) {

		let type = typeof need;

		if ( type === 'string') {

			this.markUnlocker( need, item );

		} else if ( type === 'function' ) {

			this.markFunc( item, need );

		} else if (  Array.isArray(need) ) return need.forEach( v=>this.markLinks(item,v), this );

	}

	/**
	 * Mark unlock links from a requirement function.
	 * @param {Item} item - item being unlocked.
	 * @param {function} func - function testing if item can be unlocked.
	 */
	markFunc( item, func ) {

		let text = func.toString();
		let results;

		while ( results = FuncRE.exec( text )) {

			//var varPath = results[1];
			//console.log( item.id + 'require: ' + varPath );

			let sub = results[1].split('.')[0];
			if ( sub === 'mod' || sub === 'slot' ) continue;
			this.markUnlocker( sub, item );

		}
		if ( text.includes('this') || text.includes('self') ) this.markUnlocker( item.id, item );

	}

	/**
	 * Map src as a potential unlocker of item.
	 * @param {string} src
	 * @param {GData} item
	 */
	markUnlocker( src, item ) {

		if ( !src) return;
		let it = this.items[src];

		if ( it === undefined ) {
			it = Game.state.getTagList( src );
			if ( it ) it.forEach( v=>this.markUnlocker(v.id,item) );
			//else console.warn('unlocker not found: ' + src );
			return;
		}

		let map = this.unlocks[src];
		if ( map === undefined ) this.unlocks[src] = map = [];
		if ( !map.includes( item.id ) ) map.push( item.id );

	}

}