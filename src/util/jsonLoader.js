/**
 * Build JSON request info for windows.fetch()
*/
export const RequestInfo = (creds) => {

	let headers = new Headers();
	//headers.append( 'Content-Type', 'text/plain');
	//headers.append( 'Content-Type', 'application/octet-stream');
	//headers.append( 'Origin', 'http://localhost');

	return {
		method:'GET',
		headers:headers,
		mode:'cors',

		/**
		 * send user credentials? 'omit', 'same-origin' or 'include'
		 */
		credentials: creds ? 'include' : 'same-origin'
	};

}

/**
 *
 * @param {string} url
 * @param {boolean} creds
 */
export const JSONLoad = (url, creds)=>{

	return window.fetch( url, RequestInfo(creds) ).then( r=>{

		if ( r.status !== 200 ) {
			console.warn('Status: ' + r.status );
			return null;
		} else return r.json();

	}, err=>null );

}

export default class JSONLoader {

	get results() {
		return this._results;
	}

	/**
	 * Loading promise.
	 */
	get promise(){
		return this._promise;
	}

	/**
	 *
	 * @param {string[]} files
	 */
	constructor( baseDir, files ){

		if ( baseDir && baseDir.length > 0 && baseDir[baseDir.length-1] !== '/' ) baseDir += '/';

		this._dir = baseDir || '/';
		if ( files ) this.setFiles(files);

	}

	/**
	 *
	 * @param {string[]} files
	 */
	setFiles( files ) {

		this._files = files;

		let obj = {};
		for( let i = files.length-1; i>= 0; i-- ) {

			obj[ files[i] ] = null;

		}

		this._loads = obj;

	}

	/**
	 *
	 * @param {?string[]} [files=null]
	 * @returns {Promise.<object.<string,object>>} - Promise with an object with fileName
	 * keys mapping to loaded JSON objects.
	 */
	load( files=null ) {

		if ( files ) this.setFiles(files);

		let loads = this._loads;
		let req = RequestInfo();

		let promiseArr = [];
		for( let p in loads ) {

			promiseArr.push( window.fetch( this._dir + p + '.json', req ).then( r=>{

					if ( r.status !== 200 ) {
						console.warn('Bad Status: ' + r.status );
						loads[p] = null;
						return loads[p];
					} else return r.json().then( json=>loads[p] = json );

				}, e=>(loads[p]=null))

			);

			//promiseArr.push( loads[p]);

		}

		return this._promise = Promise.all( promiseArr ).then( ()=>loads, e=>{
			console.error( e.message + '\n' + e.stack );
		});

	}

}