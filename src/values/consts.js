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

export const getSchool = (s)=>{ return schoolMap[s] || s; }

export const schoolName = (s)=> { return schoolNames[s] || s; }

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
	humanoid:'mana',
	undead:'shadow',
	dragon:'fire',
	beast:'nature',
	magicbeast:['mana','nature']

};

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
 * @const SchoolCostTable School-> Loot Tier-> Base Resource Cost.
 */
export const SchoolCostTable = {

	shadow:{

		0:'gems',
		1:'shadowgem'

	},
	mana:{

		0:'gems',
		1:'managem'

	},
	nature:{

		0:'gems',
		1:'managem'

	},
	fire:{

		0:'gems',
		1:'managem'

	},
	earth:{

		0:'gems',
		1:'managem'

	},
	water:{

		0:'gems',
		1:'managem'

	},
	air:{

		0:'gems',
		1:'managem'

	},
	spirit:{

		0:'gems',
		1:'managem'

	},
	light:{
		0:'gems',
		1:'managem'

	},
	blood:{

		0:'gems',
		1:'managem'

	},
	other:{
		0:'gems',
		1:'managem',
		2:'runestones'
	}


}