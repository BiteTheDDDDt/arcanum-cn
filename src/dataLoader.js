import GData from './items/gdata';

import Range, {RangeTest} from './values/range';
import Percent, {PercentTest} from './values/percent';
import {ParseMods } from './modules/parsing';

import Resource from './items/resource';
import RevStat from './items/revStat';
import StatData from './items/statData';
import Skill from './items/skill';
import Monster from './items/monster';

import Dungeon from './items/dungeon';
import Locale from './items/locale';

import Spell from './items/spell.js';
import Task from './items/task';

import { mergeSafe } from 'objecty';
import ProtoItem from './protos/protoItem';
import Material from './chars/material';
import Enchant from './items/enchant';
import Item from './items/item';
import Potion from './items/potion';
import Encounter from './items/encounter';
import GEvent from './items/gevent';

import Player from './chars/player';

import Loader from './util/jsonLoader';
import { splitKeyPath } from './util/util';
import GClass from './items/gclass';
import Module from './modules/module';
import { SKILL, ENCOUNTER, MONSTER, ARMOR, WEAPON, HOME, POTION, ITEM, RESOURCE, EVENT, RAID } from './values/consts';
import { MakeDmgFunc } from 'values/combat';
import Stat from './values/stat';
import State from './chars/state';
import PerValue, { IsPerValue } from './values/pervalue';
import { SubPath } from './values/rvalue';
import { mergeInto } from './util/array';

const DataDir = './data/';

// list of all files to load.
const ModFiles = 'modules';

/**
 * @const {RegEx} IdTest - Test for a simple id name.
 */
const IdTest = /^[A-Za-z_]+\w*$/;

/**
 *
 * @param {string[]} fileList
 * @param {string} [dir=DataDir]
 * @returns {Promise.<string,object>}
 */
export const loadFiles = ( fileList, dir=DataDir ) => {

	let loader = new Loader( dir, fileList );
	return loader.load();

}

/**
 * @todo replace with server call.
 */
