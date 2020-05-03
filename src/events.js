import Emitter from 'eventemitter3';
import {uppercase} from './util/util';
import { TYP_PCT, EVENT } from './values/consts';
import { precise } from './util/format';

/**
 * @const {Emitter} events - emitter for in-game events.
 */
const events = new Emitter();

/**
 * @const {Emitter} sys - emitter for system-level events.
 * (save,load,gameLoaded, etc.)
 */
const sys = new Emitter();

export const EVT_COMBAT = 'combat';

/**
 * @event COMBAT_HIT (Char,number,attackName)
 */
export const COMBAT_HIT = 'char_hit';


/**
 * Generic game event.
 */
const EVT_EVENT = 'event';
const EVT_UNLOCK = 'unlock';
const EVT_LOOT = 'loot';
//const EVT_DISABLED = 'disabled';

const LOG_EVENT = 1;
const LOG_UNLOCK = 2;
const LOG_LOOT = 4;
export const LOG_COMBAT = 8;

export const LogTypes = {
	'event':LOG_EVENT,
	'unlock':LOG_UNLOCK,
	'loot':LOG_LOOT,
	'combat':LOG_COMBAT
};

/**
 * @const {string} TRIGGER - event indicating data defined trigger
 * occurred.
 */
export const TRIGGER = 'trigger';

/**
 * BASIC ITEM EVENTS
 */
export const TRY_BUY = 'buy';
export const TRY_USE = 'tryuse';
export const TRY_SELL = 'trysell';
export const TRY_USE_WITH = 'tryUseOn';
export const USE = 'use';

export const SET_SLOT = 'set_slot';

/**
 * @event DROP_ITEM - permanently remove an instanced item.
 */
export const DROP_ITEM = 'dropitem';

/**
 * Any character died by damage.
 */
export const CHAR_DIED = 'char_died';

export const ALLY_DIED = 'ally_died';

/**
 * @const {string} COMBAT_WON - all enemies slain in current combat.
 */
export const COMBAT_WON = 'combat_won';

export const ENEMY_SLAIN = 'slain';

/**
 * @const {string} CHAR_STATE - inform current char state.
 */
export const CHAR_STATE = 'charstate';

export const STATE_BLOCK = 'stateblock';

/**
 * player defeated by some stat.
 */
const DEFEATED = 'defeat';

const DAMAGE_MISS = 'dmg_miss';
export const IS_IMMUNE = 'is_immune';
export const RESISTED = 'resists';

/**
 * @const {string} TASK_REPEATED
 */
const TASK_REPEATED = 'taskrepeat';
const TASK_IMPROVED = 'taskimprove';

/**
 * stop all running tasks.
 */
const STOP_ALL = 'stopall';

/**
 * Dispatched by a Runnable when it has completed.
 * It is the job of the runnable to determine when it has completed.
 */
const TASK_DONE = 'taskdone';

/**
 * Action should be stopped by runner.
 */
const HALT_TASK = 'halttask';

/**
 * Action blocked or failed.
 * @event TASK_BLOCKED - obj, resumable
 */
const TASK_BLOCKED = 'taskblock';

/**
 * Item with attack used. Typically spell; could be something else.
 */
const CHAR_ACTION = 'charact';

/**
 * Completely delete item data. Use for Custom items only.
 */
const DELETE_ITEM = 'delitem';

/**
 * Encounter done.
 */
const ENC_DONE = 'encdone';
const ENC_START = 'encstart'


/**
 * New character title set.
 */
const CHAR_TITLE = 'chartitle';
/**
 * New title added but not necessarily set as main.
 */
const NEW_TITLE = 'newtitle';

/**
 * Character name changed.
 */
export const CHAR_NAME = 'charname';

const LEVEL_UP = 'levelup'

/**
 * Character class changed.
 */
const CHAR_CLASS = 'charclass';

/**
 * Player's character changed in some way
 * not covered by other events.
 */
const CHAR_CHANGE = 'charchange';

/**
 * @const {string} EVT_STAT - statistic event to send to server (kong).
 */
export const EVT_STAT = 'stat';

/**
 * @property {string} TOGGLE - toggle a task on/off.
 */
export const TOGGLE = 'toggle';

export { CHAR_TITLE, NEW_TITLE, LEVEL_UP, CHAR_CLASS, CHAR_CHANGE };

