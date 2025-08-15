import { assign } from "@/util/objecty";

import Events, {
	EVT_COMBAT,
	ENEMY_SLAIN,
	ENEMY_REWARDS,
	ALLY_DIED,
	DAMAGE_MISS,
	CHAR_DIED,
	STATE_BLOCK,
	CHAR_ACTION,
	ITEM_ACTION,
	COMBAT_WON,
	DOT_ACTION,
	TRIGGER_ACTION,
} from "../events";

import { itemRevive } from "@/modules/itemgen";

import { TEAM_PLAYER, getDelay, TEAM_NPC, TEAM_ALL, COMPANION, WEAPON, enforceOnly } from "@/values/consts";
import {
	ApplyAction,
	CanTargetAllyLeader,
	CanTargetAllyMinions,
	CanTargetEnemyLeader,
	CanTargetEnemyMinions,
	TargetSelf,
	AffectedTargets,
	shuffleArray,
	CompareTargetStats,
	Targets,
	FixedTarget,
} from "@/values/combatVars";
import Npc from "@/chars/npc";
import Char from "@/chars/char";
import game from "@/game";
import { HIDE, NO_ONMISS, TAUNT } from "@/chars/states";

/**
 * @const {number} DEFENSE_RATE - rate defense is multiplied by before tohit computation.
 */
const DEFENSE_RATE = 0.25;

export default class Combat {
	get id() {
		return "combat";
	}

	toJSON() {
		let a = undefined;
		if (this.allies.length > 1) {
			a = [];
			for (let i = 1; i < this.allies.length; i++) {
				const v = this.allies[i];
				a.push(v.keep ? v.id : v);
			}
		}

		return {
			enemies: this._enemies,
			allies: a,
		};
	}

	/**
	 * Whether combat is active.
	 * @property {boolean} active
	 */
	get active() {
		return this._active;
	}
	set active(v) {
		this._active = v;
	}

	/**
	 * @type {Npc[]} enemies - enemies in the combat.
	 */
	get enemies() {
		return this._enemies;
	}
	set enemies(v) {
		this._enemies = v;
	}

	/**
	 * @property {Char[]} allies - player & allies. allies[0] is always the player.
	 */
	get allies() {
		return this._allies;
	}
	set allies(v) {
		this._allies = v;
	}

	/**
	 * @property {boolean} done
	 */
	get done() {
		return this._enemies.length === 0;
	}

	/**
	 * @property {Char[][]} teams - maps team id to team list.
	 */
	get teams() {
		return this._teams;
	}

	constructor(vars = null) {
		if (vars) assign(this, vars);

		if (!this.enemies) this.enemies = [];
		if (!this.allies) this.allies = [];
		this.active = false;

		this._teams = [];
	}

	/**
	 *
	 * @param {GameState} gs
	 */
	revive(gs) {
		this.state = gs;
		this.player = gs.player;
		// splices done in place to not confuse player with changed order.

		let it;

		for (let i = this._enemies.length - 1; i >= 0; i--) {
			// data can be null both before and after itemRevive()
			it = this._enemies[i];
			if (it) {
				it = this._enemies[i] = itemRevive(gs, it);
			}
			if (!it || !(it instanceof Npc)) {
				this._enemies.splice(i, 1);
			}
		}

		for (let i = this._allies.length - 1; i >= 0; i--) {
			it = this._allies[i];
			if (typeof it === "string") this._allies[i] = it = gs.minions.find(it);
			else if (it && typeof it === "object" && !(it instanceof Npc)) this._allies[i] = it = itemRevive(gs, it);

			if (!it || !(it instanceof Npc)) this._allies.splice(i, 1);
		}

		this._allies.unshift(this.player);

		this.resetTeamArrays();

		Events.add(ITEM_ACTION, this.itemAction, this);
		Events.add(CHAR_ACTION, this.spellAction, this);
		Events.add(DOT_ACTION, this.dotAction, this);
		Events.add(TRIGGER_ACTION, this.triggerAction, this);
		Events.add(CHAR_DIED, this.charDied, this);
	}

	begin() {
		for (let enemy of this.enemies) {
			if (enemy.begin instanceof Function) enemy.begin();
		}
	}

