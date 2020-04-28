import GData from "./gdata";
import { MONSTER, TEAM_PLAYER } from "../values/consts";
import Npc from "../chars/npc";
import { NpcLoreLevels } from '../values/craftVars';

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
	amount( g, count=1 ) {

		let minions = g.getData('minions');
		g.create( this, minions.shouldKeep(this), count );

	}

	/**
	 *
	 * @param {Game} g
	 * @param {number} [team=TEAM_PLAYER]
	 * @param {boolean} [keep=false]
	 */
	onCreate( g, team = TEAM_PLAYER, keep=false ){

		//if ( team === TEAM_PLAYER ) console.log('create npc: ' + this.id );

		let it = CreateNpc(this, g);
		it.team = team;
		it.active = !keep;

		if ( keep ) {

			g.state.minions.add( it );

		} else {

			g.state.combat.addNpc( it );

		}

	}

	/**
	 * @returns {false}
	 */
	maxed() { return false; }

}