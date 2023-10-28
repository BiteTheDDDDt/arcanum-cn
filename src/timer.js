export default class Timer {

	constructor( time, vars=null ){

		this.time = time;

	}

	update( dt ){

		this.time -= dt;
		if ( this.time <0 ) return true;

		return false;

	}

}