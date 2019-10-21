import Char from './char';
import Range, { RangeTest } from '../values/range';
import Stat from '../values/stat';
import Percent, { PercentTest } from '../values/percent';

/**
 * @const {number} ALLY - team constant for allies.
 */
export const TEAM_ALLY = 1;

/**
 * Class for specific Enemies/Minions in game.
 */
export default class Npc extends Char {

	toJSON() {

		let data = super.toJSON();
		data.id = this.id;

		data.cost = undefined;
		data.team = this.team||undefined;

		data.timer = this.timer;

		data.attack = this.attack;

		if ( this.template ){
			data.template = this.template.id;
			if ( this._name != this.template.name ) data.name = this._name;

		} else data.name = this._name;

		data.keep = this.keep;

		//data.died = this.died||undefined;

		return data;

	}

	/**
	 * @property {boolean} keep - whether to keep ally after combat.
	 */
	get keep(){return this._keep;}
	set keep(v) { this._keep = v;}

	get maxHp() { return this._maxHp; }
	set maxHp(v) { this._maxHp = v instanceof Stat ? v : new Stat(v, 'maxHp', true); }

	get hp() { return this._hp; }
	set hp(v) {

		if ( this._maxHp && v > this._maxHp ) v = this._maxHp.value;

		if ( this._hp ) {
			this._hp.base = v;
		} else this._hp = v instanceof Stat ? v : new Stat( v, 'hp' );

	}

	get loot() { return this._loot; }
	set loot( loot ){

		if ( typeof loot !== 'object'){
			this._loot = loot;
			return;
		}

		for( var p in loot ) {

			var sub = loot[p];
			if ( (typeof sub==='string') ) {

				if ( PercentTest.test(sub)) {

					loot[p] = new Percent(sub);

				} else if ( RangeTest.test(sub) ) {

					loot[p ] = new Range(sub);

				} else if ( !isNaN(sub) ) loot[p] = Number(sub);

			}
		}

		this._loot = loot;

	}

	get damage() { return this._damage; }
	set damage(v) {

		if ( v && !(v instanceof Range) ) {

			if ( typeof v === 'string' || typeof v === 'object') this._damage = new Range( v );
			else {

				this._damage = Number( v );
			}

		} else this._damage = v;

	}

	/**
	 * @property {number} team - side in combat.
	 */
	get team() { return this._team; }
	set team(v) { this._team=v;}

	/**
	 * @property {boolean} active - whether minion is active in combat.
	 */
	get active() { return this._active; }
	set active(v) { this._active = v; }

	constructor(vars, save=null ) {

		super( vars );

		if ( save ) Object.assign( this, save );

		this.dodge = this.dodge || this.level/2;

		this.active = this.active === undefined || this.active === null ? false : this.active;

		if ( typeof this.hp === 'string' || typeof this.hp === 'object') this.hp = new Range(this.hp);
		if ( this.hp instanceof Range ) this.hp = this.hp.value;

		this.tohit = this.tohit || 0;
		this.maxHp = this._maxHp || this._hp;

		if ( this.dmg && (this.damage===null||this.damage===undefined) ) this.damage = this.dmg;

	}

	/**
	 * Resurrect.
	 */
	res() {
		this.hp = 1;
	}

	rest(dt) {
		this.hp += 0.01*this.maxHp.value*dt;
	}

	/**
	 * @returns {number} the damage from a single attack by npc.
	 */
	getDamage() {
		return this.attack ? this.attack.getDamage() : (
			(typeof this._damage === 'number') ? this._damage : this._damage.value
		);
	}

}