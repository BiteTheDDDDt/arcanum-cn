import Inventory from "./inventory";
import Events, { ACT_CHANGED } from '../events';
import { NPC, TEAM_PLAYER} from "../values/consts";
import RValue from "../values/rvalue";


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

	/**
	 * @property {Map.<object,string>} mods - mods applied to added minions
	 * by kind,tag,name, etc.
	 * the mod/path object has to map to the mod tag, since tags are not unique.
	 */
	get mods(){ return this._mods; }
	set mods(v){this._mods =v;}

	constructor(vars=null){

		super(vars);

		this.type = this.id = "minions";

		if ( !this.max ) this.max = 0;

		this._allies = new Inventory( {id:'allies', spaceProp:'level'} );
		this.mods = new Map();

	}

	update(dt) {

		for( let i = this.items.length-1; i>= 0; i-- ) {

			var it = this.items[i];
			if ( it.active === false && it.alive ) it.rest(dt);

		}

	}

	/**
	 * Unique access point for adding minion.
	 * @param {*} m
	 */
	add(m ) {

		super.add(m);

		m.team = TEAM_PLAYER;

		if ( m.active ) {
			this.setActive(m)
		}

		for( let pair of this.mods ) {

			if ( m.is(pair[1] ) ) {
				m.applyMod(pair[0]);
			}

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
			m.team = TEAM_PLAYER;

		}

		this.allies.items = actives;
		this.allies.calcUsed();

		this.calcUsed();

		//Events.add( ALLY_DIED, this.died, this );
		Events.add( ACT_CHANGED, this.resetActives, this );

	}

	/**
	 *
	 * @param {object} mods
	 */
	applyMods( mods, amt ){

		for( let p in mods ){

			var mod = mods[p];

			if ( this[p] ) {
				if ( this[p] instanceof RValue ) this[p].addMod(mod);
				else this[p].applyMods( mod );
			} else if ( this.mods.has(mod) ) continue;
			else {

				this.mods.set( mod, p );
				for( let it of this.items ) {

					if ( it.is(p) ) {
						it.applyMods( mod, amt );
					}

				}

			}

		}

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

	/**
	 *
	 * @param {Npc} m
	 */
	remove( m ) {

		super.remove(m);

		console.log('removing minion: ' + m.id );
		// @note mods are not removed here.
		this.setActive( m, false );

	}

	/**
	 * Apparently does nothing.
	 * @param {Npc} m
	 */
	died( m ) {
		//m.active = false;
	}

}