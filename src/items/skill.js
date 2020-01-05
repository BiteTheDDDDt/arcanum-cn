import Task from './task';
import Stat from '../values/stat';
import { SKILL } from '../values/consts';
import Scaler from '../values/scaler';

const EXP_RATIO = 0.35;

/**
 * Starting exp length for skills of various level.
 * @param {number} n
 */
const levLength = (n)=>{ return 50*Math.pow( (1+EXP_RATIO), n ) }

export default class Skill extends Task {

	get exp() { return super.exp; }
	set exp(v) {
		if ( this.locked || this.maxed() || (this.buy &&!this.owned) ) return;
		super.exp = v;
	}

	showLevel(){return Math.floor( this.value ); }

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null){

		super(vars);

		this.type = SKILL;

		if ( !this.length || this.value == 0 ) this.length = levLength( this.level +this.value );
		else if ( this.value >= 1 ){

			// recheck percent lengths. (allow percent formula to change.)
			let len = levLength( this.level + this.value );
			if ( this.length > len ) this.length = len;

		}

		if ( !this.buy ) this.buy = { sp:1 };

		if ( !this.rate ) this.rate = new Stat( 0.5, this.id + '.rate' );
		if ( !this.rate.base ) this.rate.base = 0.5;

		if ( !(this.exp instanceof Scaler) ) this.ex = 0;

		if (  !this.max ) this.max = new Stat(5, this.id + '.max', true );

	}

	/**
	 * Allow buying a skill even when maxed.
	 * @param {*} g
	 */
	canBuy(g){

		if ( this.disabled || this.locked || this.locks > 0 ) return false;

		if ( this.buy && !g.canPay(this.buy) ) return false;

		return true;

	}

	changed(g) {

		if ( this.value > Math.floor(this._max.value) ) {
			this.value = Math.floor(this.max.value);
			return;
		}

		this._length += this._length*EXP_RATIO;

		this.dirty = true;

		super.changed(g);

	}

}