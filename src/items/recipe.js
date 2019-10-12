import GData from "./gdata";


export default class Recipe extends GData {

	get isRecipe(){return true;}
	set isRecipe(v){}

	constructor(vars=null) {

		super(vars);

	}

}