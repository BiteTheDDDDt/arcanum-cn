import { getTier, getSchool, schoolResource, tierLevel } from "./values/consts";

/**
 * Functions for crafting/buying items.
 */
export const addCost = ( buy, type, amt ) => {

	let e = buy[type];
	buy[type] = e ? e + amt : amt;

};

export const npcBuy = (m)=>{

	let lvl = m.level;

	let buy = {

		gold:100*lvl*lvl

	};

	if ( m.kind) npcKindBuy( m, buy );
	if ( m.biome ) biomeBuy( m, buy );

	if ( m.regen ) {
		let tier = getTier( lvl );
		addCost( buy, 'bloodgem', tier*5 );
	}

	return buy;

}

/**
 * kind cost for npc.
 * @param {Npc} m - npc
 * @param {object} [buy={}] existing buy cost.
 * @param {string} kind - current kind being processed. (for arr recursion)
 */
export const npcKindBuy = (m, buy={}, kind=null)=>{

	kind = kind || m.kind;

	if ( !kind ) {

		if ( Array.isArray(kind) ) {
			/// check prevents null kind -> m.kind loop.
			for( let i = kind.length-1; i>=0; i--) if(kind[i]) npcKindBuy( m, buy, kind[i]);
		}

	} else {

		let school = getSchool( kind );
		let res = schoolResource( school );

		addCost( buy, res, m.level - tierStart(m.level) + 1 );

	}

}

/**
 * Biome cost for npc.
 * @param {Npc} m - npc
 * @param {object} [buy={}] existing buy cost.
 */
export const biomeBuy = (m, buy={}, biome=null)=>{

	biome = biome || m.biome;

	if ( !biome ) {

		if ( Array.isArray(biome) ) {
			/// check prevents null kind -> m.kind loop.
			for( let i = biome.length-1; i>=0; i--) if(biome[i]) biomeBuy( m, buy, biome[i]);
		}

	} else {


	}

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