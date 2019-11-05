/**
 * @property {object.<string,string|object>} - maps school to skill/data determining school level.
 */
const schoolMap = {
	mana:{
		id:'lore',
		reqs:2	// requirements doubled when unlocking with skill
	}
}

schoolMap.arcane = schoolMap.lore = schoolMap.mana;



/**
 * @property {.<string,string>} schoolName - maps school to display name.
 */
const schoolNames = {
	mana:'arcane'
}

const POTION = 'potion';
const ITEM = 'item';
const NPC = 'npc';

const RESOURCE = 'resource';
const SKILL = 'skill';
const ENCOUNTER = 'enc';
const WEARABLE = 'wearable';
const MONSTER = 'monster';
const HOME = 'home';
const ARMOR = 'armor', WEAPON = 'weapon';

const DUNGEON = 'dungeon';
const LOCALE = 'locale';
const EXPLORE = 'explore';
const RAID = 'raid';

export { RAID, DUNGEON, EXPLORE, LOCALE };
export { HOME, RESOURCE, NPC, SKILL, ENCOUNTER, WEARABLE, MONSTER, ARMOR, WEAPON };

/**
 * @const {number[]} TierTable - levels when given tiers start.
 */
const TierTable = [0, 3, 6, 11, 20];

/**
 * @const {.<string,string|string[]>} SchoolTable - converts string to associated school.
 */
export const SchoolTable = {

	arcane:'mana',
	swamp:['shadow','water'],
	plains:'light',
	woods:'nature',
	mountains:['fire','earth','air'],
	hills:['earth','air'],
	cave:['shadow','earth'],
	sea:'water',
	town:[ 'blood', 'mana'],
	humanoid:'blood',
	undead:'shadow',
	construct:'crafting',
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
export const tierDelta = (lvl)=>{

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
 * Return book-type-resource cost for school.
 * @param {*} s
 */
export const getBookCost = (s)=>{ return BookCostTable[s]; }

/**
 * Get school associated with a string.
 * @param {string} s
 */
export const getSchool = (s)=>{ return schoolMap[s] || s; }

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
		2:'shadowgem'

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
		1:'lightgem'

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