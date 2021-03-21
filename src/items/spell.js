import Attack from '../chars/attack';
import Task from './task';
import { canTarget } from '../values/consts';

/**
 * Single requirement substring.
 * @param {string} s - GData/Idable id.
 * @param {number} lvl
 */
/*const reqStr = (s,lvl=1)=>{
	return '!g.' + s + '||g.' + s + '>=' + lvl;
}*/

/**
 * Create a school unlock function.
 * @param {string|string[]} s - name(s) of school which unlocks item.
 * @param {number} lvl - spell level.
 * @param {number} ratio - multiply spell level before test.
 */

export default class Spell extends Task {

	/**
	 * @property {string} only - target type, name, kind, or tag, to which
	 * the enchantment can be applied.
	 */
	get only(){return this._only;}
	set only(v){this._only = typeof v === 'string' ? v.split(',') : v;}

	/**
	 * @property {boolean} silent - spell can be cast while silenced.
	 */
	get silent(){return this._silent;}
	set silent(v){this._silent = v;}

	get attack(){return this._attack;}
	set attack(v){

		if ( v != null ) {
			if ( !(v instanceof Attack)) v = new Attack(v);
			if ( !v.name ) v.name = this.name;
			if (!v.kind) v.kind = this.school;
		}

		this._attack = v;
	}

	get action(){return this._action;}
	set action(v){

		if ( v) {
			//console.dir(v, this.id);
			if ( !(v instanceof Attack)) v = new Attack(v);
			if ( !v.name ) v.name = this.name;
			if (!v.kind) v.kind = this.school;
		}

		this._action = v;
	}

	toJSON(){

		let data = super.toJSON();

		if ( this.owned ) data.owned = this.owned;

		return data;
	}

	constructor(vars=null) {

		super(vars);

		this.repeat = true;
		this.type = 'spell';
		this.level = this.level || 1;

		this.owned = this.owned || false;
		if ( !this.owned ) {

			if ( !this.buy ) this.buy = {};
			if ( !this.buy.arcana && this.level > 1 ) this.buy.arcana = this.level - 1;

		}

		if ( this.dot && !this.dot.id) {
			this.dot.id = this.dot.name || this.name;
		}

		if ( this.locked !== false ) {
			this.addRequire("spellbook");

		}

	}

	/**
	 *
	 * @param {GData} targ
	 */
	canUseOn(targ) {

		if ( targ.level && ( 2*this.level < targ.level) ) return false;
		return !this.only || canTarget( this.only, targ );

	}


};