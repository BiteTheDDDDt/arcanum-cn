import Events, { DEFEATED, TASK_DONE, ENC_START, TASK_BLOCKED, ENEMY_SLAIN, CHAR_DIED, EVT_COMBAT } from "../events";
import { assign } from 'objecty';
import Game from '../game';
import { EXPLORE, getDelay, TYP_PCT, ENCOUNTER } from "../values/consts";
import Encounter from "../items/encounter";
import { Locale } from "../items/locale";

/**
 * Controls locale exploration.
 */
export default class Explore {

	/**
	 * @property {string}
	 */
	get id() { return EXPLORE; }

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

	get baseTask() { return this.locale }

	/**
	 * @returns {number}
	 */
	percent() { return this.locale ? this.locale.percent() : 0; }

	/**
	 * @returns {boolean}
	 */
	maxed() {
		return !this.locale || this.locale.maxed();
	}

	/**
	 * @returns {boolean}
	 */
	canUse() { return this.locale && !this.locale.maxed(); }

	/**
	 * @returns {boolean}
	 */
	canRun(g) { return this.locale && !this.player.defeated() && this.locale.canRun(g); }

	/**
	 * @property {object} effect - might be used by runner to apply effect?
	 */
	get effect() { return this.locale ? this.locale.effect : null; }
	set effect(v){}

	/**
	 * @property {number} length - length of locale in progress.
	 */
	get length() { return this.locale ? this.locale.length : 0; }

	/**
	 * @property {Encounter|Combat} enc - current encounter, or combat.
	 */
	get enc() { return this._enc; }
	set enc(v) {
		this._enc = v;
	}

	/**
	 * @property {Combat}
	 */
	get combat() { return this._combat; }
	set combat(v) { this._combat = v; }

	/**
	 * @property {boolean} running
	 */
	get running(){ return this._running; }
	set running(v) {
		this._running = v;
		if ( this.combat ) this.combat.active = v && (this.enc === this.combat );

	}

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
		//Events.add( COMBAT_WON, this.nextEnc, this );

		if ( typeof this.locale === 'string') {
			let loc = gs.getData(this.locale);
			// possible with save of deleted Locales.
			if ( !( loc instanceof Locale ) ) this.locale = null;
			else this.locale = loc;

		} else this.locale = null;

		if ( this._enc ) {
			this.enc = gs.getData(this._enc);
		}

		this.drops = gs.drops;
		this.combat = gs.combat;

	}

	/**
	 *
	 * @param {Locale} locale - locale to explore.
	 */
	runWith( locale ) {

		this.player.timer = getDelay( this.player.speed );

		if ( locale != null ) {

			if ( locale != this.locale ) {
				this.enc = null;
				this.combat.reset();
				locale.exp = 0;

			} else {

				this.combat.reenter();
				if ( this.enc && this.enc.done ) this.nextEnc();

				if ( locale.exp >= locale.length ) {
					locale.exp = 0;
				}

			}

		} else {

			this.enc = null;
			this.combat.reset();

		}

		this.locale = locale;

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

	update(dt) {

		if ( this.locale == null || this.done ) return;

		if ( this.enc === null ) this.nextEnc();
		else {

			//@todo TODO: hacky.
			if ( this.enc !== this.combat ) this.player.explore(dt);

			this.enc.update( dt );
			if ( this.player.defeated() ) {

				Events.emit( DEFEATED, this );
				Events.emit( TASK_BLOCKED, this, true );

			} else if ( this.enc.done ) {

				this.encDone( this.enc );
				this.exp += 1;

			}
		}

	}

	nextEnc(){

		if ( !this.locale ) return;
		// get random encounter.
		this.player.timer = getDelay( this.player.speed );
		var e = this.locale.getEncounter();

		if ( e !== null ) {

			if ( e.type === ENCOUNTER ) {

				this.enc = e;

				e.exp = 0;
				Events.emit( ENC_START, e.name, e.desc );

			} else {

				// Combat Encounter.
				this.combat.setEnemies( e, this.exp/this.length );
				this.enc = this.combat;

			}

		}
		this.combat.active = (this.combat === this.enc );


	}

	/**
	 * encounter complete.
	 * @param {Encounter} enc
	 */
	encDone( enc ) {

		//console.log('ENEMY templ: ' + (typeof enemy.template) );

		if ( enc !== this.combat ) {

			this.player.exp += 0.75 + Math.max( enc.level - this.player.level, 0 );

			enc.value++;

			if ( enc.result ) Game.applyVars( enc.result );
			if ( enc.loot ) Game.getLoot( enc.loot, this.drops );
			enc.exp = enc.length;

		}
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

	complete() {

		this.locale.amount(1);

		var del = Math.max( 1 + this.player.level - this.locale.level, 1 );

		this.player.exp +=	(this.locale.level)*( 15 + this.locale.length )/( 0.8*del );

		Events.emit( TASK_DONE, this, false );

		this.enc = null;
		this.locale = null;

	}

	hasTag(t) { return t===EXPLORE; }

}