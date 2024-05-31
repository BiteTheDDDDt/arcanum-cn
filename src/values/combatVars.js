import FValue from "./rvals/fvalue";
import Range, { RangeTest } from "./range";
import Events, { IS_IMMUNE, CHAR_DIED, COMBAT_HIT, EVT_COMBAT } from "../events";
import { FP, TYP_PCT } from "./consts";
import RValue from "./rvals/rvalue";

/**
 * @const {number} TARGET_SELF - target self.
 */
export const TARGET_SELF = 1;

/**
 * @const {number} TARGET_ENEMY - target has to be on enemy team
 */
export const TARGET_ENEMY = 2;

/**
 * @const {number} TARGET_ALLY - target has to be ally team
 */
export const TARGET_ALLY = 4;

/**
 * @const {number} TARGET_RAND - one target is chosen randomly
 */
export const TARGET_RAND = 8;

/**
 * @const {number} TARGET_GROUP - affect an entire group, depending on other flags
 */
export const TARGET_GROUP = 16;

/**
 * @const {number} TARGET_ANY - Everyone not excluded is a valid target (largely equivalent to ALLY+ENEMY, but not quite)
 */
export const TARGET_ANY = 32;

/**
 * @const {number} TARGET_PRIMARY - Target has to be the 1st in it's group.
 */
export const TARGET_PRIMARY = 64;

/**
 * @const {number} TARGET_NONPRIMARY - Target has to NOT be the 1st in it's group. If targeting a group, exclude the 1st.
 */
export const TARGET_NONPRIMARY = 128;

/**
 * @const {number} TARGET_NOTSELF - avoid targetting self
 * only takes effect in RAND or GROUP contexts
 * should not be used with TARGET_PRIMARY unless you want unexpected results
 */
export const TARGET_NOTSELF = 256;

// Composite targets combining multiple conditions

export const TARGET_ALL = TARGET_ANY + TARGET_GROUP; // Target everyone, targets entire group.

export const TARGET_RAND_ENEMY = TARGET_RAND + TARGET_ENEMY; //target a random target from an enemy group

export const TARGET_RAND_ALLY = TARGET_RAND + TARGET_ALLY; //target a random target from an ally group

export const TARGET_ENEMYLEADER = TARGET_ENEMY + TARGET_PRIMARY; // target the 1st entity in enemy group

export const TARGET_LEADER = TARGET_ALLY + TARGET_PRIMARY; // target the 1st entity in ally group 

export const TARGET_FLUNKIES = TARGET_GROUP + TARGET_ENEMY + TARGET_NONPRIMARY; // target everyone in an enemy group, except the 1st entity

export const TARGET_MINIONS = TARGET_GROUP + TARGET_ALLY + TARGET_NONPRIMARY; // target everyone in an ally group, except the 1st entity

export const TARGET_FLUNKY = TARGET_RAND + TARGET_ENEMY + TARGET_NONPRIMARY; //target a random target from an enemy group but never the 1st

export const TARGET_MINION = TARGET_RAND + TARGET_ALLY + TARGET_NONPRIMARY;  //target a random target from an ally group but never the 1st

export const TARGET_ENEMIES = TARGET_GROUP + TARGET_ENEMY; // target entire group of enemies

export const TARGET_ALLIES = TARGET_GROUP + TARGET_ALLY; // target entire group of allies

export const TARGET_EPICENTER = TARGET_ANY + TARGET_GROUP + TARGET_NOTSELF; // targets all entities but the "attacker"

export const TARGET_RANDG = TARGET_RAND + TARGET_GROUP; // Target everyone in a random group

export const TARGET_RANDNP = TARGET_RAND + TARGET_NONPRIMARY; // target someone random who isn't the 1st in their group

// Additional, experimental composite targeting types
export const TARGET_NONLEADERS = TARGET_ANY + TARGET_GROUP + TARGET_NONPRIMARY; // target everyone who isn't their group's leader

export const TARGET_BOTHLEADERS = TARGET_ANY + TARGET_GROUP + TARGET_PRIMARY; // target both group leaders

export const TARGET_RANDLEADER = TARGET_RAND + TARGET_PRIMARY; // target 1 group leader at random

