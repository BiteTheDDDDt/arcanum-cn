import Game from '../game';
import {quickSplice, findRemove} from '../util/array';
import Events, {ACT_DONE, ACT_CHANGED, HALT_ACT, ACT_BLOCKED, EXP_MAX, STOP_ALL } from '../events';
import Stat from '../values/stat';
import Base, {mergeClass} from '../items/base';
import Runnable from '../composites/runnable';
import { SKILL, DUNGEON, REST_TAG, TYP_RUN, PURSUITS } from '../values/consts';
import { iterableMap, iterableFind, setReplace, mapSet } from '../util/dataUtil';
import ArraySet from '../values/arrayset';

/**
 * Tracks running/perpetual actions.
 */
export default class Runner {

	/**
	 * @item compat.
	 */
	get type() { return 'runner' }
	hasTag() { return false; }

	constructor(vars=null ){

		if ( vars ) Object.assign(this,vars);

		this.id = this.type;
		this.name = 'activity';

		/**
		 * @property {ArraySet.<Action>} actives - Actively running tasks.
		 */
		this.actives = new ArraySet( this.actives || null );

		/**
		 * @property {Action[]} waiting - actions waiting to run once rest is complete.
		 */
		this.waiting = this.waiting || null;

		/**
		 * @property {} timers - timers ticking.
		 */
		this.timers = new Set( this.timers || null );

	}

	toJSON() {

		return {
			max:this.max,
			waiting:this.waiting.map(v=>v.id),
			actives:iterableMap( this.actives, v=> v.id ),
			timers:this.timers.size > 0 ? iterableMap( this.timers, v=>v.id ) : undefined
		};

	}

	/**
	 * @todo : Messy for Focus skill.
	 */
	get exp() {
		let a = iterableFind(this.actives, v=>v.type===SKILL);
		return a ? a.exp : 0;
	}

	set exp(v) {
		let a = iterableFind(this.actives, v=>v.type===SKILL);
		if ( a ) a.exp =v;
	}

	/**
	 *
	 * @param {object} obj
	 * @param {(number)=>boolean} obj.tick -tick function.
	 */
	addTimer(obj){
		this.timers.add(obj);
	}

	/**
	 * Used for cheat.
	 */
	autoProgress(){

		this.actives.forEach(v=>{
			if ( v.length ) v.exp = v.length - 0.001;
		});

	}

	/**
	 * @property {number} running - number currently running.
	 */
	get running(){return this.actives.size; }

	/**
	 * @property {number} free - number of available run slots.
	 */
	get free(){
		return Math.floor( this.max.valueOf() ) - this.actives.size;
	}

	get max() { return this._max; }
	set max(v) {

		if ( !this._max ) {
			this._max = v instanceof Stat ? v : new Stat(v, 'max', true);
		} else {
			this._max.base = v instanceof Stat ? v.base : v;
		}

	}

	/**
	 * revive data from save.
	 * @param {GameState} gs
	 */
	revive( gs ) {

		this.max = this._max || 1;
		this.pursuits = gs.getData( PURSUITS );

		this.waiting = this.reviveList( this.waiting, gs, false );

		if ( this.waiting.length > this.max ) {
			this.waiting = this.waiting.slice( this.waiting.length - this.max );
		}

		setReplace( this.actives, this.reviveList( this.actives, gs, true ) );

		this.timers = mapSet( this.timers, v=>gs.getData(v) );

		Events.add( ACT_DONE, this.actDone, this );
		Events.add( HALT_ACT, this.haltAction, this );
		Events.add( ACT_BLOCKED, this.actBlocked, this );
		Events.add( EXP_MAX, this.expMax, this );
		Events.add( STOP_ALL, this.stopAll, this );

	}

	/**
	 * Item reached max exp value.
	 * @param {*} it
	 */
	expMax( it ) {
		if ( it.complete && (typeof it.complete) === 'function') it.complete();

	}

	/**
	 * Revive a list, removing elements that can't revive (missing items, etc.)
	 * @param {Iterable} list
	 * @param {GameState} gs
	 * @param {boolean} [running=false] - whether the items in list are running.
	 */
	reviveList( list, gs, running=false ) {

		let res = [];
		if ( !list ) return res;

		for( let a of list ) {

			a = this.reviveAct( a, gs, running);
			if ( a ) res.push(a);

		}

		return res;

	}

