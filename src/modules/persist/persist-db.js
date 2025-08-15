const HALL_STORE = "hall";
const CHAR_STORE = "chars";

const DB_VERSION = 1;

const createStore = (db, storeName) => {
	return new Promise((res, rej) => {
		const store = db.createObjectStore(storeName);
		store.transaction.onerror = e => {
			console.warn(`failed to create store: ${e}`);
			rej(e);
		};
		store.transaction.oncomplete = e => {
			console.log(`objectStore created: ${storeName}`);
			res();
		};
	});
};

const openDb = () => {
	return new Promise((res, rej) => {
		const openRequest = window.indexedDB.open("arcanum", DB_VERSION);
		openRequest.onerror = e => {
			console.warn(`IndexDB failed to open database`);
			rej(`failed to open database: ${e.data}`);
		};

		openRequest.onsuccess = e => {
			res(openRequest.result);
		};
		openRequest.onupgradeneeded = e => {
			const db = e.target.result;
			Promise.all([createStore(db, CHAR_STORE), createStore(db, HALL_STORE)]).catch(err => rej(err));
		};
	});
};

/**
 *
 * @param {IDBRequest} req
 * @returns
 */
const waitRequest = req => {
	return new Promise((res, rej) => {
		req.onerror = err => rej(err);
		req.onsuccess = () => {
			res(req.result);
		};
	});
};

export async function useDB(persist) {
	const db = await openDb();

	/**
	 * Clear all stored data.
	 */
	function clearAll() {
		const tx = this.db.transaction([CHAR_STORE, HALL_STORE], "readwrite");

		return Promise.all([
			waitRequest(tx.objectStore(CHAR_STORE).clear()),
			waitRequest(tx.objectStore(HALL_STORE).clear()),
		]);
	}

	function deleteChar(charid) {
		const tx = this.db.transaction([CHAR_STORE], "readwrite");
		return waitRequest(tx.objectStore(CHAR_STORE).delete(charid));
	}

	function saveChar(data, charid) {
		const tx = this.db.transaction([CHAR_STORE], "readwrite");
		return waitRequest(tx.objectStore(CHAR_STORE).put(data, charid));
	}

	async function loadChar(charid) {
		const tx = this.db.transaction([CHAR_STORE], "readonly");
		const json = await waitRequest(tx.objectStore(CHAR_STORE).get(charid));

		if (json) {
			return JSON.parse(json);
		}
		return null;
	}

	/**
	 * @param {string} data
	 */
	function saveHall(data, hid) {
		const tx = this.db.transaction([HALL_STORE], "readwrite");
		return waitRequest(tx.objectStore(HALL_STORE).put(data, hid));
	}

	async function loadHall(hid) {
		const tx = this.db.transaction([HALL_STORE], "readonly");
		const json = await waitRequest(tx.objectStore(HALL_STORE).get(hid));

		if (json) {
			return JSON.parse(json);
		}
		return null;
	}

	return persist.addLoader(
		{
			db,
			clearAll,
			deleteChar,
			saveChar,
			loadChar,
			saveHall,
			loadHall,
		},
		true,
	);
}
