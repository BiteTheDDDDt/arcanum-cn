/**
 * Array utilities.
 */

/**
 * Swaps the location of two elements in an array. Non-mutating
 * @param {T[]} array - The array being operated on
 * @param {number} firstIndex - An index which is being swapped
 * @param {number} secondIndex - The other index which is being swapped
 * @returns {T[]} - Returns the new array with the swapped element
 */
export const swap = <T>(array: T[], firstIndex: number, secondIndex: number) => {
	// Validate arguments
	if (firstIndex < 0 || secondIndex < 0 || firstIndex >= array.length || secondIndex >= array.length) {
		return array; // If arguments invalid, return the array that was passed in
	}

	// Get a shallow copy of an array
	const newArray = array.concat();

	// Update the values of the new array
	const temp = newArray[secondIndex];
	newArray[secondIndex] = newArray[firstIndex];
	newArray[firstIndex] = temp;

	return newArray;
};

/**
 * Moves an element (specified by index) within an array by a specific number of elements.
 * If the amount to be moved would go over array bounds, goes up to the bounds.
 * @param {T[]} arr Array to move elements in
 * @param {number} index Index of target element to move
 * @param {number} count Amount of elements to move the target
 * @returns {T[]} - Returns array with the element moved
 */
export const move = <T>(arr: T[], index: number, count: number) => {
	// Validate arguments
	if (index < 0 || index >= arr.length) {
		return arr; // If arguments invalid, return the array that was passed in
	}

	const dest = count > 0 ? Math.min(index + count, arr.length - 1) : Math.max(index + count, 0);

	arr.splice(dest, 0, ...arr.splice(index, 1));

	return arr;
};

/**
 * Finds the first instance of an element within an array and move it by a specific number of elements.
 * If the amount to be moved would go over array bounds, goes up to the bounds. Does nothing if element isn't found. Mutating.
 * @param {T[]} arr Array to move elements in
 * @param {T} element The target element to move
 * @param {number} count Amount of elements to move the target
 * @returns {T[]} The array with the element moved
 */
export const moveElm = <T>(arr: T[], element: T, count: number) => {
	// No arguement validation needed, this occurs in the move function.
	return move(arr, arr.indexOf(element), count); // Returns a new array, leaves the current array unmutated.
};

/**
 * Merges the itemsToMerge into the array for all items in in itemsToMerge based on whether each item passes the predicate. Non-mutating
 * @param {T[]} array - The array being merged into
 * @param {T|Array} itemsToMerge - The object or array whose elements are being tested against.
 * @param {(T)=>boolean} predicate - The merge test, if this is true then the item will be merged.
 * @returns {T[]} Returns an array with the items merged in.
 */
export const mergeInto = <T>(array: T[], itemsToMerge: T | T[], predicate: (value: T) => boolean) => {
	// No arguement validation needed
	// Get a shallow copy of the array
	const newArray = array.concat();

	// Update new array
	if (Array.isArray(itemsToMerge)) {
		for (let i = 0; i <= itemsToMerge.length - 1; i++) {
			if (predicate(itemsToMerge[i])) {
				newArray.push(itemsToMerge[i]);
			}
		}
	} else if (predicate(itemsToMerge)) {
		newArray.push(itemsToMerge);
	}

	return newArray;
};

/**
 * Return random array element between two indices. Non-mutating
 * @param {T[]} array - The array being operated on.
 * @param {number} lowerLimit - Lower inclusive limit of random range, default value of 0.
 * @param {number} upperLimit - Upper exclusive limit of random range, default value of the array's length.
 * @returns {T} - A randomly chosen value from the array between the indicies.
 */
export const randBetween = <T>(array: T[], lowerLimit = 0, upperLimit: number = array.length) => {
	return array[Math.floor(lowerLimit + Math.random() * (upperLimit - lowerLimit))];
};

/**
 * Return a random element from the array.
 * @param {T[]} array - The array being operated on
 * @returns {T} - A random element from the array
 */
export const randElm = <T>(array: T[]) => {
	// Get a random element from the randBetween function using the default parameters
	return randBetween(array);
};

/**
 * Return a random element from any of a number of sub-arrays. Non-mutating
 * @param {T[]} arrays - An array of arrays.
 * @returns {T} - A randomly chosen element from the array.
 */
export const randFrom = <T>(arrays: T[][]) => {
	// No argument validation needed
	// Iterate through all the sub arrays and get a random value from each.
	const randomsValues: T[] = [];
	for (let i = arrays.length - 1; i >= 0; i--) randomsValues.push(randElm(arrays[i]));
	// If no random values exist, there are none available.
	if (randomsValues.length == 0) return null;
	// Get a random value within the randoms array.
	return randElm(randomsValues);
};

/**
 * Map Array into non-null elements of a predicate. Non-mutating
 * @param {Array<S|null>} array - The array being operated on.
 * @param {S=>T} predicate - The predicate determining whether the item will be mapped or not.
 * @returns {T} - Returns a new array which contains the passing predicate values.
 */
export const mapNonNull = <S, T>(array: Array<S | null>, predicate: (value: S | undefined) => T) => {
	// Remove the null values
	const newArray = array.filter(value => {
		return value !== null;
	}) as S[];
	// Then map the new array
	return newArray.map(predicate);
};

/**
 * Takes in an array, and a value or array of values. If the value or values exists, push the value onto the array. Non-mutating
 * @param {T[]} array - The array being pushed onto.
 * @param {T|undefined|Array<T|undefined>} valuesToPush - This is the value or values which are being pushed
 * @returns {T[]} - Returns a new array which contains all the non-null values passed in.
 */
