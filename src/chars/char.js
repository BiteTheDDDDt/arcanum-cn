import Base, { mergeClass } from '../items/base';
import { instanceDamage } from '../values/combatVars';
import Stat from '../values/rvals/stat';
import Attack from './attack';
import Dot from './dot';

import { NPC, getDelay, TYP_PCT, TYP_STATE } from '../values/consts';
import { toStats } from "../util/dataUtil";
import Events, { CHAR_STATE, EVT_COMBAT, RESISTED, CHAR_ACTION, STATE_BLOCK, DOT_ACTION, DOT_EXPIREACTION } from '../events';
import States, { NO_ATTACK, NO_ONDEATH, NO_ONEXPIRE, NO_SPELLS } from './states';

import { ApplyAction, CalcDamage } from '../values/combatVars';
import { assignNoFunc } from '../util/util';
import { cloneClass, mergeSafe } from '../util/objecty';

export default class Char {
	get resist() { return this._resist };
	set resist(v) { this._resist = v; }

	/**
	 * @property {number} team - side in combat.
	 */
	get team() { return this._team; }
	set team(v) { this._team = v; }

	/**
	 * @alias immunities
	 * @property {object<string,Stat>} immune
	 */
	set immune(v) {
		this.immunities = v;
	}

	/**
	 * @property {.<string,Stat>} immunities
	 */
	get immunities() {
		return this._immunities;
	}
	set immunities(v) {

		if (typeof v === 'string') {

			this._immunities = {};
			const a = v.split(',');
			for (const i in a) {
				this.addImmune(a[i]);
			}

			return;
		}

		for (const p in v) {

			const val = v[p];
			if (!(val instanceof Stat)) v[p] = new Stat(val);

		}

		this._immunities = v;
	}

	/**
	 * @property {.<string,Stat>} bonuses - damage bonuses per damage kind.
	 */
	get bonuses() { return this._bonuses }
	set bonuses(v) { this._bonuses = toStats(v); }

	/**
	 * @property {Attack} attack
	 */
	get attack() { return this._attack; }
	set attack(v) {

		if (Array.isArray(v)) {

			let a = [];
			for (let i = v.length - 1; i >= 0; i--) {

				a.push((v[i] instanceof Attack) ? v[i] :
					new Attack(v[i])
				);

			}

			this._attack = a;

		} else this._attack = (v instanceof Attack) ? v : new Attack(v);

	}

	get dots() { return this._dots; }
	set dots(v) {

		const a = [];

		if (v) {
			for (let i = v.length - 1; i >= 0; i--) {

				a.push(v[i] instanceof Dot ? v[i] : new Dot(v[i]));

			}
		}

		this._dots = a;

	}

	/**
	 * Get cause of a state-flag being set.
	 * @param {number} flag
	 */
	getCause(flag) { return this._states.getCause(flag) }

	hasState(flag) { return this._states.has(flag); }

	hasDot(id) {
		for (let i = this.dots.length - 1; i >= 0; i--) {
			//console.log('TRY cure: ' + this.dots[i].id + ': ' + this.dots[i].kind );
			if (this.dots[i].id === id || this.dots[i].kind === id || this.dots[i].hasTag(id)) {
				//console.log('FOUND: ' + id);
				return this.dots[i];
			}
		}
		//console.log('NOT FOUND: ' + id);
		return false
	}

	/**
	 * @returns {boolean} canAttack
	 */
	canAttack() {
		return this._states.canAttack();
	}

	canDefend() {
		return this._states.canDefend();
	}

	canCast() {
		return this._states.canCast();
	}
	canParry() {
		return this._states.canParry();
	}

	/**
	 * @property {States} states - current char states. (silenced, paralyzed, etc.)
	 */
	get states() { return this._states; }
	set states(v) { this._states = new States(); }


	get instanced() { return true; }
	//set instanced(v) {}

	get regen() { return this._regen; }
	set regen(v) { this._regen = (v instanceof Stat) ? v : new Stat(v); }

	get alive() { return this.hp.value > 0; }

	/**
	 * @property {Object} context - context for dot mods/effects,
	 * spells.
	 * @todo: allow Player applyMods to work naturally.
	 */
	get context() { return this._context; }
	set context(v) { this._context = v; }

