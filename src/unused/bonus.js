import Stat from "../values/rvals/stat";

/**
 * CURRENTLY UNUSED.
 * @class Bonus - tohit and/or damage bonuses in combat.
 */
export default class Bonus {

	toJSON(){

		if ( this.tohit === null || this.tohit.valueOf()=== 0) return this._dmg;

		return {
			hit:this.tohit ? this.tohit : undefined,
			dmg:this.damage ? this.damage : undefined
		};

	}

	get tohit(){return this._tohit;}
	set tohit(v){this._tohit = new Stat(v);}

	get damage(){return this._dmg;}
	set damage(v){this._dmg=new Stat(v);}

	constructor(vars){

		if ( vars ){

			if ( typeof vars === 'number') {

				this.damage = vars;

			} else if ( typeof vars === 'object') {

				this.tohit = vars.hit;
				this.damage = vars.dmg || vars.damage;

			}

		}

	}

	getDamage(){return this._dmg ? this._dmg.valueOf() : 0;}
	getHit(){return this.tohit ? this.tohit.valueOf() : 0;}

}