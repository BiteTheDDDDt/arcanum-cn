<script>
import ItemBase from "@/ui/itemsBase";

import { spellCost } from "modules/craft";
import Game from "@/game";

import Settings from "modules/settings";

import FilterBox from "@/ui/components/filterbox.vue";
import SpellList from "@/ui/spelllist.vue";
import SpellSchool from "ui/spellschool.vue";

export default {
	mixins: [ItemBase],
	data() {
		return Object.assign(
			{
				min: 0,
				showList: false,
				showKeywords: false,
				schools: {},
				keywords: [],
				spellsBySearch: null,
				userSpells: Game.state.userSpells,

				/**
				 * Craft info object.
				 */
				craft: {
					name: "Crafted Spell",
					level: 0,
					buy: null,
				},
			},
			Settings.getSubVars("spells"),
		);
	},
	created() {
		// trim saved schools
		const spells = this.spells;
		const schools = {};

		for (let i = 0; i < spells.length; i++) {
			const spell = spells[i];
			schools[spell.school] = this.schools[spell.school] === true;
		}

		this.schools = schools;

		// trim saved keywords
		const allKeywords = this.allKeywords;
		const keywords = [];
		for (let i = 0; i < this.keywords.length; i++) {
			const keyword = this.keywords[i];
			for (let group in allKeywords)
				if (allKeywords[group][keyword]) {
					keywords.push(keyword);
					break;
				}
		}

		this.keywords = keywords;
	},
	setup() {
		const counter = 0;
		return { counter };
	},
	components: {
		filterbox: FilterBox,
		spellschool: SpellSchool,
		spelllist: SpellList,
	},
	updated() {
		this.counter++;
	},
	methods: {
		/**
		 * Remove user spell from UserSpells
		 */
		removeSpell(s) {
			this.userSpells.remove(s);
		},

		/**
		 * @function create - create the new spell combination.
		 */
		create() {
			if (!this.scraftlist || this.scraftlist.length === 0) return;

			Game.payCost(spellCost(this.scraftlist.toArray()));

			this.userSpells.create(this.scraftlist.toArray(), Game.state, this.craft.name);
			this.scraftlist.removeAll();
		},
		toggleKeywords() {
			this.showKeywords = Settings.setSubVar("spells", "showKeywords", !this.showKeywords);
		},
		toggleAllSchools() {
			const spells = this.spellsBySearch || this.spellsByLevel;
			let anyOpen = false;
			for (let i = 0; i < spells.length; i++) anyOpen ||= !this.schools[spells[i].school];
			for (let i = 0; i < spells.length; i++) this.schools[spells[i].school] = anyOpen;
			Settings.setSubVar("spells", "schools", this.schools);
		},
		getSpellOrder(spell) {
			if (!spell.template) return -9999;
			return spell.sortOrder ?? 9999;
		},
		searchSpell(spell, target) {
			const groups = target.split("|");
			for (let i = 0; i < groups.length; i++) {
				if (groups[i].length == 0) continue;
				const mandatory = groups[i].split(" ");
				let passed = true;
				for (let j = 0; j < mandatory.length; j++) {
					if (mandatory[j].length == 0) continue;
					const term = mandatory[j].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
					if (this.crawlSpell(spell, new RegExp(term, "i"))) continue;
					passed = false;
					break;
				}
				if (passed) return true;
			}
			return false;
		},
		toggleSchool(school) {
			this.schools[school] = !this.schools[school];
			Settings.setSubVar("spells", "schools", this.schools);
		},
		crawlSpell(spell, regex) {
			if (spell.template) return this.crawlTemplate(spell.template, regex);
			const items = spell.items;
			for (let i = 0; i < items.length; i++) if (this.crawlSpell(items[i], regex)) return true;
			return false;
		},
		crawlTemplate(template, regex) {
			if (template.dot && regex.test("buffs")) return true;
			if (template.summon && regex.test("summons")) return true;
			if (template.cost) for (let c in template.cost) if (this.crawlProperty(c, regex)) return true;

			for (let k in template) {
				if (
					k == "desc" ||
					k == "flavor" ||
					k == "require" ||
					k == "buy" ||
					k == "cost" ||
					k == "need" ||
					k == "needtext"
				)
					continue;
				if (this.crawlProperty(template[k], regex)) return true;
			}
			return false;
		},
		crawlObject(obj, regex) {
			for (let k in obj) {
				if (this.crawlProperty(k, regex)) return true;
				if (this.crawlProperty(obj[k], regex)) return true;
			}
			return false;
		},
		crawlProperty(prop, regex) {
			const type = typeof prop;
			if (type == "object" || type == "array") return this.crawlObject(prop, regex);

			if (type != "string") prop = prop.toString();
			const split = prop.split(/\.|=|<|>|!|,|&&|\|\||\(|\)|\+|\-|'/);
			for (let i = 0; i < split.length; i++) {
				const str = split[i];
				if (/^[0-9\*\~\%]*$/.test(str)) continue;
				if (/^[a-zA-Z0-9_ ]*$/.test(str)) {
					const data = Game.state.getData(str);
					if (data) {
						if (regex.test(data.name)) return true;
						continue;
					}
				}
				if (regex.test(str)) return true;
			}
			return false;
		},
		testSpellKeywords(spell, keywords) {
			if (!spell.template) {
				const items = spell.items;
				for (let i = 0; i < items.length; i++) if (this.testSpellKeywords(items[i], keywords)) return true;
				return false;
			}

			if (!spell.keywords) return false;

			for (let i = 0; i < keywords.length; i++) {
				const keyword = keywords[i];
				let passed = false;
				for (let k in spell.keywords) {
					passed ||= spell.keywords[k].includes(keyword);
				}
				if (!passed) return false;
			}
			return true;
		},
		prelimSpell() {
			let obj = {};
			obj.buy = spellCost(this.scraftlist.toArray());
			obj.name = this.craft.name;
			obj.level = this.scraftlist.used;
			return obj;
		},
	},
	computed: {
		/**
		 * Determine if the group being created can be crafted.
		 * cost+length + user slots available.
		 * @returns {boolean}
		 */
		canCraft() {
			return (
				!(this.scraftlist.used > this.scraftlist.max) &&
				!this.userSpells.full() &&
				this.scraftlist.used > 0 &&
				Game.canPay(spellCost(this.scraftlist.toArray()))
			);
		},
		scraftlist() {
			return Game.state.scraftlist;
		},
		/**
		 * Spellcraft power.
		 */
		minLevel: {
			get() {
				return this.min;
			},
			set(v) {
				this.min = Settings.setSubVar("spells", "min", Number(v));
			},
		},
		varKeywords: {
			get() {
				return this.keywords;
			},
			set(v) {
				this.keywords = Settings.setSubVar("spells", "keywords", v);
			},
		},
		// spell funnel
		state() {
			return Game.state;
		},
		// filter out locked spells
		spells() {
			return this.state
				.filterItems(it => it.type === "spell" && !this.locked(it))
				.sort((a, b) => this.getSpellOrder(a) - this.getSpellOrder(b));
		},
		// compute avilable keywords
		allKeywords() {
			const result = {
				type: {
					damage: false,
					recovery: false,
					buff: false,
					debuff: false,
					summon: false,
				},
				target: {
					self: false,
					ally: false,
					enemy: false,
				},
				targets: {
					single: false,
					multiple: false,
				},
				delivery: {
					instant: false,
					"over time": false,
				},
				special: {
					explore: false,
					resource: false,
					weapon: false,
					stance: false,
				},
			};

			const spells = this.spells;
			for (let i = 0; i < spells.length; i++) {
				const keywords = spells[i].keywords ?? {};
				for (let k in keywords) {
					const group = result[k] ?? (result[k] = {});
					const array = keywords[k];
					for (let j = 0; j < array.length; j++) group[array[j]] = true;
				}
			}

			for (let k1 in result) {
				const group = result[k1];
				for (let k2 in group) if (!group[k2]) delete group[k2];
				if (Object.keys(group).length == 0) delete result[k1];
			}

			return result;
		},
		// filter out spells without selected keywords
		spellsByKeywords() {
			const spells = this.spells;
			const keywords = this.keywords;

			if (!keywords || keywords.length == 0) return spells;
			return spells.filter(spell => this.testSpellKeywords(spell, keywords));
		},
		// filter out unselected levels of spells
		spellsByLevel() {
			const spells = this.spellsByKeywords;
			const level = this.minLevel;

			if (!level) return spells;
			return spells.filter(v => !level || v.level.valueOf() === level);
		},
		/* filterbox happens here */

		// split on schools and render
		spellBySchools() {
			const spells = this.spellsBySearch || this.spellsByLevel;
			const schools = {};

			let spellschool;
			const len = spells.length;
			for (let i = 0; i < len; i++) {
				let spell = spells[i];
				let school = spell.school;
				spellschool = schools[school] || (schools[school] = []);
				spellschool.push(spell);
			}
			return schools;
		},
	},
};
</script>

<template>
	<div class="spellcraft">
		<div class="userspells">
			<div>Custom Spells: {{ Math.floor(userSpells.used) + " / " + Math.floor(userSpells.max.value) }}</div>
			<div class="custSpellList">
				<div v-for="c in userSpells.items" :key="c.id" @mouseenter.capture.stop="itemOver($event, c)">
					<span class="text-entry">
						<input class="fld-name" type="text" v-model="c.name" />
					</span>
					<button type="button" class="stop" @click="removeSpell(c)">X</button>
				</div>
			</div>
		</div>
		<div class="lower">
			<div class="spellControls">
				<div class="inputgroup">
					<filterbox v-model="spellsBySearch" :prop="searchSpell" :items="spellsByLevel" />
					<label class="level-lbl" :for="elmId('level')">Level</label>
					<input class="level" :id="elmId('level')" type="number" v-model="minLevel" min="0" size="5" />
				</div>
				<div class="keywordcontainer">
					<div
						class="keywords"
						v-for="(arr, gr) in allKeywords"
						:key="gr"
						v-if="showKeywords"
						:style="{ 'min-width': Object.keys(arr).length * 9 + '%' }">
						<div class="keytitle">
							<b>{{ gr }}</b>
						</div>
						<div class="keywordgroup">
							<div class="checks" v-for="(_, k) in arr" :key="k">
								<input type="checkbox" :value="k" :id="elmId('chk' + k)" v-model="varKeywords" />
								<label :for="elmId('chk' + k)">{{ k.toTitleCase() }}</label>
							</div>
						</div>
					</div>
				</div>
				<div class="buttongroup">
					<button type="button" @click="toggleKeywords">Keywords</button>
					<button type="button" @click="toggleAllSchools">Toggle Schools</button>
				</div>
				<div class="bottom">
					<div class="spellbook">
						<spellschool
							v-for="(v, k) in spellBySchools"
							:spells="v"
							:school="k"
							:key="k"
							:isOpen="!schools[k]"
							:mode="'scraft'"
							@toggle-open="toggleSchool" />
					</div>
				</div>
			</div>
			<div class="currentCraft">
				<div class="options">
					<div class="text-entry">
						<input class="fld-name" :id="elmId('spName')" type="text" v-model="craft.name" />
					</div>
					<span @mouseenter.capture.stop="itemOver($event, this.prelimSpell())">
						<button type="button" @click="create" :disabled="!canCraft">Craft</button>
					</span>
					<span class="warn-text" v-if="scraftlist.used >= scraftlist.max">
						You are at your power limit.
					</span>
				</div>
				<spelllist class="spelllist" :list="scraftlist" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.spellcraft {
	display: flex;
	flex-direction: column;
}

/* custom spells top section */
.userspells {
	display: flex;
	flex-direction: column;
	padding: var(--md-gap);
	border-bottom: 1pt solid var(--separator-color);
}
.custSpellList {
	display: flex;
	flex-flow: row wrap;
}
.custSpellList div {
	margin-right: 1.2rem;
}

/* lower section */
.lower {
	display: flex;
	flex-direction: row;
}

/* current list of spells to scraft */
.currentCraft {
	display: flex;
	flex-direction: column;
	flex: 2;
}
.spelllist {
	border-left: 1px solid var(--separator-color);
	padding: var(--sm-gap);
}
.options {
	padding-bottom: var(--tiny-gap);
}

/* spell controls */
.spellControls {
	flex: 8;
}
div.spells {
	display: flex;
	flex-flow: column nowrap;
	padding: var(--sm-gap) var(--md-gap);
	height: 100%;
}

div.filters {
	flex-flow: row wrap;
	display: flex;
	text-align: center;
	border-bottom: 1px solid var(--separator-color);
	margin: 0;
	padding: var(--sm-gap);
	line-height: 2em;
	justify-content: center;
}

div.inputgroup {
	width: 100%;
	display: flex;
	justify-content: center;
}

div.inputgroup label {
	margin-left: 1em;
	padding: var(--tiny-gap) 0;
	text-indent: var(--sm-gap);
}

div.inputgroup input {
	margin-right: 1em;
	margin-left: 1em;
	padding: var(--tiny-gap) 0;
	text-indent: var(--sm-gap);
}

div.keywordcontainer {
	display: flex;
	flex-wrap: wrap;
}

div.keywords {
	padding: var(--sm-gap);
	background-color: #9992;
	flex-grow: 1;
}

div.keytitle {
	border: 1px solid #9998;
	width: 100%;
	text-transform: capitalize;
	text-align: center;
}

div.keywordgroup {
	width: 100%;
	display: flex;
	justify-content: center;
}

div.buttongroup {
	width: 100%;
	display: flex;
	justify-content: center;
}

div.spells .bottom {
	display: flex;
	flex-flow: row nowrap;
}

div.spells .spellbook {
	flex-basis: 80%;
	flex-grow: 1;
}

div.spells div.filters div {
	box-sizing: border-box;
	margin: 0;
}

div.spells div.filters div.checks {
	margin: 0;
	padding: 0 0.5em;
	flex-basis: unset;
}
</style>
