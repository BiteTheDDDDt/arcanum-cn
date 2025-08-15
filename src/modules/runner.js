import { moveElm } from "../util/array";
import Events, { TASK_DONE, TASK_REPEATED, HALT_TASK, TASK_BLOCKED, STOP_ALL } from "../events";
import Stat from "@/values/rvals/stat";
import Base, { mergeClass } from "../items/base";
import Runnable from "@/composites/runnable";
import { SKILL, REST_TAG, TYP_RUN, HOBBIES, GOALS, EXPLORE, TASK, TASK_END_REASON } from "@/values/consts";
import { assign } from "@/util/objecty";
import { iterableMap, mapSet } from "@/util/dataUtil";
import { Changed } from "@/changes";
import Game from "@/game";
/**
 * Tracks running/perpetual tasks.
 */
export default class Runner {
	/**
	 * @item compat.
	 */
	get type() {
		return "runner";
	}
	hasTag() {
		return false;
	}

	constructor(vars = null) {
		if (vars) assign(this, vars);

		this.id = this.type;
		this.name = "activity";

		/**
		 * Actively running tasks.
		 * Queue.
		 * @type {Task[]}
		 * @property {Task[]} actives - Actively running tasks.
		 */
		this.actives = this.actives || null;

		/**
		 * @property {Task[]} waiting - tasks waiting to run once rest is complete.
		 */
		this.waiting = this.waiting || null;

		/**
		 * @property {} timers - timers ticking.
		 */
		this.timers = new Set(this.timers || null);
	}

	toJSON() {
		return {
			max: this.max,
			waiting: this.waiting.map(v => v.id),
			actives: this.actives.map(v => v.id),
			timers: this.timers.size > 0 ? iterableMap(this.timers, v => v.id) : undefined,
		};
	}

	/**
	 * Getters and setters to enable modifying the progress of encounters, skills and tasks.
	 */
	get skillprogress() {
		let a = this.actives.find(v => v.type === SKILL);
		return a ? a.exp : 0;
	}

	get encounterprogress() {
		let a = this.actives.find(v => v.type === EXPLORE);
		return a?.enc ? a.enc.exp : 0;
	}

	get taskprogress() {
		let a = this.actives.find(v => v.type === TASK);
		return a ? a.exp : 0;
	}
	set skillprogress(v) {}

	set encounterprogress(v) {}

	set taskprogress(v) {}

	/* used to be a thing
		set exp(v) {
			let a = this.actives.find(v=>v.type===SKILL);
			if ( a ) a.exp =v;
		}
	*/
	/**
	 *
	 * @param {object} obj
	 * @param {(number)=>boolean} obj.tick -tick function.
	 */
	addTimer(obj) {
		this.timers.add(obj);
	}

	/**
	 * Used for cheat.
	 */
	autoProgress() {
		this.actives.forEach(v => {
			if (v.length) {
				v.exp = v.length - 0.001;
			}
		});
	}

	get context() {
		return this._context;
	}
	set context(v) {
		this._context = v;
	}

	/**
	 * @property {number} running - number currently running.
	 */
	get running() {
		return this.actives.length;
	}

	/**
	 * @property {number} free - number of available run slots.
	 */
	get free() {
		return Math.floor(this.max.valueOf()) - this.actives.length;
	}

	/**
	 * @property {Stat} max
	 */
	get max() {
		return this._max;
	}
	set max(v) {
		if (!this._max) {
			this._max = v instanceof Stat ? v : new Stat(v, "max", 0);
		} else {
			this._max.base = v instanceof Stat ? v.base : v;
		}
	}

	/**
	 * revive data from save.
	 * @param {GameState} gs
	 */
	revive(gs) {
		this.max = this._max || 1;

		/**
		 * @property {DataList} hobbies
		 */
		this.hobbies = gs.getData(HOBBIES);
		this.goals = gs.getData(GOALS);

		this.waiting = this.reviveList(this.waiting, gs, false);

		/*if ( this.waiting.length > this.max ) {
			this.waiting = this.waiting.slice( this.waiting.length - this.max );
		}*/

		this.actives = this.reviveList(this.actives, gs, true);

		this.timers = mapSet(this.timers, v => gs.getData(v));

		Events.add(TASK_DONE, this.actDone, this);
		Events.add(HALT_TASK, this.haltTask, this);
		Events.add(TASK_BLOCKED, this.actBlocked, this);
		Events.add(STOP_ALL, this.stopAll, this);

		// Set tick counter for tryResume
		this.resumeTick = 0;
	}

