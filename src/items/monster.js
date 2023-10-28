import GData from "./gdata";
import { MONSTER, TEAM_PLAYER, TYP_PCT } from "../values/consts";
import Npc from "../chars/npc";
import Attack from '../chars/attack';
import { NpcLoreLevels } from '../values/craftVars';
import Percent from "../values/percent";

/**
 *
 * @param {object} proto
 * @param {Game} g
 * @returns {Npc}
 */
export const CreateNpc = (proto, g ) => {

	let it = new Npc( proto );
	it.value = 1;
	//
	it.name = proto.name;
	it.id = g.state.nextId(proto.id);
	return it;

}

export const genDefaultLoot = char => {
	return {
		maxlevel: char.level, 
		[TYP_PCT]: new Percent(10)
	}
}

export default class Monster extends GData {

	/**
	 * @property {true} isRecipe
	 */
	get isRecipe() {return true; }

	/**
	 * @returns {object}
	 */
	toJSON() {
		if ( this.value > 0 ) return { value:this.value};
		else return undefined;
	}
	get attack() { return this._attack; }
	set attack(v) {

		if ( Array.isArray(v)) {

			let a = [];
			for( let i = v.length-1; i>=0; i-- ) {

				a.push( (v[i] instanceof Attack) ? v[i] :
					new Attack(v[i])
				);

			}

			this._attack = a;

		} else this._attack = ( v instanceof Attack) ? v : new Attack(v);

	}
	/**
	 *
	 * @param {object} [vars=null]
	 */
	constructor(vars=null) {

		super(vars );

		this.type = MONSTER;

		if ( !this.level ) this.level = 1;

		this.hp = this.hp || (2*this.level);
		this.speed = this.speed || this.level;
		this.tohit = this.tohit || this.level;
		this.defense = ( this.defense === null || this.defense === undefined )
								? this.level : this.defense;

		this.locked = this.require ? true : false;

		if(!this.loot) this.loot = genDefaultLoot(this);

	}

	/**
	 *
	 * @param {Game} g
	 * @returns {boolean}
	 */
	canUse( g ){

		if ( this.value < 10 ) return false;

		let npcSkills = NpcLoreLevels( this.kind, g);
		if ( npcSkills < this.level ) return false;

		return super.canUse( g );

	}

	/**
	 *
	 * @param {Game} g
	 * @param {number} [count=1]
	 */
	amount( g, count ) {
		if(!count) count = 1;
		let minions = g.getData('minions');
		g.create( this, minions.shouldKeep(this), count );

	}

	/**
	 *
	 * @param {Game} g
	 * @param {number} [team=TEAM_PLAYER]
	 * @param {boolean} [keep=false]
	 */
	onCreate( g, team = TEAM_PLAYER, keep=false, max = 0 ){

		//if ( team === TEAM_PLAYER ) console.log('create npc: ' + this.id );

		let it = CreateNpc(this, g);
		it.team = team;
		it.active = !keep;

		if ( keep ) {

			g.state.minions.add( it );

		} else {
			if (g.state.combat){
				if (max>0)
				{
					if(g.state.combat.getMonsters(this.id,team).length>=max)
					{
						return null
					} else g.state.combat.addNpc( it );

				}
				else g.state.combat.addNpc( it );
				
			}
			else if (g.state.state){
				if (max>0)
				{
					if(g.state.state.combat.getMonsters(this.id,team).length>=max)
					{
						return null
					} else g.state.state.combat.addNpc( it );

				}
				else g.state.state.combat.addNpc( it );
			}
		}

	}

	/**
	 * @returns {false}
	 */
	maxed() { return false; }

}