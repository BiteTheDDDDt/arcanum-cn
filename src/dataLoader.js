import GData from './items/gdata';
import Player from './chars/player';

import Range, {RangeTest} from './values/range';
import Percent, {PercentTest} from './values/percent';
import {ParseMods } from './values/mod';

import Resource from './items/resource';
import ZeroSum from './items/zerosum';
import RevStat from './items/revStat';
import StatData from './items/statData';
import Skill from './items/skill';
import Monster from './items/monster';

import Dungeon from './items/dungeon';
import Locale from './items/locale';

import Spell from './items/spell.js';
import Action from './items/action';

import { mergeSafe } from 'objecty';
import ProtoItem from './items/protoItem';
import Material from './chars/material';
import Enchant from './items/enchant';
import Item from './items/item';
import Potion from './items/potion';
import Encounter, { ENCOUNTER } from './items/encounter';
import GEvent from './items/gevent';

import Loader from './util/jsonLoader';
import { logObj, splitKeyPath } from './util/util';

const DataDir = './data/';
const DataFiles = [ 'resources', 'upgrades', 'actions', 'homes', 'furniture', 'items', 'skills',
	'player', 'spells', 'monsters', 'dungeons', 'events', 'classes', 'armors', 'weapons',
	'materials', 'enchants', 'sections', 'potions', 'encounters', 'locales','stressors', 'seasonal' ];

/**
 * @const {RegEx} IdTest - Test for a simple id name.
 */
const IdTest = /^[A-Za-z_]+\w*$/;

/**
 * @todo replace with server call.
 */
