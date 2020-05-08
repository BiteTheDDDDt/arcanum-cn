import Inventory from './inventories/inventory';
import GData from './items/gdata';
import Equip from './chars/equip';
import Minions from './inventories/minions';

import Runner from './modules/runner';
import Explore from './composites/explore';
import { ensure } from './util/util';
import DataList from './inventories/dataList';
import Group from './composites/group';
import UserSpells from './inventories/userSpells';
import Quickbars from './composites/quickbars';
import { WEARABLE, ARMOR, WEAPON, HOME, PURSUITS, ENCHANTSLOTS, TimeId } from './values/consts';
import Stat from './values/rvals/stat';
import TagSet from './composites/tagset';
import EnchantSlots from './inventories/enchantslots';
import Combat from './composites/combat';

export const REST_SLOT = 'rest';

/**
 * Used to avoid circular include references.
 * @param {string[]|object} list
 */
export const MakeDataList = (list)=>{
	return new DataList(list);
}

export default class GameState {

	toJSON(){

		let slotIds = {};
		for( let p in this.slots ) {
			if ( this.slots[p] ) slotIds[p] = this.slots[p].id;
		}

		let data = {

			version:__VERSION,
			pid:this.pid,

			name:this.player.name,
			items:this.saveItems,
			bars:this.bars,
			slots:slotIds,
			equip:this.equip,
			combat:this.combat,
			drops:this.drops,
			explore:this.explore,
			sellRate:this.sellRate,
			NEXT_ID:this.NEXT_ID

		};

		return data;

	}

	/**
	 * @property {string[]} modules - list of modules used.
	 */
	get modules(){return this._modules}
	set modules(v){this._modules = v;}

	/**
	 * Create unique string id.
	 * @param {string} [s='']
	 */
	nextId( s='' ) { return s + '_' + this.nextIdNum(); }

	nextIdNum() { return this.NEXT_ID++; }

	/**
	 *
	 * @param {Object} baseData - base game data.
	 */
	constructor( baseData ){

		Object.assign( this, baseData );

		/**
		 * @property {.<string,GData} saveItems - items actually saved.
		 * does not include hall items, or TagSets.
		 */
		this.saveItems = {};

		/**
		 * @property {Map<string,Inventory>} inventories - default inventories
		 * by item type, plus named inventories.
		 */
		this.inventories = new Map();

		/**
		 * @property {number} NEXT_ID - Next item id.
		 */
		this.NEXT_ID = this.NEXT_ID || 0;

		if ( !this.pid ) {

			/**@ hid compat */
			this.pid = this.player.hid || TimeId('p');
			if ( this.player.hid ) console.log('USING LEGACY HID: ' + this.player.hid );
			else console.log('GENERATING NEW PLAYERID: ' + this.pid );

		}

		this.initSlots();

		this.bars = new Quickbars(

			baseData.bars ||
				{ bars:[baseData.quickbar] }
		);

		this.inventory = new Inventory( this.items.inv || baseData.inventory || {max:3} );
		this.items.inv = this.inventory;
		this.inventory.removeDupes = true;

		this.self = this.player;
		this.drops = new Inventory( baseData.drops );

		this.items[ENCHANTSLOTS] = new EnchantSlots( this.items[ENCHANTSLOTS] );

		/**
		 * @property {Minions} minions
		 */
		this.items.minions = this.minions = new Minions( baseData.items.minions || null );

		this.equip = new Equip( baseData.equip );

		this.initStats();

		this.combat = new Combat( baseData.combat );
		this.explore = new Explore( baseData.explore );

		this.runner = this.items.runner = new Runner( this.items.runner );

		this.prepItems();

		this.userSpells = this.items.userSpells = new UserSpells( this.items.userSpells );

		this.items.spelllist = this.spelllist = new DataList( this.items.spelllist );
		this.spelllist.spaceProp = 'level';
		this.spelllist.name = this.spelllist.id = 'spelllist';

		this.items.pursuits = new DataList( this.items.pursuits );
		this.items.pursuits.id = PURSUITS;

	}

