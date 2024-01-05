import Char from './char';
import Range, { RangeTest } from '../values/range';
import Percent, { PercentTest } from '../values/percent';
import MaxStat from '../values/maxStat';
import Attack from './attack';
import { TEAM_NPC, TYP_PCT, getDelay } from 'values/consts';
import { ParseDmg } from '../values/combatVars'
import { mergeClass } from '../items/base';
import Instance from '../items/instance';
import Game from '../game';
import { MakeDataList } from '../gameState';
import Context from './context';
import { assignPublic } from '../util/util';
import { NO_ATTACK } from './states';
import Events, { CHAR_STATE, EVT_COMBAT, RESISTED, CHAR_ACTION, STATE_BLOCK, DOT_ACTION } from '../events';

/**
 * Class for specific Enemies/Minions in game.
 */
export default class Npc extends Char {

	toJSON() {

		let data = super.toJSON() || {};
		data.id = this.id;

		data.cost = undefined;
		data.context = undefined;
		data.team = this.team||undefined;

		data.timer = this.timer;
		data.cdtimers = this.cdtimers;
		if(data.attack) delete data.attack;

		if ( this.template ){
			data.template = this.template.id;
			if ( this._name != this.template.name ) data.name = this._name;

		} else data.name = this._name;

		//data.keep = this.keep;

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

	get damage() { return this._damage; }
	set damage(v) { this._damage = ParseDmg(v); }

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

		if ( save ) assignPublic( this, save );

		//if ( this.id.includes('mecha')) console.dir(this.attack, 'post-save');

		this.dodge = this.dodge || this.level;

		if (!this.chaincast ) this.chaincast = 0.8;

		this.active = (this.active === undefined || this.active === null) ? false : this._active;

		this.context = new Context( Game.state, this );

		if ( this._spells ) {
			this.spells.revive( this._context.state );

		}


		if ( typeof this.hp === 'string' ) this.hp = new Range(this.hp).value;
		else if ( this.hp instanceof Range ) {

			this.hp = this.hp.value;
		}
		if (!this.hp ) { this.hp = 1; }

		if ( !this.team) this.team = TEAM_NPC;
		if ( !this.tohit ) this.tohit = this.level*1.5;

		if ( this.dmg && (this.damage===null||this.damage===undefined) ) this.damage = this.dmg;
		if ( !this.attack ) {
			this.attack = new Attack( this.damage );
			this.damage = 0;
		}
		if (!this.cdtimers) this.cdtimers = {}

	}

	revive(gs) {

		if ( typeof this.template === 'string') this.template = gs.getData(this.template);
		if ( this.template ) {

			this.attack = this.template.attack;
			//mergeSafe( this.template, this );

		}
		super.revive(gs);


	}

	/**
	 * Catch event. Do nothing.
	 * @param {*} g
	 */
	onUse(g){
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
		this.hp.amount( 0.01*this.hp.max*dt );
	}



	combat(dt) {

		if ( !this.alive ) return;

		this.timer -= dt;
		for (let a of Object.keys(this.cdtimers)) //decrementing the CD timers of the NPC
		{
			this.cdtimers[a]-=dt;
			if (this.cdtimers[a]<=0) delete this.cdtimers[a];
		}

		if ( this.timer <= 0 ) {

			this.timer += getDelay( this.speed );

			for(let i=this.castAmt(this.chaincast); i>0;i--)
			{
				if ( this.spells ) {
					let s;
					for(let i = 0;i<this.spells.items.length;i++){ //checking the CDs, casting the first spell available. If none are available, exits.
						 s = this.tryCast()
						 //if (this.cdtimers[s.id]) console.log(s.id, "is on cooldown of ", this.cdtimers[s.id])
						if (s&&!this.cdtimers[s.id])
						{
							//console.log("using", s.id)
							break;
						}
						else s = null;
					}
					if ( s ) {
						let a
						if(s.caststoppers) {
							for (let b of s.caststoppers)
								{
									a = this.getCause(b);
									if(a) break;
								}
							}
						if (a) {
							Events.emit( STATE_BLOCK, this, a );
						}
						else{
							let logged = false;
							if (s.cd)
							{
								this.cdtimers[s.id] = s.cd; //if a spell has a CD adds an NPC cd
							}
							if ( s.attack || s.action ) {
								Events.emit( CHAR_ACTION, s, this.context );
								logged = true;
							}			
							if ( s.mod ) { 
								this.context.applyMods( this.mod ); 
								if(!logged) {
									Events.emit( EVT_COMBAT, this.name + ' uses ' + s.name );
									logged = true;
								}
							}
							if ( s.create ) this.context.create( s.create );
							if (s.summon)
							{
								for (let smn of s.summon){
									if ( smn[ TYP_PCT ] && !smn[ TYP_PCT ].roll() ) {
										continue;
									}
									let smnid = smn.id
									let smncount = smn.count || 1
									let smnmax = smn.max || 0
									this.context.create(smnid, undefined, smncount, smnmax)
								}
							}
							if ( s.result ) {
								if(!logged) {
									Events.emit( EVT_COMBAT, this.name + ' uses ' + s.name );
									logged = true;
								}
								this.context.applyVars( s.result, 1 );
							}
							if ( s.dot ) {
								if(!logged) {
									Events.emit( EVT_COMBAT, this.name + ' uses ' + s.name );
									logged = true;
								}
								this.context.self.addDot( s.dot, s, null, this );
							}
						}
					}
				}
			}
			return this.getCause(NO_ATTACK) || this.getAttack();
		}
	}
}
mergeClass( Npc, Instance )