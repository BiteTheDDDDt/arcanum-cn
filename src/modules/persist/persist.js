const HALL_FILE = "hall";
const SETTINGS_DIR = "settings/";

const Remote = null;

/**
 * Handles persisting data to various sources: local, remote, file.
 */
export const Persist = {
	loggedIn() {
		return Remote?.loggedIn;
	},

	logout() {
		if (Remote?.loggedIn) Remote.logout();
	},

	loaders: [],

	/**
	 *
	 * @param {*} loader
	 * @param {boolean} first - whether this should be first loader attempted.
	 */
	addLoader(loader, first) {
		if (first) {
			this.loaders.unshift(loader);
		} else {
			this.loaders.push(loader);
		}
		return loader;
	},

	/**
	 * Clear all data.
	 */
	async clearAll() {
		for (let i = 0; i < this.loaders.length; i++) {
			try {
				this.loaders[i].clearAll();
			} catch (err) {
				console.warn(err);
			}
		}
	},

	async deleteChar(charid) {
		for (let i = 0; i < this.loaders.length; i++) {
			try {
				this.loaders[i].deleteChar(charid);
			} catch (err) {
				console.warn(err);
			}
		}
	},

	/**
	 * @param {string} data
	 * @param {string} charid
	 *
	 * @returns {Promise.<object>}
	 */
	async saveChar(data, charid) {
		let saved = false;
		for (let i = 0; i < this.loaders.length; i++) {
			const ldr = this.loaders[i];
			//if ( saved && ldr.fallback ) continue;

			try {
				await ldr.saveChar(data, charid);
				saved = true;
			} catch (err) {
				console.warn(err);
			}
		}
	},

	/**
	 * @param {string} data
	 * @param {?string} [hid=HALL_FILE]
	 */
	async saveHall(data) {
		let saved = false;

		for (let i = 0; i < this.loaders.length; i++) {
			const ldr = this.loaders[i];
			//if ( saved && ldr.fallback ) continue;
			try {
				await ldr.saveHall(data, HALL_FILE);
				saved = true;
			} catch (err) {
				console.warn(err);
			}
		}
	},

	/**
	 *
	 * @param {string} charid
	 * @returns {Promise<object>}
	 */
	async loadChar(charid) {
		for (let i = 0; i < this.loaders.length; i++) {
			const res = await this.loaders[i].loadChar(charid);
			if (res) return res;
		}
	},

	/**
	 * @returns {Promise.<object>}
	 */
	async loadHall(hid = HALL_FILE) {
		for (let i = 0; i < this.loaders.length; i++) {
			const res = await this.loaders[i].loadHall(hid);
			if (res) return res;
		}
	},

	saveSettings(data, charid) {
		window.localStorage.setItem(this.settingsLoc(charid), data);
	},

	loadSettings(charid) {
		return window.localStorage.getItem(this.settingsLoc(charid));
	},

	/**
	 * Path of settings file for character.
	 * @param {string} charid
	 * @returns {string} path to settings file.
	 */
	settingsLoc(charid) {
		return SETTINGS_DIR + "/" + charid + "/";
	},
};
