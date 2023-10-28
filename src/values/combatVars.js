import FValue, { MkParams } from "./rvals/fvalue";
import Range, { RangeTest } from "./range";
import Events, { IS_IMMUNE, CHAR_DIED, COMBAT_HIT, EVT_COMBAT } from "../events";
import { FP, TYP_FUNC } from "./consts";
import RValue from "./rvals/rvalue";

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

/**
 * @const {number} TARGET_NONPRIMARY - avoid targeting the leader of the group.
 */
export const TARGET_NONPRIMARY = 128;

export const TARGET_ALL = TARGET_ANY + TARGET_GROUP;

export const TARGET_RAND_ENEMY = TARGET_RAND + TARGET_ENEMY;

export const TARGET_RAND_ALLY = TARGET_RAND + TARGET_ALLY;

export const TARGET_ENEMYLEADER = TARGET_ENEMY + TARGET_PRIMARY;

export const TARGET_LEADER = TARGET_ALLY + TARGET_PRIMARY;

export const TARGET_FLUNKIES = TARGET_GROUP + TARGET_ENEMY + TARGET_NONPRIMARY;

export const TARGET_MINIONS = TARGET_GROUP + TARGET_ALLY + TARGET_NONPRIMARY;

export const TARGET_FLUNKY = TARGET_RAND + TARGET_ENEMY + TARGET_NONPRIMARY;

export const TARGET_MINION = TARGET_RAND + TARGET_ALLY + TARGET_NONPRIMARY;

export const TARGET_ENEMIES = TARGET_GROUP + TARGET_ENEMY;

export const TARGET_ALLIES = TARGET_GROUP + TARGET_ALLY;

export const TARGET_EPICENTER = TARGET_ANY + TARGET_GROUP + TARGET_NONPRIMARY;

/**
 * @const TARGET_RANDG - target random group.
 */
export const TARGET_RANDG = TARGET_RAND + TARGET_GROUP;

/**
 * @const TARGET_RANDNP - target random non-primary.
 */
export const TARGET_RANDNP = TARGET_RAND + TARGET_NONPRIMARY;

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
	 * @property {string} TARGET_RAND_ENEMY - target one enemy.
 	 */
	enemy:TARGET_RAND_ENEMY,

	/**
	 * @property {string} TARGET_RAND_ALLY - target one ally.
 	 */
	ally:TARGET_RAND_ALLY,

	/**
	 * @const {string} ENEMIES - target all enemies.
	 */
	enemies:TARGET_ENEMIES,
	/**
	* @const {string} TARGET_ALLIES - target all allies.
	 */
	allies:TARGET_ALLIES,

	/**
 	* @const TARGET_RANDG - target random group.
	 */
	randomgroup:TARGET_RANDG,

	 /**
 	* @const {string} TARGET_RAND - random target.
 	*/
	random:TARGET_RAND,


	/**
	 * @const {number} TARGET_ENEMYLEADER - target opposing leader.
	 */
	enemyleader:TARGET_ENEMYLEADER,

	/**
	 * @const {number} TARGET_LEADER - target (same-team) leader.
	 */
	leader:TARGET_LEADER,

	/**
	 * @const {number} TARGET_FLUNKIES - target all enemies except their leader.
	 */
	flunkies:TARGET_FLUNKIES,

	/**
	 * @const {number} TARGET_MINIONS - target all allies except self.
	 */
	minions:TARGET_MINIONS,

	/**
	 * @const {number} TARGET_FLUNKY - target a random enemy that is not a leader.
	 */
	flunky:TARGET_FLUNKY,

	/**
	 * @const {number} TARGET_MINION - target a random ally except self.
	 */
	minion:TARGET_MINION,

	/**
	 * @const {number} TARGET_EPICENTER - target a random ally except self.
	 */
	epicenter:TARGET_EPICENTER,

};

/**
 * @param {Char[]} a - array of targets.
 * @returns {Char} next attack target
 */
export const RandTarget = (a,nonprime = false,ignoretaunt = false) => {
	// if we don't want a prime target we find out who's the prime and chop that off our list of valid random targets
	let ind  = 0
	if(nonprime){
		ind = PrimeInd(a)+1;
		if (a.length == ind) return null;
	}
	let v = []
	if (!ignoretaunt)
	{
		for (let i = ind; i<a.length; i++)
		{
			if (a[i].alive)
			{
				if(a[i].getCause(32)) return a[i];
				if(!a[i].getCause(64))  v.push(a[i]);
			}
		}
	}
	if (v.length>0)
	{
		return v[Math.floor( Math.random()*v.length)];
	} else return a[Math.floor( Math.random()*(a.length-ind))+ind];
}

