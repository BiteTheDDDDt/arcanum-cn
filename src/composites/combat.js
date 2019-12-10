import Game from '../game';
import Range from '../values/range';
import { TEAM_ALLY as TEAM_PLAYER } from '../chars/npc';

import Events, {
	EVT_COMBAT, ENEMY_SLAIN, ALLY_DIED,
	DAMAGE_MISS, CHAR_DIED, IS_IMMUNE, COMBAT_HIT, EVT_EVENT
} from '../events';

import { itemRevive } from '../modules/itemgen';
import { getDelay } from '../chars/char';
import Stat from '../values/stat';
import { TYP_FUNC } from '../values/consts';

const TARGET_ALL = 'all';

/**
 * @const {string} TARGET_ENEMIES - target all enemies.
 */
const TARGET_ENEMIES = 'enemies';

/**
 * @const {string} TARGET_ALLIES - target all allies.
 */
const TARGET_ALLIES = 'allies';

/**
 * @const {string} TARGET_ALLY - target single ally.
 */
const TARGET_ALLY = 'ally';

/**
 * @const {string} TARGET_SELF - target self.
 */
const TARGET_SELF = 'self';

/**
 * @const {string} TARGET_RAND - random target.
 */
const TARGET_RAND = 'rand';


/**
* Apply an attack. Attack is already assumed to have hit, but immunities,
* resistances, can still be applied.
* @param {Char} target
* @param {Object} attack
*/
export function applyAttack( target, attack, attacker = null) {

	if ( !target || !target.alive ) return;
	if ( target.isImmune(attack.kind) ) {

		Events.emit(IS_IMMUNE, target.name + ' IMMUNE to ' + attack.kind);
		return false;
	}

	applyDamage( target, attack, attacker );

	if (attack.dot) {
		target.addDot( attack.dot, attacker, attack.name );
	}

	return true;

}

export const applyDamage = ( target, attack, attacker ) => {

	let dmg = attack.damage;
	if ( !dmg) return;

	if ( dmg.type === TYP_FUNC ) {
		//let f = dmg.fn;
		dmg = dmg.fn( attacker, target, Game.state );
	}
	else dmg = dmg.value;

	if ( attacker ) dmg += attacker.getBonus( attack.kind );
	if ( attack.bonus ) dmg += attack.bonus;

	let resist = target.getResist(attack.kind);
	if (resist > 0) dmg *= (1 - resist);

	target.hp -= dmg;
	if ( target.hp <= 0 ) { Events.emit( CHAR_DIED, target, attack ); }

	Events.emit( COMBAT_HIT, target, dmg, attack.name || (attacker ? attacker.name : '') );

	if ( attack.leech && attacker ) {
		let amt = Math.floor(100 * attack.leech * dmg) / 100;
		attacker.hp += amt;
		Events.emit(EVT_COMBAT, null, attacker.name + ' steals ' + amt + ' life.');
	}

}

/**
* Convert damage object to raw damage value.
* @param {number|function|Range} dmg /
*/
export function getDamage( dmg ) {

	let typ = typeof dmg;

	if ( typ === 'object') return dmg.value;
	else if ( typ === 'number') return dmg;
	else if ( typ === 'function') return ;

	if (dmg instanceof Range) return dmg.value;
	else if ( !isNaN(dmg) || dmg instanceof Stat ) return Number(dmg);
	else if ( typeof dmg === 'function') {
	}

	console.warn('Invalid damage: ' + dmg);
	return 0;

	// TODO: invalid
	//else return dmg( this.state, this.player, this.enemy );

}

export default class Combat {

	toJSON() {

		var a = undefined;
		if ( this.allies.length > 1 ) {

			a = [];
			for( let i = 1; i < this.allies.length; i++ ) {
				var v = this.allies[i];
				a.push( v.keep ? v.id : v )
			}

		}

		return {
			enemies: this._enemies,
			allies:a
		}

	}

	/**
	 * @property {Npc[]} enemies - enemies in the combat.
	 */
	get enemies() { return this._enemies; }
	set enemies(v) {

		this._enemies = v;
	}

