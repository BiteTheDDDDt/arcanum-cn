export default class Act {

	get action() { return this._action; }
	set action(v) { this._action = v; }

	/**
	 * @property {string} cause - state or object controlling the action.
	 */
	get cause(){return this._cause; }
	set cause(v) { this._cause = v; }

	get blocked(){return this._blocked; }
	set blocked(v) { this._blocked = v;}

	constructor(){

		this._action = null;
		this._cause = null;
		this._blocked = false;

	}

	/**
	 *
	 * @param {Dot|State} cause - state that caused action override.
	 * @param {boolean} [blocked=true] - whether default action is blocked.
	 */
	set( cause, blocked=true ) {

		this.cause= cause;
		this._blocked = blocked;

	}

}