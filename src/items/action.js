import GData from './gdata';
import Game from '../game';
import Events, { ACT_DONE, ACT_IMPROVED, EXP_MAX } from '../events';

export default class Action extends GData {

	valueOf(){ return this.locked ? 0 : this._value; }

	get level() {return this._level;}
	set level(v) { this._level = v;}

	/**
	 * @property {number} exp - alias ex data files.
	 */
	get exp() { return this._exp || 0; }
	set exp(v){

		if ( this.locked || this.disabled ) return;

		this._exp = v;
		if ( (this._length&& (v>=this._length) )
			|| (!this._length && this.perpetual && v >= 1 ) ) {

			Events.emit( EXP_MAX, this );

		}

	}

	get length() { return this._length; }
	set length(v) { this._length = v;}

	get running() { return this._running; }
	set running(v) { this._running = v;}

	percent() {
		return 100*(this._exp / this._length );
	}

	constructor( vars=null ){

		super(vars);

		this.repeat = this.repeat === false ? false : true;
		this.type = 'action';
		if ( this.length || this.perpetual ) this._exp = this._exp || 0;

		this.running = this.running || false;

		if ( this.cd ) this.timer = this.timer || 0;

		this.applyImproves();

	}

	applyImproves() {

		let v = this._value;
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
	 * Update a running action.
	 * @param {number} dt - elapsed time.
	 */
	update( dt ) {
		this.exp += ( this._rate ? this._rate.value : 1 )*dt;
	}

	/**
	 * completion of ongoing action.
	 */
	complete() {

		if ( this.log ) Game.doLog( this.log );
		if ( this.result ) Game.applyEffect( this.result );
		if ( this.mod ) Game.addMod( this.mod );

		this.value++;

		if ( this.exec ) this.exec();
		Events.emit( ACT_DONE, this );

	}

	/*canUse() {
		if ( this.maxed() ) return false;
		if ( this.cd > 0 && this.timer > 0 ) return false;
		return true;
	}*/

	/**
	 * Action executed, whether runnable or one-time.
	 * RESETS EXP
	 * No value increment because that is currently done by game (@todo fix)
	 */
	exec() {

		if ( this.cd ) {

			Game.addTimer( this );
			this.timer = this.cd;
		}

		if ( this.loot ) Game.getLoot( this.loot );

		var improve = false;

		if ( this.at ) {

			let cur = this.at[this.value];
			if ( cur ) {

				improve = true;
				this.applyMods( cur );

			}

		} else if ( this.every ) {

			for( let p in this.every ) {

				if ( this.value % p === 0 ) {

					improve = true;
					this.applyMods( this.every[p] );

				}

			}


		}

		if ( improve ) Events.emit( ACT_IMPROVED, this );

		this._exp = 0;

	}

	/**
	 * Performs a timer tick.
	 * @param {number} dt - elapsed time.
	 * @returns {boolean} true if timer is complete.
	 */
	tick( dt) {

		if ( this.timer > 0 ) {

			//console.log('timer: ' + this.timer );
			this.timer -= dt;
			if ( this.timer > 0 ) return false;
			else {
				this.timer = 0;
				return true;
			}

		}
		return false;

	}

}