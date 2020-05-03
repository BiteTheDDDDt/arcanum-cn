import {ParseMods } from "modules/parsing";
import { ParseDmg } from "../values/combatVars";
import { assign } from 'objecty';
import { ParseFlags, NO_SPELLS, NO_ATTACK, NO_DEFEND } from "./states";
import { TYP_DOT } from "../values/consts";


export default class Dot {

	toJSON(){

		if ( !this.id ) {
			console.warn('NO DOT ID: ' + this );
			return undefined;
		}

		return {

			id:this._id,
			kind:this.kind || undefined,
			name:this._name || undefined,
			dmg:this.damage || undefined,
			effect:this.effect||undefined,
			level:this._level||undefined,
			mod:this._mod||undefined,
			acc:this.acc||undefined,
			state:this.state||undefined,
			adj:this._adj||undefined,
			flags:this._flags!== 0 ? this._flags : undefined,
			duration:this.duration,
			/** @todo source should never be string. maybe on load? */
			source:this.source ? ( typeof this.source === 'string' ? this.source : this.source.id ) : undefined
		};

	}

	get name(){return this._name || this._id}
	set name(v){this._name =v;}

	get id() { return this._id; }
	set id(v) { this._id =v; }

	get mod() { return this._mod; }
	set mod(v) { this._mod = v; }

	/*get effect(){return this._effect;}
	set effect(v){this._effect = v;}*/

	/**
	 * @property {string} verb - verb for dots that define state, e.g. sleeping.
	 */
	get adj() { return this._adj || this._name || this._id; }
	set adj(v) { this._adj = v; }

	/**
	 * @property {RValue} dmg - alias for damage.
	 */
	get dmg(){return this._damage;}
	set dmg(v) { this.damage = v; }

	/**
	 * @property {RValue} damage
	 */
	get damage() { return this._damage; }
	set damage(v) { this._damage = ParseDmg(v); }

	/**
	 * @property {number} flags
	 */
	get flags(){return this._flags;}
	set flags(v) {

		this._flags = 0;

		if ( typeof v !== 'number' ) this._flags = ParseFlags(v);
		else this._flags = v;

	}

	get source(){return this._source;}
	set source(v){this._source=v}

	/**
	 * @property {number} level - level (strength) of dot.
	 */
	get level(){return this._level || this.source ? (this.source.level || 0 ) : 0; }
	set level(v){this._level=v;}

	/**
	 * @property {boolean} perm - dot is permanent.
	 */
	get perm(){return this._perm;}
	set perm(v) { this._perm =v}

	get type(){ return TYP_DOT}

	valueOf(){ return ( this.perm || this.duration > 0 ) ? 1 : 0; }

	canCast() { return (this._flags & NO_SPELLS) === 0 }
	canAttack() { return (this._flags & NO_ATTACK) === 0 }
	canDefend() { return (this._flags & NO_DEFEND ) === 0 }

	constructor( vars, source, name ){

		if ( vars ) assign( this, vars );

		this.source = this.source || source || null;

		this.name = name || ( source ? source.name : null );

		if ( !this.id ) console.warn('BAD DOT ID: ' + this.name );

		if ( !this.duration) {
			this.duration = 0;
			this.perm = true;
		}

		/**
		 * @property {boolean} stack - ability of dot to stack.
		 */
		if ( this.mod ){

			this.mod = ParseMods( this.mod, this.id, this );

			//SetModCounts( this.mod, this );
		}
		if ( !this.flags ) this.flags = 0;

		/*for( let p in this ) {
			if ( p === 'damage' || p =='dmg') console.log('DOT HAS DAMAGE');
		}*/


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

		} else if ( duration > this.duration ) {
			this.duration = duration;
		}

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
			if ( !this.perm ) this.duration--;

			return 1;

		}

		return 0;

	}

}