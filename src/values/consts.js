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
 * Conversion of constants to school.
 */
export const SchoolConvert = {

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

export const RAID = 'raid';

export { DUNGEON, EXPLORE, LOCALE };
export { HOME, RESOURCE, NPC, SKILL, ENCOUNTER, WEARABLE, MONSTER, ARMOR, WEAPON };