export const TARGET_OTHERMINION = TARGET_RAND + TARGET_ALLY + TARGET_NONPRIMARY + TARGET_NOTSELF;  // target a random target from an ally group but never the attacker and never the 1st (which may be the same)

export const TARGET_OTHERMINIONS = TARGET_GROUP + TARGET_ALLY + TARGET_NONPRIMARY + TARGET_NOTSELF; // target everyone in an ally group, except attacker and the 1st entity (which may be the same)

export const TARGET_RANDNPG = TARGET_RAND + TARGET_GROUP + TARGET_NONPRIMARY; // target a random group, exclude primary


/**
 * Determine if target can target type.
 * @param {number} targs
 */
export const CanTarget = (targs, target) => {
	return targs & target > 0;
}

/**
 * @const {object.<string,string>} Targets - targetting constants.
 */
export const Targets = {

	all: TARGET_ALL,

	/**
	  * @const {string} TARGET_SELF - target self.
	  */
	self: TARGET_SELF,

	/**
	 * @property {string} TARGET_RAND_ENEMY - target one enemy.
	   */
	enemy: TARGET_RAND_ENEMY,

	/**
	 * @property {string} TARGET_RAND_ALLY - target one ally.
	   */
	ally: TARGET_RAND_ALLY,

	/**
	 * @const {string} ENEMIES - target all enemies.
	 */
	enemies: TARGET_ENEMIES,
	/**
	* @const {string} TARGET_ALLIES - target all allies.
	 */
	allies: TARGET_ALLIES,

	/**
	  * @const TARGET_RANDG - target random group.
	 */
	randomgroup: TARGET_RANDG,

	/**
	 * @const {string} TARGET_RAND - random target.
	 */
	random: TARGET_RAND,

	/**
	 * @const {number} TARGET_ENEMYLEADER - target opposing leader.
	 */
	enemyleader: TARGET_ENEMYLEADER,

	/**
	 * @const {number} TARGET_LEADER - target (same-team) leader.
	 */
	leader: TARGET_LEADER,

	/**
	 * @const {number} TARGET_FLUNKIES - target all enemies except their leader.
	 */
	flunkies: TARGET_FLUNKIES,

	/**
	 * @const {number} TARGET_MINIONS - target all allies except self.
	 */
	minions: TARGET_MINIONS,

	/**
	 * @const {number} TARGET_FLUNKY - target a random enemy that is not a leader.
	 */
	flunky: TARGET_FLUNKY,

	/**
	 * @const {number} TARGET_MINION - target a random ally except leader.
	 */
	minion: TARGET_MINION,

	// Keywords for experimental targeting types
	/**
	 * @const {number} TARGET_EPICENTER - target everyone except self.
	 */
	epicenter: TARGET_EPICENTER,

	/**
	 * @const {number} TARGET_RANDNP - target a random entity that is not a leader
	 */
	nonleader: TARGET_RANDNP,

	/**
	 * @const {number} TARGET_NONLEADERS - target all entities that are not leaders
	 */
	nonleaders: TARGET_NONLEADERS,

	/**
	 * @const {number} TARGET_RANDLEADER - target a random group leader
	 */
	randomleader: TARGET_RANDLEADER,

	/**
	 * @const {number} TARGET_BOTHLEADERS - target a random group leader
	 */
	bothleaders: TARGET_BOTHLEADERS,

	/**
	 * @const {number} TARGET_OTHERMINION - target a random non-primary ally other than self
	 */
	otherminion: TARGET_OTHERMINION,

	/**
	 * @const {number} TARGET_OTHERMINIONS - target all non-primary allies other than self
	 */
	otherminions: TARGET_OTHERMINIONS,

	/**
	 * @const {number} TARGET_RANDNPG - target a random group, but exclude primary target
	 */
	randomgroupnp: TARGET_RANDNPG

};

/**
 * @param {Char[]} a - array of targets.
 * @returns {Char} next attack target
 */
