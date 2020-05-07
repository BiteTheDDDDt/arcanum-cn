import GData from './gdata';
import Game from '../game';
import Events, { TASK_DONE, TASK_IMPROVED } from '../events';
import Stat from '../values/rvals/stat';
import Scaler from '../values/rvals/scaler';
import { TASK } from '../values/consts';
import { ParseMods } from '../modules/parsing';
import { SetModCounts } from './base';

/*function ShowModTotals( mods ){

	if ( mods instanceof Mod ) {
		console.log( mods.id + ': ' + mods.bonusTot );
		return;
	}

	for( let p in mods ) {

		let it = mods[p];
		if ( it instanceof Mod ) console.log( it.id + ': ' + it.bonusTot );
		else ShowModTotals( it );

	}

}*/

export default class Task extends GData {

	valueOf(){ return this.locked ? 0 : this.value.valueOf(); }

	toJSON(){

		let d = super.toJSON();
		if ( this.timer > 0 ) d.timer = this.timer;

		return d;

	}

	get level() {return this._level;}
	set level(v) { this._level = v;}

	get typeName() { return this.type === TASK ? 'action' : this.type }

	/**
	 * @property {Mods} runmod - mods to apply while task is being actively used.
	 */
	get runmod(){return this._runmod;}
	set runmod(v){this._runmod = v;}

	get ex(){ return this._exp; }
	set ex(v){
		this._exp = v instanceof Scaler ? v : new Scaler( v, this.id + ' .exp', this._rate );
	}

	/**
	 * @property {number} exp - alias ex data files.
	 */
	get exp() { return this._exp; }
	set exp(v){

		if ( this.locked || this.disabled || this.maxed() || (this.buy &&!this.owned) ) return;

		//@compat only
		if ( this._exp === null || this._exp === undefined ) this.ex = v;

		if ( v < 0 ) {
			console.warn( this.id + ' exp: ' + v );
			return;
		}
		this._exp.set(v);


		this.tryComplete();


	}

	get rate(){ return this._rate; }
	set rate(v){

		this._rate = ( v instanceof Stat ? v : new Stat(v, this.id + '.rate' ) );
		if ( this.ex !== undefined ) this.ex.scale = this._rate;
	}

	get length() { return this._length; }
	set length(v) {

		if ( v === null || v === undefined ) this._length = null;
		else this._length = v instanceof Stat ? v : new Stat(v);

	}

	get running() { return this._running; }
	set running(v) { this._running = v;}

	percent() { return 100*( this._exp / this._length ); }

	constructor( vars=null ){

		super(vars);

		this.repeat = this.repeat === false ? false : true;
		this.type = 'task';

		if ( this.at ) {
			if ( this.id === 'magicmissile') console.log('MAGIC MISSILE AT MODS');
			this.at = ParseMods( this.at, this.id, 1 );
		}

		if ( this.every ) this.every = ParseMods( this.every, this.id, this );

		if ( (this.length || this.perpetual)) {
			this.ex = this.ex || 0;
		}

		this.running = this.running || false;

		this.applyImproves();
		SetModCounts(this.runmod, 1);

	}

	/**
	 * Tests whether item fills unlock requirement.
	 * @returns {boolean}
	 */
	fillsRequire(){
		return this.locked === false && this.value > 0;
	}

	applyImproves() {

		let v = this.valueOf();
		if ( this.at ) {

			//if ( v > 0 ) console.log(this.id + ' TOTAL: ' + v );

			for( let p in this.at) {

				if ( v >= Number(p) ) {

					//ShowModTotals( this.at[p] );
					this.applyMods( this.at[p] );

				}

			}

		}

		if ( this.every ) {

			for( let p in this.every ) {

				var amt = Math.floor( v / p );
				if ( amt > 0 ) {
					this.applyMods( this.every[p] );
				}

			}

		}

	}

	canUse(g){
		return (!this.timer ) && super.canUse(g);
	}

	canRun(g){ return (!this.timer ) && super.canRun(g);}

	tryComplete() {

		if ( (this._length && this._exp>=this._length )
			|| (!this._length && this.perpetual && this._exp >= 1 ) ) {

			this.complete( Game );

		}

	}

	/**
	 * Update a running task.
	 * @param {number} dt - elapsed time.
	 */
	update( dt ) {
		this.exp.set( this._exp + (this.rate||1)*dt );
		this.tryComplete();
	}

	onStart(){

		if ( this.runmod ) {
			Game.applyMods( this.runmod );
		}

	}

	onStop(){

		if ( this.runmod ) {
			Game.removeMods( this.runmod );
		}

	}

	/**
	 * completion of ongoing task.
	 * @param {Game} [g=Game]
	 */
	complete() {

		/**
		 * @note value has to be incremented first
		 * so the applied mods see the current value.
		 */
		this.amount(1);

		this._exp.set(0);

		Events.emit( TASK_DONE, this );

	}

	/**
	 * task value changed.
	 * No value increment because that is currently done by game (@todo fix)
	 */
	changed( g, count ) {

		super.changed(g,count);

		var improve = false;

		if ( this.at ) {

			let cur = this.at[ this.valueOf() ];
			if ( cur ) {

				improve = true;
				this.applyMods( cur );

			}

		} else if ( this.every ) {

			let v = this.valueOf();
			for( let p in this.every ) {

				if ( v % p === 0 ) {

					improve = true;
					this.applyMods( this.every[p] );

				}

			}


		}

		if ( improve ) Events.emit( TASK_IMPROVED, this );

	}

	/**
	 * Perform cd timer tick.
	 * @param {number} dt - elapsed time.
	 * @returns {boolean} true if timer is complete.
	 */
	tick(dt) {

		this.timer -= dt;
		//console.log('TIME TICK: ' + this.timer );
		if ( this.timer < 0 ) {

			//console.log('timer: ' + this.timer );
			this.timer = 0;
			return true;

		}
		return false;

	}

}