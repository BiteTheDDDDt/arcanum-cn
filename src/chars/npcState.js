import {cloneClass} from 'objecty';
import { PrepData } from '../modules/parsing';

/**
 * Proxy GameState for Npcs
 */
export class NpcState {

	constructor( gs, caster){

		this.state = gs;
		this.self = caster;

		/**
		 * @property {Map<string,GData>} npcItems
		 */
		this.npcItems = new Map();


	}

	//get player(){return this.self; }

	nextId(id){
		return this.state.nextId(id);
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
		// e.g. explore. @todo many issues with this.
		if ( p === 'self' ) {
			return this.self;
		} else if ( this.state[p] ) return this.state[p];

		let it = this.npcItems.get(p);
		if ( it !== undefined ) return it;



		it = this.state.getData(p);
		if ( it ) {

			if ( it.isRecipe ) return it;
			//console.log('NEW NPC ITEM: ' + p + ': ' + it );
			return this.makeNpcItem( p, it );

		} else console.log('item not found: ' + p );

		return null;

	}

	makeNpcItem( p, data ){

		//console.log('MAKE NPC ITEM: ' + data.id );

		let copy;

		if ( data.template ) {
			copy = cloneClass( data.template  || data);
			copy = PrepData(copy, data.id );
		} else copy = cloneClass(data,{});

		if ( data.constructor ) {
			//console.log('using constr: ' + data.constructor.name );
			copy = new data.constructor( copy );
		}

		if ( copy === null || copy === undefined ) {
			console.log('NPC: Cant create: ' + p );
			copy = data;
		}

		this.npcItems.set( p, copy );
		return copy;
	}

}