	constructor(vars) {

		if (vars) {
			this.id = vars.id;	// useful for debugging.
			assignNoFunc(this, vars);
		}

		this.type = NPC;

		this._states = new States();
		this.immunities = this.immunities || {};
		this._resist = this._resist || {};
		if (!this.bonuses) this.bonuses = {};

		/**
		 * @property {Object[]} dots - timed/ongoing effects.
		*/
		if (!this.dots) this._dots = [];

		/**
		 * @property {number} timer
		 */
		this.timer = this.timer || 0;

	}

	/**
	 * Revive from data after Game state restored.
	 * @param {GameState} gs
	 */
	revive(gs) {

		//this._states.refresh(this._dots);

	}

	reviveDots(gs) {
		for (let i = this.dots.length - 1; i >= 0; i--) {
			this.dots[i].revive(gs);
			this._states.add(this._dots[i]);
		}
	}

	/**
	 * Use char state ( charmed, rage, etc ) to change the a default action target.
	 * to new target type.
	 * @param {?string} targ - type of target, ally, enemy, self etc.
	 * @returns {string} - new target based on char state.
	 */
	retarget(targ) {
		return this._states.retarget(targ);
	}

	/**
	 * Cure dot with the given state.
	 * @param {string||string[]} state
	 */
	cure(state) {

		if (Array.isArray(state)) {
			for (let i = state.length - 1; i >= 0; i--) {
				this.cure(state[i]);
			}
			return;
		}

		for (let i = this.dots.length - 1; i >= 0; i--) {
			//console.log('TRY cure: ' + this.dots[i].id + ': ' + this.dots[i].kind );
			if (this.dots[i].id === state || this.dots[i].kind === state || this.dots[i].hasTag(state)) {
				console.log('CURING: ' + state);
				this.rmDot(i);
				return;
			}
		}
	}

	/**
	 * try casting spell from player spelllist.
	 * @returns {?GData}
	 */
	tryCast() {
		return this.spells ? this.spells.nextUsable(this.context) : null;
	}

	/**
	 * Called once game actually begins. Dot-mods can't be applied
	 * before game start because they can trigger game functions.
	 */
	begin() {
	}

	/**
	 * Base item of dot.
	 * @param {Dot|object|Array} dot
	 * @param {?object} source
	 * @param {number} duration - duration override
	 * @param {?object} applier - whoever applied the dot if any
	 */
	addDot(dot, source, duration = 0, applier = null) {

		if (Array.isArray(dot)) {
			return dot.forEach(v => this.addDot(v, source, duration, applier));
		}
		let id = dot;
		let base = dot;
		let dmg;
		let heal;
		if (typeof dot === 'string') {

			dot = this.context.state.getData(dot);
			if (!dot) return;

		}

		if (dot.dmg || dot.damage) dmg = dot.dmg != null ? dot.dmg : dot.damage;
		if (dot.heal || dot.healing) heal = dot.heal != null ? dot.heal : dot.healing;
		if (!duration && !isNaN(dot.duration)) duration = +dot.duration;

		dot = cloneClass(dot);

		if (applier) dot.applier = applier;

		if (base instanceof Object) {

			id = base.id;
			let orig = this.context.state.getData(id);
			if (orig && orig.type === TYP_STATE) this.mergeDot(dot, orig);
			//Repeated, just in case dot didnt set duration and original has a modded duration
			if (!duration && !isNaN(dot.duration)) duration = +dot.duration;

		}

		if (dot[TYP_PCT] && !dot[TYP_PCT].roll()) {
			return;
		}

		if (dmg && dmg.instantiate instanceof Function) dot.damage = dot.dmg = dmg.instantiate();

		if (heal && heal.instantiate instanceof Function) dot.healing = dot.heal = heal.instantiate();

		if (dot.applyinstanced) {
			dot = this.instanceDot(dot, dot.applier)
		}

		// In case the getData dot doesn't have an id
		if (!dot.id && typeof id === "string") dot.id = id;

		if (!id) {
			id = dot.id = (source ? "dot_" + (source.recipe || source.id || source.name.replace(" ", "_")) : null);
		}

		if (!id || !dot.id) {
			console.warn("No DoT ID", this.id, dot);
			return;
		}

		if (dot.flags && this.rollResist(dot.kind || id)) {
			Events.emit(RESISTED, this, (dot.kind || dot.name));
			return;
		}

		let tags = Array.isArray(dot.tags) ? dot.tags : dot.tags?.split(",") || [];
		let level = dot.level || (source ? source.level || 0 : 0);

		if (dot._tags) {
			if (Array.isArray(dot._tags) && dot.tags !== dot._tags) {
				tags.push(...dot._tags);
			}
			delete dot._tags;
		}
		tags = tags.filter(t => t !== "state");
		dot.tags = tags;
		let cur = this.dots.find(d => (d.id === id || d.tags.find(t => tags.includes(t))));

		if (cur != null) {
			if (cur.id === id) {
				cur.extend(duration);
				return;
			}

			if (cur.level <= level) {
				this.removeDot(cur);
			} else {
				return;
			}
		}

		if (!(dot instanceof Dot)) {
			dot = new Dot(dot, source); //Game.state.mkDot( dot, source, duration );
			if (dot.duration != duration) dot.duration = duration;
		}

		this.applyDot(dot);

	}


