<script>
import Game from "@/game";
import Attack from "@/ui/items/attack.vue";
import DamageMixin from "@/ui/items/damageMixin.js";
import Dot from "@/ui/items/dot-info.vue";
import HealingMixin from "@/ui/items/healingMixin.js";
import InfoBlock from "@/ui/items/info-block.vue";
import { CheckTypes } from "@/ui/items/infoBlock.js";
import Summon from "@/ui/items/summon.vue";
import ItemsBase from "@/ui/itemsBase.js";
import { formatNumber, precise } from "@/util/format";
import { ENCOUNTER, EXPLORE, MONSTER } from "@/values/consts";
import settings from "modules/settings.js";

export default {
	name: "gdata",
	props: ["item"],
	mixins: [ItemsBase, DamageMixin(), HealingMixin()],
	components: {
		info: InfoBlock,
		attack: Attack,
		dot: Dot,
		summon: Summon,
	},
	methods: {
		precise,
		formatNumber,
		/**
		 * Convert tag strings into viewable format.
		 * @param {string|string[]} t
		 * @returns {string|string[]}
		 */

		tagNames(t) {
			if (Array.isArray(t)) return t.map(this.tagNames, this);
			if (typeof t === "string" && t.substring(0, 2) === "t_") return t.slice(2).toTitleCase();
			return t.toTitleCase();
		},
		formatTime(millis) {
			if (millis < 0) millis = 0;
			let hr = Math.floor(millis / 3600000);
			let min = Math.floor(millis / 60000) % 60;
			let sec = Math.floor(millis / 1000) % 60;
			return `${(hr < 10 ? "0" : "") + hr}:${(min < 10 ? "0" : "") + min}:${(sec < 10 ? "0" : "") + sec}`;
		},
		only(onlybase) {
			let onlystring = "";
			let basestring = typeof onlybase === "string" ? onlybase.split(",") : onlybase;
			for (let o of basestring) {
				if (onlystring != "") onlystring = onlystring.concat(", ");
				o = game.state.tagSets[o] || o;
				if (o instanceof Object && o.name) {
					onlystring = onlystring.concat(o.name.toTitleCase());
				} else {
					onlystring = onlystring.concat(this.tagNames(o));
				}
			}
			return onlystring;
		},
		exclude(excludebase) {
			let excludestring = "";
			let basestring = typeof excludebase === "string" ? excludebase.split(",") : excludebase;
			for (let o of basestring) {
				if (excludestring != "") excludestring = excludestring.concat(", ");
				o = game.state.tagSets[o] || o;
				if (o instanceof Object && o.name) {
					excludestring = excludestring.concat(o.name.toTitleCase());
				} else {
					excludestring = excludestring.concat(this.tagNames(o));
				}
			}
			return excludestring;
		},
	},
	beforeCreate() {
		this.player = Game.state.player;
		this.CheckTypes = CheckTypes;

		this.CONST = {
			ENCOUNTER,
			EXPLORE,
			MONSTER,
		};
	},

	computed: {
		name() {
			return this.item.sname || this.item.name.toTitleCase();
		},
		damage() {
			return this.getDamage(this.item);
		},
		healing() {
			return this.getHealing(this.item);
		},
		sellPrice() {
			return Game.sellPrice(this.item);
		},

		nextImprove() {
			return this.nextAt > 0 ? this.nextAt : this.nextEvery;
		},

		/**
		 * Occurance of next 'every' improvement relative to cur value.
		 */

		nextEvery() {
			let v = Math.floor(this.item.value);
			var next = Number.MAX_VALUE;
			var f;
			for (let p in this.item.every) {
				var dist = p - (v % p);
				if (dist < next) {
					next = dist;
					f = p;
				}
			}
			return next !== Number.MAX_VALUE ? (f - dist) / f : -1;
		},
		nextAt() {
			let v = this.item.value;
			// least upper bound.
			var sup = Number.MAX_VALUE;
			for (let p in this.item.at) {
				p = Number(p);
				if (p > v && p < sup) sup = p;
			}
			return sup > v && sup !== Number.MAX_VALUE ? sup : -1;
		},
		tags() {
			let tags = this.item.tags;
			if (typeof tags === "string") tags = [tags];
			let names = [];
			for (var i = 0; i < tags.length; i++) {
				let tag = tags[i];
				tag = Game.state.tagSets[tag] || tag;
				if (tag == null || tag.hide) continue;
				if (tag instanceof Object && tag.name) {
					names.push(tag.name.toTitleCase());
				} else {
					names.push(this.tagNames(tag));
				}
			}
			return names.join(", ");
		},
		cdtags() {
			if (!this.item.tags) return null;
			let tags = this.item.tags;
			if (typeof tags === "string") tags = [tags];
			let names = [];
			for (var i = 0; i < tags.length; i++) {
				let tag = tags[i];
				tag = Game.state.tagSets[tag] || tag;
				if (tag == null || tag.hide || !tag.sharecd) continue;
				if (tag instanceof Object && tag.name) {
					names.push(tag.name.toTitleCase());
				} else {
					names.push(this.tagNames(tag));
				}
			}
			return names.join(", ");
		},
		cdRemain() {
			if (this.item.template) {
				let parentid = this.item.template;
				if (this.item.template.id) {
					parentid = this.item.template.id;
				}
				let parent = Game.state.getData(parentid);
				return parent.timer;
			} else {
				return this.item.timer;
			}
		},
		spendingRate() {
			let rate = this.item.rate.value;
			const values = this.spending(this.item);
			if (values.length === 0) return rate ? precise(rate, 1, 4) + "/s" : "";
			else if (this.debugRateSetting) {
				let spendingStr = `<span class="calc-text">${precise(rate, 1, 4)}(R)`;
				values.forEach(obj => {
					spendingStr +=
						(obj.rate >= 0 ? ` + ` : ` - `) + precise(Math.abs(obj.rate), 1, 4) + `(${obj.name})`;
					rate += obj.rate;
				});
				spendingStr += `</span>    ${precise(rate, 1, 4)}/s`;
				return spendingStr;
			} else {
				return (
					precise(
						values.reduce((sumRate, obj) => sumRate + obj.rate, rate),
						1,
						4,
					) + "/s"
				);
			}
		},
		debugRateSetting() {
			return settings.get("debugRate");
		},
		itemSlot() {
			let slot = Game.getData(this.item.slot);
			return slot ? slot.name.toTitleCase() : this.item.slot.toString().toTitleCase();
		},
	},
};
</script>

