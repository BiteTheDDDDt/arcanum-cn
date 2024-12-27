import { assign } from '@/util/objecty';

import Events, {
	EVT_COMBAT, ENEMY_SLAIN, ALLY_DIED,
	DAMAGE_MISS, CHAR_DIED, STATE_BLOCK, CHAR_ACTION, ITEM_ACTION, COMBAT_WON, DOT_ACTION, TRIGGER_ACTION
} from '../events';

import { itemRevive } from '@/modules/itemgen';

import { TEAM_PLAYER, getDelay, TEAM_NPC, TEAM_ALL, COMPANION, WEAPON, enforceOnly } from '@/values/consts';
import {
	TARGET_ENEMY, TARGET_ALLY, TARGET_SELF,
	TARGET_RAND, TARGET_PRIMARY, ApplyAction, TARGET_GROUP, TARGET_ANY, RandTarget, PrimeTarget, TARGET_NONPRIMARY, PrimeInd, TARGET_RAND_ENEMY, TARGET_RAND_ALLY, TARGET_NOTSELF
} from '@/values/combatVars';
import Npc from '@/chars/npc';
import game from '@/game';


/**
 * @const {number} DEFENSE_RATE - rate defense is multiplied by before tohit computation.
 */
const DEFENSE_RATE = 0.25;

export default class Combat {

	get id() { return 'combat' }

	toJSON() {

		let a = undefined;
		if (this.allies.length > 1) {

			a = [];
			for (let i = 1; i < this.allies.length; i++) {
				const v = this.allies[i];
				a.push(v.keep ? v.id : v)
			}

		}

		return {
			enemies: this._enemies,
			allies: a
		}

	}

	/**
	 * Whether combat is active.
	 * @property {boolean} active
	 */
	get active() { return this._active; }
	set active(v) { this._active = v }

	/**
	 * @property {Npc[]} enemies - enemies in the combat.
	 */
	get enemies() { return this._enemies; }
	set enemies(v) { this._enemies = v; }

	/**
	 * @property {Char[]} allies - player & allies. allies[0] is always the player.
	 */
	get allies() { return this._allies; }
	set allies(v) { this._allies = v; }

	/**
	 * @property {boolean} done
	 */
	get done() { return this._enemies.length === 0; }

	/**
	 * @property {Char[][]} teams - maps team id to team list.
	 */
	get teams() { return this._teams; }

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
			if (typeof it === 'string') this._allies[i] = gs.minions.find(it);
			else if (it && typeof it === 'object' && !(it instanceof Npc)) {
				this._allies[i] = itemRevive(gs, it);
			}

			if (!this._allies[i]) this._allies.splice(i, 1);

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
			// Checked before, because the enemy could've died from an attack, and update could cause it to heal after dying.
			if (e.alive === false) {
				e.deathThroes();
				this._enemies.splice(i, 1);
				if (this._enemies.length === 0) Events.emit(COMBAT_WON);
				continue;
			}

			e.update(dt);

			// Checked after, to see if it died after updates, possibly due to dots.
			if (e.alive === false) {
				e.deathThroes();
				this._enemies.splice(i, 1);
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
		Events.emit(EVT_COMBAT, g.self.name.toTitleCase() + ' Casts ' + it.name.toTitleCase());
		if (it.attack) {
			this.attack(g.self, it.attack);
		}
		if (it.action) {

			const target = this.getTarget(g.self, it.action.targets, it.action.targetspec);

			if (!target) return;
			if (Array.isArray(target)) {

				for (let i = target.length - 1; i >= 0; i--) ApplyAction(target[i], it.action, g.self, 0, this.player);

			} else {
				ApplyAction(target, it.action, g.self, 0, this.player);
			}


		}


	}

