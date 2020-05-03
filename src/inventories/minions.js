import Inventory, { SAVE_IDS } from "./inventory";
import Events, { TASK_REPEATED } from '../events';
import { NPC, TEAM_PLAYER} from "../values/consts";
import RValue from "../values/rvals/rvalue";


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
	 * @property {Set<string>} - summons always kept.
	 */
	get keep(){ return this._keep; }
	set keep(v){this._keep = v;}

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

		/*this.saveMode = 'custom';
		this.saveMap = SaveInstanced;*/

		this._allies = new Inventory( {id:'allies', spaceProp:'level', saveMode:SAVE_IDS} );
		this.mods = new Map();
		this.keep = new Set();

	}

	addKeep( mod ) {

		if ( typeof mod === 'string') {
			this.keep.add(mod);
		} else if ( typeof mod ==='object') {
			for( let p in mod) this.keep.add(p);
		}

	}

	/**
	 * @todo - improve this w/ NpcState/Context.
	 * @param {GData} it
	 */
	shouldKeep(it) {

		if ( this.keep.has(it.id)||this.keep.has(it.kind) ) return true;
		for( let p of it.tags ) if ( this.keep.has(p) ) return true;
		return false;

	}

	update(dt) {

		for( let i = this.items.length-1; i>= 0; i-- ) {

			let it = this.items[i];
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
		m.keep = true;

		if ( m.active ) {
			this.setActive(m)
		}

		for( let pair of this.mods ) {

			if ( m.is(pair[1] ) ) {
				//console.log('APPLY MINION MOD: ' + pair[1] );
				m.applyMods(pair[0]);
			}

		}


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

		}

		this.allies.items = actives;
		this.allies.calcUsed();

		this.calcUsed();

		//Events.add( ALLY_DIED, this.died, this );
		Events.add( TASK_REPEATED, this.resetActives, this );

	}

	/**
	 *
	 * @param {object} mods
	 */
	applyMods( mods, amt ){

		for( let p in mods ){

			var mod = mods[p];

			if ( this[p] ) {

				// own property.
				if ( this[p] instanceof RValue ) this[p].addMod(mod);
				else if ( p === 'keep' ) this.addKeep( mod );
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