import Emitter from 'eventemitter3';
import {uppercase} from './util/util';

const events = new Emitter();

const EVT_COMBAT = 'combat';
/**
 * Generic game event.
 */
const EVT_EVENT = 'event';
const EVT_UNLOCK = 'unlock';
const EVT_LOOT = 'loot';
const EVT_DISABLED = 'disabled';

const COMBAT_DONE = 'combat_done';
const ENEMY_SLAIN = 'slain';
/**
 * Any character died by damage.
 */
const CHAR_DIED = 'char_died';

const ALLY_DIED = 'ally_died';

/**
 * player defeated by some stat.
 */
const DEFEATED = 'defeated';

const DAMAGE_MISS = 'damage_miss';
const ENEMY_HIT = 'enemy_hit';
const PLAYER_HIT = 'player_hit';
const LEVEL_UP = 'levelup'

const ACT_CHANGED = 'actchanged';
const ACT_IMPROVED = 'actimprove';

/**
 * stop all running actions.
 */
const STOP_ALL = 'stopall';

/**
 * Dispatched by a Runnable when it has completed.
 * It is the job of the runnable to determine when it has completed.
 */
const ACT_DONE = 'act_done';

/**
 * Action should be stopped by runner.
 */
const HALT_ACT = 'halt_act';

/**
 * Action blocked or failed.
 */
const ACT_BLOCKED = 'act_blocked';

/**
 * Triggered when Action, Skill, or Dungeon reaches max experience.
 */
const EXP_MAX = 'exp_max';

/**
 * Item with attack used. Typically spell; could be something else.
 */
const ITEM_ATTACK = 'item_atk';

/**
 * Encounter done.
 */
const ENC_DONE = 'enc_done';
const ENTER_LOC = 'enter_loc';
const EXIT_LOC = 'exit_loc';
const SET_SLOT = 'set_slot';

export { HALT_ACT, EVT_COMBAT, EVT_EVENT, SET_SLOT, EVT_UNLOCK, EXP_MAX, EVT_LOOT, ACT_DONE, ALLY_DIED, CHAR_DIED,
	ENTER_LOC, EXIT_LOC, ITEM_ATTACK, STOP_ALL,
	ACT_CHANGED, ACT_IMPROVED, ACT_BLOCKED,
	DAMAGE_MISS, ENEMY_HIT, PLAYER_HIT, DEFEATED, ENEMY_SLAIN, COMBAT_DONE, ENC_DONE, LEVEL_UP };

export default {

	log:null,

	started:false,

	init( game ) {

		this.log = game.log;
		this.game = game;

		this.clearGameEvents();

		events.addListener( EVT_LOOT, this.onLoot, this );
		events.addListener( EVT_UNLOCK, this.onUnlock, this );
		events.addListener( EVT_EVENT, this.onEvent, this );
		events.addListener( LEVEL_UP, this.onLevel, this );

		events.addListener( ACT_IMPROVED, this.actImproved, this );

		events.addListener( EVT_COMBAT, this.onCombat, this );
		events.addListener( ENEMY_SLAIN, this.enemySlain, this );
		events.addListener( DEFEATED, this.onDefeat, this );
		events.addListener( DAMAGE_MISS, this.onMiss, this );

	},

	clearGameEvents() {

		this.started = false;

		events.removeAllListeners( EVT_COMBAT );
		events.removeAllListeners( EVT_LOOT );
		events.removeAllListeners( EVT_UNLOCK );
		events.removeAllListeners( EVT_EVENT );
		events.removeAllListeners( LEVEL_UP );
		events.removeAllListeners( EXP_MAX );

		events.removeAllListeners( ACT_DONE );
		events.removeAllListeners( ACT_CHANGED );
		events.removeAllListeners( ACT_IMPROVED );
		events.removeAllListeners( ACT_BLOCKED );
		events.removeAllListeners( HALT_ACT);
		events.removeAllListeners( STOP_ALL );

		events.removeAllListeners( SET_SLOT );
		events.removeAllListeners( EVT_COMBAT );
		events.removeAllListeners( CHAR_DIED );
		events.removeAllListeners( ENEMY_SLAIN );
		events.removeAllListeners( DEFEATED );

		events.removeAllListeners( DAMAGE_MISS );

		events.removeAllListeners( ENTER_LOC );
		events.removeAllListeners( EXIT_LOC );
		events.removeAllListeners( ENC_DONE );
		events.removeAllListeners( ITEM_ATTACK );

		events.removeAllListeners( PLAYER_HIT );
		events.removeAllListeners( ENEMY_HIT );
		events.removeAllListeners( ALLY_DIED );

	},

	/**
	 * Event item event.
	 * @param {Item} it
	 */
	onEvent( it ) {
		if ( it.hidden) return;
		this.log.log( it.name, it.desc, EVT_EVENT );
	},

	onUnlock( it ) {
		if ( it.hidden) return;
		this.log.log( uppercase(it.type) + ' Unlocked: ' + it.name, null, EVT_UNLOCK );
	},

	onLoot( loot ) {
	},

	actionDone(it){
	},

	actImproved(it) {
		this.log.log( it.name + ' Improved', null, EVT_UNLOCK );
	},

	onLevel( player ) {
		this.log.log( player.name + ' Level Up!', null, EVT_EVENT );
	},

	onDefeat( locale ) {

		this.log.log( 'Retreat', '', EVT_COMBAT );

	},

	onMiss( msg ) {

		this.log.log( '', msg, EVT_COMBAT );
	},

	onCombat( title, msg) {
		this.log.log( title, msg, EVT_COMBAT );
	},

	enemySlain( enemy, attacker ) {
		this.log.log( '', enemy.name + ' slain' + ( attacker ? ' by ' + attacker.name : ''), EVT_COMBAT );
	},

	/**
	 * Dispatch only if game running.
	 * @param  {...any} params
	 */
	gfire( ...params ) {
		if ( this.started ) events.emit.apply( events, params );
	},

	/**
	 *
	 * @param {string} evt
	 */
	add( evt, listener, context ) {
		events.addListener(evt, listener, context );
	},

	/**
	 * @alias add() for Vue switch-out.
	 * @param {*} evt
	 * @param {*} f
	 * @param {*} context
	 */
	listen(evt, f, context) {
		events.addListener(evt,f,context);
	},

	/**
	 *
	 * @param  {...any} params
	 */
	dispatch( ...params ) {
		events.emit.apply( events, params );
	}


}