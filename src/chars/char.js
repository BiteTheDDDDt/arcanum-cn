import Base, {mergeClass} from '../items/base';
import Stat from '../values/rvals/stat';
import Attack from './attack';
import Dot from './dot';
import { cloneClass, mergeSafe } from 'objecty';

import { NPC, getDelay, TYP_PCT, TYP_STATE } from '../values/consts';
import { toStats } from "../util/dataUtil";
import Events, { CHAR_STATE, EVT_COMBAT, RESISTED } from '../events';
import States, { NO_ATTACK } from './states';

import { ApplyAction } from '../values/combatVars';
import { assignNoFunc } from '../util/util';

export default class Char {

	get defense() { return this._defense; }
	set defense(v) {

		if ( !this._defense ) {
			this._defense = new Stat(v, this.id + '.defense');
		} else {
			this._defense.set(v);
		}

	}

	get tohit() { return this._tohit; }
	set tohit(v) {

		if ( !this._tohit){this._tohit = new Stat(v, this.id + '.tohit');
		} else { this._tohit.set(v); }

	}

	get resist() { return this._resist };
	set resist(v) { this._resist = v; }

	get speed() { return this._speed; }
	set speed(v) {
		if (!this._speed) this._speed = new Stat(v, this.id + '.speed');
		else this._speed.set(v);
	}

	/**
	 * @property {number} team - side in combat.
	 */
	get team() { return this._team; }
	set team(v) { this._team=v;}

	/**
	 * @alias immunities
	 * @property {object<string,Stat>} immune
	 */
	set immune(v){
		this.immunities=v;
	}

	/**
	 * @property {.<string,Stat>} immunities
	 */
	get immunities(){
		return this._immunities;
	}
	set immunities(v) {

		if ( typeof v === 'string') {

			this._immunities = {};
			var a = v.split(',');
			for( let i in a ) {
				this.addImmune( a[i] );
			}

			return;
		}

		for( let p in v ) {

			var val = v[p];
			if ( !(val instanceof Stat) ) v[p] = new Stat(val);

		}

		this._immunities=v;
	}

	/**
	 * @property {.<string,Stat>} bonuses - damage bonuses per damage kind.
	 */
	get bonuses(){ return this._bonuses }
	set bonuses(v){ this._bonuses = toStats(v); }

	/**
	 * @property {Attack} attack
	 */
	get attack() { return this._attack; }
	set attack(v) {

		if ( Array.isArray(v)) {

			let a = [];
			for( let i = v.length-1; i>=0; i-- ) {

				a.push( (v[i] instanceof Attack) ? v[i] :
					new Attack(v[i])
				);

			}

			this._attack = a;

		} else this._attack = ( v instanceof Attack) ? v : new Attack(v);

	}

	get dots() { return this._dots; }
	set dots(v) {

		let a = [];

		if ( v ) {
			for( let i = v.length-1; i >= 0; i-- ) {

				//var d = v[i] instanceof Dot ? v[i] : new Dot(v[i]);

				a.push( v[i] instanceof Dot ? v[i] : new Dot(v[i] ) );

			}
		}

		this._dots = a;

	}

	/**
	 * Get cause of a state-flag being set.
	 * @param {number} flag
	 */
	getCause(flag){return this._states.getCause(flag)}

	hasState( flag ) { return this._states.has(flag); }

	/**
	 * @returns {boolean} canAttack
	 */
	canAttack(){
		return this._states.canAttack();
	}

	canDefend(){
		return this._states.canDefend();
	}

	canCast(){
		return this._states.canCast();
	}

	/**
	 * @property {States} states - current char states. (silenced, paralyzed, etc.)
	 */
	get states(){return this._states; }
	set states(v) { this._states = new States(); }


	get instanced() { return true; }
	//set instanced(v) {}

	get regen() { return this._regen; }
	set regen(v) { this._regen = ( v instanceof Stat ) ? v : new Stat(v); }

	get alive() { return this.hp.value > 0; }

	/**
	 * @property {Object} context - context for dot mods/effects,
	 * spells.
	 * @todo: allow Player applyMods to work naturally.
	 */
	get context(){ return this._context; }
	set context(v) { this._context = v;}