export const RandTarget = (a, ignoretaunt = false, targetspec = null) => {

	if (a.length == 0) return null;
	if (targetspec && (targetspec.affectedby || targetspec.notaffectedby)) {
		a = AffectedTargets(a,targetspec.affectedby, targetspec.notaffectedby)
	}
	if (a.length==0) return null
	let v = [] //array of non-hiding targets. If everyone's hiding, goes unused.
	if (!ignoretaunt) {
		for (let i = 0; i < a.length; i++) {
			if (a[i].alive) {
				if (a[i].getCause(32)) return a[i]; //taunt is prioritized, even over stat priority.
				if (!a[i].getCause(64)) v.push(a[i]);
			}
		}
	}

	return StatTarget(v.length > 0 ? v : a, targetspec?.stat, targetspec?.highest, targetspec?.usepercentage);
}

export const AffectedTargets = (a, affectedby, notaffectedby) => {
	let affected = [] //array of new valid targets for affected check
	let notaffected = [] //array of new valid targets for notaffected check

	for (let i = 0; i < a.length; i++) {
		if (a[i].alive) {
			if (affectedby) {
				let valid = true
				for (let b of affectedby.condition) {
					if (a[i].hasDot(b)) {
						if (!affectedby.all) {
							valid = true
							break
						}
						continue
					}
					valid = false
				}
				if (valid) {
					affected.push(a[i])
				}
			}
			if (notaffectedby) {
				let valid = true
				for (let b of notaffectedby.condition) {
					if (!a[i].hasDot(b)) {
						if (!notaffectedby.all) {
							valid = true
							break
						}
						continue
					}
					valid = false
				}
				if (valid) {
					notaffected.push(a[i])
				}
			}
		}
	}
	let arr1 = (affectedby) ? Array.from(affected) : Array.from(a)
	let arr2 = (notaffectedby) ? Array.from(notaffected) : Array.from(a)
	let newarr = arr1.filter(element => arr2.includes(element))
	// If we have enemies who fulfill both the affected by and notaffectedby conditions we just return that.
	if (newarr.length > 0) return newarr
	//Otherwise, we can assume that we might have enemies that fulfill one condition, but not both.
	//If targeting has an affectedby clause, but not the notaffectedby clause.
	//We know that the notaffectedby array is just "all targets" therefore the intersection of "valid affected targets" and "all targets" is "valid affected targets"
	//The intersection is null, meaning we have no valid targets.
	//We check if targeting is strict. If it is not strict (prioritize), we just target whoever. If it's strict (ONLY) we can target no one.
	if (affectedby && !notaffectedby)
	{
		return affectedby.strict ? [] : a
	}
	//same as the previous condition just for the flipped case.
	if (!affectedby && notaffectedby)
	{
		return notaffectedby.strict ? [] : a
	}
	//Now we deal with cases where both conditions are present. We know it can't be neither condition as we would not be here then.
	//If at least one array is present and targeting is not strict on either side, we return the sum of both arrays.
	//So we target either someone valid for condition one, or someone valid for condition 2.
	if ((notaffected.length > 0 || affected.length > 0) && !notaffectedby.strict && !affectedby.strict)
	{
		return arr1.concat(arr2)
	}
	// If we have a valid affected target and affected targeting is strict (ONLY) and notaffected targeting is not strict, we return the affected targets.
	//If notaffected targeting was strict, we would not have any valid targets as we know no target satisfies both by this point.
	if (affected.length > 0 && !notaffectedby.strict && affectedby.strict)
	{
		return arr1
	}
	//ditto for not affected.
	if (notaffected.length > 0 && notaffectedby.strict && !affectedby.strict)
	{
		return arr2
	}
	//If both arrays are empty and the targeting is not strict, we just target whoever. (if either array is not empty, it would be caught by the condition above)
	if (!notaffectedby.strict && !affectedby.strict)
	{
		return a
	}
	//in all other cases no target would be valid. For example, if the "Not affected" array is empty and "not afffected targeting" is strict, then there is no one we can target.
	return []
	

}

/**
 * @param {*} a
 * @returns {Char} highest priority ( lowest index ) living target.
 */
