<script>
import Game from '../../game';
import FilterBox from '../components/filterbox.vue';
import { USE } from '../../events';
import Settings from 'modules/settings';
import GlossaryEntries from '../panes/glossaryentries.vue';
import profile from '../../modules/profile';

export default {

	/**
	 * @property {Inventory} inv - the inventory object.
	 * @property {boolean} take - whether to display take button.
	 * @property {boolean} selecting - inventory is selection only. sell-all & size information hidden.
	 * @property {string[]} types - item types to display.
	 */
	props: [],
	data() {
		return {
			filtered: null,
			selected: null
		}
	},
	created() {
		let curentry = Settings.getSubVars('entryview');
		if (curentry) {
			this.selected = Game.state.glossaryentries.find(v => v.id === curentry && v.locked === false);
		} else {
			this.selected = null;
		}
		this.filtered = this.baseItems;
	},
	components: {
		filterbox: FilterBox,
		entries: GlossaryEntries
	},
	methods: {
		setSelected(it) {
			this.selected = it;
			Settings.set('entryview',it.id);
			this.$children.find(v => v.$el.className == "res-list").resetSelected(it)
		},
		searchIt(it, t) {

			if (it.name.includes(t)) return true;
			if (it.tags) {

				let tags = it.tags;
				for (let i = tags.length - 1; i >= 0; i--) {
					let tag = Game.state.tagSets[tags[i]] || tags[i]
					if (tag.name.includes(t)) return true;
				}
			}

			return false;


		}

	},
	computed: {
		hall() { return profile.hall; },
		baseItems() {
			return Game.state.glossaryentries.concat(this.hall.glossaryentries);
		},
		postfilter() {
			return this.filtered;
		},
		joineddesc() {
			return this.selected.desc.join('\n');
		},
		tags() {

			let tags = this.selected.tags;
			if (typeof tags === 'string') tags = [tags];
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

			return names.join(', ');

		},
	}
}
</script>


<template>
	<div class="main">
		<div class="menu">
			<filterbox v-model="filtered" :prop="searchIt" :items="baseItems" />
			<entries @selected="setSelected" :items="postfilter" />
		</div>
		<div class="glossary" v-if="selected">
			<div class='boldlarge'>{{ selected.name.toTitleCase() || '' }}</div>
			<div class='tight note-text' v-if="selected.tags">{{ tags }}</div>
			<div class='glossdesc'>{{ joineddesc || '' }}</div>
		</div>
	</div>
</template>


<style scoped>
.main {
	display: flex;
	width: 100%;
	height: 100%;
}

.menu {
	display: flex;
	flex-direction: column;
	height: 100%;
	min-width: 20%;
}

.selected {
	display: flex;
	flex-direction: row;
	align-items: separate;
	overflow: hidden;
	width: 100%;
	height: 100%;
	min-height: 0;
}

.glossary {
	width: 100%;
	height: 100%;
	min-height: 0;
	padding-top: var(--rg-gap);
	padding-left: var(--rg-gap);
}

.glossdesc {
	white-space: pre-wrap;
}


.top {
	padding: var(--tiny-gap);
	padding-top: var(--sm-gap);
}

.boldlarge {
	font-weight: bold;
	font-size: 24px;
	font-family: 'Open sans', sans-serif
}

.filter-box {
	display: inline;
	font-size: 0.9rem;
}

/*.table-div {
	display: grid; grid-template-columns: 1fr 1fr;
	flex-grow: 1;
	height:100%;
}*/

.item-table {
	flex-grow: 1;
	flex-shrink: 1;
	overflow-y: auto;
	min-height: 0;
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
	grid-auto-rows: min-content;

}

.item-name {
	flex-grow: 1;
}

.item-table .item {
	margin: var(--sm-gap);
	padding: var(--sm-gap);
	align-items: center;
}

.item .item-action {
	margin: var(--tiny-gap);
}
</style>