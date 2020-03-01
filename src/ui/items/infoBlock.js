import { DisplayItem } from "./displayItem";
import {RollOver} from 'ui/popups/itemPopup.vue';

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