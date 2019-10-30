<script>
import ItemsBase from './itemsBase';
import UIMixin from './uiMixin';
import Settings from 'modules/settings';

export default {

	props:['items'],
	mixins:[ItemsBase, UIMixin],

	data(){

		let ops = Settings.getSubVars('resview');
		if (!ops.hide) ops.hide = {};

		return {
			hide:ops.hide
		}

	},

	computed:{
		all(){ return this.items.filter( v=>!v.hasTag('manas')&&v.id!=='space'&&!this.reslocked(v)) },
		shown(){ return this.all.filter(v=>this.show(v)); }
	}

}
</script>


<template>
<div class="res-list">

		<div class="config"><button ref="btnHides" class="btnConfig">&#9881;</button></div>
		<div class="rsrc hidable" v-for="it in shown"
			:data-key="it.id" :key="it.id"
			@mouseenter.capture.stop="emit( 'itemover',$event,it)">

			<span class="item-name">{{ it.name }}</span>
			<span class="num-align">{{ floor( it.value ) + ( it.max && it.max.value>0 ? '/' + floor(it.max.value) : '' )}}</span>
			<!--<td>{{ it.delta != 0 ? '&nbsp;(' + it.delta.toFixed(2) + '/t )' : ''}}</td>-->

		</div>

</div>
</template>

<style scoped>


div.res-list {
	overflow-y:auto;
	overflow-x:visible;
	width: fit-content;
	margin: 0; padding: 0 var(--tiny-gap);
	min-width: 200px;
}

.rsrc {
	display:flex;
	justify-content: space-between;
}

.rsrc .item-name {
	flex:1;
	color:#999;
	padding-right: 6px;
}

</style>