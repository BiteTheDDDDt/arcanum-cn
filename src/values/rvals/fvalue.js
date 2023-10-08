import RValue from "./rvalue";
import { TYP_FUNC, FP, applyParams } from "../consts";
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
		return this._src;
	}

	/**
	 * @property {function} fn - function that serves as the base value.
	 */
	get fn(){return this._fn;}
	set fn(v) { this._fn=v;}

	get type() { return TYP_FUNC }

	toString(item=null){
		let dummyParams =  {
			[FP.GAME]: Game.gdata,
			[FP.ACTOR]: Game.player,
			[FP.TARGET]: Game.player, //TODO have a dummy enemy parameter that isnt the player 
			[FP.CONTEXT]: Game.player.context, //TODO replace context with target context once target is replaced.
			[FP.ITEM]: item,
		}
		return precise(applyParams(this.fn, dummyParams));
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
		return new FValue(this._params, this._src, this.id);
	}

	clone(){

		let f = new FValue( this._params, this._src, this._id );
		f.source = this.source;

		return f;

	}
}