export default {

	/**
	 * @property {Object.<string,Object>} templates - default GameData templates.
	 * item id => default item data.
	 */
	templates:null,

	/**
	 * Lists of item ids for each item type.
	 * (item source file/item type) => item list
	 * @property {Object.<string,string[]>}
	 */
	dataLists:null,

	async loadGame( saveData ) {

		if ( this.templates === null ) {

			return this.loadData().then(()=>{
				return this.makeGameData( this.templates, this.dataLists, saveData );
			});

		} else return this.makeGameData( this.templates, this.dataLists, saveData );

	},

	loadData() {

		let loader = new Loader( DataDir, DataFiles );
		return loader.load().then( v=>this.datasLoaded(v ));

	},

	/**
	 * Raw data files loaded, ref by filename.
	 * @param {object.<string,json>} loads
	 */
	datasLoaded( loads ) {

		let templates = {};

		// easiest to preparse modules so templates can be assigned in one place.
		for( let p in loads ) {

			var fileData = loads[p];
			if ( fileData === null || fileData === undefined ) {
				console.warn( 'Missing Data for: ' + p );
				loads[p] = [];
			} else if ( fileData.module) {

				this.mergeModule( fileData, loads );
				loads[p] = undefined;
			}

		}

		for( let p in loads ) {

			var itemList = loads[p];
			if ( !itemList ) continue;

			for( let j = itemList.length-1; j >= 0; j-- ) {

				// copy every data item into a template.
				templates[ itemList[j].id ] = ( itemList[j] );

			}

		}

		this.templates = this.freezeData( templates );
		//for( let p in this.templates ) console.log('template: ' + p );

		this.dataLists = loads;

	},

	/**
	 *
	 * @param {object} mod
	 * @param {object.<string,object>} dataLists - data lists by load file.
	 */
	mergeModule( mod, dataLists ){

		if ( mod.data ) {

			let sym = mod.sym;
			for( let p in mod.data ) {

				var newData = mod.data[p];
				if ( !newData ) continue;

				var targList = dataLists[p];
				if ( targList ) this.mergeData( newData, targList, sym );
				else {
					dataLists[p] = newData;
					if ( sym ) newData.forEach(d=>d.sym = d.sym||sym )
				}

			}

		}

	},

	/**
	 * Merge items from a module data list into the appropriate target list.
	 * @param {object[]} list
	 * @param {object} dest
	 * @param {string} sym - special unicode symbol.
	 */
	mergeData( list, dest, sym ) {

		for( let i = list.length-1; i >= 0; i-- ) {

			var d = list[i];
			if ( !d.id ){
				console.warn('missing id: ' + d.name );
				continue;
			}

			if ( sym ) d.sym = d.sym || sym;

			//console.log('pushing: ' + d.id );
			if ( !Array.isArray(dest)) console.warn( 'DEST NOT AN ARRAY: ' + p );
			dest.push(d);


		}

	},

	makeGameData( templates, dataLists, saveData={} ){

		saveData = saveData || {};

		// restore Percent/Range classes /special functions of non-item data.
		for( let p in saveData ) {

			if ( p === 'items') continue;
			var dataItem = saveData[p];

			saveData[p] = this.parseSub(dataItem);

		}

		// combined items.
		saveData.items = this.mergeDefaults( templates, saveData.items );

		/**
		 * Form the actual item lists used as the gameData.
		 * @todo clear up these steps a bit.
		 */
		let gameLists = {};

		var dataList, gameList;
		for( let p in dataLists ) {

			dataList = dataLists[p];
			if ( !dataList ) {
				continue;
			};

			// lists of game-item data by type.
			gameLists[p] = gameList = [];

			for( let i = 0; i < dataList.length; i++ ) {
				// copy actual game data into game list.
				//console.log('Adding ' + idList[i] + ' Item: ' + saveData.items[ idList[i] ] );
				gameList[i] = saveData.items[ dataList[i].id ];
			}


		}

		return this.initGameData( saveData, gameLists );

	},

	/**
	 *
	 * @param {Object.<string,Object>} templates - template items.
	 * @param {?Object} [saveItems={}] - previous save items, if any.
	 * @returns {Object.<string,Object>} - the saveItems with data merged from default data.
	 */
	mergeDefaults( templates, saveItems={} ) {

		// NOTE: This requires that properties are never actually deleted from items,
		// though they can be set to null.
		for( let p in templates ) {

			var saveObj = saveItems[p] || {};

			mergeSafe( saveObj, templates[p] );

			saveItems[p] = this.parseSub( saveObj );
			saveObj.template = templates[p];

		}

		return saveItems;

	},

	initGameData( gd, dataLists ){

		this.items = gd.items;

		gd.resources = this.initItems( dataLists['resources'], Resource );
		gd.stressors = this.initItems( dataLists['stressors'], Resource, 'stress', 'stress' );
		gd.stressors.forEach(v=>v.hidden=true);

		gd.upgrades = this.initItems( dataLists['upgrades'], GData, null, 'upgrade' );

		gd.homes = this.initItems( dataLists['homes'], GData, 'home', 'home' );
		gd.homes.forEach( v=>v.slot='home');

		this.initItems( dataLists['furniture'], GData, 'furniture', 'furniture' );

		gd.skills = this.initItems( dataLists['skills'], Skill );

		gd.encounters = this.initItems( dataLists['encounters'], Encounter, ENCOUNTER, ENCOUNTER);
		gd.monsters = this.initItems( dataLists['monsters'], Monster, 'monster', 'monster' );

		this.initItems( dataLists['locales'], Locale );
		this.initItems( dataLists['dungeons'], Dungeon );
		this.initItems( dataLists['spells'], Spell );

		this.initItems( dataLists['items'], Item, 'item', 'item');
		gd.armors = this.initItems( dataLists['armors'], ProtoItem, 'armor','armor' );
		gd.armors.forEach( v=>v.kind = v.kind || 'armor' );

		gd.weapons = this.initItems( dataLists['weapons'], ProtoItem, 'weapon', 'weapon' );
		gd.weapons.forEach(v=>v.kind=v.kind ||'weapon');

		gd.potions = this.initItems( dataLists['potions'], Potion, 'potion', 'potion' );

		gd.materials = this.initItems( dataLists['materials'], Material, 'material', 'material ');

		gd.events = this.initItems( dataLists['events'], GEvent, null, 'event' );
		gd.classes = this.initItems( dataLists['classes'], GEvent, 'class', 'class' );
		gd.classes.forEach(v=>{
			v.warn=true;
			v.repeat = false;
		});

		gd.actions = this.initItems( dataLists['actions'], Action, null, 'action' );
		gd.actions.forEach( v=>v.repeat = (v.repeat!==undefined ) ? v.repeat : true );

		gd.enchants =this.initItems( dataLists['enchants'], Enchant, null, 'enchant' );
		gd.sections = this.initItems( dataLists['sections']);

		gd.player = this.items.player = this.initPlayer( dataLists['player'], gd.items.player );

		return gd;

	},

	parseSub( sub ) {

		if (Array.isArray(sub) ) {

			for( let i = sub.length-1; i >= 0; i-- ) sub[i] = this.parseSub( sub[i] );

		} else if ( sub instanceof Object ) {

			for( let p in sub ) {

				if ( p === 'mod') {

					sub[p] = ParseMods( sub[p], sub.id );
					continue;
				} else if ( p === 'require' || p === 'need' ) {

					sub[p] = this.parseRequire( sub[p] );

					continue;
				}

				var obj = sub[p];
				if ( typeof obj === 'string' ){

					if ( PercentTest.test(obj) ) {

						sub[p] = new Percent(obj);

					} else if ( RangeTest.test(obj) ) sub[p] = new Range(obj);
					else if ( !isNaN(obj) ) {
						if ( obj !== null && obj !== undefined && obj !== '' ) console.warn('string used as Number: ' + p + ' -> ' + obj );
						//console.warn('store numeric data as number.');
						//sub[p] = Number(obj);
					}
					else if ( p === 'damage' || p === 'dmg') sub[p] = this.makeDmgFunc(obj);

				} else if ( typeof obj === 'object' ) this.parseSub(obj);

				if ( p.includes('.')) splitKeyPath( sub, p );

			}

		} else if ( typeof sub === 'string') {

			if ( RangeTest.test(sub) ) return new Range(sub);
			else if ( PercentTest.test(sub)) return new Percent(sub);

		}

		return sub;

	},

	/**
	 * Parse a requirement-type object.
	 * currently: 'require' or 'need'
	 */
	parseRequire( sub ){

		// REQUIRE
		if ( sub === null || sub === undefined || sub === false || sub === '') return undefined;
		if ( Array.isArray(sub) ) {

			for( let i = sub.length-1; i>= 0; i-- )sub[i] = this.parseRequire( sub[i] );

		} else if ( typeof sub === 'string' && !IdTest.test(sub )) return this.makeTestFunc( sub );

		return sub;

	},

	/**
	 * Create a testing function that accepts when
	 * the level of the given data item exceeds the level
	 * of the item to be unlocked.
	 * @todo: doesn't work. unlock test too abstract to detect in code.
	 * @param {string} unlocker - name of item that unlocks the item.
	 * @returns {function}
	 */
	levelTestFunc( unlocker ) {
		return (g,i)=>{
			g[unlocker].level >= i.level; };
	},

	/**
	 * Create a boolean testing function from a data string.
	 * @param {string} text - function text.
	 */
	makeTestFunc( text ) {

		return new Function( "g", 'i', 's', 'return ' + text );
	},

	/**
	 * Create a function which performs an arbitrary effect.
	 * player and target params are given for simplicity.
	 * target is the current enemy, if any.
	 * dt is the elapsed time.
	 * @param {*} text
	 */
	makeEffectFunc( text ) {
		return new Function( 'g', 't', 'dt', text );
	},

	/**
	 * Create a damage-value function for an attack.
	 * @param {*} text
	 */
	makeDmgFunc(text){
		return new Function( 'state', 'player', 'target', 'return ' + text );
	},

	initItems( dataList, UseClass=GData, tag=null, type=null ) {

		for( let i = dataList.length-1; i >= 0; i-- ) {

			var def = dataList[i];

			if ( def.reverse) dataList[i] = def = new RevStat(def);
			else if ( def.zerosum ) dataList[i] = def = new ZeroSum(def);
			else dataList[i] = def = new UseClass( def );

			if ( tag ) def.addTag( tag );
			if ( type ) def.type = type;

			this.items[def.id] = def;

		}

		return dataList;

	},

	/**
	 *
	 * @param {*} stats - player stats from json.
	 * @param {Object} savePlayer - player data from previous save.
	 */
	initPlayer( stats, savePlayer=null ) {

		let vars = savePlayer || {};

		let res;
		for( let def of stats ) {

			res = vars[ def.id ] = def.zerosum === true ? new ZeroSum(def) :
				( def.stat === true ? new StatData(def) :
				( def.reverse === true ? new RevStat(def) : new Resource( def ) )
			);
			this.items[def.id] = res;

		}

		return new Player( vars );

	},

	/**
	 * Freeze all template data.
	 * Clones must be made for any new edits.
	 */
	freezeData( obj ) {

		let sub;
		for( let p in obj ){

			sub = obj[p];
			if ( typeof sub === 'object') this.freezeData(sub);
			else Object.freeze( sub );

		}

		return Object.freeze( obj );

	}

}