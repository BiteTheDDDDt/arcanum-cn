<script>
import Game from "@/game";
import { FP, TYP_PCT, UNTAG } from "@/values/consts";

import ItemsBase from "@/ui/itemsBase.js";
import { CheckTypes, InfoBlock, DisplayName, ConvertPath } from "@/ui/items/infoBlock";
import { RollOver } from "@/ui/popups/itemPopup.vue";
import Char from "@/chars/char";
import FValue from "@/values/rvals/fvalue";
import { defineAsyncComponent } from "vue";
import { precise } from "@/util/format";
import { getModifiedChance } from "@/util/util";
import progbar from "ui/components/progbar.vue";
import settings from "modules/settings.js";

/** Regex to check if a string is a function. Note: does not process newlines, have to be removed manually. */
const FunctionRegex = /^function *\w+\( *(?<params>[^\)]+) *\) *{ *return +(?<body>.*)}$/;
/** Regex to check if a function's body matches the "one of" pattern. */
const OneOfRegex =
	/^\( *(?:(?:(?<! |\() *\|\| *)?(?:\+g\.(\w+)|g\.(\w+) *> *0)){2,} *\)$|^\( *(?:(?:(?<! |\() *\+ *)?g\.(\w+)){2,} *\)(?: *> *0)?$|^ *(?:(?:(?<!^| ) *\|\| *)?(?:\+g\.(\w+)|g\.(\w+) *> *0)){2,}$|^(?:(?:(?<!^| |\() *\+ *)?g\.(\w+)){2,}(?: *> *0)?$/;
/** Regex to identify gdata items that do not check for subproperties. */
const GdataIdRegex = /g\.(?<id>\w+)(?!\.)/g;

/**
 * Display for a sub-block of gdata, such as item.effect, item.result, item.run, etc.
 *
 * @property {boolean} rate - info items are 'rate' per-second items.
 * @property {boolean} checkType - enable unlock and cost checks.
 * @property {boolean} require
 * @property {string?} text - override item display text.
 */
export default {
	props: ["title", "info", "text", "rate", "checkType", "target", "require", "separate"],
	mixins: [ItemsBase],
	components: {
		progbar,
		dot: defineAsyncComponent(() => import("./dot-info.vue")),
		attack: defineAsyncComponent(() => import("./attack.vue")),
	},
	beforeCreate() {
		this.infos = new InfoBlock();
		this.player = Game.state.player;
		this.CheckTypes = CheckTypes;
	},
	computed: {
		isAvailable() {
			for (const p in this.infos.results) {
				if (!this.infos.results[p].isAvailable) return false;
			}
			return true;
		},
		totalRateSetting() {
			return settings.get("totalRate");
		},
	},
	methods: {
		precise,
		processInfo() {
			if (!this.info) return false;

			this.infos.clear();
			this.subTitle = null;

			this.item = RollOver.item;
			this.source = RollOver.source;

			this.items = this.process(this.info);

			if (this.items == null) return false;
			if (Object.keys(this.items).length > 1) return true;
			if (Object.keys(this.items.eff).length > 0) return true;
			return false;
		},

		/**
		 *
		 * @param {*} obj
		 */
		process(obj) {
			let type = typeof obj;
			if (type === "string") return this.processString(obj);
			if (type === "number") return this.processNumber(obj);
			if (type === "function") return this.processFunction(obj);
			if (Array.isArray(obj)) return this.processArray(obj);
			if (type === "object") return this.processObject(obj);

			return null;
		},
		processNumber(obj) {
			//@todo still happens. mostly for sell cost as gold.
			const ref = InfoBlock.GetItem("gold");
			if (!ref) return null;
			this.infos.add(ref.name, obj, this.rate, this.checkType, ref);
			return { eff: this.infos.results };
		},
		processString(obj) {
			this.infos.add(DisplayName(obj), true, false, this.checkType, InfoBlock.GetItem(obj));
			return { eff: this.infos.results };
		},
		processFunction(obj) {
			//TODO other possible parsing for functions.
			if (this.text) {
				this.infos.add(this.text, true, false, this.checkType, null, obj);
				return { eff: this.infos.results };
			}
			if (!this.require) return null;

			const res = FunctionRegex.exec(obj.toString().replaceAll("\n", ""));
			if (!res) return null;

			const body = res.groups.body;
			if (!OneOfRegex.test(body)) return null;

			this.subTitle = "One of";
			for (const match of body.matchAll(GdataIdRegex)) {
				this.effectList(match.groups.id);
			}
			return { eff: this.infos.results };
		},
		processArray(obj) {
			for (const v of obj) {
				this.effectList(v);
			}
			return { eff: this.infos.results };
		},
		processObject(obj) {
			if (this.separate) {
				// TODO separate out action, and parse it as its own thing, like attack and dot.
				let { attack, dot, ...eff } = obj;
				this.effectList(eff);
				return { attack, dot, eff: this.infos.results };
			} else {
				this.effectList(obj);
				return { eff: this.infos.results };
			}
		},
		/**
		 * @param {Object} obj - object of effects to enumerate.
		 * @param {string} rootPath - prop path from base.
		 * @param {boolean} rate - whether display is per/s rate.
		 * @param {boolean} checkType - type of check to use for checking availability.
		 * @param {string?} text - override display text.
		 */
		effectList(obj) {
			// Return value is ignored
			if (typeof obj === "string") return this.processString(obj);
			if (typeof obj === "function" && this.text) return this.processFunction(obj);

			this.crawlObject(obj, null, "", "");
		},

		crawlObject(obj, refItem, basePath, lastProp) {
			for (let p in obj) {
				let sub = obj[p];
				if (sub == null) continue;

				const newProp = (p === "self" && this.target) || p;

				// Dividing
				let subPath = ConvertPath(basePath, lastProp, newProp);

				// path conversion indicated no display.
				if (subPath === undefined) continue;

				const [convertedBasePath, convertedLastProp] = subPath;

				const fullPath = convertedBasePath ? convertedBasePath + " " + convertedLastProp : convertedLastProp;

				// displayed path to subitem.

				if (p.startsWith(UNTAG)) {
					p = p.slice(UNTAG.length);
				}

				let subItem = InfoBlock.GetItem(p, refItem);

				if (sub instanceof FValue) {
					this.infos.add(fullPath, this.evaluateFValue(sub), this.rate, this.checkType, subItem);
					continue;
				}
				if (!(sub instanceof Object)) {
					this.infos.add(fullPath, sub, this.rate, this.checkType, subItem);
					continue;
				}

				if (this.isSkipLocked(sub, subItem)) continue;

				if (sub.constructor !== Object && sub.constructor.name !== "Attack") {
					this.infos.add(fullPath, sub, this.rate, this.checkType, subItem);
					continue;
				}

				if (sub.constructor.name === "Attack") continue;

				//special code for % + value construct, currently unique to loot
				if (sub[TYP_PCT] && sub.value) {
					this.crawlChancedObject(sub, convertedBasePath, convertedLastProp);
					continue;
				}

				//special code for DOT path, currently unique to potions
				if (fullPath === "dot") {
					sub = { ...sub };
					if (sub.id) delete sub.id;
					if (sub.name) delete sub.name;
					if (sub[undefined]) delete sub[undefined];

					if (sub.tags) {
						sub.tags = sub.tags.split(",").map(t => {
							let tag = Game.state.tagSets[t];
							return tag ? tag.name : t;
						});
					}
				}

				this.crawlObject(sub, subItem, convertedBasePath, convertedLastProp);
			}
		},

		crawlChancedObject(obj, basePath, lastProp) {
			const fullPath = basePath ? basePath + " " + lastProp : lastProp;

			const chance = obj[TYP_PCT];
			const luckchance = getModifiedChance(+chance.pct * 100, +this.player.luck).toPrecision(2);
			const value = obj.value;
			const valueString = typeof value === "object" ? value.toString() : precise(value).toString();

			let msg;
			if (valueString != 1) {
				msg = `${fullPath}: ${chance} (${luckchance}%) for ${valueString}`;
			} else {
				msg = `${fullPath}: ${chance} (${luckchance}%)`;
			}

			this.infos.add(msg, true);
		},

		isSkipLocked(val, item) {
			if (!val.skipLocked) return false;
			if (!item) return false;

			if (item.disabled === true) return true;
			if (item.locks > 0) return true;
			if (item.locked !== false) return true;

			return false;
		},

		evaluateFValue(val) {
			let actor = this.item instanceof Char ? this.item : null;
			actor ??= this.source instanceof Char ? this.source : this.player;

			//TODO have a dummy enemy parameter that isnt the player
			let target = this.player;
			return val.applyDummy({
				[FP.GAME]: Game.gdata,
				[FP.ACTOR]: actor,
				[FP.TARGET]: target,
				[FP.CONTEXT]: target.context,
				[FP.STATE]: Game.state,
			});
		},
	},
};
</script>

<template>
	<div v-if="processInfo()" class="info-block">
		<div v-if="title" class="note-text">
			<hr />
			{{ title }}
		</div>
		<div>
			<div v-if="subTitle" class="note-text">{{ subTitle }}</div>
			<div :class="subTitle ? 'info-subsubsect' : ''">
				<template v-if="text">
					<span class="replacetext" :class="{ failed: !isAvailable, full: checkType === CheckTypes.FULL }">
						{{ text }}
						<span v-if="!isAvailable && checkType === CheckTypes.FULL">(Full)</span>
					</span>
				</template>
				<template v-else>
					<div v-for="v in items.eff" :key="v.name">
						<span
							v-if="v.toString() != null && v != undefined"
							:class="{ failed: !v.isAvailable, full: checkType === CheckTypes.FULL }">
							{{ v.toString() }}
							<span
								v-if="
									!v.isAvailable &&
									(Math.abs(v.value) > 0 || typeof v.value.toString() == 'string') &&
									checkType === CheckTypes.FULL
								"
								>(Full)</span
							>
							<span v-if="totalRateSetting && v.isRate && v.maxLength" class="calc-text">
								<span v-if="v.value.type === 'range'">
									~({{ precise(v.currentLength * v.value.avg, 1) }}/{{
										precise(v.maxLength * v.value.avg, 1)
									}})</span
								>
								<span v-else
									>({{ precise(v.currentLength * v.value, 1) }}/{{
										precise(v.maxLength * v.value, 1)
									}})
								</span>
							</span>
						</span>
					</div>
				</template>
				<div v-if="items.dot">
					<div class="info-sect">Applies:</div>
					<dot :dot="items.dot" :target="target" :item="item" />
				</div>
				<div v-if="items.attack">
					<div class="info-sect">Attack</div>
					<attack
						:item="item"
						:atk="items.attack"
						:hideDmg="item.type == 'enchant' || item.type == 'alter' ? true : false" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
hr {
	margin-bottom: var(--sm-gap);
}

.failed {
	color: red;
}

.failed.full {
	color: slategrey;
}

.replacetext {
	white-space: pre-wrap;
}

.darkmode .failed.full {
	color: #505050;
}
</style>
