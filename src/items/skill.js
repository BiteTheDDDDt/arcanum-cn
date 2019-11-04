import Action from './action';
import Stat from '../values/stat';
import { SKILL } from '../values/consts';

const EXP_RATIO = 0.35;

/**
 * Starting length for skills of various level.
 * @param {number} n
 */
const levLength = (n)=>{ return 50*Math.pow( (1+EXP_RATIO), n ) }

export default class Skill extends Action {

	get exp() { return super.exp; }
	set exp(v) {
		if ( this.locked || this.maxed() || (this.buy &&!this.owned) ) return;
		super.exp = v;
	}

	showLevel(){return Math.floor( this.value.valueOf() ); }

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null){

		super(vars);

		this.type = SKILL;

		if ( !this.length || this.value == 0 ) this.length = levLength( this.level +this.value.valueOf() );

		this._exp = this._exp || 0;

		/** @compat */
		if ( this.value >= 1 ){

			let len = levLength( this.level + this.value.valueOf() );
			if ( this.length > len ) {
				this.length = len;
			}

		}

		if ( !this.buy ) this.buy = { "sp":1 };

		if ( !this.rate ) this.rate = new Stat( 0.5, 'rate' );
		else if ( !this.rate.base ) this.rate.base = 0.5;

		if (  !this.max ) this.max = new Stat(5, 'max', true);

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

	exec() {

		if ( this.value > Math.floor(this._max.value) ) {
			this.value = Math.floor(this.max.value);
			return;
		}

		this._length += this._length*EXP_RATIO;

		this.dirty = true;

		super.exec();

	}

}