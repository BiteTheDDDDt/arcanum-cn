<script>
import ProgBar from 'ui/components/progbar.vue';
import Running from '@/ui/panes/running.vue';
//import Mood from '@/ui/panes/items/mood.vue';

import Settings from 'modules/settings';

import Game from '@/game';
import UIMixin from '@/ui/uiMixin';
import ItemBase from '@/ui/itemsBase';


/**
 * Player vital bars.
 */
export default {

	props: ['state'],
	mixins: [ItemBase, UIMixin],
	components: {
		progbar: ProgBar,
		running: Running
	},

	data() {

		let ops = Settings.getSubVars('');
		if (!ops.hide) ops.hide = {};

		return {
			hide: ops.hide
		}

	},

	computed: {
		hp() { return this.state.getData('hp'); },
		stamina() { return this.state.getData('stamina'); },
		vigor() { return this.state.getData('vigor'); },
		mana() { return this.state.getData('mana'); },

		manaElementList() { return this.state.filterItems(it => it.hasTag('element') && !it.locked); },
		visManaElementList() { return this.manaElementList.filter(v => this.show(v)).sort((a, b) => a.sortOrder - b.sortOrder); },
		manaPrimalList() { return this.state.filterItems(it => it.hasTag('primal') && !it.locked); },
		visManaPrimalList() { return this.manaPrimalList.filter(v => this.show(v)).sort((a, b) => a.sortOrder - b.sortOrder); },
		manaFundamentalList() { return this.state.filterItems(it => it.hasTag('fundamental') && !it.locked); },
		visManaFundamentalList() { return this.manaFundamentalList.filter(v => this.show(v)).sort((a, b) => a.sortOrder - b.sortOrder); },

		specials() { return this.state.filterItems(it => it.hasTag('specialty') && !it.locked); },
		visSpecials() { return this.specials.filter(v => this.show(v)); },
		menaces() { return this.state.filterItems(it => it.hasTag('menace') && it.value > 0); },
		visMenaces() { return this.menaces.filter(v => this.show(v)); },

		labelManaElemental() { return this.visManaElementList.length > 0; },
		labelManaPrimal() { return this.visManaPrimalList.length > 0; },
		labelManaFundamental() { return this.visManaFundamentalList.length > 0; },
		labelSpecialMenace() { return this.visMenaces.length > 0 || this.visSpecials.length > 0; },
		showMana() { return this.show(this.mana) && !this.mana.locked; },
		labelManas() { return this.showMana || this.labelManaElemental || this.labelManaPrimal || this.labelManaFundamental; }
	}

}
</script>

<template>

	<div class="vitals">

		<running :runner="state.runner" />

		<div class="config"><button type="button" ref="btnHides" class="btnConfig"></button></div>

		<!-- anything not a table is a headache -->
		<div class="statbars">
			<div class="category-label"> Body </div>

			<div class="hidable statbar" data-key="hp" v-show="show(hp)"><span class="name">life</span><span
					class="barspan">
					<progbar class="hp" :value="hp.valueOf()" :max="hp.max.value" @mouseenter="itemOver($event, hp)" />
				</span></div>

			<div class="hidable statbar" data-key="stamina" v-show="show(stamina)">
				<span class="name">Stamina</span><span class="barspan">
					<progbar class="stamina" :value="stamina.valueOf()" :max="stamina.max.value"
						@mouseenter="itemOver($event, stamina)" />
				</span>
			</div>

			<div class="hidable statbar" data-key="vigor" v-show="show(vigor)">
				<span class="name">vigor</span><span class="barspan">
					<progbar class="vigor" :value="vigor.valueOf()" :max="vigor.max.value"
						@mouseenter="itemOver($event, vigor)" />
				</span>
			</div>

			<div class="category-label" v-show="labelManas"> Prismatic Energies </div>

			<div class="hidable statbar" data-key="mana" v-show="showMana">
				<span class="name">mana</span><span class="barspan">
					<progbar class="mana" :value="mana.valueOf()" :max="mana.max.value"
						@mouseenter="itemOver($event, mana)" />
				</span>
			</div>

			<div class="subcategory-label" v-show="labelManaElemental"> Elemental </div>

			<div class="hidable statbar fade-in" v-for="it in visManaElementList" :key="it.key" :data-key="it.id">
				<span class="name">{{ it.name }}</span><span class="barspan">
					<progbar :value="it.valueOf()" :class="it.id" :max="it.max.value" :color="it.color"
						@mouseenter="itemOver($event, it)" />
				</span>
			</div>

			<div class="subcategory-label" v-show="labelManaPrimal"> Primal </div>

			<div class="hidable statbar fade-in" v-for="it in visManaPrimalList" :key="it.key" :data-key="it.id">
				<span class="name">{{ it.name }}</span><span class="barspan">
					<progbar :value="it.valueOf()" :class="it.id" :max="it.max.value" :color="it.color"
						@mouseenter="itemOver($event, it)" />
				</span>
			</div>

			<div class="category-label" v-show="labelManaFundamental"> Fundamental Energies </div>

			<div class="hidable statbar fade-in" v-for="it in visManaFundamentalList" :key="it.key" :data-key="it.id">
				<span class="name">{{ it.name }}</span><span class="barspan">
					<progbar :value="it.valueOf()" :class="it.id" :max="it.max.value" :color="it.color"
						@mouseenter="itemOver($event, it)" />
				</span>
			</div>

			<div class="category-label" v-show="labelSpecialMenace"> Specialties & Menaces </div>

			<div class="hidable statbar fade-in" v-for="it in visSpecials" :key="it.key" :data-key="it.id">
				<span class="name">{{ it.name }}</span><span class="barspan">
					<progbar :value="it.valueOf()" :class="it.id" :max="it.max.value" :color="it.color"
						@mouseenter="itemOver($event, it)" />
				</span>
			</div>

			<div class="hidable statbar" v-for="it in visMenaces" :key="it.key" :data-key="it.id">
				<span class="name">{{ it.name }}</span><span class="barspan">
					<progbar :value="it.valueOf()" :class="it.id" :max="it.max.value" :color="it.color"
						@mouseenter="itemOver($event, it)" />
				</span>
			</div>
			<!--<tr><td>mood</td><td><mood :state="state" /></td></tr>-->
		</div>

	</div>
</template>

<style scoped>
.vitals {
	text-transform: capitalize;
	min-width: 15rem;
	overflow-y: auto;
	overflow-x: hidden;
}

.category-label {
	font-weight: bold;
	text-align: center;
	border-bottom: 1px solid #0006;
}

.subcategory-label {
	text-align: center;
	border-bottom: 1px solid #0006;
}
</style>