import {randElm, randFrom, mapNonNull} from './util/array';

/**
 * Category to assign items with no property value
 * on the filter dimension.
 * e.g. filters['biome'] = { none:[npcs without biomes] }
 */
const BLANK_CATEGORY = 'none';

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
	 * @param {boolean} allowBlank - accept items with null value on property. e.g. biome:null
	 * @returns {Array}
	 */
	filtered( filter, match, allowBlank=false ) {

		let f = this.filterBy[filter];

		let res = f[match] || [];
		if ( allowBlank && f.hasOwnProperty(BLANK_CATEGORY) ) return res.concat( f[BLANK_CATEGORY ] );

		return res;

	}

	/**
	 * Get an array of categories under a filter.
	 * @param {string} filter
	 * @param {string|string[]} matches
	 * @param {boolean} allowBlank
	 * @returns {Array[]}
	 */
	getCategories( filter, matches, allowBlank ) {

		const subs = this.filterBy[filter];
		let res = [];

		if ( subs === undefined ) return res;
		if ( allowBlank && subs.hasOwnProperty(BLANK_CATEGORY)) res.push( subs[BLANK_CATEGORY]);
		if ( typeof matches === 'string') {

			if ( subs.hasOwnProperty(matches) ) res.push( subs[matches]);

		} else if ( Array.isArray(matches)) {

			for( let i = matches.length-1; i>= 0; i--) {
				var sub = subs[matches[i] ];
				if ( sub ) res.push(sub);
			}

		}

		return res;

	}

	/**
	 * Get a random item from a filtered subcategory.
	 * @param {string} filter - level/biome, etc.
	 * @param {string} matches - valid property matches.
	 * @param {boolean} allowBlank - accept items with no prop value on filter. e.g. biome:null
	 */
	randBy( filter, matches, allowBlank=false ) {

		var subs = this.filterBy[filter];
		if ( subs === undefined ) return null;

		if ( Array.isArray( matches ) ) {

			return randFrom( this.getCategories(filter, matches, allowBlank) );

		} else {

			return randElm( this.filtered( filter, matches, allowBlank) );

		}

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
			var cat = it[prop] || BLANK_CATEGORY;

			var list = group[ cat ];
			if ( list === undefined ) {

				group[ cat ] = [ it ];

			} else {
				list.push( it );
			}

		}

	}

}