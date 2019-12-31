export default class Debug {

	constructor( game ){

		this.game = window.game = game;
		console.log('old debug: ' + window.debug );

		window.debug = this;

	}

	unlockAll() {
	}

	unlock( str ){

		if ( str === '*' || str === 'all' ) {
			this.unlockAll();
			return;
		}

		let data = this.game.state.getData(str);
		if ( data ) {

			console.log('UNLOCKING: ' + str);
			game.state.getData(str).locked = false;
			return true;

		}

		return false;

	}

}