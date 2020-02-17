import Game from './game';
import { quickSplice } from './util/array';
import TagSet from './composites/tagset';

/**
 * @const {RegExp} FuncRE - regular expression to find tree relationships
 * in requirement/need functions.
 */
const FuncRE = /[^\.]\b\w+\.((?:\w|\.)+\b)/gi;

/**
 * @property {Set<GData>} Changed - items changed on previous frame.
 */
export const Changed = new Set();

export default class TechTree {

	/**
	 *
	 * @param {Object} [vars=null]
	 */
	constructor( items ) {

		Changed.clear();

		/**
		 * @property {object.<string,GData>} items - used to check if items
		 * locked/unlocked etc in unlock links.
		 */
		this.items = items;

		/**
		 * @property {<string,GData[]>} unlocks - maps item id to Items potentially
		 * unlocked by changes in Item.
		 */
		this.unlocks = {};

		/**
		 * @property {.<string,Array>} needs - maps item ids to items which might need
		 * that item in order to both unlock and run.
		 */
		this.needs = {};

		/**
		 * @property {<string,Array>} users - maps item ids whose usability requirement
		 * relies in some way on the id'd item.
		 */
		this.users = {};

		for( let p in this.items ) {
			this.mapUnlocks( this.items[p]);
		}

	}

	/**
	 * Force an initial check of possible unlocks.
	 */
	forceCheck() {

		for( let p in this.items ) {

			let it = this.items[p];
			if ( it instanceof TagSet ) continue;
			if ( !it.disabled && !it.locked ) this.changed(p);

		}

	}

	/**
	 * Check fringe items for potential unlock events.
	 */
	checkUnlocks(){

		for( let it of Changed ){

			this.changed(it.id );

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
	 * @param {<string,GData>[]} graph - maps id to dependent items.
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
	 * @param {<string,GData[]>} graph - maps item id to dependent items.
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