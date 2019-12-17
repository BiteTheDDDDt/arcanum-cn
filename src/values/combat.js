import FValue from "./fvalue";
import RValue from "./rvalue";
import Range from "./range";

export const TARGET_ALL = 'all';

/**
 * @const {string} TARGET_SELF - target self.
 */
export const TARGET_SELF = 1;

/**
 * @const {string} TARGET_ENEMY - target one enemy.
 */
export const TARGET_ENEMY = 2;

/**
 * @const {string} TARGET_ALLY - target single ally.
 */
export const TARGET_ALLY = 4;

/**
 * @const {string} TARGET_RAND - random target.
 */
export const TARGET_RAND = 8;

export const TARGET_GROUP = 16;


/**
 * @const {string} TARGET_ENEMIES - target all enemies.
 */
export const TARGET_ENEMIES = TARGET_GROUP + TARGET_ENEMY;

/**
 * @const {string} TARGET_ALLIES - target all allies.
 */
export const TARGET_ALLIES = TARGET_GROUP + TARGET_ALLY;

/**
 * @const TARGET_RANDG - target random group.
 */
export const TARGET_RANDG = TARGET_RAND + TARGET_GROUP;


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

	if ( typeof v === 'object' ) return v;
	else if ( !isNaN(v) ) return new RValue(v);
	else if ( typeof v === 'string' ) {

		if ( RangeTest.test(v) ) return new Range(v);
		return MakeDmgFunc(v);

	} else if ( typeof v === 'object') return new Range(v);
	return v;

}