export const pushNonNull = <T>(array: T[], valuesToPush: T | undefined | Array<T | undefined>) => {
	// Get new array to return to keep this non-mutating
	const newArray = array.concat();

	// Ensure that the valuesToPush is an array.
	if (!Array.isArray(valuesToPush)) valuesToPush = [valuesToPush];

	// Push only the nonNull values onto the array.
	for (let i = 0; i <= valuesToPush.length - 1; i++) {
		const value = valuesToPush[i];
		if (value) newArray.push(value);
	}

	return newArray;
};

/**
 * Return the first non-null element of array. Non-mutating
 * @param {T[]} array - The array being operated on.
 * @return {T} - The first element which is not null
 */
export const first = <T>(array: T[]) => {
	// Iterate through the array
	for (let i = 0; i < array.length - 1; i++) {
		// Return the first non-null value.
		const value = array[i];
		if (value) return value;
	}
};

/**
 * Find the first item in an array matching predicate, remove and return it. MUTATING
 * @param {T[]} array - The array being operated on.
 * @param {T=>boolean} predicate - The predicate used to check the elements of the array.
 * @returns {T|null} - The item removed or null.
 */
export const findRemove = <T>(array: T[], predicate: (value: T) => boolean) => {
	// Iterate through the array
	for (let i = 0; i <= array.length - 1; i++) {
		// Evaluate the predicate
		if (predicate(array[i])) {
			// If the result is found, remove and return it
			const result = array[i];
			array.splice(i, 1);
			return result;
		}
	}
	// If all predicate results fail, return null.
	return null;
};

/**
 * Return first array element fufilling predicate. Non-mutating
 * @param {T[]} array - The array being operated on.
 * @param {T=>boolean} predicate - The predicate used to check the elements of a.
 * @returns {T} - Starting at a random index, the first value found that matches the predicate.
 */
export const randWhere = <T>(array: T[], predicate: (value: T) => boolean) => {
	// Get a random starting index
	const startIndex = Math.floor(Math.random() * array.length);
	let currentIndex = startIndex;

	do {
		// Check predicate and return passing value
		if (predicate(array[currentIndex])) {
			return array[currentIndex];
		}

		// Cycle through values using the mod operator to ensure we're always on a real index.
		currentIndex = (currentIndex + 1) % array.length;
	} while (currentIndex !== startIndex);

	// If no matching predicate values were found, return null
	return null;
};

/**
 * Removes element at the given index from the array. Not reactive with Vue. MUTATING
 * @param {T[]} array - The array being operated on.
 * @param {number} index - The index of the element being spliced
 */
export const quickSplice = <T>(array: T[], index: number) => {
	// Replace the index with the last element in the array
	array[index] = array[array.length - 1];

	// Remove the last index in the array.
	array.pop();
};

/**
 * Merge two items which may or may not be arrays,
 * and return an array containing the flattened result of both.
 * If either a or b is already an array, it will be used to join
 * the results in-place. Non-mutating
 * @param {T|T[]} value1 - The first value or array being passed in
 * @param {T|T[]} value2 - The second value or array being passed in
 * @return {T[]} - An array containing all the values of both arguements passed in.
 */
export const arrayMerge = <T>(value1: T | T[], value2: T | T[]) => {
	// If the first argument is an array
	if (Array.isArray(value1)) {
		// If the second is also an array, combined them and return
		const newArray = value1.concat();
		if (Array.isArray(value2)) return newArray.concat(value2);

		// If the second is not an array, put it on the first and return it
		newArray.push(value2);
		return newArray;

		// If the second arguement is an array but the first is not
	} else if (Array.isArray(value2)) {
		const newArray = value2.concat();
		newArray.unshift(value1); // If value1 is not an array, then put it at the front of the array.
		return newArray;

		// If neither arguement is an array
	} else return [value1, value2];
};

/**
 * Sort array by numeric property values of object entries. MUTATING
 * Null entries are treated as 0.
 * Array entries must be objects.
 * @param {T[]} array - The array being operated on.
 * @param {string} propertyName - This is a numeric property on T to sort on.
 */
export const propSort = <T>(array: T[], propertyName: keyof T): void => {
	array.sort((a, b) => {
		const propA = a[propertyName] as unknown as number | undefined; // When casting types, they must be cast first to unknown. It's a quirk of ts.
		const propB = b[propertyName] as unknown as number | undefined;

		if (propA === propB) {
			return 0;
		}

		if (propA === undefined) {
			return 1;
		}

		if (propB === undefined) {
			return -1;
		}

		return propA - propB;
	});
};

/**
 * Binary search array when values at prop are numeric.
 * The way the binary search was implemented before was for the specialized use case of searching through specific properties on the objects passed in the array.
 * A similar implememtation can be achieved using the `compareByProperty` comparator below.
 *
 * @param {T[]} array - The array being operated on
 * @param {T | T[K]} target - This is the target value
 * @param {K} property? - This is an optional name of the property being searched. Set as undefined if not searching by property.
 * @param {(a: T | T[K], b: T | T[K]) => number} comparator? - This is the comparison logic being used to acheive the result. Leave empty to use default
 * @return {number} - This is the index at which the value was found, or -1 if no value was found.
 */
export const binarySearch = <T, K extends keyof T, R>(
	array: T[],
	target: T | T[K],
	property?: K,
	comparator?: (a: R, b: R) => number,
): number => {
	const defaultComparator = (a: R, b: R) => {
		if (a < b) {
			return -1;
		} else if (a > b) {
			return 1;
		} else {
			return 0;
		}
	};

	const compare = comparator ?? defaultComparator;

	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		const element = array[mid];

		let comparison: number;
		if (property) {
			comparison = compare(element[property] as unknown as R, target as unknown as R);
		} else {
			comparison = compare(element as unknown as R, target as unknown as R);
		}

		if (comparison === 0) {
			return mid;
		} else if (comparison < 0) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
};
