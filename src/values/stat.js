import Mod from "./mod";

/**
 * Stat with a list of modifiers.
 */
export default class Stat {

	toJSON(){

		if ( this._pct === 0 ) return this._base;

		let o = {
			base: this._base,
			pct:this._pct

		};


		/** @todo testing shouldn't need to save 'pos'  */
		//if ( this.pos ) o.pos = true;

		return o;

	}

	toString(){
		return this._base + (this._mPct >= 0 ? '+' : '') + (100*this._mPct) + '%';
	}

	/**
	 * @property {number} value
	 */
	get value() {
		return this._pos ? Math.max( (this._base + this._bonus)*( 1 + this._mPct ),0) :
		(this._base + this._bonus)*( 1 + this._mPct );
	}
	set value(v){}

	valueOf() {return this._pos ? Math.max( (this._base + this._bonus)*( 1 + this._mPct ),0) :
		(this._base + this._bonus)*( 1 + this._mPct );}

	get base() { return this._base; }
	set base(v) { this._base = v; }

	get pct() { return this._pct; }
	set pct(v) { this._pct = v;}

	/**
	 * @property {number} bonus - total bonus to base, computed from mods.
	 */
	get bonus(){return this._bonus; }

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
	 * @property {string} path - path or id.
	 */
	get path() { return this._path; }
	set path(v) { this._path = v;}

	/**
	 *
	 * @param {Object|number} vars
	 */
	constructor( vars=null, path, pos ) {

		if ( vars && typeof vars === 'object') {

			Object.assign( this, vars );

		} else if ( !isNaN(vars) ) this.base = Number(vars);

		if ( path ) this._path = path;
		if ( pos ) this.pos = pos;

		if ( !this.base ) this.base = 0;
		if ( !this.pct ) this.pct = 0;

		if ( !this.mods ) this.mods = {};
		else if ( this.mods.all ) {

			/**
			 * @compat
			 */
			let cur = this.mods.all;
			if ( cur.count > 0 ) {
				this._base += cur.bonus;
				this._pct += cur.pct;
			}
			delete this.mods.all;

		}

		this.recalc();

	}

	/**
	 *
	 * @param {number} v
	 */
	set(v) {
		this._base = v;
	}

	/**
	 * Add amount to base stat.
	 * @param {number} amt
	 */
	add( amt ) {
		this._base += amt;
	}

	/**
	 * Add a nonstandard modifier with no id.
	 * The modifiers are applied to the default base/pct values.
	 * The default modifier keeps a count of '1' since there is no
	 * standard amount for its bonus/pct amounts.
	 * @param {Mod|number|Percent|Object} mod
	 * @param {number} [amt=1]
	 */
	apply( mod, amt=1 ) {

		if ( mod instanceof Mod ) return this.addMod( mod, amt );

		else if ( !isNaN(mod) ) {
			this.base += amt*mod;
			return;
		} else if ( typeof mod === 'object') {

			/**@todo support for percents/ranges in general. */
			this.base += amt*( mod.bonus || 0 );
			this.pct += amt*( mod.pct || 0 );

		}

	}

	/**
	 * Add a modifier to the stat.
	 * @param {Mod} mod
	 * @param {number} [amt=1] - amount by which mod increased.
	 */
	addMod( mod, amt=1 ) {

		this._mPct += amt*mod.pct;
		this._bonus += amt*mod.bonus;

		let cur = this.mods[ mod.id ];
		if ( cur === undefined ) {
			cur = this.mods[mod.id] = mod;
		}

		cur.count += amt;

	}

	/**
	 * Test if a mod can be applied to this stat without value becoming
	 * negative.
	 * @param {Mod} mod
	 * @param {number} amt
	 */
	canApply( mod, amt ) {
		return this.delValue( amt*(mod.bonus||0), amt*(mod.pct||0) )>=0;
	}

	/**
	 * Get the new stat value if base and percent are changed
	 * by the given amounts.
	 * @param {number} delBonus - delta base.
	 * @param {number} delPct - delta percent.
	 * @returns {number} - new stat value.
	 */
	delValue( delBonus=0, delPct=0 ) {
		return ( this._base + this._bonus + delBonus )*( 1 + this._pct + this._mPct + delPct );
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
		this._bonus = bonus;

	}

}