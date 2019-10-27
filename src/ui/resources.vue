<script>
import ItemsBase from './itemsBase';
import UIMixin from './uiMixin';

export default {

	props:['items'],
	mixins:[ItemsBase, UIMixin],

	computed:{
		all(){
			return this.items.filter( v=>!v.hasTag('manas')&&v.id!=='space')
		},
	}

}
</script>


<template>
<div class="res-list">

		<div><button ref="btnHides" class="text-button">&#9881;</button></div>
		<div :class="{'rsrc':true, locked:reslocked(it)||hide(it) }" v-for="it in all"
			:data-key="it.id" :key="it.id" ref="hidables"
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
	margin: 0; padding: var(--sm-gap);
	min-width: 200px;
}

div.res-list .rsrc {
	display: flex;
	padding: var(--tiny-gap);
}

.rsrc .item-name {
	flex:1;
	color:#999;
	padding-right: 6px;
}

</style>