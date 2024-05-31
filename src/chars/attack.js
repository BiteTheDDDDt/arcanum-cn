import { assignNoFunc } from "../util/util";
import { cloneClass } from '../util/objecty';
import Stat from "../values/rvals/stat";
import { TARGET_ALLIES, TARGET_ALLY, TARGET_SELF,
		ParseTarget, ParseDmg, GetTarget, TARGET_RAND_ALLY, TARGET_MINION, TARGET_MINIONS} from "../values/combatVars";
import { processDot } from "../values/combatVars";

export default class Attack {

	toJSON(){

		return {

			name:this.name,
			dmg:this.damage||undefined,
			heal:this.healing||undefined,
			tohit:this.tohit||undefined,
			bonus:this.bonus||undefined,
			kind:this.kind,
			hits:this.hits||undefined,
			cure:this.cure||undefined,
			state:this.state||undefined,
			targets:this.targets||undefined,
			targetstring:this.targetstring||undefined,
			result:this.result||undefined,
			id:this.id,
			dot:this.dot,
			repeathits:this.repeathits,
			targetspec:this.targetspec,
			showinstanced:this.showinstanced||undefined,
			potencies:this.potencies

		};

	}

	/**
	 * @property {object|object[]}
	 */
	get dot(){ return this._dot; }
	set dot(v) {
		this._dot = v;
	}

	get id() {return this._id||this._name; }
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
		if ( this._hits ) {
			for( let i = this._hits.length-1; i>=0; i--) if ( !this._hits[i].kind ) this._hits[i].kind =k;
			if ( this._hits.dot ) {
				for( let i = this._hits.length-1; i>=0; i--) if ( !this._hits[i].dot.kind ) this._hits[i].dot.kind = this._hits[i].kind;
			}
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
	get targetstring() {return this._targetstring;}
	set targetstring(v) { 
		this._targetstring=v;
	}
	get targets() { return this._targets; }
	set targets(v) {

		if ( typeof v === 'string') {
			this._targetstring = v;
			this._targets = ParseTarget(v);
			if ( this._hits ) {
				for( let i = this._hits.length-1; i>=0; i--) if ( !this._hits[i].targets ) this._hits[i].targets=ParseTarget(v);
				for( let i = this._hits.length-1; i>=0; i--) if ( !this._hits[i].targetstring ) this._hits[i].targetstring = v;
			}
		}
		else {
			this._targetstring = GetTarget(v);
			this._targets = v;
			if ( this._hits ) {
				for( let i = this._hits.length-1; i>=0; i--) if ( !this._hits[i].targets ) this._hits[i].targets = v;
				for( let i = this._hits.length-1; i>=0; i--) if ( !this._hits[i].targetstring ) this._hits[i].targetstring = v;
			}
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
	get source(){return this._source;}
	set source(v){this._source=v}

	get targetspec(){return this._targetspec;}
	set targetspec(v){this._targetspec=v}

	get repeathits(){return this._repeathits;}
	set repeathits(v){this._repeathits=v}

	/**
	 * @property {boolean} applyinstanced - for dot attacks
	 */
	get applyinstanced(){return this._applyinstanced;}
	set applyinstanced(v){this._applyinstanced=v}

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
	 * @alias healing
	 */
	get heal() { return this.healing;}
	set heal(v) { this.healing = v; }

	/**
	 * @property {Range|RValue} damage
	 */
	get healing() { return this._healing; }
	set healing(v) {
		this._healing = ParseDmg(v);
	}

	/**
	 * @property {Attack[]} hits
	 */
	get hits(){ return this._hits; }
	set hits(v){

		this._hits = v;
		if (!v) return;

		for( let i = v.length-1; i>=0;i--) {
			const h = v[i];

			if (!h.id) h.id = this.id;
			if (!h.name ) h.name = this.name;
			if (!h.kind) h.kind = this.kind;
			if (!h.potencies) h.potencies = this.potencies;
			if (h.dot)
			{
				h.dot.targetstring = h.dot.targets;
				h.dot.damage = ParseDmg(h.dot.damage)
				h.dot.healing = ParseDmg(h.dot.healing)
			}
			if ( !(h instanceof Attack) ) v[i] = new Attack(h, this);

		}
	}

	/**
	 * @type {number}
	 */
	get level() {
		return this._level != null ? this._level : this.source ? this.source.level : undefined;
	}
	set level(v) {
		this._level = v;
	}

	get harmless(){ return this._harmless; }
	set harmless(v) { this._harmless = v;}

	get potencies(){ return this._potencies; }
	set potencies(v) { this._potencies = v;}

	/**
	 * @property {string} only - target type, name, kind, or tag, which
	 * can be targeted by the attack
	 */
	get only() { return this._only; }
	set only(v) { this._only = typeof v === 'string' ? v.split(',') : v; }

	/**
	 * Messy, work on dot/state interface.
	 */
	canAttack(){return true;}

	clone(){ return cloneClass( this, new Attack() ); }

	constructor( vars=null, source ){

		if ( vars ) {

			// necessary for sub id/name assignments.
			this.id = vars.id;
			this.name = vars.name;
			this.kind = vars.kind;
			this.potencies = vars.potencies||["physdmg"]
			//cloneClass( vars, this ); // breaks save-reloading.
			assignNoFunc(this,vars);

		}

		if ( source ) this.source = source;
		if ( this.dot ) {
			if ( Array.isArray(this.dot)) {
				for( let p of this.dot ) {
					if ( !p.id ) {
						if ( p.name ) p.id = p.name;
						else p.id = p.name = this.name || this.id;
					}
					if ( p.dmg || p.damage ) {
						if ( !p.damage ) p.damage = p.dmg;
						else p.dmg = p.damage;
						if (this.potencies&&!p.potencies) p.potencies = this.potencies;
					}
					if ( p.heal || p.healing ) {
						if ( !p.healing ) p.healing = p.heal;
						else p.heal = p.healing;
						if (this.potencies&&!p.potencies) p.potencies = this.potencies;
					}
					p = processDot(p)

				}
			}
			else {
				if ( !this.dot.id ) {
					if ( this.dot.name ) this.dot.id = this.dot.name;
					else this.dot.id = this.dot.name = this.name || this.id;
				}
				if ( this.dot.dmg || this.dot.damage ) {
					if ( !this.dot.damage ) this.dot.damage = this.dot.dmg;
					else this.dot.dmg = this.dot.damage;
					if (this.potencies&&!this.dot.potencies) this.dot.potencies = this.potencies;
				}
				if ( this.dot.heal || this.dot.healing ) {
					if ( !this.dot.healing ) this.dot.healing = this.dot.heal;
					else this.dot.heal = this.dot.healing;
					if (this.potencies&&!this.dot.potencies) this.dot.potencies = this.potencies;
				}
				this.dot = processDot(this.dot)

			}
		}


		if ( this._harmless === null || this._harmless === undefined ) {
			this.harmless = (this.targets === TARGET_SELF) ||
				(this.targets === TARGET_ALLY) || (this.targets === TARGET_RAND_ALLY) || (this.targets === TARGET_MINION) || (this.targets === TARGET_MINIONS) || (this.targets === TARGET_ALLIES);
		}

		//this.damage = this.damage || 0;
		this.bonus = this.bonus || 0;
		this.tohit = this.tohit || 0;

	}


}