/**
 * @param {*} a
 * @returns {Char} highest priority ( lowest index ) living target.
 */
export const PrimeTarget = (a) => {
	for( let i = 0; i<a.length; i++ ) {
		if ( a[i].alive ) return a[i];
	}
}
export const PrimeInd = (a) => {
	for( let i = 0; i<a.length; i++ ) {
		if ( a[i].alive ) return i;
	}
}

/**
 * @param {Char[]} a - array of targets.
 * @returns {Char} next attack target
 */
export const NextTarget = ( a ) => {

	for( let i = a.length-1; i>=0; i-- ) {
		if ( a[i].alive ) return a[i];
	}
}


/**
 * Parse string target into integer target for flag checking.
 * @param {string|string[]} s
 * @returns {number}
 */
export const ParseTarget = (s)=>{

	let a = s.split(',');
	let t = 0;
	for( let i = a.length-1; i>=0; i-- ) {

		t |= ( Targets[ a[i] ] || 0 );
	}

	return t || Targets.enemy;

}

export const GetTarget = (n) => {
	if(!n || typeof n !== "number") return "";

	let targs = Object.entries(Targets);

	let str = targs.find(it => it[1] === n);
	if(str) return str[0];

	str = [];
	for(let [targ, val] of targs.sort((a, b) => b[1] - a[1])) {
		if(val > n) continue;
		if(val & n === val) {
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
export const MakeDmgFunc = (s)=>{
	return new FValue( MkParams(FP.ACTOR, FP.TARGET, FP.CONTEXT, FP.ITEM), s );
};

export const ParseDmg = (v)=>{

	if ( v === null || v === undefined || v === '' ) return null;

	if ( (typeof v === 'string') && !RangeTest.test(v) && isNaN(v) ) return MakeDmgFunc(v);
	else if ( v instanceof RValue ) return v;
	return new Range(v);

}

/**
* Apply an attack. Attack is already assumed to have hit, but immunities,
* resistances, can still be applied.
* @param {Char} target
* @param {Object} action
*/
export const ApplyAction = ( target, action, attacker = null) => {

	if ( !target || !target.alive ) return;
	if ( target.isImmune(action.kind) ) {

		Events.emit( IS_IMMUNE, target, action.kind );
		return false;
	}


	if ( action.damage ) ApplyDamage( target, action, attacker );
	if ( action.cure ) {

		target.cure( action.cure );
	}
	if ( action.state ) {
		target.addDot( action.state, action, null, attacker );
	}

	if ( action.result ) {
		//console.log('APPLY ON: '+ target.name );
		//if ( attacker && action.name ) Events.emit(EVT_COMBAT, attacker.name + ' uses ' + action.name );
		target.applyVars( action.result );
	}
	if ( action.dot ) {
		target.addDot( action.dot, action, null, attacker );
	}

	return true;

}

export const ApplyDamage = ( target, attack, attacker ) => {

	let dmg = attack.damage;
	if ( !dmg) return;

	if ( dmg.type === TYP_FUNC ) {
		//let f = dmg.fn;
		dmg = dmg.fn( attacker, target, target.context, attack.source);
	}
	else dmg = dmg.value;
	if ( attack.bonus ) dmg += attack.bonus;
	if(attacker)
	{
		if (attacker.getBonus ) dmg += attacker.getBonus( attack.kind );
		if (attacker.context && attack.potencies && attacker.id =="player")
		{
			for (let p of attack.potencies)
			{	
				let potency = attacker.context.state.getData(p)
				if(potency){
				dmg = dmg * potency.dmg.fn( attacker, target, target.context, potency )
				}
			}
		}
	}
	

	let resist = target.getResist(attack.kind);
	if (resist !== 0) {
		dmg *= (1 - resist);

	}

	let dmg_reduce = 0
	if ( (resist === 0 || resist < 1) && !attack.nodefense ) {

		dmg_reduce = target.defense/(target.defense + (10/3)*dmg*( attack.duration || 1 ) );
		dmg *= ( 1 - dmg_reduce );

	}

	target.hp -= dmg;


	Events.emit( COMBAT_HIT, target, dmg, resist, dmg_reduce, (attack.name || (attacker ? attacker.name : '') ) );
	if ( target.hp <= 0 ) { Events.emit( CHAR_DIED, target, attack ); }

	if ( attack.leech && attacker && dmg > 0 ) {
		let amt = Math.floor(100 * attack.leech * dmg) / 100;
		attacker.hp +=( amt );
		Events.emit(EVT_COMBAT, null, attacker.name.toTitleCase() + ' Steals ' + amt + ' Life');
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