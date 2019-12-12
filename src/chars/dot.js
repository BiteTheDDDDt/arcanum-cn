import Range from "../values/range";
import {ParseMods } from "../values/mod";
import { setModCounts } from "../items/base";
import { ParseDmg } from "./attack";
import game from "../game";

export const NO_ACT = 7;
export const NO_ATTACK = 1;
export const NO_DEFEND = 2;
export const NO_SPELLS = 4;

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
			flags:this._flags!== 0 ? this._flags : undefined,
			duration:this.duration,
			source:this.source ? ( typeof this.source === 'string' ? this.source : this.source.id ) : undefined
		};

	}

	get id() { return this._id; }
	set id(v) { this._id =v;}

	get mod() { return this._mod; }
	set mod(v) { this._mod = v; }

	/**
	 * @property {string} verb - verb for dots that define state, e.g. sleeping.
	 */
	get adj() { return this._adj || this._name || this._id; }
	set adj(v) { this._adj = v; }

	get dmg(){return this.damage;}
	set dmg(v) { this.damage = v; }

	get damage() { return this._damage; }
	set damage(v) {
		this._damage = ParseDmg(v);
	}

	/**
	 * @property {string} flags
	 */
	get flags(){return this._flags;}
	set flags(v) { this._flags = v;}

	valueOf(){ return ( this.duration > 0 || Number.isNaN(this.duration) ) ? 1 : 0; }

	canCast() { return (this._flags & NO_SPELLS) === 0 }
	canAttack() { return (this._flags & NO_ATTACK) === 0 }
	canDefend() { return (this._flags & NO_DEFEND ) === 0 }

	constructor( vars, source, name ){

		Object.assign( this, vars );

		this.source = this.source || source || null;

		if ( !this.name ) this.name = name || ( source ? source.name : '' );

		if ( !this.id ) console.error('BAD DOT ID: ' + this.name );

		if ( vars.state ) {
			this.copyStates( vars.state );
		}

		if ( !this.duration) this.duration = NaN;

		/**
		 * @property {boolean} stack - ability of dot to stack.
		 */
		if ( this.mod ){

			this.mod = ParseMods( this.mod, this.id );

			setModCounts( this.mod, this );
		}

		this.setFlags();

		/**
		 * @private {number} acc - integer accumulator
		 */
		this.acc = this.acc || 0;

	}

	/**
	 *
	 * @param {string|string[]} s
	 */
	copyStates(s) {

		console.log('state from: ' + s );

		var st;
		if ( typeof s === 'string' ) {
			s = s.split(',');
		}

		// restore id after state overwrites.
		let id = this.id;

		for( let i = s.length-1; i>= 0; i--) {

			var st = game.state.getData(s[i]);

			if ( st ) {
				console.log('merging state: ' + s[i] );
				Object.assign( this, st );
			}

		}

		this.id = id;

	}

	/**
	 * Extend duration to the given number of seconds.
	 * @param {number|NaN} duration
	 */
	extend( duration ) {

		if ( Number.isNaN(duration) || Number.isNaN(this.duration ) ) this.duration = NaN;
		else if ( duration > this._duration ) {
			this._duration = duration;
		}
	}

	setFlags() {

		let f = this._flags || 0;

		if ( this.noact ) f |= NO_ACT;
		else {
			if ( this.noattack ) f |= NO_ATTACK;
			if ( this.nodefend ) f |= NO_DEFEND;
			if ( this.nocast ) f |= NO_SPELLS;
		}

		console.log('dot flags: ' + f );

		this._flags = f;

	}

	revive(state) {

		if ( this.source && typeof this.source === 'string') this.source = state.getData( this.source );
		//if ( this.mod ) this.mod = ParseMods(this.mod, this.id);

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
			if ( !Number.isNaN(this.duration ) ) this.duration--;

			return 1;

		}

		return 0;

	}

}