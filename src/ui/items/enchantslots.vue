<script>
export default {
	/**
	 * @property {Inventory} eslots - running enchantment slots.
	 * @property {Inventory} inv - player inventory.
	 */
	props: ["eslots", "inv"],
	computed: {},
	methods: {
		canTake(it) {
			return it.target && this.inv.canAdd(it.target);
		},

		onTake(it) {
			if (!this.inv.canAdd(it.target)) return;

			this.inv.add(it.target);
			this.eslots.remove(it);
		},
	},
};
</script>

<template>
	<div class="enchant-slots">
		<span>{{ Math.floor(eslots.used) }} / {{ Math.floor(eslots.max) }} Enchanting Power used. </span>
		<div class="enchant-slot" v-for="s in eslots.items" :key="s.id">
			<span class="enchant-desc">
				<span>Level {{ s.item.level }}</span>
				<span class="item-name" @mouseenter.capture.stop="itemOver($event, s.target)">
					{{ s.target.name.toTitleCase() }}
				</span>
				<span class="enchant-name" @mouseenter.capture.stop="itemOver($event, s.item)">
					{{ s.item.name.toTitleCase() }}
				</span>
			</span>
			<span>{{ s.percent() + "%" }}</span>

			<button type="button" class="btn-take" :disabled="!canTake(s)" @click="onTake(s)">
				{{ s.done ? "take" : "cancel" }}
			</button>
		</div>
	</div>
</template>

<style scoped>
.enchant-slots span {
	font-size: 0.9em;
}

/*.item-name {
}

.enchant-name {
	font-size: 0.9em;
}*/
</style>
