import { loadFiles, prepData } from '../dataLoader';

/**
 * Class for loading and storing module json in a well-defined format.
 */
export default class Module {

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
	 * Lists by type of data.
	 * @property {Object.<string,object[]>}
	*/
	get lists(){return this._lists; }
	set lists(v){this._lists=v;}

	constructor( file ) {

		this.file = file;

	}

	/**
	 * Load module data file.
	 */
	load() {

		loadFiles( [ this.file ] ).then( (v)=>{

			let mod = v[this.file];
			if ( !mod ) {
				console.warn( this.file + ' data missing' );
			} else {

				this.name = mod.module || this.file;
				this.sym = mod.sym;

				let data = mod.data;
				if ( data ){

					let lists = {};

					for( let p in data ){

						lists[p] = this.parseList( data[p] );


					}


				}

				this.hall.setData( mod );


			}


		});

	}

	parseList( arr ){

		for( let i = arr.length-1; i >= 0; i-- ) {

			var it = arr[i];
			mod[it.id] = prepData(it);

		}

	}

}