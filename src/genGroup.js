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

		/**
		 * Data split/grouped by a variable/subcategory of the data
		 * @property {.<string,<string,Array>>} groupBy
		 */
		this.filterBy = {};

	}

	/**
	 * Get a random item at or below the given level.
	 * @property {number} level - max item level.
	 * @property {function} [pred=null] - optional filter predicate.
	 * @returns {GData}
	 */
	randBelow( level=1, pred) {

		let levels = this.filterBy.level;

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
	 * Get random item with no restriction.
	 * @returns {object}
	 */
	rand(){
		if ( this.items.length === 0) return null;
		return this.items[Math.floor(Math.random()*this.items.length)];
	}

	/**
	 * Get a filtered sublist.
	 * @param {string} filter - filter type 'level', 'biome' etc.
	 * @param {string} match - property value to match.
	 */
	filtered( filter, match ) {

		let f = this.filterBy[filter];
		if ( f !== undefined ) return f[match];

		return null;

	}

	/**
	 * Get a random item from a filtered subcategory.
	 * @param {string} filter - level/biome, etc.
	 * @param {string} matches - valid property matches.
	 */
	randBy( filter, matches ) {

		var o = this.filterBy[filter];
		if ( o===undefined) return null;

		o = filter[matches];
		if ( o===undefined || o.length === 0) return null;

		return o[ Math.floor( Math.random()*o.length) ];

	}

	/**
	 * Create a new named item category based on the 'prop' property
	 * of the items.
	 * @param {string} name - category name.
	 * @param {?string} prop - prop to sort on. defaults to name.
	 */
	makeFilter( name, prop) {

		let group = this.filterBy[name] = {};
		prop = prop || name;

		for( let i = this.items.length-1; i>= 0; i-- ) {

			var it = this.items[i];
			var cat = it[prop] || DEFAULT_CATEGORY;

			var list = group[ cat ];
			if ( list === undefined ) {

				group[ cat ] = [ it ];

			} else {
				list.push( it );
			}

		}

	}

}