	/**
	 * @property {Char[]} allies - player & allies.
	 */
	get allies() { return this._allies; }
	set allies(v) { this._allies = v; }

	get done() { return this._enemies.length === 0; }

	constructor(vars = null) {

		if (vars) Object.assign(this, vars);

		if (!this._enemies) this._enemies = [];
		if ( !this.allies) this.allies = [];

	}

	revive(state) {

		this.state = state;
		this.player = state.player;

		// splices done in place to not confuse player with changed order.

		for( let i = this._enemies.length-1; i>=0; i-- ) {

			this._enemies[i] = itemRevive( state, this._enemies[i]);
			if ( !this._enemies[i] ) this._enemies.splice(i,1);


		}

		Events.add( CHAR_DIED, this.charDied, this );

		for( let i = this._allies.length-1; i>=0; i-- ) {

			var it = this._allies[i];
			if ( typeof it === 'string' ) this._allies[i] = state.minions.find( it );
			else if ( it && typeof it === 'object') this._allies[i] = itemRevive( state, it );

			if ( !this._allies[i] ) this._allies.splice(i,1);

		}

		this._allies.unshift( this.player );

	}

	/**
	 * Add an Npc to the combat
	 * @param {Npc} it
	 */
	addNpc( it ){

		it.timer = getDelay( it.speed );

		if ( it.team === TEAM_PLAYER ) {
			this._allies.push( it)
		} else this._enemies.push(it);

	}

	update(dt) {

		if ( this.player.alive === false ) return;

		var e, action;
		for( let i = this._allies.length-1; i >= 0; i-- ) {

			e = this._allies[i];
			if ( e.alive === false ) {

				/** @todo messy minion removal. */
				e.hp -= dt;
				if ( e.hp < -5 ) {
					this._allies.splice(i,1);
				}
				continue;

			}

			if ( e !==this.player) e.update(dt);
			action = e.combat(dt);
			if ( action ) this.attack( e, action );

		}

		for( let i = this._enemies.length-1; i >= 0; i-- ) {

			e = this._enemies[i];
			e.update(dt);
			if ( e.alive === false ) { this._enemies.splice(i,1); continue;}
			action = e.combat(dt);
			if ( action ) this.attack( e, action );

		}

	}

	/**
	 * Player-casted spell or action attack.
	 * @param {Item} it
	 */
	spellAttack( it ) {

		if ( this._enemies.length===0 ) {

			Events.emit(EVT_COMBAT, null, this.player.name + ' casts ' + it.name + ' at the darkness.' );

		} else this.attack( this.player, it.attack );

	}

	/**
	 * Attack a target.
	 * @param {Char} attacker - enemy attacking.
	 * @param {Object|Char} atk - attack object.
	 */
	attack( attacker, atk ) {

		if ( atk.log ) {
			Events.emit( EVT_EVENT, atk.log );
		}

		let targ = this.getTarget( attacker, atk.targets );
		if ( !targ) return;

		else if ( Array.isArray(targ)) {

			for( let i = targ.length-1; i>= 0; i-- ) {
				this.doAttack( attacker, atk, targ[i]);
			}

		} else this.doAttack( attacker, atk, targ );

	}

	/**
	 *
	 * @param {Char} attacker
	 * @param {Attack} atk
	 * @param {Char} targ
	 */
	doAttack( attacker, atk, targ ) {

		if (!targ) return;

		if ( this.tryHit( attacker, targ, atk ) ) {
			applyAttack( targ, atk, attacker );
		}

	}

