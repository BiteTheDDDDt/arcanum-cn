import Npc from '../chars/npc';
import Wearable from "../chars/wearable";
import { includesAny} from 'objecty';
import Percent from '../values/percent';
import Item from '../items/item';
import GenGroup from '../genGroup';
import { pushNonNull } from '../util/array';
import GData from '../items/gdata';
import { WEARABLE, MONSTER, ARMOR, WEAPON, TYP_PCT, EVENT, ITEM, POTION, TYP_RANGE, NPC, TASK, ENCOUNTER } from '../values/consts';
import { CreateNpc } from '../items/monster';
import TagSet from '../composites/tagset';
import ProtoItem from '../protos/protoItem';

/**
* Hacky implementation of flatMap since stupid browsers don't support.
* @param {*} p
* @param {*} t
*/
const flatMap = ( p, t )=>{

	let a = [];
	let len = this.length;
	for( let i = 0; i < len; i++ ) {

		let v = this[i];

		if ( Array.isArray( v ) ) {

			v = v.flatMap( p, t );
			for( let j = 0; j < v.length; j++) {
				a.push(v[j]);
			}

		} else {
			a.push( p.call( t, v ) );
		}

	}
	return a;

}

/**
 * Revive an instanced item based on save data.
 * converts template string to actual template object before instancing/revive.
 * @param {GameState} gs
 * @param {object} save
 */
export function itemRevive( gs, save ) {

	if ( !save ) {
		console.warn('Missing gen item: ' + save );
		return null;
	}

	var orig = save.template || save.recipe;

	if ( typeof orig === 'string') orig = gs.getData( orig );
	var type = orig !== undefined ? ( orig.type || save.type ) : save.type;

	if ( !type) {

		if ( !save.id ) return null;

		console.warn( save.id + ' unknown type: ' + type + ' -> ' + save.template + ' -> ' + save.recipe );
		type = 'item';

	}

	if ( type === ARMOR || type === WEAPON || type === WEARABLE) {

		save = new Wearable( orig,save);

	} else if ( type === MONSTER || type === NPC ) {

		//it.template = orig;
		save = new Npc( orig, save );

	} else {
		//console.log('default revive: ' + it.id );
		save = new Item( orig, save );
	}
	save.owned = true;

	save.revive( gs );

	return save;

}

/**
 * Generates random Equipment from Item data, and instantiates Items from prototypes.
 */
export default class ItemGen {

	constructor( game ){

		this.game = game;
		this.state = game.state;

		/**
		 * Groups of item types to generate. 'armor', 'weapon', 'monster' etc.
		 */
		this.groups = {};

		this.luck = this.state.getData('luck');

		/*this.initGroup( ARMOR, this.state.armors );
		this.initGroup( WEAPON, this.state.weapons );*/

		this.initGroup( WEARABLE, this.state.weapons.concat(this.state.armors ) );
		this.initGroup( 'materials', this.state.materials );
		this.initGroup( 'properties', this.state.properties );

	}

	/**
	 * Retrieve a random encounter matching criteria.
	 * @param {object} data
	 * @param {string} biome
	 * @param {number} pct - percent through locale.
	 */
	randEncounter( data, biome, pct=1 ) {

		var level = data.level || 1;
		if ( typeof level ==='object') {

			if ( level.type === TYP_RANGE ) level = level.percent(pct);
			else level = level.value*pct;

		}

		if ( data.range ) level += (data.range*( -1 + 2*Math.random() ) );
		level = Math.ceil(level);

		if ( !this.groups.hasOwnProperty(ENCOUNTER)) this.initGroup( ENCOUNTER, this.state.encounters );
		return this.groups[ENCOUNTER].randAt( level );

	}

