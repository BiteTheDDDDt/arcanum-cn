export class LogItem {

	constructor( title='', text='', type='', subtype=''){

		this.text = text;
		this.title = title;

		/**
	 	* @var {string} type - message type.
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

	}

	clear() {
		this.items.splice( 0, this.items.length );
	}

	log( title='', text='', type='event', sub=null ) {

		if ( this.items.length > 0 ) {

			let last = this.items[this.items.length-1];
			if ( last.type === type && last.title === title && last.text === text ) {

				last.count++;
				return;

			}

		}
		this.items.push( new LogItem(title, text, type, sub ) );


		if ( this.items.length >= this.maxItems+50 ) {
			this.items.splice( 0, 50 );
		}

	}

	logItem(it) {

		this.items.push( it);
		if ( this.items.length >= this.maxItems+50 ) {
			this.items.splice( 0, 50 );
		}

	}

}