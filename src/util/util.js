import { getPropDesc, cloneClass } from "@/util/objecty";

/**
 * alphabetical sort by name property.
 * @param {*} a
 * @param {*} b
 */
export const alphasort = (a, b) =>
	typeof a.name === "string" ? a.name.localeCompare(b.name, "en", { sensitivity: "base" }) : a.name < b.name ? -1 : 1;

/**
 * sort by level property.
 * @param {*} a
 * @param {*} b
 */
export const localeLevelsort = (a, b) => {
	let v = (a.sortOrder ?? 0) - (b.sortOrder ?? 0);
	if (v !== 0) return v;
	v = a.level - b.level;
	if (v !== 0) return v;
	return a.name < b.name ? -1 : 1;
};

/**
 * Ensure the existence of props on an object.
 * Mostly for Vue reactivity.
 * @property {Object} obj
 * @property {string[]} props - props to set.
 */
export const ensure = (obj, props) => {
	for (let i = props.length - 1; i >= 0; i--) {
		const s = props[i];
		if (!obj.hasOwnProperty(s)) obj[s] = null;
	}
};

/**
 * Attempt to add a property to object.
 * @param {object} targ
 * @param {string} prop
 * @param {object} v - property value.
 */
export const tryAddProp = (targ, prop, v) => {
	let desc = getPropDesc(targ, prop);
	if (!desc || (!desc.set && !desc.writable)) return null;

	return (targ[prop] = v);
};

/**
 * Determine if property can be safely added to target.
 * Does not check sealed/frozen object status.
 * @param {object} targ
 * @param {string} prop
 */
export const canWriteProp = (targ, prop) => {
	let desc = getPropDesc(targ, prop);
	return !desc || desc.set || desc.writable;
};

/**
 * Only assign values already defined in dest's protochain.
 * @param {*} dest
 * @param {*} src
 */
export const assignOwn = (dest, src) => {
	let vars = Object.getPrototypeOf(dest);
	while (vars !== Object.prototype) {
		for (const p of Object.getOwnPropertyNames(vars)) {
			const desc = getPropDesc(dest, p);
			if (desc && !desc.writable && desc.set === undefined) {
				continue;
			}

			if (src[p] !== undefined) dest[p] = src[p];
		}
		vars = Object.getPrototypeOf(vars);
	}

	return dest;
};

/**
 * Log all public properties.
 * @param {*} src
 */
/*export const logPublic = ( src ) => {

	let a = [];

	while ( src !== Object.prototype ) {

		for( let p of Object.getOwnPropertyNames(src) ) {

			if ( p[0] === '_'){continue; }
			a.push(p);
		}
		src = Object.getPrototypeOf(src);

	}

	console.log('PUBLIC: ' + a.join(',' ) );

}*/

/**
 * Like assignNoFunc() but without recursion.
 * @param {object} dest
 * @param {object} src
 */
export const assignPublic = (dest, src) => {
	for (let p of Object.getOwnPropertyNames(src)) {
		if (p[0] === "_") {
			continue;
		}

		const desc = getPropDesc(dest, p);
		if (desc) {
			if (desc.set) {
				if (typeof dest[p] === "function") console.log("OVERWRITE: " + p);
			} else if (!desc.writable) continue;
			else if (typeof dest[p] === "function") {
				continue;
			}
		}

		dest[p] = src[p];
	}

	return dest;
};

export function getPropertyDescriptors(obj, ...props) {
	let descs = {};
	while (obj !== Object.prototype && props.length) {
		let currentDesc = Object.getOwnPropertyDescriptors(obj);
		props = props.filter(prop => {
			//Checks if property exists in current descriptor set, and if it does, saves it, then marks it as found by filtering it out.
			if (currentDesc[prop]) {
				descs[prop] = currentDesc[prop];
				return false;
			}
			return true;
		});
		obj = Object.getPrototypeOf(obj);
	}
	return descs;
}

