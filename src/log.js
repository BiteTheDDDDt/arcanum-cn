export class LogItem {

	constructor( title='', text='', type=''){

		this.text = text;
		this.title = title;

		/**
	 	* @var {string} type - message type.
	 	*/
		this.type = type;

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

	log( title='', text='', type='event' ) {

		this.items.push( new LogItem(title, text, type ) );
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