	/**
	 * Revive a list, removing elements that can't revive (missing items, etc.)
	 * @param {Iterable} list
	 * @param {GameState} gs
	 * @param {boolean} [running=false] - whether the items in list are running.
	 */
	reviveList(list, gs, running = false) {
		let res = [];
		if (!list) return res;

		for (let a of list) {
			a = this.reviveTask(a, gs, running);
			if (a) res.push(a);
		}

		return res;
	}

	/**
	 *
	 * @param {*} a
	 * @param {*} gs
	 * @param {boolean} [running=false]
	 */
	reviveTask(a, gs, running = false) {
		if (!a) return;

		if (typeof a === "string") {
			a = gs.getData(a);
			if (!a || !a.hasTag) return null;
		}

		a.running = running;
		if (a.controller) return gs.getData(a.controller);

		return a;
	}

	/**
	 * setTask of two items combined.
	 * Before using an item and target, check if any existing Runnable matches.
	 * If no match, create a Runnable.
	 * @param {GData} it
	 * @param {*} targ
	 */
	beginUseOn(it, targ) {
		let run;
		if (it.beginUseOn) {
			run = it.beginUseOn(targ);
		} else {
			run = new Runnable(it, targ);
		}

		return this.setTask(run);
	}

	/**
	 * Toggle running state of task.
	 * @public
	 * @param {Task} a
	 */
	toggleAct(a) {
		if (this.actives.includes(a)) {
			this.stopTask(a, TASK_END_REASON.USER, false);
		} else this.setTask(a);
	}

	/**
	 * Add a task absolutely, removing a running task if necessary.
	 * @public
	 * @param {*} a
	 * @returns {boolean} true on success
	 */
	setTask(a, pos) {
		if (!a) return false;

		if (a.cost && a.exp.valueOf() === 0 && !a.paid) {
			this.context.payCost(a.cost);
			a.paid = true;
		}

		if (a.controller) {
			/// a is proxied by another object. (raid/explore)
			let p = this.context.state.getData(a.controller);
			if (!p) return false;
			p.runWith(a);
			a = p;
		}
		if (!this.has(a)) {
			this.runTask(a, pos);
			this.trimActives(a);
		} else {
			// task already in running list.
			Events.emit(TASK_REPEATED);
		}

		return true;
	}

	/**
	 * stop activities to make the available space.
	 * @param {number} free - activity spaces to free.
	 */
	trimActives(not = null) {
		let remove = this.actives.length - Math.floor(this.max.valueOf());
		if (remove <= 0) return;

		for (const a of this.actives) {
			if (a === not) continue;
			this.stopTask(a, TASK_END_REASON.USER, false);
			if (a.type === TYP_RUN) this.addWait(a);

			if (--remove <= 0) return;
		}
	}

	trimWaiting() {
		let remove = this.waiting.length - 5 - Math.floor(+this.max); //allows you to have 5 more waiting tasks than you have slots.
		if (remove > 0) {
			this.waiting.splice(0, remove);
		}
	}

	/**
	 * @private
	 * @param {Task} act
	 * @param {number} [reason=TASK_END_REASON.USER] reason for blocking. Defaults to forced.
	 * @param {boolean} [resume=true] - attempt to resume task later.
	 */
	actBlocked(act, reason = TASK_END_REASON.USER, resume = true) {
		this.stopTask(act, reason);
		if (resume) this.addWait(act);
	}

	/**
	 * UNIQUE ACCESS POINT for removing active task.
	 * @param {Task} i
	 * @param {number} [endReason=TASK_END_REASON.USER] - reason for stopping task. Defaults to forced.
	 * @param {boolean} [tryWaiting=true] - whether to attempt to resume other tasks.
	 */
	stopTask(a, endReason = TASK_END_REASON.USER, tryWaiting = true) {
		if (a.runmod) {
			Game.removeMods(a.runmod);
		}
		if (a.baseTask) {
			if (a.baseTask.runmod) {
				Game.removeMods(a.baseTask.runmod);
			}
		}
		if (a.onStop) a.onStop(endReason);
		a.running = false;
		let idx = this.actives.indexOf(a);
		if (idx >= 0) this.actives.splice(idx, 1);

		Changed.add(this);
		if (tryWaiting) {
			this.tryResume();
		}
	}

