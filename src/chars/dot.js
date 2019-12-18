import {ParseMods } from "../values/mod";
import { setModCounts } from "../items/base";
import { ParseDmg } from "values/combat";
import {mergeSafe} from 'objecty';
import { ParseFlags, NO_SPELLS, NO_ATTACK, NO_DEFEND } from "./states";
import { TYP_DOT } from "../values/consts";


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
			state:this.state||undefined,
			adj:this.adj||undefined,
			flags:this._flags!== 0 ? this._flags : undefined,
			duration:this.duration,
			source:this.source ? ( typeof this.source === 'string' ? this.source : this.source.id ) : undefined
		};

	}

	get id() { return this._id; }
	set id(v) {
		this._id =v;
	}

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
	 * @property {number} flags
	 */
	get flags(){return this._flags;}
	set flags(v) {

		this._flags = 0;

		if ( typeof v !== 'number' ) this._flags = ParseFlags(v);
		else this._flags = v;

	}

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
		if ( !this.flags ) this.flags = 0;

		for( let p in this ) {
			if ( p === 'damage' || p =='dmg') console.log('DOT HAS DAMAGE');
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

			this.perm = true;;
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

		console.log('merging dot: ' + st.id );
		mergeSafe( this, st );
		this._flags = this._flags | st.flags;

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
			if ( !this.perm ) this.duration--;

			return 1;

		}

		return 0;

	}

}