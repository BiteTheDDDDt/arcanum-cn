import dataLoader, { loadFiles } from "../dataLoader";
import { freezeData } from "@/util/util";

const HALL_ID = "hall";

/**
 * Class for loading and storing json plugin in a well-defined format.
 */
export default class Module {
	/**
	 * @property {.<string,object>} objects - raw untyped object templates.
	 * used for reloading and comparing for data save.
	 */
	get objects() {
		return this._objects;
	}
	set objects(v) {
		this._objects = v;
	}

	/**
	 * Lists of items by type of data.
	 * @property {Object.<string,object[]>}
	 */
	get lists() {
		return this._lists;
	}
	set lists(v) {
		this._lists = v;
	}

	/**
	 * Hall data module. Separate from lists and objects.
	 * @property {Module}
	 */
	get hall() {
		return this._hall;
	}
	set hall(v) {
		this._hall = v;
	}

	/**
	 * @property {string} name
	 */
	get name() {
		return this._name;
	}
	set name(v) {
		this._name = v;
	}

	/**
	 * @property {string} sym
	 */
	get sym() {
		return this._sym;
	}
	set sym(v) {
		this._sym = v;
	}

	get author() {
		return this._author;
	}
	set author(v) {
		this._author = v;
	}

	get email() {
		return this._email;
	}
	set email(v) {
		this._email = v;
	}

	get git() {
		return this._git;
	}
	set git(v) {
		this._git = v;
	}

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
	setData(data, name, sym) {
		this.name = name;
		this.sym = sym;
		this.fileLoaded(data);
	}

	/**
	 * Load module data file.
	 * Resolves to the module on load.
	 * @property {string|string[]} file
	 * @property {string} dir - loading subdirectory.
	 * @returns {Promise.<GModule>} - this module.
	 */
	load(file, dir) {
		if (Array.isArray(file)) {
			return loadFiles(file, dir).then(v => this.typesLoaded(v));
		} else {
			this.name = file;
			// files returned as string->file data mapping. get the file data itself.
			return loadFiles([file], dir).then(v => this.fileLoaded(v[file]));
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
		const modules = [];
		for (const p in files) {
			const file = files[p];
			if (!file) {
				console.warn("no file: " + p);
			} else if (p === HALL_ID) {
				this.addHall(file);
			} else if (file.module) {
				let mod = new Module();
				mod.setData(file);
				modules.push(mod);
			} else {
				this.lists[p] = this.parseList(files[p]);
			}
		}

		// merge in submodules.
		for (let i = modules.length - 1; i >= 0; i--) {
			this.merge(modules[i]);
		}

		return this;
	}

	/**
	 * Single Module file loaded.
	 * @param {object} mod
	 * @returns {GModule} this module.
	 */
	fileLoaded(mod) {
		this.lists = mod.data;

		this.name = mod.module || this.name;
		this.sym = mod.sym || this.sym;

		if (mod.data) {
			this.parseLists(mod.data);
		}

		return this;
	}

	/**
	 * Parse named lists of objects.
	 * @param {.<string,object[]} lists
	 */
	parseLists(lists) {
		for (let p in lists) {
			if (p === HALL_ID) {
				this.addHall(lists[p]);
				delete this.lists[p];
			} else this.parseList(lists[p]);
		}
	}

	addHall(hallData) {
		let hallMod = new Module();
		if (!hallData.data) {
			let { name, sym, ...data } = hallData;
			hallData = { name: name, sym: sym, data: data };
		}
		hallMod.setData(hallData, this.name, this.sym);
		if (this.hall) this.mergeHall(hallMod);
		else this.hall = hallMod;
	}

	mergeHall(hallMod) {
		if (!this.hall) this.hall = new Module();
		this.hall.merge(hallMod);
	}

	/**
	 * Perform initial parsing of a list of untyped data objects.
	 * @param {object[]} arr
	 */
	parseList(arr) {
		const sym = this.sym;
		const modName = this.name;

		for (let i = 0; i < arr.length; i++) {
			const it = arr[i];
			if (!it.id) {
				console.warn("missing id: " + it.name);
				continue;
			}
			if (modName) it.module = modName;
			if (sym) it.sym = it.sym || sym;

			this.objects[it.id] = freezeData(it);
		}

		return arr;
	}

	/**
	 * Merge module into this module.
	 * @param {GModule} mod - module to merge.
	 * @param {*} insertLists
	 */
	merge(mod) {
		let items = mod.objects;
		let dest = this.objects;

		for (let p in items) {
			/** @note merge overwrites */
			dest[p] = items[p];
		}

		for (let p in mod.lists) {
			let list = mod.lists[p];
			dest = this.lists[p];

			if (!Array.isArray(dest)) {
				this.lists[p] = list.slice(0);
				continue;
			}

			for (let i = 0; i < list.length; i++) {
				dest.push(list[i]);
			}
		}

		if (mod.hall) this.mergeHall(mod.hall);
	}

	/**
	 * Use module templates to create instanced data and instanced data lists.
	 * @param {object} saveData
	 * @returns {object} - game data, items, standard loaded lists.
	 */
	instance(saveData = {}) {
		return dataLoader.instance(this.objects, this.lists, saveData);
	}
}
