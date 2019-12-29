<script>
export default {

	/**
	 * @property {Inventory} eslots - running enchantment slots.
	 * @property {Inventory} inv - player inventory.
	 */
	props:[ 'eslots', 'inv'],
	computed:{

	},
	methods:{

		canTake(it){
			return it.target && this.inv.canAdd(it.target);
		},

		onTake( it ){

			if ( !this.inv.canAdd(it.target) ) return;

			this.inv.add(it.target);
			this.eslots.remove(it);

		}

	}

}
</script>

<template>

<div class="enchant-slots">

<div class="enchant-slot" v-for="s in eslots.items" :key="s.id">

<span class="enchant-desc">
<span class="item-name">{{s.target.name}}</span>
<span class="enchant-name">{{s.item.name}}</span>
</span>
<span>s.percent()</span>

<button class="btn-take" :disabled="!canTake(s)" @click="onTake(s)">{{ s.done ? 'take' : 'cancel' }}</button>

</div>

</div>

</template>

<style scoped>

.item-name {
	font-size: 0.9em;
}

.enchant-name {
	font-size: 0.8em;
}

</style>