import Game from '../game';
import {quickSplice, findRemove} from '../util/array';
import Events, {ACT_DONE, ACT_CHANGED, HALT_ACT, ACT_BLOCKED, EXP_MAX, STOP_ALL } from '../events';
import Stat from '../values/stat';
import Base, {mergeClass} from '../items/base';
import Runnable from '../composites/runnable';
import { SKILL, DUNGEON, REST_TAG, TYP_RUN, PURSUITS } from '../values/consts';

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
		 * @property {Action[]} actives - Actively running tasks.
		 */
		this.actives = this.actives || null;

		/**
		 * @property {Action[]} waiting - actions waiting to run once rest is complete.
		 */
		this.waiting = this.waiting || null;

		/**
		 * @property {} timers - timers ticking.
		 */
		this.timers = this.timers || null;

	}

	toJSON() {

		return {
			max:this.max,
			waiting:this.waiting.map(v=> v.type === TYP_RUN ? v : v.id),
			actives:this.actives.map(v=> v.type === TYP_RUN ? v : v.id),
			timers:this.timers.length>0? this.timers.map(v=>v.id) : undefined

			/**
			 * @property {Runnable[]} runnables - running combinations of objects.
			 */
			//runnables:this.runnables
		};

	}

	/**
	 * @todo : Messy for Focus skill.
	 */
	get exp() {
		for( let i = this.actives.length-1; i>= 0;i-- ) {
			var a = this.actives[i];
			if ( a.type === SKILL ) return a.exp;
		}
		return 0;
	}

	set exp(v) {

		for( let i = this.actives.length-1; i>= 0;i-- ) {

			var a = this.actives[i];
			if ( a.type === SKILL ) {
				a.exp = v;
				return;
			}

		}
	}

	addTimer(obj){
		obj.timer = obj.cd;
		this.timers.push(obj);
	}

	/**
	 * Used for cheat.
	 */
	autoProgress(){

		for( let i = 0; i < this.actives.length; i ++ ) {
			var a = this.actives[i];

			if ( a.length ) a.exp = a.length - 0.001;

		}

	}

	/**
	 * @property {number} running - number currently running.
	 */
	get running(){return this.actives.length; }

	/**
	 * @property {number} free - number of available run slots.
	 */
	get free(){
		return Math.floor( this.max.valueOf() ) - this.actives.length;
	}

	get max() { return this._max; }
	set max(v) {

		if ( v instanceof Stat ) {

			this._max =v;

		} else if ( !this._max ) {

			this._max = new Stat(v, 'max', true);
		} else if ( typeof v === 'number' ) {


			this._max.base = v;

		} else this._max = new Stat(v, 'max', true);

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

		this.actives = this.reviveList( this.actives, gs, true );
		if ( this.timers ) this.timers = gs.toData( this.timers );
		else this.timers = [];

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
	 * Revive a list, removing Runnable elements that can't revive (missing items, etc.)
	 * @param {object[]} list
	 * @param {GameState} gs
	 * @param {boolean} [running=false] - whether the items in list are running.
	 */
	reviveList( list, gs, running=false ) {

		if ( !list ) return [];

		for( let i = list.length-1; i >= 0; i-- ) {

			var a = list[i] = this.reviveAct( list[i], gs, running);
			if ( a == null ) list.splice(a,1);

		}

		return list;

	}

	reviveAct( a, gs, running=false ) {

		if (!a) return;

		if ( typeof a === 'string' ) {

			a = gs.getData( a);
			if ( !a ) return null;

		} else if ( typeof a === 'object') {

			a = new Runnable( a );
			if ( typeof a.revive === 'function' ) a.revive(gs);
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

		let ind = this.actives.indexOf(a);

		if ( ind >= 0 ) {

			this.stopAction(ind, false);

		} else {
			this.setAction(a);

		}


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

			// free space for action. actions.length is a double check.
			while ( this.actives.length > Math.floor(this.max.valueOf()) ) {

				let i = 0;

				let cur = this.actives[i];
				this.stopAction( i, false );

				if ( (cur.type === TYP_RUN ) ){
					//console.log('WAIT RUNNABLE');
					this.addWait(cur);
				}

			}

		}



	}

	/**
	 *
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
	 * @param {number|Action} i
	 * @param {boolean} tryResume - whether can attempt to resume another action.
	 */
	stopAction( i, tryResume=true ){

		if ( typeof i !== 'number') {
			i = this.actives.indexOf(i);
			if ( i < 0 ) {return;}
		}

		let a = this.actives[i];

		a.running = false;
		this.actives.splice(i,1);

		if ( tryResume ){

			this.tryResume();
		}
		this.tryPursuit();

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

	stopAll() {

		for( let i = this.actives.length-1; i>=0; i--) {

			if ( this.actives[i].onStop ) this.actives[i].onStop();
			this.stopAction( i, false );

		}
		this.clearWaits();

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

			if ( Game.canRun(act) && this.actives.length <= this.max.value ) {

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

		for( let i = this.actives.length-1; i>= 0; i-- ) {

			this.doAction( this.actives[i], dt );

		}

		for( let i = this.timers.length-1; i>= 0; i-- ) {
			if ( this.timers[i].tick(dt) ) quickSplice( this.timers, i );
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

			if ( a.effect) Game.applyEffect( a.effect, dt );
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
		this.actives.push(a);
	}

	/**
	 * Tests if exact action is running.
	 * @param {Action} a
	 * @returns {boolean}
	 */
	has(a) {
		return this.actives.includes(a);
	}

	/**
	 * Get index of a running action matching the type of the given action.
	 * This is used to replace actions in progress.
	 * @param {Action|Runnable} it
	 * @returns {number}
	 */
	typeIndex( it ) {

		let t = it.type;

		for( let i = this.actives.length-1; i>= 0; i-- ) {

			var a = this.actives[i];
			if ( a.type === t && a != it ) return i;

		}

		return -1;

	}

	/**
	 * Tests if the runner already has a similar action in progress.
	 * Only actives are tested. Waiting action will not resume if
	 * a new active takes its place.
	 * @param {Action} a
	 */
	hasType( it ) {

		let t = typeof it ==='string'? it : it.type;

		for( let i = this.actives.length-1; i>= 0; i-- ) {

			var a = this.actives[i];
			if ( a.type === t ) return true;

		}

		return false;

	}


}

/**
 * applyMods() currently needed to increase runners.
 * @todo move this to Item stat.
 */
mergeClass( Runner, Base );