	/**
	 * Generate an enemy from rand definition.
	 * @param {object} data
	 * @param {string|string[]} biome
	 * @param {number} [pct=1] level modifier / progress within dungeon.
	 */
	randEnemy( data, biome, pct=1 ) {

		if ( !this.groups.hasOwnProperty(MONSTER) ) this.initGroup( MONSTER, this.state.monsters, ['biome','kind'] );

		if ( biome ) {
			return randByBiome( data, biome, pct );
		}

		var level = data.level || 1;
		if ( typeof level ==='object') {

			if ( level.type === TYP_RANGE ) level = level.percent(pct);
			else level = level.value*pct;

		}

		if ( data.range ) level += (data.range*( -1 + 2*Math.random() ) );
		level = Math.ceil(level);

		let npc = this.groups[ MONSTER ].randAt( level );
		return npc ? CreateNpc( npc, this.game ) : null;

	}

	/**
	 *
	 * @param {object} data
	 * @param {string|string[]} biome
	 * @param {number} level
	 */
	randByBiome( data, biome, level ) {


	}

	/**
	 * Instantiate a prototypical item.
	 * @param {object} proto
	 * @returns {Item|Wearable} the item created, or null on failure.
	 */
	instance( proto ) {

		let it;

		if ( proto.disabled || proto.locked || this.state.hasUnique(proto) ) {
			return null;
		}

		if ( proto.type === ARMOR || proto.type === WEAPON || proto.type === WEARABLE ) {

			console.log('itgen wearable: ' + proto.id );
			it = this.fromProto(proto);

		} else if ( proto.type === POTION ) {

			it = new Item(proto);

		} else if ( proto.type === ITEM) {

			it = new Item( proto );

		} else if ( proto.type === MONSTER || proto.type === NPC ) {
			return CreateNpc(proto, this.game);
		}

		if ( it === undefined ) return null;

		it.id = this.state.nextId(it.id);

		//this.state.addInstance(it);
		it.value = 1;
		it.owned = true;

		return it;

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

		if ( Array.isArray(info) ) {
			return info.flatMap ?  info.flatMap( this.getLoot, this )
				: flatMap.call( info, this.getLoot, this )
		}

		if ( typeof info === 'string' ) info = this.state.getData(info);
		if (!info) return null;

		if ( info[TYP_PCT] && (100*Math.random() > info[TYP_PCT]) ) return null;
		if ( info instanceof GData || info instanceof TagSet ) return this.getGData( info, amt );
		else if ( info.id ) return this.instance(info);

		else if ( info.level || info.maxlevel ) return this.randLoot( info, amt );

		return this.objLoot( info );

	}

	/**
	 * Loot specified by subobject.
	 * @param {object} info
	 */
	objLoot( info ){

		let items = [];
		for( let p in info ) {
			//console.log('GETTING SUB LOOT: ' + p);
			var it = this.getLoot( p, info[p] );
			if ( !it ) continue;
			else if ( Array.isArray(it)) items = pushNonNull( items, it );
			else items.push(it );
		}

		return items;

	}

	/**
	 * Get some amount of non-instanced gameData.
	 * @param {GData} it
	 * @param {number} [amt=1]
	 */
	getGData( it, amt=1 ) {

		if ( !it ) return null;

		if ( it instanceof TagSet ) it = it.random();
		if ( this.state.hasUnique(it) ) return null;

		if ( it.instanced || it.isRecipe ) return this.instance( it );

		if ( typeof amt === 'number' || typeof amt === 'boolean') {

			if ( it.type === 'upgrade' || it.type === TASK || it.type === 'furniture' || it.type === EVENT) it.doUnlock( this.game );
			else {
				it.amount( amt );
				if ( amt > 0 ) return it.name;
			}

		} else console.warn('bad amount: '+ it + ' -> ' + amt );

		return null;
	}

	/**
	 * Return loot from an object of random parameters.
	 * @param {object} info
	 */
	randLoot( info ) {

		if ( (100+this.luck/2)*Math.random() < 50 ) return null;

		let material = info.material;
		let type = info.type;

		if ( material ) { material = this.state.getData(material); }
		if ( type ) { type = this.state.getData(type); }

		if ( !type && !material ) {
			type = this.groups[WEARABLE].randBelow( info.maxlevel || info.level );
		}

		if ( material && !type ) {
			type = this.getCompatible( this.groups[WEARABLE], material, info.maxlevel||info.level );

		} else if ( type && !material ) {
			material = this.getCompatible( this.groups.materials, type, info.maxlevel||info.level );
		}

		return this.fromProto( type, material );

	}

