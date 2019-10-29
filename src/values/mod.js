import Percent from './percent';
import Stat from './stat';
import { splitKeyPath } from '../util/util';

//import Emitter from 'eventemitter3';

export const ModTest = /^([\+\-]?\d+\.?\d*\b)?(?:([\+\-]?\d+\.?\d*)\%)?$/i;

/**
 * Modifier for mod without id.
 */
export const DEFAULT_MOD = 'all';

/**
 * Parse object into modifiers.
 * @param {} mods
 */
export const ParseMods = ( mods, id ) => {

	/**
	 * @todo confusingly this is a string for the complete Mods object.
	 * this woudl indicate some sort of event trigger.
	 */
	if ( typeof mods === 'string' ) return mods;
	else if ( typeof mods === 'number') return new Mod( mods, id );

	for( let s in mods ){
		if ( s.includes('.')) splitKeyPath( mods, s );
	}

	for( let s in mods ) {

		var val = mods[s];
		var typ = typeof val;
		if ( typ === 'number' || (typ === 'string' && ModTest.test(val)) ) {

			val = mods[s] = new Mod(val, id);

		} else if ( val instanceof Mod ) continue;
		else if ( typ === 'object') {

			if ( val.id ) mods[s] = new Mod( val );
			else if ( val.value || val.bonus ) mods[s] = new Mod(val, id );
			else ParseMods( val, id );
		}

	}
	return mods;

}

export default class Mod extends Stat {

	toJSON(){

		var val = this._basePct === 0 ? this.base : (
			(this.base || '') + (( this._basePct > 0 ? '+' : '') + (100*this._basePct)  + '%')
		);

		//console.log('mod save val: ' + val );

		return {
			value:val,
			count:this.count
		};

	}

	toString() {

		let s = ( this.base !== 0 ?
			this.base.toString()
		: '' );


		if ( this._basePct !== 0 ) {

			if ( this.base !== 0 ) s += ', ';
			s += ( this._basePct > 0 ? '+' : '' ) + (100*this._basePct) + '%';
		}
		return s;
	}

	/**
	 * @property {string} [id=DEFAULT_MOD]
	 */
	get id() { return this._id; }
	set id(v) { this._id = v; }

	/**
	 * @property {number} [count=0] - number of times mod is applied.
	 */
	get count() { return this._count; }
	set count(v) { this._count = v; }

	/**
	 * @property {number} [pct=0] - pct as decimal.
	 */
	//get pct() { return this._pct; }
	//set pct(v) { this._pct = v; }

	/**
	 * @property {number} [bonus=0] - base modifier. (constant added bonus)
	 */
	//get base() { return this._base; }
	//set base(v) { this._base = v; }

	get value() { return super.value; }
	set value(v) {

		//console.log('assinging to mod: ' + this.id + ' val: ' + v );

		if ( typeof v ==='string' ){

			let res = ModTest.exec( v);

			if ( res ) {

				//res.forEach((v,i)=>console.log('reg['+i+']: ' + v ));
				this.base = Number(res[1]) || 0;
				this.basePct = Number(res[2])/100 || 0;

			} else console.log( this.id + ' no mod regex: ' + v );


		} else if ( v instanceof Percent ) {

			this.basePct = v.value;

		} else if ( !isNaN(v) ) {

			this.base = v;
		}

	}

	get pctTot(){return this.pct*this._count;}
	get bonusTot(){return this.bonus*this._count;}

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null, id=null ){

		super( null, id );

		if ( typeof vars === 'number') this.base = vars;
		else if ( typeof vars === 'string') this.value = vars;
		else if ( vars ) Object.assign( this, vars );

		this._count = this._count || 0;
		this.base = this.base || 0;
		this.basePct = this.basePct || 0;

		this.id = id || this.id || DEFAULT_MOD;

	}

	clone() {
		return new Mod({base:this.base, pct:this.basePct, count:1}, this.id );
	}

	/**
	 * Apply a modifier to this modifier.
	 * @todo: Can't safely apply a pct mod to a mod without adding support for recursive mods.
	 * Otherwise the pct+/- is based on the current value of the mod, so won't be constant when
	 * added/removed.
	 * @param {*} mod
	 * @param {*} amt
	 */
	/*applySelf( mod, amt=1) {

		let typ = typeof mod;
		if ( typ === 'number') {

			this.base += amt*mod;

		} else if ( mod instanceof Percent ) {

			this.base *= ( 1+ amt*mod.pct );
			this.pct *= (1+ amt*mod.pct);

		} else if ( typ === 'object') {

			//console.log( 'apply: ' +  mod.toString() );
			this.base += amt*mod.bonus || 0;

			if ( mod.pct ) {


				let pctMod = 1 + amt*( mod.pct );
				this.base *= pctMod;
				this.pct *= pctMod;
				if ( this.id === 'liquifier') {
					console.log('SELF MOD LIQ: ' + amt + ' bonus: ' + mod.bonus + ' pct: ' + mod.pct );
					console.log('NEW VALS: ' + this.base + ' pct: '+ this.pct );
				}
			}

		}

		//this.emit('change', this );

	}*/

	/**
	 * Update the modifier with additional values.
	 * @param {number|Percent|Object} mod
	 * @param {number} [amt=1]
	 */
	add( mod, amt=1 ) {

		//console.warn('CHANGING MOD: ' + this.id + ' by mod: ' + (mod.id||typeof mod) );

		let typ = typeof mod;
		if ( typ === 'number') {

			this.base += amt*mod;

		} else if ( mod instanceof Percent ) {

			this.basePct += amt*mod.pct;

		} else if ( typ === 'object') {

			if ( this.id === 'liquifier') {

				console.log('MOD LIQ: ' + amt + ' bonus: ' + mod.bonus + ' pct: ' + mod.pct );
			}

			this.base += amt*mod.bonus || 0;
			this.basePct += amt*mod.pct || 0;

		}

		//this.emit('change', this);

	}

	/**
	 * Apply this modifier to a given target.
	 * This is a one-time modify and doesnt use count total.
	 * @param {Object} obj - owner of the property being modified.
	 * @param {string} p - target property to which mod is being applied.
	 * @param {number} amt
	 */
	applyTo( obj, p, amt ) {

		let targ = obj[p];

		if ( targ instanceof Stat ) targ.addMod( this, amt );
		//else if ( targ instanceof Mod) targ.applySelf( this, amt ); ///// NO LONGER HAPPENS. superclass.
		else if ( targ === null || targ === undefined || typeof targ === 'number' ){

			console.log('MOD.applyTo() CREATE NEW MOD AT TARGET: ' + p );
			let s = obj[p] = new Stat( targ || 0, p );
			s.apply( this, amt );

		} else if ( typeof targ === 'object') {

			console.warn( this.id + ' Generic Mod Target: ' + targ.id );
			targ.value = ( ( Number(targ.value) || 0 ) + amt*this.base )*( 1 + amt*this._basePct );

			// TODO? Percent all of obj?

		}

	}

}