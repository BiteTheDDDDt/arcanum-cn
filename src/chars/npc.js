import Char from '@/chars/char';
import Range, { RangeTest } from '@/values/range';
import Percent, { PercentTest } from '@/values/percent';
import Attack from '@/chars/attack';
import { TEAM_NPC, TYP_PCT, getDelay } from '@/values/consts';
import { ParseDmg } from '@/values/combatVars'
import { mergeClass } from '@/items/base';
import Instance from '@/items/instance';
import Game from '@/game';
import { MakeDataList } from '@/gameState';
import Context from '@/chars/context';
import { assignPublic, findNonObjects } from '@/util/util';
import { NO_ATTACK } from '@/chars/states';
import Events, { EVT_COMBAT, CHAR_ACTION, STATE_BLOCK } from '@/events';
import { mergeSafe, cloneClass } from '@/util/objecty';

/**
 * Defaults for Npc
 */
const Defaults = {
	team: TEAM_NPC,
	active: false
}

/**
 * Exclusion list for findNonObjects
 */
const RangeExclude = [
	"mod", "runmod", "alter",
	"attack", "damage",
	"cost", "run",
	"result", "effect", "loot",
	"statedata", "template"
];

/**
 * Class for specific Enemies/Minions in game.
 */
export default class Npc extends Char {
	static Defaults = Defaults;

	toJSON() {

		// TODO Nested statedata wont save on monsters, due to their toJSON
		let data = super.toJSON() || {};
		data.id = this.id;

		data.cost = undefined;
		data.context = undefined;
		data.team = this.team || undefined;

		data.timer = this.timer;
		data.cdtimers = this.cdtimers;
		if (data.attack) delete data.attack;

		if (this.template) {
			data.template = this.template.id;
			if (this._name != this.template.name) data.name = this._name;

		} else data.name = this._name;

		data.statedata = this.context.state.toJSON();
		// HP saved in statedata, no need for a duplicate.
		delete data.hp;

		for (let prop in data) {
			let val = data[prop];
			if (typeof val === "object" && !Object.keys(val).length) delete data[prop];
		}

		//data.keep = this.keep;

		//data.died = this.died||undefined;

		return data;

	}

	/**
	 * @property {boolean} keep - whether to keep ally after combat.
	 */
	get keep() { return this._keep; }
	set keep(v) { this._keep = v; }

	/**
	 * @property {object|string|object[]}
	 */
	get loot() { return this._loot; }
	set loot(loot) {

		if (typeof loot !== 'object') {
			this._loot = loot;
			return;
		}

		for (const p in loot) {

			const sub = loot[p];
			if ((typeof sub === 'string')) {

				if (PercentTest.test(sub)) {

					loot[p] = new Percent(sub);

				} else if (RangeTest.test(sub)) {

					loot[p] = new Range(sub);

				} else if (!isNaN(sub)) loot[p] = Number(sub);

			}
		}

		this._loot = loot;

	}

	get damage() { return this._damage; }
	set damage(v) { this._damage = ParseDmg(v); }

	/**
	 * @property {boolean} active - whether minion is active in combat.
	 */
	get active() { return this._active; }
	set active(v) { this._active = v; }

	/**
	 * @property {DataList} spells - list of spells char can cast.
	 */
	get spells() { return this._spells; }
	set spells(v) {
		this._spells = MakeDataList(v);
	}

	constructor(vars, save = null) {

		super(vars);

		// Unneeded.
		delete this.defaults;
		delete this.instTemplate;

		/**
		 * Clone of possibly modified statedata.  
		 * Always includes all player stats.
		 */
		let statedata = cloneClass(this.statedata) || {};
		/** 
		 * Original statedata template generated from a monster.  
		 * Always includes all player stats.
		 */
		let origStatedata = this.stateTemplate;

		// Converting ranged and modded playerStats properties in statedata into numbers. val and max are the main targets.
		for (let stat of Game.state.playerStats) {
			let statId = stat.id;
			let stateObj = statedata[statId];

			// Handling max and val as a specific case as they can interact with each other.
			let { max, val } = stateObj;
			if (!stat.stat && max != null) {
				//Dealing with max
				if (typeof max === "string" && RangeTest.exec(max)) max = new Range(max);
				if (!isNaN(max)) stateObj.max = max = +max;
				else console.warn(`Non-numeric statedata property max: ${max}`);
				if (val == null) stateObj.val = val = max;
			}
			if (val != null) {
				//Dealing with val
				if (typeof val === "string" && RangeTest.exec(val)) val = new Range(val);
				if (!isNaN(val)) stateObj.val = val = +val;
				else console.warn(`Non-numeric statedata property val: ${val}`);
				if (!stat.stat && max == null) stateObj.max = max = val;
			}

			// General number conversion.
			findNonObjects(statedata[statId], (obj, prop, val) => {
				if (val != null) {
					if (typeof val === "string" && RangeTest.exec(val)) val = new Range(val);
					if (!isNaN(val)) obj[prop] = +val;
					// else console.warn(`Non-numeric statedata property ${prop}: ${val}`);
				}
			}, ...RangeExclude);
		}

		// Second iterator is needed to save template for all items
		for (let prop in statedata) {
			let it = statedata[prop];
			it.template = cloneClass(origStatedata[prop]);
			// @TODO possibly add findNonObjects here for ranges within non-playerstats
		}

		if (save) {
			let savestatedata = save.statedata;
			if (savestatedata) {
				// Save's statedata overwrites statedata.
				mergeSafe(savestatedata, statedata);
				statedata = savestatedata;
			}
			assignPublic(this, save);
		}

		this.context = new Context(Game.state, this, statedata);

		// No longer needed.
		delete this.statedata;
		delete this.stateTemplate;

		//if ( this.id.includes('mecha')) console.dir(this.attack, 'post-save');

		if (typeof this.hp === 'string') this.hp = new Range(this.hp).value;
		else if (this.hp instanceof Range) {

			this.hp = this.hp.value;
		}

		if (this.dmg && this.damage == null) this.damage = this.dmg;
		if (!this.attack) {
			this.attack = new Attack(this.damage);
			this.damage = 0;
		}
		if (!this.cdtimers) this.cdtimers = {}

		// No 0 max hp
		// @Note hp can be 0 if the npc is already dead.
		if (!+this.hp.max) {
			this.hp.max.set(1);
			if (!+this.hp) this.hp = +this.hp.max;
		}

		// Non-playerstat defaults assigner
		for (let prop in Defaults) {
			if (this[prop] == null) this[prop] = Defaults[prop];
		}
	}