	reviveAct( a, gs, running=false ) {

		if (!a) return;

		if ( typeof a === 'string' ) {

			a = gs.getData( a);
			if ( !a ) return null;

		} else if ( typeof a === 'object') {

			a = new Runnable( a );
			a.revive(gs);
			if ( a.target == null || a.item == null ) return null;

		}
		if ( a.type === DUNGEON ) return gs.raid;

		a.running=running;

		return a;

	}

	/**
	 * setAction of two items combined.
	 * Before using an item and target, check if any existing Runnable matches.
	 * If no match, create a Runnable.
	 * @param {*} it
	 * @param {*} targ
	 */
	useOn( it, targ ) {

		let id = it.id;
		let t = targ.id;

		let run = findRemove( this.waiting, (v)=>{
			return (v.type === TYP_RUN )&&(id===v.item.id && v.target && t === v.target.id )
		});

		if ( !run ) {

			if ( targ.running === true ) return false;

			run = new Runnable( it, targ );
			if ( it.beginUseOn ) it.beginUseOn( targ );

		}
		this.setAction( run );

	}

	/**
	 * Check if item/target combination is in wait queue.
	 * @param {GData} it
	 * @param {GData} targ
	 */
	isWaiting( it, targ ){

		for( let i = this.waiting.length-1; i>=0; i--) {

			var a = this.waiting[i];
			if ( a.type === TYP_RUN ) {

				if ( a.item === it && a.target === targ ) return true;

			} else if ( a === it ) return true;

		}

		return false;

	}

	/**
	 * Toggle running state of action.
	 * @public
	 * @param {Action} a
	 */
	toggleAct( a ) {

		if ( this.actives.has(a) ) {
			this.stopAction(a, false);
		} else this.setAction(a);

	}

	/**
	 * Add an action absolutely, removing a running action if necessary.
	 * @public
	 * @param {*} a
	 */
	setAction(a) {

		if ( !a) return;

		if ( a.proxy ) {
			/// a is proxied by another object. (raid/explore)
			let p = Game.state.getData( a.proxy );
			if (!p) return false;
			p.runWith(a);
			a = p;
		}

		if ( a.cost && (a.exp === 0) ) {
			Game.payCost( a.cost);
		}

		if ( !this.has(a) ) {

			// action already in running list.
			Events.emit( ACT_CHANGED );

			this.runAction(a);
			this.trimActives(a);

		}

	}

	/**
	 * stop activities to make the available space.
	 * @param {number} free - activity spaces to free.
	 */
	trimActives( not=null ){

		var remove = this.actives.size - Math.floor(this.max.valueOf());
		if ( remove <= 0 ) return;

		for( let a of this.actives ) {

			if ( a === not ) continue;
			this.stopAction(a, false );
			if ( a.type === TYP_RUN ) this.addWait(a);

			if ( --remove <= 0 ) return;
		}

	}

	/**
	 * @private
	 * @param {Action} act
	 */
	actBlocked( act, resume=true ) {

		this.stopAction( act, false );
		if ( act.hasTag(REST_TAG) ) {

			this.tryResume( true );

		} else {

			if ( resume ) this.addWait(act);
			this.doRest();
		}

	}

	/**
	 * UNIQUE ACCESS POINT for removing active action.
	 * @param {Action} i
	 * @param {boolean} [tryResume=true] - whether can attempt to resume another action.
	 */
	stopAction( a, tryResume=true ){

		if ( a.onStop ) a.onStop();
		a.running = false;
		this.actives.delete(a);

		if ( tryResume ){
			this.tryResume();
			this.tryPursuit();
		}

	}

	/**
	 * Attempt to run next hobby.
	 * @returns {boolean} true if pursuit was started.
	 */
	tryPursuit(){

		if ( this.free <= 0 || !Game.state.player.rested() ) return false;

		let it = this.pursuits.getRunnable( Game );
		if ( !it ) return false;

		return this.tryAdd( it );

	}

	/**
	 * Attempt to add an action, while avoiding any conflicting action types.
	 * @public
	 * @param {GData} a
	 */
	tryAdd( a ) {

		if ( !this.free ) return false;
		if ( a.fill && Game.filled(a.fill,a) ) return false;
		if ( !a.canRun(Game) ) return false;

		this.setAction(a);

		return true;

	}

	/**
	 * Remove action entirely from Runner, whether active
	 * or waiting.
	 * @param {GData} a
	 */
	removeAct( a ){

	}