export default {

	/**
	 * @property {GModule} module - main module.
	 */
	main:null,

	/**
	 * Load information on all available data files.
	 * @param {string} srcList - name of file specifying mod list.
	 * @returns {object}
	 */
	async loadModInfo( srcList ) {

		// load the local list of mod files then load all listed files.
		return loadFiles( [srcList] ).then( list=>{
			if (!list) throw new Error('Mod list not found.');
			return list[srcList];
		});

	},

	async loadGame( saveData ) {

		if ( this.main === null ) {

			let files = await this.loadModInfo( ModFiles );
			this.main = await new Module().load( files.core );

			if ( files.modules ) {
				await this.main.load( files.modules, DataDir + 'modules/' );
			}

		}

		return this.instance( this.main.templates, this.main.lists, saveData );

	},

	/**
	 * At this point dataLists and templates both refer to the same data.
	 * dataLists just have it separated by type.
	 * @param {.<string,object>} templates
	 * @param {.<string,object[]>} dataLists
	 * @param {object} saveData
	 * @returns {object} initialized save&game data.
	 */
	instance( templates, dataLists, saveData={} ){

		saveData = saveData || {};

		// restore Percent/Range classes /special functions of non-item data.
		for( let p in saveData ) {

			// items prepped separately so template can be written over, then prep, then template assigned.
			if ( p === 'items') continue;
			saveData[p] = prepData( saveData[p], p );

		}

		// Remove items with outdated/aliased names.
		let items = saveData.items;
		if ( items ) {

			for( let p in templates ) {

				let t = templates[p];
				if ( t.alias && !items[p] ) {
					// check aliased item.
					var it = items[t.alias];
					if ( it ) {
						console.warn('alias: ' + t.alias + ' -> ' + p );
						items[p] = it;
						delete items[t.alias];
					}
				}

			}

		} else items = {};

		// Merge and ensure game data item for every template.
		saveData.items = this.mergeItems( items, templates );

		// replace original data list items with saveData items.
		let gameLists = this.buildLists( saveData.items, dataLists );

		return this.initInstance( saveData, gameLists );

	},

	/**
	 * Use prepped item data to form data lists matching the
	 * datalists from the raw data files.
	 * @param {.<string,object>} items
	 * @param {.<string,object[]>} dataLists
	 * @returns {.<string,object[]>} lists of items matching lists of loaded data.
	 */
	buildLists( items, dataLists ){

		let gameLists = {};

		for( let p in dataLists ) {

			var dataList = dataLists[p];
			// possibly missing file or empty list.
			if ( !dataList ) continue;

			// lists of game-item data by type.
			var gameList = gameLists[p] = [];

			for( let i = 0; i < dataList.length; i++ ) {
				gameList[i] = items[ dataList[i].id ];
			}

		}

		return gameLists;

	},

	/**
	 * Merge template data into saved data items.
	 * @param {Object} saveItems - previous save items.
	 * @param {.<string,Object>} templates - template items..
	 * @returns {.<string,Object>} - the saveItems with data merged from default data.
	 */
	mergeItems( saveItems, templates ) {

		/**
		 * @note ordering.
		 * 1) raw template merged over raw save.
		 * 2) data prepared with type instances.
		 * 3) template assigned LAST because the template is frozen and can't be prepped.
		 */
		for( let p in templates ) {

			var saveObj = saveItems[p] || {};

			if ( typeof saveObj === 'number') {
				saveObj = { val:saveObj };
			}
			mergeSafe( saveObj, templates[p] );

			saveItems[p] = prepData( saveObj, p );

			saveObj.template = templates[p];

		}

		return saveItems;

	},

	initInstance( inst, lists ){

		var items = inst.items;

		if ( lists.resources) inst.resources = this.initItems( items, lists['resources'], Resource );

		if ( lists.stressors ) {
			inst.stressors = this.initItems( items, lists['stressors'], Resource, 'stress', 'stress' );
			inst.stressors.forEach(v=>v.hide=true);
		}

		if ( lists.upgrades ) inst.upgrades = this.initItems( items, lists['upgrades'], GData, null, 'upgrade' );

		if ( lists.homes ) {
			inst.homes = this.initItems( items, lists['homes'], GData, HOME, HOME );
			inst.homes.forEach( v=>v.slot=HOME);
		}

		if ( lists.furniture ) this.initItems( items, lists['furniture'], GData, 'furniture', 'furniture' );

		if ( lists.skills ) inst.skills = this.initItems( items, lists['skills'], Skill, SKILL );

		if ( lists.encounters ) inst.encounters = this.initItems( items, lists['encounters'], Encounter, ENCOUNTER, ENCOUNTER);
		if ( lists.monsters ) inst.monsters = this.initItems( items, lists['monsters'], Monster, MONSTER, MONSTER );

		if ( lists.rares ) inst.rares = this.initItems( items, lists['rares'], ProtoItem );
		if ( lists.states ) inst.states = this.initItems( items, lists['states'], State, 'state', 'state' )

		if ( lists.locales ) this.initItems( items, lists['locales'], Locale );
		if ( lists.dungeons ) this.initItems( items, lists['dungeons'], Dungeon );
		if ( lists.spells ) this.initItems( items, lists['spells'], Spell );

		if ( lists.stats ) this.initItems( items, lists['stats'], StatData, 'stat', 'stat' );


		this.initItems( items, lists['items'], Item, ITEM, ITEM);

		if ( lists.armors ) {
			inst.armors = this.initItems( items, lists['armors'], ProtoItem, ARMOR,ARMOR );
			inst.armors.forEach( v=>v.kind = v.kind || ARMOR );
		}

		if ( lists.weapons ) {
			inst.weapons = this.initItems( items, lists['weapons'], ProtoItem, WEAPON, WEAPON );
			inst.weapons.forEach(v=>v.kind=v.kind ||WEAPON);
		}

		if ( lists.potions ) inst.potions = this.initItems( items, lists['potions'], Potion, POTION, POTION );

		if ( lists.materials ) inst.materials = this.initItems( items, lists['materials'], Material, 'material', 'material ');

		if ( lists.events ) inst.events = this.initItems( items, lists['events'], GEvent, EVENT, EVENT );
		if ( lists.classes ) inst.classes = this.initItems( items, lists['classes'], GClass, 'class', 'class' );

		if ( lists.tasks ) inst.tasks = this.initItems( items, lists['tasks'], Task, null, 'task' );
		if ( lists.actions ) {
				inst.tasks = this.mergeTasks( inst.tasks, this.initItems( items, lists.actions, Task, null, 'task' ) );
		}

		if ( lists.enchants ) inst.enchants =this.initItems( items, lists['enchants'], Enchant, null, 'enchant' );
		if ( lists.sections ) inst.sections = this.initItems( items, lists['sections']);

		if ( lists.player ) inst.player = this.initPlayer( items, lists['player'], inst.items.player );

		return inst;

	},

	/**
	 * Merge old action files with new ones, removing dupe ids.
	 * @param {Task[]} a
	 * @param {Task[]} b
	 */
	mergeTasks( a, b  ) {
		return mergeInto( a, b, v=> a.find(w=>w.id==v.id)===undefined );
	},

	initItems( items, dataList, UseClass=GData, tag=null, type=null ) {

		if ( dataList === null || dataList === undefined ) return undefined;

		for( let i = dataList.length-1; i >= 0; i-- ) {

			var def = dataList[i];

			if ( def.reverse) dataList[i] = def = new RevStat(def);
			else if ( def.stat ) dataList[i] = def = new StatData(def);
			else dataList[i] = def = new UseClass( def );

			if ( tag ) def.addTag( tag );
			if ( type ) def.type = type;

			items[def.id] = def;

		}

		return dataList;

	},

	/**
	 *
	 * @param {*} stats - player stats from json.
	 * @param {Object} savePlayer - player data from previous save.
	 */
	initPlayer( items, stats, savePlayer=null ) {

		if ( !stats ) return undefined;

		let vars = savePlayer || {};

		let res;
		for( let def of stats ) {

			res = vars[ def.id ] =
				( def.stat === true ? new StatData(def) :
				( def.reverse === true ? new RevStat(def) : new Resource( def ) )
			);
			res.type = RESOURCE;
			items[def.id] = res;

		}

		return items.player = new Player( vars );

	},

}

