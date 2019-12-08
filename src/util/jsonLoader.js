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
	 * @returns {Promise.<object.<string,object>} - Promise with an object with fileName
	 * keys mapping to loaded JSON objects.
	 */
	load( files=null ) {

		if ( files ) this.setFiles(files);

		let loads = this._loads;
		let req = this.requestInfo();

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