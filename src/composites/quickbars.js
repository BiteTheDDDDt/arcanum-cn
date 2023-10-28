import Quickbar from "./quickbar";
import Stat from "../values/rvals/stat";
import events, { DELETE_ITEM } from "../events";

/**
 * Organizes sub-quick bars.
 */
export default class Quickbars {

	toJSON(){

		return {
			bars:this.bars,
			index:this.index,
			max:this.max
		};

	}

	/**
	 * {QuickBar[]} bars defined.
	 */
	get bars() { return this._bars; }
	set bars(v) {

		if ( !Array.isArray(v) ) {
			console.warn('NONARRAY: ' +v);
			return;
		}

		for( let i = v.length-1; i>= 0; i-- ) {
			v[i] = v[i] instanceof Quickbar ? v[i] : new Quickbar(v[i]);
		}
		this._bars = v;

	}

	get active(){ return this._active; }

	/**
	 * @property {number} index - index of current bar.
	 */
	get index() { return this._index; }
	set index(v) { this._index = v; }

	constructor( vars=null ) {

		if ( vars ) Object.assign( this, vars );

		if ( !this.bars || this.bars.length === 0 ) this.bars = [ {} ];
		if ( !this.max ) this.max = new Stat(1, 'quickbars.max');

	}

	next(){

		if ( ++this._index >= this.bars.length ) {
			this._index = 0;
		}
		this._active = this._bars[this._index];

	}

	prev(){

		if ( --this._index < 0 ) {
			this._index = this._bars.length-1;
		}
		this._active = this._bars[this._index];

	}

	dataDeleted(it) {

		if ( !it ) return;

		for( let i = this.bars.length-1; i>=0; i-- ) {
			this._bars[i].remove(it.id);
		}

	}

	revive(state) {

		for( let i = this.bars.length-1; i>=0; i-- ) {
			this._bars[i].revive(state);
		}

		this._index = this._index || 0;
		this._active = this._bars[this._index];

		events.add( DELETE_ITEM, this.dataDeleted, this );

	}

}