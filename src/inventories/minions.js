import Inventory from "./inventory";
import Events, { ALLY_DIED, ACT_CHANGED } from '../events';
import { NPC, TEAM_PLAYER} from "../values/consts";


export default class Minions extends Inventory {

	/**
	 * @deprecated - use allies.max
	 * @property {Stat} maxAllies - level max allies taken into battle.
	 */
	get maxAllies() { return this._allies.max; }
	set maxAllies(v) { this._allies.max = v;
	}

	/**
	 * @property {Inventory} - minions active in combat.
	 */
	get allies() { return this._allies; }
	set allies(v) { this._allies = v; }

	constructor(vars=null){

		super(vars);

		this.type = this.id = "minions";

		if ( !this.max ) this.max = 0;

		this._allies = new Inventory( {id:'allies', spaceProp:'level'} );

	}

	update(dt) {

		for( let i = this.items.length-1; i>= 0; i-- ) {

			var it = this.items[i];
			if ( it.active === false && it.alive ) it.rest(dt);

		}

	}

	add(m ) {

		super.add(m);

		m.team = TEAM_PLAYER;

		if ( m.active ) {
			this.setActive(m)
		}


	}

	/**
	 * Get list of Minions by id.
	 * @param {string[]} ids
	 */
	getList( ids ) {
		return this.items.filter( v=>ids.includes(v.id) );
	}

	setActive( b, active=true ) {

		if ( active === true ) {

			if ( !b.alive || !this.allies.canAdd(b) ) {
				b.active = false;
				return false;
			}
			if ( !this.allies.includes(b) ) {
				this.allies.add(b);

			}

		} else {

			this.allies.remove(b);

		}

		b.active = active;

	}

	revive( state ) {

		super.revive(state);

		if ( !this.allies.max ) { this.allies.max = Math.floor( state.player.level / 5 ); }

		var actives = [];

		for( let i = this.items.length-1; i>=0; i-- ) {

			var m = this.items[i];
			if ( m.type !== NPC ) {
				this.items.splice( i, 1 );
				continue;
			}

			if ( m.active ) { actives.push(m); }

			/** @compat */
			m.team = TEAM_PLAYER;

		}

		this.allies.items = actives;
		this.allies.calcUsed();

		this.calcUsed();

		Events.add( ALLY_DIED, this.died, this );
		Events.add( ACT_CHANGED, this.resetActives, this );

	}

	/**
	 * Reset the active list for any minions that have died,
	 * gone inactive, etc.
	 */
	resetActives() {

		/** @todo dangerous order referencing. */
		let allies = this.allies.items;

		for( let i = allies.length-1; i>=0; i-- ) {

			if ( !allies[i].active || !allies[i].alive ) {
				this.setActive( allies[i], false );
			}

		}

	}

	remove( m ) {

		super.remove(m);

		console.log('removing minion: ' + m.id );
		this.setActive( m, false );

	}

	died( m ) {

		//m.active = false;

	}

}