	/**
	 * @param {Char} char
	 * @param {string} targets
	 * @returns {Char|Char[]|null}
	 */
	getTarget( char, targets ) {

		if ( !targets ) {

			return char.team === TEAM_PLAYER ? this.nextTarget( this._enemies ) : this.nextTarget( this.allies );

		} else if ( targets === TARGET_ENEMIES ) {

			return char.team === TEAM_PLAYER ? this._enemies : this.allies;

		} else if ( targets === TARGET_SELF ) return char;
		else if ( targets === TARGET_ALLIES ) return char.team === TEAM_PLAYER ? this.allies : this.enemies;
		else if ( targets === TARGET_RAND ) {

			let r = Math.floor( Math.random()*( this._allies.length + this._enemies.length ) );
			return ( r < this.allies.length ) ? this.nextTarget( this.allies ) : this.nextTarget( this.enemies );

		} else if ( targets === TARGET_ALL ) {

			/** @todo bad. */
			return this.allies.concat( this.enemies );

		} else if ( targets === TARGET_ALLY ) {

			return char.team === TEAM_PLAYER ? this.nextTarget( this.allies ) : this.nextTarget( this.enemies );
		}

	}

	/**
	 * @returns {Char} rand attack target
	 */
	nextTarget( a ) {

		for( let i = a.length-1; i>=0; i-- ) {
			if ( a[i].alive ) return a[i];
		}

	}

	/**
	 * Rolls an attack roll against a defender.
	 * @param {Char} attacker - attack object
	 * @param {Char} defender - defending char.
	 * @param {Object} attack - attack or weapon used to hit.
	 * @returns {boolean} true if char hit.
	 */
	tryHit( attacker, defender, attack ){

		let tohit = attacker.getHit();

		if ( attack && (attack != attacker) ) tohit += ( attack.tohit || 0 );

		if ( this.dodgeRoll( defender.dodge, tohit )) {

			Events.emit( DAMAGE_MISS, defender.name + ' dodges ' + (attack.name||attacker.name));

		} else if ( Math.random()*( 10 + tohit ) >= Math.random()*(10 + defender.defense ) ) {
			return true;
		} else {

			Events.emit( DAMAGE_MISS, attacker.name + ' misses ' + defender.name );
		}

	}

	/**
	 *
	 * @param {Npc[]} enemies
	 */
	setEnemies( enemies ) {

		this.enemies = enemies;
		if ( enemies.length>0 ){

			if ( enemies[0] ) Events.emit( EVT_COMBAT, enemies[0].name + ' Encountered' );
			else console.warn('No valid enemy');

		}

		this.setTimers();

	}

	/**
	 * readjust timers at combat start to the smallest delay.
	 * prevents waiting for first attack.
	 */
	setTimers() {

		let minDelay = this.player.timer = getDelay( this.player.speed );

		var t;
		for( let i = this.enemies.length-1; i >= 0; i-- ) {
			t = this.enemies[i].timer = getDelay( this.enemies[i].speed );
			if ( t < minDelay ) minDelay = t;
		}
		for( let i = this.allies.length-1; i >= 0; i-- ) {
			t = this.allies[i].timer = getDelay( this.allies[i].speed );
			if ( t < minDelay ) minDelay = t;
		}

		// +1 initial encounter delay.
		minDelay -= 1;

		this.player.timer -= minDelay;


		for( let i = this.enemies.length-1; i >= 0; i-- ) {
			this.enemies[i].timer -= minDelay;
		}
		for( let i = this.allies.length-1; i >= 0; i-- ) {
			this.allies[i].timer -= minDelay;
		}

	}

	/**
	 * Begin new combat encounter.
	 */
	begin() {

		this._enemies = [];

		this.allies = this.state.minions.active.slice(0);
		this.allies.unshift( this.player );

	}

	/**
	 * exponentially decreasing function. Lower is better.
	 * e^(-1/100) approx 99% (not to dodge)
	 * 1/e = 37% - might be too low.
	 * @param {number} dodge
	 * @param {number} tohit
	 * @returns {boolean} true if defender dodges.
	 */
	dodgeRoll( dodge, tohit ) {

		// higher x === better dodge.
		let x = ( tohit > dodge ? 1 : dodge - tohit )/16;

		return Math.random() > ( Math.exp( -x*x ) );

	}

	charDied( char, attacker ) {

		if ( char === this.player ) return;
		else if ( char.team === TEAM_PLAYER ) {

			Events.emit( ALLY_DIED, char );

		} else Events.emit( ENEMY_SLAIN, char, attacker );

	}

}