	update(dt) {
		if (this.player.alive === false) return;

		let e, action;
		for (let i = this._allies.length - 1; i >= 0; i--) {
			const e = this._allies[i];
			if (!e) continue;
			if (i > 0) {
				// non-player allies.
				if (e.alive === false) {
					e.deathThroes();
					this._allies.splice(i, 1);
					continue;
				}

				e.update(dt);

				if (e.alive === false) {
					e.deathThroes();
					this._allies.splice(i, 1);
					continue;
				}
			}

			action = e.combat(dt);
			if (!action) continue;
			else if (!action.canAttack()) {
				Events.emit(STATE_BLOCK, e, action);
			} else this.attack(e, action);
		}

		for (let i = this._enemies.length - 1; i >= 0; i--) {
			e = this._enemies[i];
			if (!e) continue;
			// Checked before, because the enemy could've died from an attack, and update could cause it to heal after dying.
			if (e.alive === false) {
				e.deathThroes();
				this._enemies.splice(i, 1);
				Events.emit(ENEMY_REWARDS, e); //gives player rewards here, fixes an issue where negative regen is not rewarding.
				if (this._enemies.length === 0) Events.emit(COMBAT_WON);
				continue;
			}

			e.update(dt);

			// Checked after, to see if it died after updates, possibly due to dots.
			if (e.alive === false) {
				e.deathThroes();
				this._enemies.splice(i, 1);
				Events.emit(ENEMY_REWARDS, e); //gives player rewards here.
				if (this._enemies.length === 0) Events.emit(COMBAT_WON);
				continue;
			}

			action = e.combat(dt);
			if (!action) continue;
			else if (!action.canAttack()) {
				Events.emit(STATE_BLOCK, e, action);
			} else this.attack(e, action);
		}
	}

	/**
	 * Player-casted spell or action attack.
	 * @param {Item} it
	 * @param {Context} g
	 */
	spellAction(it, g) {
		//first we check if the action has any caststoppers - aka conditions that would prevent it. If it does, we check if we have any of those conditions, and if we have even 1, gg.

		if (it.caststoppers) {
			for (const b of it.caststoppers) {
				const stopper = g.self.getCause(b);
				if (stopper) {
					Events.emit(STATE_BLOCK, g.self, stopper);
					return;
				}
			}
		}

		//This capitalizes all the spells in the combat log.
		Events.emit(EVT_COMBAT, g.self.name.toTitleCase() + " Casts " + it.name.toTitleCase());
		if (it.attack) {
			this.attack(g.self, it.attack);
		}
		if (it.action) {
			const target = this.getTarget(g.self, it.action);
			if (!target) return;
			if (Array.isArray(target)) {
				for (let i = target.length - 1; i >= 0; i--) ApplyAction(target[i], it.action, g.self, this.player);
			} else {
				ApplyAction(target, it.action, g.self, this.player);
			}
		}
	}

	/**
	 * item-casted spell or action attack.
	 * @param {Item} it
	 * @param {Context} g
	 */
	itemAction(it, g) {
		Events.emit(EVT_COMBAT, null, g.self.name + " Uses " + it.name.toTitleCase());
		if (it.use.attack) {
			this.attack(g.self, it.use.attack);
		}
		if (it.use.action) {
			let target = this.getTarget(g.self, it.use.action);

			if (!target) return;
			if (Array.isArray(target)) {
				for (let i = target.length - 1; i >= 0; i--) ApplyAction(target[i], it.use.action, g.self, this.player);
			} else {
				ApplyAction(target, it.use.action, g.self, this.player);
			}
		}
	}
	//for use by dots
	dotAction(it, g) {
		if (it.attack) {
			this.attack(g.self, it.getAttack());
		}
		if (it.action) {
			let target = this.getTarget(g.self, it.action);

			if (!target) return;
			if (Array.isArray(target)) {
				for (let i = target.length - 1; i >= 0; i--) ApplyAction(target[i], it.action, g.self, this.player);
			} else {
				ApplyAction(target, it.action, g.self, this.player);
			}
		}
	}
	triggerAction(it, g, fixedtarget = null) {
		if (!it) return;
		this.attack(g.self, it, fixedtarget);
	}
	/**
	 * Attack a target.
	 * @param {Char} attacker - enemy attacking.
	 * @param {Object|Char} atk - attack object.
	 */
	attack(attacker, atk, fixedtarget = null) {
		if (atk.log) {
			Events.emit(EVT_COMBAT, null, atk.log);
		}

		if (atk.hits) {
			for (let p in atk.hits) {
				this.attack(attacker, atk.hits[p], fixedtarget);
			}
		}

		let targ = fixedtarget && atk.targets == FixedTarget ? fixedtarget : this.getTarget(attacker, atk);
		if (!targ) return;
		for (let a = 0; a < (atk.repeathits || 1); a++) {
			if (Array.isArray(targ)) {
				for (let i = targ.length - 1; i >= 0; i--) {
					this.doAttack(attacker, atk, targ[i]);
				}
			} else {
				this.doAttack(attacker, atk, targ);
			}
		}
	}

