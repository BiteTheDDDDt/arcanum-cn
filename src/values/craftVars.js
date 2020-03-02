/**
 * Skills required to understand/buy npcs.
 */
const NpcInfoSkills = {

	beast:"animals",
	magicbeast:"magicbeasts",
	demon:"demonology",
	humanoid:"charms"



}

const CanBuyNpc = ( b, c )=>{

	let level = b.level;

}

/**
 * Get total skill levels associated with a kind/name/type string.
 * @param {object} map - map of string (kind/name/type) to appropriate skill.
 * @param {string} s
 * @param {Context} c
 */
const SkillLevels = (map, s,c) => {

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
 * Total skill levels for buying minion.
 * @param {*} b - monster/npc
 * @param {Context} c - context for data.
 */
const NpcSkillLevels = (b, c)=>{

	return SkillLevels( NpcInfoSkills, b.id, c) + SkillLevels( NpcInfoSkills, b.kind, c );

}
