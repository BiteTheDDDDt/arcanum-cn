import Attack from '../chars/attack';
import Action from './action';

/**
 * Default require function for spells.
 * @param {Object} g - items
 */
const levelReq = ( g, s ) => {
	return ( g.player.level >= 2*s.level );
}

/**
 * Create a school unlock function.
 * @param {*} s
 * @param {number} lvl - spell level.
 * @param {number} ratio - multiply spell level before test.
 */
const schoolUnlock = (s, lvl=1, ratio=1 ) => {

	lvl *= ratio;

	if ( typeof s === 'string') {

		s = 'g.' + s + 'lore';
		// @note: test school existence first.
		return new Function( 'g', 'return !' + s + '||' +
									s + '>=' + lvl );

	} else if ( Array.isArray(s) ) {

		if ( s.length === 1 ) return schoolUnlock(s[0]);

		// total string.
		var t = 'return ';

		for( let i = s.length-1; i >= 0; i-- ) {

			var d = 'g.' + s[i] + 'lore';
			t += ('!' + d + '||' + d + '>=' + lvl);

			if (i>0) t += '&&';

		}

		return new Function( 'g', t );

	}

	return null;

}

export default class Spell extends Action {

	toJSON(){

		let data = super.toJSON();

		if ( this.owned ) data.owned = this.owned;
		if ( this.timer > 0 ) data.timer = this.timer;

		return data;
	}

	constructor(vars=null) {

		super(vars);

		this.timer = this.timer || 0;

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
				let req = schoolUnlock( this.school, this.level, this.ratio );
				if ( req ) this.addRequire( req );
				else this.addRequire( levelReq );
			}
			else this.addRequire( levelReq );

		}

	}

};