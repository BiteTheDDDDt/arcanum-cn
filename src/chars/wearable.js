import Base, {mergeClass} from '../items/base';
import Range from "../values/range";
import Attack from './attack';

import {mergeSafe} from "objecty";
import Mod from '../values/mod';
import { assignNoFunc } from '../util/util';
import Item from '../items/item';


export default class Wearable extends Item {

	toJSON() {

		let data = this.excludeJSON( ['material', 'kind'] ) || {};

		data.id = this.id;

		if ( !this.template ) console.warn('MISSING TEMPLATE: ' + this.id );
		else if ( typeof this.template === 'string' ) {
			data.template = this.template;
		}
		else data.template = this.template.id;

		data.name = this.name;
		data.attack = this.attack || undefined;

		data.enchants = this.enchants || undefined;
		if ( this.mod ) data.mod = this.mod;

		if ( this.material ) {
			if ( !data ) data = {};
			data.material = this.material.id;
		}

		return data ? data : undefined;

	}

	get equippable() { return true; }

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

		if ( vars ) assignNoFunc(this,vars );// Object.assign(this,vars);

		this.value = this.val = 1;

		//if ( vars ) logObj( vars, 'vars');
		//if( vars.template ) logObj( vars.template, ' template' );
		if ( !this.type ) { this.type = 'wearable'; }

	}

	maxed() { return false; }

	revive( state ) {

		if ( typeof this.material === 'string') this.material = state.getMaterial( this.material );

		if ( typeof this.template === 'string' ) this.template = state.getData( this.template );
		if ( this.template ) {

			if ( this.armor === null || this.armor === undefined ) this.armor = this.template.armor;
			// bonus applied for using item; not linked to attack.
			if ( this.tohit === null || this.tohit === undefined ) this.tohit = this.template.tohit || 0;

			if ( this.attack === null || this.attack === undefined ) this.attack = this.template.attack;

			this.type = this.template.type || this.type;

			mergeSafe( this, this.template );

		} else console.log('wearable template not found: ' + this.template );

	}

	applyMaterial( mat ) {

		if (!mat) return;

		this.material = mat;
		if ( this.armor !== null && this.armor !== undefined ) this.applyBonus( this, 'armor', mat.bonus );

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
			console.log('item tohit undefined. assign: ' + amt );
			obj[prop] = amt;
		}
		else if ( typeof cur === 'number') {
			 obj[prop] = cur + amt;
		}
		else if ( cur instanceof Range ) cur.add( amt );

	}

	equip( player ) {

		if ( this.armor ) player.defense += this.armor;
		if ( this.type === 'weapon' ) player.weapon = this;

	}

	unequip( player ) {

		if ( this.armor ) player.defense -= this.armor;
		if ( player.weapon == this ) player.weapon = null;

	}

	convertMods(v) {

		let t = typeof v;
		if ( v instanceof Mod ) {
			console.log('ALREADY MOD: ' + v );
			return v;
		}

		console.log('CONVERTING MOD: ' + this.id );
		if ( t === 'object') {

			if ( v.id ) {
				console.log('creating mod: ' );
				for( let p in v ) console.log( p + ' -> ' + v[p]);
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