	/**
	 * Test if task can be a pursuit
	 * @param {*} a
	 */
	canPursuit(a) {
		return (
			this.hobbies.max > 0 && a.type !== TYP_RUN && !this.goals.includes(a) && !this.goals.includes(a.baseTask)
		);
	}
	canGoal(a) {
		return (
			this.goals.max > 0 && a.type !== TYP_RUN && !this.hobbies.includes(a) && !this.hobbies.includes(a.baseTask)
		);
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
		if (!a) return;

		if (this.hobbies.includes(a)) {
			this.hobbies.remove(a);
		} else {
			this.hobbies.cycleAdd(a);
		}
	}
	toggleGoal(a) {
		a = this.baseTask(a);
		if (!a) return;

		if (this.goals.includes(a)) {
			this.goals.remove(a);
		} else {
			this.goals.cycleAdd(a);
		}
	}
	/**
	 * Attempt to run next hobby.
	 * @returns {boolean} true if pursuit was started.
	 */
	tryPursuit() {
		if (this.free <= 0) {
			return false;
		}

		return !!this.hobbies.nextConditional(it => this.tryAdd(it, 0, true));
	}
	tryGoal() {
		if (this.free <= 0) {
			return false;
		}
		return !!this.goals.nextConditional(it => this.tryAdd(it, 0, true));
	}
	/**
	 * Finds the first task that can be added to the list of active tasks.
	 * @param {boolean} continuing - If tasks should go though idle-related checks
	 * @returns {GData | null} First task found that can be added. Returns null if there isn't any.
	 */
	getNextTask(continuing) {
		let goals = this.goals.nextConditional(it => this.canAdd(it, continuing));
		if (goals) return goals;

		for (let task of this.waiting) {
			if (this.canAdd(task, continuing)) return task;
		}

		let pursuit = this.hobbies.nextConditional(it => this.canAdd(it, continuing));
		if (pursuit) return pursuit;

		let rest = this.context.state.restAction || Game.getData("rest");
		if (this.canAdd(rest, continuing)) return rest;

		return null;
	}

	/**
	 * Checks if a task can be added.
	 * Ignores amount of available space.
	 * @param {GData} task - Task that is being checked
	 * @param {boolean} continuing - If task should go though idle-related checks
	 * @returns {boolean} - If task can be added
	 */
	canAdd(task, continuing) {
		if (task.controller) {
			let controller = this.getContoller(task);
			if (this.has(controller) && controller.baseTask === task) return false;
			if (continuing && !controller.canContinue(this.context, task)) return false;
		} else {
			if (this.has(task)) return false;
			if (continuing && !task.canContinue(this.context)) return false;
		}
		if (task.fill && this.context.filled(task.fill, task)) return false;
		return task.canRun(this.context);
	}

	/**
	 * Attempt to add an task, while avoiding any conflicting task types.
	 * @public
	 * @param {GData} a - task to be added
	 * @param {number} [pos] - location to add task. Will append if null
	 * @param {boolean} [cont] - if task is being automatically added
	 */
	tryAdd(a, pos, cont) {
		if (!this.free) return false;

		if (!this.canAdd(a, cont)) return false;

		return this.setTask(a, pos);
	}

	moveWaiting(task, amt) {
		let a = moveElm(this.waiting, task, amt);
		if (a) this.waiting = a;
		return true;
	}

	moveActive(task, amt) {
		let a = moveElm(this.actives, task, amt);
		if (a) this.actives = a;
		return true;
	}

	/**
	 * Remove task entirely from Runner, whether active
	 * or waiting.
	 * @param {GData} a
	 */
	removeAct(a) {}

	/**
	 * Attempt to remain an task from waiting list.
	 * @param {GData} a
	 * @returns {boolean} true if task was found and removed.
	 */
	removeWait(a) {
		let ind = this.waiting.indexOf(a);
		if (ind < 0) return false;
		this.waiting.splice(ind, 1);

		return true;
	}

	addWait(a) {
		if (
			a == null ||
			a.hasTag(REST_TAG) ||
			this.waiting.includes(a) ||
			this.hobbies.includes(a) ||
			this.goals.includes(a) ||
			(a.maxed && a.maxed()) ||
			(a.max != null && +a >= a.max)
		)
			return;
		if (
			a.baseTask != null &&
			(this.waiting.includes(a.baseTask) || this.hobbies.includes(a.baseTask) || this.goals.includes(a.baseTask))
		)
			return;
		//@todo fill check

		this.waiting.push(a);

		this.trimWaiting();
	}

	haltTask(act, reason = TASK_END_REASON.USER) {
		if (act.controller) act = this.getContoller(act);

		// absolute rest stop if no tasks waiting.
		if (this.waiting.length === 0 && act.hasTag(REST_TAG)) this.stopTask(act, reason, false);
		else {
			this.stopTask(act, reason);
		}
	}

