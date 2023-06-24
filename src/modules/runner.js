import {quickSplice, moveElm} from '../util/array';
import Events, {TASK_DONE, TASK_REPEATED, HALT_TASK, TASK_BLOCKED, STOP_ALL } from '../events';
import Stat from '../values/rvals/stat';
import Base, {mergeClass} from '../items/base';
import Runnable from '../composites/runnable';
import { SKILL, REST_TAG, TYP_RUN, PURSUITS } from '../values/consts';
import { assign } from 'objecty';
import { iterableMap, mapSet } from '../util/dataUtil';
import { Changed } from '../techTree';
import Game from '../game';
/**
 * Tracks running/perpetual tasks.
 */
export default class Runner {

	/**
	 * @item compat.
	 */
	get type() { return 'runner' }
	hasTag() { return false; }

	constructor( vars=null ){

		if ( vars ) assign( this, vars );

		this.id = this.type;
		this.name = 'activity';

		/**
		 * Actively running tasks.
		 * Queue.
		 * @type {Task[]}
		 * @property {Task[]} actives - Actively running tasks.
		 */
		this.actives = this.actives || null ;

		/**
		 * @property {Task[]} waiting - tasks waiting to run once rest is complete.
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
			actives:this.actives.map(v=>v.id),
			timers:this.timers.size > 0 ? iterableMap( this.timers, v=>v.id ) : undefined
		};

	}

	/**
	 * @todo : Messy for Focus skill.
	 */
	get exp() {
		let a = this.actives.find(v=>v.type===SKILL);
		return a ? a.exp : 0;
	}

	set exp(v) {
		let a = this.actives.find(v=>v.type===SKILL);
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
			if ( v.length ) {
				v.exp = v.length - 0.001;
			}
		});

	}

	get context(){return this._context;}
	set context(v) { this._context = v;}

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

	/**
	 * @property {Stat} max
	 */
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

		/**
		 * @property {DataList} pursuits
		 */
		this.pursuits = gs.getData( PURSUITS );

		this.waiting = this.reviveList( this.waiting, gs, false );

		/*if ( this.waiting.length > this.max ) {
			this.waiting = this.waiting.slice( this.waiting.length - this.max );
		}*/

		this.actives = this.reviveList( this.actives, gs, true );

		this.timers = mapSet( this.timers, v=>gs.getData(v) );

		Events.add( TASK_DONE, this.actDone, this );
		Events.add( HALT_TASK, this.haltTask, this );
		Events.add( TASK_BLOCKED, this.actBlocked, this );
		Events.add( STOP_ALL, this.stopAll, this );

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

			a = this.reviveTask( a, gs, running);
			if ( a ) res.push(a);

		}

		return res;

	}

	/**
	 *
	 * @param {*} a
	 * @param {*} gs
	 * @param {boolean} [running=false]
	 */
	reviveTask( a, gs, running=false ) {

		if ( !a ) return;

		if ( typeof a === 'string' ) {

			a = gs.getData( a);
			if ( !a || !a.hasTag ) return null;

		}

		a.running=running;
		if ( a.controller ) return gs.getData(a.controller);


		return a;

	}

	/**
	 * setTask of two items combined.
	 * Before using an item and target, check if any existing Runnable matches.
	 * If no match, create a Runnable.
	 * @param {GData} it
	 * @param {*} targ
	 */
	beginUseOn( it, targ ) {

		var run;
		if ( it.beginUseOn ) {
			run = it.beginUseOn( targ );
		} else {
			run = new Runnable( it, targ );
		}

		return this.setTask( run );

	}

	/**
	 * Toggle running state of task.
	 * @public
	 * @param {Task} a
	 */
	toggleAct( a ) {

		if ( this.actives.includes(a) ) {
			this.stopTask(a, false);
		} else this.setTask(a);

	}

	/**
	 * Add a task absolutely, removing a running task if necessary.
	 * @public
	 * @param {*} a
	 * @returns {boolean} true on success
	 */
	setTask(a, pos) {

		if ( !a) return false;

		if ( a.cost && (a.exp.valueOf() === 0) ) {
			this.context.payCost( a.cost);
		}

		if ( a.controller ) {
			/// a is proxied by another object. (raid/explore)
			let p = this.context.state.getData( a.controller );
			if (!p) return false;
			p.runWith(a);
			a = p;
		}
		if ( !this.has(a) ) {

			this.runTask(a, pos);
			this.trimActives(a);

		} else {
			// task already in running list.
			Events.emit( TASK_REPEATED );
		}

		return true;

	}

	/**
	 * stop activities to make the available space.
	 * @param {number} free - activity spaces to free.
	 */
	trimActives( not=null ){

		var remove = this.actives.length - Math.floor(this.max.valueOf());
		if ( remove <= 0 ) return;

		for( let a of this.actives ) {

			if ( a === not ) continue;
			this.stopTask(a, false );
			if ( a.type === TYP_RUN ) this.addWait(a);

			if ( --remove <= 0 ) return;
		}

	}

	trimWaiting() {
		let remove = this.waiting.length - Math.floor(+this.max);
		if ( remove > 0 ) {
			this.waiting.splice(0, remove );
		}
	}

	/**
	 * @private
	 * @param {Task} act
	 * @param {boolean} [resume=true] - attempt to resume task later.
	 */
	actBlocked( act, resume=true ) {

		this.stopTask( act );
		if ( resume ) this.addWait(act);

	}

	/**
	 * UNIQUE ACCESS POINT for removing active task.
	 * @param {Task} i
	 * @param {boolean} [tryWaiting=true] - whether to attempt to resume other tasks.
	 */
	stopTask( a, tryWaiting=true ){
		

		if(a.runmod){
			Game.removeMods( a.runmod )
		}
		if(a.locale){
			if(a.locale.runmod){
				Game.removeMods( a.locale.runmod )
			}
			if(a.locale.onStop){
				a.locale.onStop()
			}
		}
		if ( a.onStop ) a.onStop();
		a.running = false;
		let idx = this.actives.indexOf(a);
		if(idx >= 0) this.actives.splice(idx, 1);


		Changed.add(this);
		if ( tryWaiting ){
			this.tryResume();
		}

	}

	/**
	 * Test if task can be a pursuit
	 * @param {*} a
	 */
	canPursuit(a){
		return this.pursuits.max>0 && a.type !== TYP_RUN;
	}

	/**
	 * Controller -> base task.
	 * @param {*}
	 */
	baseTask(a) {
		return a.baseTask || a;
	}

	/**
	 * Add or remove existence of pursuit.
	 * Does not toggle actual running state.
	 * @param {*} a
	 */
	togglePursuit(a) {

		a = this.baseTask(a);
		if ( !a) return;

		if ( this.pursuits.includes(a) ) {
			this.pursuits.remove(a);
		} else {
			this.pursuits.cycleAdd(a);
		}

	}

	/**
	 * Attempt to run next hobby.
	 * @returns {boolean} true if pursuit was started.
	 */
	tryPursuit(){

		if ( this.free <= 0 ){
			return false;
		}

		let it = this.pursuits.getRunnable( this.context );
		if ( !it ) return false;

		return this.tryAdd( it, 0 );

	}

	/**
	 * Attempt to add an task, while avoiding any conflicting task types.
	 * @public
	 * @param {GData} a
	 */
	tryAdd( a, pos ) {

		if ( !this.free ) return false;
		if ( a.controller ) {
			let controller = this.getContoller(a);
			if ( this.has(controller) && controller.baseTask === a ) return false;
		} else if ( this.has(a) ) return false; 
		if ( a.fill && this.context.filled(a.fill,a) ) return false;
		if ( !a.canRun(this.context) ) return false;

		return this.setTask(a, pos);

	}

	moveWaiting(task, amt) {
		return moveElm(this.waiting, task, amt);
	}

	moveActive(task, amt) {
		return moveElm(this.actives, task, amt);
	}

	/**
	 * Remove task entirely from Runner, whether active
	 * or waiting.
	 * @param {GData} a
	 */
	removeAct( a ){

	}

	/**
	 * Attempt to remain an task from waiting list.
	 * @param {GData} a
	 * @returns {boolean} true if task was found and removed.
	 */
	removeWait(a) {

		let ind = this.waiting.indexOf(a);
		if ( ind < 0 ) return false;

		this.waiting.splice(ind, 1);
		return true;

	}

	addWait( a ){

		if ( a == null || a.hasTag(REST_TAG) || this.waiting.includes(a) || this.pursuits.includes(a) || ( a.maxed && a.maxed() ) || ( a.max != null && +a >= a.max ) ) return;
		if ( a.locale != null && (this.waiting.includes(a.locale) || this.pursuits.includes(a.locale)) ) return;
		//@todo fill check

		//console.log('adding wait: ' + a.id );
		this.waiting.push(a);

		this.trimWaiting();

	}

	haltTask( act ) {

		if ( act.controller ) act = this.getContoller(act);

		// absolute rest stop if no tasks waiting.
		if ( this.waiting.length === 0 && act.hasTag( REST_TAG ) ) this.stopTask(act,false);

		else {
			this.stopTask( act );
		}

	}

	/**
	 * Task is done, but could be perpetual/ongoing.
	 * Attempt to repay cost and keep task.
	 * @param {*} act
	 */
	actDone( act, repeatable=true ){

		//console.log('COMPLETE: ' + act.id );

		if ( act.running === false || !repeatable ) {
			// skills cant complete when not running.
			this.stopTask(act);

		} else if ( repeatable ) {

			if ( this.context.canRun(act) && this.actives.length <= this.max.value ) {

				this.setTask(act);
				if ( !act.hasTag( REST_TAG)  ) {
					this.tryResume();
				}


			} else {

				this.actBlocked( act );

			}

		}

	}

	stopAll() {

		for( let a of this.actives ) {
			this.stopTask(a, false);
		}
		this.clearWaits();

	}

	clearWaits() {
		this.waiting.splice(0,this.waiting.length);
	}

	/**
	 * Attempt to resume any waiting tasks.
	 */
	tryResume() {

		//console.log('tryResume() avail: ' + avail );

		for( let i = this.waiting.length-1; i >= 0; i-- ) {

			var a = this.waiting[i];

			if ( a == null ) {

				this.waiting.splice(i, 1);

			} else if ( this.tryAdd(a) ) {

				//@note shouldnt occur? tryAdd -> setTask -> runTask -> removeWait
				if(this.waiting[i] === a) this.waiting.splice(i, 1);
				if ( this.free <= 0 ) return;

			}

		}

		this.tryPursuit();
		this.tryRest();

	}

	update(dt) {

		for( let a of this.actives ) {
			this.doTask( a, dt );
		}

		for( let a of this.timers ) {
			if ( a.tick(dt) ) this.timers.delete(a);
		}

	}

	/**
	 * Attempt to add a rest task.
	 * @public
	 */
	tryRest(){
		let rest = this.context.state.restAction;
		return this.tryAdd(rest, 0);
	}

	/**
	 * Update individual task. Called during update()
	 * @param {Task} a
	 * @param {number} dt
	 * @returns {boolean} false if task should be halted.
	 */
	 doTask(a, dt) {

		if ((a.length==0 && a.perpetual==0) || a.maxed())
		{
			this.stopTask(a);
			return false;
		}

		if ( a.fill && this.context.filled( a.fill, a ) ) {

			this.actBlocked(a);
			return false;

		}

		if ( a.run ) {

			if ( !this.context.canPay( a.run, dt ) ) {
				this.actBlocked(a);
				return false;
			}
			this.context.payCost( a.run, dt );

		}
		
		if ( a.effect) this.context.applyVars( a.effect, dt );
		if ( a.update ) {
			a.update(dt);
		}
		return true;
	}

	/**
	 * UNIQUE ACCESS POINT for pushing task active.
	 * @param {*} a
	 */
	runTask(a, pos) {

		Changed.add(this);
		a.running=true;
		if(pos == null) this.actives.push(a);
		else this.actives.splice(pos, 0, a);
		if(a.onStart){
			a.onStart()
		}
		if(a.runmod){
			Game.applyMods( a.runmod )
		}
		if(a.locale){
			if(a.locale.runmod){
				Game.applyMods( a.locale.runmod )
			}
			if(a.locale.onStart){
				a.locale.onStart()
			}
		}
		
		this.removeWait(a);

	}

	/**
	 * Tests if exact task is running.
	 * @param {Task} a
	 * @returns {boolean}
	 */
	has(a) {
		if(a.controller) console.warn("runner has checking for task with controller:", a.id, a.controller);
		return this.actives.includes(a);
	}

	/**
	 * Tests if the runner already has a similar task in progress.
	 * Only actives are tested. Waiting task will not resume if
	 * a new active takes its place.
	 * @param {Task} a
	 */
	hasType( it ) {

		let t = typeof it ==='string'? it : it.type;
		return this.actives.find(a=>a.type===t) != null;

	}

	getContoller( act ) {
		return this.context.state.getData(act.controller);
	}


}

/**
 * applyMods() currently needed to increase runners.
 * @todo move this to Item stat.
 */
mergeClass( Runner, Base );
