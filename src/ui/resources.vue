<script>
import ItemsBase from './itemsBase.js';

export default {

	props:['items'],
	mixins:[ItemsBase],

	computed:{
		displayed(){
			return this.items.filter( v=>!v.hasTag('manas')&&v.id!=='space')
		}
	}

}
</script>


<template>
<div class="resource-list">

		<tr :class="{'item-name':true, locked:reslocked(it)}" v-for="it in displayed" :key="it.id"
			@mouseenter.capture.stop="emit( 'itemover',$event,it)">

			<td>{{ it.name }}</td>
			<td class="num-align">{{ floor( it.value ) + ( it.max && it.max.value>0 ? '/' + floor(it.max.value) : '' )}}</td>
			<!--<td>{{ it.delta != 0 ? '&nbsp;(' + it.delta.toFixed(2) + '/t )' : ''}}</td>-->

		</tr>

</div>
</template>

<style scoped>

div.resource-list {
	overflow-y:auto;
	overflow-x:visible;
	width: fit-content;
	padding-right:4px;
	padding-top:8px;
	min-width: 160px;
}

tr td:first-child {
	padding-right: 6px;
}

</style>