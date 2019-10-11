/**
 * Functions for crafting/buying items.
 */

const addCost = ( buy, type, amt ) => {

	let e = buy[type];
	buy[type] = e ? e + amt : amt;

};

export const minionCost = ( b ) => {

	let cost = {};

	let level = b.level;
	if ( b.regen ) level = level+1;

	if ( b.regen ) {
	}

	cost.gold = 100*(level*level);

}

 /**
 * Return a cost object for crafting the list of spells.
 * @param {Spell[]} list
 */
export const spellCost = (list) => {

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
export const schoolCost = ( school, level=1, res={} ) => {

	if ( Array.isArray(school) ) {
		for( let i = school.length-1; i>=0; i--) schoolCost(school[i],level,res);
	} else if ( school != null ) {

		addCost( res, school + 'gem', level*level );

		if ( level <= 5 ) addCost( res, 'codices', level );
		else addCost( res, 'tomes', level = 5 );

	}

	return res;

}