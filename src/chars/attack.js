import { assignPublic } from "../util/util";
import Stat from "../values/stat";
import { TARGET_ALLIES, TARGET_ALLY, TARGET_SELF,
		ParseTarget, ParseDmg} from "values/combat";

export default class Attack {

	toJSON(){

		return {
			name:this.name,
			dmg:this._damage,
			tohit:this.tohit||undefined,
			bonus:this.bonus||undefined,
			kind:this.kind,
			cure:this.cure||undefined,
			state:this.state||undefined,
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
	 * @property {string[]} state - states to cure/remove from target.
	 */
	get state(){return this._state;}
	set state(v) {
		if ( typeof v === 'string') this._state = v.split(',');
		else this._state = v;
	}

	/**
	 * @property {string[]} cure - states to cure/remove from target.
	 */
	get cure(){ return this._cure; }
	set cure(v){
		if ( typeof v === 'string') this._cure = v.split(',');
		else this._cure = v;
	}

	/**
	 * @property {string} targets - target of attack.
	 */
	get targets() { return this._targets; }
	set targets(v) {
		if ( typeof v === 'string') this._targets = ParseTarget(v);
		else this._targets = v;
	}

	get bonus() { return this._bonus; }
	set bonus(v) {

		if ( this._bonus ) {
			this._bonus.set(v);
		} else this._bonus = new Stat( v );

	}

	get dmg() { return this.damage;}
	set dmg(v) { this.damage = v; }

	get damage() { return this._damage; }
	set damage(v) {
		this._damage = ParseDmg(v);
	}

	get harmless(){ return this._harmless; }
	set harmless(v) { this._harmless = v;}

	/**
	 * Messy, work on dot/state interface.
	 */
	canAttack(){return true;}

	clone(){
		let a = new Attack({
			id:this.id||undefined,
			name:this.name,
			cure:this.cure||undefined,
			damage:this.damage||undefined,
			bonus:this.bonus||undefined,
			tohit:this.tohit||undefined,
			kind:this.kind||undefined,
			targets:this.targets||undefined,
			dot:this.dot||undefined
		});

		return a;
	}

	constructor( vars=null ){

		if ( vars ) {
			this.id = vars.id;
			assignPublic(this,vars); //Object.assign(this,vars);
		}

		if ( this.dot ) {

			if ( !this.dot.id ) {
				if ( this.dot.name ) this.dot.id = this.dot.name;
				else this.dot.id = this.dot.name = this.name || this.id;
			}
			if ( this.dot.dmg || this.dot.damage ) {
				if ( !this.dot.damage ) this.dot.damage = this.dot.dmg;
				else this.dot.dmg = this.dot.damage;
			}

		}

		if ( this._harmless === null || this._harmless === undefined ) {
			this.harmless = this.targets === TARGET_SELF ||
				this.targets === TARGET_ALLY || this.targets === TARGET_ALLIES;
		}

		this.damage = this.damage || 0;
		this.bonus = this.bonus || 0;

		this.tohit = this.tohit || 0;

	}


}