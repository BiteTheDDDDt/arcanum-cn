import dataLoader, { loadFiles, freezeData } from '../dataLoader';

/**
 * Class for loading and storing json plugin in a well-defined format.
 */
export default class Module {

	/**
	 * @property {.<string,object>} objects - raw untyped object templates.
	 * used for reloading and comparing for data save.
	 */
	get objects() { return this._objects; }
	set objects(v) { this._objects =v; }

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

	get author() {return this._author;}
	set author(v) { this._author=v;}

	get email() {return this._email;}
	set email(v) { this._email=v;}

	get git() {return this._git;}
	set git(v) { this._git=v;}

	/**
	 * @property {object.<string,GData>} items - index of instanced items.
	 */
	/*get items() { return this._items; }
	set items(v){this._items=v;}*/

	/**
	 *
	 */
	constructor() {

		this.objects = {};
		this.lists = {};

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
	 * @property {string|string[]} file
	 * @property {string} dir - loading subdirectory.
	 * @returns {Promise.<GModule>} - this module.
	 */
	load( file, dir ) {

		if ( Array.isArray(file) ) {

			return loadFiles( file, dir ).then( (v)=>this.typesLoaded(v) );

		} else {
			this.name = file;
			// files returned as string->file data mapping. get the file data itself.
			return loadFiles( [ file ], dir ).then( (v)=>this.fileLoaded( v[file] ) );

		}

	}

	/**
	 * Separate module files loaded. Each file is a list of objects
	 * of the same type.
	 * @param {.<string,object[]>} files - filename to file data.
	 * @returns {GModule} this module.
	 */
	typesLoaded(files) {

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

		// merge in submodules.
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
		this.lists = mod.data;

		this.name = mod.module || this.name;
		this.sym = mod.sym;

		if ( mod.data ){
			this.parseLists( mod.data );
		}

		return this;

	}

	/**
	 * Parse named lists of objects.
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

			this.objects[ it.id ] = freezeData( it );

		}

		return arr;

	}

	/**
	 * Merge module into this module.
	 * @param {GModule} mod - module to merge.
	 * @param {*} insertLists
	 */
	merge( mod ) {

		let items = mod.objects;
		let dest = this.objects;

		for( let p in items ) {
			/** @note merge overwrites */
			dest[p] = items[p];
		}

		for( let p in mod.lists ) {

			let list = mod.lists[p];
			dest = this.lists[p];

			if ( !Array.isArray(dest)) {

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
		return dataLoader.instance( this.objects, this.lists, saveData );
	}

}