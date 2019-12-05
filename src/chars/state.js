export default class State {

	get id() { return this._id; }
	set id(v) { this._id =v;}

	get name() { return this._name; }
	set name(v) { this._name = v;}

	get value() { return this._value; }
	set value(v) { this._value=v;}

	get mod() { return this._mod; }
	set mod(v) { this._mod = v; }

	get effect() { return this._effect; }
	set effect(v) {
		this._effect = v;
	}

	get stack() { return this._stack;}
	set stack(v) { this._stack = v; }

	get canAttack(){return this._canAttack;}
	set canAttack(v) { this._canAttack = v;}

	get canDefend(){return this._canDefend;}
	set canDefend(v) { this._canDefend = v;}

	constructor( vars){

		if ( vars ) Object.assign(this, vars);

	}

}