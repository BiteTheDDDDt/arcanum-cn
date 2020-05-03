import Game from './game';
import { quickSplice } from './util/array';
import TagSet from './composites/tagset';

/**
 * @const {RegExp} FuncRE - regular expression to identify tree relationships
 * in requirement/need functions.
 */
const FuncRE = /[^\.]\b\w+\.((?:\w|\.)+\b)/gi;

/**
 * @property {Set<GData>} NextChanges - changes for next frame.
 * Used to loop on changes from current frame while marking changes
 * for next frame.
 */
var NextChanges = new Set();

/**
 * @property {Set<GData>} Changed - items changed on previous frame.
 */
export var Changed = new Set();

export const GetChanged = ()=>{

	var temp = Changed;

	NextChanges.clear();
	Changed = NextChanges;

	NextChanges = temp;

	return temp;


}

/**
 * @property {Set<GData>} UnlockQueue - items to check for unlocks.
 */
//const UnlockQueue = new Set();

/**
 * @const {Set<GData>} UseQueue - queue of items to check for usable.
 * Used to queue checks of use changes.
 */
//const UseQueue = new Set();

export default class TechTree {

	/**
	 *
	 * @param {Object} [datas=null]
	 */
	constructor( datas ) {

		Changed.clear();

		/**
		 * @property {object.<string,GData>} items - used to check if items
		 * locked/unlocked etc in unlock links.
		 */
		this.datas = datas;

		/**
		 * @property {<string,GData[]>} unlocks - maps item id to Items potentially
		 * unlocked by changes in Item.
		 */
		this.unlocks = {};

		/**
		 * @property {.<string,Array>} needs - maps item ids to items which might need
		 * that item in order to both unlock and run.
		 * includes both item 'need' object, and other variables required to run.
		 */
		this.needs = {};

		for( let p in this.datas ) {
			this.mapUnlocks( this.datas[p]);
		}

	}

	/**
	 * Force an initial check of possible unlocks.
	 */
	forceCheck() {

		let links;

		for( let p in this.datas ) {

			let it = this.datas[p];
			if ( it instanceof TagSet ) continue;
			if ( !it.disabled && !it.locked ) {

				links = this.unlocks[p];
				if ( links ) this.changed( links );

			}

		}

	}


	/**
	 * Item was unlocked. Add to fringe if it potentially unlocks other items.
	 * @param {GData} it
	 */
	/*unlocked( it ) {

		if ( this.unlocks[it.id] !== undefined ){
			// if duplicate entry in fringe, should be weeded out naturally anyway.
			this.fringe.push( it );
		}

	}*/

	/**
	 * Check fringe items for potential unlock events.
	 */
	updateTech( changes ){

		for( let it of changes ){

			let links = this.unlocks[it.id];

			if ( links !== undefined ) {

				if ( this.changed( links ) === false ) {
					this.unlocks[it.id] = undefined;
				}

			}

		}

	}

	/*updateUnlocks(){

		for( let it of UnlockQueue ) {
			Game.tryUnlock(it);
		}
	}*/

	/*updateUsables(){

		for( let it of UseQueue ) {
			it.usable = it.canUse( Game );
		}
		UseQueue.clear();

	}

	checkUsables( links ){

		for( let i = links.length-1; i>= 0; i--) {

			let it = this.datas[ links[i] ];
			if ( !it || it.disabled === true || it.locks > 0 ) {
				quickSplice( links, i );
			} else if ( it.locked !== false ) {
				continue;
			} else {

				UseQueue.add(it);
			}

		}

	}*/

	/**
	 * Call when src Item changes.
	 * Test unlocks on all variables linked by a possible unlock chain.
	 * @param {string} src - id of changed Item.
	*/
	changed( links ){

		let it;
		for( let i = links.length-1; i>= 0; i--) {

			it = this.datas[ links[i] ];

			if ( !it || it.locked === false || it.disabled === true || it.locks>0 ) {
				quickSplice( links, i );
			} else if ( Game.tryUnlock(it) ) {

				// remove unlock link.
				quickSplice( links, i );

			}

		}

		return links.length > 0;

	}


	/**
	 * Mark all Items which might potentially unlock this item.
	 * @param {GData} item
	 */
	mapUnlocks( item ) {

		// function maps unlockers OF item. TagSets are collections of items
		// and do not have unlockers.
		if ( !item.locked || item.disabled || item instanceof TagSet ) return;

		if ( item.require ) this.mapRequirement( item, item.require, this.unlocks );
		if ( item.need ) this.mapRequirement( item, item.need, this.unlocks );

		/*if ( item.need ) this.mapRequirement( item, item.need, this.needs );
		if ( item.cost ) this.mapRequirement( item, item.cost, this.needs );
		if ( item.fill ) this.mapRequirement( item, item.fill, this.needs );
		if ( item.buy ) this.mapRequirement( item, item.buy, this.needs );
		if ( item.buy ) this.mapRequirement( item, item.run, this.needs );*/


	}

	/**
	 * Mark an item's possible requirements.
	 * @param {GData} item
	 * @param {string|function|Array} requires
	 * @param {.<string,GData>[]} graph - maps id to dependent items.
	 */
	mapRequirement( item, requires, graph ) {

		let type = typeof requires;

		if ( type === 'string') {

			this.mapIdRequire( item, requires, graph );

		} else if ( type === 'function' ) {

			this.mapFuncRequire( item, requires, graph );

		} else if (  Array.isArray(requires) ) return requires.forEach( v=>this.mapRequirement(item,v, graph), this );
		else if ( type === 'object' ) {

			this.mapObjRequire(item, requires, graph );

		}

	}

	/**
	 * Mark unlock links from a requirement function.
	 * @param {GData} targ - item being unlocked.
	 * @param {function} func - function testing if item can be unlocked.
	 * @param {<string,GData[]>} graph - maps item id to dependent items.
	 */
	mapFuncRequire( targ, func, graph ) {

		let text = func.toString();
		let results;

		while ( results = FuncRE.exec( text )) {

			//var varPath = results[1];
			//console.log( item.id + 'require: ' + varPath );

			let unlocker = results[1].split('.')[0];
			if ( unlocker === 'mod' || unlocker === 'slot' ) continue;
			this.mapIdRequire( targ, unlocker, graph );

		}
		if ( text.includes('this') || text.includes('s.') ) this.mapIdRequire( targ, targ.id, graph );

	}

	/**
	 *
	 * @param {GData} targ
	 * @param {object} vars
	 * @param {<string,GData[]>} graph
	 */
	mapObjRequire( targ, vars, graph ) {

		for( let p in vars ) {
			this.mapIdRequire( targ, p, graph );
		}

	}

	/**
	 * Map unlocker as a potential unlocker of targ.
	 * @param {GData} targ - target of the unlock attempt.
	 * @param {string} unlocker
	 * @param {<string,GData[]>} graph - the tech tree being mapped, needs or unlocks.
	 */
	mapIdRequire( targ, unlocker, graph ) {

		if ( !unlocker) return;
		let it = this.datas[unlocker];

		if ( it === undefined ) return;
		else if ( it instanceof TagSet ) {
			return it.forEach( v=>{
				//console.log( it.id + ': ' +v.id + ' unlock: ' + targ.id );
				this.mapIdRequire( targ, v.id, graph)}
			);
		}

		let map = graph[unlocker];
		if ( map === undefined ) graph[unlocker] = map = [];
		if ( !map.includes( targ.id ) ) map.push( targ.id );

	}

}