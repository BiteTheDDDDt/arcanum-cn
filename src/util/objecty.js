/**
 * @const {Set} EmptySet - Empty set to use as a default set
 * for functions with a Set argument, but no Set was provided
 * by the user.
 * More efficient then recreating Sets every time.
 */
const EmptySet = new Set();

/**
 * Recursively collect all properties in an object which do not appear in
 * an original template object, or which have been changed.
 * Changed variables are collected and returned _without_ cloning.
 * NOTE: falsey values are all considered equal when determining changes.
 * NOTE: This is NOT a complete diff: props appearing in original but deleted in clone
 * are NOT listed unless they exist with new values.
 * @param {Object} clone
 * @param {Object} original
 * @returns {Object} collection of properties existing in clone, which are different from values in original.
 */
export function changes(clone, original) {
	let res = null;

	for (const p in clone) {
		let sub = clone[p];
		const orig = original[p];

		if (sub == orig) {
			continue;
		}
		if (!sub) {
			if (!orig) continue;
		} else if (typeof sub === "object") {
			if (typeof orig === "object" && orig !== null) {
				sub = changes(sub, orig);
				if (sub === null) continue;
			}
		}

		if (res === null) res = {};
		res[p] = sub;
	}

	return res;
}

/**
 * Recursively merge two objects, with properties in dest overwritten by properties in source.
 * Arrays are concatenated without duplicating array elements.
 * @param {Object} dest - destination object.
 * @param {Object} src - source object.
 */
export function merge(dest, src) {
	let nowrite = getNoWrite(dest);

	for (let p in src) {
		if (nowrite.has(p)) continue;

		let srcSub = src[p];

		if ((typeof srcSub !== "object" && typeof srcSub !== "function") || dest[p] === null || dest[p] === undefined) {
			dest[p] = srcSub;
			continue;
		}

		let destSub = dest[p];
		if (Array.isArray(destSub)) {
			if (Array.isArray(srcSub)) merge(destSub, srcSub);
			else if (!destSub.includes(srcSub)) destSub.push(srcSub);
		} else if (typeof destSub === "object") merge(destSub, srcSub);
	}
}

/**
 * Recursively merge values from src into dest, without overwriting any of dest's existing values.
 * null values in dest will not be overwritten, but undefined values will be.
 * Object and array values merged from src are deep-cloned before being copied to dest.
 * Conflicting arrays are not merged.
 * Nothing is returned; The dest object is altered directly.
 * @param {Object} dest
 * @param {Object} src
 * @param {?Iterable<string>} [exclude=null] iterable of properties to exclude.
 */
export function mergeSafe(dest, src, exclude = null) {
	const nowrite = getNoWrite(dest);
	if (exclude) {
		for (const p of exclude) nowrite.add(p);
	}

	let svars = src;

	while (svars !== Object.prototype) {
		for (const p in svars) {
			if (nowrite.has(p)) continue;

			const destSub = dest[p];
			const srcSub = src[p];

			if (destSub === undefined) {
				if (srcSub !== null && typeof srcSub === "object") {
					dest[p] = clone(srcSub, Array.isArray(srcSub) ? [] : {});
				} else dest[p] = srcSub;

				continue;
			} else if (destSub === null) continue;

			if (srcSub && typeof destSub === "object" && typeof srcSub === "object") {
				if (Array.isArray(destSub) === Array.isArray(srcSub)) mergeSafe(destSub, srcSub);
			}
		}
		svars = Object.getPrototypeOf(svars);
	}
}

/**
 * Merge two arrays, ignoring entries duplicated between arrays.
 * This does not remove duplicated entries already existing in
 * either array separately.
 * @param {Array} a1
 * @param {Array} a2
 * @returns {Array}
 */
export function mergeArrays(a1, a2) {
	const a = a1.slice();
	const len = a2.length;

	for (let i = 0; i < len; i++) {
		const v = a2[i];
		if (a1.includes(v) === false) {
			a.push(v);
		}
	}
	return a;
}

/**
 * Performs a deep-clone of an object, including class prototype
 * and class methods. The entire prototype chain up to the Object prototype
 * is searched for properties to clone.
 * @param {Object} src
 * @param {?Object} [dest=null] - optional base object of the clone.
 * if set, root object will not be cloned, only subobjects.
 */
export function cloneChain(src, dest = null) {
	let o, proto;

	if (dest === null || dest === undefined) {
		if (src.clone && typeof src.clone === "function") return src.clone.call(src);

		proto = Object.getPrototypeOf(src);
		dest = Array.isArray(src) ? [] : proto ? Object.create(proto) : {};
	}

	proto = src;
	while (proto !== Object.prototype) {
		for (const p in proto) {
			o = src[p];

			const def = getPropDesc(dest, p);
			if (def && !def.writable && def.set === undefined) continue;

			if (o === null || o === undefined) dest[p] = o;
			else if (typeof o === "object") {
				if (o.clone && typeof o.clone === "function") dest[p] = o.clone.call(o);
				else dest[p] = cloneChain(o);
			} else dest[p] = o;
		}

		proto = Object.getPrototypeOf(proto);
	}

	return dest;
}

