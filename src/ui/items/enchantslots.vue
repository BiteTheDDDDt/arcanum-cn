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
			return this.inv.canAdd(it);
		},

		onTake( it ){

			if ( !this.inv.canAdd(it) )return;

			this.inv.add(it);
			this.eslots.remove(it);

		}

	}

}
</script>

<template>

<div class="enchant-slots">

<div class="enchant-slot" v-for="s in eslots" :key="s.id">

<span class="enchant-desc">
<span class="item-name">s.target.name</span>
<span class="enchant-name">s.item.name</span>
</span>
<button class="btn-take">{{ s.done ? 'take' : 'cancel' }}</button>

</div>

</div>

</template>

<style scoped>

</style>