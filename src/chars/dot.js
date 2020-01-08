import Range from "../values/range";
import {ParseMods } from "../values/mod";
import { setModCounts } from "../items/base";

export default class Dot {

	toJSON(){

		if ( !this.id ) {
			console.warn('NO DOT ID: ' + this );
			return undefined;
		}

		return {

			id:this.id,
			kind:this.kind || undefined,
			name:this.name || undefined,
			dmg:this.damage || undefined,
			effect:this.effect||undefined,
			mod:this.mod||undefined,
			acc:this.acc||undefined,
			duration:this.duration,
			source:this.source ? ( typeof this.source === 'string' ? this.source : this.source.id ) : undefined
		};

	}

	get dmg(){return this.damage;}
	set dmg(v) { this.damage = v; }

	get damage() { return this._damage; }
	set damage(v) { this._damage = ParseDmg(v); }

		if ( v instanceof Range ) this._damage = v;
		else if ( typeof v === 'string' || typeof v === 'object') this._damage = new Range(v);
		else if ( !isNaN(v) ) this._damage = Number(v);

	}

	/**
	 * Get a damage value for the dot.
	 */
	getDamage() {

		return (typeof this._damage === 'number') ? this._damage : this._damage.value;

	}

	valueOf(){return this.duration > 0 ? 1 : 0; }

	constructor( vars, source, name ){

		Object.assign( this, vars );

		this.source = this.source || source || null;

		if ( !this.name ) this.name = name || ( source ? source.name : '' );

		if ( !this.id ) console.error('BAD DOT ID: ' + this.name );

		if ( !this.duration) this.duration = 10;

		/**
		 * @property {boolean} stack - ability of dot to stack.
		 */
		if ( this.mod ){

			this.mod = ParseMods( this.mod, this.id );

			setModCounts( this.mod, this );
		}

		/**
		 * @private {number} acc - integer accumulator
		 */
		this.acc = this.acc || 0;

	}

	/**
	 * Extend duration to the given number of seconds.
	 * @param {number} duration
	 */
	extend( duration ) {

		if ( duration === 0|| this.perm ) {

			this.perm = true;
			this.duration = 0;

		} else if ( duration > this._duration ) {
			this._duration = duration;
		}
	}

	/**
	 * Merge state or dot into this one.
	 * @param {Dot} st
	 */
	mergeDot( st ) {

		console.log('merge dot: ' + st.id );
		mergeSafe( this, st );
		this._flags = this._flags | st.flags;

	}

	revive(gs) {
		if ( this.source && typeof this.source === 'string') this.source = gs.getData( this.source );
	}

	/**
	 * Ticks dt and returns the amount the dot has actually ticked,
	 * (allowing for seconds-only updates.)
	 * @param {number} dt
	 * @returns {number} - amount of tick time to count.
	 */
	tick(dt) {

		this.acc += dt;
		if ( this.acc >= 1 ) {

			this.acc--;
			this.duration--;

			return 1;

		}

		return 0;

	}

}