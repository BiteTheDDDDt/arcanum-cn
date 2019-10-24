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
	 * @property {?string} title - name to display to user. defaults to pick.
	 * @property {?Item[]} choices - list of items to filter. if not set, all game items are tested
	 * for a matching slot property.
	 * @property {?string} pickEvent - event to emit on item picked.
	 */
	props:['pick', 'title', 'choices', 'pickEvent'],
	mixins:[ItemsBase],
	data(){
		return {
			pEvent:this.pickEvent||SET_SLOT
		};
	},
	methods:{

		toggleChange(){ this.changing = !this.changing; },

		select(){

			console.log('SELECTING ' +  this.pick);
			// @todo messy to emit. hard to config with Vue.
			this.emit( 'choice', this.avail, (p)=>{

				this.emit( SET_SLOT, p );

			}, this.$el, this.title||this.pick );

		}


	},
	computed:{

		/**
		 * Item currently in slot, or null.
		 */
		curItem(){ return Game.state.getSlot(this.pick); },

		avail() {
			return this.choices ? this.choices :
			Game.state.filterItems( v=>v.slot===this.pick&&!v.locked&&(!v.buy||v.owned) );
		}

	}

}
</script>

<template>
<div>

	<span v-if="title">{{title}}:</span><span @mouseenter.capture.stop="emit( 'itemover',$event,curItem)">
		<button @click="select" v-if="avail.length>0">{{ curItem ? curItem.name : 'None'}}</button>
	</span>

</div>
</template>

<style scoped>

</style>