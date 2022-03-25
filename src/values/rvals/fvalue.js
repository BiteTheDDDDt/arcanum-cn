import RValue from "./rvalue";
import { TYP_FUNC, FP } from "../consts";
import Game from "../../game";
import { precise } from "../../util/format";

export const MkParams = (...args) => {
	return args.join(",");
}

/**
 * Create a function that returns a cost.
 * function params are g (GameState), a (Actor), c (Context)
 * @param {*} s
 * @returns {FValue.<(g,a,c)=>number>}
 */
export const MkCostFunc = s => {
	return new FValue( MkParams(FP.GAME, FP.ACTOR, FP.CONTEXT), s );
}

/**
 * Wraps a function in an object so modifiers can be applied.
 */
export default class FValue extends RValue {

	toJSON(){
		return undefined;
	}

	/**
	 * @property {function} fn - function that serves as the base value.
	 */
	get fn(){return this._fn;}
	set fn(v) { this._fn=v;}

	get type() { return TYP_FUNC }

	toString(){
		let dummyParams = this._params.split(',').map(param => {
			switch(param) {
				case FP.GAME: return Game.gdata;
				case FP.ACTOR: return Game.player;
				case FP.TARGET: return Game.player; //TODO have a dummy enemy parameter that isnt the player 
				case FP.CONTEXT: return Game.player.context; //TODO replace context with target context once target is replaced.
			}
		});
		return precise(this.fn(...dummyParams));
	}

	constructor( params, src, path ){

		super( 0, path );
		this._params = params;
		this._src = src;

		this._fn = new Function( params, 'return ' + src );

	}

	apply( params ) {
		return this._fn.apply( null, params );
	}

	/**
	 * Get value of a result or effect.
	 * NOTE: this applies the standard effect/result params.
	 * Damage funcs use different function param assignments.
	 * @param {GameState} gs
	 * @param {*} targ
	 */
	getApply( gs, targ ) {
		return this._fn( gs, targ );
	}

	instantiate() {
		return new FValue(this.params, this.src, this.id);
	}
}