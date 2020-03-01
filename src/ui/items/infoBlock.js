import { DisplayItem } from "./displayItem";
import {RollOver} from 'ui/popups/itemPopup.vue';

import { SKILL } from '../../values/consts';

/**
* Name to use for object in current context.
*/
export const DisplayName = ( obj ) => {

	let it = RollOver.context.getData(obj);
	return it ? it.name : obj;

}

/**
 * Convert item path display based on next subprop.
 * Certain properties indicate the display path should be treated specially,
 * such as switching the order of 'max' or omitting 'base' and 'value' display.
 */
var PathConversions = {

	effect:( rootPath )=>rootPath,
	skipLocked:()=>undefined,
	max:( rootPath )=>'max ' + rootPath,
	rate:(rootPath, subPath)=>{

		subPath = rootPath;

		let ind = rootPath.indexOf('.');
		if ( ind > 0 ) {

			let baseItem = RollOver.context.getData( rootPath.slice(0,ind) );
			if ( baseItem && baseItem.type === SKILL ) subPath = 'train ' + subPath + ' rate';

		}

		return subPath;
	}


};

PathConversions.mod = PathConversions.base = PathConversions.value = PathConversions.effect;

/**
* Convert display path based on current path object
* and current property being displayed.
* @returns {string} path displayed. returns undefined if no information
* should be displayed for this variable path.
*/
export const ConvertPath = ( rootPath, prop ) => {

	let func = PathConversions[prop];
	if ( func !== undefined ) {

		// use conversion function.
		return func( rootPath, prop );

	} else {

		// no conversion func.
		prop = DisplayName( prop );
		return rootPath ? rootPath + ' ' + prop : prop;

	}

}

/**
 * Collection of display info.
 */
export class InfoBlock {

	constructor(){

		this.results = {};

	}

	add( itemName, value, isRate ){

		let cur = this.results[itemName];
		if ( cur === undefined ){

			this.results[itemName] = new DisplayItem(itemName, value, isRate );

		} else {

			cur.add( value );

		}

	}

}