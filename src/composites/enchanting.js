import Game from '../game';
import Proxy from './proxy';
import { TYP_RUN, ENCHANTSLOTS } from '../values/consts';
import Stat from '../values/stat';
import { itemRevive } from '../modules/itemgen';
import {assign } from 'objecty';

/**
 * An enchantment in progress.
 * @note item is the enchantment, since the enchanment sets the base
 * cost, level, requirements, etc.
 */
export default class Enchanting extends Proxy {

	toJSON(){

		return {
			item:this.item.id,
			target:this.target,
			exp:this._exp
		};
	}

	get type() { return TYP_RUN; }

	get controller() { return ENCHANTSLOTS; }

	/**
	 * @property {?GData} target - target of the running item.
	 * may be undefined if not applicable.
	 */
	get target() { return this._target;}
	set target(v) {
		this._target = v;

	}

	get exp(){ return this._exp; }
	set exp(v) { this._exp = v; }

	get repeat() { return (this._item && this._item.repeat) || false; }

	percent() { return this._length ? Math.round(100*this._exp / this._length) : 0; }

	get length() { return this._length; }
	set length(v) { this._length = new Stat(v);}

	canRun( g ) { return !this.done && this._item && this._target && this._item.canUseOn( this._target ) }
	get done() { return this._exp >= this._length; }

	/**
	 * If target is supplied, first element MUST be the item
	 * being used with target.
	 * @param {object|GData} vars - runnable variables OR runner item.
	 * @param {*} targ
	 */
	constructor( vars=null, targ=null ) {

		super();

		if ( targ ) {

			this.target = targ;
			this.item = vars;

		} else if (vars) assign( this, vars );

		this.length = ( typeof this.item === 'object') ? this.item.length || 0 : 0;
		this.exp = this._exp || 0;

	}

	update(dt){

		this.exp += dt;

		if ( this.exp >= this.length ) {
			if ( this.target ) Game.useOn( this.item, this.target );
		}

	}

	revive( gs ) {

		super.revive(gs);

		if ( typeof this._target === 'string') this.target = gs.findData(this._target);
		else if ( typeof this._target === 'object') {

			this._target = itemRevive( gs, this._target );
		}

		if ( this.item ) {
			this._length = this.item.length;
		}

	}

}