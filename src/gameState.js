import Inventory from './inventories/inventory';
import Raid from './composites/raid';
import GData from './items/gdata';
import Equip from './chars/equip';
import Minions from './inventories/minions';

/**
 * @todo violation of principle.
 */
import Runner from './modules/runner';
import Explore from './composites/explore';
import { ensure } from './util/util';
import SpellList from './inventories/spelllist';
import Group from './composites/group';
import UserSpells from './inventories/userSpells';
import Quickbars from './composites/quickbars';
import Stat from './values/stat';

export const REST_SLOT = 'rest';

export default class GameState {

	toJSON(){

		let slotIds = {};
		for( let p in this.slots ) {
			if ( this.slots[p] ) slotIds[p] = this.slots[p].id;
		}

		let data = {

			version:__VERSION,
			buildType:__SAVE,
			items:( this.items ),
			bars:this.bars,
			slots:slotIds,
			equip:( this.equip ),
			raid:( this.raid ),
			drops:this.drops,
			explore:this.explore,
			sellRate:this.sellRate,
			NEXT_ID:this.NEXT_ID

		};

		return data;

	}

	/**
	 * Create unique string id.
	 * @param {string} [s='']
	 */
	nextId( s='' ) { return s + this.nextIdNum(); }

	nextIdNum() { return this.NEXT_ID++; }

