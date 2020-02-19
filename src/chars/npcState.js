import {cloneClass} from 'objecty';

/**
 * @property {Map.<string,GData>} NpcItems - clone of base game data used by Npcs
 * without modifiers, player effects etc.
 */
export const NpcItems = new Map();

const MakeNpcItem = (p,data)=>{

	let t;

	if ( typeof data.template !== 'object' || !data.constructor ) t = cloneClass( data );
	else t = new data.constructor( cloneClass( data.template) );

	if ( t === null || t === undefined ) {
		console.log('NPC: Cant create: ' + p );
		t = data;
	}

	NpcItems.set( p, t );
	return t;

}

/**
 * Proxy GameState for Npcs
 */
export class NpcState {

	constructor(gs){

		this.state = gs;

	}

	getSlot(id, type) {
		return null;
	}

	setSlot(slot, v){
		return;
	}

	findInstance(id){
		return null;
	}

	getUnique(id){return this.state.getUnique(id)}

	getMaterial(id) { return this.state.getMaterial(id)}

	findData(id, any=false) {
		return this.getData(p);
	}

	hasUnique(id){return false}

	/**
	 *
	 * @param {string} p
	 */
	getData( p ){

		// appears to be check for special variables defined on state directly;
		// e.g. raid, explore. too many issues with this...
		//let it = this.state[p];
		//if ( it !== undefined ) return it;

		let it = NpcItems.get(p);
		if ( it !== undefined ) return it;

		it = this.state.getData(p);
		if ( it ) {
			console.log('NEW NPC ITEM: ' + p + ': ' + it );
			return MakeNpcItem( p, it );
		} else console.log('item not found: ' + p );

		return null;

	}

}