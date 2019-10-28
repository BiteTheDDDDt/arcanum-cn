/**
 * @property {object.<string,string>} - maps school to skill/data determining school level.
 */
const schoolMap = {
	arcane:'mana'
}

/**
 * @property {.<string,string>} schoolName - maps school to display name.
 */
const schoolNames = {
	mana:'arcane'
}

export const mapSchool = (s)=>{ return schoolMap[s] || s; }

export const schoolName = (s)=> { return schoolNames[s] || s; }