	/**
	 *
	 * @param {Char} attacker
	 * @param {Attack} atk
	 * @param {Char} targ
	 */
	doAttack(attacker, atk, targ) {
		if ((!targ || !targ.alive) && targ.id != attacker.id) return; //can still do things on self even if dead, useful for onDeath purposes.
		// attack automatically hits if it's harmless, target is defenseless AND dodge roll fails.
		if (atk.harmless || !targ.canDefend() || this.tryHit(attacker, targ, atk)) {
			ApplyAction(targ, atk, attacker, this.player);
		}
	}

	/**
	 * @param {Char} char
	 * @param {any} action
	 * @returns {Char|Char[]|null}
	 */
	getTarget(char, action) {
		// retarget based on state.
		const targetFlags = char.retarget(action.targets ?? Targets.enemy);

		if (targetFlags == TargetSelf) return char;

		let allies = this.allies.filter(c => c.alive);
		let enemies = this.enemies.filter(c => c.alive);

		if (char.team == TEAM_NPC) {
			const swap = allies;
			allies = enemies;
			enemies = swap;
		}

		let targets = [];

		if (allies.length > 0) {
			if (targetFlags & CanTargetAllyLeader)
				if (targetFlags & CanTargetAllyMinions) targets = allies;
				else targets.push(allies[0]);
			else if (targetFlags & CanTargetAllyMinions) targets = allies.slice(1);
		}

		// If combat is inactive, we don't add any enemies to possible targets
		if (this.active && enemies.length > 0) {
			if (targetFlags & CanTargetEnemyLeader)
				if (targetFlags & CanTargetEnemyMinions) targets.push.apply(targets, enemies);
				else targets.push(enemies[0]);
			else if (targetFlags & CanTargetEnemyMinions) targets.push.apply(targets, enemies.slice(1));
		}

		targets = enforceOnly(targets, action.only);

		// TODO Potentially here you can filter out NOT_SELF

		// This shuffle lets us take X first elements from array and treat them as X random elements
		// Also this needs to happen before priority order changes from following logic
		shuffleArray(targets);

		if (action.targetspec) targets = AffectedTargets(targets, action.targetspec);

		var maxTargets = action.maxTargets ?? 1;

		if (maxTargets >= targets.length) return targets;

		// aka "should we consider taunt and hiding properties"
		const isSpellHostile = targetFlags & (CanTargetEnemyLeader + CanTargetEnemyMinions);

		// 50% attacks going to leader logic
		const useLeaderLogic = targetFlags & CanTargetEnemyLeader;
		// if roll fails, we move leader to the back of the queue, so that only 50% of attacks go to him, not more, not less
		const rollLeaderLogic = Math.random() < 0.5 ? 1 : -1;

		// performance wise heaviest part of getTarget function, could be optimized further
		targets.sort((a, b) => {
			if (isSpellHostile) {
				if (a.hasState(TAUNT) && !b.hasState(TAUNT)) return -1; // negative means a has priority over b
				if (!a.hasState(TAUNT) && b.hasState(TAUNT)) return 1;
				if (a.hasState(HIDE) && !b.hasState(HIDE)) return 1;
				if (!a.hasState(HIDE) && b.hasState(HIDE)) return -1;
			}

			// sort is "stable" - returning 0 will preserve random order of initial shuffle
			const result = CompareTargetStats(a, b, action.targetspec);
			if (result != 0) return result;

			if (useLeaderLogic) {
				if (a == enemies[0]) return rollLeaderLogic;
				if (b == enemies[0]) return -rollLeaderLogic;
			}
			return 0;
		});

		if (maxTargets == 1) return targets[0];
		return targets.slice(0, maxTargets);
	}

