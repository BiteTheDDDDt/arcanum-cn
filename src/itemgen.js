import Game from './game';
import Wearable from "./chars/wearable";
import { includesAny} from 'objecty';
import Percent from './values/percent';
import Item from './items/item';
import Encounter, { ENCOUNTER } from './items/encounter';
import Npc from './chars/npc';
import GenGroup from './genGroup';
import { pushNonNull, logObj } from './util/util';
import GData from './items/gdata';
import events, { EVT_UNLOCK } from './events';

/**
 * Revive a prototyped item based on an item template.
 * converts template string to actual template object before instancing/revive.
 * @param {GameState} gs
 * @param {object|string} it
 */
export function itemRevive(gs, it ) {

		if ( !it ) {
			console.warn('Missing gen item: ' + it );
			return null;
		}

		var orig = it.template || it.recipe;
		if ( typeof orig === 'string') orig = gs.getData( orig );

		var type = orig ? orig.type : it.type;

		if ( !type) {
			console.warn('gen unknown: ' + it.id + ' -> ' + it.template + ' -> ' + it.recipe );
			type = 'item';
		}
		it.template = orig;

		if ( type === 'armor' || type === 'weapon' || type === 'wearable') {

			it = new Wearable(it);

		} else if ( type === 'monster') {

			it = new Npc( orig, it );

		} else if ( type === 'enc') {

			// encounter.
			it = new Encounter( orig, it );

		} else {
			//console.log('default revive: ' + it.id );
			it = new Item(it);
		}
		it.owned = true;

		it.revive( gs );

		return it;

}

/**
 * Generates random Equipment from Item data, and instantiates Items from prototypes.
 */
export default class ItemGen {

	constructor( state ){

		this.state = state;

		/**
		 * Groups of item types to generate. 'armor', 'weapon', 'monster' etc.
		 */
		this.groups = {};

		this.luck = state.getData('luck');

		this.initGroup( 'armor', state.armors );
		this.initGroup( 'weapon', state.weapons );
		this.initGroup( 'materials', state.materials );

		let g = this.initGroup('monster', state.monsters );
		g.makeFilter( 'biome' );
		g.makeFilter( 'kind' );

	}

	npc( proto ) {

		let it = new Npc( proto );
		it.value = 1;
		it.name = proto.name;
		it.id = this.state.nextId( proto.id );
		return it;

	}

	/**
	 * Generate an enemy from rand definition.
	 * @param {*} data
	 * @param {number} [pct=1] level modifier
	 */
	randEnemy( data, pct=1 ) {

		var level = 1;

		if ( data.level ) {

			level = data.level;

			if ( level instanceof Object ) level =  level.value;
			if ( data.scale ) level *= pct;

		} else if ( data.min && data.max ) {

			level = data.min + pct*(data.max - data.min);

		}

		if ( data.range ) level += (data.range*( -1 + 2*Math.random() ) );
		level = Math.ceil(level);

		let npc = this.groups.monster.randBelow( level );
		return npc ? this.npc(npc) : null;

	}

	/**
	 * Instantiate a prototypical item.
	 * @param {object} proto
	 * @returns {Item|Wearable} the item created, or null on failure.
	 */
	instance( proto ) {

		let it;

		if ( proto.type === 'armor' || proto.type === 'weapon' || proto.type === 'wearable' ) {

			//console.log('instance wearable: ' + proto.id );
			return this.itemClone( proto, this.matForItem(proto ));

		} else if ( proto.type === ENCOUNTER ) {

			it = new Encounter(proto);

		} else if ( proto.type === 'potion' ) {

			it = new Item(proto);

		} else if ( proto.type === 'item') {

			it = new Item( proto );

		} else if ( proto.type === 'monster') return this.npc(proto);

		if ( it === undefined ) return null;

		it.id = proto.id + this.state.nextIdNum();
		it.value = 1;
		it.owned = true;

		return it;

	}

	/**
	 * Generate a new item from a template item.
	 * @param {Wearable} data
	 * @param {string|Material|number} material - material or material level.
	 */
	fromData( data, material=null ) {

		//console.log('wearable from data');
		if ( data === null || data === undefined ) return null;

		let mat = material || data.material;
		if ( (typeof mat ==='number') || !mat ) mat = this.matForItem( data, mat );

		if ( typeof mat === 'string' ) mat = this.state.getData( mat );

		return this.itemClone( data, mat );

	}