export function getAllPropertyDescriptors(obj) {
	let descs = {};
	while (obj !== Object.prototype) {
		for (let [prop, desc] of Object.entries(Object.getOwnPropertyDescriptors(obj))) {
			if (!descs[prop]) descs[prop] = desc;
		}
		obj = Object.getPrototypeOf(obj);
	}
	return descs;
}

export const assignNoFunc = (dest, src) => {
	let vars = src;
	while (vars !== Object.prototype) {
		for (const p of Object.getOwnPropertyNames(vars)) {
			if (p[0] === "_") {
				continue;
			}

			const desc = getPropDesc(dest, p);
			if (desc) {
				if (desc.set) {
					if (typeof dest[p] === "function") console.log("OVERWRITE func: " + p);
				} else if (!desc.writable) continue;
				else if (typeof dest[p] === "function") {
					continue;
				}
			}

			dest[p] = src[p];
		}
		vars = Object.getPrototypeOf(vars);
	}

	return dest;
};

/**
 * Sets default values on target if the properties within default do no exist on target.
 * Mutates target.
 * @param {*} target Target to set defaults for.
 * @param {*} defaults Values to be set on target if corresponding properties do not exist.
 * @returns {*} Object containing all properties that were set in target, along with the corresponding values.
 */
export function setDefaults(target, defaults) {
	let obj;
	const assigned = {};
	if (defaults instanceof Function) defaults = defaults(target);

	for (const p in defaults) {
		if (target[p] == null) {
			obj = defaults[p];
			if (typeof obj === "function") assigned[p] = target[p] = obj(target);
			else if (typeof obj === "object") {
				//console.log("clone: " + target.id);
				assigned[p] = target[p] = cloneClass(obj);
			} else assigned[p] = target[p] = obj;
		}
	}

	return assigned;
}

/**
 * Performs a deep check if obj1 is the same as obj2.
 * Both properties and types of object and subobjects must match.
 * Primitives are checked via strict equality.
 * Will reach stack call size if both objects are similar enough and have circular references.
 * @param {*} obj1
 * @param {*} obj2
 * @returns {boolean} Whether or not obj1 matches obj2.
 */
export function isEqual(obj1, obj2) {
	if (obj1 === obj2) return true;
	if (typeof obj1 === typeof obj2 && typeof obj1 === "object" && obj1.constructor.name === obj2.constructor.name) {
		let keys1 = Object.keys(obj1),
			keys2 = Object.keys(obj2);
		if (keys1.length !== keys2.length || keys1.find(key => !keys2.includes(key))) return false;
		for (let key in keys1) {
			if (!isEqual(obj1[key], obj2[key])) return false;
		}
		return true;
	} else return false;
}

/**
 * Check if obj is and is only an object.
 * @param {*} obj
 * @returns {boolean} Whether obj is stictly an object.
 */
function isStrictObject(obj) {
	return typeof obj === "object" && obj.constructor.name === "Object";
}

/**
 * Recursively search for any subproperty that contains a value that's not strictly an object.
 * @param {Object} obj Object to crawl through.
 * @param {function(Object, string, *): void} cb callback function to be performed on all non-strict objects.
 * @returns {Array<{obj: *, prop: string, sub:*}>} List of all non-objects found.
 */
export function findNonObjects(obj, cb, ...exclude) {
	if (!isStrictObject(obj)) return [];

	let items = [];
	for (let prop in obj) {
		if (exclude.includes(prop)) continue;
		let sub = obj[prop];

		if (isStrictObject(sub)) items.push(...findNonObjects(sub, cb, ...exclude));
		else {
			if (cb && cb instanceof Function) {
				cb(obj, prop, sub);
				//In case of updated value.
				sub = obj[prop];
			}
			items.push({ obj, prop, sub });
		}
	}
	return items;
}

