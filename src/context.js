
/**
 * Alternate context for a data item (NPC spellcaster, etc.)
 */
export default class Context {

	get state(){return this._state;}
	set state(v) { this._state=v}

	/**
	 * @property {Char} caster - caster/user of any spell/action.
	 */
	get caster(){return this._caster;}
	set caster(v){this._caster = v}

	constructor( stateObj ) {

		this.state = stateObj;

	}

	/**
	 * Not implemented.
	 * @param {*} it
	 */
	addTimer(it){
	}

	/**
	 * Not implemented
	 */
	getLoot(){
	}
	/**
	 * Test if item can be paid for.
	 * @param {*} it
	 */
	canPay(it) {
	}

	/**
	 * Default will do nothing for now.
	 * @param {*} cost
	 */
	payCost(cost) {
		console.log('context.payCost()');
	}

	canUse(it) {

	}

	applyMods( it, amt=1) {
	}

	applyVars( it, amt ) {
	}

}