	/**
	 * Merge state or dot into this one.
	 * @param {object} dot
	 * @param {Dot} st
	 */
	mergeDot(dot, st) {

		mergeSafe(dot, st);
		dot.name = dot.name;
		dot.flags = dot.flags | st.flags;
		dot.adj = dot.adj || st.adj;

	}

	applyDot(dot) {

		this._states.add(dot);
		this.dots.push(dot);

		if (dot.mod) this.context.applyMods(dot.mod);
		if (dot.flags) Events.emit(CHAR_STATE, this, dot);
	}

	removeDot(dot) {
		let id = dot.id;
		this.rmDot(this.dots.findIndex(d => d.id === id));
	}

	/**
	 * Remove dot by index.
	 * @param {number} i
	 */
	rmDot(i) {

		if (i < 0) return;

		let dot = this.dots[i];
		this.dots.splice(i, 1);

		if (dot.mod) this.context.removeMods(dot.mod);
		if (dot.flags) this._states.remove(dot);

	}

	/**
	 * Perform update effects.
	 * @param {number} dt - elapsed time.
	 */
	update(dt) {
		if (this.regen) this.hp += (this.regen * dt);

		const dots = this.dots;

		for (let i = dots.length - 1; i >= 0; i--) {

			const dot = dots[i];

			if (!dot.tick(dt)) continue;

			// ignore any remainder beyond 0.
			// @note: dots tick at second-intervals, => no dt.
			if (dot.effect) this.context.applyVars(dot.effect, 1);
			if (dot.summon) {
				for (let smn of dot.summon) {
					if (smn[TYP_PCT] && !smn[TYP_PCT].roll()) {
						continue;
					}
					let smnid = smn.id
					let smncount = smn.count || 1
					let smnmax = smn.max || 0
					this.context.create(smnid, false, smncount, smnmax)
				}
			}
			if (dot.damage || dot.cure || dot.healing) ApplyAction(this, dot, dot.applier);

			if (dot.attack) {
				Events.emit(DOT_ACTION, dot, this.context);
			}

			if (dot.duration <= dt && !dot.perm) {
				if (dot.onExpire && !this.getCause(NO_ONEXPIRE)) {
					Events.emit(DOT_EXPIREACTION, dot.onExpire, this.context);
				}
				this.rmDot(i);
			}

		}

	}

