/**
 * Base view for all item lists.
 */
import { floor } from "@/util/format";
import Game from "@/game";
import Stat from "@/values/rvals/stat.js";
import { checkConverterInputEmpty, checkConverterOutputsFull } from "@/util/converter.js";

export default {
	methods: {
		floor: floor,

		slottable(it) {
			if (it.disabled || (it.need && !Game.unlockTest(it.need, it))) return false;
			if (it.buy && !it.owned && !Game.canPay(it.buy)) return false;
			if (it.slot && Game.state.getSlot(it.slot, it.type) === it) return false;
			return true;
		},

		reslocked(it) {
			return it.disabled === true || it.locks > 0 || it.locked !== false;
		},

		locked(it) {
			return it.disabled === true || it.locks > 0 || it.locked !== false || it.maxed();
		},
		spending(it) {
			let lookups = [it.id];
			if (it.tags) lookups = lookups.concat(it.tags);
			let rate = [];
			const converterRate = this.convertRate(lookups);
			if (converterRate !== 0) rate.push({ name: "C", rate: converterRate });
			const taskRate = this.taskRate(lookups);
			if (taskRate !== 0) rate.push({ name: "T", rate: taskRate });
			const buffRate = this.buffRate(lookups);
			if (buffRate !== 0) rate.push({ name: "B", rate: buffRate });
			return rate;
		},
		convertRate(lookups) {
			let rate = 0;
			for (let converter of Game.state.converters) {
				if (!checkConverterOutputsFull(converter) && !checkConverterInputEmpty(converter)) {
					const amount = converter.convert.singular ? 1 : converter.value;
					if (converter.convert.input) {
						Object.keys(converter.convert.input).forEach(key => {
							if (lookups.includes(key)) {
								rate -= this.addRate(converter.convert.input[key] * amount);
							}
						});
					}
					if (converter.convert.output.effect) {
						Object.keys(converter.convert.output.effect).forEach(key => {
							if (lookups.includes(key)) {
								rate += this.addRate(converter.convert.output.effect[key].value * amount);
							}
						});
					}
				}
			}
			return rate;
		},
		taskRate(lookups) {
			let rate = 0;
			const activeRunners = Game.state.runner.actives;
			for (let task of activeRunners) {
				if (task.run) {
					Object.keys(task.run).forEach(key => {
						if (lookups.includes(key)) {
							rate -= this.addRate(task.run[key]);
						}
					});
				}
				if (task.effect) {
					Object.keys(task.effect).forEach(key => {
						if (lookups.includes(key)) {
							rate += this.addRate(task.effect[key].value);
						}
					});
				}
			}

			return rate;
		},
		buffRate(lookups) {
			let rate = 0;
			const dots = this.player.dots;

			dots.forEach(dot => {
				if (dot.effect) {
					Object.keys(dot.effect).forEach(key => {
						if (lookups.includes(key)) {
							rate += this.addRate(dot.effect[key].value);
						}
					});
				}
			});

			return rate;
		},
		addRate(obj) {
			if (obj instanceof Stat) {
				//Stats are effects which are positive in nature?
				return obj.value;
			} else if (typeof obj === "number") {
				//run values are always negative?
				return obj;
			}
			return 0;
		},
	},
};
