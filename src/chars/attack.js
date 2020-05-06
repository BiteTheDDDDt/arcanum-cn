import { assignNoFunc } from "../util/util";
import { cloneClass } from 'objecty';
import Stat from "../values/rvals/stat";
import { TARGET_ALLIES, TARGET_ALLY, TARGET_SELF,
		ParseTarget, ParseDmg} from "../values/combatVars";

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
			targets:this.targets||undefined,
			result:this.result||undefined,
			id:this.id,
			dot:this.dot
		};

	}

	/**
	 * @property {object|object[]}
	 */
	get dot(){ return this._dot; }
	set dot(v) {
		this._dot = v;
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
		else {
			this._targets = v;
		}

	}

	/**
	 * @property {Stat} bonus - bonus damage applied by attack.
	 */
	get bonus() { return this._bonus; }
	set bonus(v) {

		if ( this._bonus ) {
			this._bonus.set(v);
		} else this._bonus = new Stat( v );

	}

	/**
	 * @alias damage
	 */
	get dmg() { return this.damage;}
	set dmg(v) { this.damage = v; }

	/**
	 * @property {Range|RValue} damage
	 */
	get damage() { return this._damage; }
	set damage(v) {
		this._damage = ParseDmg(v);
	}

	/**
	 * @property {Attack[]} hits
	 */
	get hits(){ return this._hits; }
	set hits(v){

		this._hits = v;
		if (!v) return;

		for( let i = v.length-1; i>=0;i--) {
			var h = v[i];

			if (!h.id) h.id = this.id;
			if ( !h.name ) h.name = this.name;
			if (!h.kind)h.kind = this.kind;
			if ( !(h instanceof Attack) ) v[i] = new Attack(h);

		}
	}

	get harmless(){ return this._harmless; }
	set harmless(v) { this._harmless = v;}

	/**
	 * Messy, work on dot/state interface.
	 */
	canAttack(){return true;}

	clone(){ return cloneClass( this, new Attack() ); }

	constructor( vars=null ){

		if ( vars ) {

			// necessary for sub id/name assignments.
			this.id = vars.id;
			this.name = vars.name;
			this.kind = vars.kind;

			//cloneClass( vars, this ); // breaks save-reloading.
			assignNoFunc(this,vars);

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
			this.harmless = (this.targets === TARGET_SELF) ||
				(this.targets === TARGET_ALLY) || (this.targets === TARGET_ALLIES);
		}

		//this.damage = this.damage || 0;
		this.bonus = this.bonus || 0;
		this.tohit = this.tohit || 0;

	}


}