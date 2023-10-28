import game from "../game";
import { schoolResource, getTier, schoolSkill, tierOffset, getSchool} from "../values/craftVars";


/**
 * Add cost to buy object.
 * @param {object} buy - current buy params.
 * @param {string} type
 * @param {number} amt
 */
export const addCost = ( buy, type, amt ) => {


	if (!game.state.exists(type)) return;

	let e = buy[type];
	buy[type] = e ? e + amt : amt;

};

/**
 * Cost to buy an npc.
 * @param {*} m
 */
export const npcCost = (m)=>{

	let lvl = m.level;

	let buy = {

		gold:100*Math.ceil( Math.pow(lvl, 1.7 ) )

	};

	if ( m.kind) schoolBuy( m.kind, buy, lvl );
	if ( m.biome ) schoolBuy( m.biome, buy, lvl );

	if ( m.regen ) {
		addCost( buy, 'bloodgem', getTier( lvl )*5 );
	}

	return buy;

}

/**
 * CURRENTLY UNUSED.
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

		let school = schoolSkill( kind );
		let res = schoolResource( school );

		addCost( buy, res, m.level - tierOffset(m.level) + 1 );

	}

}

/**
 * CURRENTLY UNUSED.
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
 * Buy object for a school
 * @param {string} school - object containing school.
 * @param {object} [buy={}] existing buy cost.
 * @param {number} [level=1] - level of object being bought.
 */
export const schoolBuy = (school, buy={}, level=1 )=>{

	if ( !school ) {

		if ( Array.isArray(school) ) {
			/// check prevents null kind -> m.kind loop.
			for( let i = school.length-1; i>=0; i--) if( school[i] ) schoolBuy( school[i], buy, level );
		}

	} else {

		school = getSchool( school );
		let res = schoolResource( school, level );

		addCost( buy, res, level - tierOffset( level) + 1 );

	}

	return buy;

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

		addCost( res, school + 'gem', Math.min(level,5)*level );

		if ( level <= 5 ) addCost( res, 'codices', level );
		else addCost( res, 'tomes', level = 5 );

	}

	return res;

}