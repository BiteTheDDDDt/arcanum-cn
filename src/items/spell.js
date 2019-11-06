import Attack from '../chars/attack';
import Action from './action';
import { schoolSkill, canTarget } from '../values/consts';

/**
 * Default require function for spells.
 * @param {Object} g - items
 */
const levelReq = ( g, s ) => {
	return ( g.player.level >= 2*s.level );
}

const schoolUnlock = ( s, level )=>{

	if ( typeof s === 'string') {

		console.log('CREATING SCHOOL UNLOCK: ' + s.id );
		s = schoolSkill(s);
		if ( typeof s === 'object' ) return reqStr( s.name, level*(s.ratio || 1) );
		return schoolFunc(s, level );

	} else if ( Array.isArray(s) ) {

		let a = s.map( v=>'('+schoolUnlock(v,level)+')').join('&&');

	}


}

/**
 * Single requirement substring.
 * @param {*} s
 * @param {*} lvl
 */
const reqStr = (s,lvl=1)=>{
	return '!g.' + s + '||g.' + s + '>=' + lvl;
}

/**
 * Create a school unlock function.
 * @param {*} s
 * @param {number} lvl - spell level.
 * @param {number} ratio - multiply spell level before test.
 */
const schoolFunc = (s, lvl=1 ) => {

	if ( typeof s === 'string') {

		s = 'g.' + s;
		// @note: test school existence first.
		return new Function( 'g', 'return !' + s + '||' +
									s + '>=' + lvl );

	} else if ( Array.isArray(s) ) {

		if ( s.length === 1 ) return schoolFunc(s[0]);

		// total string.
		var t = 'return ';

		for( let i = s.length-1; i >= 0; i-- ) {

			var d = 'g.' + s[i];
			t += ('!' + d + '||' + d + '>=' + lvl);

			if (i>0) t += '&&';

		}

		return new Function( 'g', t );

	}

	return null;

}

export default class Spell extends Action {

	/**
	 * @property {string} target - target type, name, kind, or tag, to which
	 * the enchantment can be applied.
	 */
	get targets(){return this._targets;}
	set targets(v){
		this._targets = typeof v === 'string' ? v.split(',') : v;
	}

	toJSON(){

		let data = super.toJSON();

		if ( this.owned ) data.owned = this.owned;

		return data;
	}

	constructor(vars=null) {

		super(vars);

		this.repeat = true;
		this.type = 'spell';
		this.level = this.level || 1;

		this.owned = this.owned || false;
		if ( !this.owned ) {

			if ( !this.buy ) this.buy = {};
			if ( !this.buy.arcana && this.level > 1 ) this.buy.arcana = this.level - 1;

		}

		if ( this.attack ) {

			if ( !(this.attack instanceof Attack) ) this.attack = new Attack(this.attack);
			this.attack.name = this.name;
			if (!this.attack.kind) this.attack.kind = this.school;

		}


		if ( this.locked !== false ) {

			if ( this.school ) {
				let req = schoolFunc( this.school, this.level, this.ratio );
				if ( req ) this.addRequire( req );
				else this.addRequire( levelReq );
			}
			else this.addRequire( levelReq );

		}

	}

	/**
	 *
	 * @param {*} targ
	 */
	canUseOn(targ) {

		if ( targ.level && ( 2*this.level < targ.level) ) return false;

	//	console.log( this.id + ' target: ' + targ.id + ': ' + canTarget(this.targets, targ ));
		return !this.targets || canTarget( this.targets, targ );

	}


};