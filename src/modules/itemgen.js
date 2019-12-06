import Game from '../game';
import Wearable from "../chars/wearable";
import { includesAny} from 'objecty';
import Percent from '../values/percent';
import Item from '../items/item';
import Encounter from '../items/encounter';
import Npc from '../chars/npc';
import GenGroup from '../genGroup';
import { pushNonNull, logObj } from '../util/util';
import GData from '../items/gdata';
import { ENCOUNTER, WEARABLE, MONSTER, ARMOR, WEAPON, TYP_PCT, EVENT, ITEM, POTION } from '../values/consts';

/**
 * Revive a prototyped item based on an item template.
 * converts template string to actual template object before instancing/revive.
 * @param {GameState} gs
 * @param {object} it
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

		if ( !it.id ) return null;

		console.warn('gen unknown: ' + it.id + ' -> ' + it.template + ' -> ' + it.recipe );
		type = 'item';
	}
	it.template = orig;

	if ( type === ARMOR || type === WEAPON || type === WEARABLE) {

		it = new Wearable(it);

	} else if ( type === MONSTER) {

		it = new Npc( orig, it );

	} else if ( type === ENCOUNTER) {

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

		this.initGroup( ARMOR, state.armors );
		this.initGroup( WEAPON, state.weapons );
		this.initGroup( 'materials', state.materials );

		let g = this.initGroup( MONSTER, state.monsters );
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
	 * @param {object} data
	 * @param {string|string[]} biome
	 * @param {number} [pct=1] level modifier / progress within dungeon.
	 */
	randEnemy( data, biome, pct=1 ) {

		var level;

		if ( data.level ) {

			level = data.level;

			if ( level instanceof Object ) level =  level.value;
			if ( data.scale ) level *= pct;

		} else if ( data.min && data.max ) {

			level = data.min + pct*(data.max - data.min);

		} else level = 1;

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

		if ( proto.type === ARMOR || proto.type === WEAPON || proto.type === WEARABLE ) {

			console.log('INSTANCE wearable: ' + proto.id );
			return this.makeWearable( proto, this.matForItem(proto ));

		} else if ( proto.type === ENCOUNTER ) {

			it = new Encounter(proto);

		} else if ( proto.type === POTION ) {

			it = new Item(proto);

		} else if ( proto.type === ITEM) {

			it = new Item( proto );

		} else if ( proto.type === MONSTER ) return this.npc(proto);

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

		let mat = data.material || material;
		if ( typeof mat ==='number' ) mat = this.matForItem( data, mat );
		if ( typeof mat === 'string' ) mat = this.state.getData( mat );

		return this.makeWearable( data, mat );

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
				: this.flatMap.call( info, this.getLoot, this )
		}

		if ( typeof info === 'string' ) {

			info = this.state.getData(info);

			if ( Game.state.hasUnique(info) ) {
				return null;
			}

			if ( info instanceof GData && !info.isRecipe && !info.instance) {

				return this.getGData( info, amt );

			}

		}

		if (!info) return null;

		if ( info[TYP_PCT] && (100*Math.random() > info[TYP_PCT]) ) return null;

		if ( info.type === WEARABLE || info.type === WEAPON
				|| info.type ===ARMOR) return this.fromData( info, info.material );

		else if ( info.instance || info.isRecipe ) {
			return this.instance( info );
		} else if ( info.level || info.max ) return this.randLoot( info, amt );

		return this.objLoot( info );

	}

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
	 * Hacky implementation of flatMap since stupid browsers don't support.
	 * @param {*} p
	 * @param {*} t
	 */
	flatMap( p, t ){

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
	 * Return loot from an object of rand parameters.
	 * @param {object} info
	 * @param {*} amt
	 */
	randLoot( info ) {

		if ( (100+this.luck/2)*Math.random() < 50 ) return null;

		if ( info.level ) return this.fromLevel( info.level/2, info.type, info.material );
		else if ( info.max ) return this.randBelow( info.max/2, info.type, info.material );

	}

	/**
	 * Get some amount of non-instanced gameData.
	 * @param {*} it
	 * @param {*} amt
	 */
	getGData( it , amt ) {

		if ( typeof amt === 'number' || typeof amt === 'boolean') {

			if ( it.type === 'upgrade' || it.type === 'action' || it.type === 'furniture' || it.type === EVENT) it.doUnlock( Game );
			else {
				it.amount( Game, amt );
				if ( amt > 0 ) return it.name;
			}

		} else console.warn('bad amount: '+ it + ' -> ' + amt );

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

			let it = g.randBy('level', level );
			if (it ) return this.fromData( it, mat || level );

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
	wearableType() { return Math.random() < 0.65 ? ARMOR : WEAPON; }

	makeWearable( data, material ) {

		let item = new Wearable(data);

		if ( material ) {

			item.applyMaterial( material );
			if ( material.id ) item.name = material.id + ' ' + ( data.name || data.id );

		} else item.name = (data.name || data.id );

		item.id = data.id + this.state.nextIdNum();

		return item;
	}


}