	constructor( vars ){

		if ( vars ) {
			this.id = vars.id;	// useful for debugging.
			assignNoFunc( this, vars );
		}

		this.type = NPC;

		this._states = new States();

		this.immunities = this.immunities || {};
		this._resist = this._resist || {};
		if ( !this.bonuses ) this.bonuses = {};

		/**
		 * @property {Object[]} dots - timed/ongoing effects.
		*/
		if ( !this.dots ) this._dots = [];

		/**
		 * @property {number} timer
		 */
		this.timer = this.timer || 0;

	}

	/**
	 * Revive from data after Game state restored.
	 * @param {GameState} gs
	 */
	revive( gs ){

		this.reviveDots(gs);
		//this._states.refresh(this._dots);

	}

	reviveDots(gs) {
		for( let i = this.dots.length-1; i>=0; i--) {
			this.dots[i].revive(gs);
			this._states.add( this._dots[i]);
		}
	}

	/**
	 * Use char state ( charmed, rage, etc ) to change the a default action target.
	 * to new target type.
	 * @param {?string} targ - type of target, ally, enemy, self etc.
	 * @returns {string} - new target based on char state.
	 */
	retarget( targ ){
		return this._states.retarget(targ);
	}

	/**
	 * Cure dot with the given state.
	 * @param {string||string[]} state
	 */
	cure( state ) {

		if ( Array.isArray(state )) {
			for( let i = state.length-1; i>=0; i-- ) {
				this.cure(state[i]);
			}
			return;
		}

		for( let i = this.dots.length-1; i>= 0; i-- ) {
			//console.log('TRY cure: ' + this.dots[i].id + ': ' + this.dots[i].kind );
			if ( this.dots[i].id === state || this.dots[i].kind === state) {
				console.log('CURING: ' + state );
				this.rmDot(i);
				return;
			}
		}
	}

	/**
	 * try casting spell from player spelllist.
	 * @returns {?GData}
	 */
	tryCast(){
		return this.spells ? this.spells.onUse(this.context) : null;
	}

	/**
	 * Called once game actually begins. Dot-mods can't be applied
	 * before game start because they can trigger game functions.
	 */
	begin() {
	}

	/**
	 * Base item of dot.
	 * @param {Dot|object|Array} dot
	 * @param {?object} source
	 * @param {number} duration - duration override
	 */
	addDot( dot, source, duration=0 ) {

		if ( Array.isArray(dot)) {
			return dot.forEach(v=>this.addDot(v,source,duration));
		}

		let id = dot;
		if ( typeof dot === 'string') {

			dot = this.context.state.getData(dot);
			if ( !dot ) return
			dot = cloneClass(dot);


		} else {

			id = dot.id;

			dot = cloneClass(dot );
			let orig = this.context.state.getData( id );
			if ( orig && orig.type === TYP_STATE ) this.mergeDot( dot, orig );

		}
		if ( dot[ TYP_PCT ] && !dot[TYP_PCT].roll() ) {
			return;
		}


		if ( !id ) {
			id = dot.id = (source ? source.name || source.id : null );
			if ( !id) return;
		}

		if ( dot.flags && this.rollResist(dot.kind||id) ) {
			Events.emit( RESISTED, this, (dot.kind||dot.name));
			return;
		}

		if ( duration === 0 ) duration = dot.duration;

		let cur = this.dots.find( d=>d.id===id);
		if ( cur !== undefined ) {

			var level = dot.level || source ? source.level || 0 : 0;
			if ( cur.level >= level ) {
				cur.extend( duration );
				return;

			}
			this.removeDot( cur );

		}

		if ( !(dot instanceof Dot) ) {
			dot = new Dot(dot,source); //Game.state.mkDot( dot, source, duration );
			dot.duration = duration;
		}

		this.applyDot( dot );

	}


	/**
	 * Merge state or dot into this one.
	 * @param {object} dot
	 * @param {Dot} st
	 */
	mergeDot( dot, st ) {

		mergeSafe( dot, st );
		dot.flags = dot.flags | st.flags;
		dot.adj = dot.adj || st.adj;

		console.log('dot flags: ' + dot.flags );

	}

	applyDot( dot ) {

		this._states.add( dot );
		this.dots.push( dot );

		if ( dot.mod ) this.context.applyMods( dot.mod );
		if ( dot.flags ) Events.emit( CHAR_STATE, this, dot );
	}

