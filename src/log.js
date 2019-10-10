import { LogTypes } from './events';

export class LogItem {

	constructor( title='', text='', type=1, subtype=''){

		this.text = text;
		this.title = title;

		/**
	 	* @var {number} type - message type.
	 	*/
		this.type = type;

		this.subtype = subtype;

		this.count = 1;
	}

}

export default class Log {

	constructor( vars=null ) {

		if ( vars ) Object.assign( this, vars );

		/**
		 * @property {LogItem[]} items
		 */
		this.items = this.items || [];

		/**
		 * @property {number} maxItems
		 */
		this.maxItems = this.maxItems || 100;

		this.initCounts();

	}

	/**
	 * Counts of each event type.
	 */
	initCounts() {

		this.counts = this.counts || {};
		for( let p in LogTypes ) {
			this.counts[ LogTypes[p] ] = 0;
		}

	}

	clear( types ) {

		if ( types ) {

			this.cut( types, this.items.length );

		} else {

			this.items.splice( 0, this.items.length );
			this.initCounts();
		}

	}

	log( title='', text='', type=1, sub=null ) {

		if ( this.tryMatch( title, text, type ) ) return;

		this.items.push( new LogItem(title, text, type, sub ) );

		if ( ++this.counts[type] >= this.maxItems+50 ) {
			this.cut( type )
		}

	}

	/**
	 * cut previous items of the given log type.
	 * @param {number} type - OR'd types
	 * @param {number} [count=50]
	 */
	cut( type, count=50 ) {

		let max = this.items.length;

		let del = 0;

		// new bottom elements.
		let bot = [];

		var i = 0;
		while ( i < max) {

			var it = this.items[i++];
			if ( it.type === type ){

				if ( ++del >= count ) break;

			} else bot.push( it );


		} //

		this.counts[type] -= del;
		//console.log('CUT TYPE ' + type + ' COUNT: ' + this.counts[type] );

		this.items = i < max ? bot.concat( this.items.slice(i) ) : bot;

	}

	/**
	 *
	 * @param {*} title
	 * @param {*} text
	 * @param {*} type
	 * @returns {boolean} true if new message was combined with an
	 * existing message.
	 */
	tryMatch( title, text, type ) {

		for( let i = this.items.length-1; i>=0; i-- ) {

			var last = this.items[i];
			if ( (type & last.type) === 0 ) continue;

			if ( last.title === title && last.text === text ) {

				last.count++;
				return true;

			}

			return false;
		}

	}

	logItem(it) {

		if ( this.tryMatch(it.title, it.text, it.type) ) return;

		this.items.push( it);

		if ( ++this.counts[type] >= this.maxItems+50 ) {
			this.cut( type )
		}

	}

}