	/**
	 * Attempt to remain an action from waiting list.
	 * @param {GData} a
	 * @returns {boolean} true if action was found and removed.
	 */
	removeWait(a) {

		let ind = this.waiting.indexOf(a);
		if ( ind < 0 ) return false;

		this.waiting.splice(ind, 1);
		return true;

	}

	addWait( a ){

		if ( a.hasTag(REST_TAG) ) return;

		//console.log('adding wait: ' + a.id );
		this.waiting.push(a);

		let remove = this.waiting.length - this.max.value;
		let i = 0;

		while ( remove > 0 ) {

			a = this.waiting[i];
			if ( a.type !== TYP_RUN ) {

				this.waiting.splice( i, 1 );

			} else {
				i++;
			}

			remove--;

		}

	}

	haltAction( act ) {

		if ( act.proxy ) act = Game.state.getData(act.proxy);

		// absolute rest stop if no actions waiting.
		if ( this.waiting.length === 0 && act.hasTag( REST_TAG ) ) this.stopAction(act,false);

		else {
			if ( act.type === TYP_RUN ) this.addWait(act);
			this.stopAction( act );
		}

	}

	/**
	 * Action is done, but could be perpetual/ongoing.
	 * Attempt to repay cost and keep action.
	 * @param {*} act
	 */
	actDone( act, repeatable=true ){


		if ( act.running === false ) {
			// skills cant complete when not running.
			this.stopAction(act);

		} else if ( repeatable ) {

			if ( Game.canRun(act) && this.actives.size <= this.max.value ) {

				this.setAction(act);

			} else if ( act.hasTag(REST_TAG )) {

				this.stopAction( act );

			} else {

				this.stopAction( act );
				this.addWait(act);

			}

		} else {


			this.stopAction( act );

		}

	}

	stopAll() {

		for( let a of this.actives ) {
			this.stopAction(a, false);
		}
		this.clearWaits();

	}

	clearWaits() {
		this.waiting.splice(0,this.waiting.length);
	}

	/**
	 * Attempt to resume any waiting actions.
	 * @param {boolean} norest - disallow resting on free action.
	 */
	tryResume( norest=false) {

		let avail = this.free;

		for( let i = this.waiting.length-1; i >= 0; i-- ) {

			var a = this.waiting[i];

			if ( a == null ) {

				quickSplice(this.waiting,i);

			} else if ( this.tryAdd(a) ) {

				quickSplice(this.waiting,i);
				if ( --avail <= 0 ) return;

			}

		}

		if ( avail > 0 && !norest ) this.tryAdd( Game.state.restAction );

	}

	update(dt) {

		for( let a of this.actives ) {
			this.doAction( a, dt );
		}

		for( let a of this.timers ) {
			if ( a.tick(dt) ) this.timers.delete(a);
		}

	}

	/**
	 * Force-add a rest action.
	 * @public
	 */
	doRest(){
		this.tryAdd( Game.state.restAction );
	}

	/**
	 * Update individual action. Called during update()
	 * @param {Action} a
	 * @param {number} dt
	 * @returns {boolean} false if action should be halted.
	 */
	doAction(a, dt) {

		if ( a.maxed() ) {
			this.stopAction(a);
			this.tryAdd( Game.state.restAction );
			return;
		}

		if ( a.run ) {

			if ( !Game.canPay( a.run, dt ) ) {
				this.stopAction(a);
				this.addWait(a);
				this.tryAdd( Game.state.restAction );

			}
			Game.payCost( a.run, dt );

		}

		if ( a.fill && Game.filled( a.fill, a ) ) {

			this.actBlocked(a);

		} else {

			if ( a.effect) Game.applyVars( a.effect, dt );
			if ( a.update ) {

				a.update(dt);
				a.dirty = true;
			}

		}

	}

	/**
	 * UNIQUE ACCESS POINT for pushing action active.
	 * @param {*} a
	 */
	runAction(a) {

		a.running=true;
		this.actives.add(a);

		this.removeWait(a);

	}

	/**
	 * Tests if exact action is running.
	 * @param {Action} a
	 * @returns {boolean}
	 */
	has(a) {
		return this.actives.has(a);
	}

	/**
	 * Tests if the runner already has a similar action in progress.
	 * Only actives are tested. Waiting action will not resume if
	 * a new active takes its place.
	 * @param {Action} a
	 */
	hasType( it ) {

		let t = typeof it ==='string'? it : it.type;
		return iterableFind( this.actives, a=>a.type===t) !== null;

	}


}

/**
 * applyMods() currently needed to increase runners.
 * @todo move this to Item stat.
 */
mergeClass( Runner, Base );
