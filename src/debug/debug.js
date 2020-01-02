import Resource from "../items/resource";
import RevStat from "../items/revStat";

const ALL = 'all';
const ALL_ALT = '*';

export default class Debug {

	/**
	 * @property {GData[]} resources
	 */
	get resources(){
		return this.game.state.resources;
	}

	get state() {return this.game.state;}
	get items(){return this.game.state.items}

	constructor( game ){

		this.game = window.game = game;
		console.log('old debug: ' + window.debug );

		window.debug = this;

	}

	max(str, amt) {this.addmax(str,amt)}

	addmax( str, amt ){

		if ( str === ALL || str === ALL_ALT ) {
			for( let p in this.items ) {
				this.addmax(p, amt);
			}
			return;
		}

		this.unlock(str);
		this.state.addMax( str, amt );

	}

	ids(type) {

		if ( type ) {

			var list = this.state[type];
			if ( !list) return 'no such list';
			return list.map(v=>v.id).join(', ');

		} else {

			let a = [];
			for( let p in this.items ) a.push(p);
			return a.join(', ');

		}

	}

	/**
	 * Apply function to object with id.
	 * @param {string} id
	 * @param {GData=>*} f
	 */
	apply( id, f ){

		if ( id === ALL || id === ALL_ALT ) {

			for( let p in this.items ) {
				f( this.items[p] );
			}

		} else {

			let data = this.state.getData(id);
			if ( data ) {

				f( data );
				return true;

			}
		}

		return false;

	}

	emptyall(){
		for( let p in this.items) {
			let it = this.items[p];
			if ( it && (typeof it.amount === 'function') ) {
				it.amount( this.game, -it.value );
			}
		}
	}

	empty( id ) {
		this.apply(id, it=>{
			if ( typeof it.amount ==='function' ) it.amount( this.game, -it.value );
		});
	}

	fillall(){

		let res = this.resources;
		for( let p in res ){

			var r = res[p];
			if ( !r.locked && !(r instanceof RevStat) ){
				this.game.fillItem( r )
			}

		}

	}

	fill( id) {
		return this.apply( id, it=>{
			it.locked = false;
			this.game.fillItem(it);
		});
	}

	addall(amt){
		this.getall(amt);
	}
	add( id, amt ) { return this.get(id,amt)}

	getall( amt ) {

		let res = this.resources;
		for( let p in res ){

			var r = res[p];
			if ( !r.locked && r instanceof Resource ){
				this.get(r.id, amt );
			}

		}

	}

	get( id, amt ) {

		if ( !isNaN(id) ) {
			let t = id;
			id = amt;
			amt = t;
		}
		if ( !id ) return;

		if ( id === ALL || id === ALL_ALT ) {
			this.getall(amt);
			return;
		}

		let it = this.state.getData( id );
		if ( !it ) return;

		let newval = it.value + amt;
		if ( newval > it.max ) it.max = newval;
		it.amount( this.game, Number(amt) || 1 );

	}

	lock( id ){
		return this.apply( id, it=>this.game.lock(it) );
	}

	unlockall() {

		for( let p in this.items ){
			this.unlock(p);
		}

	}


	unlock( str ){

		return this.apply( str, it=>{
			try {
				it.locked=false;
			} catch(e) { return false;}
			return true;
		});

	}

}