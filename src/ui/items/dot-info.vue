<script>
import ItemsBase from '../itemsBase';
import InfoBlock from './info-block.vue';
import DamageMixin from './damageMixin.js';
import game from '../../game';
import Summon from './summon.vue';

/**
 * This is the dot InfoBlock in an info-popup, not the dotView in window.
 */
export default {

	props: ['dot', 'title', 'item', 'target'],
	name: 'dot',
	mixins: [ItemsBase, DamageMixin()],
	components: {
		gdata: () => import(/* webpackChunkName: "gdata-ui" */ './gdata.vue'),
		info: InfoBlock,
		Summon
	},
	computed: {

		damage() {
			return this.getDamage(this.dot);
		},
		name() {
			return this.dot.name || this.dot.id || this.item?.name;
		},
		potency() {
			let potencystring = ""
			for (let a of this.dot.potencies) {
				if (potencystring != "") potencystring = potencystring.concat(", ");
				potencystring = potencystring.concat(game.state.getData(a).name.replace(" damage","").toTitleCase())
			}
			return potencystring
		}


	},
	beforeCreate() {
		this.$options.components.attack = require('./attack.vue').default;
	}

}
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
				<div v-if="!dot.damage && !dot.dmg && !dot.effect && !dot.mod && name !== dot.id">
					<div v-if="dot.id">Id: {{ dot.id.toString().toTitleCase() }}</div>
				</div>
			</div>
			<div>
				<div v-if="displayDamage(dot)">
					<span>Estimated damage: </span><span>{{ damage }}</span>
				</div>
				<div v-if="dot.kind">Kind: {{ dot.kind.toString().toTitleCase() }}</div>
				<div v-if="dot.duration">Duration: {{ dot.duration + "s" || 'infinity' }}</div>
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
				<info :info="dot.mod" :target="this.target" />
			</div>
			<div v-if="dot.attack">
				<div class="info-sect">Attack</div>
				<attack :item="dot" class="info-subsubsect" />
			</div>
		</div>
	</div>
</template>