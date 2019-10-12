export const POTION = 'potion';
export const ARMOR = 'armor';
export const WEAPON = 'weapon';
export const ITEM = 'item';
export const MONSTER = 'monster';
export const NPC = 'npc';

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

export const Schools = {

	NATURE:'nature',
	LIGHT:'light',
	WATER:'water',
	AIR:'air',
	FIRE:'fire'

};