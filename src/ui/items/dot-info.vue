<script>
import ItemsBase from "@/ui/itemsBase";
import InfoBlock from "@/ui/items/info-block.vue";
import DamageMixin from "@/ui/items/damageMixin.js";
import game from "@/game";
import Summon from "@/ui/items/summon.vue";
import HealingMixin from "@/ui/items/healingMixin.js";
import { defineAsyncComponent } from "vue";
import { TYP_PCT } from "@/values/consts";

/**
 * This is the dot InfoBlock in an info-popup, not the dotView in window.
 */
export default {
	props: ["dot", "title", "item", "target"],
	name: "dot",
	mixins: [ItemsBase, DamageMixin(), HealingMixin()],
	components: {
		gdata: defineAsyncComponent(() => import(/* webpackChunkName: "gdata-ui" */ "./gdata.vue")),
		info: InfoBlock,
		Summon,
		attack: defineAsyncComponent(() => import("./attack.vue")),
	},
	computed: {
		percent() {
			return this.dot[TYP_PCT];
		},
		damage() {
			return this.getDamage(this.dot);
		},
		healing() {
			return this.getHealing(this.dot);
		},
		leech() {
			return this.dot.leech * 100 + "%";
		},
		name() {
			return this.dot.name || this.dot.id || this.item?.name;
		},
		potency() {
			let potencystring = "";
			for (let a of this.dot.potencies) {
				if (potencystring != "") potencystring = potencystring.concat(", ");
				potencystring = potencystring.concat(game.state.getData(a).name.replace(" potency", "").toTitleCase());
			}
			return potencystring;
		},
	},
};
</script>

<template>
	<div class="dot">
		<div v-if="title" class="note-text">{{ title }}:</div>

		<div v-if="Array.isArray(dot)">
			<div v-for="(dots, idx) in dot" :key="'dot-' + idx">
				<div v-if="idx !== 0" class="info-sect"></div>
				<dot-info :dot="dots" :item="this.item" :target="this.target" />
			</div>
		</div>
		<div v-else>
			<div v-if="name && item?.name !== name">
				<span>Name: </span><span>{{ name.toString().toTitleCase() }}</span>
			</div>
			<div>
				<div v-if="!dot.damage && !dot.dmg && !dot.effect && !dot.mod && !name">
					<div v-if="dot.id">Id: {{ dot.id.toString().toTitleCase() }}</div>
				</div>
			</div>
			<div v-if="percent">
				<div>Chance to apply: {{ percent }}</div>
			</div>
			<div>
				<div v-if="displayDamage(dot)">
					<span>Estimated damage: </span><span>{{ damage }}</span>
					<div v-if="dot.kind">Damage Type: {{ dot.kind.toString().toTitleCase() }}</div>
					<div v-if="dot.potencies?.length === 1">Scales With: {{ potency }} Potency</div>
					<div v-if="dot.potencies?.length > 1">Scales With: {{ potency }} Potencies</div>
					<div v-if="dot.leech">Returns {{ leech }} of damage as healing</div>
					<div v-if="dot.nodefense">Ignores defense</div>
				</div>
				<div v-if="displayHealing(dot)">
					<span>Estimated healing: </span><span>{{ healing }}</span>
					<div v-if="dot.kind">Heal Type: {{ dot.kind.toString().toTitleCase() }}</div>
					<div v-if="dot.potencies?.length === 1">Scales With: {{ potency }} Potency</div>
					<div v-if="dot.potencies?.length > 1">Scales With: {{ potency }} Potencies</div>
				</div>
				<div v-if="dot.duration">Duration: {{ dot.duration + "s" || "infinity" }}</div>
			</div>
			<div v-if="dot.conditiontext">
				<div class="info-sect">Has a conditional effect:</div>
				<div>
					{{ dot.conditiontext }}
				</div>
			</div>
			<div v-if="dot.removedot">
				<div>This dot will be removed</div>
			</div>
			<div v-if="dot.conditional?.onSuccess">
				<div class="info-subsect">When condition is met</div>
				<dot-info :dot="dot.conditional.onSuccess" :item="this.item" :target="this.target" />
			</div>
			<div v-if="dot.conditional?.onFailure">
				<div class="info-subsect">When condition is not met</div>
				<dot-info :dot="dot.conditional.onFailure" :item="this.item" :target="this.target" />
			</div>
			<div v-if="dot.effect">
				<div class="info-sect">Effects</div>
				<info :info="dot.effect" rate="true" />
			</div>
			<div v-if="dot.summon">
				<div class="info-sect">Summons</div>
				<Summon :item="dot" class="info-subsubsect" />
			</div>
			<div v-if="dot.mod">
				<div class="info-sect">Modifications</div>
				<info v-if="this.target === 'allies'" :info="dot.mod" :target="'friendly allies'" />
				<info v-else :info="dot.mod" :target="this.target" />
			</div>
			<div v-if="dot.attack">
				<div class="info-sect">Attack</div>
				<attack :item="dot" class="info-subsubsect" />
			</div>
			<div v-if="dot.onExpire">
				<div class="info-sect">On expiration</div>
				<attack :item="dot" onexpireflag="true" class="info-subsubsect" />
			</div>
			<div v-if="dot.onHit">
				<div class="info-sect">When struck directly</div>
				<attack :item="dot" onhitflag="true" class="info-subsubsect" />
			</div>
			<div v-if="dot.onMiss">
				<div class="info-sect">After dodging an attack</div>
				<attack :item="dot" onmissflag="true" class="info-subsubsect" />
			</div>
			<div v-if="dot.onDeath">
				<div class="info-sect">When target killed</div>
				<attack :item="dot" ondeathflag="true" class="info-subsubsect" />
			</div>
		</div>
	</div>
</template>