	removeDot( dot ) {
		let id = dot.id;
		this.rmDot( this.dots.findIndex(d=>d.id===id) );
	}

	/**
	 * Remove dot by index.
	 * @param {number} i
	 */
	rmDot( i ){

		if ( i < 0 ) return;

		let dot = this.dots[i];
		this.dots.splice(i,1);

		if ( dot.mod ) this.context.removeMods( dot.mod );
		if ( dot.flags ) this._states.remove( dot );

	}

	/**
	 * Perform update effects.
	 * @param {number} dt - elapsed time.
	 */
	update( dt ) {

		let dots = this.dots;

		for( let i = dots.length-1; i >= 0; i-- ) {

			var dot = dots[i];
			if ( !dot.tick(dt) ) continue;

			// ignore any remainder beyond 0.
			// @note: dots tick at second-intervals, => no dt.
			if ( dot.effect ) this.context.applyVars( dot.effect, 1 );
			if ( dot.damage || dot.cure ) ApplyAction( this, dot, dot.source );

			if ( dot.duration <= dt ) {
				this.rmDot(i);
			}

		}
		if ( this.regen ) this.hp += ( this.regen*dt );

	}

	/**
	 * Get Combat action.
	 * @param {number} dt
	 */
	combat(dt) {

		if ( !this.alive ) return;

		this.timer -= dt;

		if ( this.timer <= 0 ) {

			this.timer += getDelay( this.speed );

			if ( this.spells && Math.random()<0.4 ) {

				let s = this.tryCast()
				if ( s ) {

					Events.emit( EVT_COMBAT, this.name + ' uses ' + s.name );
				}

			}
			return this.getCause(NO_ATTACK) || this.getAttack();

		}

	}

	/**
	 * Get bonus damage for the damage type.
	 * @param {string} kind
	 * @returns {number}
	 */
	getBonus(kind) {
		return this.bonuses[kind] || 0;
	}

	getAttack(){

		if ( Array.isArray(this.attack) ) return this.attack[ Math.floor( Math.random()*this.attack.length ) ];
		return this.attack || this;

	}

	hasStatus(stat) { return this.states[stat] > 0; }
	isImmune(kind) { return this.immunities[kind] > 0; }

	/**
	 * Roll a resistance check against the given damage type.
	 * @param {string} kind - kind of damage.
	 */
	tryResist(kind) {

		return ( this.resist && this.resist[kind] ) ? 100*Math.random() < this.resist[kind] : false;

	}

	/**
	 * @param {string} [kind=undefined]
	 * @returns {number} tohit.
	 */
	getHit(kind) {
		return this.tohit.valueOf();
	}

	/**
	 * Perform a resistance roll for a damage/dot kind, with a base percent
	 * success.
	 * @param {string} kind
	 * @param {number} [base=NaN]
	 * @returns {boolean}
	 */
	rollResist( kind, base=null ) {

		let res = (this._resist[kind]||0)+ ( base||10);
		return res > 100*Math.random();

	}

	/**
	 *
	 * @param {*} kind
	 * @returns {number} 0-based resist percent.
	 */
	getResist(kind) {

		return (this._resist[kind]||0)/100;
	}

	removeResist( kind, amt ) {
		if ( this._resist[kind] ) this._resist[kind] -= amt;
	}

	addResist( kind, amt ) {

		if ( !this._resist[kind] ) {

			//Vue.set( this._resist, kind, amt.valueOf() );
			this._resist[kind] = amt.valueOf();

		} else this._resist[kind].base += amt;

	}

	addStatus(stat) {
		this.states[stat] = this.states[stat] ? this.states[stat] + 1 : 1;
	}

	removeStatus(stat) {
		this.states[stat] = this.states[stat] ? this.states[stat] - 1 : 0;
	}

	/**
	 *
	 * @param {string} kind
	 */
	addImmune(kind){
		this.immunities[kind] = this.immunities[kind] ? this.immunities[kind] + 1 : 1;
	}

	/**
	 *
	 * @param {string} kind
	 */
	removeImmune(kind) {
		this.immunities[kind] = this.immunities[kind] ? this.immunities[kind] - 1 : 0;
	}

}

mergeClass( Char, Base );