	/**
	 *
	 * @param {Object} baseData - base game data.
	 */
	constructor( baseData ){

		Object.assign( this, baseData );

		/**
		 * Next item id.
		 */
		this.NEXT_ID = this.NEXT_ID || 0;

		this.initSlots();

		/**
		 * @compat
		 */
		this.bars = new Quickbars(

			baseData.bars ||
				{ bars:[baseData.quickbar] }
		);

		this.initMaterials( this.materials );

		this.inventory = new Inventory( this.items.inv || baseData.inventory || {max:3} );
		this.items.inv = this.inventory;

		this.drops = new Inventory();

		/**
		 * @property {Minions} minions
		 */
		this.minions = this.items.minions = new Minions( this.items.minions || null );

		this.equip = new Equip( baseData.equip );

		this.initStats();

		this.raid = new Raid( baseData.raid );
		this.explore = new Explore( baseData.explore );

		this.runner = this.items.runner = new Runner( this.items.runner );

		this.prepItems();

		this.userSpells = this.items.userSpells = new UserSpells( this.items.userSpells );
		this.items.spelllist = this.spelllist = new SpellList( this.items.spelllist );

		this.revive();

		this.readyItems();

		// circular problem. spelllist has to be revived after created spells
		// compute their levels. unless levels stored in json?
		this.spelllist.calcUsed();

		/**
		 * @todo: messy bug fix. used to place player-specific resources on update-list.
		 * just move to player update()?
		 */
		this.playerStats = this.player.getResources();

		/**
		 * @property {Object.<string,Item[]>} tagLists - tag to array of items with tag.
		 * makes upgrading/referencing by tag easier.
		*/
		this.tagLists = this.makeLists( this.items );

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

			/**
			 * special instanced item.
			 */
			if ( it.custom === 'group') {

				//console.warn('CUSTOM: ' + it.id + ' name: ' + it.name );
				this.items[p] = new Group( it );

			} else if ( it.instance ) {

			}

		}


	}

	revive() {

		for( let p in this.slots ) {
			if ( typeof this.slots[p] === 'string') this.slots[p] = this.getData(this.slots[p] );
		}
		this.restAction = this.slots[REST_SLOT];

		this.equip.revive( this );

		/*this.inventory.revive( this );
		this.spelllist.revive(this);
		this.minions.revive(this);*/

		this.player.revive(this);

		this.drops.revive(this);
		this.raid.revive( this );
		this.explore.revive(this);

		this.bars.revive(this);

	}

	/**
	 * Check items for game-breaking inconsistencies and remove or fix
	 * bad item entries.
	 */
	readyItems() {

		let count = 0;
		for( let p in this.items ) {

			var it = this.items[p];
			/**
			 * revive() has to be called after prepItems() so custom items are instanced
			 * and can be referenced.
			 */
			if ( it.revive && typeof it.revive === 'function') {
				//console.log('REVIVING: ' + it.id );
				it.revive(this);
			}

			if ( !it.hasTag ) {

				console.warn( p + ' -> ' + this.items[p].id + ' missing hasTag(). Removing.');
				delete this.items[p];


			} else {

				// need hasTag() func.
				if ( it.hasTag('home')) {

					it.need = this.homeTest;

				}
				count++;
			}

		}

	}

	initSlots(){

		/**
		 * @property {Object.<string,Item>} slots - slots for items which can only have
		 * a single active at a given time.
		 */
		this.slots = this.slots || {};

		// all must be defined for Vue. slots could be missing from save.
		ensure( this.slots, ['home', 'mount', 'bed', REST_SLOT]);

		if ( !this.slots[REST_SLOT] ) this.slots[REST_SLOT] = this.getData('rest');

	}

	/**
	 *
	 * @param {Object.<string,Items>} g - all game data.
	 * @param {GData} i - item being tested.
	 * @param {*} gs
	 */
	homeTest( g, i, gs ) {

		var cur = gs.slots.home;
		return g.space.used <=
			g.space.max.delValue( i.mod.space.max.bonus - ( cur ? cur.mod.space.max.bonus : 0) );

	}

	initMaterials( mats ) {

		let byId = {};
		for( let i = mats.length-1; i>=0; i-- ) {
			byId[ mats[i].id] = mats[i];
		}

		this.matsById = byId;

	}

	mergeItems( dest, src ) {

		let it;
		for( let p in src ) {

			it = dest[p];
			if ( !it ) {
				console.warn(`Attempt to revive undefined object: ${p}` );
				dest[p] = src[p]
			} else if ( it.hasOwnProperty('reviver' ) ) {

				it.reviver( dest, src[p] );

			} else Object.assign( dest[p], src[p] );

		}

	}

	/**
	 * Create lists of tagged items.
	 * @param {Object.<string,GData>} items
	 * @returns {Object.<string,GData[]>} lists
	 */
	makeLists( items ) {

		var lists = {};

		for( let p in items ) {

			var it = items[p];
			var tags = it.tags;
			if ( !tags ) continue;

			for( var t of tags ){

				//console.log('adding list: ' + t );
				var list = lists[t];
				if ( !list ) lists[t] = list = [];
				list.push( it );

			}

		}

		return lists;

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
	getTagList( tag ) {
		return this.tagLists[tag];
	}

	/**
	 * Get the amount of a specific item subtype
	 * required to buy.
	 * @param {string} type
	 * @returns {number}
	 */
	typeCost( cost, type ) {

		if ( !cost ) return 0;

		if ( !isNaN( cost) ) return type === 'gold' ? cost : 0;
		return ( cost.hasOwnProperty(type) ) ? cost[type] : 0;
	}

	/**
	 * Add to maximum value of resource.
	 * Used for implementing testing cheats.
	 * @param {string} id
	 * @param {number} amt
	 */
	addMax( id, amt=10) {

		console.log('adding max');
		let it = this.getData(id);
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
	 * Return a list of items containing given tags.
	 * @param {string[]} tags
	 * @returns {GData[]}
	 */
	filterByTag( tags ) {

		let a = [];
		for( let p in this.items ) {
			if ( this.items[p].hasTags(tags) ) a.push(this.items[p]);
		}
		return a;

	}

	/**
	 * Add created item to items list.
	 * @param {GData} it
	 */
	addItem( it ) {

		if ( this.items[it.id] ) return false;
		this.items[it.id] = it;

		return true;

	}

	/**
	 * Should only be used for custom items.
	 * Call from Game so DELETE_ITEM event called.
	 * @param {GData} it
	 */
	deleteItem( it ) {
		delete this.items[it.id];
	}

	/**
	 * Assign all items passing the predicate test the given tag.
	 * @param {Predicate} test
	 * @param {string} tag
	 */
	tagItems( test, tag ) {
		let items = this.items;
		for( let p in items ) {
			if ( test( items[p] ) ) items[p].addTag(tag);
		}
	}

	/**
	 * Get an item on an item-id varpath.
	 * @param {VarPath} v
	 */
	/*getPathItem(v){
		return v.readVar( this._items );
	}*/

	/**
	 * Get state slots so they can be used with Vue reactivity.
	 * @returns {object.<string,GData>}
	 */
	getSlots(){
		return this.slots;
	}

	/**
	 * Get item in named slot.
	 * @param {string} id - slot id.
	 * @param {string} type - item type for determining subslot (equip,home,etc)
	 */
	getSlot( id, type) {
		if ( type === 'wearable' || type === 'armor' || type ==='weapon' ) return null;
		return this.slots[id];
	}

	/**
	 * Set slotted item for exclusive items.
	 * @param {string} slot
	 * @param {?GData} v - item to place in slot, or null.
	 */
	setSlot(slot,v) {
		if ( v && (v.type === 'wearable') ) return;
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

	/**
	 * Find item in base items, equip, or inventory.
	 * @param {string} id
	 * @param {boolean} [any=false] - whether to return any matching type.
	 */
	findData(id, any=false) {

		return this.getData(id) || this.inventory.find(id, any) || this.equip.find(id, any );
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

	getData(id) {
		return this.items[id] || this[id];
	}

	getMaterial(id) { return this.matsById[id]; }

}