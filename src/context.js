
/**
 * Alternate context for a data item (NPC spellcaster, etc.)
 */
export default class Context {

	get state(){return this._state;}
	set state(v) { this._state=v}

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

	canUse(it) {

	}

	applyMods(it) {
	}

	applyVars(it) {
	}

}