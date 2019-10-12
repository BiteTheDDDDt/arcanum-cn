import {randElm} from './util/util';

/**
 * Category to assign items with no property value
 * on the filter dimension.
 * e.g. filters['biome'] = { any:[npcs without biomes] }
 */
const DEFAULT_CATEGORY = 'any';

/**
 * Item generation group for a given item type.
 */
export default class GenGroup {

	/**
	 *
	 * @param {GData[]} items
	 */
	constructor( items ){

		this.items= items.filter( v=>!v.unique );
		this.filters = {};

	}

	/**
	 * Get a random item at or below the given level.
	 * @property {number} level - max item level.
	 * @property {function} [pred=null] - optional filter predicate.
	 * @returns {GData}
	 */
	randBelow( level=1, pred) {

		let levels = this.filters.level;

		let st = 1 + Math.floor( Math.random()*level );
		let i = st;

		var it;

		do {

			it = randElm( levels[i] );
			if ( it != null && (!pred || pred(it) ) ) return it;

			if ( --i < 0 ) i = level;

		} while ( --level >= 0 );

		return it;

	}

	/**
	 * Get a random item without any restriction
	 * @returns {object}
	 */
	rand(){
		if ( this.items.length === 0) return null;
		return this.items[Math.floor(Math.random()*this.items.length)];
	}

	/**
	 * Get a filtered sublist.
	 * @param {string} filter - filter type 'level', 'biome' etc.
	 * @param {string} match
	 */
	filtered( filter, match ) {

		let f = this.filters[filter];
		if ( f !== undefined ) return f[match];

		return null;

	}

	/**
	 * Get a random item from a filtered subcategory.
	 * @param {string} filter
	 * @param {string} match - filter category.
	 */
	filterRand( filter, match ) {

		var o = this.filters[filter];
		if ( o===undefined) return null;

		o = filter[match];
		if ( o===undefined || o.length === 0) return null;

		return o[ Math.floor( Math.random()*o.length) ];

	}

	/**
	 * Create a new named item category based on the 'prop' property
	 * of the items.
	 * @param {string} name - category name.
	 * @param {string} prop - prop to sort on. equal to name by default.
	 */
	makeFilter( name, prop='') {

		let filter = this.filters[name] = {};
		prop = prop || name;

		for( let i = this.items.length-1; i>= 0; i-- ) {

			var it = this.items[i];
			var cat = it[prop] || DEFAULT_CATEGORY;

			var list = filter[ cat ];
			if ( list === undefined ) {

				filter[ cat ] = [ it ];

			} else {
				list.push( it );
			}

		}

	}

}