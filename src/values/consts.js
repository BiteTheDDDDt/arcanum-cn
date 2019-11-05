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
	dragon:'fire',
	beast:'nature',
	magicbeast:['mana','nature']

};

/**
 * Get loot tier/general item tier for level.
 * @param {number} [lvl=1]
 */
export const getTier = (lvl=1) =>{

	if ( lvl <= 2 ) return 0;
	if ( lvl <= 5 ) return 1;
	if ( lvl <= 10 ) return 2;

	return 3;

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
 * @param {number} [tier=1]
 */
export const getSchoolResource = ( school, tier=1 ) =>{

	let table = SchoolCostTable[school];
	if ( table ) {

		table = table[tier];
		if ( table ) return table;

	}

	// default
	table = SchoolCostTable['other'];
	return table[tier] || 'gems';

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