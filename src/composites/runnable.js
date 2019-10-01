import Game from '../game';
import Events, {ACT_DONE} from '../events';

/**
 * Wraps an action in progress with an action target, and possible
 * extra instance data.
 */
export default class Runnable {

	toJSON(){

		return {
			item:this.item ? this.item.id : undefined,
			target:this.target ? this.target.id : undefined,
			exp:this._exp
		};
	}

	get type() { return 'runnable'; }

	/**
	 * @property {?Item} target - target of the running item.
	 * may be undefined if not applicable.
	 */
	get target() { return this._target;}
	set target(v) { this._target = v; }

	/**
	 * @property {Item} item - item being run.
	 */
	get item() { return this._item; }
	set item(v) { this._item = v; }

	/**
	 * @property {string} id - maybe a bad idea.
	 */
	get id() { return this.item.id; }

	set count(v){}
	set name(v){}

	/**
	 * @property {string} name
	 */
	get name() { return this.item ? this.item.name : ''; }

	hasTag(t) { return this.item && this.item.hasTag(t); }
	hasTags(t) { return this.item && this.items.hasTag(t); }

	get cost() { return this.item ? this.item.cost : null; }
	get run() { return this.item ? this.item.run : null; }
	get effect() { return this.item ? this.item.effect : null; }

	get running() { return this.item ? this.item.running:false;}
	set running(v) { if ( this.item) this.item.running=v;}

	get exp(){ return this._exp; }
	set exp(v) { this._exp = v; }

	get repeatable() { return this._item && this._item.repeatable || false; }

	percent() { return this._length ? 100*this._exp / this._length : 0; }
	maxed() { return this.item.maxed(); }
	canUse() { return this.item.canUse(); }

	get length() { return this._length; }
	set length(v) { this._length = v;}

	complete() { return this._exp < this._length; }

	/**
	 * If target is supplied, first element MUST be the item
	 * being used with target.
	 * @param {*} vars
	 * @param {*} targ
	 */
	constructor( vars=null, targ=null ) {

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
			if ( this.target ) Game.useWith( this.item, this.target );
			Events.emit( ACT_DONE, this, this.repeatable );
		}

	}

	revive( state ) {

		if ( typeof this._item === 'string') this._item = state.findData(this._item);
		if ( typeof this._target === 'string') this._target = state.findData(this._target);

		if ( this.item ) this._length = this._item.length;
		console.log('this exp: ' + this.exp );
		console.log('enc len: ' + this.length );

	}

}