	revive() {

		console.log('Reviving GameState Items');
		this.reviveItems();


		this.reviveSpecial();


		// quickbars must revive after inventory.
		this.bars.revive(this);

		// circular problem. spelllist has to be revived after created spells
		// compute their levels. unless levels stored in json?
		this.spelllist.calcUsed();

		/**
		 * @todo: messy bug fix. used to place player-specific resources on update-list.
		 * just move to player update()?
		 */
		this.playerStats = this.player.getResources();

		/**
		 * @property {Map.<string,TagSet>} tagsets - tag to array of items with tag.
		 * makes upgrading/referencing by tag easier.
		*/
		this.tagSets = this.makeTagSets( this.items );

		this.items.allies = this.minions.allies;
		this.saveItems.allies = undefined;

	}

	/**
	 * Game-wide stats.
	 */
	initStats() {

		/**
 		* @property {number} sellRate - percent of initial cost
 		* items sell for.
 		*/
		 this.sellRate = this.sellRate || new Stat(0.5, 'sellRate');

	}

	/**
	 * Revive custom items.
	 */
	prepItems() {

		for( let p in this.items ) {

			var it = this.items[p];

			if ( !it ) {
				console.warn('prepItems() item undefined: ' + p );
				delete this.items[p];
				continue;
			}
			/**
			 * special instanced item.
			 */
			if ( it.custom === 'group') {

				//console.warn('CUSTOM: ' + it.id + ' name: ' + it.name );
				this.items[p] = new Group( it );

			} else if ( it.instanced ) {

			}

		}


	}

	reviveSpecial() {

		for( let p in this.slots ) {
			if ( typeof this.slots[p] === 'string') this.slots[p] = this.getData(this.slots[p] );
		}
		this.restAction = this.slots[REST_SLOT];

		this.equip.revive( this );

		this.player.revive(this);

		this.minions.revive(this);
		this.drops.revive(this);

		this.combat.revive(this);
		this.explore.revive(this);

	}

	/**
	 * Check items for game-breaking inconsistencies and remove or fix
	 * bad item entries.
	 */
	reviveItems() {

		var manualRevive = new Set( ['minions', 'player', 'explore', 'equip', 'drops'] );

		let count = 0;
		for( let p in this.items ) {

			var it = this.items[p];
			/**
			 * revive() has to be called after prepItems() so custom items are instanced
			 * and can be referenced.
			 */
			if ( it.revive && typeof it.revive === 'function' && !manualRevive.has(p) ) {

				//console.log('REVIVING: ' + it.id );
				it.revive(this);
			}

			if ( !it.hasTag ) {

				console.warn( p + ': ' + this.items[p].id + ' missing hasTag(). Removing.');
				delete this.items[p];

			} else {

				this.saveItems[p] = it;
				// need hasTag() func.
				if ( it.hasTag(HOME)) {
					it.need = this.homeTest;
				}
				count++;
			}

		}
		console.log('Items Total: ' + count);

	}

	/**
	 * Test if a home can fit the current used capacity.
	 * @param {Object.<string,Items>} g - all game data.
	 * @param {GData} i - item being tested.
	 * @param {GameState} gs
	 */
	homeTest( g, i, gs ) {

		var cur = gs.slots.home;

		return g.space.valueOf()<=
			g.space.max.delValue( i.mod.space.max.bonus - ( cur ? cur.mod.space.max.bonus : 0) );

	}


	initSlots(){

		/**
		 * @property {Object.<string,Item>} slots - slots for items which can only have
		 * a single active at a given time.
		 */
		this.slots = this.slots || {};

		// must be defined for Vue. slots could be missing from save.
		ensure( this.slots, [HOME, 'mount', 'bed', REST_SLOT]);
		if ( !this.slots[REST_SLOT] ) this.slots[REST_SLOT] = this.getData('rest');

	}

	/**
	 * Create lists of tagged items.
	 * @param {.<string,GData>} items
	 * @returns {Map.<string,GData[]>} lists
	 */
	makeTagSets( items ) {

		var tagSets = new Map();

		for( let p in items ) {

			var it = items[p];
			var tags = it.tags;
			if ( !tags ) continue;

			for( var t of tags ){

				var list = tagSets[t];
				if ( !list ) {
					items[t] = tagSets[t] = list = new TagSet(t);
				}

				list.add( it );

			}

		}

		return tagSets;

	}

	/**
	 *
	 * @param {GData} it
	 * @param {number} slotNum
	 */
	setQuickSlot( it, slotNum ) {

		//console.log('QUICK: ' + it.name );

		this.bars.active.setSlot(it, slotNum);
	}

	/**
	 * Get quickslot item for slot number.
	 * @param {number} slotNum
	 * @returns {?GData}
	*/
	getQuickSlot( slotNum ) {
		return this.bars.active.getSlot( slotNum);
	}