export const PrimeTarget = (a) => {
	for (let i = 0; i < a.length; i++) {
		if (a[i].alive) return a[i];
	}
	return 0 //failsafe if everyone is dead.
}
export const PrimeInd = (a) => {
	for (let i = 0; i < a.length; i++) {
		if (a[i].alive) return i;
	}
	return 0 //failsafe if everyone is dead.
}
export const StatTarget = (a, stat, high, percentage) => {
	if (!stat) return a[Math.floor(Math.random() * (a.length))];
	let target
	let beststat
	let nextstat
	for (let i = 0; i < a.length; i++) {
		if (a[i].alive) {
			if (!target) {
				target = a[i]
				beststat = percentage ? a[i][stat] / a[i][stat]["max"] : a[i][stat]
				continue
			}
			// if we are looking for the high stat, switch target if stat of target higher than current best. Reverse for if we are looking for low.
			nextstat = percentage ? a[i][stat] / a[i][stat]["max"] : a[i][stat]
			if (high === nextstat > beststat
			) {
				target = a[i]
				beststat = nextstat
			}
		}
	}
	if (target) {
		return target;
	}
	return 0 //failsafe if everyone is dead.
}

/**
 * @param {Char[]} a - array of targets.
 * @returns {Char} next attack target
 */
export const NextTarget = (a) => {

	for (let i = a.length - 1; i >= 0; i--) {
		if (a[i].alive) return a[i];
	}
}


/**
 * Parse string target into integer target for flag checking.
 * @param {string|string[]} s
 * @returns {number}
 */
export const ParseTarget = (s) => {

	let a = s.split(',');
	let t = 0;
	for (let i = a.length - 1; i >= 0; i--) {

		t |= (Targets[a[i]] || 0);
	}

	return t || Targets.enemy;

}

export const GetTarget = (n) => {
	if (!n || typeof n !== "number") return "";

	let targs = Object.entries(Targets);

	let str = targs.find(it => it[1] === n);
	if (str) return str[0];

	str = [];
	for (let [targ, val] of targs.sort((a, b) => b[1] - a[1])) {
		if (val > n) continue;
		if (val & n === val) {
			str.push(targ);
			n -= val;
		}
	}
	return str.join(",");
}

/**
 * Create a function that returns a numeric damage value.
 * function has format: (a)ctor, (t)arget, (c)ontext, (i)tem
 * @param {string} s
 * @returns {(a,t,c,i)=>number}
 */
export const MakeDmgFunc = (s) => {
	return new FValue([FP.ACTOR, FP.TARGET, FP.CONTEXT, FP.ITEM], s);
};

export const ParseDmg = (v) => {

	if (v === null || v === undefined || v === '') return null;

	if ((typeof v === 'string') && !RangeTest.test(v) && isNaN(v)) return MakeDmgFunc(v);
	else if (v instanceof RValue) return v;
	return new Range(v);

}

/**
* Apply an attack. Attack is already assumed to have hit, but immunities,
* resistances, can still be applied.
* @param {Char} target
* @param {Object} action
*/
export const ApplyAction = (target, action, attacker = null, parried = 0) => {

	if (!target || !target.alive) return;
	if (target.isImmune(action.kind)) {

		Events.emit(IS_IMMUNE, target, action.kind);
		return false;
	}


	if (action.damage) ApplyDamage(target, action, attacker, parried);
	if (action.healing) ApplyHealing(target, action, attacker);
	if (action.cure) {
		target.cure(action.cure);
	}
	if (action.state) {
		target.addDot(action.state, action, null, attacker);
	}

	if (action.result) {
		//console.log('APPLY ON: '+ target.name );
		//if ( attacker && action.name ) Events.emit(EVT_COMBAT, attacker.name + ' uses ' + action.name );
		target.context.applyVars(action.result);
	}
	if (action.dot) {
		target.addDot(action.dot, action, null, attacker);
	}
	if (action.dot) {
		target.addDot(action.dot, action, null, attacker);
	}
	if (action.summon) {

		let smntarget = target || attacker
		for (let smn of action.summon) {
			if (smn[TYP_PCT] && !smn[TYP_PCT].roll()) {
				continue;
			}
			let smnid = smn.id
			let smncount = smn.count || 1
			let smnmax = smn.max || 0
			let minions = smntarget.context.getData('minions');
			let mon = smntarget.context.getData(smn.id)
			smntarget.context.create(smnid, minions.shouldKeep(mon), smncount, smnmax)
		}

	}

	return true;

}

