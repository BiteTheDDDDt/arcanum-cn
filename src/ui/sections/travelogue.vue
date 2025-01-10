<script>
import Game from "@/game";
import ItemBase from "@/ui/itemsBase";
import FilterBox from "@/ui/components/filterbox.vue";
import { alphasort, levelsort } from "@/util/util";
import { TYP_RANGE, ENCOUNTER, DUNGEON, LOCALE, CLASH } from "@/values/consts";

export default {
	mixins: [ItemBase],
	data() {
		return {
			filtered: null,
			sortBy: "name",
			sortOrder: 1,
			fltLearn: false
		};
	},
	components: {
		filterbox: FilterBox,
	},
	beforeCreate() {
		this.game = Game;
	},
	methods: {
		toNum(v) {
			return (
				typeof v === "object" ? (v.type === TYP_RANGE ? v.max : v.value) : v
			).toFixed(0);
		},
		setSort(by) {
			if (this.sortBy === by) {
				this.sortOrder = -this.sortOrder;
			} else this.sortBy = by;
		},
		fixIt(obj) {
			for (let a of obj) {
				a.encs = a.baseencs.slice();
			}
		},
		searchIt(searchObj, t) {
			searchObj.encs = searchObj.baseencs.slice();
			if (oof(searchObj.locale)) return true;
			for (let a = searchObj.encs.length - 1; a >= 0; a--) {
				if (!oof(searchObj.encs[a])) searchObj.encs.splice(a, 1);
			}
			if (searchObj.encs.length > 0) {
				return true;
			} else searchObj.encs = searchObj.baseencs.slice();

			return false;

			function oof(it) {
				if (it.name.toLowerCase().includes(t.toLowerCase())) return true;
				if (it.tags) {
					let tags = it.tags;
					for (let i = tags.length - 1; i >= 0; i--) {
						if (tags[i].toLowerCase().includes(t.toLowerCase())) return true;
					}
				}
				if (it.mod) {
					for (let p in it.mod) {
						let data = game.state.getData(p);
						if (data == null) continue;
						if (data.name.toLowerCase().includes(t.toLowerCase()))
							return true;
					}
				}
				if (it.result) {
					for (let p in it.result) {
						let data = game.state.getData(p);
						if (data == null) continue;
						if (data.name.toLowerCase().includes(t.toLowerCase()))
							return true;
					}
				}
				if (it.loot && it.tags.includes('loot_equip_gen')===false) {
					for (let p in it.loot) {
						let data = game.state.getData(p);
						if (data == null) continue;
						if (data.name.toLowerCase().includes(t.toLowerCase()))
							return true;
					}
				}
				return false;
			}
		},
		allEncounters() {
			let all = this.game.state.encounters;
			var a = [];

			for (let i = all.length - 1; i >= 0; i--) {
				var it = all[i];
				if (it.value <= 0) continue;
				a.push(it);
			}

			return a;
		},
		allLocales() {
			let all = this.game.state
				.filterItems(
					(it) => it.type === DUNGEON || it.type === LOCALE || it.type === CLASH
				)
				.sort(alphasort);
			var a = [];

			for (let i = all.length - 1; i >= 0; i--) {
				var it = all[i];
				if (it.value <= 0 && it.ex <= 0) continue;
				a.push(it);
			}

			return a;
		},
		encByLocale(locale, checkarray) {
			let localencs = [];
			if (!locale.spawns.groups) return null
			let count = locale.spawns.groups.length;
			for (let a of locale.spawns.groups) {
				let ag = this.game.getData(a.ids);
				if (!ag) {
					count--;
					continue;
				}
				if (ag.type != ENCOUNTER) {
					count--;
					continue;
				}
				if (checkarray.findIndex((v) => v.id == ag.id) != -1)
					checkarray.splice(
						checkarray.findIndex((v) => v.id == ag.id),
						1
					);
				if (!localencs.find((v) => v.id == ag.id)) {
					if (ag.value > 0) {
						if (this.fltLearn) {
							let site = ag.tags.includes("enc_site_of_learning");
							if (site) localencs.push(ag);
						}
						else localencs.push(ag);
						count--;
					}
				} else count--;
			}
			return { encs: localencs, unknown: count };
		},
	},
	computed: {
		allItems() {
			let orphanedEncounters = this.allEncounters();
			let tree = [];
			for (let checkedloc of this.allLocales()) {
				let a = {};
				a.locale = checkedloc;
				let e = this.encByLocale(checkedloc, orphanedEncounters);
				if (e) {
					a.encs = e.encs;
					a.baseencs = e.encs.slice();
					a.unknown = e.unknown;
				}
				else continue
				if (a.encs.length > 0) tree.push(a);
			}
			if (tree.length > 0 && orphanedEncounters.length > 0)
				tree.push({
					locale: { id: "orphanedencs", name: "Encounters without locale" },
					encs: orphanedEncounters,
					baseencs: orphanedEncounters.slice(),
					unknown: 0,
				});
			return tree;
		},
		sorted() {
			/*
			let by = this.sortBy;
			let order = this.sortOrder;
			let v1, v2;

			return (this.filtered || this.allItems).sort((a, b) => {
				v1 = a[by];
				v2 = b[by];
				if (v1 > v2) return order;
				else if (v2 > v1) return -order;
				else return 0;
			});
			*/
			return this.filtered || this.allItems;
		},
	},
};
</script>

<template>
	<div class="search">
		<filterbox v-model="filtered" :prop="searchIt" :items="allItems" :min-items="5" :defFunc="fixIt" />
		<span class="chkSites"
			@mouseenter.capture.stop="itemOver($event, null, null, null, 'Shows only Sites of Learning, encounters that will grant maximum skill levels.')">
			<input :id="elmId('showSites')" type="checkbox" v-model="fltLearn">
			<label :for="elmId('showSites')">Sites of Learning</label>
		</span>
	</div>
	<div class="travelogue">
		<span class="header">Encounters</span>
		<span class="header">Length</span>
		<span class="header">Visits</span>
		<template v-for="b in sorted" :key="b.locale.id">
			<div class="locale">
				<span @mouseenter.capture.stop="itemOver($event, b.locale)">
					{{ b.locale.name.toTitleCase() }}
				</span>
			</div>
			<template v-for="c in b.encs" :key="c.id">
				<span class="encounter" @mouseenter.capture.stop="itemOver($event, c)">
					{{ c.name.toTitleCase() }}
				</span>
				<span class="number"> {{ Math.floor(c.level * 5) }} </span>
				<span class="number"> {{ Math.floor(c.value) }} </span>
			</template>
			<template v-for="a in b.unknown">
				<span class="encounter"> ?????? </span>
				<span class="number"> ??? </span>
				<span class="number"> ??? </span>
			</template>
			<hr style="width: 95%; grid-column: 1/4;">
		</template>
	</div>
</template>

<style scoped>
.search {
	margin: 5px;
	display: flex;
	flex-direction: row;
}

.search .chkSites {
	align-content: center;
}

.travelogue {
	width: 95%;
	display: inline-grid;
	grid-template-columns: 50% 25% 25%;
	margin: var(--md-gap);
}

.travelogue span {
	margin: 5px;
}

.travelogue .header {
	font-weight: bold;
	text-decoration: underline;
	text-align: center;
}

.travelogue .locale {
	margin-left: 4%;
	grid-column: 1 / 4;
	text-decoration: underline;
}

.travelogue .encounter {
	margin-left: 20%;
}

.travelogue .number {
	text-align: center;
}
</style>
