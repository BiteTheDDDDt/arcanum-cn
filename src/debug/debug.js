import Resource from "../items/resource";

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

	fillall(){

		let res = this.resources;
		for( let p in res ){

			var r = res[p];
			if ( !r.locked && r instanceof Resource ){
				this.game.fillItem( r )
			}

		}

	}

	fill( id) {

		let it = this.state.getData( id );
		if ( !it ) return;

		if (it.locked) it.locked = false;
		this.game.fillItem( targ );

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
				r.amount(this.game, amt||1)
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

		it.amount( this.game, amt || 1 );

	}

	unlockall() {

		for( let p in this.items ){
			this.unlock(p);
		}

	}

	unlock( str ){

		if ( str === ALL || str === ALL_ALT ) {
			for( let p in this.items ){
				this.unlock(p);
			}
			return;
		}

		let data = this.game.state.getData(str);
		if ( data ) {

			try {
				data.locked = false;
			} catch(e){return false;}
			return true;

		}

		return false;

	}

}