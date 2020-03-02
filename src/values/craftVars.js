/**
 * Skills required to understand/buy npcs.
 */
const NpcLoreSkills = {

	beast:"animals",
	magicbeast:"magicbeasts",
	demon:"demonology",
	humanoid:["charms","history","summoning"],
	undead:["necromancy","reanimation"],
	kell:["naturelore"],
	celestial:["lightlore","planeslore"],
	construct:"crafting",
	elemental:["waterlore","firelore","earthlore","airlore"],
	giant:["charms","summoning"],
	ghost:["spiritlore","conjuration"],
	spirit:["spiritlore","conjuration"]



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
		return data ? data.level : 0;

	} else {

		let tot = 0;
		for( let i = skill.length-1; i >= 0; i-- ) {

			let data = c.getData(skill[i]);
			if ( data ) tot += data.level
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
 *
 * @param {*} b - monster/npc
 * @param {Context} c - context for data.
 */
/*export const NpcSkillLevels = (b, c)=>{
	return SkillLevels( NpcInfoSkills, b.kind, c );
}*/
