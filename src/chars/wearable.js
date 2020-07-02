import Attack from './attack';

import Mod from '../values/mods/mod';
import { ParseMods } from 'modules/parsing';
import Item from '../items/item';
import Instance from '../items/instance';
import { WEARABLE, ARMOR, WEAPON, ENCHANT } from '../values/consts';
import Stat from '../values/rvals/stat';
import MaxStat from '../values/maxStat';


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

		data.name = this.sname;
		data.attack = this.attack || undefined;

		if ( this.mod ) data.mod = this.mod;

		if ( this.material ) {
			if ( !data ) data = {};
			data.material = this.material.id;
		}

		return data ? data : undefined;

	}

	/**
	 * @property {number} enchants - total level of all enchantments applied.
	 */
	get enchants(){return this._enchants}
	set enchants(v){

		if ( this._enchants === undefined || this._enchants === null || typeof v === 'object') {
			this._enchants = v instanceof MaxStat ? v : new MaxStat(v, true);
	   } else this._enchants.set( v );

	}

	/**
	 * @property {Damage} dmg
	 * @alias attack.damage
	 */
	get dmg(){
		return this.damage;
	}
	/**
	 * @property {Damage} damage
	 * @alias attack.damage
	 */
	get damage() {
		return this._attack ? this._attack.damage : 0;
	}

	get equippable() { return true; }

	/**
	 * @property {Alter} material - (may be string before revive.)
	 */
	get material() { return this._material; }
	set material(v) { this._material=v;}

	/**
	 * @property {Stat} armor
	 */
	get armor(){ return this._armor; }
	set armor(v) {

		if ( this._armor ) {
			// NOTE: assign() copies _armor directly, so setter is never called. @todo fix this.
			if ( typeof this._armor === 'number') this._armor = new Stat(this._armor);
			this._armor.base = v;
		} else {
			this._armor = new Stat(v);
		}

	}

	/**
	 * @property {Attack} attack
	 */
	get attack() { return this._attack; }
	set attack(v) {

		if ( v ) {

			if ( v !== this._attack ) {

				if ( v instanceof Attack  ) {
					this._attack = v.clone();
				} else this._attack = new Attack(v);

			} else {
				if ( !(v instanceof Attack) ) this._attack = new Attack(v);
			}

		} else {
			this._attack = null;
		}

	}

	/**
	 * @property {boolean} worn
	 */
	get worn(){ return this.value > 0; }

	/**
	 * @property {string} slot
	 */
	get slot(){return this._slot; }
	set slot(v){this._slot=v;}

	/**
	 * @property {string} kind - subtype of wearable.
	 */
	get kind() { return this._kind; }
	set kind(v) { this._kind = v; }

	constructor(vars=null, save=null ){

		super( vars, save );

		this.stack = false;
		this.consume = false;

		//if ( vars ) cloneClass( vars, this );
		//if ( save ) Object.assign( this, save );

		if ( !this.enchants ) this.enchants = 0;
		if (!this.alters ) this.alters = [];

		this.value = this.val = 0;

		if ( !this.type ) {
			console.warn(this.id + ' unknown wear type: ' + this.type );
			if ( this.attack ) {
				this.type = WEAPON;
			} else if ( this.armor || this.slot != null ) this.type = ARMOR;
			else this.type = WEARABLE;
		}

		if ( this._attack ){
			this.attack = this._attack;
			if ( !this._attack.name ) this._attack.name = this.name;
		}

	}

	maxed() { return false; }

	/**
	 * @note super.revive() cannot be called here because the revive is too complex.
	 * @param {GameState} gs
	 */
	revive( gs ) {

		//console.log('reviving: ' + this.id );

		if ( typeof this.material === 'string') this.material = gs.getData( this.material );

		if ( typeof this.recipe === 'string' ) this.template = gs.getData(this.recipe );
		else if ( typeof this.template === 'string' ) this.template = gs.getData( this.template );

		if ( this.template ) {

			if ( this.armor === null || this.armor === undefined ) this.armor = this.template.armor;
			// bonus applied for using item; not linked to attack.
			if ( this.tohit === null || this.tohit === undefined ) this.tohit = this.template.tohit || 0;

			if ( this.attack === null || this.attack === undefined ) this.attack = this.template.attack;

			this.type = this.template.type || this.type;

			//mergeSafe( this, this.template );

		} else console.log('bad template: ' + this.template );

		if ( !this.level || (this.template && this.level <= this.template.level)) {

			if ( this.template && this.template.level ) this.level = this.template.level.valueOf() || 1;
			else this.level = 1;

			if ( this.material && this.material.level ) {
				console.log('MAT WITH LEVEL: ' + this.material.level );
				this.level += this.material.level.valueOf() || 0;
			}

		}

		if(typeof this.alters.includes === "function")
		//{
			if ( this.material && !this.alters.includes(this.material.id)) {
					this.alters.push(this.material.id);
			}
		//}
		

		if ( this.mod ) this.mod = ParseMods( this.mod, this.id, this );
		// @compat
		if ( !this.enchants.max ) this.calcMaxEnchants();

		/*console.log('WEARABLE LEVEL: ' + this.level + ' MAT: '+ (this.material ? this.material.level : 0 )
		 + ' base: ' + (this.template ? this.template.level : 0 ) );*/
		 //this.initAlters(gs);
	}

	/**
	 * Test if item has an enchantment.
	 * @param {string} id
	 * @returns {boolean}
	 */
	hasEnchant(id){
		return this.alters && this.alters.find( v=>v.id===id);
	}

	applyMaterial( mat ) {

		if (!mat) return;
		this.material = mat;
		console.log('APPLY MATERIAL: ' + mat.id );

		this.doAlter( mat );

	}

	/**
	 *
	 * @param {Alter} it - enchantment being added.
	 */
	doAlter( it ) {

		if ( it.type === ENCHANT || it.type === 'material') this.enchants += it.level || 0;

		console.log('APPLY ALTER: ' + it.id );

		Instance.doAlter.call( this, it );

	}

	calcMaxEnchants() {

		let max = 0;
		if ( this.template ) {

			max = this.template.enchants || 0;

		}

		console.log( this.id + ' RECALC ENCHANT max: ' + max );
		this.enchants.max = max;

	}

	/**
	 *
	 * @param {Game} g
	 */
	equip( g ) {

		let p = g.state.player;

		if ( this.armor ) p.defense.add( this.armor );
		if ( this.type === 'weapon' ) p.addWeapon(this);

		this.value = 1;
		if ( this.mod ) {

			for( let p in this.mod ) {
				console.log('apply mod: ' + p );
			}
			g.applyMods( this.mod, 1 );

		} else {
			//console.log('no mods: '+ this.id );
		}

	}

	/**
	 *
	 * @param {Game} g
	 */
	unequip( g ) {

		let p = g.state.player;

		if ( this.armor ) p.defense.add( -this.armor );
		if ( this.type === WEAPON ) p.removeWeapon( this );

		this.value = 0;

		if ( this.mod ) {
			g.removeMods(this.mod)
		}

	}

	convertMods(v) {

		let t = typeof v;
		if ( v instanceof Mod ) return v;

		if ( t === 'object') {

			if ( v.id ) {
				//console.log('new mod: ' +this.id);
				//for( let p in v ) console.log( p + ' -> ' + v[p]);
				return new Mod( v, v.id, this );
			} else {

				for( let p in v ) {
					v[p] = this.convertMods( v[p] );
				}

			}

		} else if ( t === 'string' || t==='number') return new Mod(v, this.id, this );

		return v;

	}

}