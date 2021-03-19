<script>

export default {

	props:['equip']

}
</script>


<template>

	<div class="equip">

		<div class="equip-slot" v-for="(slot,p) in equip.slots" :key="p">
			<td class="slot-name">{{ slot.name + ':' }}</td>
			<td class="slot-item" v-if="slot.empty()"></td>
			<td class="sub-slots" v-else-if="slot.multi">

				<div class="slot-item" v-for="it in slot.item" :key="it.id" @mouseenter.capture.stop="itemOver($event,it)">
					 <button class="remove" @click="emit('unequip', slot, it)">X</button><span class="item-name">{{ it.name.toTitleCase() }}</span>
				</div>
			</td>
			<td class="slot-item" v-else>
				<div @mouseenter.capture.stop="itemOver($event,slot.item)">
					<button class="remove" @click="emit('unequip', slot, slot.item )">X</button><span class="item-name">{{ slot.item.name.toTitleCase() }}</span>
				</div>

			</td>
		</div>

	</div>

</template>

<style scoped>



.equip {
    overflow-y: auto;
    display: grid; grid-template-columns: repeat( auto-fill, minmax(11rem,1fr)); grid-gap: var(--sm-gap); padding: var(--tiny-gap);

 }
.equip .equip-slot {
     display: flex;height: unset; flex-flow: column; margin: 0; padding: var(--sm-gap);
}
.equip .equip-slot .slot-item {
    display:flex;
}

.equip-slot .subslots {
	display: flex; flex-flow: column; text-indent: 1em;

}

.equip-slot {
	display:flex;
	margin: var(--tiny-gap) 0;
}

.equip-slot button {
	margin-left: var(--sm-gap);
	padding: 0.4em;
}


td.slot-name {
	font-weight: bold;
}

</style>
