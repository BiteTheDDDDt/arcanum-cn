export default class CmdLine {

	/**
	 *
	 * @param {Debug} context - starting execution context for all commands.
	 */
	constructor( context ){

		this.context = context;

		/**
		 * @property {string[]} history - history of commands entered.
		 */
		this.history = [];

		/**
		 * @property {number} hIndex - index of history being viewed.
		 * resets on command entered.
		 */
		this.hIndex = -1;

	}

	/**
	 * previous lines are higher history indices.
	 */
	prevLine(){


		if ( ++this.hIndex >= this.history.length ) {
			this.hIndex = this.history.length-1;
		}
		return this.hIndex >= 0 ? this.history[this.hIndex] : '';

	}

	nextLine(){

		if ( --this.hIndex < 0 ) {
			this.hIndex = -1;
		} else if ( this.hIndex >= this.history.length ) {
			this.hIndex = this.history.length-1;
		}

		if ( this.hIndex >= 0 ) return this.history[this.hIndex];

		return '';

	}

	/**
	 *
	 * @param {string} line
	 */
	parse( line ) {

		if ( line == null ) return false;

		this.history.unshift(line);
		if ( this.history.length >= 100 ) this.history.pop();
		this.hIndex = -1;

		line = line.toLowerCase();
		let parts = line.split(' ');
		console.log( this.exec( parts, line ) );


	}

	/**
	 *
	 * @param {*} parts
	 * @param {string} path - original line, used for logging purposes.
	 */
	exec( parts, path='' ) {

		var context = this.context;
		let len = parts.length;

		for( let i = 0; i < len; i++ ) {

			var p = parts[i];
			if ( p === undefined || p === null ) {
				return ('Invalid Command: ' + path );
			}
			var sub = this.getValue( p, context );

			if ( sub === null || sub === undefined ) {

				return ('Not found: ' + path);

			} if ( typeof sub === 'function') {

				// call function with remainder of the parameters.
				return this.callFunc( context, sub, parts.slice(i+1) );

			} else if ( typeof sub === 'object' ) {
				context = sub;
			} else {
				return sub;
			}

		}

		return sub;

	}

	callFunc( context, f, params ) {
		return f.apply( context, params ? params.map( this.getValue, this ) : null);
	}

	/**
	 * Get raw parameter value, or value of variable at the path specified.
	 * @param {*} path
	 */
	getValue( path, context=this.context ) {

		if ( !isNaN(path)) return Number(path);

		// attempt to split into path parts.
		let parts = path.split('.');

		let len = parts.length;
		for( let i = 0; i < len; i++ ) {

			var p = context[parts[i]];
			if ( p === undefined ) return path;
			else if ( typeof p === 'object') context = p;
			else return p;

		}

		return context;

	}

}