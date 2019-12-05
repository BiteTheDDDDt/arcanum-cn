import Range from "../values/range";
import { assignPublic } from "../util/util";
import Stat from "../values/stat";
import { ParseMods } from "../values/mod";

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

	get dot(){ return this._dot; }
	set dot(v) {
		this._dot =v;
		if ( v.mod ) v.mod = ParseMods( v.mod, this.dot.id || this.id );
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

		if (typeof v === 'string' || typeof v ==='object') this._damage = new Range(v);
		else if ( !isNaN(v) ) this._damage = Number(v);

	}

	clone(){
		let a = new Attack({
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

		if ( vars ) assignPublic(this,vars); //Object.assign(this,vars);

		this.damage = this.damage || 0;
		this.bonus = this.bonus || 0;

		this.tohit = this.tohit || 0;

	}

	getDamage() {

		return this.bonus +
		( ( typeof this._damage === 'number') ? this._damage : this._damage.value );

	}


}