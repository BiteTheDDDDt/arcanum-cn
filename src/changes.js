let NextMods = new Set();
export var Modded = new Set();

export const GetModded = () => {
	const temp = Modded;

	NextMods.clear();
	Modded = NextMods;

	NextMods = temp;

	return temp;
};

export const MarkModded = it => {
	/// If it's in Changed, update will already happen.
	if (it.delta == 0 || !Changed.has(it)) Modded.add(it);
};

/**
 * @property {Set<GData>} NextChanges - changes for next frame.
 * Used to loop on changes from current frame while marking changes
 * for next frame.
 */
let NextChanges = new Set();

/**
 * @property {Set<GData>} Changed - items changed on previous frame.
 */
export var Changed = new Set();

export const GetChanged = () => {
	const temp = Changed;

	NextChanges.clear();
	Changed = NextChanges;

	NextChanges = temp;

	return temp;
};
