import Game from '../game';
import Range from '../values/range';
import { TEAM_ALLY } from '../chars/npc';

import Events, {
	EVT_COMBAT, ENEMY_SLAIN, ALLY_DIED,
	DAMAGE_MISS, CHAR_DIED, IS_IMMUNE, COMBAT_HIT, EVT_EVENT
} from '../events';

import { itemRevive } from '../modules/itemgen';
import { getDelay } from '../chars/char';

/**
 * @const {string} TARGET_ENEMIES - target all enemies.
 */
const TARGET_ENEMIES = 'enemies';

/**
 * @const {string} TARGET_ALLIES - target all allies.
 */
const TARGET_ALLIES = 'allies';

/**
 * @const {string} TARGET_SELF - target self.
 */
const TARGET_SELF = 'self';

/**
 * @const {string} TARGET_RAND - random target.
 */
const TARGET_RAND = 'rand';


/**
* Attempt to damage a target. Made external for use by dots, other code.
* @param {Char} target
* @param {Object} attack
*/
export function tryDamage( target, attack, attacker = null) {

	if ( !target || !target.alive ) return;
	if ( target.isImmune(attack.kind) ) {

		Events.emit(IS_IMMUNE, target.name + ' IMMUNE to ' + attack.kind);
		return false;
	}


	if (attack.damage ) {

		if ( !attack.getDamage){ console.error( 'NO DMG FUNC: ' + attack ); }
		// add optional base damage from attacker.

		/** @compat */
		let dmg = attack.getDamage();
		if ( (attacker && (attacker !== attack) && attacker.damage) ) {
			dmg += attacker.getDamage( attack.kind );
		}

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

	if (attack.dot) {
		target.addDot( attack.dot, attacker, attack.name );
	}

	return true;

}

export function applyDamage(target, attack, attacker = null) {
}

/**
* Convert damage object to raw damage value.
* @param {number|function|Range|Attack} dmg /
*/
export function getDamage(dmg) {

	if (dmg instanceof Range) return dmg.value;
	else if (!isNaN(dmg)) return Number(dmg);
	console.log('Damage undefined: ' + dmg);
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

	get complete() { return this._enemies.length === 0; }

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

	addNpc( it ){

		it.timer = getDelay( it.speed );

		if ( it.team === TEAM_ALLY ) {
			this._allies.push( it)
		} else this._enemies.push(it);

	}

	update(dt) {

		if ( this._enemies.length === 0 || this.player.alive === false ) return;

		var e, action;
		for( let i = this._allies.length-1; i >= 0; i-- ) {

			e = this._allies[i];
			if ( e.alive === false ) {

				e.hp -= dt;
				if ( e.hp < -5 ) {
					this._allies.splice(i,1);
				}
				continue;

			}

			if ( e !==this.player) e.update(dt);
			action = e.combat(dt);
			if ( action ) this.attack( e, action, this._enemies );

		}

		for( let i = this._enemies.length-1; i >= 0; i-- ) {

			e = this._enemies[i];
			e.update(dt);
			if ( e.alive === false ) { this._enemies.splice(i,1); continue;}
			action = e.combat(dt);
			if ( action ) this.attack( e, action, this._allies );

		}

	}

	/**
	 * Player-casted spell or action attack.
	 * @param {Item} it
	 */
	spellAttack( it ) {

		if ( this._enemies.length===0 ) {

			Events.emit(EVT_COMBAT, null, this.player.name + ' casts ' + it.name + ' at the darkness.' );

		} else this.attack( this.player, it.attack, this.enemies );

	}

	/**
	 * Attack a target.
	 * @param {Char} attacker - enemy attacking.
	 * @param {Object|Char} atk - attack object.
	 * @param {Char[]} targs - potential targets.
	 */
	attack( attacker, atk, targs ) {

		if ( atk && atk.log ) {
			Events.emit( EVT_EVENT, atk.log );
		}

		if ( atk && atk.targets === TARGET_ENEMIES ) {

			targs.forEach( v => v.alive? this.doAttack(attacker, atk, v):null );

		} else this.doAttack( attacker, atk, this.nextTarget( targs ) );

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
			tryDamage( targ, atk, attacker );
		}

	}

	/**
	 *
	 * @param {Char} char
	 * @param {string} targets
	 * @returns {Char|Char[]|null}
	 */
	getTarget( char, targets ) {

		if ( !targets ) {

			return char.team === TEAM_ALLY ? this.nextTarget( this._enemies ) : this.nextTarget( this.allies );

		} else if ( targets === TARGET_ENEMIES ) {

			return char.team === TEAM_ALLY ? this._enemies : this.allies;

		} else if ( targets === TARGET_SELF ) return char;
		else if ( targets === TARGET_RAND ) {

			let r = Math.floor( Math.random()*( this._allies.length + this._enemies.length ) );
			return ( r < this.allies.length ) ? this.nextTarget( this.allies ) : this.nextTarget( this.enemies );

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

	setEnemies( enemy, pct ) {

		var enemies = [];
		var e;

		if (  Array.isArray(enemy)){

			for( let i = enemy.length-1; i >=0; i-- ) {
				e = this.makeEnemy( enemy[i], pct);
				if ( e ) enemies.push(e);
			}

		} else {

			e = this.makeEnemy(enemy, pct);
			if ( e ) enemies.push(e);

		}

		if ( enemies.length>0 && enemies[0]) Events.emit( EVT_COMBAT, enemies[0].name + ' Encountered' );

		this.enemies = enemies;
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
	 * Retrieve enemy template data from enemy string or build object.
	 */
	makeEnemy( e, pct=1 ) {

		if ( typeof e === 'string' ) {

			e = Game.getData(e);
			if ( e ) return Game.itemGen.npc(e);

		}
		if ( !e ) return null;

		// generate enemy from parameters.
		e = Game.itemGen.randEnemy( e, pct );
		if ( !e) {console.warn( 'Missing Enemy: ') }

		return e;

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
		else if ( char.team === TEAM_ALLY ) {

			Events.emit( ALLY_DIED, char );

		} else Events.emit( ENEMY_SLAIN, char, attacker );

	}

}