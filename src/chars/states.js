const MAX_FLAG = 256;

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

	constructor(){

		this._flags = 0;

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

		for( let i = dots.length-1; i >= 0; i-- ) {

			var d = dots[i];
			if ( d.flags ) {
				this.blameAll( d, d.flags);
			}

		}

	} // refresh()

}