<template>
	<div class="item-info">
		<!-- Begin upper section of tooltip -->
		<span class="separate">
			<span class="item-name">{{ name.toString().toTitleCase() }}</span>
			<span>
				<span v-if="item.type === 'resource' || item.type === 'stat'">
					{{
						formatNumber(Math.floor(item.current)) +
						(formatNumber(item.max) ? " / " + formatNumber(item.max.value) : "")
					}}
				</span>
				<span v-else-if="item.type === 'furniture'">
					max: {{ item.max ? formatNumber(item.max.value) : item.repeat ? "&infin;" : 1 }}
				</span>
				<span v-else-if="item.type === 'upgrade' || item.type === 'task'">
					<br />
					<span v-if="item.value">{{ formatNumber(+item.value) }}</span>
					<span v-if="item.max">/ {{ formatNumber(+item.max) }}</span>
					<span v-else-if="item.type === 'upgrade'">/ 1</span>
				</span>

				<span v-if="item.type === 'locale' || item.type === 'dungeon'">
					<span v-if="item.value">{{ formatNumber(+item.value) }}</span>
					<span v-if="item.max">/ {{ formatNumber(+item.max) }}</span>
				</span>
				<span v-if="item.type === 'encounter'">
					<span v-if="item.value">{{ formatNumber(+item.value) }}</span>
				</span>
				<span v-if="item.type === 'spell' && item.owned === true && item.value >= 0">
					{{ formatNumber(+item.value) }}
				</span>
				<span v-if="item.sym">{{ item.sym }}</span>
			</span>
		</span>

		<div class="tight note-text" v-if="item.tags || item.hands">
			<span v-if="item.hands > 1">Two-Handed </span>{{ tags }}
		</div>
		<span
			class="flex-right"
			v-if="
				item.rate &&
				(item.rate.value != 0 || item.convert || debugRateSetting) &&
				!(
					item.type == 'task' ||
					item.type == 'encounter' ||
					item.type == 'explore' ||
					item.type == 'dungeon' ||
					item.type == 'clash' ||
					item.type == 'locale' ||
					item.type == 'spell'
				)
			"
			v-html="spendingRate">
		</span>
		<span
			class="flex-right"
			v-if="
				item.rate &&
				item.rate.value != 0 &&
				item.length > 0 &&
				(item.type == 'task' || item.type == 'encounter')
			">
			Completion rate: {{ precise(item.rate.value * 100) }}%
		</span>
		<div>
			<span class="separate">
				<span v-if="item.showLevel">Level: {{ item.showLevel() }}</span>
				<span v-else-if="item.level && item.type === 'encounter'">Length: {{ item.length }} </span>
				<span v-else-if="item.level">Level: {{ item.level }}</span>

				<span v-if="item.slot && item.type !== 'armor' && item.type !== 'weapon'"
					>Slot: {{ item.slot.toString().toTitleCase() }}</span
				>
				<span v-else-if="item.slot">Slot: {{ itemSlot }}</span>
				<span v-if="item.kind && (item.type === 'monster' || item.type === 'npc')">
					Kind: {{ item.kind.toTitleCase() }}
				</span>
			</span>
			<span class="separate">
				<span v-if="item.regen && item.type !== 'player'">Regen: {{ item.regen }}</span>
				<span v-if="item.recharge && item.type !== 'player'">Recharge: {{ item.recharge }}</span>
			</span>

			<span v-if="item.enchants && item.enchants.max > 0">
				Enchant Levels: {{ item.enchants.value }} / {{ item.enchants.max }}
			</span>

			<span v-if="item.at && nextAt > 0" class="note-text">
				Next Improvement: {{ Math.round((100 * item.value) / nextAt) + "%" }}
			</span>
			<span v-else-if="item.every && nextEvery >= 0" class="note-text">
				Next Improvement: {{ Math.round(100 * nextEvery) + "%" }}
			</span>

			<div v-if="item.cd || cdRemain > 0" class="note-text">
				Cooldown: {{ cdRemain > 0 ? cdRemain.toFixed(2) + "Left" : item.cd + "s" }}
			</div>
			<div v-if="cdtags" class="note-text">Shares cooldown with: {{ cdtags }}</div>
			<div v-if="item.exclude" class="note-text">Cannot be used with: {{ this.exclude(item.exclude) }}</div>
			<div v-if="+item.dist && item.type !== 'player' && item.type !== 'npc' && item.type !== 'monster'">
				Distance: {{ item.dist }}
			</div>
			<div v-if="+item.armor">Armor: {{ item.armor }}</div>
			<div v-if="+item.evasion">Evasion: {{ item.evasion }}</div>
			<div v-if="+item.shield">Shield: {{ item.shield }}</div>
			<div v-if="+item.dmg && (!item.attack || item.attack.dmg !== item.dmg)">Base damage: {{ damage }}</div>
			<div v-if="+item.heal && (!item.attack || item.attack.heal !== item.heal)">Healing: {{ healing }}</div>

			<div class="item-desc" v-if="item.desc">{{ item.desc }}</div>
			<div class="item-extdesc" v-if="item.extdesc">{{ item.extdesc }}</div>
		</div>

		<span v-if="item.length > 0 && item.type === 'task'">
			Completion time: {{ formatTime(((item.length - item.exp) * 1000) / item.rate) }}
		</span>
		<!-- End of upper section of tooltip -->

		<info
			v-if="item.need"
			title="Need"
			:require="true"
			:info="item.need"
			:text="item.needtext"
			:checkType="CheckTypes.NEED" />
		<info v-if="item.buy && !item.owned" :info="item.buy" :checkType="CheckTypes.COST" title="Purchase Cost" />
		<info v-if="item.cost" :info="item.cost" :checkType="CheckTypes.COST" title="Cost" />
		<info
			v-if="
				item.sell ||
				item.instanced ||
				(item.type === 'Furniture' && item.type !== 'player' && item.type !== 'npc')
			"
			:info="sellPrice"
			:checkType="CheckTypes.FULL"
			title="Sell" />
		<info v-if="item.run" :info="item.run" :checkType="CheckTypes.COST" title="Progress Cost" rate="true" />
		<div v-if="item.attack">
			<div class="info-sect">Attack</div>
			<attack :item="item" class="info-subsubsect" />
		</div>
		<div v-if="item.onSummon">
			<div v-if="item.onSummon.name">
				<div class="info-sect">When summoned in combat</div>
				<attack :item="item" onsummonflag="true" class="info-subsubsect" />
			</div>
		</div>
		<div v-if="item.onHit">
			<div v-if="item.onHit.name">
				<div class="info-sect">When struck directly</div>
				<attack :item="item" onhitflag="true" class="info-subsubsect" />
			</div>
		</div>
		<div v-if="item.onMiss">
			<div v-if="item.onMiss.name">
				<div class="info-sect">After dodging an attack</div>
				<attack :item="item" onmissflag="true" class="info-subsubsect" />
			</div>
		</div>
		<div v-if="item.onExpire">
			<div v-if="item.onExpire.name">
				<div class="info-sect">On expiration</div>
				<attack :item="item" onexpireflag="true" class="info-subsubsect" />
			</div>
		</div>
		<div v-if="item.onDeath">
			<div v-if="item.onDeath.name">
				<div class="info-sect">When killed</div>
				<attack :item="item" ondeathflag="true" class="info-subsubsect" />
			</div>
		</div>
		<div v-if="item.conditiontext">
			<div class="info-sect">Has a conditional effect:</div>
			<div :class="{ failed: !item.conditionstatus }">
				{{ item.conditiontext }}
			</div>
		</div>
		<div v-if="item.removedot">
			<div>This dot will be removed</div>
		</div>
		<div v-if="item.conditional?.onSuccess">
			<div class="info-subsect">When condition is met</div>
			<dot :dot="item.conditional.onSuccess" :item="item" />
		</div>
		<div v-if="item.conditional?.onFailure">
			<div class="info-subsect">When condition is not met</div>
			<dot :dot="item.conditional.onFailure" :item="item" />
		</div>
		<div v-if="item.effect">
			<div class="info-sect">Effects:</div>
			<info :info="item.effect" :text="item.effecttext" :rate="true" :checkType="CheckTypes.FULL" />
		</div>

		<div v-if="(item.mod && Object.keys(item.mod).length) || (item.alter && Object.keys(item.alter).length)">
			<div class="info-sect">Modifications:</div>
			<info v-if="item.mod && Object.keys(item.mod).length" :info="item.mod" :text="item.modtext" />
			<info
				v-if="item.alter && Object.values(item.alter).length"
				:info="item.alter"
				:text="item.altertext"
				:separate="true" />
		</div>
		<div v-if="item.convert">
			<div v-if="!item.convert.singular" class="info-sect">
				Conversion per {{ name.toString().toTitleCase() }}
			</div>
			<div v-if="item.convert.singular" class="info-sect">
				Constant conversion for {{ name.toString().toTitleCase() }}
			</div>
			<div class="info-sect">Input:</div>
			<info
				:info="item.convert.input"
				:rate="item.perpetual > 0 || item.length > 0"
				:checkType="CheckTypes.COST" />
			<div class="info-sect">Output:</div>
			<info
				v-if="item.convert.output.effect && Object.values(item.convert.output.effect).length"
				:info="item.convert.output.effect"
				:rate="item.perpetual > 0 || item.length > 0"
				:checkType="CheckTypes.FULL" />
			<info
				v-if="item.convert.output.mod && Object.values(item.convert.output.mod).length"
				:info="item.convert.output.mod" />
		</div>
		<div v-if="item.summon">
			<div class="info-sect">Summons:</div>
			<summon :item="item" class="info-subsubsect" />
		</div>
		<div v-if="item.resurrect">
			<div class="info-sect">Resurrects:</div>
			<div v-if="item.resurrect.only">Only: {{ this.only(item.resurrect.only) }}</div>
			<div v-if="item.resurrect.maxlevel">Up to level {{ item.resurrect.maxlevel }}</div>
			<div>Up to {{ item.resurrect.count || 1 }} minions per cast</div>
		</div>
		<div v-if="item.once">
			<div class="info-sect">On First Completion:</div>
			<info :info="item.once" :checkType="CheckTypes.FULL" />
			<div v-if="item.once.loot">
				<div class="info-sect">Loot:</div>
				<info :info="item.once.loot" :checkType="CheckTypes.FULL" />
			</div>
		</div>
		<div v-if="item.result">
			<div class="info-sect">Results:</div>
			<info :info="item.resulttext || item.result" :checkType="CheckTypes.FULL" />
		</div>
		<div>
			<div v-if="item.loot">
				<div class="info-sect">Loot:</div>
				<div v-if="item.type === CONST.MONSTER && !+item.value">Kill to discover</div>
				<div v-else-if="item.type === CONST.ENCOUNTER && !+item.value">Complete to discover</div>
				<div v-else-if="item.controller === CONST.EXPLORE && !+item.value">Complete to discover</div>
				<info v-else :info="item.loottext || item.loot" :checkType="CheckTypes.FULL" />
			</div>
		</div>

		<div v-if="item.use">
			<div class="info-sect">When used:</div>
			<div class="info-subsubsect">
				<info :info="item.use" :separate="true" />
			</div>
		</div>

		<div v-if="item.runmod && Object.values(item.runmod).length">
			<div class="info-sect">Modifications While Progressing:</div>
			<info :info="item.runmod" />
		</div>

		<div v-if="item.dot">
			<div class="info-sect">Buffs:</div>
			<dot :dot="item.dot" :item="item" class="info-subsubsect" />
		</div>

		<div v-if="item.lock">
			<div class="info-sect">Locks:</div>
			<info :info="item.lock" />
		</div>

		<div v-if="item.disable">
			<div class="info-sect">Disables:</div>
			<info :info="item.disable" />
		</div>

		<div v-if="item.enable">
			<div class="info-sect">Enables:</div>
			<info :info="item.enable" />
		</div>

		<div class="note-text" v-if="item.flavor">{{ item.flavor }}</div>
	</div>
</template>

<style scoped>
.tight {
	margin: 0;
	padding: 0;
}

div.item-desc {
	margin: 0.6em 0 0.9em;
	font-size: 0.96em;
}

div.item-extdesc {
	margin: 0.6em 0 0.9em;
	font-size: 0.8em;
}

.item-name {
	font-weight: bold;
}

.separate > span {
	margin-left: var(--sm-gap);
}

.failed {
	color: red;
}
</style>
