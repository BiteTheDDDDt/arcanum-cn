import Inventory from "./inventory";

/**
 * Return a cost object for crafting the list of spells.
 * @param {Spell[]} list
 */
export const craftCost = (list)=> {

	var res = {};

	for( let i = list.length-1; i>= 0; i--) {

		var s = list[i];
		res.gold = (res.gold||0) + 300*s.level;

		schoolCost( s.school, s.level, res );

	}

	return res;

}

/**
 * Generic cost function for crafting for a school of magic.
 * @param {string|string[]} school
 * @param {object} res
 */
export function schoolCost ( school, level=1, res={} ) {

	if ( Array.isArray(school) ) {
		for( let i = school.length-1; i>=0; i--) schoolCost(school[i],level,res);
	} else if ( school != null ) {

		res[ school + 'gem' ] = (res[ school + 'gem' ] || 0 ) + level*level;
		if ( level <= 5 ) {
			res.codices = ( res.codices || 0 ) + level;
		} else {
			res.tomes = ( res.tomes || 0 ) + ( level - 5);
		}

	}


	return res;

}

export default class Spellcraft extends Inventory {

	constructor(vars=null) {

		super(vars);

		this.name = "crafted spells";

	}

}