import Game from '../game';
import Events, {TASK_DONE} from '../events';
import Proxy from './proxy';
import { TYP_RUN } from '../values/consts';


/**
 * Wraps a task in progress with a task target, and possible
 * extra.instanced data.
 */
export default class Runnable extends Proxy {

	toJSON(){

		return {
			item:this.item ? this.item.id : undefined,
			target:this.target ? this.target.id : undefined,
			exp:this._exp
		};
	}

	get type() { return TYP_RUN; }

	/**
	 * @property {?GData} target - target of the running item.
	 * may be undefined if not applicable.
	 */
	get target() { return this._target;}
	set target(v) { this._target = v; }

	get exp(){ return this._exp; }
	set exp(v) { this._exp = v; }

	get running(){
		if ( this._item) return this._item.running;
		return false;
	}
	set running(v){
		if ( this._item)this._item.running=v;
		if ( this._target) this._target.running=v;
	}

	get repeat() { return (this._item && this._item.repeat) || false; }

	percent() { return this._length ? 100*this._exp / this._length : 0; }

	get length() { return this._length; }
	set length(v) { this._length = v;}

	canRun( g ) { return !this.done && this._item && this._target && this._item.canAlter( this._target ) }
	get done() { return this._exp >= this._length; }

	/**
	 * If target is supplied, first element MUST be the item
	 * being used with target.
	 * @param {object|GData} vars - runnable variables OR runner item.
	 * @param {*} targ
	 */
	constructor( vars=null, targ=null ) {

		super();

		if ( targ ) {

			this.target = targ;
			this.item = vars;

		} else if (vars) Object.assign( this, vars );

		this.length = ( typeof this.item === 'object') ? this.item.length || 0 : 0;
		this.exp = this._exp || 0;

	}

	update(dt){

		this.exp += dt;

		if ( this.exp > this.length ) {

			if ( this.target ) Game.useOn( this.item, this.target );
			Events.emit( TASK_DONE, this, this.repeat );
			this.target = null;

		}

	}

	onStop(){
		if ( this.item.onStop ) this.item.onStop( this.target );
	}

	revive( state ) {

		super.revive(state);

		if ( typeof this._target === 'string') this._target = state.findData(this._target);

		if ( this.item ) {
			this._length = this.item.length;
			if ( this.item.resumeUseOn ) this.item.resumeUseOn(this.target );
		}

	}

}