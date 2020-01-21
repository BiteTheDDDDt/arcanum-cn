import GData from './items/gdata';
import Log from './log.js';
import GameState, { REST_SLOT } from './gameState';
import ItemGen from './modules/itemgen';
import TechTree from './techTree';
import Resource from './items/resource';
import Skill from './items/skill';
import Stat from './values/stat';

import DataLoader from './dataLoader';

import Events, {EVT_UNLOCK, EVT_EVENT, EVT_LOOT, SET_SLOT, DELETE_ITEM, ITEM_ACTION } from './events';
import { MONSTER, TYP_PCT, TYP_RANGE, P_TITLE, P_LOG, TEAM_PLAYER } from './values/consts';
import TagSet from './composites/tagset';
import { TARGET_SELF, TARGET_ALLY, ApplyAction } from './values/combat';

var techTree;

/**
 * @constant {number} TICK_TIME - time in milliseconds between updates.
 */
export const TICK_TIME = 200;

/**
 * @constant {number} TICK_LEN - time between frames in seconds.
 */
export const TICK_LEN = TICK_TIME/1000;

/**
 * @constant {number} EVT_TIME - time for checking randomized events.
 */
export const EVT_TIME = 1000;

export default {

	toJSON() { return JSON.stringify( this.state ); },

	/**
	 * @property {GameState} gameData
	 */
	state:null,

	/**
	 * @property {Object.<string,Item>} gdata
	 */
	get gdata() { return this._gdata; },

	/**
	 * Not really used any more.
	 * @property {boolean} loaded - true when data is ready and game ready to play.
	 */
	loaded:false,

	/**
	 * @property {ItemGen} itemGen - item generator/instancer object.
	 */

	/**
	 * @property {Log} log
	 */
	log:new Log(),

	/**
	 * @property {Runner} runner - runs active tasks.
	 */
	runner:null,

	get player(){return this.state.player},

	/**
	 *
	 * @param {object} obj
	 * @param {(number)=>boolean} obj.tick -tick function.
	 */
	addTimer( obj ){ this.runner.addTimer(obj); },

	/**
	 * Clear game data.
	 */
	reset() {
		this.loaded = false;
		this.state = null;
		this._gdata = null;
	},

	/**
	 *
	 * @param {*} saveData
	 * @param {.<string,GData>} hallData - data items from wizard hall.
	 * @returns {Promise.<GameState>}
	 */
	load( saveData=null, hallData=null ) {

		this.reset();

		this.log.clear();

		// Code events. Not game events.
		Events.init(this);

		this.runner = null;

		return this.loader = DataLoader.loadGame( saveData ).then( allData=>{

			this.state = new GameState( allData, saveData );
			this.itemGen = new ItemGen( this );

			this._gdata = this.state.items;

			this.runner = this.state.runner;

			if ( hallData ) this.addData( hallData );

			this.recheckTiers();
			this.restoreMods();

			techTree = new TechTree( this.gdata );
			Events.add( EVT_UNLOCK, techTree.unlocked, techTree );
			Events.add( ITEM_ACTION, this.onAction, this );

			// initial fringe check.
			techTree.forceCheck();

			//Events.add( DROP_ITEM, this.state.deleteInstance, this.state );
			Events.add( SET_SLOT, this.setSlot, this );
			Events.add( DELETE_ITEM, this.onDelete, this );

			this.loaded = true;

			return this;

		}, err=>{ console.error( err.message + '\n' + err.stack )} );

	},

	/**
	 *
	 * @param {string} id
	 */
	logStat( id ) {

		let s = this.getData(id);
		if ( !s ) console.warn('STAT MISSING: '+id);
		else {

			//if ( full ) logObj(s,'LOG STAT' );
			console.dir( s );
			console.warn( id + ' value: ' + s.value + '  type: ' + s.constructor.name );

		}
	},

	recheckTiers() {

		let highClass = '';

		let n = -1;
		while ( ++n <= 5 ) {

			var list = this.state.getData('t_tier'+n);
			var evt = this.state.getData('tier'+n);

			var hasEvent = false;

			for( var s of list ) {

				if ( s.value > 0) {

					highClass = s.name;
					if ( evt.value == 0 ) {

						evt.doUnlock(this);

					} else if ( evt.locked ) evt.locked = false;
					hasEvent = true;
					break;
				}

			}
			// none of this tier.
			if ( !hasEvent ) evt.value = 0;

		}
		if ( highClass && !this.state.player.gclass ) {
			this.state.player.setClass( highClass );
		}

	},

	/**
	 * Reapply mods for all owned items.
	 */
	restoreMods() {

		let gdata = this.state.items;

		this.state.player.begin();

		for( let p in gdata ) {

			var it = gdata[p];
			if ( it instanceof TagSet) continue;

			if ( !it.locked && !it.disabled && !(it.instanced||it.isRecipe) ) {

				if ( it.value != 0 ) {

					if ( it.mod ) this.applyMods( it.mod, it.value, it.id);
					if ( it.lock ) {
						this.lock( it.lock, it.value );
					}

				}

			}

		}

		for( let e of this.state.equip ) {
			if ( e.mod ) this.applyMods( e.mod, 1 );
		}

	},

	/**
	 * Add data item to running game.
	 * This is currently so Hall data can be patched into every
	 * loaded game.
	 * @param {Object.<string,GData>} data
	 */
	addData( data ) {

		for( let p in data ) {

			let it = data[p];
			//console.warn('ADDING DATA ITEM: ' + p + ': '+ it.valueOf() );
			this.state.addItem(it);
		}

	},

	setSlot( it ) {

		let cur = this.state.getSlot( it.slot );
		if ( cur ) { this.remove( cur, 1 );}

		this.state.setSlot( it.slot, it );

		this.payCost( it.cost );
		return it.amount( this );

	},

	/**
	 * Frame update.
	 */
	update() {

		let time = Date.now();
		let dt = Math.min( ( time - this.lastUpdate )/1000, 1 );
		this.lastUpdate = time;

		this.state.player.update(dt);
		this.state.minions.update(dt);

		this.runner.update(dt);

		this.doResources( this.state.resources, dt);
		this.doResources( this.state.playerStats, dt );
		this.doResources( this.state.stressors, dt );

		techTree.checkFringe();

	},

	/**
	 * Frame update of all resources.
	 * @param {number} dt - elapsed time.
	 */
	doResources( stats, dt ) {

		let len = stats.length, stat;
		for( let i = len-1; i >= 0; i-- ) {

			stat = stats[i];
			if ( stat.locked === false && !stat.disabled ) {

				if  ( stat.rate.value !== 0 ) {

					stat.amount(this, stat.rate.value*dt);

				}

			}

		}

	},

	/**
	 * Toggles an task on or off.
	 * @param {GData} a
	 */
	toggleTask(a) { this.runner.toggleAct(a); },

	/**
	 * Wrapper for Runner rest
	 */
	doRest() { this.runner.tryAdd( this.state.getSlot(REST_SLOT) ) },

	haltTask(a) { this.runner.stopTask(a);},

	setTask( a ) { this.runner.setTask(a); },

	/**
	 * Tests if a task has effectively filled a resource.
	 * @param {string|string[]} v - data or datas to fill.
	 * @param {GData} a - task doing the filling.
	 * @param {string} - name of relavant filling effect ( for tag-item fills)
	 */
	filled( v, a, tag ) {

		if ( Array.isArray(v) ) {
			for( let i = v.length-1; i>=0; i-- ) {
				if ( !this.filled( v[i], a, tag ) ) return false;
			}
			return true;
		}

		let item = this.getData(v);
		if (!item) {
			console.warn('missing fill item: ' + v );
			return true;
		}
		if ( !item.rate || !a.effect || item.rate >= 0 ) return item.maxed();

		// actual filling rate.
		tag = a.effect[ tag || v ];

		return ( !tag || item.filled(tag ) );

	},

	/**
	 * Completely disable an item - cannot be purchased/used/etc.
	 * @param {string|GData|Array} it
	 */
	disable( it ) {

		if ( Array.isArray(it) ) for( let v of it ) {
			this.disable(v);
		} else {

			if ( typeof it === 'string' ) {
				it = this.getData( it );
			}

			if ( it && !it.disabled ) {

				it.disabled = true;

				if ( it.slot && this.state.getSlot(it.slot, it.type) === it ) {
					this.remove( it, 1 );
				}

				if ( it.running ) this.runner.stopTask(it);
				if ( it == this.state.raid.dungeon ) this.state.raid.setDungeon(null);

				if ( it instanceof Resource || it instanceof Skill ) {
					this.remove( it, it.value);

				} else if ( it.mod ) {
					//console.log('REMOVING MOD: ' + it.id + ' --> ' + it.value );
					this.removeMod( it.mod, it.value );
				}

			}

		}
	},

	/**
	 * Remove all quantity of an item.
	 * @param {string|string[]|GData|GData[]} it
	 */
	removeAll( it ){

		if ( typeof it === 'object' ) {

			this.remove( it, it.value );

		} else if ( Array.isArray(it)) {
			it.forEach( this.removeAll, this );

		} else {

			let item = this.getData( it );
			if ( item ) this.remove( it, it.value );

		}

	},

	/**
	 * Attempt to pay the cost to permanently buy an item.
	 * @param {GData} it
	 * @param {boolean} [keep=true]
	 * @returns {boolean}
	 */
	tryBuy( it, keep=true ) {

		if ( this.canPay(it.buy) === false ) return false;
		this.payCost( it.buy );

		if ( it.isRecipe ) this.create( it, keep );
		it.owned = true;

		if ( it.slot && !this.state.getSlot(it.slot) ) this.setSlot(it);

		return true;

	},

	/**
	 * Use inventory or equip item.
	 * @param {*} it
	 */
	use( it, inv=null ) {

		it.onUse( this, inv || this.state.inventory );

	},

	/**
	 * Attempt to pay for an item, and if the cost is met, apply it.
	 * @param {GData} it
	 * @returns {boolean} - true if item is used. note that 'buying' an item
	 * does not actually use it, and returns false.
	 */
	tryItem(it) {

		if ( !it ) return;

		if ( !this.canUse(it) ) return false;

		if ( it.perpetual || it.length > 0 ) {

			this.setTask(it);

		}  else if ( it.instanced ){

			it.onUse( this, this.state.inventory );

		} else if ( it.buy && !it.owned ) {

			this.tryBuy( it, false );

		} else {

			if ( it.isRecipe ) {

				this.craft(it );

			} else {

				if ( it.slot ) this.setSlot( it );
				else {
					this.payCost( it.cost );
					it.amount( this );
				}
			}

		}

	},

	/**
	 * Custom item deleted from game.
	 * @param {*} it
	 */
	onDelete(it) {
		this.state.deleteItem(it);
	},

	/**
	 * Create instance from data.
	 * @param {string|Object} data
	 */
	instance( data ) {

		if ( typeof data === 'string') data = this.state.getData(data);

		return this.itemGen.instance(data);

	},

	/**
	 * Craft an item by paying its cost, then instantiating it.
	 * Note that a crafted item does not use any of its effects or abilities.
	 * @param {GData} it
	 */
	craft( it ) {

		if ( !this.canPay( it.cost ) ) return false;
		this.payCost( it.cost );

		this.create( it );

	},

	/**
	 * Create an item whose cost has been met ( or been provided by an effect )
	 * @param {GData} it
	 * @param {boolean} [keep=true] whether the item should be kept after effect.
	 * ( currently used for npcs )
	 * @param {number} [count=1]
	 */
	create( it, keep=true, count=1 ) {

		if ( typeof it === 'string') it = this.state.getData(it);
		else if ( Array.isArray(it) ) {
			for( let i = it.length-1; i>=0; i--) {
				this.create(it[i], keep, count);
			}
			return;
		}

		if (!it ) return;

		for( let i = count; i >0; i--) {

			/**
			 * create monster and add to inventory.
			 * @todo this is hacky.
			*/
			if ( it.type === MONSTER ) {

				if ( it.onCreate ) it.onCreate( this, TEAM_PLAYER, keep );

			} else {

				var inst = this.itemGen.instance( it );
				if ( inst ) this.state.inventory.add( inst );
				Events.emit( EVT_LOOT, inst );

			}

		}


	},

	/**
	 *
	 * @param {GData} it
	 * @param {GData} targ - enchant target.
	 */
	tryUseOn( it, targ ) {

		if ( targ === null || targ === undefined ) return false;

		if ( it.buy && !it.owned ) {

			this.payCost( it.buy );
			it.owned = true;

			return true;

		} else {

			if ( !it.length ) {

				this.payCost( it.cost );
				this.useOn( it, targ, this );

				return true;

			} else {

				// runner will handle costs.
				return this.runner.beginUseOn( it, targ );

			}
		}

		return false;

	},

	/**
	 * Use an item in conjunction with another item.
	 * Item is used immediately. No running or costs necessary.
	 * The item effects/modifiers are applied to the target.
	 * @param {GData} it
	 * @param {GData} targ - use target.
	 */
	useOn( it, targ ) {

		if ( targ === null || targ === undefined ) return;

		if ( typeof it.useOn === 'function') it.useOn( targ, this );
		it.value++;

		console.log('USING: ' + it.id  + ' with ' + targ.id );
		if ( it.mod ) targ.permVars( it.mod );
		if ( it.effect ) targ.permVars( it.effect );

	},


	/**
	 *
	 * @param {string} id
	 */
	fillItem( id ) {

		let it = typeof id === 'string' ? this.getData(id) : id;
		if ( !it ) return;
		if ( typeof it.fill === 'function'){
			it.fill();
		} else {

			if ( !it.max ) {
				it.amount( this, 1 );
				return;
			}

			let del = it.max.value - it.value;
			if ( del > 0) it.amount( this, it.max.value - it.value );
		}

	},

	doLog( logItem ) {
		Events.emit( EVT_EVENT, logItem );
	},

	sellPrice( it ) {

		let sellObj = it.sell || it.cost || (5*it.level) || 5;

		if ( typeof sellObj === 'object' ) {
			sellObj = sellObj.gold || it.level || 1;
		}

		return Math.ceil( sellObj*this.state.sellRate );


	},

	/**
	 * Attempt to sell one unit of an item.
	 * @param {GData} it
	 * @param {Inventory}
	 * @param {number} count - positive count of number to sell.
	 * @returns {boolean}
	 */
	trySell( it, inv, count=1 ) {

		if ( it.value < 1 && !it.instanced ) { return false; }

		if ( count > it.value ) count = it.valueOf();

		this.getData('gold').value += count*this.sellPrice(it);

		if ( it.instanced ) {

			it.value -= count;

			//console.log('remainig: ' + it.value );
			if ( inv && (!it.stack || it.value <= 0) ) inv.remove( it );

		} else this.remove(it,count);

		return true;

	},

	/**
	 * Remove amount of a non-inventory item.
	 * If a tag list is specified, the amount will only be removed
	 * from a single element of the list. Apparently.
	 * @property {string|GData} id - item id or tag.
	 */
	remove( id, amt=1 ){

		let it = typeof id === 'string' ? this.getData(id) : id;
		if ( !it ) {
			console.warn('missing remove id: ' + id );
			return;
		}

		if ( it.slot ) { if ( this.state.getSlot(it.slot) === it ) this.state.setSlot(it.slot, null); }

		if ( it.cost && it.cost.space ) this.getData('space').value.add( -amt*it.cost.space );

		it.remove(amt);

		if ( it.mod ) this.applyMods( it.mod, -amt );
		if ( it.lock ) this.unlock( it.lock, amt );

		it.dirty = true;

	},

	/**
	 * Attempt to unlock an item.
	 * @param {GData} it
	 * @returns {boolean} true on success.
	 */
	tryUnlock( it ) {

		if ( it.disabled || it.locks > 0 ) return false;

		let test = it.require || it.need;
		if ( test && !this.unlockTest(test, it ) ) return false;

		it.doUnlock(this);

		return true;

	},

	/**
	 * Called when an item's modifier to other items changes.
	 * The item must be subtracted and re-added to ensure mods are correct.
	 * @param {GData} item
	 */
	modChanged( it ) {

		let val = it.value;
		if ( it.mod ) this.removeMod( it.mod, val );
		if ( it.lock ) this.unlock( it.lock );

	},

	/**
	 * Return the results of a testing object.
	 * @param {string|function|Object|Array} test - test object.
	 * @param {?GData} [item=null] - item being used/unlocked.
	 * @returns {boolean}
	 */
	unlockTest( test, item=null ) {

		if ( !test ) {
			console.warn('test not found: ' + test + ' : ' + item );
			return true;
		}
		//console.log('trying unlock: ' + item.id );
		let type = typeof test;
		if ( type === 'function') return test( this._gdata, item, this.state );

		else if ( type === 'string') {

			// test that another item is unlocked.
			let it = this.getData(test);
			return it && it.fillsRequire();

		} else if (  Array.isArray(test) ) {

			return test.every( v=>this.unlockTest(v,item), this );

		} else if ( type === 'object' ) {

			/**
			 * @todo: quick patch in case it was a data item.
			 */
			if ( test.id ) return test.fillsRequire();

			// @todo: take recursive values into account.
			// @todo allow tag tests.
			let limit, it;
			for( let p in test ) {

				it = this.getData(p);
				if ( !it ) continue;
				limit = test[p];
				if ( it.value < limit ) return false;

			}
			return true;

		}

	},

	/**
	 * Perform the one-time effect of an task, resource, or upgrade.
	 * @param {GData} effect
	 * @param {number} dt - time elapsed.
	 */
	applyVars( effect, dt=1 ) {

		if (  Array.isArray(effect) ) {
			for( let e of effect ) { this.applyVars( e,dt); }

		} else if ( typeof effect === 'object' ) {

			let target, e = effect[TYP_PCT];
			if ( e && !e.roll() ) return;

			for( let p in effect ){

				target = this.getData(p);
				e = effect[p];

				if ( target === undefined || target === null ) {

					if ( p === P_TITLE ) this.state.player.addTitle( e );
					else if ( p === P_LOG ) Events.emit( EVT_EVENT, e );
					else console.warn('missing effect target: ' + e );

				} else {

					if ( typeof e === 'number' || e.type === TYP_RANGE ) {

						target.amount( this, e*dt );
					} else if ( e.isRVal ) {
						// messy code. this shouldn't be here. what's going on?!?!
						target.amount( this, dt*e.getApply(this.state, target ) );

					} else if ( e === true ) {

						target.doUnlock(this);
						target.onUse( this );

					} else if ( e.type === TYP_PCT ) {

						if ( e.roll( this.getData('luck').valueOf() ) ) target.amount( this, 1 );

					} else target.applyVars(e,dt);

					target.dirty = true;
				}
			}

		} else if ( typeof effect === 'string') {

			let target = this.getData(effect);
			if ( target !== undefined ) {
				target.amount( this, dt );
			}

		}

	},

	/**
	 *
	 * @param {Object} mod
	 * @param {number} amt
	 */
	removeMod( mod, amt=1 ) {
		this.applyMods( mod, -amt);
	},

	/**
	 * Apply a mod.
	 * @param {Array|Object} mod
	 * @param {number} amt - amount added.
	 */
	applyMods( mod, amt=1 ) {

		if ( !mod ) return;

		if ( Array.isArray(mod)  ) {
			for( let m of mod ) this.applyMods(m, amt);
		} else if ( typeof mod === 'object' ) {

			for( let p in mod ) {

				var target = this.getData( p );
				if ( target === undefined ) continue;
				else if ( mod[p] === true ){

					target.doUnlock(this);

				} else {

					if ( target.applyMods) {
						target.applyMods( mod[p], amt );
						target.dirty = true;
					} else console.warn( 'no applyMods(): ' + target );

				}
			}

		} else if ( typeof mod === 'string') {

			let t = this.getData(mod);
			if ( t ) {

				console.warn('!!!ADDED NUMBER MOD: ' + mod );
				t.amount( this, 1 );

			}

		}

	},

	/**
	 * Determines whether an item can be run as a continuous task.
	 * @returns {boolean}
	 */
	canRun( it ) {

		if ( !it.canRun ) {
			console.error( it.id + ' no canRun()');
			return false;
		} else return it.canRun( this, TICK_LEN );

	},

	/**
	 * Determine if a one-use item can be used. Ongoing/perpetual tasks
	 * test with 'canRun' instead.
	 * @param {GData} it
	 */
	canUse( it ){
		if ( !it.canUse ) console.error( it.id + ' missing canUse()');
		else return it.canUse( this );
	},

	/**
	 * Item action or attack
	 * @param {Attack} act
	 * @param {Char} char
	 */
	onAction( act, char=this.player ) {

		if ( this.state.explore.running || this.state.raid.running ) return;

		if ( act.target & TARGET_SELF > 0 ) {

			ApplyAction( char, act, char );

		} else if ( act.target & TARGET_ALLY ) {

			let ally = this.allies.randItem();
			if ( ally ) ApplyAction( ally, act, char );

		}

	},

	/**
	 * Attempts to pay the cost to perform an task, buy an upgrade, etc.
	 * Before calling this function, ensure cost can be met with canPay()
	 *
	 * @param {Array|Object} cost
	 */
	payCost( cost, unit=1) {

		if ( cost === undefined || cost === null ) return;
		if ( Array.isArray(cost)  ) return cost.forEach( v=>this.payCost(v,unit), this );

		let res;
		if ( typeof cost === 'object' ){

			for( let p in cost ) {

				res = this.getData(p);

				if ( !res || res.instanced || res.isRecipe ) {
					this.payInst( p, cost[p]*unit );

				} else {

					var targ = cost[p];

					if ( !isNaN(targ) ) this.remove( res, targ*unit );
					else if ( typeof targ === 'object' ) res.applyVars( targ, -unit );
					else if ( typeof targ === 'function') {
							this.remove( res, unit*targ(this.state, this.player) )
					}

					res.dirty = true;
				}


			}

		}

	},

	payInst( p, amt ){

		var res = this.state.inventory.find( p,true );
		if ( res ) this.state.inventory.removeCount(res,amt);
		else console.warn('Insufficient: ' + p );

	},

	/**
	 * Determine if an object cost can be paid before the pay attempt
	 * is actually made.
	 * @param {Array|Object} cost
	 * @returns {boolean} true if cost can be paid.
	 */
	canPay( cost, amt=1 ) {

		if (Array.isArray(cost) ) return cost.every( v=>this.canPay(v,amt), this );

		let res;

		if ( typeof cost === 'object' ){

			for( let p in cost ) {

				var sub = cost[p];

				res = this.state.getData(p);
				if ( !res ) return false;
				else if ( res.instanced || res.isRecipe ) {

					/* @todo: ensure correct inventory used. map type-> default inventory? */
					return this.state.inventory.hasCount( res, amt );

				} else if ( !isNaN(sub) || sub instanceof Stat ) {

					if ( !res.canPay(sub*amt) ) return false;
					//if ( res.value < sub*amt ) return false;

				} else {

					// things like research.max. with suboject costs.
					if ( !this.canPayObj( res, sub, amt ) ) return false;

				}

			}

		}

		return true;
	},

	/**
	 * Follow object path to determine ability to pay.
	 * @param {object} parent - parent object.
	 * @param {object|number} cost - cost expected on parent or sub.
	 * @param {number} amt - cost multiplier.
	 */
	canPayObj( parent, cost, amt=1 ){

		if ( cost instanceof Stat || !isNaN(cost)){
			return parent.value >= cost;
		}

		for( let p in cost ) {

			var val = cost[p];
			if ( !isNaN(val) || val instanceof Stat ) {
				if ( parent.value < val*amt ) return false;
			} else if ( typeof val === 'object'){

				if ( !this.canPayObj( parent[p], val, amt ) ) return false;
			}

		}

		return true;
	},

	/**
	 * Test if equip is possible. ( Must have space in inventory
	 * for any items replaced. )
	 * @param {*} it
	 */
	canEquip(it) {

		// if inventory contains item, +1 free spaces.
		let adjust = this.state.inventory.includes(it) ? 1 : 0;
		return this.state.equip.replaceCount(it ) <= this.state.inventory.freeSpace() + adjust;

	},

	/**
	 *
	 * @param {*} it
	 * @param {?Inventory} inv - source inventory of item.
	 */
	equip( it, inv=null ) {

		if ( !this.canEquip(it) ) return false;

		console.log('equip:' + it.id  + ' it.type: ' + it.type + ' it.kind: ' + it.kind );
		let res = this.state.equip.equip( it );
		if ( !res) return;

		(inv || this.state.inventory).remove(it);

		this.onUnequip(res);

		it.equip( this );

	},

	/**
	 * Item was unequipped.
	 * @param {*} it
	 */
	onUnequip( it ) {

		if ( !it || typeof it ==='boolean') return;

		if ( Array.isArray(it) ) {

			for( let i = it.length-1; i>=0;i--) {this.onUnequip(it[i])}

		} else {
			this.state.inventory.add( it );
			it.unequip(this);
		}

	},

	unequip( slot, it){

		if ( this.state.inventory.full() ) return false;

		let weap = this.state.player.weapon;
		this.onUnequip( this.state.equip.remove( it, slot ) );

		// old weap must first be removed from equip.
		if ( it && (it === weap) ) this.player.weapon = this.state.equip.getWeapon();

	},

	/**
	 * Add an item to player's inventory.
	 * @param {*} it
	 */
	take( it ) {
		//console.log('adding: ' + it.id );
		return this.state.inventory.add(it);
	},

	/**
	 * Get loot from a task, monster, or dungeon.
	 * @param {string|Wearable|Object|Array} it
	 * @param {?Inventory} inv - inventory to place looted item.
	 */
	getLoot(it, inv=null) {

		if ( !it) return null;

		inv = inv || this.state.inventory;
		if ( inv.full() ) inv = this.state.drops;

		if ( typeof it === 'object' && it.stack ) {

			if ( inv.addStack( it ) ) {
				Events.emit( EVT_LOOT, it );
				return;
			}

		}

		let res = this.itemGen.getLoot(it);
		if ( res === null || res === undefined ) return;

		Events.emit( EVT_LOOT, res );

		inv.add( res );

	},

	/**
	 * Decrement lock count on an Item or array of items, etc.
	 * @param {string|string[]|GData|GData[]} id
	 */
	unlock( id ) { this.lock(id, -1); },

	/**
	 * Increment lock counter on item or items.
	 * @param {string|string[]|GData|GData[]} id
	 */
	lock(id, amt=1 ) {

		if ( typeof id === 'object' && id[Symbol.iterator] ) {

			for( let v of id ) this.lock(v,amt);

		} else if ( typeof id === 'object' ) {

			id.locks += amt;

		} else {

			let it = this.getData(id);
			if ( it ) {
				this.lock(it, amt);
			}

		}


	},

	/**
	 *
	 * @param {(it)=>boolean} pred
	 */
	filterItems( pred ) {
		let a = [];
		let gdata = this._gdata;
		for( let p in gdata ) {
			if ( pred( gdata[p] ) ) a.push( gdata[p] );
		}
		return a;
	},

	/**
	 *
	 * @param {string} id
	 * @returns {GData|undefined}
	 */
	getData(id) { return this._gdata[id] || this.state[id]; },

}