<script>
import ItemsBase from './itemsBase';
import UIMixin from './uiMixin';
import Settings from 'modules/settings';

import ItemGroup from 'ui/controls/itemGroup.vue';

export default {

	/**
	 * @property {Resource[]} items
	 */
	props:['items'],
	mixins:[ItemsBase, UIMixin],

	data(){

		let ops = Settings.getSubVars('resview');
		if (!ops.hide) ops.hide = {};

		return {

			groups:null,
			hide:ops.hide
		}

	},
	components:{
		group:ItemGroup
	},
	created(){

		let items = this.items;
		let groups = {
			other:[]
		}

		let group;
		let len = items.length;
		for( let i = 0; i < len; i++ ) {

			let it = items[i];

			if ( it.group ) {
				group = groups[it.group] || ( groups[it.group] = [] );
			} else group = groups.other;

			group.push(it );

		}

		this.groups = groups;

	},
	computed:{
		all(){ return this.items.filter( v=>!v.hasTag('manas')&&v.hide!==true&&v.id!=='space'&&!this.reslocked(v)) },
		shown(){ return this.all.filter(v=>this.show(v)); }
	}

}
</script>


<template>
<div class="res-list">

		<!--<div class="config"><button ref="btnHides" class="btnConfig"></button></div>-->

		<group v-for="(g,p) in groups" :items="g" :group="p" :key="p" />

</div>
</template>

<style scoped>


div.res-list {
	overflow-y:auto;
	overflow-x:visible;
	width: fit-content;
	margin: 0; padding: 0;
	min-width: 11rem;
}

</style>