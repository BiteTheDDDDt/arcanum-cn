import { setModCounts} from '../items/base';
import Attack from './attack';

import {mergeSafe} from "objecty";
import Mod, { ParseMods } from '../values/mod';
import { assignNoFunc } from '../util/util';
import Item from '../items/item';
import { WEARABLE, ARMOR, TYP_RANGE } from '../values/consts';


export default class Wearable extends Item {

	toJSON() {

		let data = super.toJSON();

		if ( !this.save ) data.material = data.kind = undefined;
		data.id = this.id;

		if ( !this.template ) {

			//console.warn('MISSING TEMPLATE: ' + this.id );
			data.type = this.type;

		} else if ( typeof this.template === 'string' ) {

			data.template = this.template;

		} else data.template = this.template.id;

		data.name = this._name;
		data.attack = this.attack || undefined;

		data.enchants = this.enchants || undefined;
		if ( this.mod ) data.mod = this.mod;

		if ( this.material ) {
			if ( !data ) data = {};
			data.material = this.material.id;
		}

		return data ? data : undefined;

	}

	get busy(){return this._busy;}
	set busy(b){ this._busy=b;}

	get equippable() {
		return !this.busy;
	}

	get damage() {
		return this._attack ? this._attack.damage : undefined;
	}

	/**
	 * @property {number} enchants - total level of all enchantments applied.
	 */
	get enchants() { return this._enchants || 0; }
	set enchants(v) { this._enchants = v; }

	get material() { return this._material; }
	set material(v) { this._material=v;}

	/**
	 * @property {} armor
	 */
	get armor(){ return this._armor; }
	set armor(v) { this._armor = v; }

	get attack() { return this._attack; }
	set attack(v) {

		if ( v ) {
			this._attack = v instanceof Attack ? v.clone() : new Attack(v);
		} else {
			this._attack = null;
		}

	}

	get slot(){return this._slot; }
	set slot(v){this._slot=v;}

	/**
	 * @property {string} kind - subtype of wearable.
	 */
	get kind() { return this._kind; }
	set kind(v) { this._kind = v; }

	/*get mod() { return this._mod; }
	set mod(v) {
		this._mod = this.convertMods(v);
	}*/

	constructor(vars=null){

		super();

		this.stack = false;
		this.consume = false;
		this.busy = this.busy || false;

		if ( vars ) assignNoFunc(this,vars );// Object.assign(this,vars);

		this.value = this.val = 1;

		if ( !this.type ) { this.type = WEARABLE; }

		if ( this._attack && !this._attack.name ) this._attack.name = this.name;

	}

	maxed() { return false; }

	revive( state ) {

		if ( typeof this.material === 'string') this.material = state.getMaterial( this.material );

		if ( typeof this.recipe === 'string' ) this.template = state.getData(this.recipe );
		else if ( typeof this.template === 'string' ) this.template = state.getData( this.template );

		if ( this.template ) {

			if ( this.armor === null || this.armor === undefined ) this.armor = this.template.armor;
			// bonus applied for using item; not linked to attack.
			if ( this.tohit === null || this.tohit === undefined ) this.tohit = this.template.tohit || 0;

			if ( this.attack === null || this.attack === undefined ) this.attack = this.template.attack;

			this.type = this.template.type || this.type;

			mergeSafe( this, this.template );

		} else console.log('bad template: ' + this.template );

		if ( !this.level || (this.template && this.level <= this.template.level)) {

			if ( this.template && this.template.level ) this.level = this.template.level.valueOf() || 1;
			else this.level = 1;

			if ( this.material && this.material.level ) {
				this.level += this.material.level.valueOf() || 0;
			}

		}

		if ( this.mod ) this.mod = ParseMods( this.mod, this.id );

		/*console.log('WEARABLE LEVEL: ' + this.level + ' MAT: '+ (this.material ? this.material.level : 0 )
		 + ' base: ' + (this.template ? this.template.level : 0 ) );*/
	}

	applyMaterial( mat ) {

		if (!mat) return;

		this.material = mat;

		this.level +=  this.material.level || 0;

		if ( this.armor !== null && this.armor !== undefined ) this.applyBonus( this, ARMOR, mat.bonus );

		if ( this.attack ) {


			if ( this.attack.damage !== null && this.attack.damage !== undefined ) {
				this.applyBonus( this.attack, 'damage', mat.bonus );
			}
			if ( mat.tohit ) {
				//console.log('apply mat to: ' + this.id );
				this.applyBonus( this.attack, 'tohit', mat.tohit );
			}

		} else {

		}

	}

	/**
	 * Bonus applied by material.
	 * @param {Object} obj - object being modified.
	 * @param {string} prop
	 * @param {number|Mod} amt
	 */
	applyBonus( obj, prop, amt=0 ) {

		let cur = obj[prop];
		if ( cur === null || cur === undefined ) {
			console.log('no item tohit. make: ' + amt );
			obj[prop] = amt;
		}
		else if ( typeof cur === 'number') {
			 obj[prop] = cur + amt;
		}
		else if ( cur.type === TYP_RANGE ) cur.add( amt );

	}

	/**
	 *
	 * @param {Game} g
	 */
	equip( g ) {

		let p = g.state.player;

		if ( this.armor ) p.defense.add( this.armor );
		if ( this.type === 'weapon' ) p.weapon = this;

		if ( this.mod ) {
			setModCounts( this.mod, 1);
			g.applyMods( this.mod );
		}
	}

	/**
	 *
	 * @param {Game} g
	 */
	unequip( g ) {

		let p = g.state.player;

		console.log('UNEQP: ' + g.id );

		if ( this.armor ) p.defense.add( -this.armor );
		if ( p.weapon === this ) p.weapon = null;

		if ( this.mod ) {
			setModCounts( this.mod, 0);
			g.applyMods( this.mod );
		}

	}

	convertMods(v) {

		let t = typeof v;
		if ( v instanceof Mod ) return v;

		console.log('WORN MOD: ' + this.id );
		if ( t === 'object') {

			if ( v.id ) {
				console.log('new mod: ' +this.id);
				//for( let p in v ) console.log( p + ' -> ' + v[p]);
				return new Mod( v );
			} else {

				for( let p in v ) {
					v[p] = this.convertMods( v[p] );
				}

			}

		} else if ( t === 'string' || t==='number') return new Mod(v, this.id);

		return v;

	}

}