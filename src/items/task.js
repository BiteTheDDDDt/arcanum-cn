import GData from "@/items/gdata";
import Game from "@/game";
import Events, { TASK_DONE, TASK_IMPROVED } from "../events";
import Stat from "@/values/rvals/stat";
import Scaler from "@/values/rvals/scaler";
import { TASK } from "@/values/consts";
import { ParseMods } from "@/modules/parsing";
import { SetModCounts } from "@/items/base";
import { Changed } from "@/changes";

/*function ShowModTotals( mods ){

	if ( mods instanceof Mod ) {
		console.log( mods.id + ': ' + mods.bonusTot );
		return;
	}

	for( let p in mods ) {

		let it = mods[p];
		if ( it instanceof Mod ) console.log( it.id + ': ' + it.bonusTot );
		else ShowModTotals( it );

	}

}*/

const Defaults = Object.freeze({
	rate: 1,
});
export default class Task extends GData {
	valueOf() {
		return this.locked ? 0 : this.value.valueOf();
	}

	toJSON() {
		let data = super.toJSON() || {};
		if (this.timer > 0) data.timer = this.timer;
		if (data.attack) data.attack = undefined;
		return data && Object.keys(data).length ? data : undefined;
	}

	get level() {
		return this._level;
	}
	set level(v) {
		this._level = v;
	}

	/**
	 * @property {boolean} morality - is this a morality/alignment task?
	 * Property is used for filtering in tasks.vue.
	 * @todo Rework this functionality to not rely on separate bools
	 */
	get morality() {
		return this._morality;
	}
	set morality(v) {
		this._morality = v;
	}

	/**
	 * @property {Mods} runmod - mods to apply while task is being actively used.
	 */
	get runmod() {
		return this._runmod;
	}
	set runmod(v) {
		this._runmod = v;
	}

	get ex() {
		return this._exp;
	}
	set ex(v) {
		this._exp = v instanceof Scaler ? v : new Scaler(v, this.id + ".exp", this._rate);
	}

	/**
	 * @property {number} exp - alias ex data files.
	 */
	get exp() {
		return this._exp;
	}
	set exp(v) {
		if (this.locked || this.disabled || this.maxed() || (this.buy && !this.owned)) return;

		//@compat only
		if (this._exp === null || this._exp === undefined) this.ex = v;

		if (v < 0) {
			console.warn(this.id + " exp: " + v);
			return;
		}

		if (v === Infinity) {
			this._exp.set(Number.MAX_VALUE);
		} else this._exp.set(v);

		this.tryComplete();
	}

	get rate() {
		return this._rate;
	}
	set rate(v) {
		this._rate = v instanceof Stat ? v : new Stat(v, this.id + ".rate");
		if (this.ex !== undefined) this.ex.scale = this._rate;
	}

	get length() {
		return this._length;
	}
	set length(v) {
		if (v === null || v === undefined) this._length = null;
		else this._length = v instanceof Stat ? v : new Stat(v);
	}

	get exclude() {
		return this._exclude;
	}
	set exclude(v) {
		this._exclude = typeof v === "string" ? v.split(",") : v;
	}

	get only() {
		return this._only;
	}
	set only(v) {
		this._only = typeof v === "string" ? v.split(",") : v;
	}

	get running() {
		return this._running;
	}
	set running(v) {
		this._running = v;
	}

	get timer() {
		return this._timer;
	}
	set timer(v) {
		this._timer = v;
	}

	percent() {
		return 100 * (this._exp / this._length);
	}

	constructor(vars = null) {
		super(vars);

		this.repeat = this.repeat === false ? false : true;
		this.type = "task";

		if (this.at) {
			this.at = ParseMods(this.at, this.id, 1);
		}

		if (this.every) this.every = ParseMods(this.every, this.id, this);
		//this is added to ensure task progress can scale.
		if (!this.rate) this.rate = new Stat(Defaults.rate, this.id + ".rate");
		if (!this.rate.base) this.rate.base = Defaults.rate;

		if (this.length > 0 || this.perpetual > 0) {
			if (!(this.exp instanceof Scaler)) this.ex = 0;
			this.ex = this.ex || 0;
		}

		this.timer = this.timer || 0;
		this.running = this.running || false;

		// this.applyImproves();
		SetModCounts(this.runmod, 1);
	}

	/**
	 * Tests whether item fills unlock requirement.
	 * @returns {boolean}
	 */
	fillsRequire() {
		return this.locked === false && this.value > 0;
	}

	applyImproves() {
		let v = this.valueOf();
		if (this.at) {
			//if ( v > 0 ) console.log(this.id + ' TOTAL: ' + v );

			for (let p in this.at) {
				if (v >= Number(p)) {
					//ShowModTotals( this.at[p] );
					this.applyMods(this.at[p]);
				}
			}
		}

		if (this.every) {
			for (let p in this.every) {
				const amt = Math.floor(v / p);
				if (amt > 0) {
					this.applyMods(this.every[p]);
				}
			}
		}
	}

	canUse(g) {
		return !(this.timer > 0) && super.canUse(g);
	}

	canRun(g) {
		return !(this.timer > 0) && super.canRun(g);
	}

	tryComplete() {
		if (
			(this._length && this._exp >= this._length) ||
			(!this._length > 0 && this.perpetual > 0 && this._exp >= 1)
		) {
			this.complete(Game);
		}
	}

	/**
	 * Update a running task.
	 * @param {number} dt - elapsed time.
	 */
	update(dt) {
		this.exp.addUnscaled((this.rate || 1) * dt); // prevents double-dipping on rate increases
		this.tryComplete();
	}

	onStart() {
		if (this.runmod) {
			Game.applyMods(this.runmod);
		}
	}

	onStop() {
		if (this.runmod) {
			Game.removeMods(this.runmod);
		}
	}

	/**
	 * completion of ongoing task.
	 * @param {Game} [g=Game]
	 */
	complete(g = Game) {
		/**
		 * @note value has to be incremented first
		 * so the applied mods see the current value.
		 */
		this.changed(g, 1);
		Changed.add(this);

		this._exp.set(0); //exp has to be set to 0 since it's a scaler
		this.paid = false;
		Events.emit(TASK_DONE, this);
	}

	/**
	 * task value changed.
	 * No value increment because that is currently done by game (@todo fix)
	 */
	changed(g, count) {
		let prev = +this;
		super.changed(g, count);
		let current = +this;

		if (this.at) {
			for (const val in this.at) {
				if (!isNaN(val) && prev < +val && current >= +val) {
					Events.emit(TASK_IMPROVED, this);
					this.applyMods(this.at[val]);
				}
			}
		}

		if (this.every) {
			for (const val in this.every) {
				let diff = Math.floor(current / +val) - Math.floor(prev / +val);
				if (!isNaN(val) && diff > 0) {
					for (let i = 0; i < diff; i++) Events.emit(TASK_IMPROVED, this);
					this.applyMods(this.every[val]);
				}
			}
		}
	}

	/**
	 * Perform cd timer tick.
	 * @param {number} dt - elapsed time.
	 * @returns {boolean} true if timer is complete.
	 */
	tick(dt) {
		this.timer -= dt;
		if (this.timer < 0) {
			this.timer = 0;
			return true;
		}
		return false;
	}
}