/**
 * Only split NON-class keys. Classes shouldn't be
 * grouped into key-paths.
 * @param {*} obj
 */
export const splitKeys = obj => {
	if (!obj || typeof obj !== "object") return;

	for (const s in obj) {
		const sub = obj[s];
		if (s.includes(".")) {
			splitKeyPath(obj, s);
		}
		if (sub && typeof sub === "object" && Object.getPrototypeOf(sub) === Object.prototype) splitKeys(sub);
	}
};

/**
 * For an object variable path key, the key is expanded
 * into subojects with keys from the split key path.
 * This is done to allow object props to represent variable paths
 * without changing all the code to use Maps (with VarPath keys) and not Objects.
 * @param {Object} obj - object containing the key to expand.
 * @param {string} prop - key being split into subobjects.
 */
export const splitKeyPath = (obj, prop) => {
	const val = obj[prop];
	delete obj[prop];

	const keys = prop.split(".");

	const max = keys.length - 1;

	// stops before length-1 since last assign goes to val.
	for (let i = 0; i < max; i++) {
		let cur = obj[keys[i]];

		if (cur === null || cur === undefined) cur = {};
		else if (typeof cur !== "object" || Object.getPrototypeOf(cur) !== Object.prototype) cur = { value: cur };

		obj = obj[keys[i]] = cur;
	}

	obj[keys[max]] = val;
};

/**
 * Recursive freezing of an object template.
 * Clones must be made to make any changes.
 * @param {*} obj
 */
export const freezeData = obj => {
	let sub;
	for (let p in obj) {
		sub = obj[p];
		if (typeof sub === "object") freezeData(sub);
		else Object.freeze(sub);
	}

	return Object.freeze(obj);
};

/**
 * Log deprecation warning.
 * @param {*} msg
 */
export const deprec = msg => {
	console.trace("deprecated: " + msg);
};

export const showObj = obj => {
	if (Array.isArray(obj)) {
		return "[ \n" + obj.map(v => showObj(v)).join(", ") + "\n ]";
	} else if (typeof obj === "object") {
		let s = "{ ";
		for (let p in obj) {
			s += `\n${p}: ` + showObj(obj[p]);
		}
		s += "\n}";

		return s;
	} else return "" + obj;
};

export const logObj = (obj, msg = "") => {
	console.log((msg ? msg + ": " : "") + showObj(obj));
};

/**
 * Returns a random number between [min,max]
 * @param {number} min
 * @param {number} max
 */
export const random = (min, max) => {
	return min + Math.round(Math.random() * (max - min));
};

export const uppercase = s => {
	return !s ? "" : s.length > 1 ? s[0].toUpperCase() + s.slice(1) : s[0].toUpperCase();
};

export const indexAfter = (s, k) => {
	let i = s.indexOf(k);
	return i >= 0 ? i + k.length : i;
};

/**
 * Gets a subset of properties listed in object.
 * @param {*} obj Object to extract properties from.
 * @param  {...string} props properties to be retrieved from obj.
 * @returns {?[*, *]} An object containing all properties specified and an object containing all the properties not extracted.
 */
export function subset(obj, ...props) {
	if (!obj || !(obj instanceof Object)) return null;

	let sub = {},
		remainder = { ...obj };
	for (let prop of props) {
		if (Object.hasOwn(remainder, prop) || remainder[prop] !== undefined) {
			sub[prop] = remainder[prop];
			delete remainder[prop];
		}
	}
	return [sub, remainder];
}

String.prototype.toTitleCase = function () {
	return this.trim()
		.toLowerCase()
		.replace(/\b\w\S*/g, match => {
			if (match === "i" || match == "ii" || match === "iii" || match === "iv" || match === "v") {
				return match.toUpperCase();
			}
			return match[0].toUpperCase() + match.slice(1);
		});
};

export const getModifiedChance = (chance, luck) => {
	return (chance * (100 + luck)) / 100;
};