	/**
	 * item-casted spell or action attack.
	 * @param {Item} it
	 * @param {Context} g
	 */
	itemAction(it, g) {


		Events.emit(EVT_COMBAT, null, g.self.name + ' Uses ' + it.name.toTitleCase());
		if (it.use.attack) {
			this.attack(g.self, it.use.attack);

		}
		if (it.use.action) {

			let target = this.getTarget(g.self, it.use.action.targets, it.use.action.targetspec);

			if (!target) return;
			if (Array.isArray(target)) {

				for (let i = target.length - 1; i >= 0; i--) ApplyAction(target[i], it.use.action, g.self, 0, this.player);

			} else {
				ApplyAction(target, it.use.action, g.self, 0, this.player);
			}


		}


	}
	//for use by dots
	dotAction(it, g) {

		if (it.attack) {
			this.attack(g.self, it.getAttack());
		}
		if (it.action) {

			let target = this.getTarget(g.self, it.action.targets, it.action.targetspec);

			if (!target) return;
			if (Array.isArray(target)) {

				for (let i = target.length - 1; i >= 0; i--) ApplyAction(target[i], it.action, g.self, 0, this.player);

			} else {
				ApplyAction(target, it.action, g.self, 0, this.player);
			}
		}

	}
	triggerAction(it, g) {
		this.attack(g.self, it);
	}
	/**
	 * Attack a target.
	 * @param {Char} attacker - enemy attacking.
	 * @param {Object|Char} atk - attack object.
	 */
	attack(attacker, atk) {
		if (atk.log) {
			Events.emit(EVT_COMBAT, null, atk.log);
		}

		if (atk.hits) {

			for (let p in atk.hits) {
				this.attack(attacker, atk.hits[p]);
			}
		}

		let targ = this.getTarget(attacker, atk.targets, atk.targetspec, atk.only);
		if (!targ) return;
		for (let a = 0; a < (atk.repeathits || 1); a++) {
			if (Array.isArray(targ)) {

				for (let i = targ.length - 1; i >= 0; i--) {
					this.doAttack(attacker, atk, targ[i]);
				}
			}
			else {
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

		if (!targ || !targ.alive) return;
		// attack automatically hits if it's harmless, target is defenseless OR in defensive stance AND dodge roll fails.
		if (atk.harmless || !targ.canDefend() || this.tryHit(attacker, targ, atk) || targ.canParry()) {

			ApplyAction(targ, atk, attacker, this.tryParry(attacker, targ, atk), this.player);

		}

	}

	/**
	 * @param {Char} char
	 * @param {string} targets
	 * @returns {Char|Char[]|null}
	 */
	getTarget(char, targets, targetspec = null, only = null) {
		// retarget based on state.
		targets = char.retarget(targets);

		const group = this.getGroup(targets, char.team);
		// Get id for ally leader (relative to attacker)
		let allylead = this.allies[PrimeInd(this.allies)].id
		let enemylead = undefined
		if (this.enemies[PrimeInd(this.enemies)]) {
			enemylead = this.enemies[PrimeInd(this.enemies)].id
		}
		let filtergroup = enforceOnly(Array.from(group), only);

		if (!this.active) {

			if (group === this.enemies) return null;
			if (group === this.teams[TEAM_ALL]) {

				filtergroup = enforceOnly(Array.from(this.allies), only)
				if (targets & TARGET_PRIMARY) {
					filtergroup.splice(1);
					return filtergroup;
				}

				if (targets & TARGET_NONPRIMARY) {
					let allyleadIdx = filtergroup.map(e => e.id).indexOf(allylead)
					if (allyleadIdx > -1) {
						filtergroup.splice(allyleadIdx, 1)
					}
				}

				if (targets & TARGET_NOTSELF) {
					let attackerIndex = filtergroup.map(e => e.id).indexOf(char.id)
					if (attackerIndex > -1) {
						filtergroup.splice(attackerIndex, 1)
					}
				}

				return filtergroup
			}
		}

		if (targets & TARGET_GROUP) {

			// Handling for "group" + "primary" + "any" condition aka "bothleaders"
			if ((targets & TARGET_PRIMARY) && (group === this.teams[TEAM_ALL])) {
				filtergroup = enforceOnly([this.allies[0], this.enemies[0]], only);
				return filtergroup;
			}

			if (targets & TARGET_NONPRIMARY) {
				let allyleadIdx = filtergroup.map(e => e.id).indexOf(allylead)
				let enemyleadIdx = filtergroup.map(e => e.id).indexOf(enemylead)
				if (allyleadIdx > -1) {
					filtergroup.splice(allyleadIdx, 1)
				}
				if (enemyleadIdx > -1) {
					filtergroup.splice(enemyleadIdx, 1)
				}
			}

			if (targets & TARGET_NOTSELF) {
				let attackerIndex = filtergroup.map(e => e.id).indexOf(char.id)
				if (attackerIndex > -1) {
					filtergroup.splice(attackerIndex, 1)
				}
			}
			return filtergroup;
		}

		if (!targets || (targets & TARGET_RAND && !(targets & TARGET_GROUP))) {
			let ignoretaunt = false;

			if (targets && !(targets & TARGET_ENEMY)) ignoretaunt = true;
			if (targets & TARGET_NONPRIMARY) {
				let allyleadIdx = filtergroup.map(e => e.id).indexOf(allylead)
				if (allyleadIdx > -1) {
					filtergroup.splice(allyleadIdx, 1)
				}

				let enemyleadIdx = filtergroup.map(e => e.id).indexOf(enemylead)
				if (enemyleadIdx > -1) {
					filtergroup.splice(enemyleadIdx, 1)
				}

			}

			if (targets & TARGET_NOTSELF) {
				let attackerIndex = filtergroup.map(e => e.id).indexOf(char.id)
				if (attackerIndex > -1) {
					filtergroup.splice(attackerIndex, 1)
				}
			}

			// Handling for "random primary" condition aka "randomleader"
			if (targets & TARGET_PRIMARY) {
				filtergroup = enforceOnly([this.allies[0], this.enemies[0]], only);
			}

			return RandTarget(filtergroup, ignoretaunt, targetspec);
		} else if (targets & TARGET_SELF) return char;

		if (targets & TARGET_PRIMARY) return PrimeTarget(group);

	}

	/**
	 * Get the Char group to which the target flags can apply.
	 * Null or zero targets are assumed an enemy target.
	 * @param {number} targets
	 * @param {number} team - ally team.
	 */
	getGroup(targets, team) {

		if (!targets || (targets & TARGET_ENEMY)) {

			return team === TEAM_PLAYER ? this.enemies : this.allies;

		} else if (targets & (TARGET_ALLY + TARGET_SELF)) {
			return this.teams[team];

		} else if (targets & TARGET_ANY) return this.teams[TEAM_ALL];
		else if (targets & TARGET_RAND) {
			return Math.random() < 0.5 ? this.allies : this.enemies;
		}
		return null;
	}

	/**
	 * Rolls an attack roll against a defender.
	 * @param {Char} attacker - attack object
	 * @param {Char} defender - defending char.
	 * @param {Object} attack - attack or weapon used to hit.
	 * @returns {boolean} true if char hit.
	 */
	tryHit(attacker, defender, attack) {

		let tohit = attacker.getHit(attack.kind || null, (attack?.source?.type == WEAPON || attack?.source?.school == "martial"));
		if (attack && (attack != attacker)) tohit += (attack.tohit || 0);

		if (this.dodgeRoll(defender.dodge, tohit) && !attack.nododge) {
			if (attack.name) {
				Events.emit(DAMAGE_MISS, defender.name.toTitleCase() + ' Dodges ' + (attack.name.toTitleCase()));

			}
			else {
				Events.emit(DAMAGE_MISS, defender.name.toTitleCase() + ' Dodges ' + (attacker.name.toTitleCase()));
			}

		} else return true

	}

	tryParry(attacker, defender, attack) {
		if (!attack.noparry && defender.canParry() && !attack.harmless) {
			let tohit = attacker.getHit(attack.kind || null, (attack?.source?.type == WEAPON || attack?.source?.school == "martial"));
			if (attack && (attack != attacker)) tohit += (attack.tohit || 0);
			return this.dodgeRoll(Math.pow(defender.defense, 0.7), tohit)
		}
		else return false
	}

	/**
	 *
	 * @param {Npc[]} enemies
	 */
	setEnemies(enemies) {

		this.enemies.push.apply(this.enemies, enemies);
		//	this.enemies.push.apply( this.enemies, enemies );

		if (enemies.length > 0) {

			if (enemies[0]) Events.emit(EVT_COMBAT, enemies[0].name.toTitleCase() + ' Encountered');
			else console.warn('No valid enemy');

		}

		this.resetTeamArrays();
		this.setTimers();
		for (let i = this.enemies.length - 1; i >= 0; i--) {
			if (this.enemies[i].onSummon) this.enemies[i].openingAction()
		}

	}

	/**
	 * Add Npc to combat
	 * @param {Npc} it
	 */
	addNpc(it) {

		it.timer = getDelay(it.speed);

		if (it.team === TEAM_PLAYER) {
			this._allies.push(it)
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
		let comp = this.state.getSlot(COMPANION)
		if (comp) {
			if (comp.onCreate) comp.onCreate(game, TEAM_PLAYER, false)
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
		for (let i = this.allies.length - 1; i >= 1; i--) { // >= 1 excludes player from this consideration. Let the player keep their delay, if any.
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
	 * @param {number} dodge
	 * @param {number} tohit
	 * @returns {boolean} true if defender dodges.
	 */
	dodgeRoll(dodge, tohit) {

		//let sig = 1 + (dodge-tohit)/( 1+ Math.abs(dodge-tohit));
		//let sig = 1 + (2/Math.PI)*( Math.atan(dodge-tohit) );
		//new attempt:
		/*
		let high = Math.max(Math.abs(tohit),Math.abs(dodge));
		if ( high == 0 ) {
			let a = 0.25 - Math.random()
			return a > 0 ? a : false
		};
		*/
		let sig = Math.min(0.95, (9 + Math.pow(Math.max(0, (dodge - tohit) + 14.7), 2)) / 900); // chance to dodge or parry

		let a = sig - Math.random()
		return a > 0 ? a : false;

	}

	charDied(char, attacker) {

		if (char === this.player) return;
		else if (char.team === TEAM_PLAYER) {

			Events.emit(ALLY_DIED, char);

		} else Events.emit(ENEMY_SLAIN, char, attacker);

	}

	getMonsters(id, team) {
		let monsters = []
		if (team === TEAM_PLAYER) {
			for (let i = 0; i < this._allies.length; i++) {
				if (this._allies[i].template) {
					if (this._allies[i]?.template.id == id && this._allies[i].alive == true) {
						monsters.push(this._allies[i])
					}
				}
			}
		} else {
			for (let i = 0; i < this._enemies.length; i++) {
				if (this._enemies[i]?.template.id == id && this._enemies[i].alive == true) {
					monsters.push(this._enemies[i])
				}
			}
		}
		return monsters;
	}

}
