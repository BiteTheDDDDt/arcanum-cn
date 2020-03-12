import GData from "./gdata";
import { MONSTER, TEAM_PLAYER } from "../values/consts";
import Npc from "../chars/npc";
import { NpcLoreLevels } from '../values/craftVars';

const defaults = {

	level:1

};

export const CreateNpc = (proto, g ) => {

	let it = new Npc( proto );
	it.value = 1;
	//
	it.name = proto.name;
	it.id = g.state.nextId(proto.id);
	return it;

}

export default class Monster extends GData {

	get defaults() { return defaults; }

	get isRecipe() {return true; }

	toJSON() {
		if ( this.value > 0 ) return { value:this.value};
		else return undefined;
	}

	constructor(vars=null) {

		super(vars, defaults );

		this.type = MONSTER;

		this.hp = this.hp || (2*this.level);
		this.speed = this.speed || this.level;
		this.tohit = this.tohit || this.level;
		this.defense = ( this.defense === null || this.defense === undefined )
								? this.level : this.defense;

		this.locked = this.require ? true : false;

	}

	canUse( g ){

		if ( this.value < 10 ) return false;

		let npcSkills = NpcLoreLevels( this.kind, g);
		if ( npcSkills < this.level ) return false;

		return super.canUse( g );

	}

	amount( g, count=1 ) {

		let minions = g.getData('minions');
		g.create( this, minions.shouldKeep(this), count );

	}

	/**
	 *
	 * @param {Game} g
	 * @param {number} team
	 * @param {boolean} keep
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

	maxed() { return false; }

}