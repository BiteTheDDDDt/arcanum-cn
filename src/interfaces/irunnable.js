export default {


	get exp(){ return this._exp; },
	set exp(v) { this._exp = v; },

	get running(){
		return this._running;
	},
	set running(v){
		this._running= v;
	},

	get length() { return this._length; },
	set length(v) { this._length = v;},

	get perpetual(){return this._perpetual;},
	set perpetual(v){this._perpetual=v;},

	update(dt){
		this.exp += dt;
	}

}