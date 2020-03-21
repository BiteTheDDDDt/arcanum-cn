/**
 * Skills required to understand/buy npcs.
 */
const NpcLoreSkills = {

	beast:["animals","naturelore","summoning"],
	magicbeast:["magicbeasts","naturelore","summoning"],
	demon:["demonology","bloodlore","summoning","languages"],
	humanoid:["charms","languages","history"],
	undead:["necromancy","reanimation"],
	kell:["naturelore","runelore"],
	celestial:["lightlore","astrallore", "divination"],
	construct:"crafting",
	elemental:["waterlore","firelore","earthlore","airlore","summoning"],
	giant:["charms","summoning","trickery"],
	ghost:["spiritlore","conjuration"],
	spirit:["spiritlore","divination","summoning"],
	deity:["spiritlore","divination"]



}



/**
 * @property {object.<string,string|object>} - maps school to skill determining school level.
 */
const skillMap = {
	mana:{
		id:'lore',
		reqs:2	// requirements doubled when unlocking with skill
	}
}

skillMap.arcane = skillMap.lore = skillMap.mana;



/**
 * @property {.<string,string>} schoolName - maps school to display name.
 */
const schoolNames = {
	mana:'arcane'
}


/**
 * @const {number[]} TierTable - levels when given tiers start.
 */
const TierTable = [0, 3, 6, 11, 20];

/**
 * @const {.<string,string|string[]>} SchoolTable - converts type/kind to associated school.
 */
export const SchoolTable = {

	arcane:'mana',
	swamp:['shadow','water'],
	plains:'light',
	woods:'nature',
	holy:'light',
	mountains:['fire','earth','air'],
	hills:['earth','air'],
	cave:['shadow','earth'],
	sea:'water',
	town:[ 'blood', 'mana'],
	humanoid:'blood',
	undead:'shadow',
	ghost:'spirit',
	construct:'craft',
	dragon:'fire',
	beast:'nature',
	magicbeast:['mana','nature']

};

/**
 * get level when given tier begins.
 * @param {number} tier
 * @returns {number}
 */
export const tierLevel = (tier)=>{

	if ( tier >= TierTable.length ) return TierTable[ TierTable.length-1 ];
	else if ( tier <= 0 ) return 0;

	return TierTable[tier];

}

/**
 * Returns number of levels over tier start
 * a given level is.
 * For assigning higher counters within a tier.
 * @param {number} lvl
 * @returns {number}
 */
export const tierOffset = (lvl)=>{

	for( let i = TierTable.length-1; i>=0; i-- ) {
		if ( lvl >= TierTable[i] ) return lvl - TierTable[i];
	}
}

/**
 * Get loot tier/general item tier for level.
 * @param {number} [lvl=1]
 * @returns {number}
 */
export const getTier = (lvl=1) => {

	for( let i = TierTable.length-1; i>=0; i-- ) {
		if ( lvl >= TierTable[i] ) return i;
	}

}

/**
 * Get total skill levels associated with a kind/name/type string.
 * @param {object} map - map of string (kind/name/type) to appropriate skill.
 * @param {string} s
 * @param {Context} c
 */
export const SkillLevels = (map, s,c) => {

	let skill = map[s];
	if ( skill === undefined ) return 0;

	if ( typeof skill === 'string') {

		let data = c.getData(skill);
		return data ? data.value : 0;

	} else {

		let tot = 0;
		for( let i = skill.length-1; i >= 0; i-- ) {

			let data = c.getData(skill[i]);
			if ( data ) tot += data.value
		}

		return tot;

	}

}

/**
 * Total skill levels for monster type.
 * @param {string} kind - monster type.
 * @param {Context} c
 */
export const NpcLoreLevels = ( kind, c )=>{
	return SkillLevels( NpcLoreSkills, kind, c );
}


/**
 * Return book-type-resource cost for school.
 * @param {*} s
 */
export const getBookCost = (s)=>{ return BookCostTable[s]; }

/**
 * Get skill associated with a school.
 * @param {string} s
 * @returns {string|object}
 */
export const schoolSkill = (s)=>{ return skillMap[s] || s; }

/**
 *
 * @param {string} s
 * @returns {string|string[]}
 */
export const getSchool = s=>{ return SchoolTable[s] || s; }

/**
 * Get display name for a school.
 * @param {string} s
 */
export const schoolName = (s)=> { return schoolNames[s] || s; }

/**
 * base resource to buy item by school/kind.
 * @param {string} school
 * @param {number} tier
 */
export const schoolResource = ( school, lvl ) =>{

	lvl = getTier(lvl);

	let table = SchoolCostTable[school];
	if ( table ) {

		table = table[lvl];
		if ( table ) return table;

	}

	// default
	table = SchoolCostTable['other'];
	return table[lvl] || 'gems';

}

/**
 * @const {.<number,string>} BookCostTable - cost of basic research item, per tier.
 */
const BookCostTable = {

	0:'scrolls',
	1:'codices',
	2:'tomes',
	3:'runestones'

}

/**
 * @const SchoolCostTable School-> Loot Tier-> Base Resource Cost.
 */
export const SchoolCostTable = {

	shadow:{

		0:'bonedust',
		1:'bones',
		2:'shadowgem',
		3:'bodies'

	},
	nature:{

		0:'herbs',
		1:'naturegem'

	},
	fire:{

		1:'firegem',
		5:'firerune'

	},
	earth:{

		1:'earthgem',
		5:'earthrune'

	},
	water:{

		1:'watergem',
		5:'waterrune'

	},
	air:{

		1:'airgem',
		5:'airrune'

	},
	spirit:{

		1:'bonedust',
		2:'spiritgem',
		3:'souls'

	},
	light:{
		1:'lightgem',
		4:'sindel'

	},
	blood:{

		2:'bloodgem',
		3:'souls',
		5:'ichor'

	},
	other:{

		0:'gold',
		1:'gems',
		2:'managem',
		3:'runestones'
	}


}
/**
 *
 * @param {*} b - monster/npc
 * @param {Context} c - context for data.
 */
/*export const NpcSkillLevels = (b, c)=>{
	return SkillLevels( NpcInfoSkills, b.kind, c );
}*/