/**
 * Performs a deep-clone of an object's own properties and methods.
 * Whenever a clone() function is present on an object, it is called
 * to provide its own clone.
 * NOTE: objects with clone functions that call cloneClass() can cause infinite loops
 * if a dest object is not used.
 * @param {Object} src
 * @param {?Object} [dest=null] - optional base object of the clone.
 * if set, root object will not be cloned, only subobjects.
 */
export function cloneClass(src, dest = null) {
	let o;

	if (dest === null || dest === undefined) {
		if (src.clone && typeof src.clone === "function") return src.clone.call(src);

		let proto = Object.getPrototypeOf(src);
		dest = Array.isArray(src) ? [] : proto ? Object.create(proto) : {};
	}

	for (const p in src) {
		o = src[p];

		const def = getPropDesc(dest, p);
		if (def && !def.writable && def.set === undefined) {
			continue;
		}

		if (o === null || o === undefined) dest[p] = o;
		else if (typeof o === "object") {
			if (o.clone && typeof o.clone === "function") dest[p] = o.clone.call(o);
			else dest[p] = cloneClass(o);
		} else dest[p] = o;
	}

	return dest;
}

/**
 * Create a deep clone of an object. Any clone functions in source objects
 * or sub-objects are called to provide their own clone implementations.
 * @note dest is second parameter, whereas in Object.assign() it is first.
 * 		This makes syntax of: var obj = clone(src); much clearer.
 * @todo eliminate circular references.
 * @param {object} src - object to clone.
 * @param {object} [dest={}] object to merge cloned values into.
 */
export function clone(src, dest = {}) {
	if (typeof src.clone === "function ") {
		return src.clone();
	}

	let o, f;
	for (let p in src) {
		o = src[p];
		if (o === null || o === undefined) dest[p] = o;
		else if (Array.isArray(o)) {
			dest[p] = clone(o, []);
		} else if (typeof o === "object") {
			f = o.clone;
			if (f && typeof f === "function") dest[p] = f.call(o);
			else dest[p] = clone(o);
		} else dest[p] = o;
	}

	return dest;
}

/**
 * Return an array of all string paths from the base object
 * which lead to a non-object property in the base object or subobject.
 * Paths to arrays are also returned, but not subpaths of arrays.
 * Path strings are concatenated with '.'
 * ex. [ 'myObject.sub.prop1', 'myObject.sub.prop2' ]
 * @param {Object} base
 * @return {string[]} - array of non-object properties reachable through base.
 */
export function propPaths(base) {
	const res = [];
	const objStack = [];
	const pathStack = [];

	let path = "";

	while (base) {
		for (const p in base) {
			const sub = base[p];
			if (typeof sub === "object" && !Array.isArray(sub)) {
				objStack.push(sub);
				pathStack.push(path + p + ".");
				continue;
			} else res.push(path + p);
		}

		base = objStack.pop();
		if (base === undefined) break;
		path = pathStack.pop();
	}

	return res;
}

/**
 * Return a Set of all properties in an object's prototype chain,
 * not including Object.prototype, which cannot be assigned to,
 * either because they are marked writable=false, or because
 * they are properties without setters.
 * @param {object} obj
 * @param {Iterable<string>} [includes=null] - Additional property names to include
 * in the nonwritable Set result.
 * @returns {Set.<string>} Set of names of unwritable properties.
 */
export function getNoWrite(obj, includes = null) {
	const m = new Set(includes);

	let proto = obj;
	while (proto !== Object.prototype) {
		const descs = Object.getOwnPropertyDescriptors(proto);
		for (const p in descs) {
			const d = descs[p];
			if (d.writable !== true && d.set === undefined) m.add(p);
		}

		proto = Object.getPrototypeOf(proto);
	} // while-loop.

	return m;
}

/**
 * Get all property descriptors in an object's prototype chain,
 * not including the Object.prototype itself.
 * Descriptors are returned as a Map where property names
 * map to property descriptors.
 * @param {object} obj
 * @param {Map}
 * @returns {Map<string,PropertyDescriptor>}
 */
export function getDescs(obj) {
	const m = new Map();

	let proto = obj;
	while (proto !== Object.prototype) {
		const descs = Object.getOwnPropertyDescriptors(proto);
		for (const p in descs) {
			m.set(p, descs[p]);
		}

		proto = Object.getPrototypeOf(proto);
	} // while-loop.

	return m;
}

