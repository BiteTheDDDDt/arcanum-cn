import GData from "./gdata";


export default class Recipe extends GData {

	get isRecipe(){return true;}

	constructor(vars=null) {

		super(vars);

	}

}