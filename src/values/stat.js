import Mod, {DEFAULT_MOD} from "./mod";

/**
 * Stat with a list of modifiers.
 */
export default class Stat {

	toJSON(){

		let o = { base: this._base };
		let def = this._mods[DEFAULT_MOD];
		if ( def !== undefined ) o.mods = { [DEFAULT_MOD]:def};

		if ( this.pos ) o.pos = true;

		return o;

	}

	/**
	 * @returns {Object} JSON Object with only the default modifier
	 * included in the mods list. Use this when the other modifiers
	 * can be recomputed on load.
	 */
	/*defaultJSON() {

		return {
			base:this._base,
			mods:{ DEFAULT_MOD:this._mods[DEFAULT_MOD] }
		};

	}*/

	toString(){
		return this._base + (this._pct >= 0 ? '+' : '') + (100*this._pct) + '%';
	}

	/**
	 * @property {number} value
	 */
	get value() {
		return this._pos ? Math.max( (this._base + this._bonus)*( 1 + this._pct ),0) :
		(this._base + this._bonus)*( 1 + this._pct );
	}
	set value(v){}

	valueOf() {return this._pos ? Math.max( (this._base + this._bonus)*( 1 + this._pct ),0) :
		(this._base + this._bonus)*( 1 + this._pct );}

	get base() { return this._base; }
	set base(v) {
		this._base = v;
	}

	/**
	 * @property {number} bonus - total bonus to base.
	 */
	get bonus(){return this._bonus; }

	/**
	 * @property {number} pct - total pct bonus, as a decimal.
	 */
	get pct() { return this._pct };

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
	constructor( vars=null, pos ) {

		if ( typeof vars === 'object') {

			if ( vars ) Object.assign( this, vars );

		} else if ( !isNaN(vars) ) this._base = Number(vars);

		if ( pos ) this.pos = pos;

		this._base = this._base||0;

		this.mods = this.mods || {};
		this.recalc();

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

		//console.log('apply default mod: ' + mod );
		let cur = this.defaultMod();

		let prevBonus = cur.bonus;
		let prevPct = cur.pct;

		cur.add( mod, amt );

		// save and update change.
		this._bonus += cur.bonus - prevBonus;
		this._pct += cur.pct - prevPct;

	}

	/**
	 * Add a modifier to the stat.
	 * @param {Mod} mod
	 * @param {number} [amt=1] - amount by which mod increased.
	 */
	addMod( mod, amt=1 ) {

		this._pct += amt*mod.pct;
		this._bonus += amt*mod.bonus;

		//console.log( mod.id + ' MOD: ' + mod.toString() + ' x' + amt );

		let cur = this.mods[ mod.id ];
		if ( cur === undefined ) {
			cur = this.mods[mod.id] = mod;
		}

		cur.count += amt;

	}

	/**
	 * Get or create the default stat modifier.
	 * The modifier count begins and stays at '1' because only its
	 * bonuses and percents change.
	 * @returns {Mod}
	 */
	defaultMod(){

		let cur = this.mods[DEFAULT_MOD];
		return (cur!==undefined) ? cur : (this.mods[DEFAULT_MOD] = new Mod( {count:1}) );

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
		return ( this._base + this._bonus + delBonus )*( 1 + this._pct + delPct );
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

		this._pct = pct;
		this._bonus = bonus;

	}

}