	revive(gs) {
		// Occurs during Game revive, shouldn't be a thing during Npc creation (which also calls revive)
		if (typeof this.template === 'string') {
			this.template = gs.getData(this.template);
			if (this.template && this.template.attack) {

				this.attack = this.template.attack;
				//mergeSafe( this.template, this );

			}
		}

		// Done before spell list handling as to not revive spell list twice.
		this.context.revive(gs);

		if (this._spells) {
			this.spells.revive(this._context.state);
			this.spells.name = this.spells.id = "spelllist";
			this.context.state.npcItems.set("spelllist", this.spells);
		}

		super.revive(gs);

	}

	begin() {
		if (this.dots) {
			for (let i = this.dots.length - 1; i >= 0; i--) {
				if (this.dots[i].mod) this.context.applyMods(this.dots[i].mod, 1);
			}
		}

		this.context.restoreMods();
	}

	/**
	 * Catch event. Do nothing.
	 * @param {*} g
	 */
	onUse(g) {
	}

	/**
	 * Resurrect.
	 */
	res() {
		this.hp = 1;
	}

	/**
	 *
	 * @param {number} dt
	 */
	rest(dt) {
		this.hp.amount(0.01 * this.hp.max * dt);
	}



	combat(dt) {

		if (!this.alive) return;

		this.timer -= dt;
		for (let a of Object.keys(this.cdtimers)) //decrementing the CD timers of the NPC
		{
			this.cdtimers[a] -= dt;
			if (this.cdtimers[a] <= 0) delete this.cdtimers[a];
		}

		if (this.timer <= 0) {

			this.timer += getDelay(this.speed);

			for (let i = this.spells ? this.castAmt(this.chaincast) : 0; i > 0; i--) {

				let s = null;
				for (let i = 0; i < this.spells.items.length; i++) {
					//check CDs, cast first spell available. If none available, exit.
					s = this.tryCast()
					if (!s || !this.cdtimers[s.id]) break;
					s = null;
				}
				// found no castable.
				if (!s) break;

				if (s.caststoppers) {
					let a
					for (const b of s.caststoppers) {
						a = this.getCause(b);
						if (a) break;
					}
					if (a) {
						Events.emit(STATE_BLOCK, this, a);
						continue;
					}
				}

				let logged = false;
				if (s.cd) {
					this.cdtimers[s.id] = s.cd; //if a spell has a CD adds an NPC cd
				}
				if (s.attack || s.action) {
					Events.emit(CHAR_ACTION, s, this.context);
					logged = true;
				}
				if (s.mod) {
					this.context.applyMods(this.mod);
					if (!logged) {
						Events.emit(EVT_COMBAT, this.name + ' uses ' + s.name);
						logged = true;
					}
				}
				if (s.create) this.context.create(s.create);
				if (s.summon) {
					for (let smn of s.summon) {
						if (smn[TYP_PCT] && !smn[TYP_PCT].roll()) {
							continue;
						}
						let smnid = smn.id
						let smncount = smn.count || 1
						let smnmax = smn.max || 0
						this.context.create(smnid, undefined, smncount, smnmax)
					}
				}
				if (s.result) {
					if (!logged) {
						Events.emit(EVT_COMBAT, this.name + ' uses ' + s.name);
						logged = true;
					}
					this.context.applyVars(s.result, 1);
				}
				if (s.dot) {
					if (!logged) {
						Events.emit(EVT_COMBAT, this.name + ' uses ' + s.name);
						logged = true;
					}
					this.context.self.addDot(s.dot, s, null, this);
				}

			}
			return this.getCause(NO_ATTACK) || this.getAttack();
		}
	}

}
mergeClass(Npc, Instance)
