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

		this._dir = baseDir || '/';
		if ( files ) this.setFiles(files);

	}

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
	 * @returns {Promise.<object.<string,object>} - Promise with an object where each key
	 * is a file name mapping to the loaded json.
	 */
	load( files=null ) {

		if ( files ) this.setFiles(files);

		let loads = this._loads;
		let req = this.requestInfo();

		let promiseArr = [];
		for( let p in loads ) {

			loads[p] = new Promise(

				v=>window.fetch( this._dir + v + '.json', req ).then( r=>{

					if ( r.status !== 200 ) return loads[p] = null;
					return r.json().then(
						json=>loads[p] = json
					);

				})
			);

			promiseArr.push( loads[p]);

		}

		return this._promise = Promise.all( promiseArr ).then( loads, err=>{ console.error(err); });

	}

	/**
	 * All promises in the loads object have loaded.
	 * Convert promises to their json data.
	 * @param {*} loads
	 */
	_loaded( loads ){
		for( let p in loads ) {
		}
	}

	/**
	 * Build JSON request info for making the fetch request.
	 */
	requestInfo(){

		let headers = new Headers();
		headers.append( 'Content-Type', 'text/json');

		return {
			method:'GET',
			headers:headers,
			mode:'cors',
			credentials:'same-origin'
		};
	}

}