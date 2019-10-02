import Range from "../values/range";
import Mod from "../values/mod";

export default class Dot {

	toJSON(){

		return {

			id:this.id || undefined,
			kind:this.kind || undefined,
			name:this.name || undefined,
			dmg:this.damage || undefined,
			effect:this.effect||undefined,
			mod:this.mod||undefined,
			acc:this.acc,
			duration:this.duration,
			source:this.source ? ( typeof this.source === 'string' ? this.source : this.source.id ) : undefined
		};

	}

	set dmg(v) { this.damage = v; }

	get damage() { return this._damage; }
	set damage(v) {

		if ( v instanceof Range ) this._damage = v;
		else if ( !isNaN(v) ) this._damage = Number(v);
		else if ( typeof v === 'string' || typeof v === 'object') this._damage = new Range(v);

	}

	/**
	 * Get a damage value for the dot.
	 */
	getDamage() {

		return (typeof this._damage === 'number') ? this._damage : this._damage.value;

	}

	constructor( vars, source, name ){

		Object.assign( this, vars );

		this.source = this.source || source || null;

		this.name = this.name || name || ( source ? source.name : '' );
		this.id = this.id || this.name || (source ? source.id || source.name : '');

		/**
		 * @property {boolean} stack - ability of dot to stack.
		 */

		/**
		 * @private {number} acc - integer accumulator
		 */
		this.acc = this.acc || 0;

	}

	reviveMod( m ){

		if ( typeof m === 'object' && !(m instanceof Mod) ) {


			if ( m.id ) return new Mod(m);

			for( let p in m ) {
				m[p] = this.reviveMod( m[p] );
			}

		}
		return m;

	}

	revive(state) {

		if ( this.source && typeof this.source === 'string') this.source = state.getData( this.source );

		if ( this.mod ) this.mod = this.reviveMod(this.mod);

	}

	/**
	 * Ticks dt and returns the amount the dot has actually ticked,
	 * (allowing for seconds-only updates.)
	 * @param {number} dt
	 */
	tick(dt) {

		this.acc += dt;
		if ( this.acc >= 1 ) {

			this.acc--;
			this.duration--;
			return 1;

		}

		return 0;

	}

}