	/**
	 * Get Combat action.
	 * @param {number} dt
	 */
	combat(dt) {

		if (!this.alive) return;

		this.timer -= dt;

		if (this.timer <= 0) {

			this.timer += getDelay(this.speed);

			for (let i = this.castAmt(this.chaincast); i > 0; i--) {
				if (this.spells) {
					let s = this.tryCast()
					if (s) {
						let a
						if (s.caststoppers) {
							for (let b of s.caststoppers) {
								a = this.getCause(b);
								if (a) break;
							}
						}
						if (a) {
							Events.emit(STATE_BLOCK, this, a);
						}
						else {
							let logged = false;
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
					}
				}
			}

			return this.getCause(NO_ATTACK) || this.getAttack();

		}

	}

	/**
	 * Get bonus damage for the damage type.
	 * @param {string} kind
	 * @returns {number}
	 */
	getBonus(kind) {
		return this.bonuses[kind] || 0;
	}

	getAttack() {

		if (Array.isArray(this.attack)) return this.attack[Math.floor(Math.random() * this.attack.length)];
		return this.attack || this;

	}

	hasStatus(stat) { return this.states[stat] > 0; }
	isImmune(kind) { return this.immunities[kind] > 0; }

	/**
	 * Roll a resistance check against the given damage type.
	 * @param {string} kind - kind of damage.
	 */
	tryResist(kind) {

		return (this.resist && this.resist[kind]) ? 100 * Math.random() < this.resist[kind] : false;

	}

	/**
	 * @param {string} [kind=undefined]
	 * @returns {number} tohit.
	 */
	getHit(kind) {
		return this.tohit.valueOf();
	}

	/**
	 * Perform a resistance roll for a damage/dot kind, with a base percent
	 * success.
	 * @param {string} kind
	 * @param {number} [base=NaN]
	 * @returns {boolean}
	 */
	rollResist(kind, base = null) {

		let res = (this._resist[kind] || 0) + (base || 0);
		return res > 100 * Math.random();

	}

	/**
	 *
	 * @param {*} kind
	 * @returns {number} 0-based resist percent.
	 */
	getResist(kind) {

		return (this._resist[kind] || 0) / 100;
	}

	removeResist(kind, amt) {
		if (this._resist[kind]) this._resist[kind] -= amt;
	}

	addResist(kind, amt) {

		if (!this._resist[kind]) {

			//Vue.set( this._resist, kind, amt.valueOf() );
			this._resist[kind] = amt.valueOf();

		} else this._resist[kind].base += amt;

	}

	addStatus(stat) {
		this.states[stat] = this.states[stat] ? this.states[stat] + 1 : 1;
	}

	removeStatus(stat) {
		this.states[stat] = this.states[stat] ? this.states[stat] - 1 : 0;
	}

	/**
	 *
	 * @param {string} kind
	 */
	addImmune(kind) {
		this.immunities[kind] = this.immunities[kind] ? this.immunities[kind] + 1 : 1;
	}

	/**
	 *
	 * @param {string} kind
	 */
	removeImmune(kind) {
		this.immunities[kind] = this.immunities[kind] ? this.immunities[kind] - 1 : 0;
	}
	castAmt(casts) {
		return Math.floor(casts) + (Math.random() < (casts - Math.floor(casts)))
	}
	instanceDot(dot, applier) {

		dot.damage = CalcDamage(dot.damage, dot, applier, this);
		dot.heal = CalcDamage(dot.healing, dot, applier, this);
		dot.showinstanced = true;
		if (dot.attack) dot.attack = this.instanceDotAttack(dot.attack, applier);
		if (dot.onExpire) dot.onExpire = this.instanceDotAttack(dot.onExpire, applier);
		if (dot.onDeath) dot.onDeath = this.instanceDotAttack(dot.onDeath, applier);
		return dot
	}

	instanceDotAttack(attack, applier) {

		if (Array.isArray(attack)) {
			for (let i = attack.length - 1; i >= 0; i--) {
				attack[i] = instanceDamage(attack[i], applier, this)
				if (attack[i].dot) attack[i].dot = this.instanceDot(attack[i].dot, applier)
				if (attack[i].hits) {
					for (let b = attack[i].hits.length - 1; b >= 0; b--) {
						attack[i].hits[b] = instanceDamage(attack[i].hits[b], applier, this)
						if (attack[i].hits[b].dot) attack[i].hits[b].dot = this.instanceDot(attack[i].hits[b].dot, applier)
					}
				}
			}
		} else {
			attack = instanceDamage(attack, applier, this)
			if (attack.dot) attack.dot = this.instanceDot(attack.dot, applier)
			if (attack.hits) {
				for (let b = attack.hits.length - 1; b >= 0; b--) {
					attack.hits[b] = instanceDamage(attack.hits[b], applier, this)
					if (attack.hits[b].dot) attack.hits[b].dot = this.instanceDot(attack.hits[b].dot, applier)
				}
			}
		}

		return attack
	}
	deathThroes() {
		if (!this.getCause(NO_ONDEATH)) {
			if (this.onDeath) Events.emit(DOT_EXPIREACTION, this.onDeath, this.context);
			const dots = this.dots;
			for (let i = dots.length - 1; i >= 0; i--) {

				const dot = dots[i];

				if (dot.onDeath) Events.emit(DOT_EXPIREACTION, dot.onDeath, this.context);
			}
		}
	}

}

mergeClass(Char, Base);
