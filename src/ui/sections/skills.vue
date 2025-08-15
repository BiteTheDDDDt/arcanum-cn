<script>
import Game from "@/game";
import ItemBase from "@/ui/itemsBase";
import SkillView from "@/ui/items/skill.vue";
import Settings from "modules/settings";
import { lowFixed } from "@/util/format";
import { alphasort } from "@/util/util";

import FilterBox from "@/ui/components/filterbox.vue";

export default {
	props: ["state"],
	mixins: [ItemBase],
	components: {
		skill: SkillView,
		filterbox: FilterBox,
	},
	data() {
		let ops = Settings.getSubVars("skills");

		return Object.assign(
			{
				/**
				 * @property {Item[]} filtered - filtered search results.
				 */
				filtered: null,
			},
			ops,
		);
	},
	updated() {
		if (this.prevWidth !== this.getWidth(this.$el) || this.prevLength !== this.filtered.length) {
			this.resizeGrid();
			this.prevWidth = this.getWidth(this.$el);
			this.prevLength = this.filtered.length;
		}
	},
	computed: {
		chkHide: {
			get() {
				return this.hideMaxed;
			},
			set(v) {
				this.hideMaxed = Settings.setSubVar("skills", "hideMaxed", v);
			},
		},
		arcana() {
			return this.state.getData("arcana");
		},

		skills() {
			return this.state.skills.slice().sort(alphasort);
		},

		available() {
			return this.hideMaxed
				? this.skills.filter(it => !it.maxed() && !this.reslocked(it))
				: this.skills.filter(it => !this.reslocked(it));
		},
	},
	methods: {
		lowFixed: lowFixed,
		train(skill) {
			Game.toggleTask(skill);
		},

		getWidth(elm) {
			return elm.getBoundingClientRect().width;
		},

		resizeGrid() {
			let gridElm = this.$refs.skillgrid;
			gridElm.style = "";
			let maxWidth = 0;
			for (let child of gridElm.children) {
				let childWidth = this.getWidth(child.children[0]);
				if (childWidth > maxWidth) {
					maxWidth = childWidth;
				}
			}

			if (maxWidth > 0) {
				let width = Math.floor(this.getWidth(gridElm) / maxWidth);
				gridElm.style = `grid-template-columns: repeat( auto-fit, minmax(calc(100% / ${width}), 0.5fr) )`;
			}
		},
		searchIt(it, t) {
			const regex = new RegExp(t, "i");
			if (regex.test(it.name)) return true;
			if (it.tags) {
				let tags = it.tags;
				for (let i = tags.length - 1; i >= 0; i--) {
					if (regex.test(tags[i])) return true;
				}
			}
			if (it.mod && typeof it.mod === "object") {
				for (let p in it.mod) {
					if (game.state.getData(p) && typeof game.state.getData(p) === "object") {
						if (regex.test(game.state.getData(p).name)) return true;
					}
				}
			}
			if (it.result) {
				for (let p in it.result) {
					let data = game.state.getData(p);
					if (data == null) continue;
					if (data.name.toLowerCase().includes(t.toLowerCase())) return true;
				}
			}
			return false;
		},
	},
};
</script>

<template>
	<div class="skills">
		<span class="separate title">
			<filterbox v-model="filtered" :prop="searchIt" :items="available" />

			<span>
				<input :id="elmId('hideMax')" type="checkbox" v-model="chkHide" />
				<label :for="elmId('hideMax')">Hide Maxed</label>
			</span>

			<span>Arcana: {{ lowFixed(arcana.value) }}/{{ lowFixed(arcana.max) }}</span>
		</span>

		<div class="subs" ref="skillgrid">
			<skill v-for="s in filtered" :key="s.id" :skill="s" :active="s.running" @train="train"></skill>
		</div>
	</div>
</template>

<style scoped>
div.skills {
	height: 100%;
	width: (100% - 40px);
	max-width: (100% - 40px);
	padding: 0;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
}

div.skills .title > span {
	align-self: center;
}

.separate {
	width: 90%;
}

div.subs {
	overflow-y: auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(12rem, 0.5fr));
	margin: 0;
	padding: var(--md-gap);
	overflow-x: hidden;
	gap: var(--sm-gap);
	width: 100%;
	justify-content: space-between;
}

/* Compact mode style */
body.compact div.subs {
	justify-content: center;
}

body.compact div.subs div.skill > div > div .bar {
	max-height: var(--md-gap);
	background: var(--list-entry-background);
	border: none;
	margin: 0.5em;
}
</style>
