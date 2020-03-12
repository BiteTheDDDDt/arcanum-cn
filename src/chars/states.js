import { quickSplice } from "../util/array";
import { TARGET_ALLIES, TARGET_ENEMIES, TARGET_ENEMY, TARGET_ALLY, TARGET_SELF, TARGET_RAND, TARGET_RANDG } from "../values/combatVars";


export const NO_ATTACK = 1;
export const NO_DEFEND = 2;
export const NO_SPELLS = 4;
export const CONFUSED = 8;
export const CHARMED = 16;

export const NO_ACT = NO_ATTACK + NO_DEFEND + NO_SPELLS;
export const IMMOBILE = NO_ATTACK + 32;

export const ParseFlags = (list)=>{

	if ( typeof list === 'string') list = list.split(',');

	let f = 0;

	for( let i = list.length-1; i >= 0; i-- ) {

		var v = list[i];
		if ( v === 'noact') f |= NO_ACT;
		else if ( v === 'noattack') f |= NO_ATTACK;
		else if ( v === 'nodefend' ) f |= NO_DEFEND;
		else if ( v === 'nocast') f |= NO_SPELLS;
		else if ( v === 'confused') f |= CONFUSED;
		else if ( v === 'charmed') f |= CHARMED;

	}
	return f;

}

const ConfuseTargets = {
	[TARGET_ALLIES]:TARGET_RANDG,
	[TARGET_ENEMIES]:TARGET_RANDG,
	[TARGET_ENEMY]:TARGET_RAND,
	[TARGET_ALLY]:TARGET_RAND,
	[TARGET_SELF]:TARGET_RAND
}
const CharmTargets = {
	[TARGET_ALLIES]:TARGET_ENEMIES,
	[TARGET_ENEMIES]:TARGET_ALLIES,
	[TARGET_ENEMY]:TARGET_ALLY,
	[TARGET_ALLY]:TARGET_ENEMY,
};

/**
 * State information about a character.
 */
export default class States {

	toJSON(){return undefined;}

	/**
	 * @property {.<number,Dot[]>} causes - causes of each state flag.
	 */
	get causes(){return this._causes; }
	set causes(v) { this._causes = v; }

	get flags(){return this._flags;}
	set flags(v) { this._flags = v;}

	canCast() { return (this._flags & NO_SPELLS) === 0 }
	canAttack() { return (this._flags & NO_ATTACK) === 0 }
	canDefend() { return (this._flags & NO_DEFEND ) === 0 }

	/**
	 *
	 * @param {string} flag
	 * @returns {boolean}
	 */
	has( flag ) {

		var a = this._causes[flag];
		return a && a.length > 0;

	}

	constructor(){

		this._causes = {};
		this._flags = 0;

	}

	/**
	 * Retarget based on flags.
	 * @param {string} targ
	 */
	retarget( targ ){

		if ( (this.flags & CONFUSED) > 0 ) {

			if ( !targ ) return TARGET_RAND;
			return ConfuseTargets[targ];

		} else if ( (this.flags & CHARMED) > 0) {

			if ( !targ ) return TARGET_ALLY;
			return CharmTargets[targ];

		}
		return targ;

	}

	/**
	 * Get cause of a flag being set, or null
	 * if flag not set.
	 * @param {number} flag
	 * @returns {Dot|null}
	 */
	getCause(flag) {

		let a = this._causes[flag];
		return (a && a.length > 0) ? a[0] : null;

	}

	/**
	 * Blame each bit-flag in flags on cause.
	 * @param {Dot} cause
	 */
	add( cause ) {

		if ( !cause ) console.warn('no cause: ' + cause );

		let flags = cause.flags;
		if ( flags === 0 ) return;

		//console.log('ADD FLAGS: ' + flags );

		let f = 1;
		while ( f <= flags ) {

			if ( (flags & f) > 0 ) this._addCause( f, cause );
			f *= 2;

		}
		this._flags |= flags;

	}

	remove( dot ) {

		if ( !dot ) return;

		let flags = dot.flags;
		let f = 1;

		while ( f <= flags ) {

			if ( (flags & f) > 0 ) this._rmCause( f, dot );
			f *= 2;

		}

	}

	_rmCause( flag, cause ) {

		let a = this._causes[flag];
		if ( !a ) return;

		let ind = a.indexOf(cause);
		if ( ind >= 0 ) {

			quickSplice( a, ind );
			if ( a.length === 0 ) this.flags ^= flag;

		}

	}

	_addCause( flag, cause ) {

		let a = this._causes[flag];
		if ( !a ) a = this._causes[flag] = [cause]
		else a.push( cause );

	}

	/**
	 * Refresh all state flags from active dots.
	 * @param {Dot[]} dots
	 */
	refresh( dots ) {

		this._flags = 0;
		for( let p in this._causes ) {
			this._causes[p] = null;
		}

		for( let i = dots.length-1; i >= 0; i-- ) {

			var d = dots[i];
			if ( d.flags ) {
				this.add( d );
			}

		}

	} // refresh()

}