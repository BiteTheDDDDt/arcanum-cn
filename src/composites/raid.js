import Events, { ENEMY_SLAIN, ACT_DONE, ITEM_ATTACK, CHAR_DIED, DEFEATED, ACT_BLOCKED, EVT_COMBAT } from '../events';

import Game from '../game';
import Combat from './combat';
import { RAID, TYP_PCT, getDelay } from '../values/consts';


/**
 * Represents an active dungeon raid.
 */
export default class Raid {

	get id() { return RAID;}

	toJSON() {

		return {
			locale:this.locale ? this.locale.id : undefined,
			combat:this.combat
		}

	}

	/**
	 * @property {string} name - name of dungeon in progress.
	 */
	get name() { return this.locale? this.locale.name : ''; }

	get cost() { return this.locale ? this.locale.cost : null; }
	get run() { return this.locale ? this.locale.run : null; }

	get exp(){ return this.locale ? this.locale.exp : 0; }
	set exp(v){

		if ( v >= this.locale.length ) {
			this.complete();
		} else this.locale.exp=v;

	}

	percent() { return this.locale ? this.locale.percent() : 0; }
	maxed() { return !this.locale || this.locale.maxed(); }

	canRun(g) { return this.locale && this.player.alive && this.locale.canRun(g) }
	canUse() { return this.locale && !this.locale.maxed(); }

	get effect() { return this.locale ? this.locale.effect : null; }
	set effect(v){}

	/**
	 * @property {number} length - length of dungeon in progress.
	 */
	get length() { return this.locale ? this.locale.length : 0; }

	get combat() { return this._combat; }
	set combat(v) { this._combat = v instanceof Combat ? v : new Combat(v); }

	get enc() { return this._combat; }
	set enc(v) {}

	get done() { return this.exp === this.length; }

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null ) {

		if ( vars ) Object.assign( this, vars);

		if ( !this._combat ) this.combat = new Combat();

		this.running = this.running || false;

		this.type = RAID;

		/**
		 * @property {Dungeon} locale - current dungeon.
		 */
		this.locale = this.locale || null;

	}

	revive( gameState ) {

		this.state = gameState;
		this.player = gameState.player;

		Events.add( ENEMY_SLAIN, this.enemyDied, this );
		Events.add( ITEM_ATTACK, this.spellAttack, this );
		Events.add( CHAR_DIED, this.charDied, this );

		if ( typeof this.locale === 'string') this.locale = gameState.getData(this.locale);

		if ( !this.locale) this.running = false;

		this.drops = gameState.drops;
		this._combat.revive( gameState );

	}

	charDied( c ) {

		if ( c !== this.player || !this.running ) return;

		if ( this.player.luck > 100*Math.random() ) {
			this.player.hp.value = Math.ceil( 0.05*this.player.hp.max );
			Events.emit( EVT_COMBAT, 'Lucky Recovery', this.player.name + ' has a close call.' );
		}

		this.emitDefeat();

	}

	emitDefeat(){
		Events.emit( DEFEATED, null );
		Events.emit( ACT_BLOCKED, this,
			this.locale && this.player.level>this.locale.level && this.player.retreat>0 );
	}

	update(dt) {

		if ( this.locale == null || this.done ) return;

		if ( this._combat.done ) {

			this.advance();
			if ( !this.done ) this.nextEnc();

		} else this._combat.update(dt);

	}

	/**
	 * Add npc to current battle.
	 * @param {*} it
	 */
	addNpc( it ){

		if ( this.running ) this._combat.addNpc(it);
	}

	/**
	 * Player-casted spell or action attack.
	 * @param {Item} it
	 */
	spellAttack( it ) {

		if ( this.locale && this.running ) this._combat.spellAttack(it);

	}

	/**
	 * Get next dungeon enemy.
	 */
	nextEnc() {

		/**
		 * @todo: maket this happen automatically.
		 */
		this.setEnemies( this.locale.getEnemy(), this.exp/this.length );

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

		this.combat.setEnemies( enemies );

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
		e = Game.itemGen.randEnemy( e, null, pct );
		if ( !e) {console.warn( 'Missing Enemy: ') }

		return e;

	}

	enemyDied( enemy, attacker ) {

		this.player.exp += Math.max( 1.5*enemy.level - this.player.level, 1 );

		//console.log('ENEMY templ: ' + (typeof enemy.template) );

		if ( enemy.template && enemy.template.id ) {

			let tmp = this.state.getData(enemy.template.id );
			if ( tmp ) {
				tmp.value++;
			}
		}

		if ( enemy.result ) Game.applyVars( enemy.result );
		if ( enemy.loot ) Game.getLoot( enemy.loot, this.drops );
		else Game.getLoot( {max:enemy.level, [TYP_PCT]:30}, this.drops );

	}

	advance() {
		this.exp += 1;
	}

	complete() {

		this.locale.exp = this.locale.length;
		this.locale.dirty = true;

		if ( this.locale.loot ) Game.getLoot( this.locale.loot, this.drops );
		if ( this.locale.result ) Game.applyVars( this.locale.result );
		if ( this.locale.once && this.locale.value == 0 ) Game.applyVars( this.locale.once );

		this.locale.value++;

		var del = Math.max( 1 + this.player.level - this.locale.level, 1 );

		this.player.exp +=	(this.locale.level)*( 15 + this.locale.length )/( 0.8*del );

		Events.emit( ACT_DONE, this, false );
		this.locale = null;

	}

	/**
	 * enter dungeon
	 * @param {Dungeon} d
	 */
	runWith( d ) {

		this.player.timer = getDelay(this.player.speed);

		if ( d != null ) {

			if ( d != this.locale ) {
				this.combat.begin();
			} else {
				this.combat.reenter();
			}

			if ( d.exp >= d.length ) {
				d.exp = 0;
			}
		}

		this.locale = d;
		if ( this.combat.done ) this.nextEnc();

	}

	hasTag(t) { return t === RAID; }
}