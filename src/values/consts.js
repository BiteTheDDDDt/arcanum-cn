
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