/**
 * Return an array of all properties defined by an Object or its ancestors.
 * @param {Object} obj - Object whose properties are returned.
 * @param {bool} ownData - whether to include private data variables.
 * @param {bool} getters - whether to include getter properties.
 * @return {string[]} Array of property names.
 */
export function getProps(obj, ownData = true, getters = true) {
	if (!obj) return [];

	let proto = ownData ? obj : Object.getPrototypeOf(obj);

	let p,
		props = [];

	/// fast version for when private variables and getters don't
	/// have to be ruled out.
	if (getters === true) {
		while (proto !== Object.prototype) {
			for (p of Object.getOwnPropertyNames(proto)) {
				if (typeof obj[p] !== "function") props.push(p);
			}

			// quick push.
			//props.push.apply( props, Object.getOwnPropertyNames(proto) );
			proto = Object.getPrototypeOf(proto);
		} // while-loop.
	} else {
		while (proto !== Object.prototype) {
			for (p of Object.getOwnPropertyNames(proto)) {
				if (typeof obj[p] === "function") continue;
				if (Object.getOwnPropertyDescriptor(proto, p).get === undefined) {
					props.push(p);
					//else console.log( 'hiding internal prop: ' + p );
				} else {
					if (getters === true) props.push(p);
				}
			}
			proto = Object.getPrototypeOf(proto);
		} // while-loop.
	}

	return props;
}

/**
 * Determines if array contains any of the given params.
 * @param {Array} arr - array to test for inclusions.
 * @param  {...any} params - arguments to test for inclusion in array.
 * @returns {boolean} - true if at least one param is found in the array.
 */
export function includesAny(arr, ...params) {
	for (let i = params.length - 1; i >= 0; i--) {
		if (arr.includes(params[i])) return true;
	}
	return false;
}

/**
 * Return random element of an array.
 * @param {Array} a
 * @returns {*} Random element of array.
 */
export function randElm(a) {
	return a[Math.floor(Math.random() * a.length)];
}

/**
 * Return a random element from and array which matches
 * a predicate.
 * @param {Array} a
 * @param {(*)=>boolean} pred - predicate test which a picked array element must pass.
 * @returns {*} random element of array which passes predicate.
 */
export function randMatch(a, pred) {
	let start = Math.floor(Math.random() * a.length);
	let ind = start;

	do {
		if (pred(a[ind])) return a[ind];
		ind = --ind >= 0 ? ind : a.length - 1;
	} while (ind !== start);

	return null;
}

/**
 * Sort item of a target array or object into sublists
 * based on each subobject's indexer value.
 * @param {Array|Object} arr
 * @param {string|function} indexer - property indexer or function that returns sublist index.
 * @returns {Object.<string|number,Array>} An object containing arrays
 * of sub-objects with matching property values.
 */
export function sublists(arr, indexer) {
	const lists = {};

	const func = typeof indexer === "function";

	for (const i in arr) {
		const sub = arr[i];
		if (sub === null || sub === undefined) continue;

		const ind = func ? func(sub) : sub[indexer];

		let list = lists[ind];
		if (list === null || list === undefined) lists[ind] = list = [];

		list.push(sub);
	}

	return lists;
}

/**
 * Define values for all of an Object's undefined properties with setters
 * up through its Object chain.
 * This can be useful in frameworks like Vue, where watched Objects must
 * have all their properties defined when the template is created.
 * @param {Object} obj - Object to assign properties for.
 * @param {*} [defaultVal=null] - Value to assign to undefined properties.
 */
export function defineVars(obj, defaultVal = null) {
	if (!obj) return;
	let proto = obj;

	while (proto !== Object.prototype) {
		for (let p of Object.getOwnPropertyNames(proto)) {
			if (obj[p] !== undefined) continue;
			if (Object.getOwnPropertyDescriptor(proto, p).set !== undefined) {
				obj[p] = defaultVal;
			}
		}
		proto = Object.getPrototypeOf(proto);
	} // while-loop.
}

/**
 * Define values for all of an Object's undefined properties with setters
 * up through its Object chain.
 * This is useful in frameworks like Vue, where watched Objects must
 * have all their properties defined when the template is created.
 * @param {Object} obj - Object to assign properties for.
 * @param {*} [defaultVal=null] - Value to assign to undefined properties.
 * @param {?Set.<string>} exclude - Set of properties to skip.
 */
export function defineExcept(obj, defaultVal = null, exclude = null) {
	if (!obj) return;
	if (!exclude) exclude = EmptySet;
	let proto = obj;

	while (proto !== Object.prototype) {
		for (let p of Object.getOwnPropertyNames(proto)) {
			if (exclude.has(p) || obj[p] !== undefined) continue;
			if (Object.getOwnPropertyDescriptor(proto, p).set !== undefined) {
				obj[p] = defaultVal;
			}
		}
		proto = Object.getPrototypeOf(proto);
	} // while-loop.
}

