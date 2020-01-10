import FValue from "./fvalue";
import RValue from "./rvalue";
import Range, { RangeTest } from "./range";
import Events, { IS_IMMUNE, CHAR_DIED, COMBAT_HIT, EVT_COMBAT } from "../events";
import { TYP_FUNC } from "./consts";

/**
 * @const {number} TARGET_SELF - target self.
 */
export const TARGET_SELF = 1;

/**
 * @const {number} TARGET_ENEMY - target one enemy.
 */
export const TARGET_ENEMY = 2;

/**
 * @const {number} TARGET_ALLY - target single ally.
 */
export const TARGET_ALLY = 4;

/**
 * @const {number} TARGET_RAND - random target.
 */
export const TARGET_RAND = 8;

export const TARGET_GROUP = 16;


/**
 * @const {number} TARGET_ANY - not necessarily useful but
 * included for consistency with targetting flags.
 */
export const TARGET_ANY = 32;

/**
 * @const {number} TARGET_PRIMARY - target leader of targetted group.
 */
export const TARGET_PRIMARY = 64;

export const TARGET_ALL = TARGET_ANY + TARGET_GROUP;


export const TARG_RAND_ENEMY = TARGET_RAND + TARGET_ENEMY;



export const TARGET_LEADER = TARGET_ALLY + TARGET_PRIMARY;


/**
 * @const {number} TARGET_ENEMIES - target all enemies.
 */
export const TARGET_ENEMIES = TARGET_GROUP + TARGET_ENEMY;

/**
 * @const {number} TARGET_ALLIES - target all allies.
 */
export const TARGET_ALLIES = TARGET_GROUP + TARGET_ALLY;

/**
 * @const TARGET_RANDG - target random group.
 */
export const TARGET_RANDG = TARGET_RAND + TARGET_GROUP;

/**
 * Determine if target can target type.
 * @param {number} targs
 */
export const CanTarget = (targs, target ) => {
	return targs & target > 0;
}

/**
 * @const {object.<string,string>} Targets - targetting constants.
 */
export const Targets = {

	all:TARGET_ALL,

	/**
 	* @const {string} TARGET_SELF - target self.
 	*/
	self:TARGET_SELF,

	/**
	 * @property {string} ENEMY - target one enemy.
 	 */
	enemy:TARGET_ENEMY,

	/**
	 * @const {string} ENEMIES - target all enemies.
	 */
	enemies:TARGET_ENEMIES,
	/**
	* @const {string} ALLIES - target all allies.
	 */
	allies:TARGET_ALLIES,

	/**
 	* @const TARGET_RANDG - target random group.
	 */
	randgroup:TARGET_RANDG,

	 /**
 	* @const {string} TARGET_RAND - random target.
 	*/
	rand:TARGET_RAND,

	randenemy:TARG_RAND_ENEMY,

	/**
	 * @const {number} TARGET_PRIMARY - target opposing leader.
	 */
	primary:TARGET_PRIMARY,

	/**
	 * @const {number} TARGET_LEADER - target (same-team) leader.
	 */
	leader:TARGET_LEADER,

	/**
 	* @const {string} TARGET_ALLY - target single ally.
 	*/
	ally:TARGET_ALLY,

};

/**
 * Parse string target into integer target for flag checking.
 * @param {string|string[]} s
 */
export const ParseTarget = (s)=>{

	let f = Targets[s] || Targets.enemy;
	return f;

}

/**
 * Create a function that returns a numeric damage value.
 * function has format: (a)ctor, (t)arget, (g)ameState
 * @param {string} s
 * @returns {(a,t,c,g)=>number}
 */
export const MakeDmgFunc = (s)=>{
	return new FValue( 'a,t,g', s );
};

export const ParseDmg = (v)=>{

	if ( v === null || v === undefined || v === '' ) return null;
	if ( typeof v === 'object' ) return v;
	else if ( !isNaN(v) ) return new RValue(v);
	else if ( typeof v === 'string' ) {

		if ( RangeTest.test(v) ) return new Range(v);
		return MakeDmgFunc(v);

	} else if ( typeof v === 'object') return new Range(v);
	return v;

}

/**
* Apply an attack. Attack is already assumed to have hit, but immunities,
* resistances, can still be applied.
* @param {Char} target
* @param {Object} attack
*/
export const ApplyAction = ( target, attack, attacker = null) => {

	if ( !target || !target.alive ) return;
	if ( target.isImmune(attack.kind) ) {

		Events.emit( IS_IMMUNE, target.name + ' IMMUNE to ' + attack.kind );
		return false;
	}

	if ( attack.damage ) ApplyDamage( target, attack, attacker );
	if ( attack.cure ) {
		console.log('CURE: ' + attack.cure );
		target.cure( attack.cure );
	}
	if ( attack.state ) {
		target.addDot( attack.state, attack );
	}

	if ( attack.dot ) { target.addDot( attack.dot, attacker ); }

	return true;

}

export const ApplyDamage = ( target, attack, attacker ) => {

	let dmg = attack.damage;
	if ( !dmg) return;

	if ( dmg.type === TYP_FUNC ) {
		//let f = dmg.fn;
		dmg = dmg.fn( attacker, target, target.context );
	}
	else dmg = dmg.value;

	if ( attacker ) dmg += attacker.getBonus( attack.kind );
	if ( attack.bonus ) dmg += attack.bonus;

	let resist = target.getResist(attack.kind);
	if (resist !== 0) {
		dmg *= (1 - resist);


	}

	let damage_reduction = 0
	if (resist === 0 || resist < 1) { damage_reduction = 3*target.defense/(3*target.defense + 10*dmg*(attack.duration ? attack.duration : 1));}
	dmg = (dmg*(1-damage_reduction));

	let total_reduc = resist + damage_reduction;
	target.hp -= dmg;
	if ( target.hp <= 0 ) { Events.emit( CHAR_DIED, target, attack ); }

	let dmg_source = (attack.name || (attacker ? attacker.name : ''));

	let msg = "" + dmg_source + " hits ";
	if (resist > 0) msg += "strongly ";
	else if (resist < 0) msg += "weakly ";
	else if (resist > 1) msg += " absorbed by ";
	msg += target.name + ": "+ dmg;
	if (total_reduc > 0) msg += " (reduced by: " + (total_reduc*100).toFixed(2) + "%)";
	else if (total_reduc < 0) msg += " (augmented by: " + -(total_reduc*100).toFixed(2) + "%)";
	else if (total_reduc < 0) msg += " (absorb: " + -((total_reduc-1)*100).toFixed(2) + "%)";

	Events.emit( COMBAT_HIT, msg);

	if ( attack.leech && attacker ) {
		let amt = Math.floor(100 * attack.leech * dmg) / 100;
		attacker.hp += amt;
		Events.emit(EVT_COMBAT, null, attacker.name + ' steals ' + amt + ' life');
	}

}

/**
 * @note currently unused.
 * Convert damage object to raw damage value.
 * @param {number|function|Range} dmg
 * @returns {number}
*/
export function getDamage( dmg ) {

	let typ = typeof dmg;

	if ( typ === 'object') return dmg.value;
	else if ( typ === 'number') return dmg;
	else if ( typeof dmg === 'function') {
	}

	console.warn('Invalid damage: ' + dmg);
	return 0;

}