import Events, { DEFEATED, TASK_DONE, ENC_START, TASK_BLOCKED, ENEMY_SLAIN, CHAR_DIED, EVT_COMBAT } from "../events";
import { assign } from 'objecty';
import Game from '../game';
import { EXPLORE, getDelay } from "../values/consts";
import Encounter from "../items/encounter";
import Locale from "../items/locale";

/**
 * Controls locale exploration.
 */
export default class Explore {

	/**
	 * @property {string}
	 */
	get id() { return EXPLORE;}

	toJSON() {

		let enc = this.enc;

		return {
			locale:this.locale ? this.locale.id : undefined,
			enc:enc ? enc.id : undefined
		}

	}

	/**
	 * @property {string} name - name of locale in progress.
	 */
	get name() { return this.locale? this.locale.name : ''; }

	/**
	 * @property {object|string}
	 */
	get cost() { return this.locale ? this.locale.cost : null; }

	/**
	 * @property {object|string}
	 */
	get run() { return this.locale ? this.locale.run : null; }

	get exp(){ return this.locale ? this.locale.exp : 0; }
	set exp(v){

		this.locale.exp.set(v);
		if ( v >= this.locale.length ) this.complete();

	}

	/**
	 * @returns {number}
	 */
	percent() { return this.locale ? this.locale.percent() : 0; }

	/**
	 * @returns {boolean}
	 */
	maxed() { return !this.locale || this.locale.maxed(); }

	/**
	 * @returns {boolean}
	 */
	canUse() { return this.locale && !this.locale.maxed(); }

	/**
	 * @returns {boolean}
	 */
	canRun(g) { return this.locale && !this.player.defeated() && this.locale.canRun(g); }

	get effect() { return this.locale ? this.locale.effect : null; }
	set effect(v){}

	get encs() { return this.locale ? this.locale.encs : null; }

	/**
	 * @property {number} length - length of locale in progress.
	 */
	get length() { return this.locale ? this.locale.length : 0; }

	get enc() { return this._enc; }
	set enc(v) { this._enc = v; }

	/**
	 * @property {Combat}
	 */
	get combat() { return this._combat; }
	set combat(v) { this._combat = v; }

	/**
	 * @property {boolean} running
	 */
	get running(){ return this._running; }
	set running(v) { this._running = v; }

	/**
	 * @property {boolean} done
	 */
	get done() { return this.exp === this.length; }

	/**
	 *
	 * @param {?Object} [vars=null]
	 */
	constructor( vars=null ) {

		if ( vars ) assign( this, vars);

		this.running = false;

		this.type = EXPLORE;

		// reactivity.
		this._enc = this._enc || null;

		/**
		 * @property {Locale} locale - current locale.
		 */
		this.locale = this.locale || null;

	}

	revive( gs ) {

		this.state = gs;
		this.player = gs.player;
		this.spelllist = gs.getData('spelllist');

		Events.add( ENEMY_SLAIN, this.enemyDied, this );
		Events.add( CHAR_DIED, this.charDied, this );

		if ( typeof this.locale === 'string') {
			let loc = gs.getData(this.locale);
			// possible with save of deleted Locales.
			if ( !loc || !( loc instanceof Locale ) ) this.locale = null;
		}

		if ( this._enc ) {

			if ( typeof this._enc === 'string' ) this.enc = gs.getData(this._enc);
			else {
				/** @compat */
				this.enc = gs.getData( this.enc.id );
			}

		}

		this.drops = gs.drops;
		this.combat = gs.combat;

	}

	runWith( d ) {

		this.player.timer = getDelay( this.player.speed );

		if ( d != null ) {

			if ( d != this.locale ) {
				this.enc = null;
				this.combat.begin();

			} else {
				this.combat.reenter();
			}
			this.combat.active = true;

			if ( d.exp >= d.length ) {
				d.exp = 0;
			}
		}

		if ( this.combat.done ) this.nextEnc();

		this.locale = d;

	}

	charDied( c ) {

		if ( c !== this.player || !this.running ) return;

		if ( this.player.luck > 100*Math.random() ) {
			this.player.hp.value = Math.ceil( 0.05*this.player.hp.max );
			Events.emit( EVT_COMBAT, 'Lucky Recovery', this.player.name + ' had a close call.' );
		}

		this.emitDefeat();

	}

	emitDefeat(){
		Events.emit( DEFEATED, this.locale );
		Events.emit( TASK_BLOCKED, this,
			this.locale && this.player.level>this.locale.level && this.player.retreat>0 );
	}

	/**
	 * try casting spell from player spelllist.
	*/
	tryCast(){

		if ( !this.spelllist.canUse(Game) ) return false;
		return this.spelllist.onUse(Game);

	}

	update(dt) {

		if ( this.locale == null || this.done ) return;

		/*TODO TODO TODO if ( this._combat.done ) {
			this.advance();
			if ( !this.done ) this.nextEnc();
		} else this._combat.update(dt);*/

		if ( !this.enc ) this.nextEnc();
		else {

			this.player.timer -= dt;
			if ( this.player.timer <= 0 ) {

				this.player.timer += getDelay( this.player.speed )

				// attempt to use cast spell first.
				if ( this.spelllist.count > 0 ) {
					this.tryCast();
				}

			}

			this.enc.update( dt );
			if ( this.player.defeated() ) {

				Events.emit( DEFEATED, this );
				Events.emit( TASK_BLOCKED, this, true );

			} else if ( this.enc.done ) {

				this.encDone( this.enc );
				this.advance();

			}
		}

	}

	nextEnc(){

		/**
		 * @todo: Combat integration.
		 */
		//this.combat.setEnemies( this.locale.getSpawn(), this.exp/this.length );

		if ( !this.locale ) return;
		// get random encounter.
		this.player.timer = getDelay( this.player.speed );
		var e = this.locale.getEncounter();

		if ( typeof e === 'string') {

			var it = this.state.getData(e);

			if ( it ){

				Events.emit( ENC_START, it.name, it.desc );
				this._enc = it;
				it.exp = 0;

			} else console.warn('MISSING ENCOUNTER: ' + e );

		}

	}

	/**
	 * encounter complete.
	 * @param {Encounter} enc
	 */
	encDone( enc ) {

		this.player.exp += 0.75 + Math.max( enc.level - this.player.level, 0 );

		//console.log('ENEMY templ: ' + (typeof enemy.template) );

		enc.value++;

		if ( enc.result ) Game.applyVars( enc.result );
		if ( enc.loot ) Game.getLoot( enc.loot, Game.state.drops );

		enc.exp = 0;
		this.enc = null;

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
		else Game.getLoot( {maxlevel:enemy.level, [TYP_PCT]:30}, this.drops );

	}

	/**
	 * advance locale progress.
	 */
	advance() {
		this.exp += 1;
	}

	complete() {

		this.locale.value++;
		this.locale.changed( Game ,1);

		var del = Math.max( 1 + this.player.level - this.locale.level, 1 );

		this.player.exp +=	(this.locale.level)*( 15 + this.locale.length )/( 0.8*del );

		Events.emit( TASK_DONE, this, false );

		this.enc = null;
		this.locale = null;

	}

	hasTag(t) { return t===EXPLORE; }

}