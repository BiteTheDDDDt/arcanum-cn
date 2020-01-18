import FBRemote from 'remote/remote';

const MIN_SAVE_WAIT = 3*60*1000;
const MANUAL_SAVE_WAIT = 10*1000;

export class Remote {

	constructor(){

		this.lastSave = 0;

	}

	manualSave(){




	}

	save( minWait=MIN_SAVE_WAIT ) {

		var t = Date.now();
		if ( t - this.lastSave < minWait ) return null;
		this.lastSave = t;

	}

	saveChar(){

		FBRemote.saveChar();

	}

	saveHall(){
	}

	loadChar(){
		return FBRemote.loadChar();
	}

}