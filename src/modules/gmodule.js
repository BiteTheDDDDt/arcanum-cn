import { loadFiles, prepData } from '../dataLoader';

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

import Encounter, { ENCOUNTER } from './items/encounter';

import RevStat from '../items/revStat';
import ZeroSum from '../items/zerosum';
import Item from '../items/item';
import Locale from '../items/locale';

/**
 * Class for loading and storing module json in a well-defined format.
 */
export default class Module {

	/**
	 * @property {string} name
	 */
	get name() {return this._name;}
	set name(v) { this._name=v;}

	/**
	 * @property {string} sym
	 */
	get sym(){return this._sym; }
	set sym(v) {this._sym =v;}

	/**
	 * @property {object.<string,GData>} items - index of all items.
	 */
	get items() { return this._items; }
	set items(v){this._items=v;}

	/**
	 * Lists of items by type of data.
	 * @property {Object.<string,object[]>}
	*/
	get lists(){return this._lists; }
	set lists(v){this._lists=v;}

	constructor( file ) {

		this.file = file;

	}

	/**
	 * Merge module into this module.
	 * @param {GModule} mod
	 * @param {*} insertLists
	 */
	merge( mod ) {

		let items = mod.items;
		for( let p in items ) {
			this.items[p] = items[p];
		}

		for( let p in mod.lists ) {

			let list = mod.lists[p];
			let dest = this.lists[p];

			if ( !Array.isArray(dest)) {

				console.warn( 'DEST NOT ARRAY: ' + p );
				this.lists[p] = list.slice(0);
				continue;

			}

			for( let i = list.length-1; i >= 0; i-- ) {
				dest.push( list[i] );
			}


		}


	}

	/**
	 * Load module data file.
	 * Resolves to the module on load.
	 * @returns {Promise.<GModule>}
	 */
	load() {

		this.lists = {};
		this.items = {};

		if ( Array.isArray(this.file) ) {

			return loadFiles( this.file ).then( (v)=>this.fileLoaded(v) );

		} else {

			return loadFiles( [ this.file ] ).then( (v)=>this.fileLoaded(v) );

		}

	}

	/**
	 * Separate module files loaded. Each file is a list of objects
	 * of the same type.
	 * @param {.<string,object[]>} files
	 */
	typesLoaded(files) {

		this.parseLists( files );

	}

	/**
	 * Single Module file loaded.
	 * @param {*} files
	 */
	fileLoaded( files ) {

		let mod = files[this.file];
		if ( !mod ) {
			console.warn( this.file + ' data missing' );
			return;
		}

		this.name = mod.module || this.file;
		this.sym = mod.sym;

		if ( mod.data ){
			this.parseLists( mod.data );
		}

		return this;

	}

	/**
	 *
	 * @param {.<string,object[]} lists
	 */
	parseLists( lists ){

		for( let p in lists ) {
			this.lists[p] = this.parseList( lists[p] );
		}

	}

	/**
	 * Perform initial parsing of a list of untyped data objects.
	 * @param {object[]} arr
	 */
	parseList( arr ){

		let sym = this.sym;

		for( let i = arr.length-1; i >= 0; i-- ) {

			var it = arr[i];
			if ( !it.id ){
				console.warn('missing id: ' + it.name );
				continue;
			}
			if ( sym ) it.sym = it.sym || sym;

			arr[i] = it = prepData(it);
			this.items[it.id] = it;

		}

	}

	/**
	 * Create/Instantiate data items.
	 * @param {*} lists
	 * @param {*} sourceLists
	 */
	createData( lists, sourceLists ){

		lists.resources = this.initItems( sourceLists['resources'], Resource );
		lists.stressors = this.initItems( sourceLists['stressors'], Resource, 'stress', 'stress' );
		lists.stressors.forEach(v=>v.hidden=true);

		lists.upgrades = this.initItems( sourceLists['upgrades'], GData, null, 'upgrade' );

		lists.homes = this.initItems( sourceLists['homes'], GData, 'home', 'home' );
		lists.homes.forEach( v=>v.slot='home');

		this.initItems( sourceLists['furniture'], GData, 'furniture', 'furniture' );

		lists.skills = this.initItems( sourceLists['skills'], Skill, 'skill' );

		lists.encounters = this.initItems( sourceLists['encounters'], Encounter, ENCOUNTER, ENCOUNTER);
		lists.monsters = this.initItems( sourceLists['monsters'], Monster, 'monster', 'monster' );

		this.initItems( sourceLists['locales'], Locale );
		this.initItems( sourceLists['dungeons'], Dungeon );
		this.initItems( sourceLists['spells'], Spell );

		this.initItems( sourceLists['items'], Item, 'item', 'item');
		lists.armors = this.initItems( sourceLists['armors'], ProtoItem, 'armor','armor' );
		lists.armors.forEach( v=>v.kind = v.kind || 'armor' );

		lists.weapons = this.initItems( sourceLists['weapons'], ProtoItem, 'weapon', 'weapon' );
		lists.weapons.forEach(v=>v.kind=v.kind ||'weapon');

		lists.potions = this.initItems( sourceLists['potions'], Potion, 'potion', 'potion' );

		lists.materials = this.initItems( sourceLists['materials'], Material, 'material', 'material ');

		lists.events = this.initItems( sourceLists['events'], GEvent, 'event', 'event' );
		lists.classes = this.initItems( sourceLists['classes'], GClass, 'class', 'class' );

		lists.actions = this.initItems( sourceLists['actions'], Action, null, 'action' );
		lists.actions.forEach( v=>v.repeat = (v.repeat!==undefined ) ? v.repeat : true );

		lists.enchants =this.initItems( sourceLists['enchants'], Enchant, null, 'enchant' );
		lists.sections = this.initItems( sourceLists['sections']);

		return lists;

	}

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

	}

}