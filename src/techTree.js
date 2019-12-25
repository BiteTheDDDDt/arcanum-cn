import Game from './game';
import { quickSplice } from './util/array';
import TagSet from './composites/tagset';

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

		/**
		 * @property {.<string,Array>} needs - item id to Items which might 'need' the item.
		 */
		this.needs = {};

		for( let p in this.items ) {
			this.mapUnlocks( this.items[p]);
		}

		/**
		 * Unlocked items that might unlock other items.
		 */
		this.fringe = [];

		for( let p in this.items ) {

			var it = this.items[p];
			if ( it instanceof TagSet) continue;

			if ( !it.locked && this.unlocks[p] ) {
				this.fringe.push( it );
			} else {

				// check cyclic unlock. resources unlock themselves with any amount;
				// these must be added to fringe without being unlocked.
				let links = this.unlocks[p];
				if ( links && links.includes(p) ) {
					this.fringe.push( it );
				}

			}

		}

	}

	/**
	 * Force an initial check of possible unlocks.
	 */
	forceCheck() {

		for( let p in this.items ) {

			let it = this.items[p];
			if ( it instanceof TagSet ) continue;
			if ( !it.disabled ) this.changed(p);

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
				console.warn('BAD UNLOCK: ' + id );
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
	 * @param {GData} item
	 */
	mapUnlocks( item ) {

		if ( !item.locked || item.disabled || item instanceof TagSet ) return;

		if ( item.require ) this.mapRequirement( item, item.require, this.unlocks );
		if ( item.need ) this.mapRequirement( item, item.need, this.unlocks );

	}

	/**
	 * Mark an item's possible requirements.
	 * @param {GData} item
	 * @param {string|function|Array} requires
	 */
	mapRequirement( item, requires, graph ) {

		let type = typeof requires;

		if ( type === 'string') {

			this.mapUnlock( requires, item, graph );

		} else if ( type === 'function' ) {

			this.mapFuncRequirement( item, requires, graph );

		} else if (  Array.isArray(requires) ) return requires.forEach( v=>this.mapRequirement(item,v, graph), this );

	}

	/**
	 * Mark unlock links from a requirement function.
	 * @param {GData} targ - item being unlocked.
	 * @param {function} func - function testing if item can be unlocked.
	 */
	mapFuncRequirement( targ, func, graph ) {

		let text = func.toString();
		let results;

		while ( results = FuncRE.exec( text )) {

			//var varPath = results[1];
			//console.log( item.id + 'require: ' + varPath );

			let unlocker = results[1].split('.')[0];
			if ( unlocker === 'mod' || unlocker === 'slot' ) continue;
			this.mapUnlock( unlocker, targ, graph );

		}
		if ( text.includes('this') || text.includes('s.') ) this.mapUnlock( targ.id, targ, graph );

	}

	/**
	 * Map src as a potential unlocker of targ.
	 * @param {string} unlocker
	 * @param {GData} targ
	 * @param {object} graph - the tech tree being mapped, needs or unlocks.
	 */
	mapUnlock( unlocker, targ, graph ) {

		if ( !unlocker) return;
		let it = this.items[unlocker];
		if ( it === undefined ) return;
		else if ( it instanceof TagSet ) {
			return it.forEach( v=>{
				//console.log( it.id + ': ' +v.id + ' unlock: ' + targ.id );
				this.mapUnlock(v.id, targ, graph)}
			);
		}

		let map = graph[unlocker];
		if ( map === undefined ) graph[unlocker] = map = [];
		if ( !map.includes( targ.id ) ) map.push( targ.id );

	}

}