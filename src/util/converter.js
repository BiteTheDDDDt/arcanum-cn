import Game from "@/game.js";

export const upgradeFilter = v =>
	!v.disabled && v.type === "upgrade" && !v.cost.space && !Game.state.typeCost(v.mod, "space") && v.value >= 1;

export const furnitureFilter = v =>
	!v.disabled &&
	(v.type === "furniture" || Game.state.typeCost(v.cost, "space") > 0 || Game.state.typeCost(v.mod, "space") > 0) &&
	v.value > 0;

export const resourceFilter = v => !v.disabled && v.type === "resource" && v.value >= 0.1;

export const checkConverterOutputsFull = gdata => {
	const outputs = Game.state.getData(gdata).convert.output.effect;
	if (!outputs || !Object.keys(outputs).length) return false;
	for (let key in outputs) {
		if (!Game.state.getData(key).maxed()) return false;
	}
	return true;
};

export const checkConverterInputEmpty = gdata => {
	const inputs = Game.state.getData(gdata).convert.input;
	if (!inputs || !Object.keys(inputs).length) return false;
	for (let [key, value] of Object.entries(inputs)) {
		if (!Game.canPay({ [key]: value }, gdata.convert.singular ? 1 : gdata.value)) return true;
	}
	return false;
};