/**
 * Ensure the existence of the given properties on an object.
 * Useful for Vue reactivity.
 * @property {Object} obj
 * @property {string[]} props - props to set.
 * @property {*} [defaultVal=null] - default value to use.
 */
export const ensure = (obj, props, defaultVal = null) => {
	for (let i = props.length - 1; i >= 0; i--) {
		let s = props[i];
		if (!obj.hasOwnProperty(s)) obj[s] = defaultVal;
	}
};

/**
 * Searches an object's prototype chain for a property descriptor.
 * @param {Object} obj
 * @param {string} k - property key.
 * @returns {PropertyDescriptor|null}
 */
export function getPropDesc(obj, k) {
	while (obj !== Object.prototype) {
		const desc = Object.getOwnPropertyDescriptor(obj, k);
		if (desc) return desc;
		obj = Object.getPrototypeOf(obj);
	}
	return null;
}

/**
 * Behaves as objecty.assign() except it follows the src's prototype chain
 * and continues to assign values until reaching Object.prototype.
 * values from Object.prototype are not assigned.
 * @param {Object} dest - Destination object.
 * @param {Object} src - Object data to write into dest.
 * @param {string[]} [exclude=null] - Array of properties not to copy from src to dest.
 * @returns {Object} the destination object.
 */
export function assignChain(dest, src, exclude = null) {
	let nowrite = getNoWrite(dest, exclude);

	let svars = src;
	while (svars !== Object.prototype) {
		for (let p of Object.getOwnPropertyNames(svars)) {
			if (nowrite.has(p) !== true) dest[p] = src[p];
		} //for

		svars = Object.getPrototypeOf(svars);
	}

	return dest;
}

/**
 * Copies all iterable properties from a src to a destination object, if they exist
 * as fields or properties on the destination, and are writable.
 * @param {Object} dest - Destination for json data.
 * @param {Object} src - Object data to write into dest.
 * @param {Set.<string>} [exclude=null] - Array of properties not to copy from src to dest.
 * @returns {Object} the destination object.
 */
export function assignDefined(dest, src, exclude = null) {
	for (const p in src) {
		if (exclude && exclude.has(p)) continue;
		const desc = getPropDesc(dest, p);

		if (desc === null || (desc.set === undefined && !desc.writable)) continue;

		dest[p] = src[p];
	} //for

	return dest;
}

/**
 * Behaves like Object.assign() but does not attempt to write to non-writable properties,
 * or properties without setters.
 * assign() is non-recursive and only assigns a src's own properties.
 * @param {Object} dest - Destination object.
 * @param {Object} src - Object data to write into dest.
 * @param {string[]} [exclude=null] - Array of properties not to copy from src to dest.
 * @returns {Object} the destination object.
 */
export function assign(dest, src, exclude = null) {
	let nowrite = getNoWrite(dest, exclude);

	for (let p of Object.getOwnPropertyNames(src)) {
		if (nowrite.has(p) !== true) dest[p] = src[p];
	} //for

	return dest;
}

/**
 * Convert an object to a JSON object ready to be stringified.
 * @param {Object} obj - the objet to convert.
 * @param {Set.<string>} [excludes=null] - Set with properties to be excluded from encoding if found on the target object.
 * @param {Iterable.<string>} [includes=null] - Iterable with keys to always encode. Includes take precedence over excludes.
 * @param {bool} [writableOnly=true] - Whether to only include writable properties / exclude read-only properties.
 */
export function jsonify(obj, excludes = null, includes = null, writableOnly = true) {
	const r = {};
	let p, sub;

	if (excludes == null) excludes = EmptySet;
	if (includes) {
		for (p of includes) {
			sub = obj[p];
			if (sub === undefined) continue;
			else if (typeof sub === "object" && sub !== null && sub.toJSON) r[p] = sub.toJSON();
			else r[p] = sub;
		}
	}

	let proto = Object.getPrototypeOf(obj);
	while (proto != Object.prototype) {
		for (p of Object.getOwnPropertyNames(proto)) {
			if (excludes.has(p)) continue;

			const desc = Object.getOwnPropertyDescriptor(proto, p);
			if (writableOnly && desc.set === undefined && !desc.writable) continue;

			sub = obj[p];
			if (sub === undefined || typeof sub === "function") continue;
			else if (typeof sub === "object" && sub !== null && sub.toJSON) r[p] = sub.toJSON();
			else r[p] = sub;
		}

		proto = Object.getPrototypeOf(proto);
	} //

	return r;
}

/**
 * Recursively freeze an object and all descendents.
 * @param {object} obj
 */
export function freeze(obj) {
	let sub;
	for (const p in obj) {
		sub = obj[p];
		if (typeof sub === "object" && sub !== null && !Object.isFrozen(sub)) freeze(sub);
		else Object.freeze(sub);
	}

	return Object.freeze(obj);
}
