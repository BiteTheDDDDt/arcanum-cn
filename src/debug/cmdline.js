export default class CmdLine {


	constructor(){
	}

	/**
	 *
	 * @param {string} line
	 */
	parse( line ) {

		if ( line == null ) return false;

		let parts = line.split(' ');;
		console.log( this.exec( parts, line ) );


	}

	/**
	 *
	 * @param {*} parts
	 * @param {string} path - original line, used for logging purposes.
	 */
	exec( parts, path='' ) {

		var context = window;
		let len = parts.length;

		for( let i = 0; i < len; i++ ) {

			var p = parts[i];
			if ( p === undefined || p === null ) {
				return ('Invalid Command: ' + path );
			}
			p = this.getValue( p, context );
			var sub = context[p];

			if ( sub === null || sub === undefined ) {

				return ('Not found: ' + path);

			} if ( typeof sub === 'function') {

				// call function with remainder of the parameters.
				return this.callFunc( context, sub, parts.slice(i+1) );

			} else if ( typeof sub !== 'object' ) {
				return sub;
			} else {
				context = sub;
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
	getValue( path, context=window ) {

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