	/**
	 * Task is done, but could be perpetual/ongoing.
	 * Attempt to repay cost and keep task.
	 * @param {*} act
	 */
	actDone(act, repeatable = true) {
		let baseTask = act.baseTask || act;

		if (
			act.running === false ||
			!repeatable ||
			(this.hobbies.items.includes(baseTask) && !this.hobbies.items.includes(this.getNextTask(true)))
		) {
			// skills cant complete when not running.
			this.stopTask(act, TASK_END_REASON.SUCCESS);
		} else if (repeatable) {
			let canRun = this.context.canRun(baseTask);

			if (canRun && this.free >= 0) {
				this.setTask(baseTask);
				if (!act.hasTag(REST_TAG)) {
					this.tryResume();
				}
			} else {
				this.actBlocked(act, TASK_END_REASON.CANTRUN);
			}
		}
	}

	stopAll() {
		let b = Array.from(this.actives);
		for (let a of b) {
			this.stopTask(a, TASK_END_REASON.USER, false);
		}
		this.clearWaits();
	}

	clearWaits() {
		this.waiting.splice(0, this.waiting.length);
	}

	/**
	 * Attempt to resume any waiting tasks.
	 */
	tryResume() {
		if (this.free <= 0) return;

		for (let i = this.goals.items.length; i > 0; i--) {
			this.tryGoal();
			if (this.free <= 0) return;
		}
		for (let i = this.waiting.length - 1; i >= 0; i--) {
			const a = this.waiting[i];

			if (a == null) {
				this.waiting.splice(i, 1);
			} else if (this.tryAdd(a, null, true)) {
				//@note shouldnt occur? tryAdd -> setTask -> runTask -> removeWait
				if (this.waiting[i] === a) this.waiting.splice(i, 1);
				if (this.free <= 0) return;
			}
		}
		for (let i = this.hobbies.items.length; i > 0; i--) {
			this.tryPursuit();
			if (this.free <= 0) return;
		}
		this.tryRest();

		// Reset counter for tryResume
		this.resumeTick = 0;
	}

	update(dt) {
		for (let a of this.actives) {
			this.doTask(a, dt);
		}

		for (let a of this.timers) {
			if (a == undefined || !a.id) {
				this.timers.delete(a);
				continue;
			}
			if (a.tick(dt)) this.timers.delete(a);
		}

		this.resumeTick += dt;

		// Force tryResume if it's been too long since the last one
		// Value is in seconds
		if (this.resumeTick >= 15) this.tryResume();
	}

	/**
	 * Attempt to add a rest task.
	 * @public
	 */
	tryRest() {
		let rest = this.context.state.restAction || Game.getData("rest");
		return this.tryAdd(rest, 0);
	}

	/**
	 * Update individual task. Called during update()
	 * @param {Task} a
	 * @param {number} dt
	 * @returns {boolean} false if task should be halted.
	 */
	doTask(a, dt) {
		if ((a.length == 0 && a.perpetual == 0) || a.maxed()) {
			this.stopTask(a, TASK_END_REASON.MAXED);
			return false;
		}

		if (a.fill && this.context.filled(a.fill, a)) {
			this.actBlocked(a, TASK_END_REASON.FULL);
			return false;
		}

		if (a.run) {
			if (!this.context.canPay(a.run, dt)) {
				this.actBlocked(a, TASK_END_REASON.COST);
				return false;
			}
			this.context.payCost(a.run, dt);
		}

		if (a.effect) this.context.applyVars(a.effect, dt);
		if (a.update) {
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
		a.running = true;
		if (pos == null) this.actives.push(a);
		else this.actives.splice(pos, 0, a);
		if (a.onStart) {
			a.onStart();
		}
		if (a.runmod) {
			Game.applyMods(a.runmod);
		}
		if (a.baseTask) {
			if (a.baseTask.runmod) {
				Game.applyMods(a.baseTask.runmod);
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
		if (a.controller) console.warn("runner has checking for task with controller:", a.id, a.controller);
		return this.actives.includes(a);
	}

	/**
	 * Tests if the runner already has a similar task in progress.
	 * Only actives are tested. Waiting task will not resume if
	 * a new active takes its place.
	 * @param {Task} a
	 */
	hasType(it) {
		let t = typeof it === "string" ? it : it.type;
		return this.actives.find(a => a.type === t) != null;
	}

	getContoller(act) {
		return this.context.state.getData(act.controller);
	}
}

/**
 * applyMods() currently needed to increase runners.
 * @todo move this to Item stat.
 */
mergeClass(Runner, Base);