	/**
	 * Generate loot from looting info.
	 * @param {string|Wearable|Object|Array} info
	 * @returns {?Wearable|Wearable[]}
	 */
	getLoot( info, amt=1 ) {

		if ( amt instanceof Percent ) {

			if ( !amt.roll( this.luck.value ) ) return null;
			amt = 1;

		} else if ( amt.value ) amt = amt.value;

		if ( Array.isArray(info) ) return info.flatMap( this.getLoot, this );

		if ( typeof info === 'string' ) {

			info = this.state.getData(info);
			if ( info instanceof GData && !info.isRecipe && !info.instance) {

				return this.getGData( info, amt );

			}

		}

		if (!info) {
			console.log('NULL gen.')
			return null;
		}

		if ( info.pct && (100*Math.random() > info.pct) ) return null;

		if ( info.type === 'wearable' || info.type === 'weapon'
				|| info.type ==='armor') return this.fromData( info, info.level );

		else if ( info.instance || info.isRecipe ) {
			return this.instance( info );
		}

		return this.randLoot( info, amt );

	}

	/**
	 * Return loot from an object of rand parameters.
	 * @param {*} info
	 * @param {*} amt
	 */
	randLoot( info, amt ) {

		if ( info.level ) return this.fromLevel( info.level, info.type, info.material );
		else if ( info.max ) return this.randBelow( info.max, info.type, info.material );

		let items = [];
		for( let p in info ) {
			//console.log('GETTING SUB LOOT: ' + p);
			var it = this.getLoot( p, info[p] );
			if (!it) continue;
			else if ( Array.isArray(it)) items = pushNonNull( items, it );
			else items.push(it );
		}

		return items;

	}

	/**
	 * Get some amount of non-instanced gameData.
	 * @param {*} it
	 * @param {*} amt
	 */
	getGData( it , amt ) {

		if ( typeof amt === 'number' || typeof amt === 'boolean') {

			if ( it.type === 'upgrade') it.doUnlock( Game );
			else it.amount( Game, amt );
			if ( amt > 0 ) return it.name;

		} else console.warn('unknown amount: '+ it + ' -> ' + amt );

		return null;
	}

	/**
	 * Return a random item of the given level.
	 * @param {number} [level=0]
	 * @param {?string} [type=null]
	 * @param {?string|Material} [mat=null] - item material.
	 */
	fromLevel( level=0, type=null, mat=null ){

		type = type || this.wearableType();

		let g = this.groups[type];

		if ( g ) {

			let it = g.filterRand('level', level );
			if (it ) return this.fromData( it, mat || maxLevel );

		} else console.warn('No group: ' + type);

		return null;

	}

	/**
	 * Get random item of given level or below.
	 * @param {number} [maxLevel=1] - maximum level of item to return.
	 * @param {?string} [type=null] - kind of item to generate.
	 * @param {?string|Material} [mat=null] - item material.
	 * @returns {Wearable|null}
	 */
	randBelow( maxLevel=1, type=null, mat=null ){

		type = type || this.wearableType();
		let g = this.groups[type];

		maxLevel = Math.floor( 1 + Math.random()*maxLevel );

		let it = g.randBelow( maxLevel );
		return it ? this.fromData( it, mat || maxLevel ) : null;

	}

	/**
	 *
	 * @param {string} name - group name.
	 * @param {Item[]} items
	 * @returns {GenGroup}
	 */
	initGroup( name, items ) {

		if ( !items ) {
			console.warn( 'group undefined: ' + name );
			return;
		}

		let g = this.groups[name] = new GenGroup(items);
		g.makeFilter('level');

		return g;

	}

	/**
	 * Get a material compatible with the given item data.
	 * @param {Item} item
	 * @returns {Material|null}
	 */
	matForItem( item, level=1 ) {

		let only = item.only;
		let exclude = item.exclude;

		return this.groups.materials.randBelow( Math.max( item.level+1, level ),
			v=>{

				if ( only && !includesAny(only, v.type, v.kind ) ) return false;
				if ( exclude && includesAny(exclude, v.type, v.kind, v.name) ) return false;

				if ( v.only && !includesAny( v.only, item.type, item.kind ) ) return false;
				if ( v.exclude && includesAny( v.exclude, item.type, item.kind ) ) return false;
				return true;

			}
		);

	}

	/**
	 * Pick wearable type.
	 * @returns {string}
	 */
	wearableType() { return Math.random() < 0.65 ? 'armor' : 'weapon'; }

	itemClone( data, material ) {

		data = new Wearable(data);

		if ( material ) {
			data.applyMaterial( material );
			data.name = material.id + ' ' + data.name;
		} else data.name = data.name;

		data.id = data.id + this.state.nextIdNum();

		return data;
	}


}