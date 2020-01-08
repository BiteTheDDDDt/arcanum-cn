import Range from "../values/range";
import { assignPublic, cloneClass } from "../util/util";
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
			hits:this.hits||undefined,
			cure:this.cure||undefined,
			state:this.state||undefined,
			id:this.id,
			dot:this.dot
		};

	}

	get dot(){ return this._dot; }
	set dot(v) {
		this._dot = v;
		//if ( v.mod ) v.mod = ParseMods( v.mod, this.dot.id || this.dot.name || this.name );
	}

	get id() {return this._name; }
	set id(v) {
		this._id = v;

		if ( this._hits ) {
			for( let i = this._hits.length-1; i>=0; i--) if ( !this._hits[i].id ) this._hits[i].id = v;
		}

	}

	get name() {return this._name; }
	set name(v) {
		this._name = v;

		if ( this._hits ) {
			for( let i = this._hits.length-1; i>=0; i--) if ( !this._hits[i].name ) this._hits[i].name = v;
		}

	}

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

	/**
	 * @property {Attack[]} hits
	 */
	get hits(){ return this._hits; }
	set hits(v){
		this._hits = v;
		for( let i = v.length-1; i>=0;i--) {
			var h = v[i];
			if (!h.id) h.id = this.id;
			if ( !h.name ) h.name = this.name;
			if (!h.kind)h.kind = this.kind;
			if ( !h instanceof Attack ) h = v[i] = new Attack(h);

		}
	}

	get harmless(){ return this._harmless; }
	set harmless(v) { this._harmless = v;}

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

			// necessary for sub id/name assignments.
			this.id = vars.id;
			this.name = vars.name;
			this.kind = vars.kind;

			assignPublic(this,vars); //Object.assign(this,vars);
		}

		if ( this.dot ) {
			if ( this.dot.dmg || this.dot.damage ) {
				if ( !this.dot.damage ) this.dot.damage = this.dot.dmg;
				else this.dot.dmg = this.dot.damage;
			}
		}

		//this.damage = this.damage || 0;
		this.bonus = this.bonus || 0;
		this.tohit = this.tohit || 0;

	}

	getDamage() {

		return this.bonus +
		( ( typeof this._damage === 'number') ? this._damage : this._damage.value );

	}


}