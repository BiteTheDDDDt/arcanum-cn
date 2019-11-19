import dataLoader, { loadFiles, freezeData } from '../dataLoader';


/**
 * Class for loading and storing module json in a well-defined format.
 */
export default class Module {

	/**
	 * @property {.<string,object>} templates - raw untyped object templates.
	 * used for reloading and comparing for data save.
	 */
	get templates() { return this._templates; }
	set templates(v) { this._templates =v; }

	/**
	 * Lists of items by type of data.
	 * @property {Object.<string,object[]>}
	*/
	get lists(){return this._lists; }
	set lists(v){this._lists=v;}

	/**
	 * @property {string} name
	 */
	get name() {return this._name;}
	set name(v) { this._name=v;}

	/**
	 * @property {string} sym
	 */
	get sym(){return this._sym; }
	set sym(v) {this._sym =v;}

	/**
	 * @property {object.<string,GData>} items - index of instanced items.
	 */
	/*get items() { return this._items; }
	set items(v){this._items=v;}*/

	/**
	 *
	 * @param {?object} [data=null]
	 */
	constructor() {
	}

	/**
	 * Directly set module data in json-module format.
	 * @param {object} data
	 */
	setData( data ) {
		this.fileLoaded(data);
	}

	/**
	 * Load module data file.
	 * Resolves to the module on load.
	 * @returns {Promise.<GModule>} - this module.
	 */
	load( file ) {

		if ( Array.isArray(file) ) {

			return loadFiles( file ).then( (v)=>this.typesLoaded(v) );

		} else {
			this.name = file;
			// files returned as string->file data mapping. get the file data itself.
			return loadFiles( [ file ] ).then( (v)=>this.fileLoaded( v[file] ) );

		}

	}

	/**
	 * Separate module files loaded. Each file is a list of objects
	 * of the same type.
	 * @param {.<string,object[]>} files
	 * @returns {GModule} this module.
	 */
	typesLoaded(files) {

		this.templates = {};
		this.lists = {};

		// modules can only be merged after all lists have been made.
		let modules = [];
		for( let p in files ) {

			var file = files[p];
			if ( !file ) {
				console.warn('no file: ' + p );

			} else if ( file.module ) {

				let mod = new Module();
				mod.setData( file );
				modules.push(mod);

			} else {
				this.lists[p] = this.parseList( files[p] );
			}

		}

		// marge in submodules.
		for( let i = modules.length-1; i>= 0; i-- ) {
			this.merge( modules[i] );
		}

		return this;

	}

	/**
	 * Single Module file loaded.
	 * @param {object} mod
	 * @returns {GModule} this module.
	 */
	fileLoaded( mod ) {

		//console.log('File Loaded: ' + mod.module );

		this.templates = {};
		this.lists = mod.data;

		this.name = mod.module || this.name;
		this.sym = mod.sym;

		if ( mod.data ){
			this.parseLists( mod.data );
		}

		return this;

	}

	/**
	 *
	 * @param {.<string,object[]} lists
	 */
	parseLists( lists ){

		for( let p in lists ) {
			this.parseList( lists[p] );
		}

	}

	/**
	 * Perform initial parsing of a list of untyped data objects.
	 * @param {object[]} arr
	 */
	parseList( arr ){

		let sym = this.sym;
		let modName = this.name;

		for( let i = arr.length-1; i >= 0; i-- ) {

			var it = arr[i];
			if ( !it.id ){
				console.warn('missing id: ' + it.name );
				continue;
			}
			if ( modName ) it.module = modName;
			if ( sym ) it.sym = it.sym || sym;

			this.templates[ it.id ] = freezeData( it );

		}

		return arr;

	}

	/**
	 * Merge module into this module.
	 * @param {GModule} mod
	 * @param {*} insertLists
	 */
	merge( mod ) {

		let items = mod.templates;
		let dest = this.templates;

		for( let p in items ) {
			/**@todo maybe safeMerge in future. */
			dest[p] = items[p];
		}

		for( let p in mod.lists ) {

			let list = mod.lists[p];
			dest = this.lists[p];

			if ( !Array.isArray(dest)) {

				//console.warn( 'DEST NONARRAY: ' + p );
				this.lists[p] = list.slice(0);
				continue;

			}

			for( let i = list.length-1; i >= 0; i-- ) {
				dest.push( list[i] );
			}


		}


	}

	/**
	 * Use module templates to create instanced data and instanced data lists.
	 * @param {object} saveData
	 * @returns {object} - game data, items, standard loaded lists.
	 */
	instance( saveData={} ){
		return dataLoader.instance( this.templates, this.lists, saveData );
	}

}