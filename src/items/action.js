import GData from './gdata';
import Game from '../game';
import Events, { ACT_DONE, ACT_IMPROVED } from '../events';
import Stat from '../values/stat';

export default class Action extends GData {

	valueOf(){ return this.locked ? 0 : this.value.valueOf(); }

	toJSON(){

		let d = super.toJSON();
		if ( this.timer > 0 ) d.timer = this.timer;

		return d;

	}

	get level() {return this._level;}
	set level(v) { this._level = v;}

	/**
	 * @property {number} exp - alias ex data files.
	 */
	get exp() { return this._exp; }
	set exp(v){

		if ( this.locked || this.disabled ) return;

		if ( v < 0 ) {
			console.warn( this.id + ' exp neg: ' + v );
			return;
		}

		this._exp = v;
		if ( (this._length && v>=this._length )
			|| (!this._length && this.perpetual && v >= 1 ) ) {

			// does nothing currently.
			this.complete( Game );

		}

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
		this.type = 'action';
		if ( (this.length || this.perpetual) && !this._exp ) this._exp = 0;

		this.running = this.running || false;

		this.applyImproves();

	}

	applyImproves() {

		let v = this.valueOf();
		if ( this.at ) {

			for( let p in this.at) {

				if ( v >= Number(p) ) {
					this.applyMods( this.at[p] );
				}

			}

		}

		if ( this.every ) {

			for( let p in this.every ) {

				var amt = Math.floor( v / p );
				if ( amt > 0 ) this.applyMods( this.every[p], amt );

			}

		}

	}

	/**
	 * Test whether item succeeds when tested as a game requirement.
	 * @returns {boolean}
	 */
	test(){
		return this.locked === false;
	}

	canUse(g){
		return (!this.timer ) && super.canUse(g);
	}

	canRun(g){ return (!this.timer ) && super.canRun(g);}

	/**
	 * Update a running action.
	 * @param {number} dt - elapsed time.
	 */
	update( dt ) {
		this.exp += ( this.rate > 0 ? this.rate.valueOf() : 1 )*dt;
	}

	/**
	 * completion of ongoing action.
	 */
	complete(g=Game) {

		/**
		 * @note value has to be incremented first
		 * so the applied mods see the current value.
		 */
		this.value++;
		this.change(g, 1);
		this._exp = 0;

		Events.emit( ACT_DONE, this );

	}

	/**
	 * Action value changed.
	 * No value increment because that is currently done by game (@todo fix)
	 */
	change( g, count ) {

		super.change(g,count);

		var improve = false;

		if ( this.at ) {

			let cur = this.at[this.valueOf()];
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

		if ( improve ) Events.emit( ACT_IMPROVED, this );

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