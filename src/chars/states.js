export const NO_ACT = 7;
export const NO_ATTACK = 1;
export const NO_DEFEND = 2;
export const NO_SPELLS = 4;

export const ParseFlags = (list)=>{

	if ( typeof list === 'string') list = list.split(',');

	let f = 0;

	for( let i = list.length-1; i >= 0; i-- ) {

		var v = list[i];
		if ( v === 'noact') f |= NO_ACT;
		else if ( v === 'noattack') f |= NO_ATTACK;
		else if ( v === 'nodefend' ) f |= NO_DEFEND;
		else if ( v === 'nocast') f |= NO_SPELLS;

	}
	return f;

}

/**
 * State information about a character.
 */
export default class States {

	/**
	 * @property {.<number,Dot>} causes - causes of each state flag.
	 */
	get causes(){return this._causes; }
	set causes(v) { this._causes = v; }

	get flags(){return this._flags;}
	set flags(v) { this._flags = v;}

	canCast() { return (this._flags & NO_SPELLS) === 0 }
	canAttack() { return (this._flags & NO_ATTACK) === 0 }
	canDefend() { return (this._flags & NO_DEFEND ) === 0 }

	constructor(){

		this._flags = 0;

	}

	/**
	 * Get cause of a flag being set, or null
	 * if flag not set.
	 * @param {number} flag
	 * @returns {Dot|null}
	 */
	getCause(flag) {
		return this._causes[flag];
	}

	/**
	 * Mark a cause of a state-flag being set.
	 * @param {number} flag - state flag.
	 * @param {Dot|State} cause - dot setting the flag.
	 */
	blame( flag, cause ) {

		this._causes[flag] = cause;
		this._flags |= flag;

	}

	/**
	 * Blame each bit-flag in flags on cause.
	 * @param {Dot} cause
	 * @param {Number} flags
	 */
	blameAll( cause, flags ) {

		let i = 1;
		while ( i < flags ) {

			if ( (flags & i) > 0 ) this._causes[i] = cause;
			i *= 2;

		}
		this._flags |= flags;

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
				this.blameAll( d, d.flags);
			}

		}

	} // refresh()

}