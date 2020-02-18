import Context from "./context";

/**
 * @property {Map.<string,GData>} NpcItems - clone of base game data used by Npcs
 * without modifiers, player effects etc.
 */
export const NpcItems = new Map();

const MakeNpcItem = (p,data)=>{

	let t;

	if ( typeof data.template !== 'object' || !data.constructor ) t = data;
	else t = new data.constructor( data.template );

	NpcItems.set( p, t );
	return t;

}

export class NpcContext extends Context {

	constructor( caster, state ){

		super( state );
		this.caster = caster;
		console.log('NEW NPC CONTEXT');

	}

	/**
	 *
	 * @param {string} p
	 */
	getData( p ){

		let it = this.state[p];
		if ( it !== undefined ) return it;

		console.log('NPC ITEM SEARCH: ' + p );
		it = NpcItems.get(p);
		if ( it !== undefined ) return it;

		it = this.state.getData(p);
		if ( it ) {
			console.log('NEW NPC ITEM: ' + p );
			return MakeNpcItem( p, it );
		}

		return null;

	}

}