	/**
	 * Replace all ids in array with corresponding GData.
	 * @param {Array.<string|GData>} a
	 * @returns - the original array.
	 */
	toData(a) {

		if (!a) return [];

		for( let i = a.length-1; i >= 0; i-- ) {

			var s = a[i];
			if ( typeof s === 'string') a[i] = this.getData(s);

		}

		return a;
	}

	/**
	 *
	 * @param {string} tag
	 * @returns {GData[]|undefined}
	 */
	getTagSet( tag ) {
		return this.tagSets[tag];
	}

	/**
	 * Get the cost of a given subtype to buy item.
	 * @param {string} type
	 * @returns {number}
	 */
	typeCost( cost, type ) {

		if ( !cost ) return 0;
		return cost[type] || 0;
	}

	/**
	 * Add to maximum value of resource.
	 * Used for cheat codes.
	 * @param {string} id
	 * @param {number} amt
	 */
	addMax( id, amt=50) {

		let it = typeof id === 'string' ? this.getData(id) : id;
		if ( !it) return;

		it.max.base += amt;
	}

	/**
	 *
	 * @param {(it)=>boolean} pred
	 */
	filterItems( pred ) {
		let a = [];
		let items = this.items;
		for( let p in items ) {
			if ( pred( items[p] ) ) a.push( items[p] );
		}
		return a;
	}

	/**
	 * Add created item to items list.
	 * @param {GData} it
	 */
	addItem( it ) {

		if ( this.items[it.id] ) console.warn('OVERWRITE ID: ' + it.id);

		if ( !it.hasTag ) {
			console.log('MISSING HASTAG: ' + it.id );
			return false;
		}

		this.items[it.id] = it;

		if ( it.module !== 'hall') {
			console.log('ADDING SAVE ITEM: ' + it.id );
			this.saveItems[it.id] = it;
		}

		return true;

	}

	/**
	 * Should only be used for custom items.
	 * Call from Game so DELETE_ITEM event called.
	 * @param {GData} it
	 */
	deleteItem( it ) {
		delete this.items[it.id];
		delete this.saveItems[it.id];
	}

	/**
	 * Get state slots so they can be modified for Vue reactivity.
	 * @returns {.<string,GData>}
	 */
	getSlots(){ return this.slots; }

	/**
	 * Get item in named slot.
	 * @param {string} id - slot id.
	 * @param {string} type - item type for determining subslot (equip,home,etc)
	 * @returns {?GData}
	 */
	getSlot( id, type) {
		if ( type === WEARABLE || type === ARMOR || type ===WEAPON ) return null;
		return this.slots[id];
	}

	/**
	 * Set slotted item for exclusive items.
	 * @param {string} slot
	 * @param {?GData} v - item to place in slot, or null.
	 */
	setSlot(slot,v) {

		if ( v && (v.type === WEARABLE) ) return;
		this.slots[slot] = v;

		if ( slot === REST_SLOT ) this.restAction = v;

	}

	/**
	 * Find an item instantiated from given item proto/recipe.
	 * @param {string} id
	 */
	findInstance( id ) {
		return this.inventory.find(id, true) || this.equip.find(id, true );
	}

	exists(id){ return this.items.hasOwnProperty(id);}

	/**
	 * Find item in base items, equip, or inventory.
	 * @param {string} id
	 * @param {boolean} [any=false] - whether to return any matching instanced item.
	 */
	findData(id, any=false) {

		return this.getData(id) || this.inventory.find(id, any) || this.equip.find(id, any );
	}

	/**
	 * Check if an item is unique and already exists, or been
	 * instanced.
	 * @param {string|GData} it
	 */
	hasUnique(it) {

		if ( typeof it ==='string') it = this.getData(it);

		if ( it === undefined || !it.unique ) return false;

		if ( it.isRecipe || it.instanced ) {

			return this.inventory.find(it.id,true) != null ||
			this.drops.find(it.id,true) != null || this.equip.find(it.id,true) != null;

		} else return it.value > 0;

	}

	/**
	 * Return item, excluding uniques with value > 0.
	 * @param {string} id
	 */
	getUnique(id) {

		let it = this.items[id];
		return ( it === undefined || !it.unique ) ? it : (
			it.value>0 ? null : it
		);

	}

	getData(id) { return this.items[id] || this[id]; }

}