/**
 * window.localStorage is deprecated due to size limitations.
 * Should only be used as a fallback.
 * @param {*} persist
 * @returns
 */
export const useLocalStorage = persist => {
	const SAVE_DIR = "";
	const CHARS_DIR = "chars/";

	return persist.addLoader({
		fallback: true,

		/**
		 * Clear all stored data.
		 */
		clearAll() {
			window.localStorage.clear();
		},

		deleteChar(charid) {
			window.localStorage.setItem(this.charLoc(charid), null);
		},

		saveChar(data, charid) {
			window.localStorage.setItem(this.charLoc(charid), data);
		},

		loadChar(charid) {
			const str = window.localStorage.getItem(this.charLoc(charid));

			if (str) {
				return JSON.parse(str);
			}
			console.log("CHAR NOT FOUND");
			return null;
		},

		/**
		 *
		 * @param {string} data
		 */
		saveHall(data, hid) {
			window.localStorage.setItem(this.hallLoc(hid), data);
		},

		loadHall(hid) {
			let str = window.localStorage.getItem(this.hallLoc(hid));
			if (str) return JSON.parse(str);
			console.log("LOCAL HALL NOT FOUND");
			return null;
		},

		charLoc(charid) {
			return SAVE_DIR + CHARS_DIR + charid;
		},

		hallLoc(hid) {
			return SAVE_DIR + hid;
		},
	});
};
