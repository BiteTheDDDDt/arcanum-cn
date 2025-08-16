<script>
import ProgBar from "ui/components/progbar.vue";
import Running from "@/ui/panes/running.vue";
//import Mood from '@/ui/panes/items/mood.vue';
import Settings from "modules/settings";
import Game from "@/game";
import UIMixin from "@/ui/uiMixin";
import ItemBase from "@/ui/itemsBase";

/**
 * Player vital bars.
 */
export default {
	props: ["state"],
	mixins: [ItemBase, UIMixin],
	components: {
		progbar: ProgBar,
		running: Running,
	},
	data() {
		let ops = Settings.getSubVars("");
		if (!ops.hide) ops.hide = {};

		return {
			hide: ops.hide,
		};
	},
	computed: {
		hp() {
			return this.state.getData("hp");
		},
		barrier() {
			return this.state.getData("barrier");
		},
		stamina() {
			return this.state.getData("stamina");
		},
		vigor() {
			return this.state.getData("vigor");
		},
		mana() {
			return this.state.getData("mana");
		},
		manaElementList() {
			return this.state.filterItems(it => it.hasTag("element") && !it.locked);
		},
		visManaElementList() {
			return this.manaElementList.filter(v => this.show(v)).sort((a, b) => a.sortOrder - b.sortOrder);
		},
		manaPrimalList() {
			return this.state.filterItems(it => it.hasTag("primal") && !it.locked);
		},
		visManaPrimalList() {
			return this.manaPrimalList.filter(v => this.show(v)).sort((a, b) => a.sortOrder - b.sortOrder);
		},
		manaFundamentalList() {
			return this.state.filterItems(it => it.hasTag("fundamental") && !it.locked);
		},
		visManaFundamentalList() {
			return this.manaFundamentalList.filter(v => this.show(v)).sort((a, b) => a.sortOrder - b.sortOrder);
		},
		specials() {
			return this.state.filterItems(it => it.hasTag("specialty") && !it.locked);
		},
		visSpecials() {
			return this.specials.filter(v => this.show(v));
		},
		menaces() {
			return this.state.filterItems(it => it.hasTag("menace") && it.value > 0);
		},
		visMenaces() {
			return this.menaces.filter(v => this.show(v));
		},
		labelManaElemental() {
			return this.visManaElementList.length > 0;
		},
		labelManaPrimal() {
			return this.visManaPrimalList.length > 0;
		},
		labelManaFundamental() {
			return this.visManaFundamentalList.length > 0;
		},
		labelSpecialMenace() {
			return this.visMenaces.length > 0 || this.visSpecials.length > 0;
		},
		showMana() {
			return this.show(this.mana) && !this.mana.locked;
		},
		labelManas() {
			return this.showMana || this.labelManaElemental || this.labelManaPrimal || this.labelManaFundamental;
		},
		hideTip() {
			return "用于隐藏或显示条目；此设置会在角色之间保留。"
		},
	},
};
</script>

<template>
	<div class="vitals">
		<running :runner="state.runner" />
		<div class="config"><button type="button" ref="btnHides" class="btnConfig" @mouseenter.capture.stop="itemOver($event, null, null, null, hideTip)"></button></div>
		<!-- anything not a table is a headache -->
		<div class="statbars">
			<div class="category-label">身体</div>
			<div class="hidable statbar" data-key="hp" v-show="show(hp)">
				<span class="name">生命</span>
				<span class="barspan">
					<progbar type="hp" :value="hp.valueOf()" :max="hp.max.value" @mouseenter="itemOver($event, hp)" />
				</span>
			</div>
			<div class="hidable statbar" data-key="barrier" v-show="show(barrier)">
				<span class="name">护盾</span>
				<span class="barspan">
					<progbar
						type="barrier"
						:value="barrier.valueOf()"
						:max="barrier.max.value"
						@mouseenter="itemOver($event, barrier)" />
				</span>
			</div>
			<div class="hidable statbar" data-key="stamina" v-show="show(stamina)">
				<span class="name">体力</span>
				<span class="barspan">
					<progbar
						type="stamina"
						:value="stamina.valueOf()"
						:max="stamina.max.value"
						@mouseenter="itemOver($event, stamina)" />
				</span>
			</div>
			<div class="hidable statbar" data-key="vigor" v-show="show(vigor)">
				<span class="name">活力</span>
				<span class="barspan">
					<progbar
						type="vigor"
						:value="vigor.valueOf()"
						:max="vigor.max.value"
						@mouseenter="itemOver($event, vigor)" />
				</span>
			</div>
			<div class="category-label" v-show="labelManas">光谱能量</div>
			<div class="hidable statbar" data-key="mana" v-show="showMana">
				<span class="name">法力</span>
				<span class="barspan">
					<progbar
						type="mana"
						:value="mana.valueOf()"
						:max="mana.max.value"
						@mouseenter="itemOver($event, mana)" />
				</span>
			</div>
			<div class="subcategory-label" v-show="labelManaElemental">元素</div>
			<div class="hidable statbar fade-in" v-for="it in visManaElementList" :key="it.key" :data-key="it.id">
				<span class="name">{{ it.name }}</span>
				<span class="barspan">
					<progbar
						:value="it.valueOf()"
						:type="it.id"
						:max="it.max.value"
						:color="it.color"
						@mouseenter="itemOver($event, it)" />
				</span>
			</div>
			<div class="subcategory-label" v-show="labelManaPrimal">原初</div>
			<div class="hidable statbar fade-in" v-for="it in visManaPrimalList" :key="it.key" :data-key="it.id">
				<span class="name">{{ it.name }}</span>
				<span class="barspan">
					<progbar
						:value="it.valueOf()"
						:type="it.id"
						:max="it.max.value"
						:color="it.color"
						@mouseenter="itemOver($event, it)" />
				</span>
			</div>
			<div class="category-label" v-show="labelManaFundamental">基础能量</div>
			<div class="hidable statbar fade-in" v-for="it in visManaFundamentalList" :key="it.key" :data-key="it.id">
				<span class="name">{{ it.name }}</span>
				<span class="barspan">
					<progbar
						:value="it.valueOf()"
						:type="it.id"
						:max="it.max.value"
						:color="it.color"
						@mouseenter="itemOver($event, it)" />
				</span>
			</div>
			<div class="category-label" v-show="labelSpecialMenace">专长与威胁</div>
			<div class="hidable statbar fade-in" v-for="it in visSpecials" :key="it.key" :data-key="it.id">
				<span class="name">{{ it.name }}</span>
				<span class="barspan">
					<progbar
						:value="it.valueOf()"
						:type="it.id"
						:max="it.max.value"
						:color="it.color"
						@mouseenter="itemOver($event, it)" />
				</span>
			</div>
			<div class="hidable statbar" v-for="it in visMenaces" :key="it.key" :data-key="it.id">
				<span class="name">{{ it.name }}</span>
				<span class="barspan">
					<progbar
						:value="it.valueOf()"
						:type="it.id"
						:max="it.max.value"
						:color="it.color"
						@mouseenter="itemOver($event, it)" />
				</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
.vitals {
	text-transform: capitalize;
	width: 22rem;
	overflow-y: auto;
	overflow-x: hidden;
}

.compact .vitals {
	font-size: 0.9em;
	width: 18rem;
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
