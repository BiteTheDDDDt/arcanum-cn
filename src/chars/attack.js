import Range, { RangeTest } from "../values/range";
import { assignPublic } from "../util/util";
import Stat from "../values/stat";
import { ParseMods } from "../values/mod";
import RValue from "../values/rvalue";
import FValue from "../values/fvalue";

/**
 * Create a function that returns a numeric damage value.
 * function has format: (a)ctor, (t)arget, (g)ameState
 * @param {string} s
 * @returns {(a,t,c,g)=>number}
 */
export const MakeDmgFunc = (s)=>{
	return new FValue( 'a,t,g', s );
};

export const ParseDmg = (v)=>{

	if ( typeof v === 'object' ) return v;
	else if ( !isNaN(v) ) return new RValue(v);
	else if ( typeof v === 'string' ) {

		if ( RangeTest.test(v) ) return new Range(v);
		return MakeDmgFunc(v);

	} else if ( typeof v === 'object') return new Range(v);
	return v;

}

export default class Attack {

	toJSON(){

		return {
			name:this.name,
			dmg:this._damage,
			tohit:this.tohit||undefined,
			bonus:this.bonus||undefined,
			kind:this.kind,
			id:this.id,
			dot:this.dot
		};

	}

	/**
	 * @property {object|object[]}
	 */
	get dot(){ return this._dot; }
	set dot(v) {
		this._dot =v;
		//if ( v.mod ) v.mod = ParseMods( v.mod, this.dot.id || this.dot.name || this.name );
	}
	get name() {return this._name; }
	set name(v) { this._name = v;}

	get kind(){ return this._kind; }
	set kind(k){

		this._kind = k;
		if ( this.dot ){
			if ( !this.dot.kind ) this.dot.kind = k;
		}

	}

	/**
	 * @property {string} targets - target of attack.
	 */
	get targets() { return this._targets; }
	set targets(v) { this._targets=v;}

	get bonus() { return this._bonus; }
	set bonus(v) {

		/** @todo mod apply bug. **/
		if ( this._bonus ) {

			this._bonus.base = v instanceof Stat ? v.base : v;

		} else this._bonus = new Stat( v );

	}

	get dmg() { return this.damage;}
	set dmg(v) { this.damage = v; }

	get damage() { return this._damage; }
	set damage(v) {
		this._damage = ParseDmg(v);
	}

	clone(){
		let a = new Attack({
			id:this.id||undefined,
			name:this.name,
			damage:this.damage,
			bonus:this.bonus,
			tohit:this.tohit,
			kind:this.kind,
			targets:this.targets,
			dot:this.dot
		});

		return a;
	}

	constructor( vars=null ){

		if ( vars ) {
			this.id = vars.id;
			assignPublic(this,vars); //Object.assign(this,vars);
		}

		this.damage = this.damage || 0;
		this.bonus = this.bonus || 0;

		this.tohit = this.tohit || 0;

	}


}