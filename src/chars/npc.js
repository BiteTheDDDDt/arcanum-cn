import Char from './char';
import Range, { RangeTest } from '../values/range';
import Percent, { PercentTest } from '../values/percent';
import MaxStat from '../values/maxStat';
import Attack from './attack';
import { ParseDmg } from 'values/combat'
import { assign } from 'objecty';
import { TEAM_NPC } from 'values/consts';
import { mergeClass } from '../items/base';
import Instance from '../items/instance';
import Game from '../game';
import { MakeDataList } from '../gameState';
import Context from './context';

/**
 * Class for specific Enemies/Minions in game.
 */
export default class Npc extends Char {

	toJSON() {

		let data = super.toJSON();
		data.id = this.id;

		data.cost = undefined;
		data.context = undefined;
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

	/**
	 * @property {MaxStat} hp
	 */
	get hp() { return this._hp; }
	set hp(v) {

		if ( this._hp === undefined || this._hp === null || typeof v === 'object') {
			 this._hp = v instanceof MaxStat ? v : new MaxStat(v);
		} else this._hp.set( v );

	}

	/**
	 * @property {object|string|object[]}
	 */
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

	/**
	 */
	set immune(v){
		this.immunities=v;
	}

	get damage() { return this._damage; }
	set damage(v) { this._damage = ParseDmg(v); }

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

	/**
	 * @property {DataList} spells - list of spells char can cast.
	 */
	get spells(){ return this._spells; }
	set spells(v) {
		this._spells = MakeDataList(v);
	}

	constructor(vars, save=null ) {

		super( vars );

		if ( save ) assign( this, save );

		this.dodge = this.dodge || this.level/2;

		this.active = this.active === undefined || this.active === null ? false : this.active;

		if ( this._spells ) {

			this._context = new Context( this, Game.state );
			console.log('Reviving Npc Spells');
			this.spells.revive( this._context.state );

		} else this._context = Game;

		if ( typeof this.hp === 'string' ) this.hp = new Range(this.hp).value;
		else if ( this.hp instanceof Range ) {

			this.hp = this.hp.value;
		}
		if (!this.hp ) { this.hp = 1; }
		if ( !this.team) this.team = TEAM_NPC;
		if ( !this.tohit ) this.tohit = 0;

		if ( this.dmg && (this.damage===null||this.damage===undefined) ) this.damage = this.dmg;
		if ( !this.attack ) {
			this.attack = new Attack( this.damage );
			this.damage = 0;
		}

	}

	revive(gs) {

		if ( this.spells ) this.context.state = gs;

		if ( typeof this.template === 'string') this.template = gs.getData(this.template);
		if ( this.template ) {

			//mergeSafe( this.template, this );

		}
		super.revive(gs);


	}

	/**
	 * Resurrect.
	 */
	res() {
		this.hp = 1;
	}

	/**
	 *
	 * @param {number} dt
	 */
	rest(dt) {
		this.hp += ( 0.01*this.hp.max*dt );
	}

}

mergeClass( Npc, Instance )