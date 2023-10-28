/**
 * Locks item for a time. (cooldown)
 * CURRENTLY UNUSED
 */
export default class Lock {

	/**
	 * @property {string} id - maybe a bad idea.
	 */
	get id() { return ( this.item ? this.item.id : '' ); }

	set count(v){}

	/**
	 * @param {*} t
	 * @returns {boolean}
	 */
	hasTag(t) { return this.item && this.item.hasTag(t); }
	hasTags(t) { return this.item && this.items.hasTag(t); }

	get buy() { return this.item ? this.item.buy : null; }
	get cost() { return this.item ? this.item.cost : null; }
	get run() { return this.item ? this.item.run : null; }
	get effect() { return this.item ? this.item.effect : null; }

	get length () {return this.item ? this.item.length : null }
	get perpetual() { return this._item ? this._item.perpetual : false }

	/**
	 * @property {Item} item - item being run.
	 */
	get item() { return this._item; }
	set item(v) { this._item = v; }

	get owned() { return this._item ? this.item.owned : false; }
	set owned(v) { if ( this._item ) this._item.owned = v; }

	get running() { return this.item ? this.item.running:false;}
	set running(v) {
		if ( this.item) this.item.running=v;
	}

	isProxy() { return true; }

	maxed() { return this.item ? this.item.maxed() : true; }
	canUse( g ) { return this.item ? this.item.canUse( g ) : false; }
	canRun( g ) { return this.item ? this.item.canRun( g ) : false; }

	constructor( vars=null ){

		if (vars) Object.assign( this, vars );

	}

	/**
	 * Perform timer tick.
	 * @param {number} dt - elapsed time.
	 * @returns {boolean} true if timer is complete.
	 */
	update(dt) {

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