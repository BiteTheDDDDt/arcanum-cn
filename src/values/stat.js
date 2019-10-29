import { precise } from '../util/format';
import { logObj } from "../util/util";

/**
 * Stat with a list of modifiers.
 */
export default class Stat {

	toJSON(){

		if ( this._basePct === 0 ) return this._base;

		let o = {
			base: this._base,
			pct:this._basePct

		};

		return o;

	}

	toString(){ return precise( this.value ); }

	/**
	 * @property {string} [id=DEFAULT_MOD]
	 */
	get id() { return this._id; }
	set id(v) { this._id = v; }

	/**
	 * @property {number} value
	 */
	get value() {
		return this._pos ? Math.max( (this._base + this._mBase)*( 1 + this._basePct + this._mPct ),0) :
		(this._base + this._mBase)*( 1 + this._basePct + this._mPct );
	}
	/** @todo */
	set value(v){}

	valueOf() {return this._pos ? Math.max( (this._base + this._mBase)*( 1 + this._basePct + this._mPct ),0) :
		(this._base + this._mBase)*( 1 + this._basePct + this._mPct );}

	get base() { return this._base; }
	set base(v) { this._base = v; }

	/**
	 * @property {number} pct - decimal percent
	 */
	get basePct() { return this._basePct; }
	set basePct(v) { this._basePct = v; }

	/**
	 * @property {number} bonus - total bonus to base, computed from mods.
	 */
	get mBase(){return this._mBase; }

	/**
	 * @property {number} pct - mod pct bonuses, as decimal.
	 */
	get mPct() { return this._mPct };

	/**
	 * @property {Object.<string,Mod>} mods - mods applied to object.
	 */
	get mods() { return this._mods; }
	set mods(v) {

		for( let p in v ) {

			var mod = v[p];
			v[p] = (mod instanceof Mod ) ? mod : new Mod( v[p] );
		}
		this._mods = v;
	}

	/**
	 * @property {boolean} pos - force positive value after mods.
	 */
	get pos(){return this._pos; }
	set pos(v) { this._pos = v;}

	/**
	 *
	 * @param {Object|number} vars
	 */
	constructor( vars=null, path, pos ) {

		if ( vars ) {

			if ( typeof vars === 'object') {

				this.base = vars.base;
				this.basePct = vars.pct;

			} else if ( !isNaN(vars) ) this.base = Number(vars);

		}

		if ( path ) this.id = path;
		if ( pos ) this.pos = pos;

		if ( !this.base ) this.base = 0;
		if ( !this.basePct ) this.basePct = 0;

		if ( !this.mods ) this.mods = {};

		this.recalc();

	}

	/**
	 * @todo
	 * @param {number} v
	 */
	set(v) { this._base = v; }

	/**
	 * Add amount to base stat.
	 * @todo
	 * @param {number} amt
	 */
	add( amt ) { this._base += amt; }

	/**
	 * Add a nonstandard modifier with no id.
	 * The modifiers are applied to the default base/pct values.
	 * The default modifier keeps a count of '1' since there is no
	 * standard amount for its bonus/pct amounts.
	 * @param {Mod|number|Percent|Object} mod
	 * @param {number} [amt=1]
	 */
	apply( mod, amt=1 ) {

		if ( mod instanceof Stat ) return this.addMod( mod, amt );

		else if ( !isNaN(mod) ) {
			this.base += amt*mod;
			return;
		} else if ( typeof mod === 'object') {

			console.error( 'RAW OBJECT MOD STAT: ' + logObj(mod) );
			/**@todo support for percents/ranges in general. */
			this.base += amt*( mod.bonus || 0 );
			this.basePct += amt*( mod.pct || 0 );

		}

		if ( this.id === 'liquifier') {

			console.log('APPLYMOD LIQ: ' + del + ' bonus: ' + mod.bonus + ' pct: ' + mod.pct );
		}

	}

	/**
	 * Add a modifier to the stat.
	 * @param {Mod} mod
	 * @param {number} [amt=1] - amount by which mod increased.
	 */
	/*addMod( mod, del=1 ) {

		this._mPct += del*mod.pct;
		this._mBase += del*mod.bonus;

		let cur = this.mods[ mod.id ];
		if ( cur === undefined ) {
			cur = this.mods[mod.id] = mod;
		}
		if ( this.id === 'liquifier') {

			console.log('ADDMOD LIQ: ' + del + ' bonus: ' + mod.bonus + ' pct: ' + mod.pct + ' :vAL: ' + this.value);
			console.log('FINAL MOD LIQ: '  + ' bonus: ' + this.bonus + ' pct: ' + this.pct + ' :basePct: ' + this.basePct);
		} else if ( mod.id ==='liquifier' && this.id.includes('managem')){
			console.log( this.id + ' aPPLY LIQ: ' + del + ' bonus: ' + mod.bonus + ' ' + mod.pct+'%  this val: ' +  this.value );
		}


	}*/

	/**
	 *
	 * @param {Mod} mod
	 * @param {number} amt
	 */
	addMod( mod, amt=1 ) {

		//this._mPct += amt*mod.pct;
		//this._mBase += amt*mod.bonus;

		this.mods[mod.id] = mod;
		this.recalc();

		/*let cur = this.mods[ mod.id ];
		if ( cur === undefined ) {
			cur = this.mods[mod.id] = mod;
		}*/
		if ( this.id === 'liquifier') {

			console.log('ADDMOD LIQ: ' + amt + ' bonus: ' + mod.bonus + ' pct: ' + mod.pct + ' :vAL: ' + this.value);
			console.log('FINAL MOD LIQ: '  + ' bonus: ' + this.bonus + ' pct: ' + this.pct + ' :basePct: ' + this.basePct);
		} else if ( mod.id ==='liquifier' && this.id.includes('managem')){
			console.log( this.id + ' aPPLY LIQ: ' + amt + ' bonus: ' + mod.bonus + ' ' + mod.pct+'%  this val: ' +  this.value );
		}


	}

	removeMod( mod ){

		let cur = this.mods[mod.id];
		if ( cur === undefined) return;

		this.mPct -= mod.pctTot;
		this.mBase -= mod.bonusTotal;

		this.mods[mod.id] = undefined;

	}

	/**
	 * Test if a mod can be applied to this stat without value becoming
	 * negative.
	 * @param {Mod} mod
	 * @param {number} amt
	 */
	canApply( mod, amt ) { return this.delValue( amt*(mod.bonus||0), amt*(mod.pct||0) )>=0; }

	/**
	 * Get the new stat value if base and percent are changed
	 * by the given amounts.
	 * @param {number} delBonus - delta base.
	 * @param {number} delPct - delta percent.
	 * @returns {number} - new stat value.
	 */
	delValue( delBonus=0, delPct=0 ) {
		return ( this._base + this._mBase + delBonus )*( 1 + this._basePct + this._mPct + delPct );
	}

	/**
	 * Recalculate the total bonus and percent applied to stat.
	 */
	recalc(){

		let bonus = 0, pct = 0;

		for( let p in this._mods ) {

			var mod = this._mods[p];

			pct += mod.count*mod.pct;
			bonus += mod.count*mod.bonus;

		}

		this._mPct = pct;
		this._mBase = bonus;

	}

}