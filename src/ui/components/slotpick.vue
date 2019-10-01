<script>
import Game from '../../game';

import ItemsBase from '../itemsBase.js';
import { SET_SLOT } from '../../events';

/**
 * Component to pick current slot item from all available slot items.
 */
export default {

	/**
	 * @property {string} pick - slot to pick item for. (slot is Vue reserved)
	 * @property {?string} slotName - name to display to user. defaults to slot.
	 * @property {?Item[]} choices - list of items to filter. if not set, all game items are tested
	 * for a matching slot property.
	 * @property {?string} pickEvent - event to emit on item picked.
	 */
	props:['pick', 'slotName', 'choices', 'pickEvent'],
	mixins:[ItemsBase],
	data(){
		return {
			changing:false,
			pEvent:this.pickEvent||SET_SLOT
		};
	},
	methods:{

		toggleChange(){
			this.changing = !this.changing;
		}

	},
	computed:{

		/**
		 * Item currently in slot, or null.
		 */
		curItem(){
			return Game.state.getSlot(this.pick);
		},

		avail() {
			return this.choices ? this.choices :
			Game.state.filterItems( v=>v.slot===this.pick&&!v.locked&&v.owned );
		}

	}

}
</script>

<template>
<div>

	<span v-if="slotName">{{slotName}}:</span><span @mouseenter.capture.stop="emit( 'itemover',$event,curItem)">{{ curItem ? curItem.name : 'None'}}</span>
	<div class="inline" v-if="avail.length>0">
	<button @click="toggleChange">{{ changing ? 'Done' : 'Choose' }}</button>

	<div class="upgrade-list" v-if="changing">

		<span class="action-btn" v-for="it in avail" :key="it.id"
			@mouseenter.capture.stop="emit( 'itemover', $event,it)">

		<button
			class="wrapped-btn"
			:disabled="!usable(it)"
			@click="emit( pEvent, it)">{{ it.name || it.id }}</button>
		</span>

	</div>

	</div>

</div>
</template>

<style scoped>

</style>