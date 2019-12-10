import GData from "./gdata";
import { TEAM_ALLY } from "../chars/npc";
import { MONSTER } from "../values/consts";

const defaults = {

	level:1,
	locked:false

};

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

		if ( !super.buy ) super.buy = null;

		this.hp = this.hp || (2*this.level);
		this.speed = this.speed || this.level;
		this.tohit = this.tohit || this.level;
		this.defense = ( this.defense === null || this.defense === undefined )
								? this.level : this.defense;


	}

	amount( g, count=1 ) {
		g.create( this, false, count );
	}

	/**
	 *
	 * @param {Game} g
	 * @param {number} team
	 * @param {boolean} keep
	 */
	onCreate( g, team = TEAM_ALLY, keep=false ){

		let it = g.itemGen.npc( this );
		it.team = team;
		it.active = !keep;

		if ( keep ) {

			g.state.minions.add( it );

		} else {

			g.state.raid.addNpc( it );

		}

	}

	maxed() { return false; }

}