/**
 * Recursive freezing of an object template.
 * Clones must be made to make any changes.
 * @param {*} obj
 */
export const freezeData = ( obj ) => {

	let sub;
	for( let p in obj ){

		sub = obj[p];
		if ( typeof sub === 'object') freezeData(sub);
		else Object.freeze( sub );

	}

	return Object.freeze( obj );

}

/**
 * Prepared data is instance-level data, but classes have not been instantiated.
 * @param {*} sub
 * @param {*} id
 */
const prepData = ( sub, id='' ) => {

	if (Array.isArray(sub) ) {

		for( let i = sub.length-1; i >= 0; i-- ) sub[i] = prepData( sub[i], id );

	} else if ( typeof sub === 'object' ) {

		for( let p in sub ) {

			if ( p === 'mod') {

				sub[p] = ParseMods( sub[p],  SubPath(id, p) );
				continue;
			} else if ( p ==='effect' || p === 'result' ) {

				sub[p] = ParseEffects( sub[p], MakeEffectFunc );

			} else if ( p === 'cost' || p === 'buy' ) {

					sub[p] = ParseEffects( sub[p], MakeCostFunc );

			} else if ( p === 'require' || p === 'need' ) {

				sub[p] = ParseRequire( sub[p] );
				continue;

			}

			if ( p.includes('.')) splitKeyPath( sub, p );

			var obj = sub[p];
			var typ = typeof obj;
			if ( typ === 'string' ){

				if ( PercentTest.test(obj) ) {

					sub[p] = new Percent(obj);

				} else if ( RangeTest.test(obj) ) sub[p] = new Range(obj);
				else if ( IsPerValue(obj) ) sub[p] = new PerValue( obj, SubPath(id,p) );
				else if ( !isNaN(obj) ) {
					if ( obj !== '') console.warn('string used as Number: ' + p + ' -> ' + obj );
					sub[p] = Number(obj);
				}
				else if ( p === 'damage' || p === 'dmg') sub[p] = MakeDmgFunc(obj);

			} else if ( typ === 'object' ) prepData(obj, id);
			else if (typ === 'number') {

				//sub[p] = new RValue(obj);

			}

		}

		// split AFTER parse so items can be made into full classes first.
		/*for( let p in sub ) {
			if ( p.includes('.')) splitKeyPath( sub, p );
		}*/

	} else if ( typeof sub === 'string') {

		if ( RangeTest.test(sub) ) return new Range(sub);
		else if ( PercentTest.test(sub)) return new Percent(sub);
		else if ( IsPerValue(sub)) return new PerValue( sub, id );

	}

	return sub;

}

/**
 *
 * @param {object|string|Array|Number} effects
 * @param {Function} funcMaker - Function that returns a function for function RValues.
 */
export const ParseEffects = ( effects, funcMaker ) => {

	if ( Array.isArray(effects) ) {

		for( let i = effects.length-1; i>= 0; i-- ){
			effects[i] = ParseEffects( effects[i], funcMaker );
		}

	} else if ( typeof effects === 'string') {

		if ( RangeTest.test(effects) ) return new Range(effects);
		else if ( PercentTest.test(effects) ) return new Percent(effects);
		else if ( IsPerValue(effects ) ) return new PerValue( effects );
		else if ( effects.includes( '.' ) ) return funcMaker(effects);

		return effects;

	} else if ( typeof effects === 'object' ) {

		for( let p in effects ) {
			effects[p] = ParseEffects( effects[p], funcMaker );
		}

	} else if ( typeof effects === 'number' ) return new Stat( effects );

	return effects;

}

/**
 * Parse a requirement-type object.
 * currently: 'require' or 'need'
 */
export const ParseRequire = ( sub ) => {

	// REQUIRE
	if ( sub === null || sub === undefined || sub === false || sub === '') return undefined;
	if ( Array.isArray(sub) ) {

		for( let i = sub.length-1; i>= 0; i-- )sub[i] = ParseRequire( sub[i] );

	} else if ( typeof sub === 'string' && !IdTest.test(sub )) return MakeTestFunc( sub );

	return sub;

}

/**
 * Create a boolean testing function from a data string.
 * @param {string} text - function text.
 */
export function MakeTestFunc( text ) {

	return new Function( "g", 'i', 's', 'return ' + text );
}

/**
 * Cost function. params: GameState, Actor.
 * @param {*} text
 */
export function MakeCostFunc(text) {
	return new Function( 'g,a', 'return ' + text );
}

/**
 * Create a function which performs an arbitrary effect.
 * player and target params are given for simplicity.
 * target is the current target (of a dot), if any.
 * @param {string} text
 */
export function MakeEffectFunc( text ) {
	return new Function( 'g,t,a', 'return ' + text );
}