	/**
	 * Return a random item of the given level.
	 * @param {number} [level=0]
	 * @param {?string} [type=null]
	 * @param {?string|Material} [mat=null] - item material.
	 */
	randAt( level=0, type=null, mat=null ){

		type = type || WEARABLE;

		let g = this.groups[type];

		if ( g ) {

			let it = g.randBy('level', level );
			if (it ) return this.fromProto( it, mat || level );

		} else console.warn('No group: ' + type);

		return null;

	}

	/**
	 * Get random item of given level or below.
	 * @param {number} [maxlevel=1] - maximum level of item to return.
	 * @param {?string} [type=null] - kind of item to generate.
	 * @param {?string|Material} [mat=null] - item material.
	 * @returns {Wearable|null}
	 */
	randBelow( maxlevel=1, type=null, mat=null ){

		type = type || WEARABLE;
		let g = this.groups[type];

		maxlevel = Math.floor( 1 + Math.random()*maxlevel );

		let it = g.randBelow( maxlevel );
		return it ? this.fromProto( it, mat || maxlevel ) : null;

	}

	/**
	 * Get an item from a Group compatible with the given item.
	 * Used to pick a Material for a Wearable, or a Wearable for a material.
	 * @param {GenGroup} group - group to pick an item from.
	 * @param {Item} item - chosen item must be compatible with item.
	 * @returns {object|null}
	 */
	getCompatible( group, item, level=1 ) {

		let only = item.only;
		let exclude = item.exclude;

		let mat = item.material ? item.material.id : null;

		return group.randBelow( Math.max( item.level+1, level ),
			v=>{

 				if ( only && !includesAny(only, v.type, v.kind, v.id ) ) return false;
				if ( exclude && includesAny(exclude, v.type, v.kind, v.id) ) return false;

				if ( v.only && !includesAny( v.only, item.type, item.kind, item.id, mat ) ) return false;
				if ( v.exclude && includesAny( v.exclude, item.type, item.kind, item.id, mat ) ) return false;
				return true;

			}
		);

	}

	/**
	 * @private
	 * Generate a new item from a template item.
	 * @param {Wearable} data
	 * @param {string|Material|number} material - material or material level.
	 */
	fromProto( data, material=null ) {

		//console.log('wearable from data');
		if ( data === null || data === undefined ) return null;

		let mat = data.material || material;
		if ( typeof mat ==='number' ) mat = this.getCompatible( this.groups.materials, data, mat );
		else if ( typeof mat === 'string' ) mat = this.state.getData( mat );

		return this.makeWearable( data, mat );

	}

	genProperties( it, count ) {

		let propGroup = this.groups.properties;

		if ( typeof count === 'object') count = Math.round(count.value);
		if ( count <= 0 ) return;

		console.log( it.name + ' props lvl: ' +  it.level + '  kind: ' + it.kind );

		for( count; count > 0; count-- ) {
			it.addProperty( this.getCompatible( propGroup, it, it.level ) );

		}

	}

	/**
	 * @private
	 * @param {ProtoItem} data
	 * @param {*} material
	 */
	makeWearable( data, material ) {

		let item = new Wearable( data );

		if ( material ) {

			item.applyMaterial( material );

		} else item.name = (data.name || data.id );

		if ( data.properties ){
			this.genProperties( item, data.properties );
		}

		item.id = this.state.nextId(item.id);
		//this.state.addInstance( item );

		return item;
	}

	/**
	 * Create a group of Generable objects. All groups have a level filter by default
	 * and additional filters can be created.
	 * @param {string} name - group name.
	 * @param {Item[]} items - items to add to group.
	 * @param {?string[]} [filters=null] additional filters to use in group creation.
	 * @returns {GenGroup}
	 */
	initGroup( name, items, filters=null ) {

		if ( !items ) {
			console.warn( 'group undefined: ' + name );
			return;
		}

		let g = this.groups[name] = new GenGroup(items);
		g.makeFilter('level');

		if ( filters ) {
			for( let i = filters.length-1; i >= 0; i--) g.makeFilter( filters[i]);
		}
		return g;

	}

}