	/**
	 * Rolls an attack roll against a defender.
	 * @param {Char} attacker - attack object
	 * @param {Char} defender - defending char.
	 * @param {Object} attack - attack or weapon used to hit.
	 * @returns {boolean} true if char hit.
	 */
	tryHit(attacker, defender, attack) {
		let toHit = attacker.getHit();

		if (attack && attack != attacker) toHit += attack.tohit || 0;

		if (!attack.nododge && this.dodgeRoll(defender, toHit)) {
			Events.emit(
				DAMAGE_MISS,
				defender.name.toTitleCase() + " Dodges " + (attack.name ?? attacker.name).toTitleCase(),
			);
			if (!defender.getCause(NO_ONMISS) && attacker && !attack.unreflectable) {
				if (defender.onMiss) Events.emit(TRIGGER_ACTION, defender.onMiss, defender.context, attacker);
				const dots = defender.dots;
				for (let i = dots.length - 1; i >= 0; i--) {
					const dot = dots[i];
					if (dot.onMiss) Events.emit(TRIGGER_ACTION, dot.onMiss, defender.context, attacker);
					if (dot.conditionaction) {
						Events.emit(TRIGGER_ACTION, dot.conditionaction?.onMiss, defender.context, attacker);
					}
				}
			}
			return false;
		} else return true;
	}

	/**
	 *
	 * @param {Npc[]} enemies
	 */
	setEnemies(enemies) {
		this.enemies.push.apply(this.enemies, enemies);
		//	this.enemies.push.apply( this.enemies, enemies );

		if (enemies.length > 0) {
			if (enemies[0]) Events.emit(EVT_COMBAT, enemies[0].name.toTitleCase() + " Encountered");
			else console.warn("No valid enemy");
		}

		this.resetTeamArrays();
		this.setTimers();
		for (let i = this.enemies.length - 1; i >= 0; i--) {
			if (this.enemies[i].onSummon) this.enemies[i].openingAction();
		}
	}

	/**
	 * Add Npc to combat
	 * @param {Npc} it
	 */
	addNpc(it) {
		it.timer = getDelay(it.speed);

		if (it.team === TEAM_PLAYER) {
			this._allies.push(it);
		} else this._enemies.push(it);

		this.teams[TEAM_ALL].push(it);
		if (it.onSummon) it.openingAction();
	}

	resetTeamArrays() {
		this.teams[TEAM_PLAYER] = this.allies;
		this.teams[TEAM_NPC] = this.enemies;
		this.teams[TEAM_ALL] = this.allies.concat(this.enemies);
	}

	/**
	 * Reenter a dungeon.
	 */
	reenter() {
		this.allies = this.state.minions.allies.toArray();
		let comp = this.state.getSlot(COMPANION);
		if (comp) {
			if (comp.onCreate) comp.onCreate(game, TEAM_PLAYER, false);
		}
		this.allies.unshift(this.player);
		this.resetTeamArrays();
	}

	/**
	 * Begin new dungeon.
	 */
	reset() {
		this._enemies.splice(0, this.enemies.length);
		this.reenter();
	}

	/**
	 * readjust timers at combat start to the smallest delay.
	 * prevents waiting for first attack.
	 */
	setTimers() {
		let minDelay = getDelay(this.player.speed);

		let t;
		for (let i = this.enemies.length - 1; i >= 0; i--) {
			t = this.enemies[i].timer = getDelay(this.enemies[i].speed);
			if (t < minDelay) minDelay = t;
		}
		for (let i = this.allies.length - 1; i >= 1; i--) {
			// >= 1 excludes player from this consideration. Let the player keep their delay, if any.
			t = this.allies[i].timer = getDelay(this.allies[i].speed);
			if (t < minDelay) minDelay = t;
		}

		// +1 initial encounter delay. Excludes player.
		minDelay -= 1;

		for (let i = this.enemies.length - 1; i >= 0; i--) {
			this.enemies[i].timer -= minDelay;
		}
		for (let i = this.allies.length - 1; i >= 1; i--) {
			this.allies[i].timer -= minDelay;
		}
	}

	/**
	 * @param {Char} defender - defending char.
	 * @param {number} tohit
	 * @returns {boolean} true if defender dodges.
	 */
	dodgeRoll(defender, tohit) {
		let chance = defender.getDodgeChance(tohit);
		return chance > Math.random();
	}

	charDied(char, attacker) {
		if (char === this.player) return;
		else if (char.team === TEAM_PLAYER) {
			Events.emit(ALLY_DIED, char);
		} else Events.emit(ENEMY_SLAIN, char, attacker);
	}

	getMonsters(id, team) {
		let monsters = [];
		if (team === TEAM_PLAYER) {
			for (let i = 0; i < this._allies.length; i++) {
				if (this._allies[i].template) {
					if (this._allies[i]?.template.id == id && this._allies[i].alive == true) {
						monsters.push(this._allies[i]);
					}
				}
			}
		} else {
			for (let i = 0; i < this._enemies.length; i++) {
				if (this._enemies[i]?.template.id == id && this._enemies[i].alive == true) {
					monsters.push(this._enemies[i]);
				}
			}
		}
		return monsters;
	}
}
