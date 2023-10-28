import Base, {mergeClass} from '../items/base';
import {assign} from 'objecty';

/**
 * Currently unused. Prototype for unapplied Dot.
 */
export default class ProtoDot {

	get id() { return this._id; }
	set id(v) { this._id =v;}

	get name() { return this._name; }
	set name(v) { this._name = v;}

	get value() { return this._value; }
	set value(v) { this._value=v;}

	get mod() { return this._mod; }
	set mod(v) { this._mod = v; }

	get effect() { return this._effect; }
	set effect(v) {
		this._effect = v;
	}

	/**
	 * @property {boolean} stack
	 */
	get stack() { return this._stack;}
	set stack(v) { this._stack = v; }

	constructor( vars){

		if ( vars ) assign(this, vars);

	}

	/**
	 * Apply state to char.
	 * @param {Char} char
	 * @param {Game} g
	 */
	applyTo( char, g ) {

		if ( this.mod ) char.applyMods( this.mod, g );

	}

	/**
	 * Remove state from char.
	 * @param {Char} char
	 * @param {Game} g
	 */
	remove( char, g ) {
	}

}

mergeClass( State, Base );