export { HALT_TASK, EVT_EVENT, EVT_UNLOCK, EVT_LOOT, TASK_DONE, CHAR_ACTION, STOP_ALL, DELETE_ITEM,
	TASK_REPEATED, TASK_IMPROVED, TASK_BLOCKED,
	DAMAGE_MISS, DEFEATED, ENC_START, ENC_DONE };

export default {

	log:null,

	init( game ) {

		this.log = game.log;
		this.game = game;

		/**
		 * @property {.<string,object>}
		 */
		this._triggers = {};

		console.log('clearGameEvents()');
		this.clearGameEvents();

		events.addListener( EVT_LOOT, this.onLoot, this );
		events.addListener( EVT_UNLOCK, this.onUnlock, this );
		events.addListener( EVT_EVENT, this.onEvent, this );
		events.addListener( LEVEL_UP, this.onLevel, this );
		events.addListener( NEW_TITLE, this.onNewTitle, this );

		events.addListener( TRIGGER, this.doTrigger, this );
		events.addListener( TASK_IMPROVED, this.actImproved, this );

		events.addListener( EVT_COMBAT, this.onCombat, this );
		events.addListener( COMBAT_HIT, this.onHit, this );

		events.addListener( CHAR_STATE, this.onCharState, this );
		events.addListener( STATE_BLOCK, this.onStateBlock, this );

		events.addListener( ENEMY_SLAIN, this.npcSlain, this );
		events.addListener( ALLY_DIED, this.npcSlain, this );

		events.addListener( DEFEATED, this.onDefeat, this );
		events.addListener( DAMAGE_MISS, this.onMiss, this );
		events.addListener( IS_IMMUNE, this.onImmune, this );
		events.addListener( RESISTED, this.onResist, this );
		events.addListener( ENC_START, this.onEnc, this );

	},

	clearGameEvents() {

		events.removeAllListeners();

	},

	/**
	 *
	 * @param {*} obj
	 */
	clearTriggers(obj) {

		let ons = obj.on;
		if ( !ons ) return;

		for( let p in ons ) {
			this.clearTrigger( p, obj );
		}

	},

	/**
	 *
	 * @param {string} trigger
	 * @param {object} obj
	 */
	clearTrigger( trigger, obj ) {

		let trigs = this._triggers.get( trigger );
		if ( trigs ) {
			trigs.delete(obj);
		}

	},

	/**
	 *
	 * @param {string} trigger
	 * @param {*} obj
	 * @param {*} result
	 */
	addTrigger( trigger, obj, result ) {

		let trigs = this._triggers.get(trigger);
		if ( !trigs ) {
			trigs = {};
			this._triggers.set( trigger, trigs);
		}

	},

	/**
	 *
	 * @param {string} trigger - data defined trigger.
	 */
	doTrigger( trigger ){

		let trigs = this._triggers[trigger];
		if ( trigs ) {

		}

	},

	/**
	 * Event item event.
	 * @param {Item|Log} it
	 */
	onEvent( it ) {
		if ( it.hide) return;
		if ( it[TYP_PCT] && !it[TYP_PCT].roll() ) return;

		this.log.log( it.name, it.desc, LOG_EVENT );
	},

	onUnlock( it ) {
		if ( it.hide || it.type === EVENT ) return;
		this.log.log( uppercase(it.typeName) + ' Unlocked: ' + it.name, null, LOG_UNLOCK );
	},

	onLoot( loot ) {

		let text = this.getDisplay(loot);

		if ( !text || Number.isNaN(text) ) return;

		this.log.log( 'LOOT', text, LOG_LOOT );

	},

	/**
	 * Get display string for item or item list.
	 * Empty and null entries are skipped.
	 * @param {string|string[]|Nameable} it
	 * @returns {string}
	 */
	getDisplay( it ) {

		if ( !it ) return null;

		if ( typeof it === 'object') {

			if ( Array.isArray(it) ) {

				let s, res = [];
				for( let i = it.length-1; i >= 0; i--) {

					s = this.getDisplay(it[i] );
					if ( s ) res.push(s);

				}

				if ( res.length > 0) return res.join( ', ');

			} else return it.name;

		} else if ( typeof it === 'string') return it;

		return null;

	},

	/**
	 *
	 * @param {*} t
	 * @param {number} len - new title number.
	 */
	onNewTitle(t, len ) {

		this.log.log( 'Title Earned: ' + uppercase(t), null, LOG_UNLOCK );

		this.dispatch( EVT_STAT, 'titles', len );

	},

	actImproved(it) {

		this.log.log( it.name + ' Improved', null, LOG_UNLOCK );
	},

	onLevel( player, lvl ) {

		this.log.log( player.name + ' Level Up!', null, LOG_EVENT );

		this.dispatch( EVT_STAT, 'level', lvl );

	},

	onDefeat( locale ) {

		this.log.log( 'RETREAT', 'Leaving '+ locale.name, LOG_COMBAT );

	},

	/**
	 *
	 * @param {Char} target
	 * @param {string} kind
	 */
	onImmune( target, kind ) {
		this.log.log( 'IMMUNE', target.name + ' immune to ' + kind, LOG_COMBAT );
	},

	onResist(target, kind) {
		this.log.log( 'RESISTS', target.name + ' resists ' + kind, LOG_COMBAT );
	},

	onMiss( msg ) {

		this.log.log( '', msg, LOG_COMBAT );
	},

	onEnc( title, msg ) {
		this.log.log( title, msg, LOG_COMBAT );
	},

	onCombat( title, msg) {

		if ( Array.isArray(msg)) {

			for( let i = 0; i < msg.length; i++ ) {

				var sub = msg[i];
				if ( sub[TYP_PCT] && sub[TYP_PCT].roll() ) {
					this.onCombat( title, sub );
					return;
				} else this.onCombat( title, sub );
			}


		} else if ( typeof msg === 'object' ) {

			this.log.log( msg.name||title, msg.desc, LOG_COMBAT );

		} else this.log.log( title, msg, LOG_COMBAT );

	},

	/**
	 * @param {string} msg
	 */
	onHit( target, dmg, resist, reduce, source ) {

		let msg = source + " hits ";
		if (resist < 0) msg += "strongly ";
		else if (resist > 0) msg += "weakly ";
		else if (resist > 1) msg += " absorbed by ";
		msg += target.name + ": "+ precise( dmg, 1 );

		/*let tot_reduce = 100*(resist + reduce);
		if (tot_reduce > 0) {

			if ( tot_reduce <= 100 ) msg += " (-" + precise(tot_reduce,1) + "%)";
			else msg += " (absorb: " + precise(tot_reduce-100, 1) + "%)";

		} else if (tot_reduce < 0) msg += " (+" + precise( -tot_reduce, 1) + "%)";*/


		this.log.log( '', msg, LOG_COMBAT);

	},

	/**
	 * Action blocked by state/reason.
	 * @param {Char} char
	 * @param {Dot} state
	 */
	onStateBlock( char, state ) {
		this.log.log( state.adj, char.name + ' is ' + state.adj, LOG_COMBAT )
	},

	/**
	 * Char has entered state.
	 * @param {Char} char
	 * @param {Dot} state
	 */
	onCharState( char, state ) {

		this.log.log( state.adj, char.name + ' is ' + state.adj, LOG_COMBAT )

	},

	/**
	 * Action blocked by state/reason.
	 * @param {Char} char
	 * @param {Dot} state
	 */
	onStateBlock( char, state ) {
		this.log.log( state.adj, char.name + ' is ' + state.adj, LOG_COMBAT )
	},

	/**
	 * Char has entered state.
	 * @param {Char} char
	 * @param {Dot} state
	 */
	onCharState( char, state ) {

		this.log.log( state.adj, char.name + ' is ' + state.adj, LOG_COMBAT )

	},

	npcSlain( enemy, attacker ) {
		this.log.log( enemy.name + ' slain',
			( attacker && attacker.name ? ' by ' + attacker.name : ''), LOG_COMBAT );
	},

	/**
	 * Dispatch a game-level event.
	 * @param  {...any} params
	 */
	emit( ...params ) {
		events.emit.apply( events, params );

	},

	/**
	 *
	 * Add game-event listener.
	 * @param {string} evt
	 */
	add( evt, listener, context ) {
		events.addListener(evt, listener, context );
	},

	/**
	 * listen for system-level events.
	 * @param {*} evt
	 * @param {*} f
	 * @param {*} context
	 */
	listen(evt, f, context) {
		sys.addListener(evt,f,context);
	},

	removeListener(evt,f){
		sys.removeListener(evt,f);
	},
	/**
	 * Dispatch a system-level event.
	 * pause,save,reload,etc.
	 * @param  {...any} params
	 */
	dispatch( ...params ) {
		sys.emit.apply( sys, params );
	}


}