export const CalcDamage = (dmg, attack, attacker, target = null, applyBonus = true) => {
	if (!dmg) return;

	if (dmg instanceof FValue) {
		//let f = dmg.fn;
		dmg = dmg.getApply({
			[FP.ACTOR]: attacker,
			[FP.TARGET]: target,
			[FP.CONTEXT]: target.context,
			[FP.ITEM]: attack.source
		});
	}
	else dmg = dmg.value;
	if(applyBonus) {
		if (attack.bonus) dmg += attack.bonus;
		if (attacker) {
			if (attacker.getBonus) dmg += attacker.getBonus(attack.kind);
			if (attacker.context && attack.potencies && attacker.id == "player") {
				for (let p of attack.potencies) {
					let potency = attacker.context.state.getData(p)
					if (potency) {
						dmg = dmg * potency.damage.getApply({
							[FP.ACTOR]: attacker,
							[FP.TARGET]: target,
							[FP.CONTEXT]: target.context,
							[FP.ITEM]: potency
						});
					}
				}
			}
		}
	}
	return dmg
}

export const ApplyDamage = (target, attack, attacker, parried = 0) => {
	let dmg = CalcDamage(attack.damage, attack, attacker, target, !attack.showinstanced);

	let resist = target.getResist(attack.kind);
	if (resist !== 0) {
		dmg *= (1 - resist);

	}

	let dmg_reduce = 0
	if ( (resist === 0 || resist < 1) && !attack.nodefense ) {

		dmg_reduce = target.defense/(target.defense + (10/3)*dmg*( attack.duration || 1 ) );
		dmg *= ( 1 - dmg_reduce );

	}
	if (parried) dmg*=parried;
	target.hp -= dmg;

	Events.emit(COMBAT_HIT, target, dmg, resist, dmg_reduce, (attack.name || (attacker ? attacker.name : '')), parried);
	if (target.hp <= 0) { Events.emit(CHAR_DIED, target, attack); }

	if (attack.leech && attacker && dmg > 0) {
		let amt = Math.floor(100 * attack.leech * dmg) / 100;
		attacker.hp += (amt);
		Events.emit(EVT_COMBAT, null, attacker.name.toTitleCase() + ' Steals ' + amt + ' Life');
	}

}

export const ApplyHealing = (target, attack, attacker) => {
	let heal = CalcDamage(attack.healing, attack, attacker, target, !attack.showinstanced);

	/* 
	// No reason to impact based on a resist - at least for now
	let resist = target.getResist(attack.kind);
	if (resist !== 0) {
		heal *= (1 - resist);

	}*/

	target.hp += heal;

}

/**
 * @note currently unused.
 * Convert damage object to raw damage value.
 * @param {number|function|Range} dmg
 * @returns {number}
*/
export function getDamage(dmg) {

	let typ = typeof dmg;

	if (typ === 'object') return dmg.value;
	else if (typ === 'number') return dmg;
	else if (typeof dmg === 'function') {
	}

	console.warn('Invalid damage: ' + dmg);
	return 0;

}

/**
 * Sets an attack/dot to be instantiated, that is, unaffected by any changes on the source
 * @param {attack/dot} attack - thing to modify
 * @param {char} applier - the one using the attack
 * @param {char} target - the target of the attack
 * @returns modified attack
 */
export const instanceDamage = (attack, applier, target) => {
	attack.damage = CalcDamage(attack.damage, attack, applier, target)
	attack.healing = CalcDamage(attack.healing, attack, applier, target)
	attack.tohit += applier.getHit()
	attack.showinstanced = true;
	return attack
}
export const processDot = (dot) => {

	if (dot.attack) {
		if (Array.isArray(dot.attack)) {

			for (let i = dot.attack.length - 1; i >= 0; i--) {

				dot.attack[i] = processAttackForDot(dot.attack[i])
			}


		} else {
			dot.attack = processAttackForDot(dot.attack)
		}
	}
	if (dot.onExpire) dot.onExpire = processAttackForDot(dot.onExpire)
	if (dot.onDeath) dot.onDeath = processAttackForDot(dot.onDeath)
	return dot
}

export const processAttackForDot = (attack) => {

	attack.targetstring = attack.targets;
	if (attack.hits) {
		for (let b = attack.hits.length - 1; b >= 0; b--) {
			attack.hits[b].targetstring = attack.hits[b].targets;
			if (attack.hits[b].dot) attack.hits[b].dot = processDot(attack.hits[b].dot)
		}
	}
	if (attack.dot) attack.dot = processDot(attack.dot)
	return attack
}