import Base, {mergeClass} from '../items/base';
import Stat from '../values/stat';
import Attack from './attack';
import Dot from './dot';

import { NPC, getDelay, TYP_PCT } from '../values/consts';
import { toStats } from "../util/dataUtil";
import events, { CHAR_STATE } from '../events';
import States, { NO_ATTACK } from './states';

import Game from '../game';
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

	get attack() { return this._attack; }
	set attack(v) {

		if ( Array.isArray(v)) {

			console.log( this.id + ' creating atacks.');
			let a = [];
			for( let i = v.length-1; i>=0; i-- ) {

				a.push( (v[i] instanceof Attack) ? v[i] :
					new Attack(v[i])
				);

				console.log('targs: ' + a[ a.length-1].targets );
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
	 * @property {States} states - current states.
	 */
	get states(){return this._states; }
	set states(v) { this._states = new States(); }


	get instanced() { return true; }
	set instanced(v) {}

	get regen() { return this._regen; }
	set regen(v) { this._regen = ( v instanceof Stat ) ? v : new Stat(v); }

	/*get died() { return this._died; }
	set died(v) { this._died = v; }*/

	get alive() { return this.hp.value > 0; }

	/**
	 * @property {Object} dotContext - context for dot mods/effects,
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
		this._states.refresh(this._dots);

	}

	/**
	 * Use current states to map requested target
	 * to new target type.
	 * @param {?string} targ
	 * @returns {string}
	 */
	getTarget( targ ){
		return this._states.getTarget(targ);
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
			if ( this.dots[i].id === state) {
				this.rmDot(i);
				return;
			}
		}
	}

	/**
	 * try casting spell from player spelllist.
	 * @returns {boolean}
	 */
	tryCast(){
		return ( this.spells && this.spells.onUse(this.context) );
	}

	reviveDots(gs) {
		for( let i = this.dots.length-1; i>=0; i--) {
			this.dots[i].revive(gs);
		}
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

		if ( typeof dot === 'string') {
			dot = Game.state.getData(dot);
			if ( !dot ) return
		}

		if ( dot[ TYP_PCT ] && !dot[TYP_PCT].roll() ) {
			return;
		}

		let id = dot.id;
		if ( !id ) {
			id = dot.id = (source ? source.name || source.id : null );
			if ( !id) return;
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
			dot = Game.state.mkDot( dot, source, duration );
		}

		this._states.add( dot );
		this.dots.push( dot );
		this.applyDot( dot );

	}

	applyDot( dot ) {

		if ( dot.mod ) this.context.applyMods( dot.mod, 1 );

		if ( dot.flags ) events.emit( CHAR_STATE, this, dot );

		let time = dot.duration;

		let states = dot.state;
		if ( states ) {

			if ( typeof states === 'string') {
				states = states.split(',');
			}
			for( let i = states.length-1; i>= 0; i-- ){

				var s = this._gs.getData( states[i] );
				if ( s ) {
					console.log('ADD DOT STATE: ' + states[i] );
					this.addDot( s, dot.source, time );
				}

			}

		}

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

		if ( dot.mod ) this.context.applyMods( dot.mod, -1 );
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
		if ( this.regen ) this.hp += this.regen*dt;

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

			if ( this.spells && Math.random()<0.4 && this.tryCast() ) {
				return null;
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

		if ( !this._resist[kind] ) this._resist[kind] = amt;
		else this._resist[kind].base += amt;

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