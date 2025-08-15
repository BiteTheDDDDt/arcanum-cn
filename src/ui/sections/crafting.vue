<script>
import Game from "@/game";
import ItemBase from "@/ui/itemsBase";
import FilterBox from "@/ui/components/filterbox.vue";
import DropDown from "@/ui/components/dropdown.vue";
import { alphasort, localeLevelsort } from "@/util/util";
import { TYP_RANGE, ENCOUNTER, DUNGEON, LOCALE, CLASH } from "@/values/consts";
import { CRAFT_ITEM } from "@/events";

export default {
	mixins: [ItemBase],
	data() {
		return {
			selectedSlot: null,
			selectedMaterial: null,
			selectedItem: null,
			itemsView: 0,
			materialsView: 0,
		};
	},
	components: {
		filterbox: FilterBox,
		dropdown: DropDown,
	},
	beforeCreate() {
		this.game = Game;
	},
	methods: {
		AssembleItem(mat, item) {
			let a = this.prelimCost(mat, item);
			this.game.payCost(a);
			this.emit(CRAFT_ITEM, mat, item);
		},
		ClearMaterials() {
			this.selectedMaterial = null;
			this.materialsView += 1;
		},
		ClearItemMaterials() {
			this.selectedMaterial = null;
			this.selectedItem = null;
			this.materialsView += 1;
			this.itemsView += 1;
		},
		prelimItem(mat, item) {
			let PrelimItemObj = item ? game.itemGen.instance(item, mat) : {};
			PrelimItemObj.cost = {};
			let totalmult = 1;
			if (mat?.cost) {
				if (mat.craftcostmult) totalmult *= mat.craftcostmult;
				for (let a in mat.cost) {
					PrelimItemObj.cost[a] = mat.cost[a];
				}
			}
			if (item?.cost) {
				if (item.craftcostmult) totalmult *= item.craftcostmult;
				for (let a in item.cost) {
					if (Object.hasOwn(PrelimItemObj.cost, a)) {
						PrelimItemObj.cost[a] += item.cost[a];
					} else PrelimItemObj.cost[a] = item.cost[a];
				}
			}
			if (totalmult != 1) {
				for (let a in PrelimItemObj.cost) {
					PrelimItemObj.cost[a] *= totalmult;
				}
			}
			if (!PrelimItemObj.id) PrelimItemObj.id = "item_preview";
			if (!PrelimItemObj.name) PrelimItemObj.name = "item preview";
			return PrelimItemObj;
		},
		prelimCost(mat, item) {
			let PrelimCost = {};
			let totalmult = 1;
			if (mat?.cost) {
				if (mat.craftcostmult) totalmult *= mat.craftcostmult;
				for (let a in mat.cost) {
					PrelimCost[a] = mat.cost[a];
				}
			}
			if (item?.cost) {
				if (item.craftcostmult) totalmult *= item.craftcostmult;
				for (let a in item.cost) {
					if (Object.hasOwn(PrelimCost, a)) {
						PrelimCost[a] += item.cost[a];
					} else PrelimCost[a] = item.cost[a];
				}
			}
			if (totalmult != 1) {
				for (let a in PrelimCost) {
					PrelimCost[a] *= totalmult;
				}
			}
			return PrelimCost;
		},
		canCraft(mat, item) {
			let a = this.prelimCost(mat, item);
			if (this.game.canPay(a)) return true;
			else return false;
		},
	},
	computed: {
		Slots() {
			let all = [];
			let allslots = this.game.state.equip.slots;
			for (let a in allslots) {
				all.push(allslots[a]);
			}
			return all;
		},
		Items() {
			let all = [];
			if (this.selectedSlot) {
				all = this.game.state.armors
					.filter(v => !v.blocked() && v.slot == this.selectedSlot.id)
					.concat(this.game.state.weapons.filter(v => !v.blocked() && v.slot == this.selectedSlot.id));
			}
			return all;
		},
		Materials() {
			let all = [];
			if (this.selectedItem) {
				all = this.game.itemGen.getAllCompatible(this.game.itemGen.groups.materials, this.selectedItem, 50);
			}
			return all;
		},
	},
};
</script>

<template>
	<div>
		<dropdown
			:key="slotsView"
			label="Slot"
			:options="Slots"
			@change="ClearItemMaterials()"
			show="name"
			disabled="Not selected"
			v-model="selectedSlot"
			:searchable="true" />
		<dropdown
			:key="itemsView"
			label="Item"
			:options="Items"
			@change="ClearMaterials()"
			show="name"
			disabled="Not selected"
			v-model="selectedItem"
			:searchable="true" />
		<dropdown
			:key="materialsView"
			label="Material"
			:options="Materials"
			show="name"
			disabled="Not selected"
			v-model="selectedMaterial"
			:searchable="true" />
		<button
			@click="this.AssembleItem(this.selectedMaterial, this.selectedItem)"
			:disabled="
				!this.selectedMaterial ||
				!this.selectedItem ||
				!this.canCraft(this.selectedMaterial, this.selectedItem) ||
				game.state.inventory.full()
			"
			@mouseenter.capture.stop="itemOver($event, this.prelimItem(this.selectedMaterial, this.selectedItem))">
			Craft
		</button>
	</div>
</template>
