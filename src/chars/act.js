export default class Act {

	get action() { return this._action; }
	set action(v) { this._action = v; }

	/**
	 * @property {string} cause - state or object controlling the action.
	 */
	get cause(){return this._cause; }
	set cause(v) { this._cause = v; }

	constructor(){
	}

}